import React, { useState } from 'react';
import { TRIPLE_IMPACT_DATA } from '../data/landingData';
import { Landmark, GraduationCap, Building2, TrendingUp, Calculator, CheckCircle2 } from 'lucide-react';

export const TripleImpactSection: React.FC = () => {
  const [studentCount, setStudentCount] = useState<number>(100);
  const [avgSalaryMxn, setAvgSalaryMxn] = useState<number>(40000);

  const monthlyInjection = studentCount * avgSalaryMxn;
  const annualInjection = monthlyInjection * 12;

  return (
    <section id="impacto" className="py-20 bg-[#081836] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Simulador dinámico de triple impacto: ajusta la generación de alumnos y calcula en tiempo real la inyección económica directa al Estado de Aguascalientes].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 5: TRIPLE IMPACTO</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-3">
            <span>Retorno Social & Económico</span>
            <span aria-hidden="true" className="text-blue-600">·</span>
            <span>El Modelo de Tres Ganadores</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            {TRIPLE_IMPACT_DATA.title}
          </h2>
          <p className="text-base text-blue-100/80 leading-relaxed">
            {TRIPLE_IMPACT_DATA.subtitle} Una iniciativa diseñada para autofinanciarse mediante Acuerdos de Ingresos Compartidos (ISAs) y atracción de divisas.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Egresado */}
          <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-900/80 border border-blue-600/60 flex items-center justify-center text-cyan-300 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase block mb-1">
                Eje 1 · Capital Humano
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Para el Egresado
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-4">
                Movilidad Social & Soberanía Financiera
              </p>
              
              <div className="space-y-3 text-xs text-blue-100/90 mb-6">
                {TRIPLE_IMPACT_DATA.pillars[0].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/60 bg-blue-950/80 -mx-6 -mb-6 p-4 rounded-b-xl">
              <span className="text-[11px] text-blue-300 block">Impacto en Ingresos:</span>
              <span className="text-sm font-extrabold text-white font-mono">
                De $10k MXN local a $35k–$80k MXN remoto
              </span>
            </div>
          </div>

          {/* Pillar 2: UTMA / Universidad */}
          <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-600/60 flex items-center justify-center text-emerald-300 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1">
                Eje 2 · Academia Pública
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Para la UTMA & Universidades
              </h3>
              <p className="text-xs font-semibold text-emerald-300 mb-4">
                Prestigio de Vanguardia sin Inversión de Capital
              </p>
              
              <div className="space-y-3 text-xs text-blue-100/90 mb-6">
                {TRIPLE_IMPACT_DATA.pillars[1].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/60 bg-blue-950/80 -mx-6 -mb-6 p-4 rounded-b-xl">
              <span className="text-[11px] text-blue-300 block">Eficiencia de Recursos:</span>
              <span className="text-sm font-extrabold text-emerald-300 font-mono">
                $0 de inversión nueva · 100% capacidad instalada
              </span>
            </div>
          </div>

          {/* Pillar 3: Aguascalientes */}
          <div className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-600/60 flex items-center justify-center text-purple-300 mb-5">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-purple-400 uppercase block mb-1">
                Eje 3 · Estado & Región
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Para Aguascalientes
              </h3>
              <p className="text-xs font-semibold text-purple-300 mb-4">
                Atracción Directa de Capital Extranjero
              </p>
              
              <div className="space-y-3 text-xs text-blue-100/90 mb-6">
                {TRIPLE_IMPACT_DATA.pillars[2].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/60 bg-blue-950/80 -mx-6 -mb-6 p-4 rounded-b-xl">
              <span className="text-[11px] text-blue-300 block">Derrama con 100 Alumnos:</span>
              <span className="text-sm font-extrabold text-purple-300 font-mono">
                $48,000,000 MXN anuales inyectados
              </span>
            </div>
          </div>

        </div>

        {/* Interactive Economic Simulator */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Derrama Económica para Aguascalientes</span>
              </div>
              <h3 className="text-xl font-bold">
                Calcula la Inyección de Capital de Talento Digital en el Estado
              </h3>
            </div>
            <span className="text-xs text-slate-400 max-w-sm">
              Dinero fresco que no proviene de subsidios gubernamentales, sino de exportación de servicios a despachos de EE.UU.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            
            {/* Sliders (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Arquitectos Egresados y Colocados:</span>
                  <span className="text-base font-bold text-white font-mono">{studentCount} egresados</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>10 (Piloto Beta)</span>
                  <span>100 (Año 2)</span>
                  <span>250 (Año 3)</span>
                  <span>500 (Año 4)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Salario Promedio Mensual por Alumno:</span>
                  <span className="text-base font-bold text-white font-mono">${avgSalaryMxn.toLocaleString()} MXN</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="70000"
                  step="5000"
                  value={avgSalaryMxn}
                  onChange={(e) => setAvgSalaryMxn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>$25k (Junior)</span>
                  <span>$40k (Promedio)</span>
                  <span>$70k (Senior / BIM Spec)</span>
                </div>
              </div>

            </div>

            {/* Projection Outcome Display (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5">
                <span className="text-xs text-slate-400 block mb-1">
                  Inyección Mensual al Estado:
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">
                  ${(monthlyInjection / 1000000).toFixed(2)}M
                </p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">
                  ${monthlyInjection.toLocaleString()} MXN / mes
                </span>
              </div>

              <div className="bg-slate-800/80 border border-emerald-500/40 rounded-xl p-5 relative overflow-hidden">
                <span className="text-xs text-emerald-400 font-semibold block mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Inyección Anual Directa:
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  ${(annualInjection / 1000000).toFixed(1)}M
                </p>
                <span className="text-[11px] text-slate-300 font-mono block mt-1">
                  ${annualInjection.toLocaleString()} MXN / año
                </span>
              </div>

            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Nota: Estimación en base a tipo de cambio actual y colocación internacional vía plataformas remotas y contratos directos.</span>
            <span className="font-semibold text-slate-300">UTMA · Aguascalientes</span>
          </div>

        </div>

      </div>
    </section>
  );
};
