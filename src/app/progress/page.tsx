import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitFork } from "lucide-react";
import DevelopmentTimeline from "@/components/DevelopmentTimeline";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Explore the development status, empirical milestones, and architectural roadmap of the SOCRATIVE project.",
};

export default function ProgressPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">
      {/* Editorial Header */}
      <header className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EB] border border-[#E6E4DC] text-xs font-mono text-[#141413]">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
          <span>Project Roadmap & Execution</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#141413] tracking-tight font-normal leading-tight">
          Progress
        </h1>
        <p className="font-serif text-2xl sm:text-3xl text-[#4D4C48] leading-snug">
          An Iterative Journey from Dialectical Theory to Functional Pedagogical Prototype.
        </p>
        <p className="text-base text-[#66645E] leading-relaxed">
          Transparent development tracking across theoretical definition, algorithmic framework specification, prototype implementation, and planned empirical validation.
        </p>
      </header>

      {/* Main Development Timeline & GitHub Integration */}
      <DevelopmentTimeline />

      {/* Bottom Route Link */}
      <div className="border-t border-[#E6E4DC] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#787774] uppercase">Next in sequence</span>
          <p className="font-serif text-xl text-[#141413]">Meet the Researcher Behind SOCRATIVE</p>
        </div>
        <Link
          href="/creator"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all"
        >
          <span>Continue to Creator</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
