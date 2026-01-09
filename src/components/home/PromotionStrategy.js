"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA SOURCE ---

const MAIN_PROMO = {
  title: "Buy Shockbreaker / Racksteer",
  highlight: "FREE Trisev Buffer Suspension",
  subtitle: "Program Utama",
  desc: "Setiap pembelian unit Shockbreaker dan/atau Racksteer 77 Performance mendapatkan Bonus Langsung Trisev Buffer Suspension. Tingkatkan kenyamanan & stabilitas tanpa biaya tambahan.",
  tags: ["Shockbreaker", "Racksteer", "Bundling Package"],
};

const ADDITIONAL_PROGRAMS = [
  {
    id: 1,
    title: "Gratis Materi Digital",
    desc: "Akses foto, poster, & konten sosmed resmi HD siap posting untuk dukung penjualan.",
    icon: "image",
  },
  {
    id: 2,
    title: "Endorse Video Zack Lee",
    desc: "Video promosi eksklusif bengkel & toko langsung oleh Zack Lee (S&K Berlaku).",
    icon: "star",
  },
  {
    id: 3,
    title: "Akses Video Demo",
    desc: "Video edukasi produk & demo instalasi resmi untuk bantu closing di bengkel.",
    icon: "play",
  },
  {
    id: 4,
    title: "Diskon Produk 30%",
    desc: "Potongan harga hingga 30% untuk item tertentu selama periode promo.",
    icon: "percent",
  },
  {
    id: 5,
    title: "Harga Paket Bundling",
    desc: "Harga khusus pembelian paket bundling dengan margin profit lebih menarik.",
    icon: "box",
  },
  {
    id: 6,
    title: "Free Ongkir Nasional",
    desc: "Gratis biaya pengantaran pembelian promo ke seluruh Indonesia (Sesuai ketentuan).",
    icon: "truck",
  },
  {
    id: 7,
    title: "Prioritas Pengiriman",
    desc: "Pesanan promo mendapatkan jalur prioritas proses packing dan pengiriman.",
    icon: "fast",
  },
  {
    id: 8,
    title: "Akses Promo Awal",
    desc: "Info launching produk baru & promo lebih awal dibanding pasar umum.",
    icon: "lock",
  },
  {
    id: 9,
    title: "Diskon 10% di Official Store",
    desc: "Dapatkan diskon 10% untuk setiap pembelian melalui official7performance (syarat & ketentuan berlaku).",
    icon: "store",
  },
];

const PromotionStrategy = () => {
  const containerRef = useRef(null);
  const hudCircleRef = useRef(null);

  useGSAP(
    () => {
      // 1. Text Entrance
      gsap.from(".promo-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // 2. Main Card Entrance
      gsap.from(".main-card-promo", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".main-card-wrapper",
          start: "top 80%",
        },
      });

      // 3. Grid Items Stagger
      gsap.from(".additional-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: ".additional-grid",
          start: "top 85%",
        },
      });

      // 4. Continuous Animations
      gsap.to(hudCircleRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-slate-900 overflow-hidden text-white"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          ref={hudCircleRef}
          className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] border border-cyan-500/10 border-dashed rounded-full"
        />
        <div className="absolute top-1/4 left-[-100px] w-[400px] h-[400px] bg-blue-600/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-16">
          <div className="promo-text flex items-center gap-2 mb-4">
            <div className="h-[2px] w-10 bg-cyan-500" />
            <span className="text-cyan-400 font-bold tracking-[0.15em] text-sm uppercase font-mulish">
              Product Promotion Strategy
            </span>
          </div>
          <h2 className="promo-text text-4xl lg:text-5xl font-black font-mulish leading-tight">
            Promo Relevan Fungsi. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Bukan Sekadar Gimmick.
            </span>
          </h2>
          <p className="promo-text mt-6 text-slate-400 text-lg max-w-2xl font-mulish leading-relaxed">
            Strategi kami dirancang untuk memberi <b>Value Nyata</b>. Ketika
            Anda menjual produk utama, kami memberikan produk pendukung
            (komplementer) gratis untuk meningkatkan kepuasan pelanggan akhir.
          </p>
        </div>

        {/* --- HERO: PROGRAM UTAMA --- */}
        <div className="main-card-wrapper mb-16">
          <div className="main-card-promo relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl p-1 overflow-hidden shadow-2xl shadow-cyan-900/20">
            {/* Inner Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent pointer-events-none" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-[22px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
              {/* Content Left */}
              <div className="flex-1 w-full relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {MAIN_PROMO.subtitle}
                </div>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 font-mulish">
                  {MAIN_PROMO.title}
                </h3>
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 font-mulish leading-tight">
                  + {MAIN_PROMO.highlight}
                </div>

                <p className="text-slate-400 text-base lg:text-lg mb-8 leading-relaxed max-w-xl border-l-4 border-slate-700 pl-4">
                  {MAIN_PROMO.desc}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Berlaku Untuk:
                  {MAIN_PROMO.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* --- NEW: ILLUSTRATION RIGHT (UPDATED) --- */}
              <div className="w-full lg:w-[450px] h-[320px] relative rounded-2xl overflow-hidden group ring-1 ring-white/10 shadow-2xl">
                {/* 1. Backdrop Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/20 blur-[100px] group-hover:bg-cyan-400/30 transition-colors duration-700" />

                {/* 2. Main Image (Stable Unsplash URL - High Quality) */}
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
                  alt="Automotive Suspension Parts"
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                />

                {/* 3. Tech Overlays */}
                {/* Dark Gradient from bottom for text readability */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />

                {/* Scanline decoration */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-30" />

                {/* 4. Floating Info Card (Glassmorphism) */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-lg group-hover:border-cyan-500/30 transition-colors">
                    <div>
                      <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                        Limited Offer
                      </p>
                      <p className="text-white font-bold font-mulish text-sm">
                        Shockbreaker + Buffer Kit
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GRID: PROGRAM TAMBAHAN --- */}
        <div>
          <div className="flex items-end justify-between mb-8 px-2">
            <h3 className="text-2xl font-bold font-mulish text-white">
              Program Tambahan
            </h3>
            <span className="text-sm text-slate-500 hidden md:block">
              {ADDITIONAL_PROGRAMS.length} Keuntungan Mitra
            </span>
          </div>

          <div className="additional-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADDITIONAL_PROGRAMS.map((item) => (
              <div
                key={item.id}
                className="additional-card group relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-750 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>

                  <h4 className="text-lg font-bold text-slate-100 mb-2 font-mulish group-hover:text-cyan-300 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-mulish">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ICON HELPER ---
function getIcon(name) {
  const className = "w-6 h-6";
  switch (name) {
    case "image":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          className={`${className} fill-current`}
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "play":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "percent":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "box":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    case "truck":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      );
    case "fast":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2m8 0H4"
          />
        </svg>
      );
    case "store":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9.5V7a2 2 0 012-2h14a2 2 0 012 2v2.5M3 9.5l1.6 9.5A2 2 0 006.56 21h10.88a2 2 0 001.96-1.99L21 9.5M3 9.5h18"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default PromotionStrategy;
