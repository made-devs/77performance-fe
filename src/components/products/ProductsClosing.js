"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsClosing() {
  const container = useRef(null);
  const btnRef = useRef(null);
  const textRef = useRef(null);

  const t = useTranslations("pageProducts");
  const locale = useLocale();

  // WhatsApp Link Config - Disesuaikan untuk B2B
  const whatsappNumber = t("closing.whatsappNumber");
  const message = t("closing.whatsappMessage");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useGSAP(
    () => {
      // 1. Parallax Effect for Background Image
      gsap.to(".bg-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Magnetic Button Effect
      const btn = btnRef.current;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3" });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = btn.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.3);
        yTo(y * 0.3);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);

      // 3. Reveal Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });

      tl.from(".char-reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      }).from(
        btn,
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      );

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-navy-77)] text-white"
    >
      {/* 1. LAYER BACKGROUND - Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="bg-image w-full h-[130%] absolute -top-[15%] left-0 bg-cover bg-center grayscale mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-77)] via-[var(--color-navy-77)]/80 to-transparent" />
      </div>

      {/* 2. LAYER MARQUEE TEXT - B2B Keywords */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 select-none pointer-events-none opacity-5 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex">
          <span className="text-[20vw] font-black tracking-tighter leading-none mr-12">
            SUPPLY. QUALITY. PROFIT.
          </span>
          <span className="text-[20vw] font-black tracking-tighter leading-none mr-12">
            SUPPLY. QUALITY. PROFIT.
          </span>
        </div>
      </div>

      {/* 3. LAYER MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <p className="char-reveal text-[var(--color-cyan-77)] font-mono text-sm tracking-[0.5em] mb-8 uppercase">
          {t("closing.uptitle")}
        </p>

        <h2
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 mix-blend-overlay"
        >
          <div className="overflow-hidden">
            <span className="char-reveal inline-block">
              {t.raw("closing.titleLines")[0]}
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="char-reveal inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t.raw("closing.titleLines")[1]}
            </span>
          </div>
        </h2>

        {/* 4. CTA BUTTON */}
        <a
          ref={btnRef}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-cyan-77)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-dark-77"
        >
          <div className="absolute inset-0 rounded-full border border-[var(--color-cyan-77)] scale-100 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />

          <div className="relative z-10 flex flex-col items-center gap-2 text-white group-hover:text-[var(--color-navy-77)] transition-colors duration-300">
            <span className="text-lg font-bold tracking-widest uppercase mb-1">
              {t("closing.cta")}
            </span>
            <MessageCircle size={48} strokeWidth={1.5} />
            <div className="flex items-center gap-1 text-xs opacity-70 mt-2">
              <span>{t("closing.ctaSub")}</span>
              <ArrowUpRight size={12} />
            </div>
          </div>
        </a>

        {/* Footer */}
        <div className="mt-24 flex flex-col md:flex-row gap-8 items-center text-xs text-white/30 font-mono tracking-widest">
          <span>{t("closing.footerLeft")}</span>
          <span className="hidden md:inline">•</span>
          <span>{t("closing.footerRight")}</span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `,
        }}
      />
    </section>
  );
}
