import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../data/landingData';
import { CheckCircle2, ChevronRight, Clock, Box, Sparkles, Globe, Terminal } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [activePhaseFilter, setActivePhaseFilter] = useState<string>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);

  const phases = [
    { id: 'all', label: 'Los 10 Módulos Completos (12 Semanas)' },
    { id: 'fase-1', label: 'Fase 1: Motor de Ingresos Inmediatos (Mód. 1-2)' },
    { id: 'fase-2', label: 'Fase 2: Consolidación BIM (Mód. 3-5)' },
    { id: 'fase-3', label: 'Fase 3: Acelerador Tecnológico & IA (Mód. 6-7)' },
    { id: 'fase-4', label: 'Fase 4: Colocación Internacional (Mód. 8-10)' }
  ];

  const filteredModules = CURRICULUM_DATA.filter(mod => {
    if (activePhaseFilter === 'fase-1') return mod.id <= 2;
    if (activePhaseFilter === 'fase-2') return mod.id >= 3 && mod.id <= 5;
    if (activePhaseFilter === 'fase-3') return mod.id >= 6 && mod.id <= 7;
    if (activePhaseFilter === 'fase-4') return mod.id >= 8;
    return true;
  });

  const selectedModule = CURRICULUM_DATA.find(m => m.id === selectedModuleId) || CURRICULUM_DATA[0];

  return (
    <section id="ruta-evo" className="py-20 bg-[#071328] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Explorador modular con desglose semana a semana, entregables auditados por módulo y software oficial de la industria].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 4: RUTA EVO</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-3">
            <span>Currícula Intensiva · 12 Semanas</span>
            <span aria-hidden="true" className="text-blue-600">·</span>
            <span>No Formamos Operarios, Formamos Arquitectos Estratégicos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            Ruta de Aprendizaje EVO: 10 Módulos de Alto Rendimiento
          </h2>
          <p className="text-base text-blue-100/80 leading-relaxed">
            Diseñada de atrás hacia adelante a partir de los requerimientos de contratación en EE.UU. y Europa. 
            Cada módulo concluye con un entregable tangible y auditable para tu portafolio internacional.
          </p>
        </div>

        {/* Phase Filter Controls (Buttons/Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {phases.map(phase => (
            <button
              key={phase.id}
              onClick={() => setActivePhaseFilter(phase.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activePhaseFilter === phase.id
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-xs'
                  : 'bg-blue-950/70 text-blue-200 hover:bg-blue-900/60 border border-blue-800/60'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>

        {/* 2-Column Split: Module List (Left) + Detailed Deep-Dive (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-2">
            {filteredModules.map(mod => {
              const isSelected = selectedModuleId === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f2852] border-cyan-400 shadow-md ring-1 ring-cyan-400/30'
                      : 'bg-[#0a1b38] border-blue-800/40 hover:border-blue-700 hover:bg-[#0c2246]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-blue-300 mb-1">
                    <span className="font-mono font-bold text-cyan-300">MÓDULO {mod.id < 10 ? `0${mod.id}` : mod.id}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-blue-400" />
                      {mod.weeks}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                    {mod.title}
                  </h4>
                  <p className="text-xs text-blue-300/80 line-clamp-1 mt-1">
                    {mod.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Module Deep-Dive Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 sm:p-8 shadow-lg">
            
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-blue-800/60 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase block mb-1">
                  {selectedModule.phase} · {selectedModule.weeks}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Módulo {selectedModule.id}: {selectedModule.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-900/80 border border-blue-600/60 flex items-center justify-center text-cyan-300 font-extrabold font-mono text-lg shrink-0">
                {selectedModule.id < 10 ? `0${selectedModule.id}` : selectedModule.id}
              </div>
            </div>

            {/* Tagline callout */}
            <div className="p-3.5 bg-blue-950/70 border border-blue-700/50 rounded-lg text-xs font-semibold text-cyan-200 italic mb-6">
              "{selectedModule.tagline}"
            </div>

            {/* Description */}
            <div className="mb-6">
              <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                Objetivo y Competencias Estratégicas:
              </h5>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                {selectedModule.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                Entregable de Alto Impacto para Portafolio:
              </h5>
              <div className="space-y-2">
                {selectedModule.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-lg text-xs text-emerald-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software and Tools */}
            <div className="pt-4 border-t border-blue-800/60">
              <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                Ecosistema de Software & Herramientas:
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedModule.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950/80 border border-blue-600/50 rounded-md text-xs font-mono font-medium text-cyan-200 shadow-2xs"
                  >
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 4 Phase Summary Strip */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-[#0a1c38] border border-blue-800/50 rounded-lg">
            <span className="font-mono font-bold text-amber-400 block mb-1">MÓDULOS 1 & 2</span>
            <span className="font-bold text-white block mb-1">Motor de Ingresos Inmediatos</span>
            <span className="text-blue-200/70">AutoCAD 2D avanzado + Revit Architecture inicial para comenzar a postular rápido.</span>
          </div>

          <div className="p-4 bg-[#0a1c38] border border-blue-800/50 rounded-lg">
            <span className="font-mono font-bold text-cyan-400 block mb-1">MÓDULOS 3 AL 5</span>
            <span className="font-bold text-white block mb-1">Consolidación BIM</span>
            <span className="text-blue-200/70">BIM Fundamentals, Familias Paramétricas y Clash Detection en Navisworks.</span>
          </div>

          <div className="p-4 bg-[#0a1c38] border border-blue-800/50 rounded-lg">
            <span className="font-mono font-bold text-purple-400 block mb-1">MÓDULOS 6 & 7</span>
            <span className="font-bold text-white block mb-1">Acelerador IA & Point Cloud</span>
            <span className="text-blue-200/70">Claude/ChatGPT para memorias ultra-rápidas + ReCap Pro para escaneos LiDAR.</span>
          </div>

          <div className="p-4 bg-[#0a1c38] border border-blue-800/50 rounded-lg">
            <span className="font-mono font-bold text-emerald-400 block mb-1">MÓDULOS 8 AL 10</span>
            <span className="font-bold text-white block mb-1">Colocación Internacional</span>
            <span className="text-blue-200/70">LinkedIn ATS, inglés técnico, Upwork y cierre de contratos en dólares vía Deel.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
