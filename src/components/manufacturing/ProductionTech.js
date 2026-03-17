"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Scan, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ProductionTech() {
  const container = useRef(null);
  const horizontalRef = useRef(null);
  const t = useTranslations("pageManufacturing");

  useGSAP(
    () => {
      // Horizontal Scroll / Sticky Effect Setup
      // Note: Di mobile jadi vertical stack biasa, desktop horizontal sticky
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let sections = gsap.utils.toArray(".horizontal-item");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.current.offsetWidth,
          },
        });
      });
    },
    { scope: container },
  );

  const translations = t.raw("productionTech.items");
  const ICONS = [Zap, Scan, Cpu];
  const IMAGES = ["/home2.png", "/home3.webp", "/home4.avif"];

  const items = (translations || []).map((tr, idx) => ({
    title: tr.title,
    subtitle: tr.subtitle,
    desc: tr.desc,
    icon: ICONS[idx] || Zap,
    img: IMAGES[idx],
  }));

  return (
    <section
      ref={container}
      className="relative bg-[#021526] text-white overflow-hidden"
    >
      <div className="absolute top-10 left-10 z-10 md:fixed md:top-32 md:left-20 mix-blend-screen pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-cyan-77/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-cyan-300 font-bold text-[10px] uppercase tracking-[0.2em] m-0">
            Technology
          </span>
        </div>
        <h3 className="text-5xl font-black font-mulish text-white drop-shadow-md">
          Production Line
        </h3>
      </div>

      <div
        ref={horizontalRef}
        className="flex flex-col md:flex-row h-auto md:h-screen w-[300%] md:w-[300%]"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="horizontal-item w-full h-screen relative flex items-center justify-center border-b md:border-r border-cyan-77/20 bg-[#0a0a0a]"
          >
            {/* Background Image with Deep Overlay */}
            <div className="absolute inset-0 z-0">
              <div
                className={`w-full h-full bg-cover bg-center mix-blend-luminosity opacity-50`}
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/90 via-[#021526]/70 to-[#0a0a0a]/90" />
            </div>

            {/* Glowing Accent */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 p-10 md:p-16 max-w-3xl w-full bg-[#021526]/40 backdrop-blur-md border border-cyan-77/20 rounded-3xl m-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="mb-8 p-5 bg-cyan-900/30 border border-cyan-77/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] rounded-2xl w-fit">
                <item.icon
                  className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="text-xl text-cyan-400 font-mulish font-bold mb-3 tracking-wider uppercase">
                {item.subtitle}
              </h4>
              <h2 className="text-4xl md:text-6xl font-black font-mulish mb-6 text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light font-mulish leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
