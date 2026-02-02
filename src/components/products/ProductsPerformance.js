"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Gauge, Activity, Wind } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: "01",
    metric: "0.02s",
    label: "VALVE RESPONSE",
    desc: "Katup piston shockbreaker bereaksi instan terhadap perubahan permukaan jalan, menghilangkan lag pada damping.",
    bg: "bg-[#145591]", // Navy 77
    text: "text-white",
    accent: "text-[#0591be]",
    icon: Gauge,
  },
  {
    id: "02",
    metric: "98%",
    label: "VIBRATION LOSS",
    desc: "Material bushing polyurethane menyerap frekuensi getaran mikro, memisahkan kabin dari kekasaran aspal.",
    bg: "bg-[#0591be]", // Cyan 77
    text: "text-white",
    accent: "text-white/60",
    icon: Activity,
  },
  {
    id: "03",
    metric: "ZERO",
    label: "BODY ROLL",
    desc: "Geometri stabilizer link yang presisi menjaga sasis tetap datar saat manuver tikungan tajam.",
    bg: "bg-white", // White
    text: "text-[#145591]",
    accent: "text-[#0591be]",
    icon: Wind,
  },
];

export default function ProductsPerformance() {
  const container = useRef(null);
  const [activeCtx, setActiveCtx] = useState(1); // Default panel tengah aktif

  useGSAP(
    () => {
      // ANIMASI SEDERHANA & AMAN:
      // Kita tidak menganimasikan Panel Container (.perf-panel) supaya background warna selalu MUNCUL duluan.
      // Kita hanya menganimasikan konten teks di dalamnya (.anim-entry).

      const elements = gsap.utils.toArray(".anim-entry");

      gsap.from(elements, {
        y: 30, // Geser dari bawah sedikit
        opacity: 0, // Fade in
        duration: 0.8,
        stagger: 0.1, // Muncul berurutan
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%", // Muncul saat section sudah masuk 30% ke layar
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col md:flex-row bg-black"
    >
      {panels.map((panel, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveCtx(idx)}
          className={`
            perf-panel relative flex flex-col justify-between overflow-hidden 
            transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${panel.bg} ${panel.text}
            ${activeCtx === idx ? "flex-[3_3_0%]" : "flex-[1_1_0%]"} 
            group cursor-pointer border-b md:border-b-0 md:border-r border-black/10
          `}
        >
          {/* 1. BACKGROUND TEXTURE */}
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none" />

          {/* 2. GIANT BACKGROUND NUMBER */}
          <span className="absolute -bottom-20 -right-20 text-[30vh] font-black leading-none opacity-10 select-none tracking-tighter mix-blend-overlay">
            {panel.id}
          </span>

          {/* 3. TOP CONTENT */}
          <div className="p-8 md:p-12 relative z-10 anim-entry">
            {" "}
            {/* Added anim-entry */}
            <div className="flex justify-between items-start">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                <panel.icon size={32} strokeWidth={1} />
              </div>
              <ArrowUpRight
                className={`transition-all duration-500 ${activeCtx === idx ? "opacity-100 rotate-45" : "opacity-30"}`}
                size={32}
              />
            </div>
            <div
              className={`mt-12 transition-all duration-500 ${activeCtx === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <span
                className={`font-mono text-sm tracking-[0.3em] uppercase block mb-2 ${panel.accent}`}
              >
                PERFORMANCE METRIC
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                {panel.label}
              </h3>
            </div>
          </div>

          {/* 4. BOTTOM HERO CONTENT */}
          <div className="p-8 md:p-12 relative z-10 mt-auto anim-entry">
            {" "}
            {/* Added anim-entry */}
            {/* Metric Besar */}
            <h2
              className={`
                font-black tracking-tighter transition-all duration-700
                ${activeCtx === idx ? "text-[15vw] md:text-[10vw] leading-[0.8]" : "text-[10vw] md:text-[6vw] opacity-50"}
            `}
            >
              {panel.metric}
            </h2>
            {/* Deskripsi */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${activeCtx === idx ? "max-h-48 opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}
            `}
            >
              <p className="text-lg md:text-xl font-light leading-relaxed max-w-lg opacity-90 border-l-2 border-current pl-6">
                {panel.desc}
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm font-bold tracking-widest uppercase opacity-70">
                <div className="h-[2px] w-8 bg-current" />
                Tech Specs
              </div>
            </div>
          </div>

          {/* Overlay Gelap */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${activeCtx === idx ? "opacity-0" : "opacity-100 hover:opacity-0"}`}
          />
        </div>
      ))}
    </section>
  );
}
