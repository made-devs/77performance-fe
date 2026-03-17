"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Scan, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductionTech() {
  const t = useTranslations("pageManufacturing");
  const [activeSlide, setActiveSlide] = useState(0);

  const translations = t.raw("productionTech.items") || [];
  const ICONS = [Zap, Scan, Cpu];
  const IMAGES = ["/home2.png", "/home3.webp", "/home4.avif"];

  const items = translations.map((tr, idx) => ({
    title: tr.title,
    subtitle: tr.subtitle,
    desc: tr.desc,
    icon: ICONS[idx] || Zap,
    img: IMAGES[idx],
  }));

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 6000);
    // Restart timer whenever activeSlide changes (e.g., from manual click)
    return () => clearInterval(timer);
  }, [items.length, activeSlide]);

  return (
    <section className="relative bg-[#021526] text-white overflow-hidden h-screen w-full group">
      {/* Header */}
      <div className="absolute top-10 left-10 z-20 md:top-20 md:left-20 mix-blend-screen pointer-events-none text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-[var(--color-cyan-77,#0591be)]/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(5,145,190,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-77,#0591be)] animate-pulse shadow-[0_0_8px_rgba(5,145,190,0.8)]" />
          <span className="text-[var(--color-cyan-77,#0591be)] font-bold text-[10px] uppercase tracking-[0.2em] m-0">
            Technology
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-black font-mulish text-white drop-shadow-md">
          Production Line
        </h3>
      </div>

      {/* Background Layers (Static Position, Crossfading only) */}
      {items.map((item, idx) => (
        <div
          key={`bg-${idx}`}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            activeSlide === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 transition-transform duration-[10s] ease-linear"
            style={{
              backgroundImage: `url(${item.img})`,
              transform: activeSlide === idx ? "scale(1)" : "scale(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-[#0a0a0a]/90" />
        </div>
      ))}

      {/* Glowing Accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-cyan-77,#0591be)]/20 rounded-full blur-[120px]" />
      </div>

      {/* Slider Container (Cards Only) */}
      <div
        className="relative z-10 flex h-full w-full transition-transform duration-1000 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full min-w-full flex-shrink-0 h-full relative flex items-center justify-center p-6"
          >
            {/* Content Box */}
            <div
              className={`relative p-8 md:p-16 max-w-3xl w-full bg-[#021526]/40 backdrop-blur-md border border-[var(--color-cyan-77,#0591be)]/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-1000 delay-300 ${
                activeSlide === idx
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-[var(--color-navy-77,#145591)]/40 border border-[var(--color-cyan-77,#0591be)]/30 shadow-[0_0_20px_rgba(5,145,190,0.2)] rounded-2xl w-fit">
                <item.icon
                  className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-cyan-77,#0591be)] drop-shadow-[0_0_10px_rgba(5,145,190,0.5)]"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="text-lg md:text-xl text-[var(--color-cyan-77,#0591be)] font-mulish font-bold mb-3 tracking-wider uppercase">
                {item.subtitle}
              </h4>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-mulish mb-4 md:mb-6 text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-base md:text-xl text-slate-300 font-light font-mulish leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-[#021526]/50 border border-[var(--color-cyan-77,#0591be)]/30 text-[var(--color-cyan-77,#0591be)] hover:bg-[var(--color-cyan-77,#0591be)] hover:text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-[#021526]/50 border border-[var(--color-cyan-77,#0591be)]/30 text-[var(--color-cyan-77,#0591be)] hover:bg-[var(--color-cyan-77,#0591be)] hover:text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-4 bg-[#021526]/50 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/5">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all duration-500 rounded-full h-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
              activeSlide === idx
                ? "w-8 md:w-10 bg-[var(--color-cyan-77,#0591be)]"
                : "w-2 md:w-3 bg-slate-500/50 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
