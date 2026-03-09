"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryHero() {
  const container = useRef(null);
  const t = useTranslations("pageGallery");
  const locale = useLocale();

  useGSAP(
    () => {
      // Marquee Effect on Scroll
      gsap.to(".marquee-text", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          // Start moving once section scrolls into view
          start: "40% bottom",
          end: "70% top",
          scrub: 1,
        },
      });

      // Reveal lines
      gsap.from(".hero-line", {
        scaleX: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
      });
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative h-[60vh] md:h-[80vh] bg-[var(--color-navy-77)] overflow-hidden flex flex-col justify-center pb-12 md:pb-24 pointer-events-none"
    >
      {/* Background Grids */}
      <div className="absolute inset-x-0 top-0 h-full w-full opacity-10 bg-[linear-gradient(rgba(5,145,190,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(5,145,190,0.5)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="hero-line w-full h-[1px] bg-white/20 mb-6 origin-left" />

        <div className="overflow-hidden">
          {/* Ensure width follows text length */}
          <h1 className="marquee-text w-max text-[15vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white/20 whitespace-nowrap pr-12">
            {t("hero.marquee")}
          </h1>
        </div>

        <div className="hero-line w-full h-[1px] bg-white/20 mt-6 origin-right" />

        <div className="flex justify-between items-end mt-8 text-white/50 font-mono text-xs md:text-sm uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-[var(--color-cyan-77)] rounded-full animate-pulse" />
            <span>{t("hero.curated")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t("hero.scrollHint")}</span>
            <MoveDown size={14} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
