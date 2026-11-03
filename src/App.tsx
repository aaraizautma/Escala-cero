/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { MarketProblemSection } from './components/MarketProblemSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TripleImpactSection } from './components/TripleImpactSection';
import { GovernanceSection } from './components/GovernanceSection';
import { RoadmapSection } from './components/RoadmapSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { CopywriterDrawer } from './components/CopywriterDrawer';

export default function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isCopyDrawerOpen, setIsCopyDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071328] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header adhering to 3-zone contract */}
      <Header 
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenCopyModal={() => setIsCopyDrawerOpen(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* SECCIÓN 1: HERO */}
        <HeroSection onOpenApply={() => setIsApplyOpen(true)} />

        {/* SECCIÓN 2: EL MANIFIESTO — LA TRANSICIÓN ENERGÉTICA */}
        <ManifestoSection />

        {/* SECCIÓN 3: EL PROBLEMA DEL MERCADO VS. NUESTRA METODOLOGÍA */}
        <MarketProblemSection />

        {/* SECCIÓN 4: RUTA DE APRENDIZAJE EVO (10 Módulos) */}
        <CurriculumSection />

        {/* SECCIÓN 5: VIABILIDAD INSTITUCIONAL Y TRIPLE IMPACTO */}
        <TripleImpactSection />

        {/* SECCIÓN 6: RESPALDO LEGAL, CERTIFICACIONES Y ALIANZAS */}
        <GovernanceSection />

        {/* SECCIÓN 7: HOJA DE RUTA Y VISIÓN A 5 AÑOS */}
        <RoadmapSection onOpenApply={() => setIsApplyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ApplicationModal 
        isOpen={isApplyOpen} 
        onClose={() => setIsApplyOpen(false)} 
      />

      <CopywriterDrawer 
        isOpen={isCopyDrawerOpen} 
        onClose={() => setIsCopyDrawerOpen(false)} 
      />
    </div>
  );
}
