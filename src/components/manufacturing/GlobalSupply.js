"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2 } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalSupply() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");

  useGSAP(
    () => {
      // Marquee effect logic for regions
      const marquee = document.querySelector(".marquee-track");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "linear",
        });
      }

      gsap.from(".supply-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  const regions = t.raw("globalSupply.regions");

  return (
    <section
      ref={container}
      className="relative py-32 min-h-[70vh] flex flex-col justify-center bg-[#0a0a0a] overflow-hidden text-white"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(14,107,160,0.15)_0%,_transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10 w-full">
        <div className="supply-header flex flex-col items-center">
          <div className="relative mb-8 group cursor-default">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="w-20 h-20 bg-[#021526]/80 backdrop-blur-md border border-cyan-400/30 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Globe2
                className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                strokeWidth={1.5}
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-mulish text-white mb-6 leading-tight drop-shadow-lg">
            {t("globalSupply.heading")}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-light font-mulish max-w-2xl mx-auto leading-relaxed">
            {t("globalSupply.paragraph")}
          </p>
        </div>
      </div>

      {/* Infinite Marquee Text */}
      <div className="relative w-full border-y border-cyan-77/20 bg-gradient-to-r from-[#0a0a0a] via-[#021526]/80 to-[#0a0a0a] py-14 overflow-hidden z-10 shadow-[0_0_50px_rgba(2,21,38,0.5)]">
        {/* Soft fading edges for Marquee */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div className="marquee-track flex whitespace-nowrap gap-28 items-center">
          {regions.map((region, idx) => (
            <span
              key={idx}
              className="text-6xl md:text-8xl font-black font-mulish text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600 hover:from-cyan-300 hover:to-cyan-600 transition-all duration-500 select-none cursor-default drop-shadow-xl opacity-80 hover:opacity-100 hover:scale-105"
            >
              {region}
            </span>
          ))}
          {regions.map((region, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-6xl md:text-8xl font-black font-mulish text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600 hover:from-cyan-300 hover:to-cyan-600 transition-all duration-500 select-none cursor-default drop-shadow-xl opacity-80 hover:opacity-100 hover:scale-105"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center gap-3">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-77 hidden md:block" />
          <p className="text-sm md:text-base font-bold tracking-[0.3em] font-mulish text-cyan-300 uppercase drop-shadow-md">
            {t("globalSupply.tagline")}
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-cyan-77 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
