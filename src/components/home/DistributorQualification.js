"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REQUIREMENTS = [
  {
    id: 1,
    title: "Legalitas Perusahaan Resmi",
    desc: "Memiliki KTP penanggung jawab, NPWP, badan usaha berbentuk PT, serta kantor dan/atau gudang operasional.",
    icon: "document",
  },
  {
    id: 2,
    title: "Background Otomotif Aktif",
    desc: "Memiliki pengalaman, jaringan, atau keterlibatan aktif di bidang otomotif (bengkel/toko/komunitas).",
    icon: "car",
  },
  {
    id: 3,
    title: "Komitmen Target Wilayah",
    desc: "Siap mengikuti dan memenuhi target penjualan sesuai kota atau wilayah yang ditetapkan principal.",
    icon: "target",
  },
  {
    id: 4,
    title: "Wajib Training Product",
    desc: "Bersedia mengikuti dan lulus training product knowledge resmi sebagai syarat aktivasi distributor.",
    icon: "academic",
  },
  {
    id: 5,
    title: "Kemampuan Bangun Jaringan",
    desc: "Mampu menciptakan dan mengelola rantai penjualan (mitra bengkel & toko) di wilayah masing-masing.",
    icon: "network",
  },
  {
    id: 6,
    title: "Kepatuhan Sistem Principal",
    desc: "Wajib mengikuti sistem operasional, standar harga, dan kebijakan resmi 77 Performance.",
    icon: "shield",
  },
  {
    id: 7,
    title: "Tanggung Jawab Operasional",
    desc: "Seluruh biaya karyawan, rekrutmen, dan operasional menjadi tanggung jawab penuh distributor.",
    icon: "briefcase",
  },
  {
    id: 8,
    title: "Komitmen Reputasi Brand",
    desc: "Menjaga nama baik, citra, dan reputasi brand 77 Performance di wilayah operasional secara profesional.",
    icon: "star",
  },
];

const DistributorQualification = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Header Entrance
      tl.from(".qual-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 2. Line Growth (The Cyan Spine)
      tl.from(".center-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "power2.inOut",
      });

      // 3. Cards Stagger Entrance
      tl.from(
        ".req-card",
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1, // Muncul berurutan satu per satu
          ease: "back.out(1)",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden text-slate-900"
    >
      {/* --- BACKGROUND DECORATION --- */}
      {/* Pattern titik-titik cyan halus */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Giant Cyan Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[150px] opacity-60 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-60 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="qual-header inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Official Requirements
          </div>
          <h2 className="qual-header text-4xl lg:text-5xl font-black font-mulish text-slate-900 mb-6">
            Distributor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Qualification
            </span>
          </h2>
          <p className="qual-header text-lg text-slate-500 font-mulish max-w-xl mx-auto">
            Kami mencari mitra yang memiliki <b>Visi</b> dan{" "}
            <b>Standar Profesional</b> yang sama. Berikut adalah kualifikasi
            wajib untuk menjadi Distributor Resmi.
          </p>
        </div>

        {/* --- TIMELINE / LIST GRID --- */}
        <div className="relative max-w-5xl mx-auto">
          {/* 1. Center Line (The Spine) - Desktop Only */}
          <div className="center-line absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-200 -translate-x-1/2 hidden md:block rounded-full z-0" />

          {/* 2. Items Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {REQUIREMENTS.map((req, index) => {
              // Logic to alternate alignment (Left/Right) relative to center line
              const isEven = index % 2 === 0; // Kiri (0, 2, 4...)

              return (
                <div
                  key={req.id}
                  className={`req-card relative flex items-start gap-5 
                                ${
                                  isEven
                                    ? "md:flex-row-reverse md:text-right"
                                    : "md:flex-row md:text-left"
                                } 
                                flex-row text-left md:col-span-1 group`}
                >
                  {/* Connector Dot (Desktop) */}
                  <div
                    className={`hidden md:flex absolute top-6 w-5 h-5 bg-white border-4 border-cyan-500 rounded-full z-10 shadow-lg shadow-cyan-200 
                                ${
                                  isEven
                                    ? "-right-[34px] translate-x-1/2"
                                    : "-left-[34px] -translate-x-1/2"
                                }
                                group-hover:scale-125 group-hover:border-cyan-400 transition-transform duration-300`}
                  />

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-cyan-200/40 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group-inner">
                    {/* Decorative Cyan Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-50 rounded-bl-3xl -mr-6 -mt-6 group-hover:mr-0 group-hover:mt-0 transition-all duration-300 z-0" />

                    <div className="relative z-10">
                      {/* Icon Title Wrapper */}
                      <div
                        className={`flex flex-col ${
                          isEven ? "md:items-end" : "md:items-start"
                        } items-start mb-3`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-md shadow-cyan-500/20">
                          {getIcon(req.icon)}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 font-mulish group-hover:text-cyan-600 transition-colors">
                          {req.title}
                        </h3>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed font-mulish">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-slate-900/20 hover:bg-cyan-600 hover:shadow-cyan-600/30 transition-all duration-300 transform hover:-translate-y-1 group">
            Download Syarat Lengkap PDF
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- ICON HELPER ---
function getIcon(name) {
  const className = "w-6 h-6";
  switch (name) {
    case "document":
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "car":
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      );
    case "target":
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
      ); // Using Lightning for target/active
    case "academic":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      );
    case "network":
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "shield":
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "briefcase":
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "star":
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default DistributorQualification;
