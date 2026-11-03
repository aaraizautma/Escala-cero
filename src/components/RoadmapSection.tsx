import React from 'react';
import { ROADMAP_DATA } from '../data/landingData';
import { Calendar, CheckCircle2, Clock, Flag, Target, ArrowRight } from 'lucide-react';

interface RoadmapSectionProps {
  onOpenApply: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="roadmap" className="py-20 bg-[#061226] text-white relative border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Línea de tiempo cronológica: desde el Piloto Beta 2027 hasta la meta de 1,000 arquitectos colocados en 2031].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 7: HOJA DE RUTA</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-3">
            <span>Visión Estratégica 2027 – 2031</span>
            <span aria-hidden="true" className="text-blue-600">·</span>
            <span>Escalamiento Sostenible</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            Hoja de Ruta y Visión a 5 Años
          </h2>
          <p className="text-base text-blue-100/80 leading-relaxed">
            De un piloto de validación con 10 alumnos destacados de Aguascalientes a consolidar el primer Centro BIM del Bajío y colocar a 1,000 arquitectos en el mercado internacional.
          </p>
        </div>

        {/* Timeline Horizontal/Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ROADMAP_DATA.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-400 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-cyan-300">{item.phase}</span>
                    <span className="font-mono text-blue-300 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-800/60 text-xs">
                  <span className="text-cyan-400 block text-[10px] uppercase font-semibold">Meta Clave:</span>
                  <span className="text-white font-medium block mt-0.5">
                    {item.kpi}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Final Callout Card (Conversion anchor) */}
        <div className="bg-gradient-to-r from-blue-950 via-[#0c234a] to-[#071938] rounded-2xl p-8 sm:p-12 border border-cyan-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-2">
              Convocatoria Piloto Beta · Cupo Estrictamente Limitado
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 text-balance">
              ¿Listo para convertirte en un Arquitecto de Exportación Global?
            </h3>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Buscamos a los 10 primeros perfiles de Aguascalientes para formar la generación pionera. 
              Acceso a infraestructura de vanguardia en la UTMA, certificaciones oficiales Autodesk y portafolio acelerado con IA.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg hover:shadow-cyan-400/25 whitespace-nowrap cursor-pointer"
            >
              <span>Postular al Piloto Beta</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
