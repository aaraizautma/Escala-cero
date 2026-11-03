import React, { useState } from 'react';
import { MARKET_PROBLEM_DATA } from '../data/landingData';
import { AlertTriangle, Check, DollarSign, MapPin, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export const MarketProblemSection: React.FC = () => {
  const [selectedVacancyId, setSelectedVacancyId] = useState<string>('perry-homes');

  const selectedVacancy = MARKET_PROBLEM_DATA.vacancies.find(v => v.id === selectedVacancyId) || MARKET_PROBLEM_DATA.vacancies[0];

  return (
    <section id="mercado" className="py-20 bg-[#081733] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Matriz comparativa de 3 vacantes reales del mercado estadounidense vs. perfil tradicional universitario vs. perfil de egreso Escala Cero + Explicación visual de Point Cloud].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 3: EL MERCADO</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-3">
            <span>Diagnóstico & Teoría de Cambio</span>
            <span aria-hidden="true" className="text-blue-600">·</span>
            <span>El Contraste de Mercado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            {MARKET_PROBLEM_DATA.title}
          </h2>
          <p className="text-base text-blue-100/80 leading-relaxed">
            {MARKET_PROBLEM_DATA.subtitle}
          </p>
        </div>

        {/* 3 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MARKET_PROBLEM_DATA.painPoints.map((pain, idx) => (
            <div key={idx} className="bg-[#0e254d] p-6 rounded-xl border border-blue-700/50 shadow-md">
              <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Realidad Laboral #{idx + 1}</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
                {pain.stat}
              </p>
              <h4 className="text-sm font-bold text-blue-100 mb-2">
                {pain.label}
              </h4>
              <p className="text-xs text-blue-200/70 leading-relaxed">
                {pain.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Vacancy Matrix Section */}
        <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl overflow-hidden shadow-lg mb-16">
          <div className="p-6 bg-[#07152b] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-900/60">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Evidencia de Mercado · Lo que pagan las firmas globales
              </span>
              <h3 className="text-xl font-bold">
                Mapeo de Vacantes Reales vs. Perfil de Egreso
              </h3>
            </div>
            
            {/* Vacancy selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-blue-950/90 rounded-lg overflow-x-auto border border-blue-800/60">
              {MARKET_PROBLEM_DATA.vacancies.map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVacancyId(v.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedVacancyId === v.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                      : 'text-blue-200 hover:text-white'
                  }`}
                >
                  {v.role.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Vacancy Card Details */}
          <div className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-blue-800/60">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-300 mb-1">
                  <span className="font-semibold text-white">{selectedVacancy.company}</span>
                  <span aria-hidden="true" className="text-blue-600">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {selectedVacancy.location}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-white">
                  {selectedVacancy.role}
                </h4>
              </div>

              {/* Salary pill */}
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-3 rounded-lg flex items-baseline gap-3 shrink-0">
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider block">
                    Remuneración Mensual
                  </span>
                  <span className="text-xl font-extrabold text-white font-mono tabular-nums">
                    {selectedVacancy.salaryUsd}
                  </span>
                </div>
                <span className="text-xs text-emerald-300 font-mono font-medium">
                  (~{selectedVacancy.salaryMxn})
                </span>
              </div>
            </div>

            {/* Comparison Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              
              {/* Egresado Tradicional */}
              <div className="bg-red-950/30 border border-red-800/40 rounded-lg p-5">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Egresado Universitario Tradicional</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  {selectedVacancy.traditionalUniv}
                </p>
                <div className="text-xs text-red-300 font-medium">
                  Resultado: Descalificado en primera ronda por falta de velocidad o estándares US.
                </div>
              </div>

              {/* Egresado Escala Cero */}
              <div className="bg-blue-950/70 border border-cyan-500/40 rounded-lg p-5">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Egresado Incubado en Escala Cero</span>
                </div>
                <p className="text-sm text-blue-50 font-medium leading-relaxed mb-4">
                  {selectedVacancy.escalaCeroProfile}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedVacancy.keyTech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-[11px] font-mono text-cyan-200 bg-blue-900/60 border border-blue-600/50 px-2 py-0.5 rounded shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Deep Dive: Point Cloud (Nube de Puntos) Explainer */}
        <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual scan representation */}
            <div className="lg:col-span-5 relative min-h-[260px] bg-slate-950 overflow-hidden">
              <img
                src="/src/assets/images/pointcloud_bim_scan_1793679176470.jpg"
                alt="Visualización tridimensional de nube de puntos LiDAR a modelo BIM estructural"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-4">
                <div className="text-white text-xs">
                  <span className="font-mono text-cyan-400 block text-[10px] uppercase">Diferenciador de Nivel Experto</span>
                  <span className="font-semibold">Captura de Realidad y As-Built Digital</span>
                </div>
              </div>
            </div>

            {/* Explanation Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>¿Qué es Point Cloud (Nube de Puntos)?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                La habilidad técnica mejor pagada en la arquitectura remota actual
              </h3>
              <p className="text-sm text-blue-100/90 leading-relaxed mb-4">
                <strong>{MARKET_PROBLEM_DATA.pointCloudExplainer.concept}</strong> En lugar de medir con cinta o telémetro, un escáner dispara miles de pulsos láser por segundo para registrar milimétricamente un inmueble.
              </p>
              <div className="p-4 bg-blue-950/70 border border-blue-700/50 rounded-lg text-xs text-blue-100 leading-relaxed space-y-2">
                <p>
                  <strong className="text-cyan-300">¿Por qué es indispensable para el mercado de EE.UU.?</strong> {MARKET_PROBLEM_DATA.pointCloudExplainer.whyItMatters}
                </p>
                <p className="text-blue-300/80">
                  En Escala Cero, enseñamos el flujo completo en el Módulo 7 con Autodesk ReCap Pro y Revit, permitiendo que un egresado cobre tarifas de $30 a $45 USD por hora.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
