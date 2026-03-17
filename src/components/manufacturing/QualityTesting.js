"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function QualityTesting() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");

  useGSAP(
    () => {
      gsap.from(".qc-overlay", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      gsap.from(".qc-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-dvh w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/about.webp')] bg-cover bg-center mix-blend-luminosity opacity-70" />
      </div>

      {/* Cyber/Aquatic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021526]/90 via-[#0e6ba0]/30 to-[#021526]/95 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Animated Curtain Effect */}
      <div className="qc-overlay absolute inset-0 bg-[#021526] origin-bottom z-10 mix-blend-overlay opacity-60" />

      <div className="qc-content relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
        {/* Play Action (Glowing) */}
        <div className="relative group cursor-pointer mb-10">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative flex items-center justify-center w-24 h-24 bg-[#021526]/60 backdrop-blur-md border border-cyan-400/50 rounded-full group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <PlayCircle
              className="w-10 h-10 text-cyan-400 group-hover:text-[#021526] ml-1 transition-colors"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-cyan-77/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <h2 className="text-cyan-300 font-bold text-[10px] uppercase tracking-[0.2em] m-0">
            {t("qualityTesting.uptitle")}
          </h2>
        </div>

        {/* Titles */}
        <h3 className="text-5xl md:text-7xl font-black font-mulish text-white mb-8 leading-tight drop-shadow-2xl">
          {t("qualityTesting.heading")}
        </h3>
        <p className="text-slate-300 text-lg md:text-xl font-light font-mulish leading-relaxed mb-16 max-w-3xl">
          {t("qualityTesting.paragraph")}
        </p>

        {/* Data Grid with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-left">
          {t.raw("qualityTesting.grid").map((g, i) => (
            <div
              key={i}
              className={`p-8 bg-[#021526]/40 backdrop-blur-md border border-cyan-77/20 rounded-3xl group hover:bg-[#021526]/70 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}
            >
              <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-5" />
              <h4 className="text-cyan-400 font-black font-mulish text-2xl mb-2 group-hover:text-cyan-300 transition-colors drop-shadow-md">
                {g.title}
              </h4>
              <p className="text-sm text-slate-300 font-light font-mulish leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
