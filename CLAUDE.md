# TrainingPeaks - Preparacion El Soplao 2026

## Estructura del proyecto

```
trainingpeaks/
├── CLAUDE.md                 # este fichero, contexto del proyecto
├── plan.json                 # PLAN UNICO con todos los workouts (tapering 1-23 may)
├── calendar.html             # visor del plan (lee plan.json via fetch)
├── .mcp.json                 # config Claude Code -> MCP TrainingPeaks
├── .claude/                  # settings locales de Claude Code
│
├── archive/                  # historico TrainingPeaks (read-only)
│   ├── metrics.csv           # Body Battery, HRV, sueño, pulso reposo (mar-abr 2026)
│   ├── workouts.csv          # entrenamientos feb-abr 2026 con TSS, FC, distancia
│   ├── fit_files/            # 35 ficheros FIT originales de Garmin (mar-abr)
│   ├── tp_exports/           # los 3 .zip originales descargados de TrainingPeaks
│   └── zwo/                  # workouts .zwo generados 5 may (sesiones 5-10 may)
│
└── trainingpeaks-mcp/        # servidor MCP (codigo + .venv + git propio)
```

## Contexto del Atleta
- **Nombre:** David Prado
- **Email TP:** davidpradoTP@gmail.com
- **Athlete ID:** 6257536
- **Objetivo:** Carrera de trail El Soplao, **23 de mayo de 2026**
- **Lesion actual:** Periostitis tibial bilateral (predominante en tibia izquierda)
- **Preparador previo:** 2 meses entrenando con preparador, tuvo que parar por la lesion

## Estado de la Lesion (a 30 abril 2026)
- Dolor tibial progresivo desde marzo 2026
- Cronologia: molestias soleo izq (7-13 mar) → dolor tibia (1 abr) → tibial bilateral (25-29 abr)
- Ultimo comentario (29 abr): "me molestaba el tibial y hoy ando con molestias en tibial izquierdo"
- Causa identificada: picos de carga (TSS 213 el 28 mar, semana de 418 TSS del 1-5 abr) + densidad excesiva de series/cuestas + gimnasio de pierna intenso

## Picos de Carga Identificados
- **Sem 25 mar:** ~386 TSS (series potencia cuesta 16.9km = 213 TSS)
- **Sem 1 abr:** ~418 TSS (la mas alta del periodo)
- **Sem 22 abr:** ~281 TSS con 3 sesiones de alta intensidad y tibial ya inflamado

## Hitos del Calendario
- **Hoy:** Martes 5 mayo 2026
- **Carrera intermedia:** Domingo 10 mayo - 16km +400m (como entreno largo Z2-Z3, NO competicion)
- **Viaje Canarias:** Viernes 15 - Miercoles 20 mayo (con 1 sesion trote montaña dia 16)
- **OBJETIVO:** Sabado 23 mayo - El Soplao

## Estado actual (5 mayo 2026)

**Fuente de verdad: TrainingPeaks (consultar via MCP `tp_get_workouts`).** El `plan.json` local refleja el plan diseñado pero TP puede divergir tras decisiones semana a semana. Si MCP da 402 (paywall plan futuro), `plan.json` es el respaldo.

**Secuencia ejecutada hasta hoy:**
- 28 abr (mar): Series 8.8km - 114 TSS (ultimo pico de intensidad)
- 29 abr (mié): Aerobico facil montaña - 90 TSS (planeado 40, se paso)
- 30 abr - 3 may: DESCANSO TOTAL (4 dias, decision conservadora)
- 4 may (lun): Descanso + masaje + Rutina A tibial - completado
- **5 may (mar) - HOY:** Bici reactivacion Z1-Z2 45min, 30 TSS - planificado en TP

**Metricas hoy (5 may) - LUZ VERDE:**
- HRV: 93 (basal ~75) - supercompensacion
- Pulso reposo: 44 (basal 49-51) - por debajo del basal
- Body Battery medio: 65 (max 95)
- Sueño: 7.1h
- Sin señales ambar/rojas

**Plan acordado 6-10 may (NO en TP por paywall, ficheros .zwo en `archive/zwo/`):**
| Día | Sesión | TSS | Fichero ZWO |
|-----|--------|-----|-------------|
| Mié 6 may | Trote test hierba 25min Z2 (filtro pre-16km) | 22 | `archive/zwo/trote_test_hierba_6may.zwo` |
| Jue 7 may | DESCANSO TOTAL | 0 | — |
| Vie 8 may | Bici Z1-Z2 30min + Rutina B ligera | 20 | `archive/zwo/bici_z1z2_8may.zwo` |
| Sáb 9 may | DESCANSO o paseo 30min | 0 | — |
| Dom 10 may | Carrera 16km +400m Z2-Z3 | 130-150 | `archive/zwo/carrera_16km_10may.zwo` |

Total semana ~200 TSS. Bici de hoy (5 may) ya tiene fichero: `archive/zwo/bici_descarga_z1z2_5may.zwo`.

**Decision herramienta planificacion:** TrainingPeaks gratis bloquea planificar futuro -> usar **Garmin Connect** (importar `.zwo` convertidos a `.fit` o crear manualmente) hasta el 23 may. Post-Soplao evaluar intervals.icu como plataforma definitiva.

## Plan de Tapering (referencia) - 4 fases
- **Fase 1 (Vie 1 - Vie 8 may):** Descarga aguda pre-16km, ~160 TSS, 60% bici/eliptica
- **Fase 2 (Sab 9 - Mie 13 may):** Carrera 16km + recuperacion post, ~190 TSS
- **Fase 3 (Jue 14 - Mie 20 may):** Canarias, ~100 TSS (1 trote montaña + cruzado)
- **Fase 4 (Jue 21 - Sab 23 may):** Pre-Soplao, ~12 TSS + carrera
- **Restricciones:** 60% entrenamiento cruzado, cero series velocidad, cero cuestas explosivas, dolor max 2/10, terreno blando obligatorio
- **Detalle dia a dia:** `plan.json` (tambien embebido como fallback en `calendar.html`)

## Metricas de Alarma
- Dolor tibial >2/10 durante carrera → sustituir por bici
- Body Battery avg <40 dos dias seguidos → dia extra descanso
- Pulso reposo >55 bpm (media normal: 49-51) → reducir volumen
- HRV <65 (media normal: ~75) → reducir volumen

## Rutinas de Fuerza Tibial
- **Rutina A:** Tibial anterior sentado, soleo sentado tempo 3-1-3, caminar talones, gemelo unipodal, inversiones tobillo
- **Rutina B:** Excentrico gemelo escalon, soleo isometrico pared, dorsiflexion banda, sentadilla parcial unipodal, foam roller

## Infraestructura MCP
- **TrainingPeaks MCP Server:** `./trainingpeaks-mcp/` (codigo + venv)
- **Venv:** `./trainingpeaks-mcp/.venv/` (paths absolutos embebidos, no mover)
- **Autenticacion:** Cookie en fichero encriptado (keyring Windows no soporta tokens largos)
- **Config:** `.mcp.json` en raiz del proyecto
- **Capacidades:** Lectura calendario, metricas fitness, PRs, crear/editar entrenamientos, gestionar zonas
- **Limitacion conocida:** TP plan gratuito devuelve 402 al pedir fitness avanzado o planificar futuro

## Skill Personalizada
- **Skill:** `entrenador-trail` (en `~/.claude/skills/entrenador-trail/SKILL.md`)
- **Invocacion:** `/entrenador-trail`
- **Funcion:** Cargar rol completo de entrenador con contexto de lesion, restricciones, metricas de alarma y workflow MCP

## Zonas FC Estimadas (a partir de datos historicos)
- **Z1 recovery:** <130 bpm
- **Z2 aerobic easy:** 130-150 bpm
- **Z3 aerobic moderate:** 150-165 bpm
- **Z4 threshold:** 165-175 bpm
- **Z5 VO2:** 175-185 bpm
- Pulso reposo basal: 49-51 bpm | FC max observada: 200 bpm
