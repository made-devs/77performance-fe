"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function AboutWhoWeAre() {
  const container = useRef(null);
  const t = useTranslations("pageAbout.whoWeAre");

  const statements = t.raw("statements") || [];
  const features = t.raw("features") || [];

  useGSAP(
    () => {
      // Animasi Garis Dekorasi
      gsap.from(".divider-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Animasi Text Utama (Highlight)
      gsap.from(".main-statement span", {
        opacity: 0.1,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".main-statement",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1, // Text menyala sesuai scroll
        },
      });

      // Animasi Paragraf Detail
      gsap.from(".detail-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".details-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-dark-77 text-[var(--color-navy-77)] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label Section */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-[var(--color-cyan-77)]">
            {t("label")}
          </span>
          <div className="divider-line h-[1px] flex-1 bg-slate-200" />
        </div>

        {/* Big Statement - Scroll Scrubbed */}
        <h2 className="main-statement text-4xl md:text-7xl font-bold leading-[1.1] mb-20 max-w-5xl">
          {statements.map((stmt, idx) => (
            <React.Fragment key={idx}>
              <span
                className={stmt.isCyan ? "text-[var(--color-cyan-77)]" : ""}
              >
                {stmt.text}
              </span>
              {idx === 4 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
        </h2>

        {/* Detailed Content */}
        <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/10 pt-12">
          <div className="detail-text">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {features[0]?.title}
            </h3>
            <p
              className="text-slate-300 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: features[0]?.desc || "" }}
            />
          </div>
          <div className="detail-text">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {features[1]?.title}
            </h3>
            <p
              className="text-slate-300 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: features[1]?.desc || "" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
