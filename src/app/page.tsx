import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, BarChart3, GitFork, ArrowUpRight } from "lucide-react";
import ExpandableImage from "@/components/ExpandableImage";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="w-full max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-12 text-center flex flex-col items-center">
        {/* Subtle Research Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F2EB] border border-[#E6E4DC] text-xs font-mono text-[#141413] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
          <span>Student Innovation Research Initiative</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#141413] font-normal leading-[1.05] max-w-4xl">
          SOCR.AI
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-2xl sm:text-3xl text-[#4D4C48] mt-4 font-normal tracking-tight max-w-3xl">
          Socratic Optimized Cognitive Responsiveness
        </p>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-[#66645E] mt-6 max-w-2xl leading-relaxed font-sans">
          A learning approach that integrates Socratic Questioning and Large Language Models to encourage students to think before relying on AI-generated answers.
        </p>

        {/* Concise Purpose Statement */}
        <div className="mt-8 pt-6 border-t border-[#E6E4DC] max-w-xl">
          <p className="font-serif text-xl sm:text-2xl text-[#141413] italic font-normal">
            “Turning AI from an answer machine into a thinking partner.”
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href="/innovation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all"
          >
            <span>Explore The Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/data"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF9F5] border border-[#D1CFCE] text-[#141413] rounded-full text-sm font-medium hover:bg-[#F4F2EB] hover:border-[#141413] transition-all"
          >
            <span>Examine Empirical Data</span>
          </Link>
        </div>
      </section>

      {/* INTERACTIVE SCROLL-EXPANDABLE IMAGE SECTION */}
      <section className="w-full">
        <ExpandableImage />
      </section>

      {/* EDITORIAL NARRATIVE & CORE PILLARS SECTION */}
      <section className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-24">
        {/* Core Rationale */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#E6E4DC] pt-16">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32]">
              The Core Problem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight mt-2">
              The AI Genie Phenomenon
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#4D4C48] leading-relaxed">
            <p>
              As generative AI models become increasingly powerful, obtaining immediate answers has become frictionless. However, this ease creates a silent cognitive vulnerability: <strong>cognitive offloading</strong>, where learners bypass the critical stages of synthesis, struggle, and deduction.
            </p>
            <p className="text-sm text-[#66645E]">
              SOCR.AI introduces intentional cognitive friction through calibrated Socratic questioning—guiding students to inspect assumptions and evaluate premises before viewing solutions.
            </p>
          </div>
        </div>

        {/* 3 Editorial Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 space-y-4 hover:border-[#141413] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E6E4DC] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#C85A32]" />
            </div>
            <h3 className="font-serif text-2xl text-[#141413]">
              Dialectical Scaffolding
            </h3>
            <p className="text-sm text-[#66645E] leading-relaxed">
              Transforming prompt responses into guided multi-step inquiry sequences that reinforce schema formation.
            </p>
            <div className="pt-2">
              <Link
                href="/innovation"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C85A32] hover:text-[#A84B25]"
              >
                <span>Read method</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 space-y-4 hover:border-[#141413] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E6E4DC] flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#C85A32]" />
            </div>
            <h3 className="font-serif text-2xl text-[#141413]">
              Empirical Backing
            </h3>
            <p className="text-sm text-[#66645E] leading-relaxed">
              Grounded in data from Microsoft AI Economy Institute, Chegg Global Survey, and cognitive retention studies.
            </p>
            <div className="pt-2">
              <Link
                href="/data"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C85A32] hover:text-[#A84B25]"
              >
                <span>View evidence</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 space-y-4 hover:border-[#141413] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E6E4DC] flex items-center justify-center">
              <GitFork className="w-5 h-5 text-[#C85A32]" />
            </div>
            <h3 className="font-serif text-2xl text-[#141413]">
              Iterative Development
            </h3>
            <p className="text-sm text-[#66645E] leading-relaxed">
              Structured across five deliberate stages from theoretical concept definition to validated educational deployment.
            </p>
            <div className="pt-2">
              <Link
                href="/progress"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C85A32] hover:text-[#A84B25]"
              >
                <span>Track progress</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
