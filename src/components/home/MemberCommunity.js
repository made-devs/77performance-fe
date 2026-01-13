"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    desc: "Jadilah yang pertama tahu tentang produk baru dan campaign.",
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
    desc: "Koneksi luas dengan jaringan bengkel se-Indonesia.",
    icon: "globe",
  },
  {
    id: 5,
    title: "Undangan Event & Campaign",
    desc: "Prioritas undangan untuk pameran dan event 77 Performance.",
    icon: "ticket",
  },
  {
    id: 6,
    title: "Voucher Bengkel Mitra",
    desc: "Insentif khusus berupa voucher promo untuk mitra.",
    icon: "gift",
  },
];

const MemberCommunity = () => {
  const containerRef = useRef(null);
  const bgTextRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Ghost Typography Parallax
      gsap.to(bgTextRef.current, {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // 2. Entrance Sequence
      tl.fromTo(
        ".comm-header-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
      )
        .fromTo(
          ".ecosystem-hub",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .fromTo(
          ".benefit-card",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
          "-=0.6"
        )
        .fromTo(
          ".connector-line",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, stagger: 0.05 },
          "-=0.5"
        );

      // 3. Continuous Hub Aura
      gsap.to(".hub-aura", {
        scale: 1.4,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: "sine.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-white overflow-hidden text-navy-77"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          ref={bgTextRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[22vw] font-black uppercase text-navy-77/[0.02] italic tracking-tighter"
        >
          77 Community 77 Community
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#0e6ba0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="comm-header-el inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-cyan-77/10 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-77 animate-pulse" />
            <span className="text-navy-77 font-bold text-[10px] uppercase tracking-[0.2em]">
              Exclusive Ecosystem
            </span>
          </div>
          <h2 className="comm-header-el text-5xl lg:text-6xl font-black font-mulish mb-6 leading-tight">
            77 Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-77 to-cyan-77">
              Member Community
            </span>
          </h2>
          <p className="comm-header-el text-slate-500 text-lg font-light max-w-2xl mx-auto">
            Lebih dari sekadar jual-beli. Bergabunglah dengan ekosistem yang
            menciptakan pertumbuhan bisnis berkelanjutan.
          </p>
        </div>

        {/* ECOSYSTEM VISUAL */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-4">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {BENEFITS.slice(0, 3).map((item) => (
              <BenefitCard key={item.id} item={item} align="right" />
            ))}
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2 h-72">
            <div className="ecosystem-hub relative z-20">
              <div className="hub-aura absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-77/20 rounded-full" />
              <div className="relative w-48 h-48 rounded-full bg-white border border-slate-100 shadow-[0_30px_60px_rgba(14,107,160,0.15)] flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute inset-2 border border-dashed border-cyan-77/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <span className="text-3xl mb-2">🤝</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                  Repeat
                </span>
                <span className="text-lg font-black text-navy-77 leading-none">
                  ECOSYSTEM
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-3 lg:order-3">
            {BENEFITS.slice(3, 6).map((item) => (
              <BenefitCard key={item.id} item={item} align="left" />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="comm-footer mt-24 max-w-4xl mx-auto">
          <div className="bg-navy-77 rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-77/10 blur-[80px] -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-mulish mb-4">
                "Community Ini Menciptakan Repeat Ecosystem, Bukan One-Time
                Sales."
              </h3>
              <div className="h-[1px] w-20 bg-cyan-77/50 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ item, align }) => {
  const isRight = align === "right";
  return (
    <div
      className={`benefit-card group relative p-6 rounded-2xl bg-white border border-slate-100 hover:border-cyan-77/30 hover:shadow-xl transition-all duration-500 flex items-center gap-5 ${
        isRight ? "lg:flex-row-reverse lg:text-right" : "lg:text-left"
      }`}
    >
      <div
        className={`connector-line absolute top-1/2 -translate-y-1/2 w-8 h-[1px] bg-cyan-77/20 hidden lg:block ${
          isRight ? "-right-8 origin-right" : "-left-8 origin-left"
        }`}
      />
      <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy-77 group-hover:bg-navy-77 group-hover:text-cyan-77 transition-all duration-500 shadow-sm">
        {getIcon(item.icon)}
      </div>
      <div>
        <h4 className="font-bold text-navy-77 mb-1 group-hover:text-cyan-77 transition-colors leading-tight">
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

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
            strokeWidth={1.5}
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
            strokeWidth={1.5}
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
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
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
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
            strokeWidth={1.5}
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
            strokeWidth={1.5}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default MemberCommunity;
