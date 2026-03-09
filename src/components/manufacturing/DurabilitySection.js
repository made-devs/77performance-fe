"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DurabilitySection() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");

  useGSAP(
    () => {
      // Split reveal animation
      gsap.from(".left-panel", {
        xPercent: -50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      gsap.from(".right-list li", {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".right-list",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Panel: Visual Impact */}
          <div className="left-panel lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Image representing coating / raw material */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563290610-85f2b489a690?q=80&w=3019&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-77)] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-[var(--color-cyan-77)]" />
                  <span className="font-bold uppercase tracking-wider text-sm">
                    {t("durability.tag")}
                  </span>
                </div>
                <h3 className="text-3xl font-bold">
                  {t("durability.heading")}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Panel: Data */}
          <div className="lg:w-1/2">
            <h2 className="text-[var(--color-cyan-77)] font-bold tracking-widest uppercase mb-4">
              {t("durability.uptitle")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-navy-77)] mb-8">
              {t("durability.heading2")}
            </h3>
            <p className="text-slate-600 text-lg mb-10">
              {t("durability.paragraph")}
            </p>

            <ul className="right-list space-y-6">
              {t.raw("durability.list").map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between border-b border-slate-200 pb-4"
                >
                  <span className="text-slate-900 font-bold text-lg">
                    {item.title}
                  </span>
                  <span className="text-[var(--color-cyan-77)] font-mono font-medium">
                    {item.val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
