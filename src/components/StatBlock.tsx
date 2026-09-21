"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Globe2,
  GraduationCap,
  BrainCircuit,
  BookOpen,
  ArrowUpRight,
  ShieldAlert,
  AlertCircle,
} from "lucide-react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export function AnimatedNumber({
  from = 0,
  to,
  duration = 1.6,
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = from + (to - from) * easeProgress;
      setCurrent(val);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? current.toFixed(decimals) : Math.round(current)}
      {suffix}
    </span>
  );
}

export default function EvidenceSections() {
  return (
    <div className="space-y-32">
      {/* 01 — GLOBAL AI DIFFUSION */}
      <section className="scroll-mt-24 border-t border-[#E6E4DC] pt-16" id="global-diffusion">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#C85A32]">01</span>
              <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                Global Landscape
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              Global AI Diffusion
            </h2>
            <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
              Generative AI adoption has reached unprecedented global penetration, transforming from an experimental novelty into an everyday utility across personal and educational contexts.
            </p>
            <div className="pt-2 text-xs font-mono text-[#787774] border-t border-[#E6E4DC] flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Source: Microsoft AI Economy Institute, 2026</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#787774] block mb-2">
                    Global GenAI Diffusion — H2 2025
                  </span>
                  <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal text-[#141413] tracking-tight">
                    <AnimatedNumber to={16.3} decimals={1} suffix="%" />
                  </div>
                  <p className="text-sm text-[#4D4C48] mt-4 leading-relaxed">
                    Approximately <strong>one in six people worldwide</strong> used generative AI tools during H2 2025.
                  </p>
                </div>

                {/* Trajectory comparison */}
                <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#787774]">
                    6-Month Growth Trajectory
                  </span>
                  <div className="flex items-center justify-between py-2 border-b border-[#E6E4DC]">
                    <div className="text-left">
                      <span className="text-xs text-[#787774] font-mono block">H1 2025</span>
                      <span className="font-serif text-2xl text-[#66645E]">15.1%</span>
                    </div>
                    <div className="px-3">
                      <TrendingUp className="w-5 h-5 text-[#C85A32]" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#787774] font-mono block">H2 2025</span>
                      <span className="font-serif text-2xl text-[#141413] font-semibold">16.3%</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#787774] font-mono">
                    Reference: Microsoft, Global AI Adoption in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INDONESIA CONTEXT */}
      <section className="scroll-mt-24 border-t border-[#E6E4DC] pt-16" id="indonesia-context">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#C85A32]">02</span>
              <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                National Context
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              Diffusion in Indonesia
            </h2>
            <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
              Indonesia demonstrates a steep adoption gradient, with rapid diffusion across mobile-first student and professional demographics.
            </p>
            <div className="pt-2 text-xs font-mono text-[#787774] border-t border-[#E6E4DC]">
              <span>Source: Microsoft AI Economy Institute, 2026</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#787774] block mb-2">
                    Indonesia — H2 2025
                  </span>
                  <div className="font-serif text-6xl sm:text-7xl font-normal text-[#141413] tracking-tight">
                    <AnimatedNumber to={12.7} decimals={1} suffix="%" />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E6E4DC] text-xs font-mono text-[#141413]">
                    <span className="font-semibold text-[#C85A32]">+1.1 percentage points</span>
                    <span className="text-[#787774]">(H1 → H2 2025)</span>
                  </div>
                </div>

                <div className="space-y-4 bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6">
                  <h4 className="font-serif text-lg text-[#141413]">
                    Comparative Regional Progression
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 text-[#66645E]">
                        <span>H1 2025 Baseline</span>
                        <span>11.7%</span>
                      </div>
                      <div className="w-full h-2 bg-[#E6E4DC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#787774] rounded-full w-[11.7%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 text-[#141413] font-semibold">
                        <span>H2 2025 Adoption</span>
                        <span>12.7%</span>
                      </div>
                      <div className="w-full h-2 bg-[#E6E4DC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#C85A32] rounded-full w-[12.7%]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#787774] font-mono pt-2">
                    Note: Expressed as +1.1 percentage points delta in nationwide population diffusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — AI IN EDUCATION */}
      <section className="scroll-mt-24 border-t border-[#E6E4DC] pt-16" id="ai-education">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#C85A32]">03</span>
              <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                Higher Education
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              AI in Undergraduate Studies
            </h2>
            <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
              Undergraduate students have overwhelmingly embraced GenAI for coursework, yet express urgent demand for pedagogical safeguards and conceptual clarity.
            </p>
            <div className="p-4 bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl space-y-1.5 text-xs text-[#787774]">
              <div className="font-mono font-medium text-[#141413]">Methodological Scope</div>
              <p>
                11,706 undergraduate students aged 18–21 across 15 countries, surveyed by Yonder Consulting.
              </p>
              <div className="pt-2 font-mono text-[#C85A32]">Source: Chegg Global Student Survey 2025</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {/* Main Primary Stat */}
            <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-10 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-[#787774] block mb-2">
                Undergraduate GenAI Utilization
              </span>
              <div className="font-serif text-6xl sm:text-7xl font-normal text-[#141413] tracking-tight">
                <AnimatedNumber to={80} suffix="%" />
              </div>
              <p className="text-base text-[#141413] mt-3 font-medium">
                of surveyed undergraduates had used GenAI to support university studies.
              </p>
            </div>

            {/* Tri-split Secondary Data Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 space-y-3">
                <div className="font-serif text-4xl text-[#141413] font-normal">
                  <AnimatedNumber to={29} suffix="%" />
                </div>
                <p className="text-xs text-[#4D4C48] leading-relaxed">
                  Turn to GenAI <strong>first</strong> when stuck on a concept or assignment.
                </p>
              </div>

              <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 space-y-3">
                <div className="font-serif text-4xl text-[#141413] font-normal">
                  <AnimatedNumber to={53} suffix="%" />
                </div>
                <p className="text-xs text-[#4D4C48] leading-relaxed">
                  Concerned about receiving incorrect or inaccurate information from AI outputs.
                </p>
              </div>

              <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 space-y-3">
                <div className="font-serif text-4xl text-[#141413] font-normal">
                  <AnimatedNumber to={50} suffix="%" />
                </div>
                <p className="text-xs text-[#4D4C48] leading-relaxed">
                  Explicitly wanted GenAI tools <strong>specifically designed for education</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — COGNITIVE IMPACT */}
      <section className="scroll-mt-24 border-t border-[#E6E4DC] pt-16" id="cognitive-impact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#C85A32]">04</span>
              <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                Cognitive Effects
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              Cognitive Retention & Critical Thinking
            </h2>
            <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
              Empirical inquiry highlights measurable correlations between passive reliance on automated solutions and reductions in cognitive retention and critical analytical performance.
            </p>
            <div className="p-4 bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl space-y-1.5 text-xs text-[#787774]">
              <div className="font-mono font-medium text-[#141413]">Study Methodology</div>
              <p>
                Mixed-method study involving 300 undergraduate students in the quantitative survey and 45 qualitative interviews.
              </p>
              <div className="pt-2 font-mono text-[#C85A32]">Source: Rohilla et al.</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#787774] block">
                  Memory Retention
                </span>
                <div className="font-serif text-5xl sm:text-6xl text-[#C85A32] font-normal">
                  -22%
                </div>
                <p className="text-sm text-[#4D4C48] leading-relaxed">
                  Lower memory retention reported in the study among students with excessive AI-tool usage.
                </p>
              </div>

              <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#787774] block">
                  Critical-Thinking Scores
                </span>
                <div className="font-serif text-5xl sm:text-6xl text-[#C85A32] font-normal">
                  -17.3 pp
                </div>
                <p className="text-sm text-[#4D4C48] leading-relaxed">
                  Lower critical-thinking scores associated with higher AI dependency in the study.
                </p>
              </div>
            </div>

            {/* Scientific Rigor / Non-Causal Note */}
            <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 flex items-start gap-4 text-xs text-[#66645E]">
              <ShieldAlert className="w-5 h-5 text-[#787774] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Academic Precaution:</strong> Rohilla et al. reported an association between higher AI dependency and lower memory retention and critical-thinking scores. These findings represent correlation within the measured sample, underscoring the necessity for active pedagogical design rather than unmoderated consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — RESEARCH CONTEXT: RAMADHAN ET AL. */}
      <section className="scroll-mt-24 border-t border-[#E6E4DC] pt-16" id="ramadhan-study">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#C85A32]">05</span>
              <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                Cognitive Offloading
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              Ramadhan et al. Research Framework
            </h2>
            <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
              Investigating the mechanics of human metacognition when interacting with autonomous conversational agents in educational settings.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#E6E4DC] pb-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#C85A32]" />
                  <span className="font-mono text-sm font-medium text-[#141413]">
                    Ramadhan et al. — Research Context
                  </span>
                </div>
                <span className="text-xs font-mono text-[#787774] uppercase px-2.5 py-1 bg-[#FAF9F5] border border-[#E6E4DC] rounded-md">
                  Theoretical Anchor
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#141413] leading-snug">
                “When technology eliminates cognitive friction completely, learners lose the productive struggle essential for schema construction and epistemic autonomy.”
              </blockquote>

              <div className="space-y-3 text-sm text-[#4D4C48] leading-relaxed">
                <p>
                  The work of Ramadhan et al. illuminates the boundary conditions of AI-assisted learning: while immediate answers offer short-term task resolution, unreflective cognitive offloading deteriorates deep schema formation.
                </p>
                <p>
                  SOCRATIVE adopts this finding as a foundational design constraint—restoring productive cognitive friction through guided Socratic dialogue before delivering synthesized answers.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EEE6] flex items-center justify-between text-xs font-mono text-[#787774]">
                <span>Reference Index: RAMADHAN-SOC-2025</span>
                <span className="text-[#C85A32] flex items-center gap-1">
                  <span>Archived Project Bibliography</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYNTHESIS: WHAT DOES THE DATA SUGGEST? */}
      <section className="border-t border-[#141413] pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32]">
            Synthesis & Conclusion
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141413] tracking-tight">
            What does the data suggest?
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#4D4C48] leading-relaxed max-w-3xl mx-auto">
            “AI adoption is expanding rapidly, including in education. The challenge is therefore not simply whether students use AI, but how AI can be integrated without replacing the cognitive processes required for meaningful learning.”
          </p>
          <div className="pt-6">
            <span className="inline-block w-12 h-0.5 bg-[#C85A32]" />
          </div>
        </div>
      </section>
    </div>
  );
}
