"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Scan, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductionTech() {
  const container = useRef(null);
  const horizontalRef = useRef(null);

  useGSAP(
    () => {
      // Horizontal Scroll / Sticky Effect Setup
      // Note: Di mobile jadi vertical stack biasa, desktop horizontal sticky
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let sections = gsap.utils.toArray(".horizontal-item");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.current.offsetWidth,
          },
        });
      });
    },
    { scope: container },
  );

  const items = [
    {
      title: "Automated Assembly",
      subtitle: "Robotic Precision",
      desc: "Lini perakitan otomatis mengurangi human-error dan memastikan konsistensi dimensi setiap komponen hingga mikron.",
      icon: Zap,
      img: "https://images.unsplash.com/photo-1537462713505-a1ce18d5ac58?q=80&w=3451&auto=format&fit=crop",
    },
    {
      title: "Precision Machining",
      subtitle: "CNC Technology",
      desc: "Menggunakan mesin CNC 5-axis mutakhir untuk finishing permukaan yang sempurna dan toleransi yang ketat.",
      icon: Scan,
      img: "https://images.unsplash.com/photo-1563205764-6e927063dd51?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Industrial Grade",
      subtitle: "Heavy Duty Output",
      desc: "Dirancang untuk durabilitas tinggi, mampu menahan beban kerja ekstrem sesuai standar OEM internasional.",
      icon: Cpu,
      img: "https://images.unsplash.com/photo-1635327376041-37d45889602a?q=80&w=3542&auto=format&fit=crop",
    },
  ];

  return (
    <section
      ref={container}
      className="relative bg-[#111] text-white overflow-hidden"
    >
      <div className="absolute top-10 left-10 z-10 md:fixed md:top-32 md:left-20 mix-blend-difference pointer-events-none">
        <h2 className="text-[var(--color-cyan-77)] font-bold tracking-widest uppercase mb-2">
          Technology
        </h2>
        <h3 className="text-4xl font-bold text-white">Production Line</h3>
      </div>

      <div
        ref={horizontalRef}
        className="flex flex-col md:flex-row h-auto md:h-screen w-[300%] md:w-[300%]"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="horizontal-item w-full h-screen relative flex items-center justify-center border-b md:border-r border-white/10 bg-[#111]"
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <div
                className={`w-full h-full bg-cover bg-center opacity-40 grayscale`}
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 p-10 max-w-2xl">
              <div className="mb-6 p-4 border border-[var(--color-cyan-77)] rounded-full w-fit">
                <item.icon className="w-10 h-10 text-[var(--color-cyan-77)]" />
              </div>
              <h4 className="text-xl text-[var(--color-cyan-77)] font-mono mb-2">
                {item.subtitle}
              </h4>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                {item.title}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
