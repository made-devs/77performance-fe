"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingBag, Activity, Zap, Server } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    id: "principal",
    icon: Globe,
    pos: "top-8 left-1/2 -translate-x-1/2 md:top-[24%] md:-translate-y-1/2",
    bg: "bg-[var(--color-navy-77)]",
    color: "text-white",
    border: "border-[var(--color-cyan-77)]",
    sub: "System HQ",
    label: "PRINCIPAL",
    stats: "Global Standards",
  },
  {
    id: "distributor",
    icon: Server,
    pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[80%] md:left-[18.75%]",
    bg: "bg-white",
    color: "text-[var(--color-navy-77)]",
    border: "border-white",
    sub: "Regional Hub",
    label: "DISTRIBUTOR",
    stats: "Stock Buffer",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    pos: "bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:top-[80%] md:left-[81.25%] md:-translate-y-1/2",
    bg: "bg-[#111]",
    color: "text-white",
    border: "border-slate-700",
    sub: "Frontline Market",
    label: "RETAIL / WORKSHOP",
    stats: "End-User Service",
  },
];

export default function EcosystemStructure() {
  const container = useRef(null);
  const svgRef = useRef(null);
  const t = useTranslations("pageCommunity");
  const locale = useLocale();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".bg-grid", { opacity: 0, duration: 1.2 }).from(
        ".header-reveal",
        { y: 50, opacity: 0, stagger: 0.1 },
        "<",
      );

      tl.from(
        ".conn-path",
        { strokeDashoffset: 1000, duration: 2, ease: "power2.inOut" },
        "-=1",
      );

      tl.from(
        ".node-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=1.5",
      );

      gsap.to(".node-card", {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        stagger: { each: 0.6, yoyo: true, repeat: -1 },
      });
    },
    { scope: container, dependencies: [locale] },
  );

  const nodesTrans = t.raw("structure.nodes") || [];

  return (
    <section
      ref={container}
      className="relative min-h-[110vh] bg-[#0a1929] text-white flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#051923] via-[#052432] to-transparent" />

      <div className="relative z-10 text-center mb-12 px-6">
        <div className="header-reveal inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--color-cyan-77)]/30 bg-[var(--color-cyan-77)]/10 text-[var(--color-cyan-77)] text-xs font-mono tracking-widest uppercase mb-6">
          <Activity size={14} className="animate-pulse" />
          {t("structure.statusLabel")}
        </div>
        <h2 className="header-reveal text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          {t("structure.title")}
        </h2>
      </div>

      <div className="relative w-full max-w-5xl h-[750px] md:h-auto md:aspect-video mx-auto">
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block"
          viewBox="0 0 800 500"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0591be" stopOpacity="0" />
              <stop offset="50%" stopColor="#0591be" stopOpacity="1" />
              <stop offset="100%" stopColor="#0591be" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M400,120 L150,400 L650,400 Z"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="10 10"
            className="opacity-30"
          />

          <g>
            <path
              d="M400,120 L150,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
            />
            <path
              d="M400,120 L650,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
            />
            <path
              d="M150,400 L650,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
            />
          </g>
        </svg>

        {nodes.map((node, i) => (
          <div
            key={node.id}
            className={`node-card absolute ${node.pos} group cursor-pointer z-10 w-64`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--color-cyan-77)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2 ${node.bg} ${node.color} ${node.border} shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />

              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg bg-white/10 backdrop-blur-sm`}>
                  <node.icon size={24} />
                </div>
                <Zap
                  size={16}
                  className={`opacity-50 ${node.id === "principal" ? "text-[var(--color-cyan-77)]" : ""}`}
                />
              </div>

              <div>
                <span className="block text-[10px] font-mono opacity-60 tracking-widest uppercase mb-1">
                  {nodesTrans[i]?.sub ?? node.sub}
                </span>
                <h3 className="font-black text-lg tracking-tight leading-none mb-4">
                  {nodesTrans[i]?.label ?? node.label}
                </h3>

                <div className="w-full h-px bg-current opacity-20 mb-3" />
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="opacity-70">
                    {t("structure.focusLabel", { fallback: "Focus" })}
                  </span>
                  <span>{nodesTrans[i]?.stats ?? node.stats}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }`,
        }}
      />
    </section>
  );
}
