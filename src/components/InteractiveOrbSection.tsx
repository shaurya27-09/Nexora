'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GlowEffect } from './motion-primitives/GlowEffect';
import { SpinningText } from './motion-primitives/SpinningText';
import { Sparkles, Radio, Activity, RefreshCw } from 'lucide-react';

export function InteractiveOrbSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbMode, setOrbMode] = useState<'pulse' | 'breathe' | 'rotate' | 'colorShift'>('pulse');
  const [isHovered, setIsHovered] = useState(false);

  // Mouse reaction values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 80 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const orbRotateX = useTransform(smoothY, [-200, 200], [15, -15]);
  const orbRotateY = useTransform(smoothX, [-200, 200], [-15, 15]);

  const floatingWords = [
    { text: 'DESIGN', angle: 0, distance: 180, color: 'text-cyan-300' },
    { text: 'AI', angle: 60, distance: 200, color: 'text-blue-300' },
    { text: 'CODE', angle: 120, distance: 190, color: 'text-indigo-300' },
    { text: 'MOTION', angle: 180, distance: 210, color: 'text-teal-300' },
    { text: 'IDEAS', angle: 240, distance: 185, color: 'text-purple-300' },
    { text: 'EXPERIENCE', angle: 300, distance: 220, color: 'text-cyan-200' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - (rect.left + rect.width / 2);
    const y = touch.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section
      id="interactive-core"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="ORBIT"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60 overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
          <Activity size={12} className="animate-pulse" />
          <span>EXPERIMENTAL RESEARCH LAB</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white uppercase">
          The Living Core
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400">
          Interact with our neural synthesis engine. Hover, drag cursor, or toggle frequency states to reshape the dynamic energy field.
        </p>
      </div>

      {/* Interactive Neural Orb Stage */}
      <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
        {/* Orbital Ring with SpinningText */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <SpinningText
            duration={25}
            radius={8.5}
            fontSize={0.7}
            className="text-zinc-500 font-mono tracking-widest uppercase"
          >
            • NEXORA LABS • LIVING EXPERIENCES • NEURAL MOTION •
          </SpinningText>
        </div>

        {/* Outer Orbit Rings */}
        <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full border border-zinc-800/80 pointer-events-none" />
        <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border border-cyan-500/20 border-dashed animate-spin [animation-duration:60s] pointer-events-none" />

        {/* Floating Orbital Kinetic Words */}
        {floatingWords.map((item, idx) => {
          const rad = (item.angle * Math.PI) / 180;
          const xBase = Math.cos(rad) * item.distance;
          const yBase = Math.sin(rad) * item.distance;

          return (
            <motion.div
              key={item.text}
              animate={{
                x: [xBase, xBase + (idx % 2 === 0 ? 10 : -10), xBase],
                y: [yBase, yBase + (idx % 2 === 0 ? -12 : 12), yBase],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + (idx % 3),
                ease: 'easeInOut',
              }}
              className={`absolute z-20 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md text-[11px] sm:text-xs font-mono font-semibold ${item.color} shadow-lg pointer-events-none cursor-default`}
            >
              {item.text}
            </motion.div>
          );
        })}

        {/* Central Responsive Orb */}
        <motion.div
          style={{
            rotateX: orbRotateX,
            rotateY: orbRotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 rounded-full cursor-pointer flex items-center justify-center"
        >
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <GlowEffect
              mode={orbMode}
              colors={
                orbMode === 'colorShift'
                  ? ['#06b6d4', '#8b5cf6', '#ec4899', '#3b82f6']
                  : ['#38bdf8', '#6366f1', '#14b8a6', '#0284c7']
              }
              blur="strong"
              scale={1.15}
              duration={4}
            />
          </div>

          {/* Frosted Glass Shell */}
          <div className="absolute inset-2 rounded-full border border-white/30 bg-gradient-to-tr from-white/5 to-cyan-500/20 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center text-center p-4">
            <span className="h-3 w-3 rounded-full bg-cyan-300 animate-ping mb-2" />
            <span className="text-[11px] font-mono tracking-wider font-bold text-white uppercase">
              RESONANCE
            </span>
            <span className="text-[9px] font-mono text-cyan-200 mt-0.5">
              {orbMode.toUpperCase()}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Mode Switcher Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 relative z-10">
        <span className="text-xs font-mono text-zinc-500 mr-2 uppercase">
          Frequency State:
        </span>
        {(['pulse', 'breathe', 'rotate', 'colorShift'] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setOrbMode(mode)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              orbMode === mode
                ? 'bg-cyan-500/20 border border-cyan-500/60 text-cyan-300 shadow-md shadow-cyan-500/10'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {mode.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
