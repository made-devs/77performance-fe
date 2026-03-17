"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Timer,
  PenTool,
  BarChart3,
  Crosshair,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [ShieldCheck, Timer, PenTool, BarChart3];

export default function ProductsReliability() {
  const container = useRef(null);
  const t = useTranslations("pageProducts");
  const locale = useLocale();
  const features = (t.raw("reliability.features") || []).map((f, idx) => ({
    ...f,
    icon: ICONS[idx] || ShieldCheck,
  }));

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".grid-item");
      if (!items.length || !container.current) return;

      // Create ScrollTriggers that reveal each item on enter (safer for client-side nav)
      const triggers = [];

      const reveal = (el) => {
        const border = el.querySelector(".inner-border");
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          },
        );
        if (border) {
          gsap.fromTo(
            border,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "expo.out", overwrite: "auto" },
          );
        }
      };

      items.forEach((item) => {
        const trig = ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          onEnter: () => reveal(item),
          onEnterBack: () => reveal(item),
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        });
        triggers.push(trig);
      });

      const refresh = () => ScrollTrigger.refresh();
      const rafId = requestAnimationFrame(refresh);
      window.addEventListener("load", refresh);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("load", refresh);
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-[#021526] text-white flex flex-col"
    >
      {/* HEADER SECTION - Flexible Height with Background Image */}
      <div className="flex-1 py-12 md:py-32 px-6 md:px-12 border-b border-cyan-77/30 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 relative z-10 overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/home4.avif')",
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#145591]/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-[#0a0a0a]/30 backdrop-blur-[2px] z-0" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 animate-pulse">
            <Crosshair size={20} className="text-cyan-400" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-300">
              {t("reliability.uptitle")}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black font-mulish tracking-tighter leading-[0.9] drop-shadow-lg text-white">
            {t("reliability.heading")}
          </h2>
        </div>
        <p className="md:max-w-md text-lg text-slate-200 font-light font-mulish leading-relaxed border-l-4 border-cyan-400 pl-6 drop-shadow-md relative z-10">
          {t("reliability.paragraph")}
        </p>
      </div>

      {/* THE GRID SYSTEM - No Whitespace Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="grid-item group relative min-h-[400px] border-b md:border-b-0 border-r border-cyan-77/20 p-8 flex flex-col justify-between hover:bg-[#021526]/80 bg-[#0a0a0a]/30 backdrop-blur-sm transition-all duration-500 overflow-hidden"
          >
            {/* Animated Top Border for effect */}
            <div className="inner-border absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-[#145591] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Top Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-[#111111]/80 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs opacity-60 text-white font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-xs font-bold tracking-widest text-cyan-300 mb-2 uppercase">
                {feature.subtitle}
              </h4>
              <h3 className="text-3xl font-black tracking-tighter mb-4 text-white group-hover:text-cyan-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>

            {/* Bottom Stat (Big Number) */}
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <span className="block text-4xl font-black text-cyan-400 tracking-tighter drop-shadow-md">
                {feature.stat}
              </span>
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                {feature.statLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Bar */}
      <div className="w-full h-4 bg-[pattern-dots] bg-[#145591] opacity-20" />
    </section>
  );
}
