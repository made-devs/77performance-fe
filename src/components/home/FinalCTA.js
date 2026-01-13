"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Moving Aurora Gradient Logic
      // Animate background position untuk simulasi aurora mengalir
      gsap.to(bgRef.current, {
        backgroundPosition: "100% 50%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 2. Content Entrance
      tl.fromTo(
        ".cta-content",
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          ".cta-text",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          "-=0.6"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
          "-=0.2"
        );

      // 3. Button Pulse Loop
      gsap.to(".btn-glow-ring", {
        scale: 1.6,
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
      className="relative py-32 overflow-hidden flex items-center justify-center min-h-[700px]"
    >
      {/* --- THE MOVING AURORA BACKGROUND --- */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          // Gradasi antara Slate 950, Navy 77, dan Cyan 77
          background: "linear-gradient(-45deg, #145591, #020618, #0591be)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Subtle Overlay Grid untuk kesan High-Class Technical */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 95%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* --- MAIN GLASS CARD --- */}
        <div className="cta-content max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[56px] p-16 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="cta-text mb-10 flex justify-center opacity-0">
              <span className="px-6 py-2 rounded-full bg-navy-77/50 border border-cyan-77/30 text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] shadow-2xl">
                Strategic Expansion
              </span>
            </div>

            <h2 className="cta-text text-5xl md:text-8xl font-black text-white font-mulish mb-10 leading-[0.95] opacity-0 tracking-tighter">
              Amankan Wilayah <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-white/40">
                Eksklusif Anda.
              </span>
            </h2>

            <p className="cta-text text-white/50 text-xl max-w-2xl mx-auto mb-16 font-mulish font-light leading-relaxed opacity-0">
              Jadilah distributor tunggal di kota Anda. Jangan biarkan
              kompetitor mengambil peluang emas dalam ekosistem 77 Performance.
            </p>

            {/* --- ACTION BUTTON --- */}
            <div
              ref={buttonRef}
              className="opacity-0 relative inline-block group/btn"
            >
              <div className="btn-glow-ring absolute inset-0 rounded-full bg-cyan-77/40 z-0" />
              <div
                className="btn-glow-ring absolute inset-0 rounded-full bg-white/10 z-0"
                style={{ animationDelay: "1s" }}
              />

              <button className="relative z-10 bg-gradient-to-r from-[#021526] to-[#0e6ba0] hover:to-cyan-600 text-white font-black text-xl px-16 py-7 rounded-full border border-white/10 shadow-2xl transition-all duration-500 flex items-center gap-4 mx-auto group-hover/btn:scale-105 active:scale-95">
                <span>HUBUNGI PRINCIPAL</span>
                <svg
                  className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            <div className="cta-text mt-16 opacity-0">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                77 Performance • Official Partnership 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
