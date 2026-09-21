"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  AlertTriangle,
  Brain,
  Lightbulb,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  UserCheck,
} from "lucide-react";

interface Step {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  socraticPrompt: string;
  cognitiveBenefit: string;
}

const socraticStages: Step[] = [
  {
    id: "question",
    number: "01",
    title: "Question",
    tagline: "Formulating precise inquiry",
    icon: HelpCircle,
    description:
      "Rather than prompting for immediate answers, the learner articulates their initial understanding, assumptions, and core dilemma.",
    socraticPrompt: '"What specific concept or assumption are we attempting to investigate?"',
    cognitiveBenefit: "Activates prior knowledge and anchors mental focus.",
  },
  {
    id: "examine",
    number: "02",
    title: "Examine",
    tagline: "Probing underlying assumptions",
    icon: Search,
    description:
      "The system prompts the student to break down their premise: What evidence supports this? What rules or boundaries apply?",
    socraticPrompt: '"Why do you assume this premise holds true? What underlying rules govern it?"',
    cognitiveBenefit: "Prevents passive acceptance of unverified beliefs.",
  },
  {
    id: "challenge",
    number: "03",
    title: "Challenge",
    tagline: "Testing counter-arguments & edge cases",
    icon: AlertTriangle,
    description:
      "Introducing gentle counter-examples and boundary conditions that require the learner to reconcile conflicting insights.",
    socraticPrompt: '"If condition X changes, does your conclusion still hold? What is the counter-example?"',
    cognitiveBenefit: "Fosters analytical rigor and intellectual resilience.",
  },
  {
    id: "reflect",
    number: "04",
    title: "Reflect",
    tagline: "Synthesizing internal rationale",
    icon: Brain,
    description:
      "The student evaluates the reasoning chain, identifies flaws, and synthesizes a revised mental model before asking AI for validation.",
    socraticPrompt: '"Based on the counter-evidence, how would you refine your initial hypothesis?"',
    cognitiveBenefit: "Reinforces long-term episodic memory and metacognition.",
  },
  {
    id: "understand",
    number: "05",
    title: "Understand",
    tagline: "Internalized comprehension",
    icon: Lightbulb,
    description:
      "Deep, conceptual mastery achieved because the cognitive work was conducted by the learner, supported—not bypassed—by AI.",
    socraticPrompt: '"You arrived at the solution by reasoning through the constraints yourself."',
    cognitiveBenefit: "Achieves true conceptual transfer and retention.",
  },
];

interface FlowNode {
  step: string;
  label: string;
  role: string;
  actor: "human" | "system" | "hybrid";
  detail: string;
}

const architectureNodes: FlowNode[] = [
  {
    step: "01",
    label: "Learner / User",
    role: "Inquiry Originator",
    actor: "human",
    detail: "Student brings curiosity, assignment dilemma, or problem formulation.",
  },
  {
    step: "02",
    label: "Question / Problem",
    role: "Context Definition",
    actor: "human",
    detail: "Articulates problem scope without seeking instant auto-completion.",
  },
  {
    step: "03",
    label: "Socratic Questioning",
    role: "Cognitive Scaffolding",
    actor: "system",
    detail: "Intervention layer dynamically generates counter-questions and probes assumptions.",
  },
  {
    step: "04",
    label: "Reasoning & Reflection",
    role: "Active Cognitive Work",
    actor: "human",
    detail: "Learner actively evaluates arguments, calculates logic, and tests boundaries.",
  },
  {
    step: "05",
    label: "LLM Assistance",
    role: "Epistemic Partner",
    actor: "hybrid",
    detail: "AI provides feedback, nuanced perspectives, and corroborating context.",
  },
  {
    step: "06",
    label: "Understanding",
    role: "Internalized Knowledge",
    actor: "human",
    detail: "Deep retention and transferrable problem-solving ability.",
  },
];

export default function SocraticFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeDiagramNode, setActiveDiagramNode] = useState(2); // default on Socratic Questioning

  return (
    <div className="space-y-24">
      {/* SECTION 2: Interactive Socratic Method Flow */}
      <div className="space-y-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest mb-3">
            <span>Methodology</span>
            <span>•</span>
            <span>5-Stage Dialectic Loop</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight mb-4">
            The Socratic Method as an Epistemic Scaffold
          </h2>
          <p className="text-base sm:text-lg text-[#66645E] leading-relaxed">
            Rather than delivering unilateral answers, Socratic Questioning deconstructs problems into a dynamic dialectic. Click through each stage of the cognitive progression below:
          </p>
        </div>

        {/* Step Selector Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#E6E4DC] pb-4">
          {socraticStages.map((stage, idx) => {
            const isCurrent = activeStage === idx;
            const Icon = stage.icon;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                  isCurrent
                    ? "bg-[#FAF9F5] border border-[#141413] shadow-sm"
                    : "bg-transparent border border-transparent hover:bg-[#F4F2EB] text-[#787774]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold">{stage.number}</span>
                  <Icon
                    className={`w-4 h-4 ${
                      isCurrent ? "text-[#C85A32]" : "text-[#787774]"
                    }`}
                  />
                </div>
                <p
                  className={`font-serif text-base sm:text-lg font-medium tracking-tight ${
                    isCurrent ? "text-[#141413]" : "text-[#66645E]"
                  }`}
                >
                  {stage.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#E6E4DC] rounded-2xl p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F4F2EB] text-[#141413] font-medium border border-[#E6E4DC]">
                    Stage {socraticStages[activeStage].number} of 05
                  </span>
                  <span className="text-sm font-mono text-[#787774]">
                    {socraticStages[activeStage].tagline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] tracking-tight">
                  {socraticStages[activeStage].title}
                </h3>

                <p className="text-base text-[#4D4C48] leading-relaxed">
                  {socraticStages[activeStage].description}
                </p>

                <div className="pt-4 border-t border-[#F0EEE6] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#787774]">
                    Cognitive Impact
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-[#141413] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                    <span>{socraticStages[activeStage].cognitiveBenefit}</span>
                  </div>
                </div>
              </div>

              {/* Socratic Dialogue Box */}
              <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#E6E4DC] rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                    <span className="text-xs font-mono uppercase text-[#787774]">
                      System Prompt Dynamic
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                </div>
                <blockquote className="font-serif text-lg italic text-[#141413] leading-snug border-l-2 border-[#C85A32] pl-4 my-3">
                  {socraticStages[activeStage].socraticPrompt}
                </blockquote>
                <p className="text-xs text-[#787774] font-mono leading-relaxed">
                  SOCRATIVE interjects at this inflection point to ensure students articulate intermediate reasoning before the answer surfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SECTION 3: Conceptual Diagram & Relationship */}
      <div className="space-y-12 pt-12 border-t border-[#E6E4DC]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest">
            <span>System Architecture</span>
            <span>•</span>
            <span>Conceptual Equation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] tracking-tight">
            Socratic Questioning + LLM = SOCRATIVE
          </h2>
          <p className="text-base sm:text-lg text-[#66645E] leading-relaxed">
            The fundamental premise of SOCRATIVE is not to eliminate AI from learning, but to reorder the cognitive sequence: <strong className="text-[#141413]">AI should stimulate reasoning before delivering conclusions.</strong>
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="bg-[#FAF9F5] border border-[#E6E4DC] rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E6E4DC] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#787774]">
              Cognitive Interaction Pipeline
            </span>
            <span className="text-xs font-mono text-[#C85A32]">
              Select a node to inspect cognitive responsibility
            </span>
          </div>

          {/* Node Progression Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {architectureNodes.map((node, i) => {
              const isSelected = activeDiagramNode === i;
              return (
                <button
                  key={node.step}
                  onClick={() => setActiveDiagramNode(i)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 relative border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                    isSelected
                      ? "bg-white border-[#141413] shadow-md ring-1 ring-[#141413]"
                      : "bg-[#F4F2EB] border-[#E6E4DC] hover:border-[#787774] text-[#4D4C48]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#787774]">
                      {node.step}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        node.actor === "human"
                          ? "bg-[#E6E4DC] text-[#141413]"
                          : node.actor === "system"
                          ? "bg-[#C85A32]/10 text-[#C85A32] font-semibold"
                          : "bg-[#141413] text-white"
                      }`}
                    >
                      {node.actor}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#141413] leading-snug">
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-[#66645E] mt-1 line-clamp-1 font-mono">
                    {node.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Diagram Details */}
          <motion.div
            key={activeDiagramNode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-[#E6E4DC] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#C85A32] font-semibold">
                  Node {architectureNodes[activeDiagramNode].step}
                </span>
                <span className="text-xs text-[#787774]">•</span>
                <span className="text-xs font-mono uppercase text-[#787774]">
                  {architectureNodes[activeDiagramNode].role}
                </span>
              </div>
              <h4 className="font-serif text-xl text-[#141413] font-medium">
                {architectureNodes[activeDiagramNode].label}
              </h4>
              <p className="text-sm text-[#4D4C48] max-w-2xl">
                {architectureNodes[activeDiagramNode].detail}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 bg-[#FAF9F5] border border-[#E6E4DC] px-4 py-2.5 rounded-lg text-xs font-mono text-[#141413]">
              {architectureNodes[activeDiagramNode].actor === "human" ? (
                <UserCheck className="w-4 h-4 text-[#141413]" />
              ) : (
                <Cpu className="w-4 h-4 text-[#C85A32]" />
              )}
              <span>
                Locus: {architectureNodes[activeDiagramNode].actor.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
