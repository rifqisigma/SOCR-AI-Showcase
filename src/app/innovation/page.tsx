import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, HelpCircle, ArrowRight } from "lucide-react";
import SocraticFlow from "@/components/SocraticFlow";

export const metadata: Metadata = {
  title: "The Innovation",
  description:
    "Explore the conceptual framework of SOCR.AI: integrating the Socratic method with Large Language Models to stimulate active cognitive reasoning.",
};

export default function InnovationPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">
      {/* Header Section */}
      <header className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EB] border border-[#E6E4DC] text-xs font-mono text-[#141413]">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
          <span>Conceptual Architecture</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#141413] tracking-tight font-normal leading-tight">
          The Innovation
        </h1>
        <p className="font-serif text-2xl sm:text-3xl text-[#4D4C48] leading-snug">
          Synthesizing Classical Dialectic Inquiry with Modern Generative Intelligence.
        </p>
      </header>

      {/* SECTION 1 — THE PROBLEM: THE AI GENIE PHENOMENON */}
      <section className="border-t border-[#E6E4DC] pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32]">
              Section 01 — Context
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
              The AI Genie Phenomenon
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#787774] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#C85A32]" />
                <span>The Cognitive Dilemma</span>
              </div>

              <p className="font-serif text-xl text-[#141413] leading-relaxed">
                Increasingly capable generative AI makes obtaining direct solutions instantaneous. However, when students receive solutions without engaging in preliminary conceptual struggle, it fosters <strong>cognitive offloading</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
                By bypassing the essential stages of framing questions, challenging assumptions, and testing edge cases, students risk superficial familiarity rather than deep, durable comprehension. SOCR.AI resolves this by shifting AI from an effortless oracle to a reflective dialectical partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS 2 & 3 — SOCRATIC METHOD & ARCHITECTURE */}
      <section className="w-full">
        <SocraticFlow />
      </section>

      {/* Bottom Route Link */}
      <div className="border-t border-[#E6E4DC] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#787774] uppercase">Next in sequence</span>
          <p className="font-serif text-xl text-[#141413]">Examine Empirical Evidence & Data</p>
        </div>
        <Link
          href="/data"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all"
        >
          <span>Continue to Data</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
