'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<{
    text: string | null;
    isHoveringInteractive: boolean;
    isHoveringCard: boolean;
  }>({
    text: null,
    isHoveringInteractive: false,
    isHoveringCard: false,
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor followers
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check target element for custom data-cursor or interactive tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      const isInteractive = !!target.closest('button, a, input, textarea, [role="button"]');
      const isCard = !!target.closest('[data-card]');

      setCursorState({
        text: cursorEl ? cursorEl.getAttribute('data-cursor') : null,
        isHoveringInteractive: isInteractive,
        isHoveringCard: isCard,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer Spring Follower Ring / Pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{
            scale: cursorState.text ? 1.6 : cursorState.isHoveringInteractive ? 1.4 : 1,
            borderColor: cursorState.text || cursorState.isHoveringInteractive ? 'rgba(56, 189, 248, 0.7)' : 'rgba(255, 255, 255, 0.25)',
            backgroundColor: cursorState.text ? 'rgba(5, 6, 8, 0.85)' : 'rgba(56, 189, 248, 0.04)',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`rounded-full border backdrop-blur-[2px] flex items-center justify-center transition-all ${
            cursorState.text
              ? 'px-3 py-1.5 h-7 min-w-[58px] shadow-lg shadow-cyan-500/20'
              : cursorState.isHoveringInteractive
              ? 'w-10 h-10'
              : 'w-7 h-7'
          }`}
        >
          {cursorState.text && (
            <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
              {cursorState.text}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
            cursorState.text ? 'bg-cyan-400 opacity-0' : 'bg-cyan-400 opacity-90'
          }`}
        />
      </motion.div>
    </div>
  );
}
