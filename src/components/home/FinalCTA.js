"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      // Pastikan trigger fresh
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Background Aurora Expansion
      tl.fromTo(
        ".aurora-glow",
        { opacity: 0, scale: 0.8, filter: "blur(50px)" },
        {
          opacity: 0.6,
          scale: 1,
          filter: "blur(100px)",
          duration: 2,
          ease: "power2.out",
        }
      );

      // 2. Main Card Reveal (Glass Effect)
      tl.fromTo(
        ".cta-content",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=1.5"
      );

      // 3. Text Stagger
      tl.fromTo(
        ".cta-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );

      // 4. Button Dramatic Entrance
      tl.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
        "-=0.2"
      );

      // Continuous Button Pulse (Looping)
      gsap.to(".btn-glow-ring", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-slate-950 overflow-hidden flex items-center justify-center min-h-[600px]"
    >
      {/* --- DYNAMIC BACKGROUND --- */}
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />

      {/* Aurora Glow Effects */}
      <div className="aurora-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 rounded-full opacity-0 blur-[100px] z-0 pointer-events-none mix-blend-screen" />

      {/* Moving Particles (Simulated with simple divs for performance) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-80 animate-ping"
          style={{ animationDuration: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* --- GLASS CARD --- */}
        <div className="cta-content max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden group">
          {/* Shimmer Effect on Card Hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-0 pointer-events-none" />

          <div className="relative z-10">
            {/* Pre-title */}
            <div className="cta-text mb-6 flex justify-center">
              <span className="px-4 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                Ready To Scale Up?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="cta-text text-4xl md:text-6xl font-black text-white font-mulish mb-6 leading-tight">
              Jangan Biarkan Wilayah Anda <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300">
                Diambil Kompetitor.
              </span>
            </h2>

            {/* Description */}
            <p className="cta-text text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-mulish leading-relaxed">
              Sistem sudah siap. Produk Grade A sudah siap.{" "}
              <br className="hidden md:block" />
              Sekarang giliran Anda mengambil keputusan untuk memimpin pasar.
            </p>

            {/* --- THE BUTTON --- */}
            <div
              ref={buttonRef}
              className="opacity-0 relative inline-block group/btn"
            >
              {/* Glowing Ring Animation */}
              <div className="btn-glow-ring absolute inset-0 rounded-full bg-cyan-500 opacity-50 z-0" />
              <div
                className="btn-glow-ring absolute inset-0 rounded-full bg-cyan-400 opacity-30 z-0"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Button Body */}
              <button className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-lg md:text-xl px-12 py-5 rounded-full shadow-[0_10px_40px_rgba(6,182,212,0.4)] hover:shadow-[0_10px_60px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                <span className="relative">HUBUNGI PRINCIPAL SEKARANG</span>
                <svg
                  className="w-6 h-6 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            {/* Sub-link */}
            <div className="cta-text mt-8">
              <p className="text-slate-500 text-sm">
                Terbatas hanya untuk distributor yang serius. <br />
                <a
                  href="#"
                  className="text-cyan-500 hover:text-cyan-300 transition-colors border-b border-cyan-500/30 hover:border-cyan-300"
                >
                  Pelajari Syarat & Ketentuan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
