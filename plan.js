const PLAN_DATA = {
  "athlete": {
    "name": "David Prado",
    "athleteId": 6257536,
    "email": "davidpradoTP@gmail.com"
  },
  "plan": {
    "name": "Post-Cobreces — Salcedo Agosto · HM Septiembre 2026",
    "startDate": "2026-05-06",
    "endDate": "2026-08-06",
    "targetEvent": {
      "date": "2026-08-06",
      "name": "Carrera de Salcedo 12K +200m"
    },
    "nextEvents": [
      { "date": "2026-06-21", "name": "Speed Trail Cobreces 16K +600m — COMPLETADO" },
      { "date": "2026-08-06", "name": "Carrera de Salcedo 12K +200m" },
      { "date": "2026-09-12", "name": "Media Maratón asfalto — objetivo <=2h" }
    ],
    "completedEvents": [
      {
        "date": "2026-05-23",
        "name": "El Soplao 21km +800m — COMPLETADO",
        "result": "21.29km · 2h51min · TSS 234.85 · tibial OK"
      },
      {
        "date": "2026-06-21",
        "name": "Speed Trail Cobreces 16K +600m — COMPLETADO",
        "result": "15.9km · ~2h05min · TSS 175.63 · tibial OK"
      }
    ],
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
        "name": "Ultima semana de carga pre-Cobreces",
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
        "notes": "Llegar fresco. Ejecutado con ~145 TSS (overshoot habitual). Metricas al domingo excelentes: HRV 87, pulso 44."
      },
      {
        "name": "Recuperacion post-Cobreces + tirada larga",
        "start": "2026-06-22",
        "end": "2026-06-28",
        "tssTarget": 240,
        "notes": "Primeros 3 dias suaves (lun-mie). Rodaje honesto mie 24. Segundo rodaje vie 26. Tirada larga monte dom 28 (7 dias post-carrera — el cuerpo esta listo). Sin gym pierna hasta el lunes 29 (8 dias post-Cobreces). TSS planificado 240, esperado ejecutado ~280-320 por patron de overshoot."
      },
      {
        "name": "Carga 1",
        "start": "2026-06-29",
        "end": "2026-07-05",
        "tssTarget": 280,
        "notes": "Primera semana de carga post-Cobreces. Gym lunes (55-60% RM) + progresivos Z3 martes + descanso miercoles + tirada larga jueves + rodaje viernes. ACWR vigilado. TSS planificado 280, esperado ejecutado ~340-380."
      },
      {
        "name": "Carga 2",
        "start": "2026-07-06",
        "end": "2026-07-12",
        "tssTarget": 280,
        "notes": "Segunda semana de carga. Gym lunes (65-70% RM) + rodaje Z2 martes + descanso + tirada larga jueves + rodaje viernes. TSS planificado 280."
      },
      {
        "name": "Carga 3",
        "start": "2026-07-13",
        "end": "2026-07-19",
        "tssTarget": 280,
        "notes": "Tercera y ultima semana de carga. Gym lunes (70-75% RM) + progresivos Z3 martes + descanso + tirada larga jueves (la mas larga del bloque) + rodaje viernes. Cima de carga antes de la reduccion."
      },
      {
        "name": "Reduccion gradual",
        "start": "2026-07-20",
        "end": "2026-07-26",
        "tssTarget": 190,
        "notes": "Reduccion ~30% volumen respecto a carga 3. Ultimo gym de pierna el lunes 20 (17 dias antes de Salcedo — fuera de la ventana de 12 dias). Tirada recortada a 1h10. Mantener frecuencia, reducir duracion."
      },
      {
        "name": "Taper Salcedo",
        "start": "2026-07-27",
        "end": "2026-08-06",
        "tssTarget": 80,
        "notes": "Sin gym (dentro de los 12 dias previos a Salcedo). Rodaje suave lunes 27 + activacion con strides miercoles 29. Total TSS muy bajo. Objetivo: llegar fresco con las piernas activadas."
      }
    ],
    "notes": "Calendario: Salcedo 6 ago / HM ~12 sep. 15K del 11 jul cancelado — hay 3 semanas de carga real disponibles antes del taper de Salcedo. Patron documentado de overshoot x1.3-2 — TSS planificados son el suelo, no el techo. Regla tibial activa: >2/10 durante carrera = parar o sustituir. Gym sesion completa: hip thrust + sentadilla + peso muerto + zancadas + gemelo excentrico + soleo + tibial con banda + inversiones tobillo. Sin gym pierna los 12 dias previos a cualquier carrera ni 7-9 dias post-carrera. Estructura estandar: 4 sesiones/semana (3 running + 1 gym lunes). Post-carrera: excepcion — menos sesiones."
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
      "description": "Descanso. HRV 74, sueno 5.8h (algo corto), Body Battery avg 53, pulso 49."
    },
    {
      "date": "2026-05-30",
      "sport": "Other",
      "title": "Descanso — tirada no ejecutada",
      "status": "completed",
      "tssPlanned": 62,
      "tssActual": 0,
      "description": "No ejecutado. Estaba planificada tirada 50-55min Z2 pero se descansó. Body Battery avg 30, pulso 53 ese dia — probablemente cuerpo pidiendo mas descanso. Decision correcta."
    },
    {
      "date": "2026-05-31",
      "sport": "Other",
      "title": "Descanso — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 87, sueno 8.1h, Body Battery avg 55, pulso 45. Recuperacion bien encauzada. Fin semana post-Soplao."
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
      "description": "No se salio a correr. Estaba planificado rodaje 50min Z2 asfalto. HRV 77, pulso 48, sueno 7.3h — metricas normales, probable decision de recuperar tras 99 TSS del lunes. Correcto."
    },
    {
      "date": "2026-06-03",
      "sport": "Other",
      "title": "Padel — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": null,
      "description": "EJECUTADO: sesion de padel. Carga lateral/explosiva diferente a correr pero real. Plan original era descanso — padel cuenta como estimulo del dia. No se aniadio corrida encima: decision correcta."
    },
    {
      "date": "2026-06-04",
      "sport": "Run",
      "title": "Running 6.56km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 55,
      "tssActual": 85.66,
      "distanceActualKm": 6.56,
      "description": "EJECUTADO: 6.56km, 41min, TSS 85.66 (planificado 55 progresivos Z3). Overshoot x1.55."
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
      "description": "EJECUTADO: 14km, 1h54min, TSS 168.61. Tirada larga desplazada al domingo. Semana 1-7 jun: TSS total ~254."
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
      "title": "Rodaje 45min Z2 — EJECUTADO",
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
      "description": "Descanso. HRV 83, pulso 46, sueno 7.2h."
    },
    {
      "date": "2026-06-13",
      "sport": "Other",
      "title": "Tirada larga — no ejecutada",
      "status": "completed",
      "tssPlanned": 95,
      "tssActual": 0,
      "description": "Tirada larga planificada no ejecutada. BB avg 20, pulso 51 — fatiga acumulada. Decision de descanso correcta."
    },
    {
      "date": "2026-06-14",
      "sport": "Run",
      "title": "Running corto 1.84km — EJECUTADO",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 18.34,
      "distanceActualKm": 1.84,
      "description": "EJECUTADO: 1.84km, 14min, TSS 18.34. Entreno muy corto — probablemente cortado. HRV ese dia: 61 (alerta), sueno 4.7h, BB avg 14."
    },
    {
      "date": "2026-06-15",
      "sport": "Run",
      "title": "Rodaje suave Z1-Z2 — EJECUTADO (overshoot x2.6)",
      "status": "completed",
      "tssPlanned": 25,
      "tssActual": 65.33,
      "distanceActualKm": 5.34,
      "description": "EJECUTADO: 5.34km, 30min, TSS 65.33 (planificado 25). Overshoot x2.6. HRV 67, sueno 4.2h, BB avg 27. Primer dia de taper con demasiada carga."
    },
    {
      "date": "2026-06-16",
      "sport": "Other",
      "title": "Descanso — rodaje no ejecutado",
      "status": "completed",
      "tssPlanned": 32,
      "tssActual": 0,
      "description": "Descanso. HRV 80, pulso 43, sueno 6.8h. Buen rebote tras el bache del 14-15."
    },
    {
      "date": "2026-06-17",
      "sport": "Run",
      "title": "Running 7km — EJECUTADO (sin plan)",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 79.35,
      "distanceActualKm": 7.03,
      "description": "EJECUTADO: 7km, 39min, TSS 79.35. Plan marcaba descanso — salida no planificada. HRV ayer: 88, pulso 42. Semana taper 15-21 jun acumulado: 144.68 TSS."
    },
    {
      "date": "2026-06-18",
      "sport": "Other",
      "title": "Descanso total — vispera-3 Cobreces",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso total. Ya habia 144 TSS en la semana de taper — correcto no aniadir nada mas."
    },
    {
      "date": "2026-06-19",
      "sport": "Other",
      "title": "Descanso — vispera-2 Cobreces",
      "status": "completed",
      "tssPlanned": 0,
      "tssActual": 0,
      "description": "Descanso. HRV 87, pulso 44, BB avg 69, sueno 8.3h. Metricas optimas para el domingo."
    },
    {
      "date": "2026-06-20",
      "sport": "Other",
      "title": "Paseo suave o descanso — vispera Cobreces",
      "status": "completed",
      "tssPlanned": 5,
      "tssActual": null,
      "description": "Vispera de Cobreces. Paseo suave 20min o descanso total segun sensaciones. Cena hidratos, a la cama pronto."
    },
    {
      "date": "2026-06-21",
      "sport": "Run",
      "title": "SPEED TRAIL COBRECES 16K +600m — COMPLETADO",
      "status": "completed",
      "tssPlanned": null,
      "tssActual": null,
      "description": "Resultado pendiente de actualizar. Estrategia: salida conservadora, Z3 en subidas, tecnica en bajadas, gel km7-8. Regla tibial activa durante la carrera.",
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
      "title": "Descanso total — dia 1 post-Cobreces",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso total. Sin actividad. Piernas elevadas si puedes. Hidratacion con electrolitos."
    },
    {
      "date": "2026-06-23",
      "sport": "Run",
      "title": "Drenaje Z1 — 20-25min",
      "status": "planned",
      "tssPlanned": 18,
      "description": "Primer trote post-Cobreces. FC MAXIMO 130 bpm todo el rato — si subes de ahi, caminas. Terreno llano, sin cuestas. Duracion real: 20-25min, no mas. Objetivo: mover sangre, no carga. Si las piernas estan muy pesadas: paseo 20min en su lugar.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Drenaje Z1", "duration_seconds": 1350, "intensity_min": 110, "intensity_max": 130, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-06-24",
      "sport": "Run",
      "title": "Rodaje Z2 honesto — 45-50min",
      "status": "planned",
      "tssPlanned": 58,
      "description": "Rodaje real Z2, el 'entrenar bien' del post-carrera a los 3 dias. FC 130-148 bpm. Terreno mixto o suave, sin series ni progresivos — no es el momento para calidad. Ritmo comodo pero sostenido. Si el tibial dice algo en cualquier momento: para.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2400, "intensity_min": 130, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-06-25",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Permitir recuperacion entre sesiones. Preparar el cuerpo para el rodaje del viernes y la tirada del domingo."
    },
    {
      "date": "2026-06-26",
      "sport": "Run",
      "title": "Rodaje Z2 — 40min",
      "status": "planned",
      "tssPlanned": 48,
      "description": "Tercer estimulo de la semana de recuperacion. FC 130-148 bpm. Puede ser por carretera o monte suave. Sin intensidad extra. Objetivo: cerrar bien la semana antes de la tirada del domingo.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 130, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 180, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-06-27",
      "sport": "Other",
      "title": "Descanso — pre-tirada larga",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso el dia antes de la tirada larga. Comer bien, hidratarse. Preparar gel si el recorrido del domingo supera 60min."
    },
    {
      "date": "2026-06-28",
      "sport": "Run",
      "title": "Tirada larga monte Z2 — 1h20-1h30",
      "status": "planned",
      "tssPlanned": 115,
      "description": "A 7 dias de Cobreces el cuerpo ya puede absorber una tirada larga real. FC 130-150 bpm todo el rato — sin urgencia de ritmo. Terreno de monte con desnivel moderado. Llevar gel si supera 60min (40-50g CHO). TSS planificado 115, apunta a ejecutar ~120-150 sin forzar. Esta tirada es el estimulo principal de la semana y la base para lo que viene. Tibial >2/10 en cualquier momento: transforma el resto en Z1 o paras.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Tirada larga Z2 monte", "duration_seconds": 3900, "intensity_min": 130, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-06-29",
      "sport": "Strength",
      "title": "GYM PIERNA — Sesion completa (8 dias post-Cobreces)",
      "status": "planned",
      "tssPlanned": 35,
      "description": "Vuelta al gimnasio tras Cobreces. Primera sesion post-carrera: carga al 55-60% RM — reactivar patron motor, no machacar. Proxima sesion subira al 65-70%.\n\nBLOQUE A — Fuerza principal (~30 min):\n• Hip thrust con barra o mancuerna: 4x10-12. Barra sobre cadera con almohadilla, extension completa arriba, apretar gluteo en la cima.\n• Sentadilla goblet (mancuerna al pecho) o barra: 4x8-10. Profundidad completa, rodilla sobre el segundo dedo del pie, talones plantados.\n• Peso muerto rumano: 3x10. Bisagra de cadera, espalda completamente neutra, bajar hasta notar estiramiento en isquiotibiales (no tocar el suelo).\n• Zancadas con mancuernas: 3x10/pierna. Paso largo, rodilla trasera roza el suelo, torso erguido.\n\nBLOQUE B — Tobillo y tibia con banda elastica (~12 min, OBLIGATORIO por historial periostitis):\n• Gemelo unipodal en escalon excentrico: 3x12-15. Subida bipodal rapida, bajada solo con un pie en 3 segundos. Alternancia de pierna.\n• Soleo sentado con banda o maquina: 3x15, tempo 3-1-3. Rodillas flexionadas 90 grados, pie plano en suelo o plataforma.\n• Tibial anterior con cinta elastica: 3x15. Banda en el empeine del pie, tirar hacia arriba (dorsiflexion activa) contra la resistencia de la banda.\n• Inversiones y eversiones tobillo con banda: 3x15 rotaciones internas + 3x15 externas. Tobillo en el aire, banda anclada, movimiento lento y controlado.\n\nBLOQUE C — Core (~10 min):\n• Plancha frontal: 3x50-60s. Cuerpo recto, no dejar caer caderas.\n• Dead bug: 3x10/lado. Lento, zona lumbar pegada al suelo durante todo el movimiento.\n\nDescanso entre series bloque A: 2-3 min. Bloque B y C: 60-90s. Duracion total: 55-65 min."
    },
    {
      "date": "2026-06-30",
      "sport": "Run",
      "title": "Progresivos Z3 en subida — 50-55min",
      "status": "planned",
      "tssPlanned": 70,
      "description": "Primera sesion de calidad de la semana de carga. Sin series de pista — subidas progresivas trotando.\n\nEJECUCION: 10-12min calentamiento Z2 → 4x5min subida progresiva Z3 bajo-medio (150-162 bpm) con bajada trotando como recuperacion (120-138 bpm, 3-4min) → 5min vuelta a la calma.\n\nPrimeras dos repeticiones: no pasar de 158. En la 3a y 4a puedes llegar a 162-165 en los ultimos 2min si va bien. Tibial >2/10 en cualquier momento: conviertes el resto en rodaje Z2.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento Z2", "duration_seconds": 720, "intensity_min": 130, "intensity_max": 150, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 4, "steps": [
            {"name": "Subida progresiva Z3", "duration_seconds": 300, "intensity_min": 150, "intensity_max": 165, "intensityClass": "active"},
            {"name": "Bajada trote recuperacion", "duration_seconds": 240, "intensity_min": 120, "intensity_max": 138, "intensityClass": "rest"}
          ]},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-01",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso obligatorio entre progresivos Z3 y la tirada larga del jueves. No encadenar calidad con tirada sin recuperacion entre medias."
    },
    {
      "date": "2026-07-02",
      "sport": "Run",
      "title": "Tirada larga monte Z2 — 1h25-1h35",
      "status": "planned",
      "tssPlanned": 120,
      "description": "Estimulo principal de la semana de carga. Recorrido de monte con desnivel real. FC 130-152 bpm. Ritmo conversacional todo el rato — si no puedes hablar con comodidad, bajas el ritmo. Llevar gel desde el primer km si supera 60min. Ejemplo: gel al minuto 45-50 o en el km 8-9.\n\nTSS planificado 120, apunta a ejecutar ~130-155 sin forzar. Esta tirada es la mas importante de la semana. Tibial >2/10 en cualquier momento: paras o caminas el resto.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Tirada larga Z2 monte", "duration_seconds": 4500, "intensity_min": 130, "intensity_max": 152, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-03",
      "sport": "Run",
      "title": "Rodaje Z2 — 40-45min",
      "status": "planned",
      "tssPlanned": 52,
      "description": "Rodaje de consolidacion. FC 128-148 bpm. Sin intensidad. Terreno llano o suave. Cierra la semana de carga con estimulo suave. Si las piernas estan muy pesadas tras la tirada de ayer: 35min y casa, sin forzar.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 128, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 128, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-04",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. La semana de carga cerro el jueves — el cuerpo necesita 48h para asimilar antes del gym del lunes."
    },
    {
      "date": "2026-07-05",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Preparar el gym del lunes: revision de ejercicios, sueno 8h+."
    },
    {
      "date": "2026-07-06",
      "sport": "Strength",
      "title": "GYM PIERNA — 2a sesion (65-70% RM)",
      "status": "planned",
      "tssPlanned": 35,
      "description": "Segunda sesion de gym post-Cobreces. Subir carga al 65-70% RM respecto a la primera del 29 jun.\n\nBLOQUE A:\n• Hip thrust: 4x10-12\n• Sentadilla goblet o barra: 4x8-10\n• Peso muerto rumano: 3x10\n• Zancadas: 3x10/pierna\n\nBLOQUE B (tobillo y tibia — obligatorio):\n• Gemelo excentrico escalon: 3x12-15\n• Soleo sentado: 3x15 tempo 3-1-3\n• Tibial anterior con banda: 3x15\n• Inversiones/eversiones tobillo: 3x15 cada lado\n\nBLOQUE C (core):\n• Plancha: 3x50-60s\n• Dead bug: 3x10/lado\n\nDescanso bloque A: 2-3min. B y C: 60-90s."
    },
    {
      "date": "2026-07-07",
      "sport": "Run",
      "title": "Rodaje Z2 — 50min",
      "status": "planned",
      "tssPlanned": 62,
      "description": "Rodaje aerobico solido. FC 130-150 bpm. Terreno llano o monte suave. Sin series ni progresivos. Si las piernas estan cargadas del gym: 45min y suficiente.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2700, "intensity_min": 130, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-08",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Recuperacion entre rodaje y tirada larga del jueves."
    },
    {
      "date": "2026-07-09",
      "sport": "Run",
      "title": "Tirada larga monte Z2 — 1h30-1h40",
      "status": "planned",
      "tssPlanned": 130,
      "description": "Tirada larga principal de la semana de carga 2. FC 130-152 bpm. Terreno de monte con desnivel real. Ritmo conversacional. Llevar gel si supera 60min (40-50g CHO). Tibial >2/10 en cualquier momento: paras o caminas el resto.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Tirada larga Z2 monte", "duration_seconds": 4800, "intensity_min": 130, "intensity_max": 152, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-10",
      "sport": "Run",
      "title": "Rodaje Z2 — 40min",
      "status": "planned",
      "tssPlanned": 50,
      "description": "Rodaje de consolidacion. FC 128-148 bpm. Sin intensidad. Terreno llano o suave. Si las piernas estan muy pesadas tras la tirada de ayer: 35min y casa.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 128, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 128, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-11",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Fin de la semana de carga 2."
    },
    {
      "date": "2026-07-12",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Preparar la semana de carga 3 del lunes."
    },
    {
      "date": "2026-07-13",
      "sport": "Strength",
      "title": "GYM PIERNA — 3a sesion (70-75% RM)",
      "status": "planned",
      "tssPlanned": 35,
      "description": "Tercera sesion de gym: cima de la progresion de fuerza. Subir al 70-75% RM. Ultima sesion de gym pesado antes de la reduccion de carga.\n\nMismo protocolo que sesiones anteriores (hip thrust + sentadilla + peso muerto + zancadas) + bloque tibial/tobillo obligatorio + core. Descanso entre series bloque A: 2-3min."
    },
    {
      "date": "2026-07-14",
      "sport": "Run",
      "title": "Progresivos Z3 subida — 50-55min",
      "status": "planned",
      "tssPlanned": 70,
      "description": "Sesion de calidad de la semana de carga 3. Sin series de pista — subidas progresivas trotando.\n\nEJECUCION: 10-12min calentamiento Z2 → 4x5min subida progresiva Z3 bajo-medio (150-162 bpm) con bajada trotando como recuperacion (120-138 bpm, 3-4min) → 5min vuelta a la calma.\n\nPrimeras dos reps: no pasar de 158. En la 3a y 4a puedes llegar a 162-165 si va bien. Tibial >2/10: conviertes el resto en rodaje Z2.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento Z2", "duration_seconds": 720, "intensity_min": 130, "intensity_max": 150, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 4, "steps": [
            {"name": "Subida progresiva Z3", "duration_seconds": 300, "intensity_min": 150, "intensity_max": 165, "intensityClass": "active"},
            {"name": "Bajada trote recuperacion", "duration_seconds": 240, "intensity_min": 120, "intensity_max": 138, "intensityClass": "rest"}
          ]},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-15",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso obligatorio entre progresivos Z3 y la tirada larga del jueves."
    },
    {
      "date": "2026-07-16",
      "sport": "Run",
      "title": "Tirada larga monte Z2 — 1h35-1h45",
      "status": "planned",
      "tssPlanned": 140,
      "description": "Tirada larga principal de la semana de carga 3 — la mas larga del bloque. FC 130-152 bpm. Recorrido de monte con desnivel real. Ritmo conversacional todo el rato. Gel desde el minuto 45-50. Esta es la tirada mas importante del bloque. Tibial >2/10: paras o caminas el resto.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Tirada larga Z2 monte", "duration_seconds": 5400, "intensity_min": 130, "intensity_max": 152, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-17",
      "sport": "Run",
      "title": "Rodaje Z2 — 45min",
      "status": "planned",
      "tssPlanned": 55,
      "description": "Rodaje de consolidacion. FC 128-150 bpm. Cierra la semana de carga 3. Si las piernas estan muy cargadas: 35-40min.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2400, "intensity_min": 128, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 128, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-18",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Fin de la semana de carga 3."
    },
    {
      "date": "2026-07-19",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Manana empieza la semana de reduccion gradual."
    },
    {
      "date": "2026-07-20",
      "sport": "Strength",
      "title": "GYM PIERNA ligero — ULTIMO gym antes de Salcedo (17 dias)",
      "status": "planned",
      "tssPlanned": 30,
      "description": "Ultimo gym de pierna antes de Salcedo (17 dias antes — fuera de la ventana de 12 dias). Carga reducida al 60-65% RM: activacion y mantenimiento, no estimulo nuevo. Protocolo completo (A+B+C) pero sin buscar fatiga."
    },
    {
      "date": "2026-07-21",
      "sport": "Run",
      "title": "Rodaje Z2 — 40min",
      "status": "planned",
      "tssPlanned": 48,
      "description": "Rodaje de reduccion. FC 130-148 bpm. Volumen recortado respecto a semanas anteriores. Sin intensidad extra. Terreno llano o suave.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Rodaje Z2", "duration_seconds": 2100, "intensity_min": 130, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-22",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-07-23",
      "sport": "Run",
      "title": "Tirada media Z2 — 1h10 (reduccion ~25%)",
      "status": "planned",
      "tssPlanned": 90,
      "description": "Ultima tirada larga real antes de Salcedo. FC 130-150 bpm. Recortada ~25% respecto a las tiradas de carga. Misma intensidad, menos tiempo. Terreno de monte suave. Gel si supera 55min. Tibial >2/10: paras.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Tirada Z2 monte", "duration_seconds": 3000, "intensity_min": 130, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta a la calma", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-24",
      "sport": "Run",
      "title": "Rodaje suave Z2 — 35min",
      "status": "planned",
      "tssPlanned": 40,
      "description": "Rodaje suave de cierre. FC max 148 bpm. Terreno llano. Sin urgencia. Preparar el cuerpo para la semana de taper.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Rodaje Z2 suave", "duration_seconds": 2100, "intensity_min": 125, "intensity_max": 148, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-07-25",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. A partir de manana empieza el taper de Salcedo."
    },
    {
      "date": "2026-07-26",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-07-27",
      "sport": "Run",
      "title": "Rodaje suave Z2 — 30min (taper activo)",
      "status": "planned",
      "tssPlanned": 30,
      "description": "Primer dia de taper. Sin gym (dentro de los 12 dias pre-Salcedo). FC maximo 148 bpm. Terreno llano. 30min punto — no te enrolles aunque te encuentres bien.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Rodaje Z2 taper", "duration_seconds": 1800, "intensity_min": 125, "intensity_max": 148, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-07-28",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-07-29",
      "sport": "Run",
      "title": "Activacion 20-25min Z2 + 3-4 strides",
      "status": "planned",
      "tssPlanned": 20,
      "description": "Activacion pre-carrera. 20-25min trote suave Z2 → 3-4 strides de 15-20s a ritmo vivo (no sprint maximal). Recuperacion 90s andando entre cada stride. Los strides despiertan las fibras rapidas sin acumular fatiga.",
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Trote suave Z2", "duration_seconds": 1350, "intensity_min": 125, "intensity_max": 145, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 4, "steps": [
            {"name": "Stride 15-20s", "duration_seconds": 18, "intensity_min": 165, "intensity_max": 182, "intensityClass": "active"},
            {"name": "Recuperacion andando", "duration_seconds": 90, "intensity_min": 100, "intensity_max": 120, "intensityClass": "rest"}
          ]},
          {"name": "Trote suave cierre", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-07-30",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-07-31",
      "sport": "Other",
      "title": "Descanso o paseo 20min",
      "status": "planned",
      "tssPlanned": 3,
      "description": "Descanso o paseo muy suave 20min para estirar piernas. Sin correr."
    },
    {
      "date": "2026-08-01",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-08-02",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso."
    },
    {
      "date": "2026-08-03",
      "sport": "Other",
      "title": "Descanso",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso. Preparar material de carrera: zapatillas trail, numero, chip, geles, ropa."
    },
    {
      "date": "2026-08-04",
      "sport": "Other",
      "title": "Descanso o paseo 20min — vispera-2",
      "status": "planned",
      "tssPlanned": 3,
      "description": "Descanso o paseo suave 20min. Sin correr. Cena rica en hidratos (pasta, arroz). Todo el material preparado."
    },
    {
      "date": "2026-08-05",
      "sport": "Other",
      "title": "Descanso total — vispera Salcedo",
      "status": "planned",
      "tssPlanned": 0,
      "description": "Descanso total. Cena ligera con hidratos. A la cama pronto. Nada que preparar — todo listo desde ayer."
    },
    {
      "date": "2026-08-06",
      "sport": "Run",
      "title": "CARRERA DE SALCEDO 12K +200m",
      "status": "planned",
      "tssPlanned": null,
      "description": "Desayuno 2-2.5h antes: hidratos + algo de proteina. Calentamiento: 8-10min trote suave + movilidad + 2-3 progresivos de 15s.\n\nESTRATEGIA: Carrera conocida, objetivo hacer tiempo. Salida conservadora primeros 2km. Subidas: Z3 sostenido sin disparar el pulso. Bajadas: tecnica controlada, no juegues el tibial por ganar 30s. 12K con +200m — si tibial OK y piernas responden, puedes ir a Z3-Z4 bajo en los ultimos 3-4km.\n\nNutricion: si la carrera supera 55min, gel o 40-50g CHO a mitad de carrera.\n\nREGLA TIBIAL: molestia >2/10 = bajar ritmo de inmediato.",
      "raceStrategy": {
        "km_0_2": "Z2-Z3 bajo, asentarse sin dispararse",
        "km_2_8": "Z3 sostenido, gestionar subidas sin explotar",
        "km_8_12": "si tibial OK y piernas responden: Z3-Z4 bajo hacia meta",
        "nutrition": "gel o 40-50g CHO en km 5-6 si duracion >55min",
        "alarmTibial": "molestia >2/10 = bajar ritmo, no seguir forzando"
      }
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
