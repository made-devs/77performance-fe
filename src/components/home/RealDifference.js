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
  const ghostTextRef = useRef(null);

  useGSAP(
    () => {
      // 1. Ghost Typography Parallax (Lebih lambat & smooth)
      gsap.to(ghostTextRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 2. Row Animation Loop (Cinematic Entrance)
      // Kita animasikan per-row agar interaksinya terasa "one by one"
      const rows = gsap.utils.toArray(".comparison-row");
      rows.forEach((row) => {
        const leftCard = row.querySelector(".left-card");
        const rightCard = row.querySelector(".right-card");
        const vsBadge = row.querySelector(".vs-badge");
        const glowLine = row.querySelector(".glow-connector");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%", // Muncul saat hampir masuk viewport
            toggleActions: "play none none reverse",
          },
        });

        tl
          // Step A: Kiri masuk (Buram & Gelap)
          .fromTo(
            leftCard,
            { x: -50, opacity: 0, filter: "blur(10px)" },
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.out",
            }
          )
          // Step B: VS Badge Pop
          .fromTo(
            vsBadge,
            { scale: 0, rotation: 180 },
            { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.4"
          )
          // Step C: Kanan Masuk (Powerful & Bright)
          .fromTo(
            rightCard,
            { x: 50, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
            "-=0.3"
          )
          // Step D: Glow Line expands
          .fromTo(
            glowLine,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6 },
            "-=0.6"
          );
      });

      // 3. Final Slogan Parallax Scale
      gsap.from(".final-slogan-box", {
        scale: 0.9,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".final-slogan",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      // BG: Kombinasi Navy-77 Solid dengan Gradient Mesh halus agar tidak flat
      className="relative py-32 bg-navy-77 overflow-hidden text-white"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Gradient Mesh Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-77 via-[#011a4d] to-navy-77 opacity-80" />

        {/* Cyan Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-77/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-77/5 rounded-full blur-[100px]" />

        {/* Ghost Text */}
        <div
          ref={ghostTextRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[20vw] font-black uppercase tracking-tighter text-white/[0.03] italic"
        >
          High Performance Standard High Performance Standard
        </div>

        {/* Tech Grid Pattern (White transparent) */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="rd-header text-center mb-20 md:mb-28">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-cyan-77"></span>
            <span className="text-cyan-77 font-bold tracking-[0.4em] text-xs uppercase shadow-cyan-500/50 drop-shadow-[0_0_8px_rgba(5,145,190,0.5)]">
              Comparison Study
            </span>
            <span className="w-12 h-[1px] bg-cyan-77"></span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black font-mulish text-white tracking-tight">
            The Real {/* Gradient Text yang lebih contrast di dark mode */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 animate-pulse">
              Difference.
            </span>
          </h2>
        </div>

        {/* COMPARISON TABLE */}
        <div className="comparison-container max-w-6xl mx-auto mb-24 relative">
          {/* Central Line (Visual Connector) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {COMPARISONS.map((item) => (
              <div
                key={item.id}
                className="comparison-row grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 relative items-center"
              >
                {/* Connector Glow Line (Hidden on Mobile) */}
                <div className="glow-connector absolute left-[10%] right-[10%] top-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-77/30 to-transparent md:hidden" />

                {/* --- LEFT SIDE: OTHERS (Negative/Neutral) --- */}
                {/* Desain: Lebih gelap, border tipis, text abu-abu (receding) */}
                <div className="left-card p-6 md:p-8 rounded-3xl bg-navy-77 border border-white/5 flex flex-col justify-center text-center md:text-right relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20" />{" "}
                  {/* Dimmer overlay */}
                  <span className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 group-hover:text-slate-400 transition-colors">
                    {item.label}
                  </span>
                  <p className="relative z-10 text-slate-400 font-mulish text-lg md:text-xl font-medium">
                    {item.others}
                  </p>
                </div>

                {/* --- RIGHT SIDE: US (Hero/Positive) --- */}
                {/* Desain: Glassmorphism, Border Cyan Glowing, Text Putih (Advancing) */}
                <div className="right-card group relative p-8 md:p-10 rounded-3xl bg-cyan-77/10 backdrop-blur-md border border-cyan-77/50 shadow-[0_0_30px_rgba(5,145,190,0.15)] flex flex-col justify-center text-center md:text-left transition-all duration-500 hover:shadow-[0_0_50px_rgba(5,145,190,0.3)] hover:scale-[1.02]">
                  {/* Spotlight Gradient effect moving on hover could be added here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />

                  <span className="relative z-10 flex items-center justify-center md:justify-start gap-2 text-[11px] font-bold text-cyan-300 uppercase tracking-widest mb-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                    77 Performance Advantage
                  </span>
                  <h3 className="relative z-10 text-white font-black font-mulish text-xl md:text-2xl leading-snug drop-shadow-sm">
                    {item.us}
                  </h3>
                  {/* Decorative Icon */}
                  <div className="absolute right-4 top-4 text-cyan-77/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>

                {/* VS Badge (Absolute Center) */}
                <div className="vs-badge absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-navy-77 border-2 border-cyan-77 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(5,145,190,0.4)] z-20">
                  <span className="text-[12px] font-black text-cyan-400 italic font-mulish">
                    VS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL SLOGAN */}
        <div className="final-slogan max-w-5xl mx-auto mt-32">
          {/* Box dibuat transparan glass dengan border gradient cyan */}
          <div className="final-slogan-box bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 lg:p-20 text-center relative overflow-hidden group">
            {/* Animated Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-77/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10">
              <p className="text-cyan-300 font-bold tracking-[0.3em] text-xs uppercase mb-6">
                Our Core Philosophy
              </p>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black font-mulish leading-tight text-white">
                Others Sell Parts.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
                  We Build Business.
                </span>
              </h3>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-77 to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealDifference;
