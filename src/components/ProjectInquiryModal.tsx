'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BorderTrail } from './motion-primitives/BorderTrail';
import { Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';

export type ProjectInquiryModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectInquiryModal({ isOpen, onOpenChange }: ProjectInquiryModalProps) {
  const [step, setStep] = useState<'form' | 'submitted'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedScope, setSelectedScope] = useState<string[]>(['AI Product Design']);
  const [budget, setBudget] = useState('$50k - $100k');
  const [message, setMessage] = useState('');

  const scopes = [
    'AI Product Design',
    'Creative Engineering',
    'Brand Systems',
    'Motion & 3D',
    'Web Architecture',
  ];

  const budgets = ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpenChange]);

  const toggleScope = (scope: string) => {
    if (selectedScope.includes(scope)) {
      setSelectedScope(selectedScope.filter((s) => s !== scope));
    } else {
      setSelectedScope([...selectedScope, scope]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitted');
  };

  const handleReset = () => {
    setStep('form');
    setName('');
    setEmail('');
    setMessage('');
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-2xl backdrop-blur-2xl text-zinc-100"
          >
            <BorderTrail size={120} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-60" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {step === 'form' ? (
              <div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                      NEXORA STUDIO DIRECT ACCESS
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display uppercase">
                    Initiate a Collaboration
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    Tell us about your product ambition, vision, and timeline. Our partners respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Rostova"
                        className="w-full rounded-lg bg-zinc-900/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full rounded-lg bg-zinc-900/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Capabilities Required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {scopes.map((s) => {
                        const isSelected = selectedScope.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleScope(s)}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-500/15 border-cyan-500/60 text-cyan-300 shadow-sm shadow-cyan-500/10'
                                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Estimated Capital Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`text-xs py-2 px-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                            budget === b
                              ? 'bg-blue-500/20 border-blue-500/70 text-blue-300'
                              : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Project Brief & Strategic Ambition
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What is your product mission, core pain point, or desired launch window?"
                      className="w-full rounded-lg bg-zinc-900/80 border border-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-zinc-500 font-mono">
                      CONFIDENTIAL NDA AUTOMATICALLY APPLIED
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display text-white uppercase">
                  Inquiry Transmitted
                </h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you, <span className="text-zinc-200 font-medium">{name || 'Partner'}</span>. Your project dossier has been routed to our founding partners. We will reach out via <span className="text-cyan-400">{email}</span> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-lg bg-zinc-900 border border-zinc-800 px-5 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
