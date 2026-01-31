"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const container = useRef(null);

  const items = [
    {
      icon: Activity,
      title: "Consistency",
      desc: "Kualitas material Grade A yang stabil di setiap batch produksi, tanpa kompromi.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      desc: "Ketahanan parts yang presisi dan diandalkan untuk kenyamanan berkendara harian.",
    },
    {
      icon: Handshake,
      title: "Trust",
      desc: "Transparansi bisnis dan dukungan penuh untuk mitra distributor kami.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Visi jangka panjang untuk tumbuh bersama dalam ekosistem otomotif modern.",
    },
  ];

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
              03 / Our Values
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Philosophy
            </h2>
          </div>
          <p className="text-slate-500 mt-4 md:mt-0 max-w-md text-right md:text-lg">
            Standard yang kami pegang teguh dalam setiap produk yang kami
            antarkan ke pasar.
          </p>
        </div>

        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="phil-card perspective-1000 group bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-[var(--color-navy-77)] hover:text-white transition-all duration-500 will-change-transform"
            >
              <div className="mb-8 p-4 bg-slate-50 rounded-lg w-fit group-hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-[var(--color-cyan-77)]" />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
