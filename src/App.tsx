'use client';
import React, { useState } from 'react';
import { ScrollProgress } from './components/motion-primitives/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { WorkSection } from './components/WorkSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { StatementSection } from './components/StatementSection';
import { ProcessSection } from './components/ProcessSection';
import { InteractiveOrbSection } from './components/InteractiveOrbSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingNavDock } from './components/FloatingNavDock';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

      {/* Floating Animated Glass Navbar */}
      <Navbar onOpenProjectModal={() => setProjectModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenProjectModal={() => setProjectModalOpen(true)} />

        {/* 2. Floating Technology Infinite Marquee */}
        <TechStrip />

        {/* 3. Selected Work (4 Editorial Case Studies with 3D Tilt, Category Filters & Morphing Dialog) */}
        <WorkSection />

        {/* 4. Capabilities (6 High-Density Spotlight Cards) */}
        <CapabilitiesSection />

        {/* 5. Statement Section (Scroll-Triggered Typography) */}
        <StatementSection />

        {/* 6. Process Section (5-Phase Interactive Transition Panel) */}
        <ProcessSection />

        {/* 7. Experimental Interactive Section (Living Neural Orb) */}
        <InteractiveOrbSection />

        {/* 8. Statistics Section (Viewport Animated Counters) */}
        <StatsSection />

        {/* 9. Testimonials Section (Interactive Carousel) */}
        <TestimonialsSection />

        {/* 10. Partnership & Engagement FAQ (Accordion) */}
        <FAQSection onOpenProjectModal={() => setProjectModalOpen(true)} />

        {/* 11. Final CTA Section (Magnetic Button & Dynamic Glow) */}
        <FinalCTA onOpenProjectModal={() => setProjectModalOpen(true)} />
      </main>

      {/* Footer with Timezone Clocks */}
      <Footer />

      {/* macOS Style Quick-Jump Dock */}
      <FloatingNavDock onOpenProjectModal={() => setProjectModalOpen(true)} />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={projectModalOpen}
        onOpenChange={setProjectModalOpen}
      />
    </div>
  );
}

export default App;
