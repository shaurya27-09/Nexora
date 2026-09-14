'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextEffect } from './motion-primitives/TextEffect';
import { TextShimmer } from './motion-primitives/TextShimmer';
import { TextShimmerWave } from './motion-primitives/TextShimmerWave';
import { TextLoop } from './motion-primitives/TextLoop';
import { Magnetic } from './motion-primitives/Magnetic';
import { Spotlight } from './motion-primitives/Spotlight';
import { GlowEffect } from './motion-primitives/GlowEffect';
import { BorderTrail } from './motion-primitives/BorderTrail';
import { ArrowDown, ArrowRight, Sparkles, Play, Terminal } from 'lucide-react';

export type HeroProps = {
  onOpenProjectModal: () => void;
};

export function Hero({ onOpenProjectModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 140]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.2]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden bg-[#050608]"
      id="hero"
    >
      {/* Background Interactive Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Top Aurora Glow */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[500px] rounded-full bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl opacity-80" />

        {/* Ambient Floating Glow behind text */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px]">
          <GlowEffect
            mode="breathe"
            scale={1.2}
            duration={6}
            colors={['#06b6d4', '#2563eb', '#4f46e5']}
            blur="stronger"
            className="opacity-30"
          />
        </div>

        {/* Subtly Animated Vector Grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
          }}
        />

        {/* Cursor-reactive spotlight within Hero */}
        <Spotlight size={340} className="from-cyan-400/15 via-blue-500/5 to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: yParallax, opacity: opacityHero }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-4 sm:mt-8"
      >
        {/* Studio Status Pill with TextLoop */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-800/90 bg-zinc-900/60 px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-black/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>

          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            NOW ACCEPTING SELECT COMMISSIONS FOR
          </span>

          <span className="text-xs font-semibold text-cyan-300">
            <TextLoop interval={2.5}>
              <span>Q3 / Q4 2025</span>
              <span>AI FLAGSHIPS</span>
              <span>SPATIAL DESIGN</span>
              <span>GLOBAL BRANDS</span>
            </TextLoop>
          </span>
        </motion.div>

        {/* Hero Headline */}
        <h1 className="font-display font-extrabold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] max-w-4xl uppercase select-none">
          <TextEffect
            per="word"
            preset="fade-in-blur"
            speedReveal={1.2}
            className="inline"
          >
            WE BUILD
          </TextEffect>{' '}
          <br className="hidden sm:inline" />
          <TextEffect
            per="word"
            preset="fade-in-blur"
            delay={0.2}
            speedReveal={1.2}
            className="inline text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400"
          >
            DIGITAL EXPERIENCES
          </TextEffect>{' '}
          <br />
          <span className="inline-flex items-baseline flex-wrap justify-center gap-x-3">
            <TextEffect
              per="word"
              preset="fade-in-blur"
              delay={0.4}
              speedReveal={1.2}
              className="inline text-zinc-100"
            >
              THAT FEEL
            </TextEffect>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-black">
              <TextShimmerWave
                duration={1.8}
                zDistance={14}
                className="[--base-color:#38bdf8] [--base-gradient-color:#ffffff] drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                ALIVE.
              </TextShimmerWave>
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed text-balance"
        >
          Nexora combines <span className="text-zinc-200 font-medium">design</span>,{' '}
          <span className="text-zinc-200 font-medium">artificial intelligence</span>,{' '}
          <span className="text-zinc-200 font-medium">motion</span> and{' '}
          <span className="text-zinc-200 font-medium">engineering</span> to create digital products people remember.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Magnetic CTA */}
          <Magnetic intensity={0.25} range={80}>
            <button
              type="button"
              onClick={scrollToWork}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>
          </Magnetic>

          {/* Secondary CTA with BorderTrail */}
          <Magnetic intensity={0.25} range={80}>
            <div className="relative rounded-xl p-[1px] w-full sm:w-auto overflow-hidden">
              <BorderTrail
                size={60}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-90"
              />
              <button
                type="button"
                onClick={onOpenProjectModal}
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Sparkles size={15} className="text-cyan-400" />
                <span>Start a Project</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </button>
            </div>
          </Magnetic>
        </motion.div>

        {/* Key Attributes Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 pt-8 border-t border-zinc-800/40 w-full max-w-3xl flex flex-wrap items-center justify-around gap-6 text-xs text-zinc-500 font-mono uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Autonomous Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>60fps WebGL Graphics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>Museum-Grade Polish</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-600 uppercase pointer-events-none"
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1 h-3 rounded-full bg-zinc-700"
        />
      </motion.div>
    </section>
  );
}
