"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function HeroOpening({
  uptitle = "",
  titleLines = [],
  description = null,
  bgImageUrl = "",
  height = "110vh",
}) {
  const containerRef = useRef(null);

  // 1. Parallax & Physics Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // "Spring Physics" untuk menghaluskan nilai scroll mentah.
  // Ini membuat background tidak berhenti mendadak saat scroll berhenti, tapi 'meluncur' halus.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30, // Damping tinggi agar terasa berat/premium
    restDelta: 0.001,
  });

  // Transformasi Background:
  // y: Bergerak turun 30% dari posisinya (menciptakan ilusi jarak).
  // scale: Zoom in perlahan dari 1.1 ke 1.15 untuk kesan cinematic terus menerus.
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const scaleBg = useTransform(smoothProgress, [0, 1], [1.1, 1.15]);

  // 2. Text Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // Custom seamless ease
      },
    },
  };

  const simpleFadeVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full flex items-center overflow-hidden bg-[#0a0a0a]"
      style={{ height }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden h-full w-full">
        <motion.div
          style={{
            backgroundImage: bgImageUrl ? `url('${bgImageUrl}')` : undefined,
            y: yBg,
            scale: scaleBg,
          }}
          // h-[120%] dan top-[-10%] memastikan tidak ada celah putih saat parallax bergerak
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full bg-cover bg-center opacity-80 will-change-transform"
        />
        {/* Gradient Overlay untuk keterbacaan teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content Layer */}
      <motion.div
        className="relative z-20 container mx-auto px-6 md:px-12 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl">
          {uptitle && (
            <motion.div
              variants={simpleFadeVariants}
              className="overflow-hidden"
            >
              <p className="text-[var(--color-cyan-77)] font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base border-l-4 border-[var(--color-cyan-77)] pl-4">
                {uptitle}
              </p>
            </motion.div>
          )}

          {/* Title Lines */}
          {titleLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden py-2">
              <motion.h1
                variants={textRevealVariants}
                className={`hero-title-line text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase ${
                  idx % 2 === 1
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-cyan-77)]"
                    : "text-white"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          {/* Description */}
          {description && (
            <motion.div
              variants={simpleFadeVariants}
              className="mt-10 md:mt-16 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="h-[2px] w-24 bg-[var(--color-cyan-77)] mt-4 hidden md:block origin-left" />
              <div className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                {description}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
