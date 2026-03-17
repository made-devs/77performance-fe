"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DurabilitySection() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");

  useGSAP(
    () => {
      // Split reveal animation
      gsap.from(".left-panel", {
        xPercent: -50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      gsap.from(".right-list li", {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".right-list",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 min-h-dvh flex items-center justify-center bg-[#0a0a0a] overflow-hidden text-white"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-77/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#021526]/80 rounded-full blur-[150px] translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#22d3ee 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Panel: Visual Impact */}
          <div className="left-panel lg:w-1/2 relative w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(2,21,38,0.5)] border border-cyan-77/20 aspect-[4/3] group">
              {/* Image representing coating / raw material */}
              <div className="absolute inset-0 bg-[url('/about.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/40 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/20 to-transparent opacity-90" />
              <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2.5rem] z-10" />

              <div className="absolute bottom-10 left-10 right-10 text-white z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <Shield className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs text-cyan-300">
                    {t("durability.tag")}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black font-mulish leading-tight drop-shadow-lg">
                  {t("durability.heading")}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Panel: Data */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-cyan-77/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <h2 className="text-cyan-300 font-bold text-[10px] uppercase tracking-[0.2em] m-0">
                {t("durability.uptitle")}
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-mulish text-white mb-6 leading-tight">
              {t("durability.heading2")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-77 drop-shadow-sm">
                Maximum Precision
              </span>
            </h3>

            <p className="text-slate-300 text-lg mb-12 font-light font-mulish leading-relaxed max-w-xl">
              {t("durability.paragraph")}
            </p>

            <ul className="right-list flex flex-col gap-4">
              {t.raw("durability.list").map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-center justify-between p-5 rounded-2xl bg-[#021526]/30 border border-white/5 hover:border-cyan-400/40 hover:bg-[#021526]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_rgba(34,211,238,0)] group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-white font-bold font-mulish text-lg group-hover:text-cyan-50 transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-cyan-400 font-mono font-bold text-xl px-4 py-1.5 bg-cyan-900/20 rounded-lg border border-cyan-400/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-900/40 transition-all">
                    {item.val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
