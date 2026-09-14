'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Magnetic } from './motion-primitives/Magnetic';
import { GlowEffect } from './motion-primitives/GlowEffect';
import { BorderTrail } from './motion-primitives/BorderTrail';
import { ArrowRight, Sparkles } from 'lucide-react';

export type FinalCTAProps = {
  onOpenProjectModal: () => void;
};

export function FinalCTA({ onOpenProjectModal }: FinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative w-full py-32 sm:py-48 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Dynamic Background Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[450px] pointer-events-none">
        <GlowEffect
          mode="rotate"
          scale={1.2}
          colors={['#06b6d4', '#3b82f6', '#4f46e5', '#0284c7']}
          blur="stronger"
          duration={8}
          className="opacity-25"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
            COMMISSION INQUIRIES OPEN FOR 2025
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase leading-[0.95] select-none">
          HAVE AN IDEA? <br />
          <span className="text-zinc-400">LET'S MAKE IT</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
            IMPOSSIBLE TO IGNORE.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-normal">
          We collaborate with a limited cohort of category leaders each quarter. Let’s create something generational together.
        </p>

        {/* Huge Interactive Magnetic CTA */}
        <div className="pt-10 flex justify-center">
          <Magnetic intensity={0.4} range={140}>
            <div className="relative rounded-2xl p-[1px] overflow-hidden group">
              <BorderTrail
                size={100}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-90"
              />
              <button
                type="button"
                onClick={onOpenProjectModal}
                className="relative inline-flex items-center justify-center gap-4 rounded-[15px] bg-white text-zinc-950 px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-extrabold font-display uppercase tracking-wider shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight
                  size={24}
                  className="transition-transform duration-300 group-hover:translate-x-2 text-cyan-600"
                />
              </button>
            </div>
          </Magnetic>
        </div>

        <div className="pt-6 text-xs font-mono text-zinc-500">
          TYPICAL RESPONSE TIME: UNDER 24 HOURS • DIRECT PARTNER CONSULTATION
        </div>
      </div>
    </section>
  );
}
