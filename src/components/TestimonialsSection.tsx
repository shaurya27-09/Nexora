'use client';
import React from 'react';
import { TESTIMONIALS } from '../data/content';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from './motion-primitives/Carousel';
import { Spotlight } from './motion-primitives/Spotlight';
import { Quote, Sparkles } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            ENDORSEMENTS & PARTNERSHIPS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white uppercase">
          Client Voices
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          Unvarnished impressions from executive partners who trusted Nexora to steer their most critical digital initiatives.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative px-2 sm:px-6" data-cursor="DRAG">
        <Carousel className="w-full">
          <CarouselContent>
            {TESTIMONIALS.map((t, idx) => (
              <CarouselItem key={idx}>
                <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-8 sm:p-12 md:p-14 backdrop-blur-xl shadow-2xl overflow-hidden mx-2">
                  <Spotlight size={320} className="from-cyan-400/10 via-blue-500/5 to-transparent" />

                  {/* Top Quote Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center text-cyan-400 mb-6 sm:mb-8">
                    <Quote size={20} className="rotate-180" />
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-zinc-100 leading-relaxed font-sans">
                    "{t.quote}"
                  </blockquote>

                  {/* Author Meta */}
                  <div className="mt-8 sm:mt-10 pt-6 border-t border-zinc-800/80 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-full object-cover border-2 border-cyan-500/40 shadow-md"
                    />
                    <div>
                      <div className="text-base font-bold font-display text-white">
                        {t.author}
                      </div>
                      <div className="text-xs sm:text-sm text-cyan-400 font-mono">
                        {t.role} — <span className="text-zinc-400">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="mt-8 flex flex-col items-center">
            <CarouselIndicator />
            <CarouselNavigation className="hidden sm:flex" alwaysShow />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
