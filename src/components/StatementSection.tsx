'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextShimmer } from './motion-primitives/TextShimmer';
import { GlowEffect } from './motion-primitives/GlowEffect';

export function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll transformations for each phrase without hijack
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0.15, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.45], [0.15, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0.15, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.55, 0.8], [0.2, 1]);

  const y1 = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [30, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);
  const y4 = useTransform(scrollYProgress, [0.55, 0.8], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 sm:py-48 px-4 sm:px-6 lg:px-8 bg-[#050608] overflow-hidden flex items-center justify-center border-t border-zinc-800/60"
    >
      {/* Subtle Center Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none">
        <GlowEffect
          mode="pulse"
          scale={1.3}
          colors={['#0284c7', '#4f46e5', '#06b6d4']}
          blur="stronger"
          className="opacity-20"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 select-none">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            STUDIO CREED & PHILOSOPHY
          </span>
        </div>

        <div className="space-y-2 sm:space-y-4 font-display font-extrabold tracking-tighter uppercase leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="text-zinc-500 transition-colors"
          >
            WE DON'T DESIGN
          </motion.div>

          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="text-zinc-400 transition-colors"
          >
            STATIC WEBSITES.
          </motion.div>

          <div className="h-4 sm:h-8" />

          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="text-zinc-300 transition-colors"
          >
            WE DESIGN
          </motion.div>

          <motion.div
            style={{ opacity: opacity4, y: y4 }}
            className="relative inline-block"
          >
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
              EXPERIENCES.
            </span>
          </motion.div>
        </div>

        <motion.p
          style={{ opacity: opacity4 }}
          className="mt-12 max-w-xl mx-auto text-sm sm:text-base text-zinc-400 font-normal leading-relaxed"
        >
          Every interface we craft is reactive, tactile, and engineered to leave an indelible impression. We reject static complacency in favor of kinetic elegance.
        </motion.p>
      </div>
    </section>
  );
}
