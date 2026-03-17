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
      if (!container.current) return;

      const triggers = [];

      // Rotasi Badge saat Scroll (safely create a scrollTrigger-backed tween)
      if (badgeRef.current) {
        const tw = gsap.to(badgeRef.current, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "bottom top",
            end: "top bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        if (tw && tw.scrollTrigger) triggers.push(tw.scrollTrigger);
      }

      // Content Fade In (scoped to this container)
      const contentRoot =
        container.current.querySelector(".warranty-content") ||
        container.current;
      const items = Array.from(contentRoot.querySelectorAll(".warranty-item"));
      if (items.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: contentRoot,
            start: "top 70%",
            invalidateOnRefresh: true,
          },
        });

        tl.from(items, {
          y: 30,
          opacity: 0,
          stagger: 0.18,
          duration: 0.9,
          ease: "power3.out",
        });

        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
      }

      // Force a refresh on mount to ensure ScrollTrigger measures correctly
      const refresh = () => ScrollTrigger.refresh();
      const rafId = requestAnimationFrame(refresh);
      window.addEventListener("load", refresh);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("load", refresh);
        triggers.forEach((t) => t && t.kill && t.kill());
      };
    },
    { scope: container, dependencies: [locale] },
  );

  return (
    <section
      ref={container}
      className="relative w-full flex flex-col lg:flex-row bg-[#0a0a0a] overflow-hidden"
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
      <div className="lg:w-1/2 flex items-center bg-gradient-to-b from-[#145591] to-[#021526] relative z-10">
        <div className="absolute inset-0 bg-[#0a0a0a]/30 mix-blend-overlay pointer-events-none" />
        <div className="warranty-content p-12 lg:p-24 w-full relative z-10">
          <span className="inline-block py-1 px-3 border border-cyan-400/50 bg-[#021526]/50 rounded-full text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
            {t("warranty.tag")}
          </span>

          <h3 className="warranty-item text-4xl md:text-5xl font-black font-mulish text-white tracking-tighter mb-8 leading-tight drop-shadow-md">
            {t("warranty.heading")}
          </h3>

          <p className="warranty-item text-lg text-slate-200 leading-relaxed font-light font-mulish mb-12 max-w-lg drop-shadow-md">
            {t("warranty.paragraph")}
          </p>

          <div className="space-y-6">
            {(warrantyItems || []).map((item, i) => (
              <div
                key={i}
                className="warranty-item group flex items-start gap-5 p-4 hover:bg-[#0a0a0a]/40 backdrop-blur-sm rounded-xl transition-all duration-300 border border-transparent hover:border-cyan-77/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
              >
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-900/40 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-[#0a0a0a] transition-all duration-300 border border-cyan-77/20">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-mulish text-white group-hover:text-cyan-300 transition-colors mb-1 drop-shadow-md">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 font-light drop-shadow-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="warranty-item mt-12 px-8 py-4 bg-cyan-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-cyan-400 hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 w-full md:w-auto shadow-lg">
            {t("warranty.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
