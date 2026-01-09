"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COMPARISONS = [
  {
    id: 1,
    label: "Fokus Utama",
    others: "Hanya Menjual Produk",
    us: "Membangun Sistem, Demand, & Keberlanjutan",
  },
  {
    id: 2,
    label: "Strategi Harga",
    others: "Perang Harga Tanpa Nilai",
    us: "Fokus pada Value & Pertumbuhan Bisnis",
  },
  {
    id: 3,
    label: "Support Sistem",
    others: "Lepas Tangan Setelah Jual",
    us: "Pendampingan, Training, & Marketing Digital",
  },
];

const RealDifference = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Title Entrance
      tl.from(".rd-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Comparison Rows (Staggered)
      tl.from(
        ".comparison-row",
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // 3. Highlight The "Better" Side independently
      tl.from(
        ".us-side",
        {
          scale: 0.95,
          backgroundColor: "transparent",
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // 4. Final Tagline Boom
      tl.from(".final-slogan", {
        scale: 1.2,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* --- BACKGROUND BASE (Deep Linear Gradient) --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-950 z-0" />

      {/* --- SUBTLE ATMOSPHERE OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-blue-900/10 z-0 pointer-events-none" />

      {/* --- BACKGROUND ACCENTS (Glowing Orbs) --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="rd-title inline-block">
            <h2 className="text-4xl lg:text-5xl font-black font-mulish tracking-tight mb-4">
              THE REAL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                DIFFERENCE
              </span>
            </h2>
            <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
          </div>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="max-w-5xl mx-auto mb-20 space-y-4">
          {/* Table Header (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest px-6 pb-2 border-b border-slate-800">
            <div className="col-span-2">Aspek</div>
            <div className="col-span-5 text-center">Brand Lain</div>
            <div className="col-span-5 text-center text-cyan-400">
              77 Performance
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((item) => (
            <div
              key={item.id}
              className="comparison-row relative grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4 bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-colors group"
            >
              {/* Label (Mobile: Top, Desktop: Left) */}
              <div className="col-span-12 md:col-span-2 p-4 md:p-6 flex items-center justify-center md:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
                  {item.label}
                </span>
              </div>

              {/* Others Side (Negative/Neutral) */}
              <div className="col-span-12 md:col-span-5 p-4 md:p-6 flex items-center justify-center text-center bg-slate-900/30 text-slate-400 font-mulish">
                {item.others}
              </div>

              {/* VS Badge (Absolute Center) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-8 h-8 bg-slate-800 border border-slate-600 rounded-full items-center justify-center text-[10px] font-bold text-slate-500 z-10">
                VS
              </div>

              {/* Us Side (Positive/Highlight) */}
              <div className="us-side col-span-12 md:col-span-5 p-4 md:p-6 flex items-center justify-center text-center bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 text-white font-bold font-mulish border-l-0 md:border-l border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">{item.us}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- BIG TAGLINE CLOSING --- */}
        <div className="final-slogan relative max-w-4xl mx-auto text-center py-10 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-white/5">
          {/* Decorative Quotes */}
          <div className="absolute top-4 left-8 text-6xl text-slate-700 font-serif opacity-50">
            “
          </div>
          <div className="absolute bottom-4 right-8 text-6xl text-slate-700 font-serif opacity-50 rotate-180">
            “
          </div>

          <div className="relative z-10 px-6">
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-2">
              Others Sell Parts.
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-mulish leading-tight">
              77 Performance Builds Business.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealDifference;
