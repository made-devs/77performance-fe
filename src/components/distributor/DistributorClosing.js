"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorClosing() {
  const container = useRef(null);
  const t = useTranslations("pageDistributor.closing");

  useGSAP(
    () => {
      gsap.fromTo(
        ".closing-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 bg-[var(--color-navy-77)] text-white text-center relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="closing-text text-4xl md:text-7xl font-bold tracking-tighter mb-6">
          {t("title")}
        </h2>
        <p className="closing-text text-xl md:text-2xl text-[var(--color-cyan-77)] font-light max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
