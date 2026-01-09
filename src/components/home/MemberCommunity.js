"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA SOURCE ---
const BENEFITS = [
  {
    id: 1,
    title: "Grup Eksklusif Member",
    desc: "Akses ke komunitas tertutup sesama pebisnis bengkel & toko.",
    icon: "users",
  },
  {
    id: 2,
    title: "Update Promo Lebih Cepat",
    desc: "Jadilah yang pertama tahu tentang produk baru dan campaign diskon.",
    icon: "lightning",
  },
  {
    id: 3,
    title: "Info Training & Edukasi",
    desc: "Materi teknis dan strategi bisnis untuk upgrade skill tim Anda.",
    icon: "book",
  },
  {
    id: 4,
    title: "Networking Nasional",
    desc: "Koneksi luas dengan jaringan bengkel & toko sparepart se-Indonesia.",
    icon: "globe",
  },
  {
    id: 5,
    title: "Undangan Event & Campaign",
    desc: "Prioritas undangan untuk gathering, pameran, dan event 77 Performance.",
    icon: "ticket",
  },
  {
    id: 6,
    title: "Voucher Bengkel Mitra",
    desc: "Insentif khusus berupa voucher promo yang bisa digunakan mitra.",
    icon: "gift",
  },
];

const MemberCommunity = () => {
  const containerRef = useRef(null);

  // --- ANIMASI DINONAKTIFKAN SEMENTARA UNTUK DEBUGGING ---
  /*
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Header Reveal
      tl.from(".comm-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 2. Central Ecosystem Badge Pop (Animation scale & rotate)
      tl.from(
        ".ecosystem-badge",
        {
          scale: 0,
          opacity: 0,
          rotation: -45,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // 3. Connectors Grow (Garis penghubung tumbuh keluar)
      tl.from(".connector-line", {
        scaleX: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        // Origin dinamis diatur di CSS, tapi default growth
        ease: "power2.inOut",
      });

      // 4. Cards Pop Up
      tl.from(
        ".benefit-card",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );

      // 5. Footer Text Slide In
      tl.from(".comm-footer", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );
  */

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden text-slate-900"
    >
      {/* --- BACKGROUND PATTERN (Subtle Tech Grid) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="comm-header inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest font-mulish">
              Exclusive Access
            </span>
          </div>

          <h2 className="comm-header text-4xl lg:text-5xl font-black font-mulish mb-6 leading-tight text-slate-900">
            77 Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Member Community
            </span>
          </h2>

          <p className="comm-header text-lg text-slate-500 font-mulish max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar jual-beli. Bergabunglah dengan ekosistem yang
            menciptakan <b>long-term engagement</b> dan pertumbuhan bisnis yang
            berkelanjutan.
          </p>
        </div>

        {/* --- CORE ECOSYSTEM VISUALIZATION --- */}
        {/* Layout: Left Column - CENTER HUB - Right Column */}
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative Vertical Line behind Hub (Desktop only) */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-cyan-200 to-transparent -translate-x-1/2 hidden lg:block" />

          {/* Grid Layout 3 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {/* COLUMN 1: Benefits Left (Text Aligned Right on Desktop) */}
            <div className="flex flex-col gap-6 justify-center">
              {BENEFITS.slice(0, 3).map((item, idx) => (
                <BenefitCard
                  key={item.id}
                  item={item}
                  align="right"
                  idx={idx}
                />
              ))}
            </div>

            {/* COLUMN 2: The Central Hub (Visual Centerpiece) */}
            <div className="flex flex-col items-center justify-center py-8 lg:py-0 order-first lg:order-none mb-8 lg:mb-0">
              {/* Animated Badge */}
              <div className="ecosystem-badge relative w-40 h-40 lg:w-48 lg:h-48 bg-white rounded-full shadow-[0_20px_50px_rgba(6,182,212,0.15)] flex items-center justify-center border border-slate-100 z-20 group">
                {/* Rotating Dashed Ring */}
                <div className="absolute inset-2 border-2 border-dashed border-cyan-200 rounded-full animate-[spin_12s_linear_infinite]" />
                {/* Inner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full opacity-50" />

                {/* Center Content */}
                <div className="relative text-center z-10 p-4">
                  <span className="block text-4xl mb-1">🤝</span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Repeat
                  </span>
                  <span className="block text-sm font-black text-blue-600">
                    Ecosystem
                  </span>
                </div>

                {/* Pulsing Ring Effect */}
                <div className="absolute -inset-4 bg-cyan-400/10 rounded-full animate-ping opacity-20 pointer-events-none" />
              </div>

              {/* Mobile Connector Line (Only visible on mobile/tablet) */}
              <div className="h-16 w-[2px] bg-cyan-200 mt-4 lg:hidden" />
            </div>

            {/* COLUMN 3: Benefits Right (Text Aligned Left) */}
            <div className="flex flex-col gap-6 justify-center">
              {BENEFITS.slice(3, 6).map((item, idx) => (
                <BenefitCard
                  key={item.id}
                  item={item}
                  align="left"
                  idx={idx + 3}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- FOOTER STATEMENT --- */}
        <div className="comm-footer mt-20 text-center relative z-20">
          <div className="inline-flex flex-col items-center justify-center bg-slate-900 text-white rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl shadow-blue-900/10 relative overflow-hidden">
            {/* Glow Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20" />

            <h4 className="text-xl md:text-2xl font-bold mb-3 relative z-10 font-mulish">
              Setiap Pembelian Otomatis Masuk Ke
            </h4>
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white mb-6 relative z-10 font-mulish uppercase tracking-wide">
              77 Performance Member Community
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-lg font-mulish relative z-10">
              "Community Ini Menciptakan <b>Repeat Ecosystem</b>, Bukan One-Time
              Sales."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: CARD ---
// Komponen kecil untuk setiap item benefit
const BenefitCard = ({ item, align = "left", idx }) => {
  // Logic arah text: Kanan (index 0-2) nempel ke tengah, Kiri (index 3-5) nempel ke tengah
  // Hanya berlaku di Desktop (lg:). Mobile selalu rata kiri.
  const isRight = align === "right";

  return (
    <div
      className={`benefit-card group relative flex items-center lg:items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300
      ${
        isRight
          ? "lg:flex-row-reverse lg:text-right"
          : "lg:flex-row lg:text-left"
      } flex-row text-left`}
    >
      {/* Icon Box */}
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
        {getIcon(item.icon)}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 text-lg mb-1 font-mulish group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-slate-500 leading-snug font-mulish">
          {item.desc}
        </p>
      </div>

      {/* --- CONNECTING VISUALS (Desktop Only) --- */}
      {/* Ini adalah garis dan titik yang menghubungkan kartu ke "Center Hub" */}

      {/* Dot (Titik Koneksi) */}
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-cyan-300 rounded-full z-10
         ${isRight ? "-right-[42px]" : "-left-[42px]"} 
         group-hover:scale-150 group-hover:bg-cyan-500 transition-all duration-300`}
      />

      {/* Line (Garis Koneksi) */}
      <div
        className={`connector-line hidden lg:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-cyan-100 w-9 
        ${isRight ? "-right-9 origin-right" : "-left-9 origin-left"}`}
      />
    </div>
  );
};

// --- ICON HELPER SET ---
function getIcon(name) {
  const className = "w-6 h-6";
  switch (name) {
    case "users":
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "lightning":
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
    case "book":
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "globe":
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "ticket":
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
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      );
    case "gift":
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
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default MemberCommunity;
