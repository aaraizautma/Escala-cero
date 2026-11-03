import { ModuleItem, VacancyComparison, Milestone } from '../types';

export const HERO_DATA = {
  kicker: "Aguascalientes · Alianza Estratégica UTMA · Talento Global",
  h1: "Transformamos Arquitectos Locales en Profesionales de Exportación Global",
  subtitle: "Monetiza tu conocimiento técnico actual optimizando AutoCAD con Inteligencia Artificial, mientras te certificas y migras progresivamente hacia el ecosistema BIM avanzado.",
  ctaPrimary: "Postular al Piloto Beta",
  ctaSecondary: "Explorar Ruta de 12 Semanas",
  badgeQuote: "El puente tecnológico que convierte horas de dibujo en ingresos remotos en dólares.",
  metrics: {
    salaryLocal: "$20,000 – $35,000 MXN",
    salaryRemote: "$35,000 – $80,000 MXN",
    salaryRemoteUsd: "$2,000 – $4,500 USD",
    placementTarget: "70%",
    minPlacement: "40%",
    placementTimeline: "Menos de 6 meses",
    certifications: ["Autodesk Certified User (ACU)", "Autodesk Certified Professional (ACP)"],
    projectsInPortfolio: "5 Proyectos Ejecutivos Acelerados con IA",
    linkedInStatus: "Perfil y presencia global optimizada para reclutadores de EE.UU."
  }
};

export const MANIFESTO_DATA = {
  title: "El Manifiesto: La Transición Energética del Arquitecto",
  subtitle: "AutoCAD no está muerto. Es el motor que factura hoy en el mundo real.",
  analogyCombustion: {
    title: "AutoCAD es el Motor de Combustión de Alta Eficiencia",
    description: "Domina el 75% del mercado de construcción activa en EE.UU. y LATAM. No se abandona lo que funciona y genera flujo de caja inmediato. Se optimiza y se le inyecta potencia tecnológica.",
    tagline: "Monetización Inmediata"
  },
  analogyTurboAI: {
    title: "Claude & ChatGPT son el Turbocargador de Productividad",
    description: "Multiplican por 3x la velocidad de redacción técnica, memorias descriptivas, cuantificación y documentación ejecutiva. Permiten calificar de inmediato a posiciones remotas Junior y Senior.",
    tagline: "Velocidad Disruptiva"
  },
  analogyElectricBIM: {
    title: "BIM es el Motor Eléctrico hacia el que Avanzamos",
    description: "La infraestructura digital del futuro. No saltas al vacío sin motor: construyes tus habilidades en Revit, coordinación MEP, detección de interferencias y Point Cloud con pasos firmes.",
    tagline: "Soberanía Técnica Futura"
  },
  corePrinciples: [
    {
      title: "Evolución sobre Ruptura",
      text: "No le pedimos al egresado que deseche sus años de AutoCAD. Le enseñamos a dominarlo a nivel experto internacional en 10 días asistido por prompts de IA."
    },
    {
      title: "Velocidad de Ingresos",
      text: "Mientras la universidad tradicional enseña teoría durante 5 años, nuestro modelo genera entregables comerciales y certificaciones para facturar en semanas."
    },
    {
      title: "Habilidades de Frontera",
      text: "Integramos Nubes de Puntos (Point Cloud) y escaneo láser 3D para posicionar al talento en la cúspide de la demanda de oficinas de arquitectura en Texas, California y Florida."
    }
  ]
};

export const MARKET_PROBLEM_DATA = {
  title: "La Paradoja del Talento vs. El Mercado Internacional",
  subtitle: "Universidades locales forman dibujantes de salarios de subsistencia. Las firmas internacionales buscan arquitectos estratégicos bilingües asistidos por tecnología.",
  painPoints: [
    {
      stat: "$8k – $14k MXN",
      label: "Salario promedio local de egresado en México",
      detail: "Jornadas de 50+ horas semanales en supervisión o dibujo básico sin proyección internacional."
    },
    {
      stat: "85%",
      label: "Desconexión curricular de la universidad tradicional",
      detail: "Planes de estudio con 8 años de atraso que ignoran IA generativa, Scan-to-BIM e inglés técnico."
    },
    {
      stat: "Fuga o Deserción",
      label: "Talento subempleado en Aguascalientes y Bajío",
      detail: "Profesionales talentosos obligados a abandonar su vocación por falta de canales de exportación."
    }
  ],
  pointCloudExplainer: {
    term: "Point Cloud (Nube de Puntos)",
    concept: "Millones de coordenadas 3D capturadas mediante escáneres láser y LiDAR en edificios existentes.",
    whyItMatters: "En EE.UU., el 70% del trabajo arquitectónico son remodelaciones y adecuaciones de edificios históricos y comerciales. Convertir una nube de puntos en un modelo BIM paramétrico (Scan-to-BIM) es hoy la habilidad mejor pagada y más escasa del mercado remoto."
  },
  vacancies: [
    {
      id: "perry-homes",
      role: "Architectural Drafter & Production Designer",
      company: "Perry Homes / Builder Tier-1 (EE.UU.)",
      salaryUsd: "$2,200 – $3,200 USD/mes",
      salaryMxn: "$38,000 – $55,000 MXN/mes",
      traditionalUniv: "Solo sabe dibujar planos en 2D sin estándares de capas AIA ni velocidad de producción.",
      escalaCeroProfile: "AutoCAD avanzado + Automatización con Claude/ChatGPT para especificaciones en tiempo récord.",
      keyTech: ["AutoCAD 2026", "AIA Layer Standards", "Claude Prompts", "Production Drafting"],
      location: "Remoto (Texas / EE.UU.)"
    },
    {
      id: "salas-obrien",
      role: "BIM Modeler & MEP Coordinator",
      company: "Salas O'Brien / Global Engineering",
      salaryUsd: "$3,000 – $4,500 USD/mes",
      salaryMxn: "$52,000 – $78,000 MXN/mes",
      traditionalUniv: "Nociones básicas de modelado 3D estético, sin comprensión de interferencias ni coordinación de disciplinas.",
      escalaCeroProfile: "Revit Architecture + Navisworks Clash Detection + Familias Paramétricas Nivel LOD 350.",
      keyTech: ["Revit 2026", "Navisworks", "Clash Detection", "MEP Coordination"],
      location: "Remoto (Norteamérica)"
    },
    {
      id: "bim-specialist",
      role: "Scan-to-BIM Specialist & Reality Capture",
      company: "International AEC Tech & Retrofit Firm",
      salaryUsd: "$3,800 – $5,200 USD/mes",
      salaryMxn: "$66,000 – $90,000 MXN/mes",
      traditionalUniv: "Desconoce por completo el flujo de escaneo láser y manipulación de nubes de puntos.",
      escalaCeroProfile: "Point Cloud a Revit + ReCap Pro + Verificación de tolerancias milimétricas en gemelos digitales.",
      keyTech: ["ReCap Pro", "Point Cloud to BIM", "Revit Advanced", "As-Built Modeling"],
      location: "Remoto Global"
    }
  ] as VacancyComparison[]
};

export const CURRICULUM_DATA: ModuleItem[] = [
  {
    id: 1,
    title: "AutoCAD Internacional y Estándares de Producción",
    phase: "Fase 1: Motor de Ingresos Inmediatos",
    weeks: "Semana 1 - 2",
    tagline: "El motor de combustión afinado al milímetro",
    description: "Dominio de plantillas AIA, sistemas de capas internacionales, bloques dinámicos paramétricos y velocidad de documentación requerida por despachos en EE.UU.",
    deliverables: ["Set de planos ejecutivos residenciales bajo norma US", "Librería de bloques dinámicos comerciales"],
    tools: ["AutoCAD 2026", "AIA Standards", "Dynamic Blocks"]
  },
  {
    id: 2,
    title: "Revit Architecture Fundamentals & Modelado Paramétrico",
    phase: "Fase 1: Motor de Ingresos Inmediatos",
    weeks: "Semana 3",
    tagline: "La transición al modelo de información único",
    description: "Estructura de proyectos BIM, muros compuestos, carpinterías, escaleras complejas y generación automática de tablas de cuantificación.",
    deliverables: ["Modelo BIM residencial completo nivel LOD 300 con vistas coordinadas"],
    tools: ["Autodesk Revit", "Schedules & Quantities"]
  },
  {
    id: 3,
    title: "BIM Coordination & Gestión de Información",
    phase: "Fase 2: Consolidación BIM",
    weeks: "Semana 4",
    tagline: "Pensar en datos, no solo en geometrías",
    description: "Vínculos entre disciplinas (Arquitectura, Estructura, MEP), fases constructivas, opciones de diseño y flujos de trabajo colaborativos en la nube.",
    deliverables: ["Estructura de archivo central colaborativo y matriz de fases constructivas"],
    tools: ["Autodesk Docs", "BIM 360", "Worksharing"]
  },
  {
    id: 4,
    title: "Familias Paramétricas Avanzadas (Custom Content Creation)",
    phase: "Fase 2: Consolidación BIM",
    weeks: "Semana 5",
    tagline: "El nicho de alta remuneración para consultores",
    description: "Creación de familias paramétricas complejas con fórmulas anidadas, visibilidad por tipos y parámetros compartidos para fabricantes internacionales.",
    deliverables: ["Catálogo de 10 familias paramétricas inteligentes listas para mercado"],
    tools: ["Revit Family Editor", "Shared Parameters"]
  },
  {
    id: 5,
    title: "Navisworks & Clash Detection (Auditoría de Modelos)",
    phase: "Fase 2: Consolidación BIM",
    weeks: "Semana 6",
    tagline: "Cero errores en obra: la garantía de valor del egresado",
    description: "Detección automatizada de colisiones espaciales entre arquitectura e instalaciones. Generación de reportes de interferencias ejecutables.",
    deliverables: ["Reporte BCF de Clash Detection con resolución de 25 interferencias críticas"],
    tools: ["Autodesk Navisworks Manage", "Clash Detective", "BCF"]
  },
  {
    id: 6,
    title: "Arquitectura Aumentada con IA (Claude + ChatGPT)",
    phase: "Fase 3: El Acelerador Tecnológico",
    weeks: "Semana 7 - 8",
    tagline: "Multiplica tu entrega por tres: el diferenciador Escala Cero",
    description: "Generación automatizada de memorias descriptivas, análisis de normativas locales e internacionales con Claude, scripts de Dynamo generados por IA y optimización de flujos de trabajo.",
    deliverables: ["Sistema de prompts auditado para memorias de cálculo y redacción ejecutiva en 15 minutos"],
    tools: ["Claude 3.7", "ChatGPT-4o", "Dynamo AI Scripts"]
  },
  {
    id: 7,
    title: "Scan-to-BIM (Point Cloud) y Visualización Fotorrealista",
    phase: "Fase 3: El Acelerador Tecnológico",
    weeks: "Semana 9",
    tagline: "Dominio de la habilidad más codiciada en EE.UU.",
    description: "Importación e indexación de nubes de puntos de escáner láser (LiDAR) en ReCap Pro y modelado de as-builts en Revit. Renders hiperrealistas con Enscape y Twinmotion.",
    deliverables: ["Modelo As-Built levantado desde Nube de Puntos real + 4 renders de portafolio"],
    tools: ["Autodesk ReCap Pro", "Twinmotion", "Enscape"]
  },
  {
    id: 8,
    title: "Inglés Técnico de Construcción y Comunicación Asincrónica",
    phase: "Fase 4: Colocación Internacional",
    weeks: "Semana 10",
    tagline: "Rompe la barrera del idioma en entornos técnicos",
    description: "Vocabulario constructivo en inglés estadounidense (framing, drywall, HVAC, permits, RFIs), redacción de correos corporativos y reportes diarios asincrónicos.",
    deliverables: ["Simulacro de RFI (Request for Information) y presentación ejecutiva en inglés"],
    tools: ["AEC English Glossary", "Loom Video Briefs", "Slack Async"]
  },
  {
    id: 9,
    title: "Perfil Global: LinkedIn, Portafolio Web & Upwork Pro",
    phase: "Fase 4: Colocación Internacional",
    weeks: "Semana 11",
    tagline: "Venderse como activo estratégico de alto valor",
    description: "Optimización SEO de perfil LinkedIn para reclutadores de EE.UU., portafolio curado en Notion/Web con los 5 proyectos ejecutivos del programa y perfil verificado en Upwork/Toptal.",
    deliverables: ["Portafolio web publicado con 5 casos de estudio", "Perfil LinkedIn optimizado con palabras clave ATS"],
    tools: ["LinkedIn ATS Optimizer", "Notion AEC Portfolio", "Upwork Enterprise"]
  },
  {
    id: 10,
    title: "Simulación de Entrevistas Técnicas & Onboarding Remoto",
    phase: "Fase 4: Colocación Internacional",
    weeks: "Semana 12",
    tagline: "Cierre de contratos y negociación salarial",
    description: "Pruebas técnicas cronometradas en vivo, resolución de retos de modelado bajo presión, negociación de tarifas horarias en dólares y gestión de contratos a través de Deel.",
    deliverables: ["Evaluación técnica superada al 100% ante panel de expertos evaluadores"],
    tools: ["Deel Contractor Setup", "Live CAD/BIM Speed Test"]
  }
];

export const TRIPLE_IMPACT_DATA = {
  title: "Viabilidad Institucional y Modelo de Triple Impacto",
  subtitle: "Una alianza virtuosa donde ganan el arquitecto egresado, la universidad pública y el Estado de Aguascalientes.",
  pillars: [
    {
      id: "egresado",
      entity: "Para el Egresado",
      tagline: "Movilidad Social y Libertad Financiera",
      metrics: "Incremento salarial de 3x a 5x",
      points: [
        "Ingresos en dólares ($2,000 a $4,500 USD/mes) sin necesidad de migrar ni separarse de su familia.",
        "Acceso a esquema de Acuerdo de Ingresos Compartidos (ISA): el alumno solo paga un porcentaje cuando ya está colocado ganando por encima del umbral acordado.",
        "Portafolio comprobable con 5 proyectos internacionales y certificaciones oficiales Autodesk.",
        "Flexibilidad horaria que permite emprender proyectos arquitectónicos locales en paralelo."
      ]
    },
    {
      id: "utma",
      entity: "Para la UTMA y Universidades",
      tagline: "Prestigio de Vanguardia y Cero Costo de Capital",
      metrics: "+70% de colocación calificada",
      points: [
        "Apalancamiento de infraestructura instalada: aprovechamiento de aulas de cómputo y licencias educativas ya vigentes en horarios disponibles.",
        "Posicionamiento de la UTMA como la universidad referente de tecnologías BIM e IA en todo el Bajío mexicano.",
        "Aumento exponencial en indicadores de empleabilidad y vinculación productiva que exige la federación y el estado.",
        "Capacitación continua y actualización para el cuerpo docente universitario."
      ]
    },
    {
      id: "aguascalientes",
      entity: "Para Aguascalientes y la Región",
      tagline: "Atracción de Divisas y Freno a la Fuga de Cerebros",
      metrics: "$48 Millones MXN / año por cada 100 alumnos",
      points: [
        "Retención del talento más brillante en el estado: arquitectos que gastan, invierten y tributan en Aguascalientes.",
        "Inyección directa de capital extranjero: con 100 egresados promediando $40,000 MXN mensuales, ingresan $4,000,000 MXN mensuales a la economía local.",
        "Conversión de Aguascalientes de un centro manufacturero tradicional a un Hub de Exportación de Servicios Digitales Arquitectónicos de alto valor.",
        "Sinergia con agendas de innovación de SEDECYT e IDSCEA para captar fondos públicos y filantrópicos."
      ]
    }
  ],
  simulationData: {
    graduatesDefault: 100,
    salaryDefault: 40000, // MXN
    monthlyInjection: 4000000,
    annualInjection: 48000000
  }
};

export const GOVERNANCE_DATA = {
  title: "Respaldo Legal, Certificaciones Oficiales y Alianzas",
  subtitle: "Arquitectura institucional sólida: transparencia sin fines de lucro combinada con agilidad comercial.",
  hybridStructure: {
    title: "Estructura Híbrida Blindada (A.C. + S.C.)",
    acSide: {
      name: "Asociación Civil (A.C.)",
      role: "Vehículo de Impacto Social y Fondos Públicos",
      features: [
        "Firma de convenios de colaboración y comodato con la UTMA y dependencias de gobierno.",
        "Recepción de subsidios, donativos y becas de impacto (SEDECYT, IDSCEA, fundaciones).",
        "Gobernanza académica, becas al 100% para alumnos en vulnerabilidad y auditoría de impacto."
      ]
    },
    scSide: {
      name: "Sociedad Civil (S.C.)",
      role: "Vehículo Operativo y Comercial",
      features: [
        "Gestión legal de los Acuerdos de Ingresos Compartidos (ISAs) con los egresados.",
        "Facturación a empresas internacionales empleadoras y gestión de colocación.",
        "Sostenibilidad financiera y escalamiento comercial del modelo."
      ]
    }
  },
  certifications: [
    {
      provider: "Autodesk",
      tier: "Autodesk Certified User (ACU)",
      scope: "AutoCAD & Revit Architecture",
      validity: "Validez Internacional Oficial Autodesk"
    },
    {
      provider: "Autodesk",
      tier: "Autodesk Certified Professional (ACP)",
      scope: "BIM Modeling, Coordination & Navisworks",
      validity: "Estándar de Oro en la industria AEC de EE.UU."
    },
    {
      provider: "Graphisoft / openBIM",
      tier: "BuildingSMART openBIM Standards",
      scope: "Interoperabilidad IFC & Protocolos ISO 19650",
      validity: "Requisito para proyectos gubernamentales y transnacionales"
    }
  ],
  fundingTargets: [
    { name: "BID Lab", category: "Innovación y Empleo Juvenil LATAM" },
    { name: "Autodesk Foundation", category: "Tecnología AEC para el Desarrollo Comunitario" },
    { name: "Microsoft Philanthropies", category: "Capacitación en Inteligencia Artificial y Trabajo Digital" },
    { name: "SEDECYT Aguascalientes", category: "Fondo de Desarrollo de Talento Estratégico Estatal" },
    { name: "IDSCEA", category: "Innovación y Divulgación Científica y Tecnológica" }
  ]
};

export const ROADMAP_DATA: Milestone[] = [
  {
    phase: "Fase 1",
    year: "Q1 - Q2 2027",
    title: "Alianzas Estratégicas y Convenio Marco",
    status: "completado",
    description: "Firma de Convenio de Colaboración UTMA - Escala Cero. Validación de laboratorios de cómputo, licencias educativas y constitución de la figura híbrida A.C. / S.C.",
    kpi: "MOU formalizado + infraestructura lista"
  },
  {
    phase: "Fase 2",
    year: "Q3 2027",
    title: "Convocatorias y Fondos Semilla",
    status: "en_progreso",
    description: "Presentación y aprobación de expedientes ante SEDECYT e IDSCEA para becas de arranque. Prospección inicial con firmas de EE.UU. interesadas en talento mexicano.",
    kpi: "Fondo de becas asegurado para la primera generación"
  },
  {
    phase: "Fase 3",
    year: "Q4 2027",
    title: "Piloto Beta (Generación Pionera 10)",
    status: "en_progreso",
    description: "Selección rigurosa de los 10 mejores alumnos de arquitectura y diseño digital de Aguascalientes. Ejecución del programa intensivo EVO de 12 semanas.",
    kpi: "10 alumnos certificados + 50 proyectos ejecutivos producidos"
  },
  {
    phase: "Fase 4",
    year: "Q1 - Q2 2028",
    title: "Colocación Internacional y Validación del Modelo ISA",
    status: "planificado",
    description: "Despliegue de portafolios en plataformas remotas (Upwork, Deel, firmas texanas). Primeros contratos remotos cerrados y activación del flujo de recuperación de inversión.",
    kpi: "Meta: 70% de colocación laboral en menos de 6 meses"
  },
  {
    phase: "Fase 5",
    year: "2029 - 2030",
    title: "Consolidación del Centro BIM del Bajío",
    status: "planificado",
    description: "Ampliación de capacidad a 250 alumnos anuales. Apertura del laboratorio especializado en Escaneo Láser 3D y Nube de Puntos (Reality Capture) en la UTMA.",
    kpi: "250 egresados/año · $120M MXN derrama anual en el estado"
  },
  {
    phase: "Fase 6",
    year: "2031",
    title: "Escala Cero Nacional: 1,000 Arquitectos de Exportación",
    status: "planificado",
    description: "Expansión del consorcio a 5 universidades tecnológicas de México, convirtiendo al país en el principal exportador de servicios BIM para Norteamérica.",
    kpi: "1,000 arquitectos colocados globalmente · $480M MXN anuales inyectados"
  }
];
