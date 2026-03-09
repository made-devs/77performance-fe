"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorTerritory() {
  const container = useRef(null);
  const t = useTranslations("pageDistributor.territory");

  useGSAP(
    () => {
      gsap.fromTo(
        ".map-point",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-[var(--color-cyan-77)] text-white overflow-hidden"
    >
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">
              {t("label")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-md">
            {t("description")}
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* Visual representation of territory lock */}
          <div className="relative w-80 h-80 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-white/5 rounded-full animate-ping opacity-20" />
            <div className="text-center">
              <h3 className="text-5xl font-black mb-1">{t("securedValue")}</h3>
              <p className="uppercase tracking-widest text-sm font-bold">
                {t("securedLabel")}
              </p>
            </div>

            {/* Decorative floating points */}
            <div className="map-point absolute top-10 right-10 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />
            <div className="map-point absolute bottom-20 left-10 w-3 h-3 bg-white/70 rounded-full" />
            <div className="map-point absolute top-1/2 -right-4 w-6 h-6 bg-[var(--color-navy-77)] border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
