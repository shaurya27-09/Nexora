'use client';
import React from 'react';
import { InfiniteSlider } from './motion-primitives/InfiniteSlider';
import { TECH_ITEMS } from '../data/content';
import { Sparkles, Terminal, Code2, Cpu, Box, Orbit, ShieldCheck, Zap } from 'lucide-react';

const icons = [Sparkles, Terminal, Code2, Cpu, Box, Orbit, ShieldCheck, Zap];

export function TechStrip() {
  return (
    <section className="relative w-full py-8 border-y border-zinc-800/60 bg-zinc-950/70 backdrop-blur-md overflow-hidden select-none">
      {/* Subtle edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050608] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          CORE CAPABILITIES & DISCIPLINES
        </span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase hidden sm:inline">
          AUTONOMOUS • SPATIAL • KINETIC
        </span>
      </div>

      <InfiniteSlider speed={60} speedOnHover={25} gap={20}>
        {TECH_ITEMS.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-cyan-500/40 transition-all duration-300 cursor-default"
            >
              <div className="w-6 h-6 rounded-lg bg-zinc-800/80 group-hover:bg-cyan-500/20 border border-zinc-700/60 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                <IconComponent size={12} className="text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-zinc-300 group-hover:text-white uppercase whitespace-nowrap transition-colors">
                {item}
              </span>
              <span className="text-zinc-700 font-mono text-[10px]">•</span>
            </div>
          );
        })}
      </InfiniteSlider>
    </section>
  );
}
