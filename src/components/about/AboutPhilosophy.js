"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, TrendingUp, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const container = useRef(null);
  const t = useTranslations("pageAbout.philosophy");
  const items = t.raw("items") || [];

  const iconMap = {
    Activity,
    ShieldCheck,
    Handshake,
    TrendingUp,
  };

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".phil-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Cards Flip In Effect
      gsap.fromTo(
        ".phil-card",
        {
          rotateX: 90, // Mulai dari posisi rebah
          opacity: 0,
          y: 50,
        },
        {
          rotateX: 0,
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: ".grid-container",
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
      className="py-32 bg-[#f8fafc] text-[var(--color-navy-77)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 phil-header">
          <div>
            <span className="text-[var(--color-cyan-77)] font-bold tracking-widest uppercase text-sm mb-2 block">
              {t("label")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-slate-500 mt-4 md:mt-0 max-w-md text-right md:text-lg">
            {t("desc")}
          </p>
        </div>

        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Activity;

            return (
              <div
                key={idx}
                className="phil-card perspective-1000 group bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-[var(--color-navy-77)] hover:text-white transition-all duration-500 will-change-transform"
              >
                <div className="mb-8 p-4 bg-slate-50 rounded-lg w-fit group-hover:bg-white/10 transition-colors">
                  <Icon className="w-8 h-8 text-[var(--color-cyan-77)]" />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
