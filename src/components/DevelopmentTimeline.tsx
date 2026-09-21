"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  CircleDot,
  ArrowUpRight,
  GitBranch,
  Layers,
  Terminal,
  Code2,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface Milestone {
  number: string;
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  summary: string;
  details: string[];
  deliverables: string;
}

const milestones: Milestone[] = [
  {
    number: "01",
    title: "Concept",
    status: "Completed",
    summary:
      "Definition of the AI Genie Phenomenon and identification of the cognitive offloading challenge in higher education.",
    details: [
      "Literature review covering cognitive offloading, metacognition, and LLM behavior.",
      "Identification of pedagogical gaps in generic generative AI auto-completion.",
      "Formal problem definition and thesis formulation.",
    ],
    deliverables: "Problem definition whitepaper & theoretical taxonomy.",
  },
  {
    number: "02",
    title: "Framework",
    status: "Completed",
    summary:
      "Development of the SOCR.AI conceptual framework based on Socratic Questioning and LLM interaction.",
    details: [
      "Mapping the 5-stage dialectic loop (Question → Examine → Challenge → Reflect → Understand).",
      "Designing cognitive intervention triggers before answer synthesis.",
      "Formulating epistemic prompt scaffolding architecture.",
    ],
    deliverables: "Cognitive prompt orchestration logic & system flowchart.",
  },
  {
    number: "03",
    title: "Prototype",
    status: "In Progress",
    summary:
      "Development of the initial interactive system and conversational interface prototype.",
    details: [
      "Building the Next.js web interface and stateful dialogue engine.",
      "Integrating dynamic Socratic probing algorithms and token constraints.",
      "Internal testing of dialectical branching and user reflection loops.",
    ],
    deliverables: "Functional prototype web application & dialogue harness.",
  },
  {
    number: "04",
    title: "Validation",
    status: "Planned",
    summary:
      "Testing the interaction design, questioning mechanism, and learning experience with student cohorts.",
    details: [
      "User study measuring cognitive engagement and reflection time.",
      "Qualitative interviews comparing direct-answer AI vs. Socratic AI.",
      "Rubric evaluation on problem comprehension and schema retention.",
    ],
    deliverables: "Empirical evaluation report & usability metrics.",
  },
  {
    number: "05",
    title: "Development",
    status: "Planned",
    summary:
      "Further refinement based on testing and feedback, expanding multi-discipline domain support.",
    details: [
      "Subject-matter tuning (STEM, computer science, conceptual humanities).",
      "Adaptive questioning difficulty based on student responses.",
      "Open-source release of core Socratic prompt templates and API connectors.",
    ],
    deliverables: "Production-ready open release & academic publication draft.",
  },
];

export default function DevelopmentTimeline() {
  const [filter, setFilter] = useState<string>("all");
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  const filteredMilestones = milestones.filter((m) => {
    if (filter === "all") return true;
    return m.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="space-y-20">
      {/* Filter and Status Overview */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E6E4DC] pb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#C85A32]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#787774]">
            Project Milestones
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {["all", "completed", "in progress", "planned"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === f
                  ? "bg-[#141413] text-[#FAF9F5]"
                  : "bg-[#F4F2EB] text-[#787774] hover:text-[#141413] hover:bg-[#EAE7DE]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative space-y-12">
        {/* Subtle timeline track line */}
        <div className="hidden md:block absolute top-6 bottom-6 left-[39px] w-[1px] bg-[#E6E4DC]" />

        {filteredMilestones.map((stage) => {
          const isCompleted = stage.status === "Completed";
          const isInProgress = stage.status === "In Progress";

          return (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Timeline Indicator Column */}
              <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                <div
                  className={`w-20 h-20 rounded-2xl border flex flex-col items-center justify-center shrink-0 z-10 transition-all ${
                    isCompleted
                      ? "bg-white border-[#141413] text-[#141413]"
                      : isInProgress
                      ? "bg-[#FAF9F5] border-[#C85A32] text-[#C85A32] ring-4 ring-[#C85A32]/10"
                      : "bg-[#F4F2EB] border-[#E6E4DC] text-[#787774]"
                  }`}
                >
                  <span className="font-mono text-xs font-semibold">{stage.number}</span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-[#141413] mt-1" />
                  ) : isInProgress ? (
                    <CircleDot className="w-4 h-4 text-[#C85A32] mt-1 animate-pulse" />
                  ) : (
                    <Clock className="w-4 h-4 text-[#787774] mt-1" />
                  )}
                </div>

                <span
                  className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    isCompleted
                      ? "bg-[#EAE7DE] text-[#141413] font-medium"
                      : isInProgress
                      ? "bg-[#C85A32]/10 text-[#C85A32] font-semibold"
                      : "bg-[#F4F2EB] text-[#787774]"
                  }`}
                >
                  {stage.status}
                </span>
              </div>

              {/* Content Card */}
              <div className="md:col-span-10 bg-white border border-[#E6E4DC] rounded-2xl p-8 sm:p-10 shadow-sm hover:border-[#141413] transition-colors duration-300 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-base text-[#4D4C48] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                {/* Sub-details */}
                <div className="space-y-2 pt-4 border-t border-[#F0EEE6]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#787774]">
                    Scope of Execution
                  </span>
                  <ul className="space-y-2 text-sm text-[#66645E]">
                    {stage.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C85A32] font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable Box */}
                <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-[#787774] uppercase tracking-wider">
                    Key Deliverable
                  </span>
                  <span className="font-medium text-[#141413]">{stage.deliverables}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* GITHUB REPOSITORY SHOWCASE */}
      <div className="border-t border-[#141413] pt-16">
        <div className="bg-[#F4F2EB] border border-[#E6E4DC] rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#141413] text-[#FAF9F5] flex items-center justify-center">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141413]">
                  Project Repository
                </h3>
                <span className="text-xs font-mono text-[#787774]">
                  Open Research & Source Artifacts
                </span>
              </div>
            </div>

            <p className="text-base text-[#4D4C48] leading-relaxed">
              Explore the development and implementation of SOCR.AI. Track architectural specifications, prompt harnesses, and experimental logs.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141413] text-[#FAF9F5] rounded-full text-sm font-medium hover:bg-[#2C2B29] transition-all group cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-white border border-[#E6E4DC] rounded-xl text-xs font-mono text-[#66645E]">
                  <div className="flex items-center gap-2 text-[#141413] font-semibold">
                    <Terminal className="w-4 h-4 text-[#C85A32]" />
                    <span>Repository Access:</span>
                  </div>
                  <span>
                    Configured via <code className="bg-[#FAF9F5] px-1.5 py-0.5 border rounded">https://github.com/rifqisigma/socr-ai-model</code> (currently in private research stage).
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs font-mono text-[#787774]">
                <GitBranch className="w-3.5 h-3.5" />
                <span>main / dev-socrai-v0.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
