"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Code2,
  Cpu,
  BrainCircuit,
  Compass,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const researchInterests = [
  {
    title: "Educational Technology",
    description: "Investigating how conversational interfaces mediate knowledge retention and active inquiry.",
    icon: BookOpen,
  },
  {
    title: "Software Development",
    description: "Architecting resilient, type-safe fullstack web systems and intuitive user interfaces.",
    icon: Code2,
  },
  {
    title: "Information Technology",
    description: "Designing structured computing workflows and human-computer dialectical frameworks.",
    icon: Cpu,
  },
  {
    title: "Research & Innovation",
    description: "Translating cognitive science literature into tangible technological interventions.",
    icon: BrainCircuit,
  },
];

export default function CreatorProfile() {
  return (
    <div className="space-y-24">
      {/* Editorial Profile Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Large Portrait Column with subtle hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="relative group overflow-hidden rounded-2xl bg-[#E6E4DC] border border-[#E6E4DC] shadow-sm">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/Person.JPG"
                alt="Portrait of Rifqi Adli Hernawan, Student Researcher at IPB University"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-[1.02]"
              />
            </div>
            {/* Subtle floating caption overlay */}
            <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E6E4DC] flex items-center justify-between text-xs font-mono text-[#787774]">
              <span>Rifqi Adli Hernawan</span>
              <span className="flex items-center gap-1.5 text-[#141413]">
                <MapPin className="w-3 h-3 text-[#C85A32]" />
                <span>IPB University</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Affiliation Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest">
              <span>Project Lead & Researcher</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141413] tracking-tight font-normal">
              Rifqi Adli Hernawan
            </h1>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-[#66645E]">
              <span className="font-medium text-[#141413]">IPB University</span>
              <span>•</span>
              <span className="font-mono text-xs bg-[#FAF9F5] border border-[#E6E4DC] px-2.5 py-1 rounded-md">
                Teknologi Rekayasa Komputer
              </span>
            </div>
          </div>

          {/* Narrative Bio */}
          <div className="space-y-4 text-base sm:text-lg text-[#4D4C48] leading-relaxed font-sans">
            <p>
              I am an undergraduate student researcher in <strong>Teknologi Rekayasa Komputer</strong> at IPB University. My work explores the intersection of human cognitive agency, dialectical interaction design, and intelligent computing systems.
            </p>
            <p className="text-base text-[#66645E]">
              As generative AI becomes ubiquitous in higher education, I initiated the <strong>SOCR.AI</strong> project to address the urgent pedagogical dilemma of cognitive offloading. Rather than building automated answer machines, I believe technology should challenge students to examine premises, structure hypotheses, and cultivate deep intellectual autonomy.
            </p>
          </div>

          {/* Key Academic & Research Focus Pillars */}
          <div className="pt-6 border-t border-[#E6E4DC] space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#787774]">
              Primary Areas of Exploration
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {researchInterests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E6E4DC] rounded-xl space-y-2 hover:border-[#141413] transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[#141413]">
                      <Icon className="w-4 h-4 text-[#C85A32]" />
                      <h4 className="font-serif text-base font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#66645E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Research Creed Quote */}
          <div className="bg-[#FAF9F5] border-l-2 border-[#C85A32] p-6 rounded-r-xl space-y-2">
            <blockquote className="font-serif text-lg italic text-[#141413] leading-snug">
              “The goal of technology in learning should not be frictionlessness, but purposeful engagement that sparks independent reflection.”
            </blockquote>
            <p className="text-xs font-mono text-[#787774]">
              — Research Statement on Socratic Human-AI Interaction
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
