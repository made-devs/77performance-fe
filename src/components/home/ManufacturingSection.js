"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M7 7h0v0" />
        <path d="M17 17h0v0" />
      </svg>
    ),
    title: "Industrial Scale Facility",
    desc: "Fasilitas puluhan ribu m² mencakup produksi, R&D, dan warehouse terpusat.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Automated Assembly",
    desc: "Sistem robotik otomatis menjamin konsistensi presisi di setiap unit.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 20v-6M12 4v2M6.5 7l-1.5 1.5M17.5 7l1.5 1.5M4 12h2M18 12h2M6.5 17l-1.5-1.5M17.5 17l1.5-1.5" />
      </svg>
    ),
    title: "Precision Machining",
    desc: "Teknologi CNC mutakhir untuk akurasi mikron dan performa komponen.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Multi-stage QC",
    desc: "Inspeksi berlapis dari bahan baku hingga final check sebelum pengiriman.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M2 12h20" />
        <path d="M2 12l5-5" />
        <path d="M2 12l5 5" />
      </svg>
    ),
    title: "R&D Innovation",
    desc: "Pengembangan berkelanjutan untuk desain dan durabilitas material.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Global OEM Standard",
    desc: "Dipercaya pasar global sebagai pengganti setara kualitas OEM.",
  },
];

export default function ManufacturingSection() {
  const container = useRef(null);
  const bgImage = useRef(null);
  const gridContainer = useRef(null);

  useGSAP(
    () => {
      // Parallax Effect
      gsap.to(bgImage.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ---- FIX: robust reveal for cards (avoid "stuck at opacity:0") ----
      const cards = gsap.utils.toArray(".feature-card");

      // Set initial hidden state in a controlled way
      gsap.set(cards, { autoAlpha: 0, y: 40 });

      const st = ScrollTrigger.create({
        trigger: gridContainer.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
        },
      });

      // Ensure ScrollTrigger calculates positions after layout/paint
      requestAnimationFrame(() => ScrollTrigger.refresh());

      // Fallback: if trigger never fires for any reason, don't keep it hidden forever
      // (e.g. very short pages / edge cases)
      setTimeout(() => {
        if (!st.isActive && !st.progress) {
          gsap.set(cards, {
            autoAlpha: 1,
            y: 0,
            clearProps: "transform,opacity,visibility",
          });
        }
      }, 1500);
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* --- PARALLAX BACKGROUND START --- */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <div
          ref={bgImage}
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src="/home2.png"
            alt="Factory Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Dark Overlay & Tech Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10" />
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* --- PARALLAX BACKGROUND END --- */}

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-3 border border-cyan-77/30 rounded-full bg-cyan-77/10 text-cyan-77 text-xs font-mulish font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Behind The Quality
          </span>
          <h2 className="text-4xl md:text-6xl font-mulish font-black text-white mb-6 leading-tight">
            Engineered at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-77 to-cyan-500">
              Industrial Scale
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mulish leading-relaxed">
            Kami tidak hanya merakit, kami memproduksi. Dengan fasilitas puluhan
            ribu meter persegi dan teknologi presisi, setiap komponen 77
            Performance lahir dari standar manufaktur kelas dunia.
          </p>
        </div>

        {/* Grid Cards */}
        <div
          ref={gridContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card group relative p-8 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md hover:bg-black/40 hover:border-cyan-77/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-77/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-start h-full">
                {/* Icon Box */}
                <div className="mb-6 p-3 rounded-lg bg-black/50 border border-white/10 text-cyan-77 group-hover:scale-110 group-hover:border-cyan-77 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  {f.icon}
                </div>

                <h4 className="font-mulish font-bold text-xl text-white mb-3 group-hover:text-cyan-77 transition-colors">
                  {f.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed font-mulish group-hover:text-gray-300">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
