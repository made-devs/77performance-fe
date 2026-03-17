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
    <section ref={container} className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <div className="supply-header">
          <Globe2 className="w-16 h-16 text-[var(--color-navy-77)] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-navy-77)] mb-4">
            {t("globalSupply.heading")}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t("globalSupply.paragraph")}
          </p>
        </div>
      </div>

      {/* Infinite Marquee Text */}
      <div className="relative w-full border-y border-white/10 bg-dark-77 py-12 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap gap-20 items-center">
          {regions.map((region, idx) => (
            <span
              key={idx}
              className="text-6xl md:text-8xl font-black text-slate-200 hover:text-[var(--color-cyan-77)] transition-colors duration-300 select-none"
            >
              {region}
            </span>
          ))}
          {regions.map((region, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-6xl md:text-8xl font-black text-slate-200 hover:text-[var(--color-cyan-77)] transition-colors duration-300 select-none"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm font-bold tracking-widest text-[var(--color-navy-77)] uppercase">
          {t("globalSupply.tagline")}
        </p>
      </div>
    </section>
  );
}
