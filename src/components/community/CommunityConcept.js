"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CommunityConcept() {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // 1. Parallax Effect pada Big Text Background
      gsap.to(".big-bg-text", {
        xPercent: -20, // Bergerak pelan ke kiri saat scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. Reveal Animation untuk Konten Utama
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });

      tl.from(".concept-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      }).from(
        ".floating-shape",
        {
          scale: 0,
          rotate: 180,
          opacity: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.7)",
        },
        "-=1",
      );

      // 3. Highlight Line Animation
      gsap.from(".highlight-line", {
        scaleX: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".highlight-text",
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[120vh] bg-slate-100 overflow-hidden flex items-center py-24"
    >
      {/* BACKGROUND DECORATION */}
      {/* Giant Moving Text (Background Texture) */}
      <div className="absolute top-[10%] left-0 w-full pointer-events-none select-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <h1 className="big-bg-text text-[30vw] font-black leading-none text-[var(--color-navy-77)] translate-x-[10%]">
          ECOSYSTEM
        </h1>
      </div>

      {/* Abstract Shape (Rotating Ring) */}
      <div className="absolute right-[-10%] top-[20%] w-[40vw] h-[40vw] border-[1px] border-[var(--color-navy-77)] rounded-full opacity-5 hover:opacity-10 transition-opacity duration-700 animate-[spin_30s_linear_infinite]" />
      <div className="absolute right-[-5%] top-[25%] w-[30vw] h-[30vw] border-[1px] border-[var(--color-cyan-77)] rounded-full opacity-5 animate-[spin_20s_linear_infinite_reverse]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        {/* TOP LABEL */}
        <div className="concept-reveal flex items-center gap-4 mb-16">
          <span className="w-12 h-[1px] bg-[var(--color-navy-77)]" />
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-[var(--color-navy-77)]">
            Redefining Connection
          </span>
        </div>

        {/* MAIN HEADLINE COMPOSITION */}
        <div className="relative max-w-5xl">
          {/* Floating 'Stamp' or Icon */}
          <div className="floating-shape absolute -top-12 -right-4 md:-right-12 hidden md:flex items-center justify-center w-24 h-24 bg-[var(--color-cyan-77)] rounded-full text-white shadow-xl z-20">
            <Sparkles size={32} className="animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-[var(--color-navy-77)] leading-[1.1] tracking-tight">
            <span className="concept-reveal block">More than just</span>
            <span className="concept-reveal block italic font-serif text-slate-400">
              a community.
            </span>
            <span className="concept-reveal block font-black mt-2 relative inline-block highlight-text">
              IT'S A BUSINESS
              <br />
              INFRASTRUCTURE.
              {/* Underline Highlight */}
              <span className="highlight-line absolute bottom-2 left-0 w-full h-[0.1em] bg-[var(--color-cyan-77)] origin-left -z-10 opacity-60" />
            </span>
          </h2>
        </div>

        {/* BOTTOM CONTENT GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          {/* Left: Decorative Number */}
          <div className="md:col-span-4 concept-reveal">
            <span className="block text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-transparent leading-none opacity-50">
              02
            </span>
          </div>

          {/* Right: Detailed Description & CTA */}
          <div className="md:col-span-8 lg:col-span-6 concept-reveal">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-8">
              Kami mengubah paradigma. Bukan sekadar tempat berkumpul pasif,
              melainkan{" "}
              <b className="text-[var(--color-navy-77)]">ekosistem aktif</b>{" "}
              yang menghubungkan distributor, bengkel, dan toko dalam satu alur
              kolaborasi yang saling menguntungkan.
            </p>

            <div className="flex items-center gap-2 group cursor-pointer text-[var(--color-navy-77)] font-bold tracking-widest uppercase text-sm">
              <span className="border-b border-transparent group-hover:border-[var(--color-navy-77)] transition-all">
                Learn The Structure
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
