'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dock, DockItem, DockIcon, DockLabel } from './motion-primitives/Dock';
import { Sparkles, Layers, Cpu, Compass, Activity, Send, ArrowUp } from 'lucide-react';

export type FloatingNavDockProps = {
  onOpenProjectModal: () => void;
};

export function FloatingNavDock({ onOpenProjectModal }: FloatingNavDockProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 shadow-2xl shadow-black/80 backdrop-blur-2xl p-1.5">
            <Dock magnification={52} distance={110} panelHeight={48} className="h-12 bg-transparent p-0">
              <DockItem onClick={() => scrollTo('top')} className="w-10 h-10 bg-zinc-900/90 border border-zinc-800">
                <DockLabel>Top</DockLabel>
                <DockIcon>
                  <ArrowUp size={16} className="text-zinc-300" />
                </DockIcon>
              </DockItem>

              <DockItem onClick={() => scrollTo('work')} className="w-10 h-10 bg-zinc-900/90 border border-zinc-800">
                <DockLabel>Work</DockLabel>
                <DockIcon>
                  <Layers size={16} className="text-cyan-400" />
                </DockIcon>
              </DockItem>

              <DockItem onClick={() => scrollTo('capabilities')} className="w-10 h-10 bg-zinc-900/90 border border-zinc-800">
                <DockLabel>Capabilities</DockLabel>
                <DockIcon>
                  <Cpu size={16} className="text-blue-400" />
                </DockIcon>
              </DockItem>

              <DockItem onClick={() => scrollTo('process')} className="w-10 h-10 bg-zinc-900/90 border border-zinc-800">
                <DockLabel>Process</DockLabel>
                <DockIcon>
                  <Compass size={16} className="text-indigo-400" />
                </DockIcon>
              </DockItem>

              <DockItem onClick={() => scrollTo('interactive-core')} className="w-10 h-10 bg-zinc-900/90 border border-zinc-800">
                <DockLabel>Living Core</DockLabel>
                <DockIcon>
                  <Activity size={16} className="text-teal-400" />
                </DockIcon>
              </DockItem>

              <DockItem onClick={onOpenProjectModal} className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 border border-cyan-400/50">
                <DockLabel>Start Project</DockLabel>
                <DockIcon>
                  <Sparkles size={16} className="text-white" />
                </DockIcon>
              </DockItem>
            </Dock>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
