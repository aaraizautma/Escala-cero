import React, { useState } from 'react';
import { MANIFESTO_DATA } from '../data/landingData';
import { Flame, Zap, Cpu, ArrowRight, ShieldCheck, Clock, Gauge } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<'combustion' | 'turbo' | 'electric'>('combustion');

  return (
    <section id="manifiesto" className="py-20 bg-[#061226] text-white relative overflow-hidden border-b border-blue-900/50">
      {/* Background blueprint subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Componente interactivo del Puente Tecnológico: selector de las 3 fases del motor (Combustión / Turbocargador IA / Eléctrico BIM) con métricas de facturación real].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 2: EL MANIFIESTO</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">
            <span>Filosofía de Transición</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>El Puente Tecnológico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            {MANIFESTO_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            AutoCAD no está muerto. En Escala Cero desafiamos el dogma académico tradicional: no obligamos al alumno a tirar a la basura años de formación en CAD. 
            Evolucionamos su motor existente con Inteligencia Artificial para generar ingresos inmediatos mientras migramos ordenadamente a BIM.
          </p>
        </div>

        {/* The 3 Engines: Visual Analogies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: AutoCAD (Combustión) */}
          <div 
            onClick={() => setActiveEngine('combustion')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeEngine === 'combustion' 
                ? 'bg-slate-800/90 border-amber-500/80 shadow-lg ring-1 ring-amber-500/40' 
                : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-amber-400 font-mono uppercase tracking-wider">
                Hoy (Facturación)
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {MANIFESTO_DATA.analogyCombustion.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {MANIFESTO_DATA.analogyCombustion.description}
            </p>
            <div className="pt-3 border-t border-slate-700/60 text-xs text-amber-300/90 flex items-center gap-1.5 font-medium">
              <Gauge className="w-3.5 h-3.5" />
              <span>{MANIFESTO_DATA.analogyCombustion.tagline}</span>
            </div>
          </div>

          {/* Card 2: IA Claude & ChatGPT (Turbocargador) */}
          <div 
            onClick={() => setActiveEngine('turbo')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeEngine === 'turbo' 
                ? 'bg-slate-800/90 border-blue-500/80 shadow-lg ring-1 ring-blue-500/40' 
                : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-blue-400 font-mono uppercase tracking-wider">
                Multiplicador 3x
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {MANIFESTO_DATA.analogyTurboAI.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {MANIFESTO_DATA.analogyTurboAI.description}
            </p>
            <div className="pt-3 border-t border-slate-700/60 text-xs text-blue-300/90 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{MANIFESTO_DATA.analogyTurboAI.tagline}</span>
            </div>
          </div>

          {/* Card 3: BIM (Motor Eléctrico) */}
          <div 
            onClick={() => setActiveEngine('electric')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeEngine === 'electric' 
                ? 'bg-slate-800/90 border-emerald-500/80 shadow-lg ring-1 ring-emerald-500/40' 
                : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 font-mono uppercase tracking-wider">
                Infraestructura Futura
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {MANIFESTO_DATA.analogyElectricBIM.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {MANIFESTO_DATA.analogyElectricBIM.description}
            </p>
            <div className="pt-3 border-t border-slate-700/60 text-xs text-emerald-300/90 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{MANIFESTO_DATA.analogyElectricBIM.tagline}</span>
            </div>
          </div>

        </div>

        {/* Narrative Principles Strip */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MANIFESTO_DATA.corePrinciples.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                  0{idx + 1}. Principio Estratégico
                </span>
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Key Statement banner */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-300 italic">
              "No le pidas al arquitecto que se quede sin ingresos mientras aprende BIM durante un año. Dale turbo con IA a su AutoCAD hoy, y monetiza la curva de aprendizaje."
            </p>
            <a 
              href="#mercado"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              <span>Ver las vacantes reales del mercado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
