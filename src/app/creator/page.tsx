import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import CreatorProfile from "@/components/CreatorProfile";

export const metadata: Metadata = {
  title: "Creator",
  description:
    "Profile of Rifqi Adli Hernawan — student researcher at IPB University leading the SOCR.AI cognitive inquiry initiative.",
};

export default function CreatorPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">
      {/* Main Creator Profile Section */}
      <CreatorProfile />

      {/* Bottom Route Return to Home */}
      <div className="border-t border-[#E6E4DC] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#787774] uppercase">Complete Circle</span>
          <p className="font-serif text-xl text-[#141413]">Return to Project Introduction</p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all"
        >
          <span>Return to Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
