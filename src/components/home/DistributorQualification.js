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
    desc: "Memiliki KTP penanggung jawab, NPWP, badan usaha (PT), serta gudang operasional.",
    icon: "document",
  },
  {
    id: 2,
    title: "Background Otomotif Aktif",
    desc: "Memiliki pengalaman atau jaringan aktif di bidang otomotif (bengkel/toko/komunitas).",
    icon: "car",
  },
  {
    id: 3,
    title: "Komitmen Target Wilayah",
    desc: "Siap memenuhi target penjualan sesuai wilayah yang ditetapkan oleh principal.",
    icon: "target",
  },
  {
    id: 4,
    title: "Wajib Training Product",
    desc: "Lulus training product knowledge resmi sebagai syarat aktivasi distributor.",
    icon: "academic",
  },
  {
    id: 5,
    title: "Kemampuan Bangun Jaringan",
    desc: "Mampu mengelola rantai penjualan (mitra bengkel) di wilayah masing-masing.",
    icon: "network",
  },
  {
    id: 6,
    title: "Kepatuhan Sistem Principal",
    desc: "Wajib mengikuti standar harga dan kebijakan resmi 77 Performance.",
    icon: "shield",
  },
  {
    id: 7,
    title: "Tanggung Jawab Operasional",
    desc: "Seluruh biaya operasional dan SDM menjadi tanggung jawab distributor.",
    icon: "briefcase",
  },
  {
    id: 8,
    title: "Komitmen Reputasi Brand",
    desc: "Menjaga citra brand 77 Performance di wilayah operasional secara profesional.",
    icon: "star",
  },
];

const DistributorQualification = () => {
  const containerRef = useRef(null);
  const ghostTextRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Ghost Typography Parallax
      gsap.to(ghostTextRef.current, {
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
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // 2. Entrance Sequence
      tl.from(".qual-header-el", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      })
        .from(
          ".center-spine",
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.4"
        )
        .from(
          ".req-card",
          {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -30 : 30),
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-white overflow-hidden text-navy-77"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          ref={ghostTextRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[22vw] font-black uppercase text-navy-77/[0.02] italic tracking-tighter"
        >
          Qualification Qualification
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,_rgba(2,21,38,0.03)_0%,_transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,_rgba(34,211,238,0.03)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <div className="qual-header-el inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-navy-77/5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-77 animate-pulse" />
            <span className="text-navy-77/60 font-bold text-[10px] uppercase tracking-[0.3em]">
              Official Standards
            </span>
          </div>
          <h2 className="qual-header-el text-5xl lg:text-6xl font-black font-mulish mb-8 leading-tight">
            Distributor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-77 to-cyan-77">
              Qualification.
            </span>
          </h2>
          <p className="qual-header-el text-slate-500 text-lg font-light max-w-xl mx-auto italic">
            "Membangun masa depan otomotif dengan standar profesionalisme tanpa
            kompromi."
          </p>
        </div>

        {/* TIMELINE GRID */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Spine */}
          <div className="center-spine absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-navy-77/5 via-cyan-77/40 to-navy-77/5 -translate-x-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
            {REQUIREMENTS.map((req, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={req.id}
                  className={`req-card group relative flex flex-col ${
                    isEven
                      ? "lg:items-end lg:text-right"
                      : "lg:items-start lg:text-left"
                  }`}
                >
                  {/* Spine Node */}
                  <div
                    className={`hidden lg:block absolute top-10 w-3 h-3 rounded-full border-2 border-cyan-77 bg-white z-20 transition-transform duration-500 group-hover:scale-150 group-hover:bg-cyan-77 ${
                      isEven ? "-right-[54px]" : "-left-[54px]"
                    }`}
                  />

                  <div className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(2,21,38,0.03)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.1)] hover:border-cyan-77/20 transition-all duration-500 group">
                    {/* Corner Accent */}
                    <div
                      className={`absolute top-0 ${
                        isEven ? "left-0" : "right-0"
                      } w-8 h-8 border-t-2 border-cyan-77/0 group-hover:border-cyan-77/40 transition-all duration-500 rounded-tr-none ${
                        isEven
                          ? "border-l-2 rounded-tl-3xl"
                          : "border-r-2 rounded-tr-3xl"
                      }`}
                    />

                    <div
                      className={`flex flex-col ${
                        isEven ? "lg:items-end" : "lg:items-start"
                      } mb-6`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-77 to-cyan-77 flex items-center justify-center text-white mb-6 shadow-lg shadow-navy-77/10">
                        {getIcon(req.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-navy-77 font-mulish tracking-tight">
                        {req.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {req.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-28">
          <button className="group relative px-10 py-5 bg-navy-77 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(2,21,38,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-3">
              Download Requirements PDF
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
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

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
            strokeWidth={1.5}
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
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ); // Precision icon
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
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "academic":
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
            d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
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
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857"
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
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622"
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
            strokeWidth={1.5}
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
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default DistributorQualification;
