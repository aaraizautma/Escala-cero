import React from 'react';
import { FileText, Send } from 'lucide-react';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenCopyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApply, onOpenCopyModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#071328]/90 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors">
          Escala Cero
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-blue-200/80">
          <a href="#manifiesto" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            El Manifiesto
          </a>
          <a href="#mercado" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Mercado & Vacantes
          </a>
          <a href="#ruta-evo" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Ruta EVO (10 Módulos)
          </a>
          <a href="#impacto" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Triple Impacto
          </a>
          <a href="#gobernanza" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Alianzas & Legal
          </a>
          <a href="#roadmap" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Visión a 5 Años
          </a>
        </nav>

        {/* Zone 3: 1 primary action + copy utility */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCopyModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-blue-200 bg-blue-950/70 hover:bg-blue-900/60 border border-blue-800/60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Ver y copiar la estructura de copy de la landing"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Copywriter Mode</span>
          </button>
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Postular al Piloto</span>
          </button>
        </div>
      </div>
    </header>
  );
};
