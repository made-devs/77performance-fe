"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorQualification() {
  const container = useRef(null);
  const t = useTranslations("pageDistributor.qualification");

  const quals = t.raw("items") || [];

  useGSAP(
    () => {
      gsap.fromTo(
        ".qual-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".qual-list",
            start: "top 85%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-dark-77 flex flex-col md:flex-row"
    >
      <div className="md:w-1/3 bg-neutral-900 p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-[var(--color-navy-77)] font-bold mb-4 text-3xl">
          {t("title")}
        </h2>
        <p className="text-slate-500">{t("description")}</p>
      </div>
      <div className="md:w-2/3 p-12 md:p-20 flex items-center">
        <ul className="qual-list space-y-6 w-full max-w-2xl">
          {quals.map((item, idx) => (
            <li
              key={idx}
              className="qual-item flex items-center gap-4 text-lg md:text-xl font-medium text-[var(--color-navy-77)] border-b border-slate-100 pb-4"
            >
              <CheckCircle2 className="text-[var(--color-cyan-77)] min-w-[24px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
