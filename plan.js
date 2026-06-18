const PLAN_DATA = {
  "athlete": {
    "name": "David Prado",
    "athleteId": 6257536,
    "email": "davidpradoTP@gmail.com"
  },
  "plan": {
    "name": "Mantenimiento y Cobreces 2026",
    "startDate": "2026-05-06",
    "endDate": "2026-06-30",
    "targetEvent": {
      "date": "2026-06-21",
      "name": "Speed Trail Cobreces 16K +600m"
    },
    "completedEvent": {
      "date": "2026-05-23",
      "name": "El Soplao 21km +800m — COMPLETADO",
      "result": "21.29km · 2h51min · TSS 234.85 · tibial OK"
    },
    "phases": [
      {
        "name": "Recuperacion post-Soplao",
        "start": "2026-05-23",
        "end": "2026-05-31",
        "tssTarget": 60,
        "notes": "Carga minima. Drenaje y trotes muy suaves. Sin gimnasio hasta semana 1 junio."
      },
      {
        "name": "Recuperacion activa",
        "start": "2026-06-01",
        "end": "2026-06-07",
        "tssTarget": 165,
        "notes": "Volumen suave. Primer gimnasio de pierna LIGERO el lunes 1 jun."
      },
      {
        "name": "Ultima semana de carga",
        "start": "2026-06-08",
        "end": "2026-06-14",
        "tssTarget": 220,
        "notes": "Unica semana real de estimulo antes de Cobreces. Un progresivo Z3, una tirada 1h10. Ultimo gimnasio de pierna el lunes 8."
      },
      {
        "name": "Taper Cobreces",
        "start": "2026-06-15",
        "end": "2026-06-21",
        "tssTarget": 70,
        "notes": "Llegar fresco. Sin pierna de gym desde el 14. Activacion jueves 18 + strides. Descanso o paseo sabado 20."
      },
      {
        "name": "Recuperacion post-Cobreces",
        "start": "2026-06-22",
        "end": "2026-06-30",
        "tssTarget": 90,
        "notes": "3 dias descanso total. Trotes suaves a partir del jueves 25. Sin intensidad."
      }
    ],
    "notes": "Soplao completado 23 mayo. Fitness construida se mantiene — CTL decae lento. El trabajo para Cobreces es recuperar bien y llegar fresco, no acumular volumen. Una semana de carga honesta (8-14 jun) + taper es suficiente. Regla tibial activa: >2/10 durante carrera = para o sustituye. Estructura semanal: 4 sesiones (3 running + 1 gym pierna). Gym siempre en lunes. Las semanas de recuperacion post-carrera son excepcion — menos sesiones hasta que el cuerpo vuelva."
  },
  "workouts": [
    {
      "date": "2026-05-06",
      "sport": "Run",
      "title": "Trote test hierba 25min — EJECUTADO",
      "status": "completed",
      "tssPlanned": 28,
      "tssActual": 57,
      "distanceActualKm": 5.29,
      "description": "EJECUTADO: 5.29km, TSS 57 (planificado 28). Patron recurrente — overshoot x2 vs plan. Tibial OK durante y despues."
    },
    {
      "date": "2026-05-07",
      "sport": "Other",
      "title": "Descanso total — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 65 (umbral alarma) — gym cancelado para proteger tibial antes del 16km."
    },
    {
      "date": "2026-05-08",
      "sport": "Bike",
      "title": "Bici Z1-Z2 30min + Rutina B — EJECUTADO",
      "status": "completed",
      "tssPlanned": 20,
      "tssActual": 17,
      "description": "EJECUTADO: bici en lugar de run (decision correcta 2 dias antes del 16km). TSS 17. Rutina B ligera post-bici."
    },
    {
      "date": "2026-05-09",
      "sport": "Other",
      "title": "Descanso pre-carrera — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso completo."
    },
    {
      "date": "2026-05-10",
      "sport": "Run",
      "title": "Trail 17.6km +700m — EJECUTADO 2:10:59",
      "status": "completed",
      "tssPlanned": 140,
      "tssActual": 205,
      "distanceActualKm": 17.68,
      "description": "EJECUTADO: 17.68km, +700m, 2:10:59, TSS 205. Tibial OK durante toda la carrera y al dia siguiente. HRV al dia siguiente: 49 (alarma roja)."
    },
    {
      "date": "2026-05-11",
      "sport": "Other",
      "title": "Descanso total post-carrera — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 49 (minimo historico del bloque), BB avg 19, pulso 54."
    },
    {
      "date": "2026-05-12",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Sin registro de entreno en TP. Probable descanso o drenaje no subido."
    },
    {
      "date": "2026-05-13",
      "sport": "Run",
      "title": "Trail 9.3km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 85,
      "tssActual": 110,
      "distanceActualKm": 9.33,
      "description": "EJECUTADO: 9.33km, 1h7min, TSS 110 (planificado 85). HRV 68, BB avg 60, pulso 48."
    },
    {
      "date": "2026-05-14",
      "sport": "Other",
      "title": "Descanso total — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 62, BB avg 59, pulso 47."
    },
    {
      "date": "2026-05-15",
      "sport": "Run",
      "title": "Rodaje 45min Z2-Z3 — EJECUTADO",
      "status": "completed",
      "tssPlanned": 40,
      "tssActual": 78,
      "distanceActualKm": 7.04,
      "description": "EJECUTADO: 7.04km, 41min, TSS 78 (planificado 40). HRV 79 esa manana. Vuelo a Canarias esa tarde."
    },
    {
      "date": "2026-05-16",
      "sport": "Other",
      "title": "Llegada Canarias — descanso",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Viaje + llegada a Canarias. Sin actividad registrada. HRV 65 al dia siguiente."
    },
    {
      "date": "2026-05-17",
      "sport": "Other",
      "title": "Canarias — descanso forzado",
      "status": "completed",
      "tssPlanned": 22,
      "tssActual": 0,
      "description": "HRV 57 (alarma roja), BB avg 21, pulso 53, sueno 4.5h — cuerpo en rojo. Plan de rodaje cancelado correctamente."
    },
    {
      "date": "2026-05-18",
      "sport": "Walk",
      "title": "Canarias — actividad montana (no registrada en TP)",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": null,
      "description": "Sin registro en TP. BB avg 11.6 al dia siguiente — el valor mas bajo de todo el bloque. Evidencia de esfuerzo significativo aunque no quedo subido."
    },
    {
      "date": "2026-05-19",
      "sport": "Run",
      "title": "Canarias: Hiking 9.9km + Trail 8.9km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 20,
      "tssActual": 64,
      "distanceActualKm": 18.81,
      "description": "EJECUTADO: Hiking 4h10 (9.9km, TSS 40) + Trail 3h (8.9km, TSS 25). Total 7h+ de actividad. Mucho mas que el trote opcional previsto."
    },
    {
      "date": "2026-05-20",
      "sport": "Other",
      "title": "Vuelta Canarias — descanso completo",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Vuelo de vuelta. Descanso. Inicio taper final."
    },
    {
      "date": "2026-05-21",
      "sport": "Other",
      "title": "Descanso completo — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso vispera-2. Pulso 50, tibias con agujetas musculares post-Canarias, nada preocupante."
    },
    {
      "date": "2026-05-22",
      "sport": "Run",
      "title": "Activacion 15min + strides — vispera El Soplao — EJECUTADO",
      "status": "completed",
      "tssPlanned": 12,
      "tssActual": null,
      "description": "Activacion de vispera. HRV 80, pulso 48. Cuerpo en optimas condiciones para la carrera del sabado."
    },
    {
      "date": "2026-05-23",
      "sport": "Run",
      "title": "EL SOPLAO 21km +800m — COMPLETADO",
      "status": "completed",
      "tssPlanned": null,
      "tssActual": 234.85,
      "distanceActualKm": 21.29,
      "description": "COMPLETADO: 21.29km, 2h51min, TSS 234.85. Fue bien. HRV previo 86, pulso 48 — optimo estado de salida."
    },
    {
      "date": "2026-05-24",
      "sport": "Run",
      "title": "Rodaje post-Soplao — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 49.84,
      "distanceActualKm": 4.03,
      "description": "EJECUTADO: 4km, 21min, TSS 49.84 el dia despues del Soplao. Body Battery avg 5 ese dia (vacio total). No es un trote de recuperacion a esos numeros — el cuerpo pago la factura."
    },
    {
      "date": "2026-05-25",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 71 (recuperando hacia basal 75), pulso 51, BB avg 57. Recuperacion bien encauzada."
    },
    {
      "date": "2026-05-26",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso dia 3 post-Soplao."
    },
    {
      "date": "2026-05-27",
      "sport": "Run",
      "title": "Drenaje 20-25min Z1 — EJECUTADO",
      "status": "completed",
      "tssPlanned": 15,
      "tssActual": 38.01,
      "distanceActualKm": 3.57,
      "description": "EJECUTADO: 3.57km, ~22min, TSS 38 (planificado 15). Patron overshoot habitual. Tibial OK."
    },
    {
      "date": "2026-05-28",
      "sport": "Run",
      "title": "Rodaje 40-45min Z2 — EJECUTADO",
      "status": "completed",
      "tssPlanned": 45,
      "tssActual": 76.48,
      "distanceActualKm": 7.06,
      "description": "EJECUTADO: 7.06km, ~41min, TSS 76 (planificado 45). HRV 93, pulso 45 esa manana — cuerpo bien recuperado. Overshoot x1.7 vs plan.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 130, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-29",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 74, sueño 5.8h (algo corto), Body Battery avg 53, pulso 49."
    },
    {
      "date": "2026-05-30",
      "sport": "Other",
      "title": "Descanso — tirada no ejecutada",
      "status": "completed",
      "tssPlanned": 62,
      "tssActual": 0,
      "description": "No ejecutado. Estaba planificada tirada 50-55min Z2 pero se descansó. Body Battery avg 30, pulso 53 ese dia — probablemente cuerpo pidiendo más descanso. Decision correcta."
    },
    {
      "date": "2026-05-31",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 87, sueño 8.1h, Body Battery avg 55, pulso 45. Recuperacion bien encauzada. Fin semana post-Soplao."
    },
    {
      "date": "2026-06-01",
      "sport": "Run",
      "title": "Trail 8.15km Z2 — EJECUTADO",
      "status": "completed",
      "tssPlanned": 65,
      "tssActual": 99.34,
      "distanceActualKm": 8.15,
      "description": "EJECUTADO: 8.15km, ~1h7min, TSS 99 (planificado 65). HRV 96 ese dia, pulso 42 — metricas optimas. Overshoot contenido. Gym no disponible, rodaje trail en su lugar. Tibial OK."
    },
    {
      "date": "2026-06-02",
      "sport": "Other",
      "title": "Descanso — rodaje no ejecutado",
      "status": "completed",
      "tssPlanned": 52,
      "tssActual": 0,
      "description": "No se salio a correr. Estaba planificado rodaje 50min Z2 asfalto. HRV 77, pulso 48, sueño 7.3h — metricas normales, probable decision de recuperar tras 99 TSS del lunes. Correcto."
    },
    {
      "date": "2026-06-03",
      "sport": "Other",
      "title": "Padel — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": null,
      "description": "EJECUTADO: sesion de padel. Carga lateral/explosiva diferente a correr pero real (tobillo, tibia, piernas). Plan original era descanso — padel cuenta como estimulo del dia. No se añadio corrida encima: decision correcta."
    },
    {
      "date": "2026-06-04",
      "sport": "Run",
      "title": "Running 6.56km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 55,
      "tssActual": 85.66,
      "distanceActualKm": 6.56,
      "description": "EJECUTADO: 6.56km, 41min, TSS 85.66 (planificado 55 progresivos Z3). Overshoot x1.55. Sin registro de comentarios en TP."
    },
    {
      "date": "2026-06-05",
      "sport": "Other",
      "title": "Descanso — sin registro",
      "status": "completed",
      "tssPlanned": 25,
      "tssActual": 0,
      "description": "Sin workout registrado en TP. Rodaje suave previsto no ejecutado o no subido. Probable descanso."
    },
    {
      "date": "2026-06-06",
      "sport": "Other",
      "title": "Descanso — tirada desplazada al domingo",
      "status": "completed",
      "tssPlanned": 80,
      "tssActual": 0,
      "description": "Tirada larga planificada para este dia no ejecutada. Ejecutada el domingo 7 jun con mayor volumen."
    },
    {
      "date": "2026-06-07",
      "sport": "Run",
      "title": "Trail Running 14km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 168.61,
      "distanceActualKm": 14.04,
      "description": "EJECUTADO: 14km, 1h54min, TSS 168.61. Tirada larga desplazada al domingo (planificado era descanso). Semana 1-7 jun: TSS total ~254."
    },
    {
      "date": "2026-06-08",
      "sport": "Strength",
      "title": "Gimnasio pierna MODERADO + core",
      "status": "completed",
      "tssPlanned": 25,
      "tssActual": null,
      "description": "Sin registro en TP — puede haberse ejecutado fuera del calendario digital. Ultimo gimnasio de pierna antes de Cobreces."
    },
    {
      "date": "2026-06-09",
      "sport": "Run",
      "title": "Rodaje 45min Z2 + Rutina A tibial — EJECUTADO",
      "status": "completed",
      "tssPlanned": 45,
      "tssActual": 95.9,
      "distanceActualKm": 8.46,
      "description": "EJECUTADO: 8.46km, 47min, TSS 95.9 (planificado 45). Overshoot x2.1 — patron habitual.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 130, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-06-10",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-06-11",
      "sport": "Run",
      "title": "Progresivos Z3 en subida — EJECUTADO",
      "status": "completed",
      "tssPlanned": 60,
      "tssActual": 73.72,
      "distanceActualKm": 6.2,
      "description": "EJECUTADO: 6.2km, 41min, TSS 73.72 (planificado 60). Overshoot contenido. HRV ese dia: 73, pulso 45.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento Z2", "duration_seconds": 600, "intensity_min": 130, "intensity_max": 150, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 4, "steps": [
            {"name": "Subida progresiva Z3", "duration_seconds": 240, "intensity_min": 150, "intensity_max": 165, "intensityClass": "active"},
            {"name": "Bajada trote recuperacion", "duration_seconds": 180, "intensity_min": 120, "intensity_max": 140, "intensityClass": "rest"}
          ]},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-06-12",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 83, pulso 46, sueño 7.2h — buenas metricas."
    },
    {
      "date": "2026-06-13",
      "sport": "Other",
      "title": "Tirada larga — no ejecutada",
      "status": "completed",
      "tssPlanned": 95,
      "tssActual": 0,
      "description": "Tirada larga planificada no ejecutada este dia. BB avg 20, pulso 51 — cuerpo con fatiga acumulada. Decision de descanso. La tirada larga de la semana fue el domingo 7 jun."
    },
    {
      "date": "2026-06-14",
      "sport": "Run",
      "title": "Running corto 1.84km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 18.34,
      "distanceActualKm": 1.84,
      "description": "EJECUTADO: 1.84km, 14min, TSS 18.34. Entreno muy corto — probablemente cortado. HRV ese dia: 61 (alerta), sueño 4.7h, BB avg 14. Inicio real del taper con bache de recuperacion."
    },
    {
      "date": "2026-06-15",
      "sport": "Run",
      "title": "Rodaje suave Z1-Z2 — EJECUTADO (overshoot)",
      "status": "completed",
      "tssPlanned": 25,
      "tssActual": 65.33,
      "distanceActualKm": 5.34,
      "description": "EJECUTADO: 5.34km, 30min, TSS 65.33 (planificado 25 — era descanso en plan.js, pero TP tenia rodaje suave 30min con TSS previsto 25). Overshoot x2.6. HRV ese dia 67 (borde de alarma), sueño 4.2h, BB avg 27. Primer dia de taper con demasiada carga."
    },
    {
      "date": "2026-06-16",
      "sport": "Other",
      "title": "Descanso — rodaje no ejecutado",
      "status": "completed",
      "tssPlanned": 32,
      "tssActual": 0,
      "description": "Descanso. Plan tenia rodaje 35min — no ejecutado. HRV 80, pulso 43, sueño 6.8h. Buen rebote tras el bache del 14-15."
    },
    {
      "date": "2026-06-17",
      "sport": "Run",
      "title": "Running 7km — EJECUTADO (sin plan)",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 79.35,
      "distanceActualKm": 7.03,
      "description": "EJECUTADO: 7km, 39min, TSS 79.35. Plan marcaba descanso — salida no planificada. HRV ayer: 88, pulso 42. Semana taper 15-21 jun acumulado hasta hoy: 144.68 TSS (objetivo era ~70)."
    },
    {
      "date": "2026-06-18",
      "sport": "Other",
      "title": "DESCANSO TOTAL — vispera-3 Cobreces",
      "status": "planned",
      "tssPlanned": 0,
      "description": "DESCANSO TOTAL. Ya hay 144 TSS en la semana de taper — no añadir nada. Plan original era activacion con strides pero con esa carga acumulada el cuerpo necesita descansar. HRV ayer 88, pulso 42 — dejar que el rebote continue. Preparar material si no esta listo."
    },
    {
      "date": "2026-06-19",
      "sport": "Other",
      "title": "Descanso — vispera-2 Cobreces",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Hidratacion con electrolitos. Preparar material (zapatillas, numero, geles, ropa). Cena rica en hidratos. Si las metricas de hoy son verdes (HRV >75, pulso <50), opcional 15min trote muy suave Z1 sin cuestas."
    },
    {
      "date": "2026-06-20",
      "sport": "Other",
      "title": "Paseo suave 20min o descanso — vispera Cobreces",
      "status": "planned",
      "tssPlanned": 5,
      "description": "Vispera de Cobreces. Paseo suave 20min para estirar piernas o descanso total segun sensaciones. Sin correr. Desayuno normal, cena temprana con hidratos. A la cama pronto."
    },
    {
      "date": "2026-06-21",
      "sport": "Run",
      "title": "SPEED TRAIL COBRECES 16K +600m",
      "status": "planned",
      "tssPlanned": null,
      "description": "Desayuno 2.5-3h antes, rico en hidratos. Calentamiento: 8-10min trote suave + movilidad + 2-3 progresivos 15s. ESTRATEGIA: salida conservadora primeros 3km — es un speed trail, la gente sale fuerte. Subidas: mantener Z3 sostenido sin pasarte de Z4. Bajadas: paso tecnico controlado. Nutricion: gel o 40-50g hidratos en el km 7-8. REGLA TIBIAL: molestia >2/10 = bajar ritmo inmediatamente.",
      "raceStrategy": {
        "km_0_3": "Z2-Z3 bajo conservador, asentarse en el grupo",
        "km_3_10": "Z3 sostenido, gestionar subida principal",
        "km_10_16": "si tibias OK y piernas responden, Z3-Z4 bajo hasta meta",
        "nutrition": "gel km7-8",
        "alarmTibial": "molestia >2/10 = bajar ritmo, no parar salvo empeora"
      }
    },
    {
      "date": "2026-06-22",
      "sport": "Other",
      "title": "Descanso post-Cobreces",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso total. Piernas elevadas si puedes. Hidratacion. Sin actividad."
    },
    {
      "date": "2026-06-23",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso dia 2 post-Cobreces."
    },
    {
      "date": "2026-06-24",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso dia 3 post-Cobreces."
    },
    {
      "date": "2026-06-25",
      "sport": "Run",
      "title": "Trote suave 25min Z1",
      "status": "planned",
      "tssPlanned": 20,
      "description": "Primer trote post-Cobreces. FC maxima 130 bpm. Terreno llano, ritmo muy suave. Solo si el cuerpo lo pide — si hay cansancio real, descansa un dia mas. Cobreces es 16K, recuperacion mas rapida que el Soplao."
    },
    {
      "date": "2026-06-26",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-06-27",
      "sport": "Run",
      "title": "Rodaje 35min Z2",
      "status": "planned",
      "tssPlanned": 35,
      "description": "Rodaje suave de recuperacion activa. FC 130-145 bpm, terreno llano o suave.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Rodaje Z2 suave", "duration_seconds": 2100, "intensity_min": 125, "intensity_max": 145, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-06-28",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-06-29",
      "sport": "Run",
      "title": "Rodaje 35min Z2",
      "status": "planned",
      "tssPlanned": 35,
      "description": "Rodaje suave cierre de mes. FC 130-145 bpm.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Rodaje Z2 suave", "duration_seconds": 2100, "intensity_min": 125, "intensity_max": 145, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-06-30",
      "sport": "Other",
      "title": "Descanso — cierre junio",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Fin del bloque. A partir de julio planificar segun nuevas carreras que se vayan apuntando."
    }
  ],
  "intensityZones": {
    "heartRateBpm": {
      "Z1_recovery": "<130",
      "Z2_aerobic_easy": "130-150",
      "Z3_aerobic_moderate": "150-165",
      "Z4_threshold": "165-175",
      "Z5_VO2": "175-185"
    }
  }
};
