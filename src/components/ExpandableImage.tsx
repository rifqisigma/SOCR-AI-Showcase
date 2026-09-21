"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpandableImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 45%"],
  });

  // Map scroll progress to image width percentage, max width, and border radius
  const widthPercentage = useTransform(scrollYProgress, [0, 1], ["80vw", "100vw"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-12 md:py-16 flex flex-col items-center justify-center overflow-x-clip"
    >
      {/* Scroll-linked Animated Container */}
      <motion.div
        style={{
          width: widthPercentage,
          borderRadius: borderRadius,
          scale: scale,
        }}
        className="relative mx-auto overflow-hidden shadow-2xl transition-shadow duration-500 bg-[#E6E4DC]"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[21/10] max-h-[78vh]">
          <Image
            src="/images/dummy.jpg"
            alt="SOCRATIVE: Inquiry-Driven Cognitive Systems Visual Representation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          {/* Subtle editorial overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          {/* Editorial Caption Tag */}
          <div className="absolute bottom-4 left-6 md:bottom-8 md:left-10 z-10 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              Figure 1.0 — Inquiry Architecture & Neural Scaffolding
            </span>
          </div>
        </div>
      </motion.div>

      {/* Sub-caption */}
      <div className="w-full max-w-4xl mx-auto px-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#787774]">
        <span>[Scroll Interaction: Viewport Expansion]</span>
        <span className="text-right">SOCRATIVE Cognitive Framework Prototype v0.1</span>
      </div>
    </div>
  );
}
