"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const BrandPositioning = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const t = useTranslations("pageHome.brandPositioning");
  const points = t.raw("points");

  useGSAP(
    () => {
      // Reveal Text elements
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
      });

      // OPTIMASI: Kurangi scrub value & akan-change
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5, // Lebih rendah = lebih ringan (was 1.2)
          invalidateOnRefresh: true,
        },
      });

      // TAMBAHKAN: will-change untuk GPU acceleration
      gsap.set(imageRef.current, {
        willChange: "transform",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 min-h-dvh flex items-center justify-center bg-dark-77 overflow-hidden"
    >
      {/* Background Decor (Grid & Aero Flow) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0591be 1px, transparent 1px), linear-gradient(90deg, #0591be 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Dynamic Blue/Cyan Glow for continuity */}
      <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-navy-77/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80%] h-[60%] bg-gradient-to-tl from-cyan-77/15 to-transparent blur-[120px] pointer-events-none translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: STORYTELLING */}
          <div className="lg:col-span-5">
            <div className="reveal-text mb-4">
              <Badge text={t("badge")} />
            </div>

            <h2 className="reveal-text text-4xl lg:text-5xl font-mulish font-black text-white leading-[1.15] mb-8">
              {t("titleLine1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
                {t("titleLine2")}
              </span>
            </h2>

            <p className="reveal-text text-gray-300 text-lg leading-relaxed mb-8 font-mulish">
              {t("descriptionLead")}
              <strong className="text-white"> {t("brandName")}</strong>{" "}
              {t("descriptionTail")}
            </p>

            <div className="reveal-text border-l-4 border-cyan-77 pl-6 py-2 mb-10 bg-slate-50/50">
              <p className="text-white font-bold text-xl italic font-mulish leading-snug">
                “{t("quote")}”
              </p>
            </div>

            <div className="space-y-5">
              {points.map((item, i) => (
                <div key={i} className="reveal-text flex items-start group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-77 mr-4 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-wider group-hover:text-cyan-77 transition-colors font-mulish">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 font-mulish">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: VISUAL IDENTITY */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
              <div className="absolute inset-0 bg-dark-77/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <Image
                ref={imageRef}
                src="/gallery/gallery20.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover scale-110 transition-all duration-1000"
              />

              {/* Float Card */}
              <div className="absolute bottom-8 right-8 z-20 bg-dark-77/90 backdrop-blur-md border border-white/10 p-6 text-white rounded-xl shadow-2xl">
                <div className="text-3xl font-mulish font-black text-cyan-77 mb-1">
                  100%
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-80 font-mulish">
                  {t("complianceLabel")}
                </div>
              </div>
            </div>

            {/* Tech Decor Accent */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[url('/grid-pattern.png')] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

function Badge({ text }) {
  return (
    <span className="inline-block px-3 py-1 rounded-md bg-cyan-77/10 border border-cyan-77/20 text-cyan-77 font-mulish font-extrabold tracking-widest text-[10px] uppercase">
      {text}
    </span>
  );
}

export default BrandPositioning;
