"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Warehouse, Microscope, FileCheck } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingFacility() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");
  const cards = t.raw("facility.cards");
  const ICONS = [Factory, Microscope, FileCheck, Warehouse];

  useGSAP(
    () => {
      // 1. Text Animation (Updated to fromTo for safety)
      gsap.fromTo(
        ".facility-text",
        { y: 50, opacity: 0, autoAlpha: 0 },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".text-wrapper",
            start: "top 80%",
          },
        },
      );

      // 2. Cards Animation (Wrapper Strategy Fix)
      // Menggunakan .spec-card-wrapper untuk animasi masuk
      gsap.fromTo(
        ".spec-card-wrapper",
        {
          y: 60, // Mulai dari bawah
          opacity: 0,
          autoAlpha: 0, // Mencegah glitch visual sebelum animasi mulai
        },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15, // Efek muncul bergantian
          ease: "back.out(1.2)", // Sedikit efek memantul halus agar premium
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 85%", // Mulai animasi saat grid masuk 15% dari bawah layar
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 min-h-dvh flex flex-col justify-center bg-gradient-to-br from-[#004666] via-[#0591be]/40 to-[#021526] text-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-[#021526]/80 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 text-wrapper">
          <div>
            <div className="facility-text opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-cyan-77/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <h2 className="text-cyan-300 font-bold text-[10px] uppercase tracking-[0.2em] m-0">
                {t("facility.tag")}
              </h2>
            </div>
            <h3 className="facility-text opacity-0 text-4xl md:text-6xl font-black font-mulish leading-tight mb-6">
              {t("facility.heading")}
            </h3>
            <p className="facility-text opacity-0 text-lg text-slate-300 leading-relaxed font-light font-mulish">
              {t("facility.paragraph")}
            </p>
          </div>
          <div className="facility-text opacity-0 relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-[0_0_40px_rgba(2,21,38,0.5)] border border-cyan-77/20">
            {/* Visual Real Factory Placeholder */}
            <div className="absolute inset-0 bg-[url('/home2.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/40 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-cyan-900/20 mix-blend-color" />
            <div className="absolute inset-0 border-[2px] border-white/5 rounded-3xl z-10" />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {cards.map((item, idx) => (
            // WRAPPER STRATEGY:
            // Div luar (.spec-card-wrapper) menangani animasi GSAP masuk (Translation/Opacity)
            // Div dalam menangani Styling, Hover, dan Shadow.
            // Ini mencegah konflik antara GSAP Transform dan CSS Transition Hover.
            <div
              key={idx}
              className="spec-card-wrapper opacity-0 h-full w-full"
            >
              <div className="h-full w-full p-8 border border-cyan-77/10 bg-[#021526]/50 backdrop-blur-md flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#021526]/80 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-500 rounded-3xl group cursor-default">
                <div className="w-16 h-16 bg-cyan-900/30 border border-cyan-77/30 flex items-center justify-center text-cyan-400 rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)] mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-[#021526] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500">
                  {(() => {
                    const Icon = ICONS[idx] || Factory;
                    return <Icon className="w-8 h-8" strokeWidth={1.5} />;
                  })()}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white font-mulish group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light font-mulish">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
