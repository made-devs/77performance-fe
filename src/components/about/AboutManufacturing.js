"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Globe, BarChart3, Factory } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function AboutManufacturing() {
  const container = useRef(null);
  const t = useTranslations("pageAbout.manufacturing");

  useGSAP(
    () => {
      // Parallax Cards Stagger
      gsap.from(".bento-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Animasi Angka 15+
      gsap.from(".big-number", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: ".big-number",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 bg-[var(--color-navy-77)] text-white relative overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-cyan-77)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-[var(--color-cyan-77)] font-bold tracking-widest uppercase text-sm mb-4">
            {t("label")}
          </h2>
          <h3
            className="text-5xl md:text-7xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: t("title") }}
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Experience (Large) */}
          <div className="bento-card md:col-span-2 bg-[#ffffff08] border border-white/10 p-10 md:p-14 hover:bg-[#ffffff10] transition-colors duration-500 rounded-2xl relative overflow-hidden group">
            <Factory className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <span className="big-number text-8xl md:text-9xl font-extrabold text-white block mb-2">
                15<span className="text-[var(--color-cyan-77)]">+</span>
              </span>
              <h4 className="text-2xl font-bold mb-4">
                {t("experienceTitle")}
              </h4>
              <p className="text-slate-300 text-lg max-w-md">
                {t("experienceDesc")}
              </p>
            </div>
          </div>

          {/* Card 2: Vertical (FIXED) */}
          {/* Wrapper .bento-card menangani animasi GSAP Entrance */}
          <div className="bento-card h-full">
            {/* Inner div menangani styling visual & Hover effect */}
            {/* Kita pisahkan agar CSS Transition Hover tidak 'berkelahi' dengan GSAP transform */}
            <div className="h-full bg-[var(--color-cyan-77)] text-white p-10 rounded-2xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
              <Globe className="w-16 h-16 mb-8 text-blue-900" />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  {t("supplyChainTitle")}
                </h4>
                <p className="opacity-90 leading-relaxed">
                  {t("supplyChainDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Quality */}
          <div className="bento-card bg-dark-77 text-[var(--color-navy-77)] p-10 rounded-2xl flex flex-col justify-between group">
            <Settings className="w-12 h-12 mb-6 text-[var(--color-cyan-77)] animate-spin-slow" />
            <div>
              <h4 className="text-xl font-bold mb-2">{t("precisionTitle")}</h4>
              <p className="text-slate-300">{t("precisionDesc")}</p>
            </div>
          </div>

          {/* Card 4: Volume */}
          <div className="bento-card md:col-span-2 bg-[#ffffff08] border border-white/10 p-10 rounded-2xl flex items-center gap-8 hover:border-[var(--color-cyan-77)] transition-colors duration-300">
            <div className="bg-[var(--color-navy-77)] p-4 rounded-full">
              <BarChart3 className="w-8 h-8 text-[var(--color-cyan-77)]" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{t("volumeTitle")}</h4>
              <p className="text-slate-400">{t("volumeDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
