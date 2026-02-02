"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hexagon, Layers, ShieldCheck, Zap, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    id: "01",
    title: "PREMIUM MATERIALS",
    short: "FORGED ALLOY",
    desc: "Baja paduan tempa & karet grade-A. Struktur molekul padat anti-fatik.",
    icon: Layers,
    bg: "bg-[#145591]", // Navy 77
    text: "text-white",
    border: "border-white/20",
  },
  {
    id: "02",
    title: "ENGINEERING DISCIPLINE",
    short: "MICRON PRECISION",
    desc: "Toleransi machining <0.05mm pada setiap pivot point untuk handling presisi.",
    icon: Zap,
    bg: "bg-[#0591be]", // Cyan 77
    text: "text-white",
    border: "border-white/20",
  },
  {
    id: "03",
    title: "GLOBAL STANDARDS",
    short: "ISO/TS CERTIFIED",
    desc: "Proses manufaktur bersertifikasi ISO/TS 16949 melampaui standar OEM.",
    icon: Hexagon,
    bg: "bg-slate-100", // Light
    text: "text-[#145591]",
    border: "border-[#145591]/20",
  },
  {
    id: "04",
    title: "LONGEVITY FOCUS",
    short: "LONG LIFESPAN",
    desc: "Didesain untuk masa pakai jangka panjang (Extended Service Life).",
    icon: ShieldCheck,
    bg: "bg-[#111111]", // Dark
    text: "text-white",
    border: "border-white/20",
  },
];

export default function ProductsPhilosophy() {
  const container = useRef(null);

  // State untuk melacak panel mana yang aktif (default: panel pertama)
  const [activeIdx, setActiveIdx] = useState(0);

  // Fungsi helper untuk menentukan lebar panel
  // Panel aktif dapat porsi besar (flex-grow), yang lain kecil
  const getFlexClass = (index) => {
    return activeIdx === index ? "flex-[3_3_0%]" : "flex-[1_1_0%]";
  };

  return (
    <section
      ref={container}
      className="relative w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-slate-900"
    >
      {content.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIdx(index)} // Trigger expand saat hover
          className={`
            relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden
            ${getFlexClass(index)} 
            ${item.bg} 
            ${item.text}
            group border-b md:border-b-0 md:border-r ${item.border}
          `}
        >
          {/* Background Number (Visual Texture) */}
          <span
            className={`
                absolute bottom-[-5%] right-[-1%] text-[20vh] font-black leading-none opacity-5 md:opacity-10 select-none transition-transform duration-700
                ${activeIdx === index ? "scale-100 translate-x-0" : "scale-75 translate-x-10"}
            `}
          >
            {item.id}
          </span>

          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            {/* Top Section: Icon & Compact Title */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-sm opacity-60 tracking-widest">
                  {item.id}
                </span>
                {/* Indikator Aktif (Icon Plus berputar) */}
                <Plus
                  className={`transition-transform duration-500 opacity-50 ${activeIdx === index ? "rotate-45 opacity-100" : ""}`}
                  size={24}
                />
              </div>

              {/* Icon Utama (Hanya muncul jelas saat aktif atau layout mobile) */}
              <div
                className={`mt-4 transform transition-all duration-500 ${activeIdx === index ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-50 scale-75 md:opacity-0"}`}
              >
                <item.icon size={48} strokeWidth={1} />
              </div>
            </div>

            {/* Bottom Section: Title & Description */}
            <div className="md:min-w-[400px]">
              {" "}
              {/* Min-width agar teks tidak hancur saat panel menyempit */}
              {/* Judul Pendek (Mobile) */}
              <h3
                className={`
                    md:hidden text-2xl font-bold uppercase tracking-tighter mb-2
                    ${activeIdx === index ? "hidden" : "block"}
                `}
              >
                {item.short}
              </h3>
              {/* Vertical Text (Desktop, collapsed only) */}
              <h3
                className={`
                    absolute bottom-32 left-8 origin-bottom-left -rotate-90 text-4xl font-black tracking-tighter whitespace-nowrap opacity-40 transition-opacity duration-300
                    ${activeIdx === index ? "hidden" : "hidden md:block"}
                `}
              >
                {item.short}
              </h3>
              {/* Expanded Content (Judul Besar + Deskripsi) */}
              <div
                className={`
                    overflow-hidden transition-all duration-500 ease-out
                    ${activeIdx === index ? "opacity-100 max-h-[300px] translate-y-0" : "opacity-0 max-h-0 translate-y-10"}
                `}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-4 uppercase">
                  {item.title}
                </h2>
                <p
                  className={`text-lg md:text-xl font-light leading-relaxed max-w-md opacity-90`}
                >
                  {item.desc}
                </p>

                <button
                  className={`mt-8 px-6 py-2 border rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors ${item.border}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Overlay Gelap saat tidak aktif (Fokus visual ke panel aktif) */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-700 ${activeIdx === index ? "opacity-0" : "opacity-100 hover:opacity-0"}`}
          />
        </div>
      ))}
    </section>
  );
}
