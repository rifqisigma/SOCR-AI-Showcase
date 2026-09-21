import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";
import EvidenceSections from "@/components/StatBlock";

export const metadata: Metadata = {
  title: "The Evidence",
  description:
    "Empirical data, global diffusion metrics, and cognitive research grounding the need for Socratic AI in higher education.",
};

export default function DataPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">
      {/* Editorial Header */}
      <header className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EB] border border-[#E6E4DC] text-xs font-mono text-[#141413]">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
          <span>Empirical Foundation</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#141413] tracking-tight font-normal leading-tight">
          The Evidence
        </h1>
        <p className="font-serif text-2xl sm:text-3xl text-[#4D4C48] leading-snug">
          Mapping the Velocity of GenAI Diffusion and its Measurable Cognitive Footprint.
        </p>
        <p className="text-base text-[#66645E] leading-relaxed">
          The rationale for SOCR.AI is established on empirical data spanning global economic adoption, student survey benchmarks, and peer-reviewed cognitive retention studies.
        </p>
      </header>

      {/* Main Evidence Visual Sections */}
      <EvidenceSections />

      {/* Bottom Route Link */}
      <div className="border-t border-[#E6E4DC] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#787774] uppercase">Next in sequence</span>
          <p className="font-serif text-xl text-[#141413]">Track Project Development & Milestones</p>
        </div>
        <Link
          href="/progress"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all"
        >
          <span>Continue to Progress</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
