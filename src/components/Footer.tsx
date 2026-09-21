import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F4F2EB] border-t border-[#E6E4DC] mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Editorial Statement */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#141413] flex items-center justify-center">
                <span className="font-serif text-xs font-semibold text-[#141413]">S</span>
              </div>
              <span className="font-serif text-xl tracking-tight text-[#141413] font-medium">
                SOCR.AI
              </span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-[#141413] font-normal leading-snug tracking-tight">
              Turning AI from an answer machine into a thinking partner.
            </p>
            <p className="text-sm text-[#66645E] max-w-md leading-relaxed">
              Socratic Optimized Cognitive Responsiveness is an academic innovation project investigating how structured inquiry and AI dialogue can cultivate active cognitive engagement in higher education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#787774] uppercase">
              Index
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#4D4C48] hover:text-[#141413] hover:underline underline-offset-4 transition-colors"
                >
                  Home / Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/innovation"
                  className="text-[#4D4C48] hover:text-[#141413] hover:underline underline-offset-4 transition-colors"
                >
                  The Innovation & Framework
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="text-[#4D4C48] hover:text-[#141413] hover:underline underline-offset-4 transition-colors"
                >
                  Empirical Evidence
                </Link>
              </li>
              <li>
                <Link
                  href="/progress"
                  className="text-[#4D4C48] hover:text-[#141413] hover:underline underline-offset-4 transition-colors"
                >
                  Development & Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/creator"
                  className="text-[#4D4C48] hover:text-[#141413] hover:underline underline-offset-4 transition-colors"
                >
                  Creator / Rifqi Adli Hernawan
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Attribution & Context */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#787774] uppercase">
              Affiliation
            </h4>
            <div className="space-y-2 text-sm text-[#4D4C48]">
              <p className="font-medium text-[#141413]">IPB University</p>
              <p className="text-xs text-[#66645E]">
                Teknologi Rekayasa Komputer
              </p>
              <p className="text-xs text-[#66645E] pt-2">
                Bogor, West Java, Indonesia
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/creator"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C85A32] hover:text-[#A84B25] transition-colors"
              >
                <span>Read researcher profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E6E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787774]">
          <p>© {currentYear} SOCR.AI Project. Non-commercial research & student innovation showcase.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono">IPB University</span>
            <span>•</span>
            <span className="font-mono">Cognitive AI Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
