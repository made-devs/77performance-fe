"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsWarranty() {
  const container = useRef(null);
  const badgeRef = useRef(null);
  const t = useTranslations("pageProducts");
  const locale = useLocale();
  const warrantyItems = t.raw("warranty.items");
  useGSAP(
    () => {
      // Rotasi Badge saat Scroll
      gsap.to(badgeRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "bottom top",
          end: "top bottom",
          scrub: 1, // Putar badge sesuai kecepatan scroll user
        },
      });

      // Content Fade In
      gsap.from(".warranty-item", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".warranty-content",
          start: "top 70%",
        },
      });
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative w-full flex flex-col lg:flex-row bg-white overflow-hidden"
    >
      {/* LEFT SIDE: Visual Anchor (Navy) */}
      <div className="lg:w-1/2 bg-[var(--color-navy-77)] text-white relative min-h-[500px] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 p-12 text-center">
          {/* GIANT ROTATING BADGE */}
          <div
            ref={badgeRef}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 flex items-center justify-center"
          >
            {/* SVG Text Circular */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute animate-[spin_10s_linear_infinite_reverse] opacity-30"
            >
              <path
                id="curve"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[10px] font-bold fill-white tracking-widest uppercase">
                <textPath href="#curve">
                  Official Warranty • Genuine Parts • 77 Performance •
                </textPath>
              </text>
            </svg>

            {/* Center Icon */}
            <ShieldCheck
              size={80}
              strokeWidth={1}
              className="text-[var(--color-cyan-77)]"
            />
            <div className="absolute inset-0 border border-white/20 rounded-full scale-110" />
            <div className="absolute inset-0 border border-double border-white/20 rounded-full scale-125" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">
            {t("warranty.leftTitle")
              .split(" ")
              .map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 ? <br /> : null}
                </React.Fragment>
              ))}
            <span className="text-[var(--color-cyan-77)]"></span>
          </h2>
          <p className="text-white/60 font-mono text-sm tracking-widest uppercase">
            {t("warranty.termNote")}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Content (White) */}
      <div className="lg:w-1/2 flex items-center bg-white">
        <div className="warranty-content p-12 lg:p-24 w-full">
          <span className="inline-block py-1 px-3 border border-[var(--color-navy-77)] rounded-full text-[var(--color-navy-77)] text-xs font-bold tracking-widest uppercase mb-8">
            {t("warranty.tag")}
          </span>

          <h3 className="warranty-item text-4xl md:text-5xl font-black text-[var(--color-navy-77)] tracking-tighter mb-8 leading-tight">
            {t("warranty.heading")}
          </h3>

          <p className="warranty-item text-lg text-slate-600 leading-relaxed font-light mb-12 max-w-lg">
            {t("warranty.paragraph")}
          </p>

          <div className="space-y-6">
            {(warrantyItems || []).map((item, i) => (
              <div
                key={i}
                className="warranty-item group flex items-start gap-5 p-4 hover:bg-slate-50 rounded-xl transition-colors duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-cyan-77)]/10 text-[var(--color-cyan-77)] flex items-center justify-center group-hover:bg-[var(--color-cyan-77)] group-hover:text-white transition-all">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-navy-77)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="warranty-item mt-12 px-8 py-4 bg-[var(--color-navy-77)] text-white font-bold tracking-widest uppercase text-sm hover:bg-[var(--color-cyan-77)] transition-all duration-300 w-full md:w-auto">
            {t("warranty.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
