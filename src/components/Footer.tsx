'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Globe, Terminal, Shield, Mail } from 'lucide-react';

export function Footer() {
  const [times, setTimes] = useState({
    sf: '',
    london: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimes({
        sf: now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        london: now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        tokyo: now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-28 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700">
                <span className="h-2 w-2 rounded-sm bg-cyan-400 rotate-45" />
              </div>
              <span className="font-display font-black text-xl tracking-widest text-white">
                NEXORA
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              An AI-powered creative technology studio designing and engineering living digital flagships for the world's most ambitious brands.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL • Q3/Q4 INQUIRIES OPEN</span>
            </div>
          </div>

          {/* Global Studio Clocks */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-zinc-200 uppercase tracking-widest mb-3">
              Global Presence & Clocks
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400">SAN FRANCISCO</span>
                <span className="text-zinc-200 font-semibold">{times.sf || '09:00'} PST</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400">LONDON</span>
                <span className="text-zinc-200 font-semibold">{times.london || '17:00'} GMT</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400">TOKYO</span>
                <span className="text-zinc-200 font-semibold">{times.tokyo || '01:00'} JST</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono text-zinc-200 uppercase tracking-widest mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a href="#work" className="hover:text-cyan-400 transition-colors">
                    [01] SELECTED WORK
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-cyan-400 transition-colors">
                    [02] CAPABILITIES
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-cyan-400 transition-colors">
                    [03] METHODOLOGY
                  </a>
                </li>
                <li>
                  <a href="#interactive-core" className="hover:text-cyan-400 transition-colors">
                    [04] LIVING LAB
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition-colors">
                    [05] CONTACT & BRIEF
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg"
              >
                <ArrowUp size={13} />
                <span>RETURN TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} NEXORA CREATIVE TECHNOLOGY INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>TERMS OF ENGAGEMENT</span>
            <span>PRIVACY PROTOCOL</span>
            <span>SECURITY AUDIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
