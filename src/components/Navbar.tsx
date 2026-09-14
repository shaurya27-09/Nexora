'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Magnetic } from './motion-primitives/Magnetic';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export type NavbarProps = {
  onOpenProjectModal: () => void;
};

export function Navbar({ onOpenProjectModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('work');

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Studio', href: '#interactive-core', id: 'studio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, href: string) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 md:pt-5 pointer-events-none"
    >
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/80 border border-zinc-800/80 shadow-2xl shadow-black/60 backdrop-blur-xl py-2.5 px-4 md:px-6'
            : 'bg-zinc-950/40 border border-zinc-800/40 backdrop-blur-md py-3.5 px-4 md:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            aria-label="Nexora Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 group-hover:border-cyan-500/80 transition-colors">
              <span className="h-2 w-2 rounded-sm bg-cyan-400 rotate-45 transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute inset-0 rounded-lg bg-cyan-500/10 blur-sm group-hover:bg-cyan-500/25 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-widest text-white leading-none">
                NEXORA
              </span>
              <span className="text-[9px] font-mono tracking-wider text-cyan-400 uppercase mt-0.5 leading-none">
                STUDIO • AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800/60">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-zinc-800/90 border border-zinc-700/60 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Magnetic intensity={0.2} range={60}>
              <button
                type="button"
                onClick={onOpenProjectModal}
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-700/80 hover:border-cyan-500/60 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                  <span>Get Started</span>
                  <ArrowUpRight size={13} className="text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden pt-4 pb-2 border-t border-zinc-800/80 mt-3"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 text-left transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="text-zinc-500" />
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenProjectModal();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20"
                  >
                    <Sparkles size={15} />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
