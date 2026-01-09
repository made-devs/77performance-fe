"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COMBINATIONS = [
  "Global Manufacturing Foundation",
  "Premium Grade A Products",
  "Functional Product Promotion",
  "Sustainable Automotive Ecosystem",
];

const SECURITY_POINTS = [
  { label: "Wilayah (Territory)", icon: "map" },
  { label: "Demand Pasar", icon: "chart" },
  { label: "Margin Profit", icon: "wallet" },
  { label: "Posisi Jangka Panjang", icon: "anchor" },
];

const LimitedDistributorOpportunity = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Pastikan ScrollTrigger refresh agar posisi akurat
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Pemicu lebih awal agar animasi segera mulai
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment jika ingin debugging visual
        },
      });

      // 1. Alert Sticker Pop
      tl.fromTo(
        ".alert-badge",
        { scale: 0, opacity: 0, rotation: -20 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // 2. Title Typography Reveal
      tl.fromTo(
        ".limit-title span",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // 3. Map/Background Pulse
      tl.fromTo(
        ".bg-map-pattern",
        { opacity: 0, scale: 1.1 },
        { opacity: 0.15, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      );

      // 4. Content Columns Reveal
      // Left Side (Foundation Pillars)
      tl.fromTo(
        ".combo-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Right Side (Security Cards)
      tl.fromTo(
        ".secure-card",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // 5. Final Quote Fade Up
      tl.fromTo(
        ".final-statement",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0c1220] to-slate-950 z-0" />

      {/* Abstract Map Dots Pattern */}
      <div
        className="bg-map-pattern absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Cyan Glow Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-700/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 relative">
          {/* Floating Alert Badge */}
          <div className="alert-badge opacity-0 absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400 z-20">
            Urgent Notice
          </div>

          <h2 className="limit-title text-5xl md:text-6xl lg:text-7xl font-black font-mulish tracking-tighter leading-none mb-4">
            <span className="block opacity-0 text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400">
              LIMITED
            </span>
            <span className="block opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient">
              OPPORTUNITY
            </span>
          </h2>

          <div className="inline-block mt-4 px-6 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
            <p className="text-cyan-300 font-bold text-lg md:text-xl uppercase tracking-widest">
              Satu Kota • Satu Distributor
            </p>
          </div>
        </div>

        {/* --- SPLIT CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* LEFT: THE COMBINATION (Foundation) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-mulish">
              <span className="text-slate-400">77 Performance Adalah </span>
              <br />
              <span className="text-white text-3xl">
                Kombinasi Sempurna Dari:
              </span>
            </h3>

            <div className="space-y-4">
              {COMBINATIONS.map((text, i) => (
                <div
                  key={i}
                  className="combo-item opacity-0 group flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-slate-200 group-hover:text-white tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE SECURITY (Benefit) */}
          <div className="relative">
            {/* Background Box Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rotate-3 rounded-3xl blur-sm -z-10" />

            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-lg text-cyan-400 font-bold uppercase tracking-widest mb-6 border-b border-cyan-900/50 pb-4">
                Partner Awal Mengamankan:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SECURITY_POINTS.map((item, i) => (
                  <div
                    key={i}
                    className="secure-card opacity-0 group relative p-5 bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full group-hover:bg-cyan-500/20 transition-colors" />

                    <div className="mb-3 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 origin-left transition-transform duration-300">
                      {getIcon(item.icon)}
                    </div>
                    <p className="font-bold text-white group-hover:text-cyan-100 relative z-10">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-slate-400 italic">
                  *Kesempatan ditutup setelah slot kota terisi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FINAL STATEMENT --- */}
        <div className="final-statement opacity-0 max-w-4xl mx-auto text-center px-6 py-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden group">
          {/* Animated Gradient Line Top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-left md:w-1/2">
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Jika Ingin Sekadar Jualan, <br />
                <span className="text-slate-400">
                  Banyak Pilihan di Luar Sana.
                </span>
              </p>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-[1px] h-16 bg-slate-700" />

            <div className="text-left md:w-1/2">
              <p className="text-white font-bold text-xl md:text-2xl leading-snug">
                Jika Ingin Membangun <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Bisnis Otomotif Jangka Panjang,
                </span>
                <br />
                Inilah Platformnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ICON HELPER ---
function getIcon(name) {
  const className = "w-8 h-8";
  switch (name) {
    case "map":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    case "wallet":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "anchor":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default LimitedDistributorOpportunity;
