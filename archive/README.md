# archive/

Histórico exportado de TrainingPeaks. Read-only. No tocar salvo añadir nuevas exportaciones.

## Contenido

- **`metrics.csv`** — Body Battery, HRV, sueño, pulso reposo (mar-abr 2026). Exportado de TP el 30 abr 2026.
- **`workouts.csv`** — Todos los entrenamientos feb-abr 2026 con TSS, FC, distancia, comentarios. Exportado de TP el 30 abr 2026.
- **`fit_files/`** — 35 ficheros `.FIT.gz` originales de Garmin (mar-abr 2026). Exportados desde TP.
- **`tp_exports/`** — los 3 `.zip` originales descargados de TP (Metrics, Workout, WorkoutFile). Backup completo por si hay que rehidratar.
- **`zwo/`** — 4 workouts `.zwo` generados el 5 may para sesiones del 5-10 may. La info estructurada equivalente está en `../plan.json`. Conservados aquí por si se necesitan importar a Garmin Connect / Zwift / TrainerRoad.

## Cómo regenerar/actualizar

Para futuras exportaciones de TP:
1. Web TrainingPeaks → Settings → Export Data
2. Descargar los 3 zips a `archive/tp_exports/`
3. Descomprimir CSVs a `archive/`
4. Descomprimir FIT a `archive/fit_files/`
