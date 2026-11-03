import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: 'UTMA (Universidad Tecnológica Metropolitana de Aguascalientes)',
    experience: 'AutoCAD Intermedio (Conozco comandos y planos ejecutivos)',
    englishLevel: 'Intermedio (B1/B2) - Comprensión técnica',
    motivation: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-[#0b1b36] text-white rounded-2xl shadow-2xl border border-blue-700/60 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#071328] border-b border-blue-800/60">
          <div>
            <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              Convocatoria Generación Pionera
            </span>
            <h3 className="text-lg font-bold text-white">
              Postulación al Piloto Beta · Escala Cero
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-blue-300 hover:text-white hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                ¡Postulación Recibida con Éxito!
              </h4>
              <p className="text-sm text-blue-200/80 max-w-md mx-auto mb-6">
                Hemos registrado tu perfil para el Piloto Beta de 10 alumnos en colaboración con la <strong className="text-white">UTMA</strong>. Revisaremos tu información y te contactaremos para la prueba técnica diagnóstica.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="bg-blue-950/70 border border-cyan-500/40 p-3 rounded-lg text-cyan-200 text-[11px] leading-relaxed">
                <strong className="text-white">Requisitos Piloto Beta:</strong> Residir en Aguascalientes o región Bajío, nociones de dibujo en AutoCAD, compromiso de 12 semanas y ambición de contratación remota internacional.
              </div>

              <div>
                <label className="block font-semibold text-blue-200 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Arq. Sofía Morales Landeros"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-blue-400/50 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-blue-200 mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    placeholder="sofia@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-blue-400/50 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-blue-200 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+52 449 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-blue-400/50 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-blue-200 mb-1">Universidad / Institución de Egreso</label>
                <select
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white text-xs"
                >
                  <option value="UTMA" className="bg-[#071328]">UTMA (Universidad Tecnológica Metropolitana de Aguascalientes)</option>
                  <option value="UAA" className="bg-[#071328]">Universidad Autónoma de Aguascalientes (UAA)</option>
                  <option value="ITA" className="bg-[#071328]">Instituto Tecnológico de Aguascalientes (ITA)</option>
                  <option value="Cuauhtemoc" className="bg-[#071328]">Universidad Cuauhtémoc Aguascalientes</option>
                  <option value="Otra_Region" className="bg-[#071328]">Otra Institución en la Región Bajío</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-blue-200 mb-1">Nivel actual de AutoCAD</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white text-xs"
                  >
                    <option value="Basico" className="bg-[#071328]">Básico (Dibujo líneas y cotas simples)</option>
                    <option value="Intermedio" className="bg-[#071328]">Intermedio (Planos ejecutivos, bloques, capas)</option>
                    <option value="Avanzado" className="bg-[#071328]">Avanzado (Bloques dinámicos, referencias externas)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-blue-200 mb-1">Nivel de Inglés</label>
                  <select
                    value={formData.englishLevel}
                    onChange={(e) => setFormData({ ...formData, englishLevel: e.target.value })}
                    className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white text-xs"
                  >
                    <option value="Basico" className="bg-[#071328]">Básico / Lectura técnica con traductor</option>
                    <option value="Intermedio" className="bg-[#071328]">Intermedio (B1/B2) - Comprensión y redacción</option>
                    <option value="Avanzado" className="bg-[#071328]">Avanzado / Fluido en conversaciones profesionales</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-blue-200 mb-1">¿Por qué deseas integrarte a Escala Cero?</label>
                <textarea
                  rows={2}
                  placeholder="Cuéntanos brevemente tu meta profesional (ej. colocarte en una firma de EE.UU. en dólares)..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-3 py-2 bg-[#071328] border border-blue-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-blue-400/50 text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-blue-700/60 text-blue-200 rounded-lg hover:bg-blue-900/60 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Enviar Postulación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
