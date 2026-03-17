"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { Target, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutWhoWeAre() {
  const container = useRef(null);
  const t = useTranslations("pageAbout.whoWeAre");

  const statements = t.raw("statements") || [];
  const features = t.raw("features") || [];

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const dividerLine = q(".divider-line")[0];
      const statement = q(".main-statement")[0];
      const detailGrid = q(".details-grid")[0];
      const statementSpans = q(".main-statement span");
      const detailCards = q(".detail-card");

      if (!dividerLine || !statement || !detailGrid) return;

      // Pastikan tidak ada style inline sisa tween sebelumnya (kasus reload/re-init)
      gsap.set(statementSpans, { clearProps: "opacity,transform" });
      gsap.set(detailCards, { clearProps: "opacity,transform" });

      // Animasi Garis Dekorasi
      gsap.from(dividerLine, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      // Animasi Text Utama
      gsap.from(statementSpans, {
        opacity: 0.15,
        y: 30,
        stagger: 0.05,
        duration: 1.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: statement,
          start: "top 90%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      // Animasi Paragraf Detail Card: trigger per-card untuk mencegah card ke-lock saat refresh
      detailCards.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1.1,
          delay: index * 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    {
      scope: container,
      dependencies: [statements.length, features.length],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-[#0a1929] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#145591]/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Subtle Textures */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Label Section */}
        <div className="flex items-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono tracking-widest uppercase font-semibold backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {t("label")}
          </div>
          <div className="divider-line h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* Big Statement */}
        <h2 className="main-statement text-4xl md:text-6xl lg:text-7xl font-black leading-[1.2] mb-24 max-w-5xl tracking-tight">
          {statements.map((stmt, idx) => (
            <React.Fragment key={idx}>
              <span
                className={`inline-block ${
                  stmt.isCyan ? "text-cyan-400" : "text-white"
                }`}
              >
                {stmt.text}
              </span>{" "}
              {idx === 4 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
        </h2>

        {/* Detailed Content Cards */}
        <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
          <div className="detail-card group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              <Target size={120} strokeWidth={1} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8 border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#0a1929] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] relative z-10">
              <Target size={24} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white tracking-tight relative z-10">
              {features[0]?.title}
            </h3>
            <p
              className="text-blue-100/70 text-lg leading-relaxed font-light relative z-10"
              dangerouslySetInnerHTML={{ __html: features[0]?.desc || "" }}
            />
          </div>

          <div className="detail-card group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              <Zap size={120} strokeWidth={1} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8 border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#0a1929] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] relative z-10">
              <Zap size={24} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white tracking-tight relative z-10">
              {features[1]?.title}
            </h3>
            <p
              className="text-blue-100/70 text-lg leading-relaxed font-light relative z-10"
              dangerouslySetInnerHTML={{ __html: features[1]?.desc || "" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
