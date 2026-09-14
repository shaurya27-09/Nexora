'use client';
import React from 'react';
import { motion } from 'motion/react';
import { CAPABILITIES } from '../data/content';
import { BorderTrail } from './motion-primitives/BorderTrail';
import { Compass, Palette, Cpu, Code2, Sparkles, Layers, ArrowRight, Check } from 'lucide-react';

const iconMap = {
  Compass,
  Palette,
  Cpu,
  Code2,
  Sparkles,
  Layers,
};

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              METHODOLOGY & SPECIALIZATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white uppercase">
            Capabilities
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            From algorithmic positioning to 60fps kinetic interaction design, we operate across the entire modern digital stack with zero fragmentation.
          </p>
        </div>
      </div>

      {/* Grid of 6 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap, index) => {
          const IconComponent = iconMap[cap.icon as keyof typeof iconMap] || Sparkles;
          const isFeatured = cap.id === 'ai' || cap.id === 'motion';

          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-cyan-500/5 overflow-hidden flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {isFeatured && (
                <BorderTrail
                  size={90}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-60"
                />
              )}

              <div>
                {/* Card Top: Icon and Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-full">
                    {cap.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors uppercase">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {cap.shortDesc}
                </p>
              </div>

              {/* Tags and Deliverables */}
              <div className="mt-8 pt-6 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
