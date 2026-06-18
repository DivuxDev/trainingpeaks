const PLAN_DATA = {
  "athlete": {
    "name": "David Prado",
    "athleteId": 6257536,
    "email": "davidpradoTP@gmail.com"
  },
  "plan": {
    "name": "Tapering El Soplao 2026",
    "startDate": "2026-05-06",
    "endDate": "2026-05-23",
    "targetEvent": {
      "date": "2026-05-23",
      "name": "El Soplao 21km +800m"
    },
    "intermediateRace": {
      "date": "2026-05-10",
      "name": "16km +400m",
      "approach": "Entreno largo Z2-Z3, sin competir"
    },
    "notes": "Periostitis resuelta 5 may. Sin bici salvo indicacion. Sesiones clave: tirada larga mie 13, rodaje Canarias dom 17, Teide lun 18. Viaje Canarias: sab 16 tarde - mie 20 tarde. Taper desde jue 21."
  },
  "workouts": [
    {
      "date": "2026-05-06",
      "sport": "Run",
      "title": "Rodaje suave 35min Z2",
      "description": "Rodaje aerobico suave previa al 16km del domingo. Z2 continuo (FC 130-150). Objetivo: activar piernas sin cargarlas. Si llevas el dia muy cargado, reduce a 25min sin problema.",
      "tssPlanned": 28,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Z2 continuo", "duration_seconds": 1500, "intensity_min": 133, "intensity_max": 150, "intensityClass": "active"},
          {"name": "Vuelta calma", "duration_seconds": 300, "intensity_min": 100, "intensity_max": 125, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-07",
      "sport": "Other",
      "title": "Gimnasio mantenimiento",
      "description": "Sesion de fuerza general, intensidad moderada. Sentadilla 3x12, peso muerto 3x10, zancadas 3x10 cada pierna, press banca 3x12, remo 3x12, plancha 3x45s, abdominales. ~60min. No es el dia de batir marcas en el gimnasio, es mantenimiento antes del 16km del domingo.",
      "tssPlanned": 15
    },
    {
      "date": "2026-05-08",
      "sport": "Run",
      "title": "Rodaje suave 30min Z2 - pre-carrera",
      "description": "Rodaje ligero 2 dias antes del 16km. FC 125-145, ritmo muy suave, no pases de 30min. Solo activar piernas. Si llegas cargado del miercoles o del gimansio, 20min y para.",
      "tssPlanned": 22,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 110, "intensity_max": 130, "intensityClass": "warmUp"},
          {"name": "Z2 suave", "duration_seconds": 1200, "intensity_min": 128, "intensity_max": 145, "intensityClass": "active"},
          {"name": "Vuelta calma", "duration_seconds": 300, "intensity_min": 100, "intensity_max": 120, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-09",
      "sport": "Other",
      "title": "Descanso pre-carrera",
      "description": "Descanso completo. Hidratacion, cena rica en carbohidratos, dormir bien. Si paseas: paso ligero 30min, nada mas.",
      "tssPlanned": 0
    },
    {
      "date": "2026-05-10",
      "sport": "Run",
      "title": "Carrera 16km +400m - entreno largo Z2-Z3",
      "description": "ESTRATEGIA: ENTRENO LARGO, NO COMPETICION. Atencion: historicamente doblas el TSS planificado en tiradas largas (29 abr planificaste 40 ejecutaste 90, 21 abr planificaste 47 ejecutaste 97). El techo aqui es 140 TSS — si lo notas subir, baja el ritmo. FC objetivo Z2-Z3 (145-165). Salida CONSERVADORA primeros 3km aunque estes fresco. Subida principal: ritmo controlado, no atacar. Bajadas suaves. Hidratacion + gel cada 45min.",
      "tssPlanned": 140,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento 10min muy suave", "duration_seconds": 600, "intensity_min": 120, "intensity_max": 140, "intensityClass": "warmUp"},
          {"name": "Primeros 3km conservadores", "duration_seconds": 1200, "intensity_min": 140, "intensity_max": 155, "intensityClass": "active"},
          {"name": "Carrera Z2-Z3 continuo", "duration_seconds": 4200, "intensity_min": 148, "intensity_max": 165, "intensityClass": "active"},
          {"name": "Vuelta calma post meta", "duration_seconds": 600, "intensity_min": 100, "intensity_max": 125, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-11",
      "sport": "Other",
      "title": "Descanso total post-16km",
      "description": "Descanso completo. Piernas elevadas si puedes. Hidratacion. Sin actividad.",
      "tssPlanned": 0
    },
    {
      "date": "2026-05-12",
      "sport": "Run",
      "title": "Rodaje suave 45min Z2 - drenaje post-carrera",
      "description": "Primer rodaje tras el 16km. Piernas probablemente cargadas, esto es drenaje activo no entreno. Z2 suave (FC 128-148), terreno llano preferible. Si te notas muy pesado reduce a 30min sin complejos.",
      "tssPlanned": 40,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 300, "intensity_min": 115, "intensity_max": 132, "intensityClass": "warmUp"},
          {"name": "Rodaje continuo Z2 suave", "duration_seconds": 2100, "intensity_min": 128, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta calma", "duration_seconds": 300, "intensity_min": 100, "intensity_max": 120, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-13",
      "sport": "Run",
      "title": "Tirada larga montaña 1h20-1h30 Z2 - sesion clave",
      "description": "La sesion mas importante de la semana. 1h20-1h30 por monte con desnivel acumulado 400-600m (El Soplao tiene 800m, hay que acostumbrarse). Z2 sostenido (FC 138-155) — en subida aunque vayas muy despacio, no te salgas de zona. Hidratacion + gel si superas 60min. No atacar subidas, gestionar el esfuerzo de principio a fin.",
      "tssPlanned": 95,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 118, "intensity_max": 138, "intensityClass": "warmUp"},
          {"name": "Tirada Z2 montaña con desnivel", "duration_seconds": 4200, "intensity_min": 138, "intensity_max": 155, "intensityClass": "active"},
          {"name": "Vuelta calma trote suave", "duration_seconds": 600, "intensity_min": 108, "intensity_max": 128, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-14",
      "sport": "Other",
      "title": "Gimnasio mantenimiento",
      "description": "Sesion de fuerza, intensidad moderada-baja (piernas ya cargadas de la tirada de ayer). Enfasis en upper body + core: press banca 3x12, remo 3x12, hombros 3x12, plancha 3x45s, abdominales. Pierna solo si te notas recuperado: sentadilla 3x10 ligera. ~50min.",
      "tssPlanned": 12
    },
    {
      "date": "2026-05-15",
      "sport": "Run",
      "title": "Rodaje suave 35min Z2",
      "description": "Ultimo rodaje en casa antes de Canarias. Z2 continuo (FC 130-150), sin desnivel significativo. Ligero, mantener sensaciones. Manana viaje.",
      "tssPlanned": 25,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento", "duration_seconds": 300, "intensity_min": 112, "intensity_max": 132, "intensityClass": "warmUp"},
          {"name": "Z2 continuo", "duration_seconds": 1500, "intensity_min": 130, "intensity_max": 148, "intensityClass": "active"},
          {"name": "Vuelta calma", "duration_seconds": 300, "intensity_min": 100, "intensity_max": 118, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-16",
      "sport": "Other",
      "title": "Gimnasio ligero (mañana) + Viaje Canarias tarde",
      "description": "Manana: gimansio upper body + core unicamente, 30-40min. Press banca 3x12, remo 3x12, hombros 3x10, plancha 2x45s. SIN pierna — las piernas salen a Canarias. Tarde: vuelo a Canarias. Hidratacion en el avion.",
      "tssPlanned": 10
    },
    {
      "date": "2026-05-17",
      "sport": "Run",
      "title": "Rodaje montaña Canarias 50min Z2",
      "description": "Primer rodaje en Canarias. 50min por monte o sendero. Z2 continuo (FC 135-155). Desnivel acumulado 200-300m. Disfruta el sitio, piernas frescas. No hace falta ir rapido — manana el Teide.",
      "tssPlanned": 45,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote suave", "duration_seconds": 600, "intensity_min": 115, "intensity_max": 135, "intensityClass": "warmUp"},
          {"name": "Trote Z2 montaña", "duration_seconds": 1800, "intensity_min": 135, "intensity_max": 155, "intensityClass": "active"},
          {"name": "Vuelta calma trote suave", "duration_seconds": 600, "intensity_min": 100, "intensity_max": 120, "intensityClass": "coolDown"}
        ]
      }
    },
    {
      "date": "2026-05-18",
      "sport": "Walk",
      "title": "Teide - senderismo 17km gran desnivel",
      "description": "Subida al Teide andando. ~17km, desnivel +1200-1400m (depende del punto de salida). Esta es la sesion de montaña mas importante del bloque — reemplaza una tirada larga y la supera en desnivel. Ritmo de marcha constante, no hay prisa. A mas de 3000m la FC estara elevada aunque vayas despacio — es normal por la altitud, no te fies de las zonas. Hidratacion continua, gel o comida cada hora. Ropa de abrigo para la cima.",
      "tssPlanned": 90,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Subida Teide - marcha constante", "duration_seconds": 10800, "intensity_min": 120, "intensity_max": 165, "intensityClass": "active"},
          {"name": "Bajada - paso controlado", "duration_seconds": 7200, "intensity_min": 100, "intensity_max": 140, "intensityClass": "active"}
        ]
      }
    },
    {
      "date": "2026-05-19",
      "sport": "Other",
      "title": "Descanso activo post-Teide",
      "description": "Las piernas lo han notado. Paseo suave por Canarias si apetece, nada mas. Sin correr. Hidratacion y comida de calidad. Si las piernas estan bien al dia siguiente sera buena señal para el jueves.",
      "tssPlanned": 5
    },
    {
      "date": "2026-05-20",
      "sport": "Other",
      "title": "Viaje vuelta - descanso",
      "description": "Vuelo de vuelta por la tarde. Descanso completo por la manana. Hidratacion en el avion. Cero actividad — a partir de hoy empieza el taper final.",
      "tssPlanned": 0
    },
    {
      "date": "2026-05-21",
      "sport": "Run",
      "title": "Activacion final 20min + 2-3 strides",
      "description": "Activacion dos dias antes del Soplao. 12-15min trote MUY suave + 2-3 progresivos de 20s a ritmo de carrera, NO sprint. Mantente fresco. Solo despertar las piernas para que recuerden lo que les espera el sabado.",
      "tssPlanned": 12,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Trote muy suave", "duration_seconds": 780, "intensity_min": 118, "intensity_max": 142, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 3, "steps": [
            {"name": "20s ritmo carrera", "duration_seconds": 20, "intensity_min": 155, "intensity_max": 175, "intensityClass": "active"},
            {"name": "Recuperacion caminar", "duration_seconds": 90, "intensity_min": 95, "intensity_max": 120, "intensityClass": "rest"}
          ]}
        ]
      }
    },
    {
      "date": "2026-05-22",
      "sport": "Other",
      "title": "Descanso total - vispera El Soplao",
      "description": "Preparar material esta manana con calma. Hidratacion con electrolitos durante todo el dia. Cena rica en carbohidratos (lo que hayas probado antes en entrenos). A la cama pronto. Cero actividad fisica.",
      "tssPlanned": 0
    },
    {
      "date": "2026-05-23",
      "sport": "Run",
      "title": "EL SOPLAO 21km +800m - Dia de carrera",
      "description": "Desayuno 3h antes. Calentamiento: 10min trote MUY suave + movilidad articular + 2-3 progresivos de 15s. ESTRATEGIA: salida conservadora primeros 3-4km, las piernas calientan solas. Subida principal: ritmo controlado, no atacar. Bajadas tecnicas: tecnica limpia, no frenar de golpe. Hidratacion + gel cada 40-45min. El entrenamiento ya esta hecho — hoy es solo ejecutar.",
      "tssPlanned": null,
      "structure": {
        "primaryIntensityMetric": "heartRateBpm",
        "steps": [
          {"name": "Calentamiento trote muy suave", "duration_seconds": 600, "intensity_min": 120, "intensity_max": 140, "intensityClass": "warmUp"},
          {"type": "repetition", "reps": 3, "steps": [
            {"name": "Progresivo 15s", "duration_seconds": 15, "intensity_min": 155, "intensity_max": 175, "intensityClass": "active"},
            {"name": "Recuperacion", "duration_seconds": 60, "intensity_min": 100, "intensity_max": 130, "intensityClass": "rest"}
          ]},
          {"name": "Primeros km conservadores Z2", "duration_seconds": 1200, "intensity_min": 140, "intensity_max": 160, "intensityClass": "warmUp"},
          {"name": "Carrera ritmo objetivo Z2-Z3", "duration_seconds": 7200, "intensity_min": 150, "intensity_max": 175, "intensityClass": "active"}
        ]
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
