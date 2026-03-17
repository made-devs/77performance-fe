"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, TrendingUp, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const container = useRef(null);
  const t = useTranslations("pageAbout.philosophy");
  const items = t.raw("items") || [];

  const iconMap = {
    Activity,
    ShieldCheck,
    Handshake,
    TrendingUp,
  };

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".phil-header", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Cards Flip In Effect
      gsap.fromTo(
        ".phil-card",
        {
          rotateX: 45, // Kurangi kemiringan biar lebih smooth
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          rotateX: 0,
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".grid-container",
            start: "top 75%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-[#145591] overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a1929]/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#145591]/80 via-[#0a1929]/95 to-[#0a1929] z-10" />
        <img
          src="/about.webp"
          alt="About Background"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      {/* Background Aesthetic Layers */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-400/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-20">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 phil-header gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-8 font-semibold backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {t("label")}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-blue-100/70 max-w-md lg:text-right text-lg font-light leading-relaxed">
            {t("desc")}
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-[1500px]">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Activity;

            return (
              <div
                key={idx}
                className="phil-card group bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)] transition-all duration-500 will-change-transform flex flex-col h-full"
              >
                <div className="mb-auto">
                  <div className="w-14 h-14 bg-[#0a1929] border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-[#0a1929] text-cyan-400 group-hover:scale-110 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[15px] text-blue-100/60 leading-relaxed font-light mt-4 group-hover:text-blue-100/90 transition-colors">
                  {item.desc}
                </p>

                {/* Decorative Number */}
                <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
