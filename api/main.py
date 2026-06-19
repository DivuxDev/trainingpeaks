import asyncio
import os
import time
from typing import Optional

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="TrainingPeaks Bridge")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

TP_API_BASE = "https://tpapi.trainingpeaks.com"
ATHLETE_ID = int(os.getenv("TP_ATHLETE_ID", "6257536"))
TP_AUTH_COOKIE = os.getenv("TP_AUTH_COOKIE", "")

SPORT_TYPE_MAP = {
    "Run":        (3, 3),
    "Bike":       (2, 2),
    "Strength":   (9, 9),
    "Crosstrain": (5, 5),
    "DayOff":     (7, 7),
    "Walk":       (13, 13),
    "Other":      (100, 100),
}

# Map plan.js sport names → TP sport names where they differ
SPORT_REMAP = {
    "Other": "Crosstrain",
}

_access_token: Optional[str] = None
_token_expires_at: float = 0.0
_token_lock = asyncio.Lock()


async def get_access_token() -> str:
    global _access_token, _token_expires_at

    if _access_token and time.time() < _token_expires_at - 60:
        return _access_token

    async with _token_lock:
        if _access_token and time.time() < _token_expires_at - 60:
            return _access_token

        if not TP_AUTH_COOKIE:
            raise HTTPException(500, "TP_AUTH_COOKIE no configurada")

        async with httpx.AsyncClient(timeout=20) as client:
            resp = await client.get(
                f"{TP_API_BASE}/users/v3/token",
                headers={"Cookie": f"Production_tpAuth={TP_AUTH_COOKIE}"},
            )

        if resp.status_code == 401:
            raise HTTPException(401, "Cookie TP caducada — actualiza TP_AUTH_COOKIE")
        if not resp.is_success:
            raise HTTPException(resp.status_code, f"Error auth TP: {resp.text[:200]}")

        token = resp.json()["token"]
        _access_token = token["access_token"]
        _token_expires_at = time.time() + token["expires_in"]
        return _access_token


async def tp_request(method: str, path: str, **kwargs) -> httpx.Response:
    token = await get_access_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    async with httpx.AsyncClient(timeout=30) as client:
        return await client.request(
            method, f"{TP_API_BASE}{path}", headers=headers, **kwargs
        )


# ── Models ────────────────────────────────────────────────────────────────────

class WorkoutIn(BaseModel):
    date: str
    sport: str
    title: str
    duration_minutes: Optional[float] = None
    distance_km: Optional[float] = None
    tss_planned: Optional[float] = None
    description: Optional[str] = None


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/health")
async def health():
    return {"ok": True}


@app.get("/auth/status")
async def auth_status():
    try:
        await get_access_token()
        return {"ok": True}
    except HTTPException as e:
        return {"ok": False, "error": e.detail}


@app.get("/workouts")
async def list_workouts(start: str, end: str):
    resp = await tp_request("GET", f"/fitness/v6/athletes/{ATHLETE_ID}/workouts/{start}/{end}")
    if not resp.is_success:
        raise HTTPException(resp.status_code, resp.text[:300])
    return resp.json()


@app.post("/workouts", status_code=201)
async def create_workout(w: WorkoutIn):
    sport = SPORT_REMAP.get(w.sport, w.sport)
    if sport not in SPORT_TYPE_MAP:
        sport = "Other"
    family_id, type_id = SPORT_TYPE_MAP[sport]

    payload: dict = {
        "athleteId": ATHLETE_ID,
        "workoutDay": f"{w.date}T00:00:00",
        "workoutTypeFamilyId": family_id,
        "workoutTypeValueId": type_id,
        "title": w.title,
    }
    if w.duration_minutes is not None:
        payload["totalTimePlanned"] = w.duration_minutes / 60.0
    if w.distance_km is not None:
        payload["distancePlanned"] = w.distance_km * 1000
    if w.tss_planned is not None:
        payload["tssPlanned"] = w.tss_planned
    if w.description:
        payload["description"] = w.description

    resp = await tp_request(
        "POST", f"/fitness/v6/athletes/{ATHLETE_ID}/workouts", json=payload
    )

    if resp.status_code == 402:
        raise HTTPException(
            402,
            "Plan gratuito TP no permite planificar en fechas futuras. "
            "El workout no fue creado.",
        )
    if not resp.is_success:
        raise HTTPException(resp.status_code, resp.text[:300])

    data = resp.json()
    return {
        "ok": True,
        "workout_id": data.get("workoutId") or data.get("id"),
        "date": w.date,
        "title": w.title,
    }


@app.put("/workouts/{workout_id}")
async def update_workout(workout_id: str, w: WorkoutIn):
    get_resp = await tp_request(
        "GET", f"/fitness/v6/athletes/{ATHLETE_ID}/workouts/{workout_id}"
    )
    if not get_resp.is_success:
        raise HTTPException(get_resp.status_code, get_resp.text[:300])

    existing = get_resp.json()

    if w.title:
        existing["title"] = w.title
    if w.duration_minutes is not None:
        existing["totalTimePlanned"] = w.duration_minutes / 60.0
    if w.distance_km is not None:
        existing["distancePlanned"] = w.distance_km * 1000
    if w.tss_planned is not None:
        existing["tssPlanned"] = w.tss_planned
    if w.description is not None:
        existing["description"] = w.description

    put_resp = await tp_request(
        "PUT",
        f"/fitness/v6/athletes/{ATHLETE_ID}/workouts/{workout_id}",
        json=existing,
    )
    if not put_resp.is_success:
        raise HTTPException(put_resp.status_code, put_resp.text[:300])

    return {"ok": True, "workout_id": workout_id}


@app.delete("/workouts/{workout_id}")
async def delete_workout(workout_id: str):
    resp = await tp_request(
        "DELETE", f"/fitness/v6/athletes/{ATHLETE_ID}/workouts/{workout_id}"
    )
    if resp.status_code not in (200, 204):
        raise HTTPException(resp.status_code, resp.text[:300])
    return {"ok": True}
