"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorValueProp() {
  const container = useRef(null);
  const t = useTranslations("pageDistributor.valueProp");
  const line1 = t.raw("line1") || [];
  const line2 = t.raw("line2") || [];

  useGSAP(
    () => {
      gsap.fromTo(
        ".value-text span",
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            end: "center center",
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 md:py-32 bg-dark-77 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h2 className="value-text text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-[var(--color-navy-77)]">
          {line1.map((text, idx) => (
            <span key={`line1-${idx}`}>{text}</span>
          ))}
          <br className="my-4 block" />
          {line2.map((text, idx) => (
            <span key={`line2-${idx}`} className="text-[var(--color-cyan-77)]">
              {text}
            </span>
          ))}
        </h2>
        <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
