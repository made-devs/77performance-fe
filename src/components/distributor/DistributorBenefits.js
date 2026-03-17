"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, DollarSign, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorBenefits() {
  const container = useRef(null);
  const t = useTranslations("pageDistributor.benefits");

  useGSAP(
    () => {
      gsap.fromTo(
        ".benefit-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".grid-benefits",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  const icons = [TrendingUp, DollarSign, Globe, ShieldCheck];
  const benefits = (t.raw("items") || []).map((item, idx) => ({
    ...item,
    icon: icons[idx] || TrendingUp,
  }));

  return (
    <section
      ref={container}
      className="py-24 bg-gradient-to-b from-[var(--color-navy-77)] to-[#0a2e4d] text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-[var(--color-cyan-77)] font-bold tracking-widest uppercase mb-2">
              {t("label")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">{t("title")}</h3>
          </div>
          <p className="text-slate-300 mt-4 md:mt-0 max-w-md md:text-right">
            {t("description")}
          </p>
        </div>

        <div className="grid-benefits grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="benefit-card bg-dark-77/5 border border-white/10 p-8 rounded-2xl hover:bg-dark-77/10 transition-colors duration-300"
            >
              <div className="bg-[var(--color-cyan-77)] w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-white shadow-lg shadow-cyan-500/30">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
