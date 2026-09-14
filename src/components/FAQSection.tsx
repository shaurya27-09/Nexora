'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './motion-primitives/Accordion';
import { Spotlight } from './motion-primitives/Spotlight';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

const FAQS = [
  {
    id: 'engagement-model',
    question: 'How does Nexora integrate with our existing engineering and product teams?',
    answer:
      'We operate as an embedded strike team rather than an isolated vendor. Our senior engineers and designers push directly to your repositories, participate in daily standups, and establish comprehensive design tokens and CI/CD pipelines. We prioritize radical transparency and zero architectural friction.',
    tag: 'Collaboration',
  },
  {
    id: 'timelines-delivery',
    question: 'What is your typical engagement duration and delivery velocity?',
    answer:
      'Most flagship engagements span 6 to 12 weeks from initial architectural deconstruction to public production deployment. We work in rapid, tangible 2-week sprint releases with deployable staging builds at every milestone, completely eliminating speculative drift.',
    tag: 'Timelines',
  },
  {
    id: 'ip-ownership',
    question: 'Who owns the intellectual property, design tokens, and trained models?',
    answer:
      'You do—fully and irrevocably. All codebases, WebGL shader scripts, Figma component libraries, trained weights, and architectural documentation transfer to your organization upon milestone sign-off. We sign reciprocal confidentiality agreements before any strategy session.',
    tag: 'Legal & IP',
  },
  {
    id: 'tech-standards',
    question: 'What technical stack and performance standards do you enforce?',
    answer:
      'We build predominantly in full-stack TypeScript, React/Next.js, WebGL/WebGPU, and distributed edge architectures. Every build must pass strict Lighthouse performance thresholds (>95 score), 60+ FPS motion frame-budget benchmarks, and WCAG AA accessibility compliance before launch.',
    tag: 'Engineering',
  },
  {
    id: 'commission-selection',
    question: 'How do you select client partnerships and handle project feasibility?',
    answer:
      'To maintain museum-grade polish and partner-level attention, we cap our active client cohort at four concurrent flagships per quarter. We evaluate projects based on technical ambition, design opportunity, and category leadership potential.',
    tag: 'Partnership',
  },
];

export type FAQSectionProps = {
  onOpenProjectModal: () => void;
};

export function FAQSection({ onOpenProjectModal }: FAQSectionProps) {
  return (
    <section
      id="faq"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-zinc-800/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
              <HelpCircle size={13} className="text-cyan-400" />
              <span>TRANSPARENCY & PROTOCOL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white uppercase">
              Frequently Asked Questions
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Everything you need to know about our commission process, architectural standards, team integration, and post-launch evolution.
            </p>

            <div className="pt-4 p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl">
              <h3 className="text-sm font-bold font-display text-white mb-2">
                Have a bespoke technical or timeline inquiry?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Our technical partners are available for confidential feasibility reviews and architecture scoping.
              </p>
              <button
                type="button"
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              >
                <span>REQUEST DIRECT CONSULTATION</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-900/30 p-4 sm:p-8 backdrop-blur-xl shadow-2xl">
              <Spotlight size={360} className="from-cyan-400/10 via-blue-500/5 to-transparent" />

              <Accordion
                defaultValue="engagement-model"
                className="divide-y divide-zinc-800/80"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {FAQS.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <AccordionTrigger className="w-full text-left flex items-start justify-between gap-4 py-2 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                          {faq.tag}
                        </span>
                        <span className="text-base sm:text-lg font-bold font-display text-zinc-200 group-hover:text-white transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <div className="mt-1 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-zinc-700 transition-colors shrink-0">
                        <Plus
                          size={14}
                          className="transition-transform duration-300 group-data-[expanded]:rotate-45"
                        />
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pt-3 pb-2 text-zinc-400 text-sm leading-relaxed pr-8">
                      <p className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-850 text-zinc-300">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
