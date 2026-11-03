import React from 'react';
import { GOVERNANCE_DATA } from '../data/landingData';
import { Shield, FileCheck, Award, Globe, Scale, Check } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  return (
    <section id="gobernanza" className="py-20 bg-[#071328] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Design Note Callout for UI Reviewers */}
        <div className="mb-8 p-3 bg-blue-950/70 border border-blue-800/80 rounded-lg text-xs text-blue-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wide text-[10px] bg-blue-900 border border-blue-700 px-1.5 py-0.5 rounded">Nota de Arquitectura UI</span>
            <span>[Estructura híbrida visual A.C. + S.C. para ISAs y fondos públicos, más acreditación oficial Autodesk / Graphisoft y fondos globales en la mira].</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-mono">SECCIÓN 6: GOBERNANZA & ALIANZAS</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-3">
            <span>Solidez Jurídica & Respaldo Oficial</span>
            <span aria-hidden="true" className="text-blue-600">·</span>
            <span>Estándares de la Industria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            {GOVERNANCE_DATA.title}
          </h2>
          <p className="text-base text-blue-100/80 leading-relaxed">
            {GOVERNANCE_DATA.subtitle} Diseñada para operar convenios con universidades públicas y garantizar la seguridad jurídica de los Acuerdos de Ingresos Compartidos (ISAs).
          </p>
        </div>

        {/* Hybrid Legal Structure Cards */}
        <div className="bg-[#0b1c3d] border border-blue-700/60 rounded-xl p-6 sm:p-8 mb-16 shadow-lg">
          <div className="flex items-center gap-2.5 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-6">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>{GOVERNANCE_DATA.hybridStructure.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* A.C. Side */}
            <div className="bg-[#0e254d] border border-blue-700/60 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-blue-800/60 mb-4">
                <h4 className="text-base font-bold text-white">
                  {GOVERNANCE_DATA.hybridStructure.acSide.name}
                </h4>
                <span className="text-[11px] font-semibold text-cyan-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-600/60">
                  Impacto & Alianzas
                </span>
              </div>
              <p className="text-xs font-semibold text-blue-200 mb-3">
                {GOVERNANCE_DATA.hybridStructure.acSide.role}
              </p>
              <div className="space-y-2 text-xs text-blue-100/80">
                {GOVERNANCE_DATA.hybridStructure.acSide.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S.C. Side */}
            <div className="bg-[#0e254d] border border-blue-700/60 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-blue-800/60 mb-4">
                <h4 className="text-base font-bold text-white">
                  {GOVERNANCE_DATA.hybridStructure.scSide.name}
                </h4>
                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-600/60">
                  Operación Comercial & ISAs
                </span>
              </div>
              <p className="text-xs font-semibold text-blue-200 mb-3">
                {GOVERNANCE_DATA.hybridStructure.scSide.role}
              </p>
              <div className="space-y-2 text-xs text-blue-100/80">
                {GOVERNANCE_DATA.hybridStructure.scSide.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Certifications and Funding Targets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Official Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Garantía de Certificación Oficial de la Industria</span>
            </div>
            
            <div className="space-y-3">
              {GOVERNANCE_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#0d2246] border border-blue-700/60 rounded-xl p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-blue-300 mb-1">
                      <span className="font-bold text-white">{cert.provider}</span>
                      <span aria-hidden="true" className="text-blue-600">·</span>
                      <span>{cert.scope}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-white">
                      {cert.tier}
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-600/60 px-2.5 py-1 rounded-md shrink-0 self-start sm:self-center">
                    {cert.validity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Funding and Impact Allies in sight (5 cols) */}
          <div className="lg:col-span-5 bg-[#0d2246] border border-blue-700/60 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Fondos Internacionales e Institucionales en la Mira</span>
            </div>
            <p className="text-xs text-blue-200/70 mb-5 leading-relaxed">
              Expedientes y convocatorias preparadas para escalar el modelo e inyectar becas para alumnos de excelencia.
            </p>

            <div className="space-y-2.5">
              {GOVERNANCE_DATA.fundingTargets.map((f, i) => (
                <div key={i} className="bg-[#081733] p-3 rounded-lg border border-blue-800/60 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white">{f.name}</span>
                  <span className="text-[11px] text-blue-300 text-right">{f.category}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-blue-800/60 text-[11px] text-blue-300">
              Coordinación activa con <strong className="text-white">SEDECYT</strong> e <strong className="text-white">IDSCEA Aguascalientes</strong>.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
