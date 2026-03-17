"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Gauge, Activity, Wind } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_META = {
  bgs: ["bg-[#145591]/95", "bg-[#0591be]/90", "bg-[#0a0a0a]/95"],
  texts: ["text-white", "text-white", "text-white"],
  accents: ["text-cyan-300", "text-neutral-200", "text-cyan-400"],
  icons: [Gauge, Activity, Wind],
};

export default function ProductsPerformance() {
  const container = useRef(null);
  const [activeCtx, setActiveCtx] = useState(1); // Default panel tengah aktif
  const t = useTranslations("pageProducts");
  const locale = useLocale();

  const translations = t.raw("performance.panels") || [];
  const panels = translations.map((panel, idx) => ({
    id: panel.id,
    metric: panel.metric,
    label: panel.label,
    desc: panel.desc,
    bg: DEFAULT_META.bgs[idx] || "bg-dark-77",
    text: DEFAULT_META.texts[idx] || "text-[#145591]",
    accent: DEFAULT_META.accents[idx] || "text-[#0591be]",
    icon: DEFAULT_META.icons[idx] || Gauge,
  }));

  useGSAP(
    () => {
      // ANIMASI SEDERHANA & AMAN:
      // Kita tidak menganimasikan Panel Container (.perf-panel) supaya background warna selalu MUNCUL duluan.
      // Kita hanya menganimasikan konten teks di dalamnya (.anim-entry).

      const elements = gsap.utils.toArray(".anim-entry");

      gsap.from(elements, {
        y: 30, // Geser dari bawah sedikit
        opacity: 0, // Fade in
        duration: 0.8,
        stagger: 0.1, // Muncul berurutan
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%", // Muncul saat section sudah masuk 30% ke layar
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden flex flex-col md:flex-row bg-[#021526]"
    >
      {/* Fallback Ambient Background */}
      <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-30 mix-blend-luminosity z-0" />
      <div className="absolute inset-0 bg-[#021526]/50 mix-blend-overlay z-0" />

      {panels.map((panel, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveCtx(idx)}
          className={`
            perf-panel relative flex flex-col justify-between overflow-hidden
            transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${panel.bg} ${panel.text} backdrop-blur-sm
            ${activeCtx === idx ? "flex-[3_3_0%]" : "flex-[1_1_0%]"}
            group cursor-pointer border-b md:border-b-0 md:border-r border-cyan-77/20
          `}
        >
          {/* 1. BACKGROUND TEXTURE */}
          <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 to-transparent pointer-events-none" />

          {/* 2. GIANT BACKGROUND NUMBER */}
          <span className="absolute -bottom-20 -right-20 text-[18vh] font-black leading-none opacity-20 select-none tracking-tighter mix-blend-overlay text-white drop-shadow-2xl">
            {panel.id}
          </span>

          {/* 3. TOP CONTENT */}
          <div className="p-6 md:p-10 relative z-10 anim-entry">
            {" "}
            {/* Added anim-entry */}
            <div className="flex justify-between items-start">
              <div className="bg-dark-77/10 backdrop-blur-md p-4 rounded-full">
                <panel.icon size={32} strokeWidth={1} />
              </div>
              <ArrowUpRight
                className={`transition-all duration-500 ${activeCtx === idx ? "opacity-100 rotate-45" : "opacity-30"}`}
                size={32}
              />
            </div>
            <div
              className={`mt-12 transition-all duration-500 ${activeCtx === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <span
                className={`font-mono text-sm tracking-[0.3em] uppercase block mb-2 ${panel.accent}`}
              >
                {t("performance.metricLabel")}
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                {panel.label}
              </h3>
            </div>
          </div>

          {/* 4. BOTTOM HERO CONTENT */}
          <div className="p-6 md:p-10 relative z-10 mt-auto anim-entry">
            {" "}
            {/* Added anim-entry */}
            {/* Metric Besar */}
            <h2
              className={`
                font-black tracking-tighter transition-all duration-700
                ${activeCtx === idx ? "text-[10vw] md:text-[8vw] leading-[0.9]" : "text-[8vw] md:text-[5vw] opacity-60"}
            `}
            >
              {panel.metric}
            </h2>
            {/* Deskripsi */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${activeCtx === idx ? "max-h-48 opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}
            `}
            >
              <p className="text-lg md:text-xl font-light leading-relaxed max-w-lg opacity-90 border-l-2 border-current pl-6">
                {panel.desc}
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm font-bold tracking-widest uppercase opacity-70">
                <div className="h-[2px] w-8 bg-current" />
                {t("performance.techSpecs")}
              </div>
            </div>
          </div>

          {/* Overlay Gelap */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${activeCtx === idx ? "opacity-0" : "opacity-100 hover:opacity-0"}`}
          />
        </div>
      ))}
    </section>
  );
}
