"use client";

import React, { useState, useEffect } from "react";
import {
  Repeat,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Target,
} from "lucide-react";
import { useTranslations } from "next-intl";

const baseStrategies = [
  {
    id: "01",
    icon: Repeat,
    tag: "STABILITY",
  },
  {
    id: "02",
    icon: TrendingUp,
    tag: "BENEFIT",
  },
  {
    id: "03",
    icon: ShieldCheck,
    tag: "CONTROL",
  },
];

export default function CommunityStrategy() {
  const t = useTranslations("pageCommunity");
  const [activeSlide, setActiveSlide] = useState(0);

  const translatedItems = t.raw("strategy.items") || [];
  const strategies = baseStrategies.map((b, i) => ({
    ...b,
    title: translatedItems[i]?.title ?? "",
    desc: translatedItems[i]?.desc ?? "",
    tag: translatedItems[i]?.tag ?? b.tag,
  }));

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % strategies.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + strategies.length) % strategies.length,
    );
  };

  const goToSlide = (index) => {
    if (index !== activeSlide) setActiveSlide(index);
  };

  // Auto-slide effect that cleanly resets when user interacts (activeSlide changes)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % strategies.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeSlide, strategies.length]);

  // Transform Logic for Coverflow layout
  const getCardStyles = (index) => {
    const diff = index - activeSlide;
    let offset = diff;

    // Handle infinite visual looping logic for 3 items
    if (diff === -2) offset = 1;
    if (diff === 2) offset = -1;

    if (offset === 0) {
      // Active Centered Card
      return "translate-x-0 scale-100 opacity-100 z-40 shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-cyan-400/40 bg-gradient-to-br from-[#0c2340] to-[#07172b]";
    }
    if (offset === -1) {
      // Left Card (Pushed super to the left on mobile, partially showing on desktop)
      return "-translate-x-[110%] md:-translate-x-[65%] lg:-translate-x-[85%] scale-[0.9] md:scale-[0.85] opacity-0 md:opacity-50 z-10 md:blur-[2px] cursor-pointer hover:opacity-80 border-[#1e3c66] bg-[#0c1828]";
    }
    if (offset === 1) {
      // Right Card (Pushed super to the right on mobile, partially showing on desktop)
      return "translate-x-[110%] md:translate-x-[65%] lg:translate-x-[85%] scale-[0.9] md:scale-[0.85] opacity-0 md:opacity-50 z-10 md:blur-[2px] cursor-pointer hover:opacity-80 border-[#1e3c66] bg-[#0c1828]";
    }

    return "opacity-0 z-0 pointer-events-none";
  };

  return (
    <section className="relative overflow-hidden w-full min-h-[100svh] flex flex-col justify-center py-24 bg-[#050f1a]">
      {/* Abstract Background Details */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#145591]/50 to-transparent opacity-50" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#145591]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-20 text-center mb-12 md:mb-20 px-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-mono tracking-[0.2em] font-semibold uppercase mb-6 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <Target size={16} />
          <span>
            {t("strategy.bottomLeft") || "STRATEGIC"} •{" "}
            {t("strategy.bottomMiddle") || "FRAMEWORK"}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight">
          Core{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#145591]">
            Pillars
          </span>
        </h2>
      </div>

      {/* 3D Coverflow Track */}
      <div className="relative z-10 w-full h-[520px] md:h-[580px] lg:h-[620px] flex items-center justify-center perspective-[1000px]">
        {strategies.map((item, i) => (
          <div
            key={item.id}
            onClick={() => goToSlide(i)}
            className={`
              absolute w-[90%] sm:w-[85%] max-w-[420px] md:max-w-[480px] h-full p-8 md:p-12 rounded-[2rem] 
              border flex flex-col transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group
              ${getCardStyles(i)}
            `}
          >
            {/* Card Graphic Top */}
            <div className="flex justify-between items-start mb-8 md:mb-12 w-full relative z-10">
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] border flex items-center justify-center transition-colors duration-500
                ${activeSlide === i ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-400" : "bg-white/5 border-white/10 text-white/40"}
              `}
              >
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <span
                className={`text-[5rem] md:text-[6rem] font-black select-none leading-none absolute -top-4 -right-2 md:right-0 transition-opacity duration-500
                 ${activeSlide === i ? "text-white/5" : "text-white/[0.02]"}`}
              >
                {item.id}
              </span>
            </div>

            {/* Typography */}
            <div className="relative z-10 flex-grow flex flex-col justify-center">
              <h3
                className={`text-sm tracking-[0.4em] uppercase font-semibold mb-4 transition-colors duration-500
                ${activeSlide === i ? "text-cyan-400" : "text-slate-500"}
              `}
              >
                {item.tag}
              </h3>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05] mb-6">
                {item.title}
              </h2>
              <p className="text-blue-100/70 text-base md:text-lg leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

            {/* Bottom Interaction indicator */}
            <div
              className={`relative z-10 pt-6 md:pt-8 mt-6 border-t flex items-center justify-between transition-colors duration-500
               ${activeSlide === i ? "border-cyan-400/20" : "border-white/5"}
            `}
            >
              <span
                className={`text-[10px] md:text-xs uppercase tracking-widest font-semibold transition-colors duration-500
                 ${activeSlide === i ? "text-cyan-400" : "text-slate-600"}
              `}
              >
                Initiate Protocol
              </span>
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500
                 ${activeSlide === i ? "bg-cyan-400/20 text-cyan-300" : "bg-white/5 text-white/30"}
              `}
              >
                <ArrowRight
                  size={20}
                  className={
                    activeSlide === i
                      ? "group-hover:translate-x-1 transition-transform"
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Deck */}
      <div className="relative z-20 flex items-center justify-center gap-6 mt-12 md:mt-20 px-6">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#050f1a] hover:border-cyan-500 transition-all duration-300 focus:scale-95"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-3 md:gap-4 items-center backdrop-blur-md bg-white/5 px-6 md:px-8 py-3.5 rounded-full border border-white/10">
          {strategies.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-[600ms] ease-out 
                ${activeSlide === i ? "w-10 md:w-12 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#050f1a] hover:border-cyan-500 transition-all duration-300 focus:scale-95"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
