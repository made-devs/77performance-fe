"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Timer,
  PenTool,
  BarChart3,
  Crosshair,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: ShieldCheck,
    title: "STRUCTURE",
    subtitle: "SOLID FRAME",
    desc: "Konstruksi logam diperkuat (Reinforced Steel) menahan guncangan ekstrem.",
    stat: "100%",
    statLabel: "SOLIDITY",
  },
  {
    icon: Timer,
    title: "LIFESPAN",
    subtitle: "EXTENDED LIFE",
    desc: "Dirancang dengan material anti-fatigue untuk masa pakai jangka panjang.",
    stat: "5yr+",
    statLabel: "SERVICE LIFE",
  },
  {
    icon: PenTool,
    title: "PRECISION",
    subtitle: "ZERO DEFECT",
    desc: "Toleransi manufaktur di bawah 0.05mm memastikan pemasangan presisi.",
    stat: "<0.1%",
    statLabel: "ERROR RATE",
  },
  {
    icon: BarChart3,
    title: "QUALITY",
    subtitle: "TRIPLE QC",
    desc: "Setiap batch melewati 3 tahap uji stress-test sebelum pengemasan.",
    stat: "ISO",
    statLabel: "CERTIFIED",
  },
];

export default function ProductsReliability() {
  const container = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".grid-item");

      // Animasi Border Draw & Content Fade In
      items.forEach((item, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        }).from(
          item.querySelector(".inner-border"),
          {
            scaleX: 0,
            duration: 0.8,
            ease: "expo.out",
          },
          "-=0.6",
        );
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative bg-white text-[var(--color-navy-77)]"
    >
      {/* HEADER SECTION - Full Width */}
      <div className="py-24 px-6 md:px-12 border-b-2 border-slate-100 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 animate-pulse">
            <Crosshair size={20} className="text-[var(--color-cyan-77)]" />
            <span className="font-mono text-xs tracking-widest uppercase">
              RELIABILITY INDEX
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            BUILT TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-77)] to-[var(--color-navy-77)]">
              ENDURE.
            </span>
          </h2>
        </div>
        <p className="md:max-w-md text-lg text-slate-600 font-light leading-relaxed border-l-4 border-[var(--color-cyan-77)] pl-6">
          Bukan sekadar sparepart. Ini adalah jaminan ketahanan di bawah tekanan
          jalanan yang ekstrem.
        </p>
      </div>

      {/* THE GRID SYSTEM - No Whitespace Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="grid-item group relative min-h-[400px] border-b-2 md:border-b-0 border-r-2 border-slate-100 p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-500 overflow-hidden"
          >
            {/* Animated Top Border for effect */}
            <div className="inner-border absolute top-0 left-0 w-full h-1 bg-[var(--color-cyan-77)] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Top Content */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-[var(--color-navy-77)] group-hover:text-white transition-colors duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs opacity-40">0{idx + 1}</span>
              </div>

              <h4 className="text-xs font-bold tracking-widest text-[var(--color-cyan-77)] mb-2 uppercase">
                {feature.subtitle}
              </h4>
              <h3 className="text-3xl font-black tracking-tighter mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>

            {/* Bottom Stat (Big Number) */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <span className="block text-4xl font-black text-[var(--color-navy-77)] tracking-tighter">
                {feature.stat}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {feature.statLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Bar */}
      <div className="w-full h-4 bg-[pattern-dots] bg-[var(--color-navy-77)] opacity-10" />
    </section>
  );
}
