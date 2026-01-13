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
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
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
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
        "-=0.3"
      );

      // 3. Map Pattern Pulse
      tl.fromTo(
        ".bg-map-pattern",
        { opacity: 0, scale: 1.1 },
        { opacity: 0.1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      );

      // 4. Content Columns Reveal
      tl.fromTo(
        ".combo-item",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      tl.fromTo(
        ".secure-card",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
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
      className="relative py-24 bg-navy-77 text-white overflow-hidden"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-77 via-[#010c16] to-navy-77 z-0" />

      {/* Map Dots Pattern - Color Cyan-77 */}
      <div
        className="bg-map-pattern absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Cyan & Navy Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-77/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-77/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <div className="alert-badge opacity-0 absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-red-500 z-20">
            Urgent Notice
          </div>

          <h2 className="limit-title text-5xl md:text-6xl lg:text-8xl font-black font-mulish tracking-tighter leading-none mb-4">
            <span className="block opacity-0 text-white/20">LIMITED</span>
            <span className="block opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 via-white to-cyan-77 bg-[length:200%_auto] animate-gradient">
              OPPORTUNITY
            </span>
          </h2>

          <div className="inline-block mt-4 px-6 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-cyan-77 font-bold text-lg md:text-xl uppercase tracking-widest">
              Satu Kota • Satu Distributor
            </p>
          </div>
        </div>

        {/* SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* LEFT: FOUNDATION */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-mulish">
              <span className="text-white/40">77 Performance Adalah </span>
              <br />
              <span className="text-white text-3xl">
                Kombinasi Sempurna Dari:
              </span>
            </h3>

            <div className="space-y-4">
              {COMBINATIONS.map((text, i) => (
                <div
                  key={i}
                  className="combo-item opacity-0 group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-77/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-77 border border-white/10 flex items-center justify-center group-hover:bg-cyan-77 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-cyan-77 group-hover:text-navy-77"
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
                  <span className="text-lg font-bold text-white/70 group-hover:text-white tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SECURITY */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-77/5 rotate-3 rounded-3xl blur-sm -z-10" />
            <div className="bg-navy-77/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-sm text-cyan-77 font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">
                Partner Privilege:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SECURITY_POINTS.map((item, i) => (
                  <div
                    key={i}
                    className="secure-card opacity-0 group relative p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-77/50 transition-all duration-300"
                  >
                    <div className="mb-4 text-cyan-77 group-hover:scale-110 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <p className="font-bold text-white/80 group-hover:text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-[10px] text-white/30 uppercase tracking-widest font-bold">
                *Slot wilayah bersifat eksklusif
              </p>
            </div>
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <div className="final-statement opacity-0 max-w-5xl mx-auto text-center px-10 py-12 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-77 to-transparent opacity-50" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-left md:w-1/2">
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-2">
                Option A
              </p>
              <p className="text-white/60 font-medium text-xl leading-relaxed">
                Jika Ingin Sekadar Jualan, <br />
                <span className="text-white/30 font-light">
                  Banyak Pilihan di Luar Sana.
                </span>
              </p>
            </div>

            <div className="hidden md:block w-[1px] h-20 bg-white/10" />

            <div className="text-left md:w-1/2">
              <p className="text-cyan-77 font-bold uppercase tracking-widest text-xs mb-2">
                Option B
              </p>
              <p className="text-white font-black text-2xl md:text-3xl leading-tight font-mulish">
                Bangun Bisnis <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-77">
                  Jangka Panjang
                </span>
                <br />
                Bersama Kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8"
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default LimitedDistributorOpportunity;
