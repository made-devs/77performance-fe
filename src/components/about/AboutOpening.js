"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOpening() {
  const container = useRef(null);
  const bgImage = useRef(null);
  const t = useTranslations("pageAbout");

  useGSAP(
    () => {
      // 1. Parallax Effect pada Background
      gsap.to(bgImage.current, {
        yPercent: 30, // Bergerak ke bawah saat scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Text Reveal Animation (Clip Path style)
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      introTl
        .from(".hero-uptitle", {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
        })
        .from(
          ".hero-title-line",
          {
            y: 150, // Muncul dari bawah cukup jauh
            skewY: 7, // Sedikit miring saat naik
            stagger: 0.15,
            duration: 1.5,
          },
          "-=0.8",
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=1",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-[110vh] w-full flex items-center overflow-hidden bg-[#111]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div
          ref={bgImage}
          className="h-[130%] w-full bg-[url('/about.webp')] bg-cover bg-center opacity-60"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-77)]/90 via-[#111]/40 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-5xl">
          <p className="hero-uptitle text-[var(--color-cyan-77)] font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base border-l-4 border-[var(--color-cyan-77)] pl-4">
            {t("uptitle")}
          </p>

          <div className="overflow-hidden">
            <h1 className="hero-title-line text-7xl md:text-[8rem] font-extrabold tracking-tighter leading-[0.9] text-white">
              {t("titleLine1")}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-7xl md:text-[8rem] font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-silver-77)]">
              {t("titleLine2")}
            </h1>
          </div>

          <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-8 items-start">
            <div className="h-[2px] w-24 bg-[var(--color-cyan-77)] mt-4 hidden md:block" />
            <p className="hero-desc text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              {t("descriptionLead")}{" "}
              <span className="text-white font-medium">
                {t("descriptionHighlight")}
              </span>{" "}
              {t("descriptionTail")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
