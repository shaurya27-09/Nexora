'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data/content';
import { AnimatedNumber } from './motion-primitives/AnimatedNumber';
import { Spotlight } from './motion-primitives/Spotlight';
import { BorderTrail } from './motion-primitives/BorderTrail';

export function StatsSection() {
  const [inView, setInView] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            MEASURABLE SCALE & REPUTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2 uppercase">
            Engineered for Impact
          </h2>
        </div>

        <motion.div
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-8 backdrop-blur-xl shadow-xl overflow-hidden text-center hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <Spotlight size={240} className="from-cyan-400/10 via-blue-500/5 to-transparent" />
              {idx === 0 && (
                <BorderTrail
                  size={70}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
                />
              )}

              <div className="flex items-baseline justify-center font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                {inView ? (
                  <AnimatedNumber
                    value={stat.value}
                    springOptions={{ stiffness: 50, damping: 20 }}
                  />
                ) : (
                  <span>0</span>
                )}
                <span className="text-cyan-400 text-4xl sm:text-5xl ml-1 font-bold">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-3 text-base font-bold font-display text-zinc-200">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
