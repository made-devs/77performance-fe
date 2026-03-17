"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight, Network } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function CommunityConcept() {
  const container = useRef(null);
  const t = useTranslations("pageCommunity");
  const locale = useLocale();

  useGSAP(
    () => {
      // 1. Kinetic Text Marquee Background
      gsap.to(".big-bg-text", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. Cinematic Entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
      });

      tl.fromTo(
        ".concept-reveal",
        { y: 60, opacity: 0, rotationX: 10 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        },
      ).fromTo(
        ".accent-image",
        { scale: 0.8, opacity: 0, filter: "blur(20px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
        },
        "-=1",
      );

      // 3. Highlight Text Scanline
      gsap.fromTo(
        ".highlight-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".highlight-text",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container, dependencies: [locale] },
  );

  const headline = t.raw("concept.headline") || [];

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-gradient-to-br from-[#0c3157] via-[#145591] to-[#0a2745] overflow-hidden flex items-center py-32"
    >
      {/* BACKGROUND DECORATION - Minimalist Kinetic Typography */}
      <div className="absolute top-[5%] -left-[10%] w-[120%] pointer-events-none select-none opacity-[0.04] overflow-hidden whitespace-nowrap z-0">
        <h1 className="big-bg-text text-[25vw] font-black leading-none text-white translate-x-[5%] tracking-tighter">
          {t("concept.bgText", { fallback: "ECOSYSTEM MULTIPLIER" })}
        </h1>
      </div>

      {/* Grid Overlay for Engineering Feel */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* LEFT COLUMN - Typography & Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Label */}
            <div className="concept-reveal flex items-center gap-3 mb-10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-300 backdrop-blur-sm">
                <Network size={16} strokeWidth={2.5} />
              </div>
              <span className="font-mono text-sm tracking-[0.2em] font-semibold text-blue-200 uppercase drop-shadow-sm">
                {t("concept.label")}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-light text-white leading-[1] tracking-tight mb-12 drop-shadow-md">
              <span className="concept-reveal block mb-2">
                {headline[0] ?? "More than just"}
              </span>
              <span className="concept-reveal block italic font-serif text-blue-200/80 pr-12">
                {headline[1] ?? "a community."}
              </span>
              <span className="concept-reveal block font-black mt-4 relative inline-block highlight-text text-white">
                {headline[2] ?? "IT'S A BUSINESS\nINFRASTRUCTURE."}
                <span className="highlight-line absolute bottom-3 left-0 w-full h-[0.15em] bg-cyan-400/60 -z-10" />
              </span>
            </h2>

            {/* Paragraph & CTA */}
            <div className="concept-reveal pl-0 md:pl-12 border-l-0 md:border-l-2 border-cyan-400/30">
              <p className="text-xl text-blue-100/90 leading-relaxed font-light mb-8 max-w-xl drop-shadow-sm">
                {t("concept.paragraph")}
              </p>

              <div className="inline-flex items-center border border-white/10 bg-white/5 backdrop-blur-md rounded-full p-2 pr-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center mr-4 group-hover:bg-cyan-400 group-hover:text-[#0c3157] transition-colors duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
                  <MoveUpRight size={18} />
                </div>
                <span className="text-white font-bold tracking-wider uppercase text-xs">
                  {t("concept.cta")}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual Anchor */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="accent-image relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/5] w-full max-w-md ml-auto border border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

              {/* Overlays to make it blend with dark theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a2745]/90 via-[#145591]/50 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2745] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />

              {/* Aesthetic details on image */}
              <div className="absolute bottom-8 left-8 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                  <span className="font-mono text-xs tracking-widest uppercase opacity-80 drop-shadow-md">
                    Live System Status
                  </span>
                </div>
                <p className="font-black text-2xl tracking-tight drop-shadow-lg">
                  Active Node
                </p>
              </div>
            </div>

            {/* Floating Element behind Image */}
            <div className="absolute -z-10 top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
