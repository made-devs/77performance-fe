"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Gift, MonitorPlay, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorSupport() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".support-item",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".support-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  const supports = [
    {
      title: "Free Buffer Stock",
      desc: "Program buffer suspension khusus awal tahun.",
      icon: Package,
    },
    {
      title: "Smart Bundling",
      desc: "Paket penjualan moving parts + slow moving.",
      icon: Gift,
    },
    {
      title: "Marketing Kit",
      desc: "Catalog, Banner, Apparel & Digital Assets.",
      icon: MonitorPlay,
    },
    {
      title: "Priority Shipping",
      desc: "Jalur logistik prioritas untuk restock distributor.",
      icon: Truck,
    },
  ];

  return (
    <section
      ref={container}
      className="py-24 bg-slate-50 text-[var(--color-navy-77)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Promotion & Support System
          </h2>
          <p className="text-slate-600">
            Kami tidak membiarkan Anda berjuang sendirian. Support system kami
            dirancang untuk mengakselerasi penetrasi pasar Anda.
          </p>
        </div>

        <div className="support-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {supports.map((item, idx) => (
            <div
              key={idx}
              className="support-item flex items-start gap-6 bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all"
            >
              <div className="p-4 bg-slate-100 rounded-full text-[var(--color-navy-77)]">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
