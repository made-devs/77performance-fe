"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Warehouse, Microscope, FileCheck } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingFacility() {
  const container = useRef(null);
  const t = useTranslations("pageManufacturing");
  const cards = t.raw("facility.cards");
  const ICONS = [Factory, Microscope, FileCheck, Warehouse];

  useGSAP(
    () => {
      // 1. Text Animation (Updated to fromTo for safety)
      gsap.fromTo(
        ".facility-text",
        { y: 50, opacity: 0, autoAlpha: 0 },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".text-wrapper",
            start: "top 80%",
          },
        },
      );

      // 2. Cards Animation (Wrapper Strategy Fix)
      // Menggunakan .spec-card-wrapper untuk animasi masuk
      gsap.fromTo(
        ".spec-card-wrapper",
        {
          y: 60, // Mulai dari bawah
          opacity: 0,
          autoAlpha: 0, // Mencegah glitch visual sebelum animasi mulai
        },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15, // Efek muncul bergantian
          ease: "back.out(1.2)", // Sedikit efek memantul halus agar premium
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 85%", // Mulai animasi saat grid masuk 15% dari bawah layar
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-white text-[var(--color-navy-77)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 text-wrapper">
          <div>
            <h2 className="facility-text opacity-0 text-[var(--color-cyan-77)] font-bold tracking-widest uppercase mb-4">
              {t("facility.tag")}
            </h2>
            <h3 className="facility-text opacity-0 text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t("facility.heading")}
            </h3>
            <p className="facility-text opacity-0 text-lg text-slate-600 leading-relaxed">
              {t("facility.paragraph")}
            </p>
          </div>
          <div className="facility-text opacity-0 relative h-[400px] w-full rounded-2xl overflow-hidden group shadow-2xl">
            {/* Visual Real Factory Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565439398534-7389db01df34?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[var(--color-navy-77)]/20 mix-blend-multiply" />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, idx) => (
            // WRAPPER STRATEGY:
            // Div luar (.spec-card-wrapper) menangani animasi GSAP masuk (Translation/Opacity)
            // Div dalam menangani Styling, Hover, dan Shadow.
            // Ini mencegah konflik antara GSAP Transform dan CSS Transition Hover.
            <div
              key={idx}
              className="spec-card-wrapper opacity-0 h-full w-full"
            >
              <div className="h-full w-full p-8 border border-slate-200 bg-slate-50 flex flex-col items-center text-center hover:border-[var(--color-cyan-77)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg group cursor-default">
                <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const Icon = ICONS[idx] || Factory;
                    return (
                      <Icon className="w-8 h-8 text-[var(--color-cyan-77)]" />
                    );
                  })()}
                </div>
                <h4 className="text-xl font-bold mb-2 text-[var(--color-navy-77)]">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
