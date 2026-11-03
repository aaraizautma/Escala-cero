import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';

interface CopywriterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopywriterDrawer: React.FC<CopywriterDrawerProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const FULL_COPY_MARKDOWN = `### SECCIÓN 1: HERO (Inicio de la página)
[Sugerencia de componente de UI: Estructura Split 60/40 con titular de alto contraste + métricas cuantitativas adyacentes + fotografía cinemática de estudio arquitectónico]

- **Kicker de Autoridad:** Aguascalientes · Alianza Estratégica UTMA · Hub de Exportación de Talento Digital
- **H1 (Título Principal):** Transformamos Arquitectos Locales en Profesionales de Exportación Global
- **Subtítulo:** Monetiza tu conocimiento actual optimizando AutoCAD con Inteligencia Artificial, mientras te certificas y migras progresivamente hacia el ecosistema BIM avanzado.

**Métricas de Impacto / Promesa Medible (Social Proof Visual):**
- **Sueldo objetivo egreso México:** $20,000 – $35,000 MXN mensuales (Mercado local tradicional).
- **Sueldo Internacional remoto:** $35,000 – $80,000 MXN mensuales ($2,000 – $4,500 USD).
- **Meta Piloto:** 70% de colocación laboral en menos de 6 meses (Piso mínimo contractual: 40%).
- **Entregables garantizados por alumno:** 
  * 2 Certificaciones Oficiales Autodesk (Certified User & Certified Professional en AutoCAD y Revit).
  * Portafolio Internacional de 5 proyectos ejecutivos acelerados con IA.
  * Perfil LinkedIn optimizado con filtros ATS para reclutadores de EE.UU.
- **CTA Principal:** [Botón de Alto Impacto] "Postular al Piloto Beta"
- **CTA Secundario:** [Enlace de exploración] "Explorar Ruta de 12 Semanas"

---

### SECCIÓN 2: EL MANIFIESTO — LA TRANSICIÓN ENERGÉTICA DEL ARQUITECTO
[Sugerencia de componente de UI: Selector interactivo o infografía comparativa del motor híbrido: Motor de Combustión (AutoCAD) + Turbocargador (IA Claude/ChatGPT) + Motor Eléctrico (BIM)]

- **Tesis Central:** AutoCAD no está muerto. Es la potencia activa que hoy domina y monetiza más del 75% del mercado de construcción real en EE.UU. y LATAM.
- **La Analogía del Motor:**
  * **AutoCAD es el Motor de Combustión de Alta Eficiencia:** Genera flujo de caja y facturación inmediata. No se desecha; se afina al milímetro con estándares internacionales (norma AIA).
  * **Claude & ChatGPT son el Turbocargador:** Multiplican por 3x la velocidad de dibujo técnico, memorias descriptivas y cuantificaciones. Permiten a un arquitecto junior producir con la solvencia de un senior.
  * **BIM es el Motor Eléctrico:** La infraestructura del futuro hacia la que avanzamos con pasos firmes (Revit, Navisworks, coordinación MEP y nubes de puntos).
- **Punchy List — Principios Rectores:**
  * **Evolución sobre Ruptura:** No destruyas tus horas de AutoCAD; poténcialas con IA desde el día 1.
  * **Monetización en Paralelo:** Genera ingresos remotos en dólares hoy mientras adquieres las competencias BIM del mañana.
  * **Cero Dogma Teórico:** Todo lo que se enseña se traduce en horas facturables en plataformas internacionales.

---

### SECCIÓN 3: EL PROBLEMA DEL MERCADO VS. NUESTRA METODOLOGÍA (Teoría de Cambio)
[Sugerencia de componente de UI: Matriz comparativa de 3 vacantes reales del mercado internacional vs. perfil tradicional universitario vs. perfil de egreso Escala Cero + Desglose visual de Point Cloud]

**El Dolor Real del Egresado Local:**
- **Salarios de subsistencia:** $8,000 a $14,000 MXN mensuales en despachos locales por semanas de 50+ horas.
- **Desconexión académica:** Universidades con 8 años de atraso curricular que ignoran IA generativa, escaneo láser y coordinación BIM.
- **Fuga de cerebros:** Talento excepcional subempleado o forzado a abandonar la arquitectura.

**Tabla Comparativa de 3 Vacantes Internacionales Reales:**
1. **Perry Homes (Drafter & Production Designer - Texas / EE.UU.):**
   * *Rango Salarial:* $2,200 – $3,200 USD/mes ($38,000 – $55,000 MXN/mes).
   * *Universidad Tradicional:* Dibuja planos en 2D sin capas AIA ni ritmo de producción.
   * *Perfil Escala Cero:* AutoCAD de alta precisión + Automatización con Claude/ChatGPT para entregas en un tercio del tiempo.
2. **Salas O'Brien (BIM Modeler & MEP Coordinator - Norteamérica):**
   * *Rango Salarial:* $3,000 – $4,500 USD/mes ($52,000 – $78,000 MXN/mes).
   * *Universidad Tradicional:* Modelado 3D superficial sin detección de interferencias.
   * *Perfil Escala Cero:* Revit Architecture + Navisworks Clash Detection + Familias Paramétricas LOD 350.
3. **Scan-to-BIM Specialist & Reality Capture (Firma Global AEC):**
   * *Rango Salarial:* $3,800 – $5,200 USD/mes ($66,000 – $90,000 MXN/mes).
   * *Universidad Tradicional:* Desconoce por completo el flujo de escaneo láser 3D.
   * *Perfil Escala Cero:* Dominio de Autodesk ReCap Pro + Modelado de Nubes de Puntos (Point Cloud) a Revit con precisión milimétrica.

**¿Qué es Point Cloud (Nube de Puntos)? El Diferenciador Experto:**
- **Definición sencilla:** Millones de coordenadas espaciales 3D capturadas mediante escáneres láser y LiDAR en edificios existentes.
- **Por qué paga fortunas:** El 70% de la construcción en EE.UU. es remodelación y adecuación de inmuebles existentes. Convertir una nube de puntos en un modelo paramétrico BIM (Scan-to-BIM) es hoy la habilidad más cotizada y escasa del mercado remoto.

---

### SECCIÓN 4: RUTA DE APRENDIZAJE EVO (Los 10 Módulos de la Incubadora)
[Sugerencia de componente de UI: Navegador interactivo de módulos con pestañas por fase, cronograma semanal y tarjeta de entregables por portafolio]

**Fase 1: El Motor de Ingresos Inmediatos (Semanas 1 a 3)**
- **Módulo 1: AutoCAD Profesional de Alta Producción (Sem. 1-2)**
  * *Entregable:* Set de planos ejecutivos residenciales bajo normas AIA y librería de bloques dinámicos paramétricos.
  * *Herramientas:* AutoCAD 2026, AIA Layer Standards.
- **Módulo 2: Revit Architecture Fundamentals (Sem. 3)**
  * *Entregable:* Modelo BIM residencial completo nivel LOD 300 con vistas coordinadas y tablas automáticas.
  * *Herramientas:* Autodesk Revit, Schedules.

**Fase 2: Consolidación BIM (Semanas 4 a 6)**
- **Módulo 3: BIM Coordination & Gestión de Información (Sem. 4)**
  * *Entregable:* Estructura colaborativa central y matriz de fases constructivas.
  * *Herramientas:* Autodesk Docs, Worksharing.
- **Módulo 4: Familias Paramétricas Avanzadas (Sem. 5)**
  * *Entregable:* Catálogo de 10 familias inteligentes con parámetros compartidos para fabricantes.
  * *Herramientas:* Revit Family Editor.
- **Módulo 5: Navisworks & Clash Detection (Sem. 6)**
  * *Entregable:* Reporte BCF con resolución de 25 interferencias críticas interdisciplinarias.
  * *Herramientas:* Autodesk Navisworks Manage, Clash Detective.

**Fase 3: El Acelerador Tecnológico (Semanas 7 a 9)**
- **Módulo 6: Arquitectura Aumentada con IA — Claude + ChatGPT (Sem. 7-8)**
  * *Entregable:* Sistema auditado de prompts para memorias descriptivas, análisis normativo y scripts de Dynamo en minutos.
  * *Herramientas:* Claude 3.7, ChatGPT-4o, Dynamo Scripts.
- **Módulo 7: Scan-to-BIM (Point Cloud) & Visualización (Sem. 9)**
  * *Entregable:* Modelo As-Built levantado desde Nube de Puntos real + 4 renders de portafolio fotorrealistas.
  * *Herramientas:* Autodesk ReCap Pro, Twinmotion, Enscape.

**Fase 4: Colocación Internacional (Semanas 10 a 12)**
- **Módulo 8: Inglés Técnico de Construcción y Comunicación Asincrónica (Sem. 10)**
  * *Entregable:* Simulacro de RFI (Request for Information) y presentación ejecutiva en inglés estadounidense.
  * *Herramientas:* AEC US Glossary, Loom, Slack.
- **Módulo 9: Perfil Global: LinkedIn ATS & Portafolio Web (Sem. 11)**
  * *Entregable:* Portafolio web publicado con 5 casos de estudio reales y perfil optimizado para reclutadores de EE.UU.
  * *Herramientas:* LinkedIn ATS Optimizer, Notion AEC Portfolio.
- **Módulo 10: Simulación de Entrevistas Técnicas & Onboarding Remoto (Sem. 12)**
  * *Entregable:* Evaluación técnica superada al 100% y configuración de contratación remota en dólares.
  * *Herramientas:* Deel Contractor Setup, Live Speed Test.

---

### SECCIÓN 5: VIABILIDAD INSTITUCIONAL Y TRIPLE IMPACTO (Ecosistema Escala Cero)
[Sugerencia de componente de UI: Gráfico de derrama económica interactivo con simulador de alumnos y proyección de divisas para el estado]

- **Para el Egresado:**
  * Empleos remotos estables en dólares ($2,000 a $4,500 USD/mes).
  * Flexibilidad horaria para emprender o dirigir obras locales en paralelo.
  * Esquema de Acuerdo de Ingresos Compartidos (ISA): solo paga cuando ya tiene empleo calificado.
- **Para la UTMA y Universidades Públicas:**
  * Incremento radical en indicadores de empleabilidad y colocación (>70%).
  * Consolidación como referente tecnológico en el Bajío sin requerir un solo peso de inversión en nuevo equipamiento (apalancamiento de aulas y licencias existentes).
  * Actualización técnica continua para el claustro docente.
- **Para Aguascalientes y la Región:**
  * Freno a la fuga de talento local (arquitectos que viven, consumen e invierten en Aguascalientes).
  * **Inyección de Capital Directa:** Con solo 100 egresados colocados ganando $40,000 MXN mensuales entran $4,000,000 MXN al mes al estado ($48,000,000 MXN anuales en divisas netas).
  * Transformación de la vocación económica del estado hacia la exportación de servicios digitales intensivos en conocimiento.

---

### SECCIÓN 6: RESPALDO LEGAL, CERTIFICACIONES Y ALIANZAS
[Sugerencia de componente de UI: Tarjetas de gobernanza dual (A.C. + S.C.) + Matriz de sellos de certificación oficial + Logos de fondos]

- **Estructura Híbrida Segura:**
  * **Asociación Civil (A.C.):** Vehículo institucional sin fines de lucro para firmar convenios con la UTMA, gestionar becas públicas (SEDECYT / IDSCEA) y canalizar donativos de impacto.
  * **Sociedad Civil (S.C.):** Vehículo comercial para la administración ágil de Acuerdos de Ingresos Compartidos (ISAs), relación con despachos en EE.UU. y cobranza internacional.
- **Garantía de Certificación Oficial:**
  * Autodesk Certified User (ACU) en AutoCAD y Revit.
  * Autodesk Certified Professional (ACP) en modelado y coordinación BIM.
  * Estándares BuildingSMART openBIM & ISO 19650.
- **Alianzas y Fondos Internacionales en la Mira:**
  * BID Lab (Innovación y Empleo Juvenil).
  * Autodesk Foundation (Desarrollo Comunitario con Tecnología AEC).
  * Microsoft Philanthropies (IA y Capacitación Digital).
  * SEDECYT e IDSCEA Aguascalientes.

---

### SECCIÓN 7: HOJA DE RUTA Y VISIÓN A 5 AÑOS (Línea de Tiempo)
[Sugerencia de componente de UI: Línea de tiempo cronológica por fases con hitos de validación, escalamiento y metas anuales]

- **Fase 1 (Q1-Q2 2027) — Alianzas y Convenio:** Firma del convenio de colaboración UTMA - Escala Cero, alistamiento de laboratorios y constitución jurídica híbrida.
- **Fase 2 (Q3 2027) — Convocatorias y Fondos:** Armado de expedientes ante SEDECYT e IDSCEA para becas de arranque. Prospección con firmas de EE.UU.
- **Fase 3 (Q4 2027) — Piloto Beta Pionero:** Admisión de la primera generación de 10 alumnos destacados de Aguascalientes. 12 semanas intensivas.
- **Fase 4 (Q1-Q2 2028) — Colocación y Validación de ISAs:** Despliegue de portafolios, colocación laboral mínima del 70% en firmas remotas y validación financiera del modelo ISA.
- **Fase 5 (2029-2030) — Centro BIM del Bajío:** Ampliación a 250 alumnos anuales e inauguración del laboratorio especializado de Escaneo Láser 3D / Scan-to-BIM en la UTMA ($120M MXN de derrama anual).
- **Fase 6 (2031) — Escala Cero Nacional:** Consorcio con 5 universidades tecnológicas de México y 1,000 arquitectos colocados internacionalmente ($480M MXN anuales inyectados en la economía).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl h-full bg-slate-900 text-white shadow-2xl flex flex-col border-l border-slate-700">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-blue-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Modo Copywriter & Arquitectura de Contenidos
              </h3>
              <p className="text-xs text-slate-400">
                Estructura de copy-paste directo para diseño web y presentaciones
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(FULL_COPY_MARKDOWN, 'full')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {copiedSection === 'full' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Todo el Copy</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable text container */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-slate-300 space-y-6 leading-relaxed selection:bg-blue-500 selection:text-white">
          <div className="p-3 bg-blue-950/60 border border-blue-800/80 rounded-lg text-blue-200 text-xs font-sans">
            <strong>Instrucción cumplida:</strong> A continuación se presenta el copy exacto, estructurado en las 7 secciones obligatorias con viñetas cortas de alto impacto y notas de diseño entre corchetes [ ].
          </div>

          <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
            {FULL_COPY_MARKDOWN}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Escala Cero · Alianza UTMA Aguascalientes</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg"
          >
            Cerrar Vista
          </button>
        </div>

      </div>
    </div>
  );
};
