import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040c1a] text-blue-200/70 py-12 border-t border-blue-900/60 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-blue-900/50">
          
          {/* Brand & mission */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-lg font-bold text-white tracking-tight block">
              Escala Cero
            </span>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Incubadora de talento arquitectónico y diseño digital de exportación. Alianza estratégica con la Universidad Tecnológica Metropolitana de Aguascalientes (UTMA).
            </p>
            <div className="text-slate-500 text-[11px] space-y-1 pt-1">
              <p>Operación: Asociación Civil (A.C.) & Sociedad Civil (S.C.)</p>
              <p>Aguascalientes, México · Hub de Talento AEC</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Navegación
            </span>
            <ul className="space-y-2">
              <li><a href="#manifiesto" className="hover:text-white transition-colors">El Manifiesto</a></li>
              <li><a href="#mercado" className="hover:text-white transition-colors">Mercado & Vacantes</a></li>
              <li><a href="#ruta-evo" className="hover:text-white transition-colors">Ruta EVO (10 Módulos)</a></li>
              <li><a href="#impacto" className="hover:text-white transition-colors">Triple Impacto</a></li>
              <li><a href="#gobernanza" className="hover:text-white transition-colors">Gobernanza & Alianzas</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Hoja de Ruta 2027-2031</a></li>
            </ul>
          </div>

          {/* Legal and Standards */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Estándares & Respaldo
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>Autodesk Certified User / Professional</li>
              <li>BuildingSMART openBIM & ISO 19650</li>
              <li>Acuerdos de Ingresos Compartidos (ISAs)</li>
              <li>Convenio Marco UTMA</li>
              <li>SEDECYT / IDSCEA Aguascalientes</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Escala Cero. Todos los derechos reservados.</p>
          <p>Aguascalientes, México · Transformando talento local en impacto global.</p>
        </div>
      </div>
    </footer>
  );
};
