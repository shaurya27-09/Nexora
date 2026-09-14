'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';
import { Tilt } from './motion-primitives/Tilt';
import { Spotlight } from './motion-primitives/Spotlight';
import { BorderTrail } from './motion-primitives/BorderTrail';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
} from './motion-primitives/MorphingDialog';
import { ArrowUpRight, CheckCircle, Sparkles, Activity, Layers, Cpu, ShieldCheck } from 'lucide-react';

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'aura') {
    return (
      <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] bg-gradient-to-br from-zinc-950 via-[#0a0f18] to-cyan-950/40 flex items-center justify-center p-6 overflow-hidden rounded-2xl">
        {/* Holographic Wireframe Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        {/* Fashion Silhouette Vector Composition */}
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-cyan-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/20 animate-spin [animation-duration:35s]" />
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 border border-cyan-400/40">
              <Sparkles size={24} className="text-cyan-300 mb-1 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-200 tracking-wider">GEN STYLE LATENT</span>
              <span className="text-xs font-bold text-white mt-1">94.2% ACCURACY</span>
            </div>
          </div>
          {/* Floating Data Nodes */}
          <div className="absolute -bottom-2 -left-4 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <div className="text-left">
              <div className="text-[10px] font-mono text-zinc-400">TREND SYNTHESIS</div>
              <div className="text-xs font-bold text-zinc-100">40M+ Weekly Inputs</div>
            </div>
          </div>
          <div className="absolute -top-2 -right-4 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] font-mono text-zinc-400">MATERIAL LATENCY</div>
              <div className="text-xs font-bold text-cyan-300">1.4s 3D Shading</div>
            </div>
            <Activity size={16} className="text-cyan-400" />
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'orbit') {
    return (
      <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] bg-gradient-to-br from-zinc-950 via-[#0b0c1b] to-indigo-950/40 flex items-center justify-center p-6 overflow-hidden rounded-2xl">
        {/* Real-time Orderbook Chart Visual */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative z-10 w-full max-w-sm space-y-3">
          <div className="bg-zinc-900/90 border border-indigo-500/30 rounded-xl p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
              <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                GPU TICK ENGINE // LIVE
              </span>
              <span className="text-[10px] font-mono text-zinc-500">120 FPS</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">SPREAD ARB</span>
                <span className="font-mono text-emerald-400 font-semibold">+2.84% VOL</span>
              </div>
              <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full w-[78%]" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">DEPTH SURFACE</span>
                <span className="font-mono text-indigo-300 font-semibold">$4.2B / 24H</span>
              </div>
              <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[92%]" />
              </div>
            </div>
          </div>
          {/* Floating Metric Badge */}
          <div className="flex items-center justify-between bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-lg text-xs font-mono">
            <span className="text-zinc-400">DECISION LATENCY</span>
            <span className="text-indigo-400 font-bold">-45% FASTER</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'synth') {
    return (
      <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] bg-gradient-to-br from-zinc-950 via-[#140b1b] to-purple-950/40 flex items-center justify-center p-6 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
          {/* Waveform Equalizer Visual */}
          <div className="flex items-center gap-1.5 h-32 w-full justify-center px-4 bg-zinc-900/60 border border-purple-500/20 rounded-2xl backdrop-blur-md p-4 shadow-xl">
            {[45, 75, 30, 95, 60, 110, 85, 40, 120, 70, 90, 50, 100, 35, 80, 65].map((h, i) => (
              <motion.div
                key={i}
                className="w-2.5 bg-gradient-to-t from-purple-600 via-pink-500 to-cyan-400 rounded-full"
                animate={{
                  height: [h * 0.4, h * 0.9, h * 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2 + (i % 5) * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between w-full px-2 text-xs font-mono text-purple-300">
            <span className="flex items-center gap-1">
              <Cpu size={13} />
              <span>WASM AUDIO GRAPH</span>
            </span>
            <span className="text-cyan-300 font-bold">4.2ms JITTER-FREE</span>
          </div>
        </div>
      </div>
    );
  }

  // Neon
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] bg-gradient-to-br from-zinc-950 via-[#071714] to-teal-950/40 flex items-center justify-center p-6 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Biometric Shield / Identity Node */}
        <div className="relative w-44 h-44 rounded-2xl border-2 border-teal-500/40 bg-zinc-900/80 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(45,212,191,0.2)]">
          <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-teal-500 text-[10px] font-mono font-bold text-zinc-950 uppercase tracking-widest">
            ZK-VAULT SECURE
          </div>
          <ShieldCheck size={48} className="text-teal-400 mb-2" />
          <span className="text-xs font-bold text-white">BIOMETRIC HANDSHAKE</span>
          <span className="text-[10px] font-mono text-teal-300 mt-1">VERIFIED IN 0.8s</span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-4 py-2 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span>2.5M+ DECENTRALIZED IDS SECURED</span>
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                PORTFOLIO ARCHIVE (2024 — 2025)
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white uppercase">
              Selected Work
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Four category-defining case studies built at the intersection of machine intelligence, spatial aesthetics, and zero-compromise engineering.
          </p>
        </div>
      </div>

      {/* Projects List with Editorial Alternating Layout */}
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-28">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <Tilt rotationFactor={8} className="w-full">
                <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-900/30 backdrop-blur-xl p-6 md:p-10 shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                  <Spotlight size={400} className="opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Left/Content Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Project Meta Bar */}
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-3 border-b border-zinc-800/60">
                        <span className="text-cyan-400 font-bold tracking-widest text-sm">
                          [{project.number}]
                        </span>
                        <span className="uppercase tracking-wider">{project.client}</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors uppercase">
                        {project.title}
                      </h3>

                      {/* Category */}
                      <div className="text-sm font-mono text-cyan-400 mt-2 font-medium tracking-wide">
                        {project.category}
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics Showcase */}
                      <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-zinc-800/60">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-2.5">
                            <div className="text-base sm:text-lg font-bold font-display text-white">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono text-zinc-500 leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags & Action Button */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Trigger View Full Case Study */}
                        <MorphingDialog>
                          <MorphingDialogTrigger className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors py-2 px-3 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700">
                            <span>Deep Dive Case Study</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </MorphingDialogTrigger>

                          <MorphingDialogContainer>
                            <MorphingDialogContent className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl text-zinc-100 max-w-3xl w-full">
                              <MorphingDialogClose className="top-6 right-6" />
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
                                  CASE STUDY [{project.number}]
                                </span>
                                <span className="text-zinc-600">•</span>
                                <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                              </div>

                              <MorphingDialogTitle className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-2">
                                {project.title} — {project.client}
                              </MorphingDialogTitle>
                              <MorphingDialogSubtitle className="text-sm font-mono text-cyan-300 mb-6">
                                {project.category}
                              </MorphingDialogSubtitle>

                              {/* Interactive Visual Preview in Modal */}
                              <div className="rounded-2xl overflow-hidden border border-zinc-800 mb-6">
                                <ProjectVisual project={project} />
                              </div>

                              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                                <div>
                                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                                    The Challenge
                                  </h4>
                                  <p className="text-zinc-300 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                                    {project.challenge}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                                    Engineering & Aesthetic Solution
                                  </h4>
                                  <p className="text-zinc-300 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                                    {project.solution}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                                    Verified Impact Metrics
                                  </h4>
                                  <div className="grid grid-cols-3 gap-3">
                                    {project.metrics.map((m, idx) => (
                                      <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                                        <div className="text-xl font-bold font-display text-cyan-400">{m.value}</div>
                                        <div className="text-xs text-zinc-400 mt-1">{m.label}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </MorphingDialogContent>
                          </MorphingDialogContainer>
                        </MorphingDialog>
                      </div>
                    </div>

                    {/* Right/Visual Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 group-hover:border-zinc-700 transition-colors shadow-xl">
                        <ProjectVisual project={project} />
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
