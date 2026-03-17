"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Repeat, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const baseStrategies = [
  {
    id: "01",
    icon: Repeat,
    tag: "STABILITY",
    theme: "bg-[var(--color-navy-77)] text-white",
    accent: "text-[var(--color-cyan-77)]",
  },
  {
    id: "02",
    icon: TrendingUp,
    tag: "BENEFIT",
    theme: "bg-dark-77 text-[var(--color-navy-77)]",
    accent: "text-[var(--color-navy-77)]",
  },
  {
    id: "03",
    icon: ShieldCheck,
    tag: "CONTROL",
    theme: "bg-[#111] text-white",
    accent: "text-white",
  },
];

export default function CommunityStrategy() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const t = useTranslations("pageCommunity");
  const locale = useLocale();

  const translatedItems = t.raw("strategy.items") || [];
  const strategies = baseStrategies.map((b, i) => ({
    ...b,
    title: translatedItems[i]?.title ?? "",
    desc: translatedItems[i]?.desc ?? "",
    tag: translatedItems[i]?.tag ?? b.tag,
  }));

  useGSAP(
    () => {
      const pinWrap = sectionRef.current;
      const wrapWidth = pinWrap.scrollWidth;
      const scrollWidth = wrapWidth - window.innerWidth;

      // Animasi Horizontal Scroll Dasar
      gsap.to(pinWrap, {
        x: -scrollWidth, // Geser ke kiri sejauh sisa lebar konten
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true, // Pin section parent
          scrub: 1, // Smooth scrolling
          start: "top top",
          end: () => `+=${scrollWidth}`, // Durasi scroll = panjang konten horizontal
          invalidateOnRefresh: true, // Recalculate saat resize
        },
      });
    },
    { scope: triggerRef, dependencies: [locale] },
  );

  return (
    // Trigger Wrapper (Pinning Target)
    <section
      ref={triggerRef}
      className="relative overflow-hidden w-full h-screen"
    >
      {/* Moving Container (Horizontal Content) */}
      <div ref={sectionRef} className="flex h-full w-fit">
        {strategies.map((item, i) => (
          <div
            key={i}
            className={`
                strategy-panel w-screen h-screen flex-shrink-0 flex flex-col justify-center relative px-6 md:px-24
                ${item.theme}
            `}
          >
            {/* Background Number */}
            <span className="absolute top-[5%] right-0 text-[40vh] md:text-[50vh] font-black leading-none opacity-[0.05] select-none tracking-tighter pointer-events-none">
              {item.id}
            </span>

            {/* Content Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
              {/* Left Column */}
              <div className="md:col-span-4 pb-4 border-b-2 border-inherit opacity-80 flex flex-col justify-between h-auto md:h-full md:min-h-[300px]">
                <div className="space-y-6 mb-8 md:mb-0">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full border border-current flex items-center justify-center ${item.accent}`}
                  >
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase block">
                    Strength_0{i + 1}
                  </span>
                </div>
                <h3 className="hidden md:block text-xl font-bold tracking-widest uppercase">
                  {item.tag}
                </h3>
              </div>

              {/* Right Column (Typography) */}
              <div className="md:col-span-8">
                {/* Mobile Tag */}
                <h3 className="md:hidden text-sm font-bold tracking-widest uppercase mb-2 opacity-60">
                  {item.tag}
                </h3>

                <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12">
                  {item.title}
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl opacity-80">
                    {item.desc}
                  </p>

                  <div className="hidden md:flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-current group cursor-pointer hover:bg-[var(--color-cyan-77)] hover:text-white hover:border-[var(--color-cyan-77)] transition-all duration-500 flex-shrink-0">
                    <ArrowRight
                      size={40}
                      className="group-hover:-rotate-45 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar Details */}
            <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end opacity-40 font-mono text-[10px] md:text-xs uppercase tracking-widest pointer-events-none">
              <span>{t("strategy.bottomLeft")}</span>
              <span className="hidden md:inline">
                {t("strategy.bottomMiddle")}
              </span>
              <span>{item.id} / 03</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
