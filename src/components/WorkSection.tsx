'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';
import { Tilt } from './motion-primitives/Tilt';
import { Spotlight } from './motion-primitives/Spotlight';
import { BorderTrail } from './motion-primitives/BorderTrail';
import { AnimatedBackground } from './motion-primitives/AnimatedBackground';
import { TextScramble } from './motion-primitives/TextScramble';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
} from './motion-primitives/MorphingDialog';
import { ArrowUpRight, Sparkles, Activity, Cpu, ShieldCheck, Check, RefreshCw, Zap } from 'lucide-react';

function AuraVisual() {
  const [activeStyle, setActiveStyle] = useState<'cyber' | 'luxe' | 'minimal'>('cyber');

  const styleConfigs = {
    cyber: { name: 'AVANT CYBER', accuracy: '96.8%', latents: '48.2M inputs', color: 'from-cyan-500 to-blue-600', ring: 'border-cyan-400' },
    luxe: { name: 'BIOPHILIC LUXE', accuracy: '94.2%', latents: '39.5M inputs', color: 'from-emerald-500 to-teal-600', ring: 'border-emerald-400' },
    minimal: { name: 'KINETIC HAUTE', accuracy: '98.1%', latents: '52.1M inputs', color: 'from-indigo-500 to-purple-600', ring: 'border-indigo-400' },
  };

  const current = styleConfigs[activeStyle];

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] bg-gradient-to-br from-zinc-950 via-[#0a0f18] to-cyan-950/40 flex flex-col items-center justify-between p-6 overflow-hidden rounded-2xl">
      {/* Holographic Wireframe Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

      {/* Top Controls: Interactive Style Latent Selector */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          LATENT STYLE SYNTHESIZER
        </span>
        <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800">
          {(['cyber', 'luxe', 'minimal'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveStyle(mode);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                activeStyle === mode
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {mode.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Center 3D Silhouette Simulation Node */}
      <div className="relative z-10 my-4 flex flex-col items-center">
        <div className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border ${current.ring} border-opacity-30 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-colors duration-500`}>
          <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/30 animate-spin [animation-duration:25s]" />
          <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${current.color} bg-opacity-20 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 border border-cyan-300/40 transition-all duration-500`}>
            <Sparkles size={22} className="text-cyan-200 mb-1 animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-100 tracking-wider uppercase font-bold">{current.name}</span>
            <span className="text-xs font-bold text-white mt-0.5">{current.accuracy} FIT</span>
          </div>
        </div>
      </div>

      {/* Bottom Floating Telemetry */}
      <div className="relative z-10 w-full grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500">SYNTHESIS</span>
          <span className="text-cyan-300 font-bold">{current.latents}</span>
        </div>
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500">3D SHADE TIME</span>
          <span className="text-emerald-400 font-bold">1.4s (60 FPS)</span>
        </div>
      </div>
    </div>
  );
}

function OrbitVisual() {
  const [scenario, setScenario] = useState<'normal' | 'surge' | 'shock'>('normal');

  const scenarioData = {
    normal: { spread: '+2.84%', spreadColor: 'text-emerald-400', volume: '$4.2B / 24H', bar1: '75%', bar2: '88%' },
    surge: { spread: '+7.12%', spreadColor: 'text-cyan-400', volume: '$9.8B / 24H', bar1: '95%', bar2: '96%' },
    shock: { spread: '-1.45%', spreadColor: 'text-amber-400', volume: '$12.4B / 24H', bar1: '60%', bar2: '98%' },
  };

  const current = scenarioData[scenario];

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] bg-gradient-to-br from-zinc-950 via-[#0b0c1b] to-indigo-950/40 flex flex-col items-center justify-between p-6 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Header bar */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          GPU ORDERBOOK DEPTH
        </span>
        <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800">
          {(['normal', 'surge', 'shock'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScenario(s);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                scenario === s
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main visualizer chart */}
      <div className="relative z-10 w-full max-w-sm my-3 bg-zinc-900/90 border border-indigo-500/30 rounded-xl p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 text-[10px] font-mono">
          <span className="text-zinc-400">TELEMETRY STREAM</span>
          <span className="text-indigo-400 font-bold">120 FPS NATIVE</span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono text-zinc-400 text-[11px]">SPREAD ARBITRAGE</span>
              <span className={`font-mono font-bold ${current.spreadColor}`}>{current.spread}</span>
            </div>
            <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
              <motion.div
                animate={{ width: current.bar1 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono text-zinc-400 text-[11px]">LIQUIDITY SURFACE</span>
              <span className="font-mono text-indigo-300 font-semibold">{current.volume}</span>
            </div>
            <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
              <motion.div
                animate={{ width: current.bar2 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status badge */}
      <div className="relative z-10 w-full flex items-center justify-between bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-lg text-xs font-mono">
        <span className="text-zinc-400">TICK EXECUTION LATENCY</span>
        <span className="text-indigo-400 font-bold">&lt; 0.4ms VIA WASM</span>
      </div>
    </div>
  );
}

function SynthVisual() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] bg-gradient-to-br from-zinc-950 via-[#140b1b] to-purple-950/40 flex flex-col items-center justify-between p-6 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      {/* Header bar */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          NEURAL AUDIO GRAPH WORKSTATION
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-mono cursor-pointer hover:bg-purple-500/30 transition-colors"
        >
          <Zap size={11} className={isPlaying ? 'text-yellow-400' : 'text-zinc-500'} />
          <span>{isPlaying ? 'ENGINE LIVE' : 'PAUSED'}</span>
        </button>
      </div>

      {/* Equalizer graphic */}
      <div className="relative z-10 w-full my-4 flex flex-col items-center">
        <div className="flex items-center gap-1.5 h-28 w-full justify-center px-4 bg-zinc-900/70 border border-purple-500/20 rounded-2xl backdrop-blur-md p-4 shadow-xl">
          {[45, 75, 30, 95, 60, 110, 85, 40, 120, 70, 90, 50, 100, 35, 80, 65].map((h, i) => (
            <motion.div
              key={i}
              className="w-2.5 bg-gradient-to-t from-purple-600 via-pink-500 to-cyan-400 rounded-full"
              animate={{
                height: isPlaying ? [h * 0.3, h * 0.9, h * 0.4] : 8,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.1 + (i % 5) * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom meta */}
      <div className="relative z-10 w-full flex items-center justify-between bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-lg text-xs font-mono text-purple-300">
        <span className="flex items-center gap-1">
          <Cpu size={13} />
          <span>SPATIAL STEM HARMONICS</span>
        </span>
        <span className="text-cyan-300 font-bold">4.2ms JITTER-FREE</span>
      </div>
    </div>
  );
}

function NeonVisual() {
  const [verified, setVerified] = useState(false);
  const [scanning, setScanning] = useState(false);

  const handleSimulateScan = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scanning) return;
    setScanning(true);
    setVerified(false);

    setTimeout(() => {
      setScanning(false);
      setVerified(true);
    }, 1200);
  };

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] bg-gradient-to-br from-zinc-950 via-[#071714] to-teal-950/40 flex flex-col items-center justify-between p-6 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      {/* Top bar */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <span className="text-[10px] font-mono text-teal-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          ZERO-KNOWLEDGE IDENTITY VAULT
        </span>
        <button
          type="button"
          onClick={handleSimulateScan}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-mono cursor-pointer hover:bg-teal-500/30 transition-colors"
        >
          <RefreshCw size={11} className={scanning ? 'animate-spin' : ''} />
          <span>{scanning ? 'SCANNING...' : 'TEST VERIFY'}</span>
        </button>
      </div>

      {/* Center biometric emblem */}
      <div className="relative z-10 my-4 flex flex-col items-center">
        <div className="relative w-44 h-44 rounded-2xl border-2 border-teal-500/40 bg-zinc-900/80 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(45,212,191,0.2)]">
          <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-teal-500 text-[9px] font-mono font-bold text-zinc-950 uppercase tracking-widest">
            {verified ? 'VERIFIED CRYPTO ID' : scanning ? 'COMPUTING ZK-PROOF' : 'ZK-VAULT SECURE'}
          </div>
          <ShieldCheck
            size={48}
            className={`transition-colors duration-300 ${
              verified ? 'text-emerald-400 scale-110' : scanning ? 'text-cyan-400 animate-pulse' : 'text-teal-400'
            }`}
          />
          <span className="text-xs font-bold text-white mt-2">
            {verified ? 'IDENTITY AUTHENTICATED' : 'BIOMETRIC HANDSHAKE'}
          </span>
          <span className="text-[10px] font-mono text-teal-300 mt-1">
            {verified ? 'HASH: 0x8F92...B3C1' : 'RESPONSE &lt; 0.8s'}
          </span>
        </div>
      </div>

      {/* Bottom status badge */}
      <div className="relative z-10 w-full flex items-center justify-between bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-lg text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span>2.5M+ DECENTRALIZED IDS</span>
        </span>
        <span className="text-teal-400 font-semibold">ZERO FRICTION</span>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'aura') return <AuraVisual />;
  if (project.id === 'orbit') return <OrbitVisual />;
  if (project.id === 'synth') return <SynthVisual />;
  return <NeonVisual />;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Multimodal' },
  { id: 'fintech', label: 'FinTech Telemetry' },
  { id: 'audio', label: 'Spatial Audio' },
  { id: 'security', label: 'Cryptography' },
];

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return p.id === 'aura';
    if (activeCategory === 'fintech') return p.id === 'orbit';
    if (activeCategory === 'audio') return p.id === 'synth';
    if (activeCategory === 'security') return p.id === 'neon';
    return true;
  });

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
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

        {/* Category Filter Tabs using AnimatedBackground */}
        <div className="mt-8 flex items-center justify-start overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <AnimatedBackground
              defaultValue="all"
              className="rounded-lg bg-zinc-800 text-white shadow-sm"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
              onValueChange={(id) => id && setActiveCategory(id)}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  data-id={cat.id}
                  type="button"
                  className={`px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                    activeCategory === cat.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="group"
                data-cursor="EXPLORE"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <Tilt rotationFactor={6} className="w-full">
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
                          <span className="uppercase tracking-wider text-zinc-300">{project.client}</span>
                          <span>{project.year}</span>
                        </div>

                        {/* Project Title with TextScramble */}
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors uppercase">
                          {hoveredProjectId === project.id ? (
                            <TextScramble duration={0.6} characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789">
                              {project.title}
                            </TextScramble>
                          ) : (
                            project.title
                          )}
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
                            <MorphingDialogTrigger className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors py-2 px-3 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                              <span>Deep Dive Case Study</span>
                              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </MorphingDialogTrigger>

                            <MorphingDialogContainer>
                              <MorphingDialogContent className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl text-zinc-100 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
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
                                      The Problem Space & Ambition
                                    </h4>
                                    <p className="text-zinc-300 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                                      {project.challenge}
                                    </p>
                                  </div>

                                  <div>
                                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                                      Engineering & Kinetic Solution
                                    </h4>
                                    <p className="text-zinc-300 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                                      {project.solution}
                                    </p>
                                  </div>

                                  <div>
                                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                                      Quantified Outcomes
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
        </AnimatePresence>
      </div>
    </section>
  );
}
