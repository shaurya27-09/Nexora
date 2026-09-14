'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';
import { TransitionPanel } from './motion-primitives/TransitionPanel';
import { Spotlight } from './motion-primitives/Spotlight';
import { ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              METHODOLOGICAL PIPELINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white uppercase">
            Our Process
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            A rigorous five-stage execution architecture engineered to eliminate ambiguity and deliver generational digital artifacts on schedule.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Stepper Timeline */}
        <div className="lg:col-span-5 space-y-3">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-zinc-950/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500"
                  />
                )}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700/60'
                      }`}
                    >
                      {step.step}
                    </span>
                    <h3
                      className={`text-lg font-bold font-display tracking-tight ${
                        isActive ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-100'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500">
                    {step.duration}
                  </span>
                </div>

                <p className="mt-2 text-xs text-zinc-400 pl-11 line-clamp-2">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Step Panel Inspector with TransitionPanel */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-900/30 p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[440px]">
            <Spotlight size={360} className="from-cyan-400/10 via-blue-500/5 to-transparent" />

            <TransitionPanel
              activeIndex={activeStepIndex}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              variants={{
                enter: { opacity: 0, y: 15 },
                center: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -15 },
              }}
            >
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-cyan-400 font-bold">
                        PHASE {step.step}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-700/60">
                      <Clock size={12} className="text-cyan-400" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-zinc-300 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Core Deliverables Matrix */}
                  <div className="pt-4 border-t border-zinc-800/60">
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Sparkles size={13} className="text-cyan-400" />
                      Key Phase Artifacts & Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 flex flex-col justify-between"
                        >
                          <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2">
                            <CheckCircle2 size={13} />
                          </div>
                          <span className="text-xs font-medium text-zinc-200">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </TransitionPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
