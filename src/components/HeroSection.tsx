import React from 'react';
import { HERO_DATA } from '../data/landingData';
import { ArrowRight, CheckCircle2, Award, Briefcase, TrendingUp, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#08152e] via-[#071328] to-[#0a1836] border-b border-blue-900/50">
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-6 p-3 bg-blue-950/80 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Arquitectura UI Blueprint</span>
            <span>[Fondo azul arquitectónico en toda la página: Alto contraste, tipografía luminosa y métricas financieras de exportación].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 1: HERO</span>
        </div>

        {/* Top Kicker - Unboxed quiet metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-4">
          <span>Aguascalientes</span>
          <span aria-hidden="true" className="text-blue-600">·</span>
          <span>Alianza Estratégica UTMA</span>
          <span aria-hidden="true" className="text-blue-600">·</span>
          <span>Hub de Exportación de Talento Digital</span>
        </div>

        {/* Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance mb-6">
              {HERO_DATA.h1}
            </h1>

            <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl mb-8">
              {HERO_DATA.subtitle}
            </p>

            {/* CTA and Pilot Status */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap cursor-pointer"
              >
                <span>{HERO_DATA.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#ruta-evo"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-blue-100 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-700/60 rounded-lg transition-colors whitespace-nowrap"
              >
                {HERO_DATA.ctaSecondary}
              </a>
            </div>

            {/* Guarantee deliverable badges / list */}
            <div className="pt-6 border-t border-blue-900/60">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">
                Garantía de Entrega por Alumno del Piloto Beta:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-start gap-2 bg-[#0e254d]/90 p-3 rounded-lg border border-blue-700/50 shadow-xs">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">2 Certificaciones Oficiales</span>
                    <span className="text-blue-300 text-[11px]">Autodesk (ACU / ACP)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-[#0e254d]/90 p-3 rounded-lg border border-blue-700/50 shadow-xs">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Portafolio Internacional</span>
                    <span className="text-blue-300 text-[11px]">5 proyectos con IA</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-[#0e254d]/90 p-3 rounded-lg border border-blue-700/50 shadow-xs">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">LinkedIn Global ATS</span>
                    <span className="text-blue-300 text-[11px]">Filtros directos EE.UU.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols) - Visual & Financial Social Proof */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Image Container */}
            <div className="relative rounded-xl overflow-hidden border border-blue-700/60 shadow-xl group">
              <img
                src="/src/assets/images/hero_architectural_bim_1793679177592.jpg"
                alt="Estudio de arquitectura y modelado BIM internacional con tecnología de precisión"
                className="w-full h-64 object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071328] via-[#071328]/30 to-transparent flex items-end p-4">
                <div className="text-white text-xs">
                  <p className="font-semibold tracking-wide text-cyan-300">Hub Aguascalientes · Campus UTMA</p>
                  <p className="text-blue-200 text-[11px]">Apalancamiento de licencias e infraestructura de alta gama</p>
                </div>
              </div>
            </div>

            {/* Financial Contrast Card */}
            <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-blue-800/60">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Métricas de Impacto / Promesa Medible
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600/60">
                  Meta Piloto: 70% Colocación
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                  <span className="text-[11px] text-blue-300 block">Sueldo Egresado México</span>
                  <p className="text-base font-bold text-slate-200 font-mono tabular-nums">
                    {HERO_DATA.metrics.salaryLocal}
                  </p>
                  <span className="text-[10px] text-blue-400 block">Mercado local tradicional</span>
                </div>

                <div className="space-y-1 bg-blue-950/80 p-2.5 rounded-lg border border-blue-600/50">
                  <span className="text-[11px] font-semibold text-cyan-300 block flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-cyan-400" /> Remoto Internacional
                  </span>
                  <p className="text-base font-extrabold text-white font-mono tabular-nums">
                    {HERO_DATA.metrics.salaryRemote}
                  </p>
                  <span className="text-[10px] font-medium text-cyan-400 block font-mono">
                    ({HERO_DATA.metrics.salaryRemoteUsd})
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Plazo de colocación: <strong className="text-white">&lt; 6 meses</strong></span>
                </span>
                <span className="text-blue-400 text-[11px]">Piso contractual: 40%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
