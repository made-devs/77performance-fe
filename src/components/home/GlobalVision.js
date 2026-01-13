"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalVision = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // 1. Setup Globe (Cobe) - Light Mode Config
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 0.5,
      width: 450,
      height: 450,
      phi: 0,
      theta: 0,
      dark: 0, // Light Mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2, // Brightness disesuaikan untuk background putih
      baseColor: [0.85, 0.85, 0.85], // Abu-abu muda untuk benua (Clean look)
      markerColor: [0.03, 0.57, 0.82], // Cyan-77 Strong (RGB: 8, 145, 178)
      glowColor: [1, 1, 1], // White Glow (biar blend sama background)
      opacity: 0.8,
      markers: [
        { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
        { location: [35.6762, 139.6503], size: 0.05 }, // Japan
        { location: [51.1657, 10.4515], size: 0.08 }, // Germany
        { location: [37.0902, -95.7129], size: 0.08 }, // USA
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  // 2. Setup GSAP Animations
  useGSAP(
    () => {
      gsap.from(".kinetic-text", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kinetic-text",
          start: "top 80%",
        },
      });

      gsap.from(".reveal-content", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-content",
          start: "top 85%",
        },
      });

      gsap.from(canvasRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative pb-30 bg-white overflow-visible text-slate-900 flex flex-col justify-center min-h-[800px]"
    >
      {/* BACKGROUND GLOBE CONTAINER - Adjusted positioning */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-[600px] h-[850px] md:w-[700px] md:h-[700px] lg:w-[850px] lg:h-[850px] z-0 flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", maxWidth: "100%" }}
        />
      </div>

      {/* GRADIENT OVERLAYS (WHITE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-full md:w-3/4" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        {/* HEADER SECTION */}
        <div className="max-w-3xl">
          {/* Big Background Text (Watermark) */}
          <h2 className="kinetic-text text-8xl md:text-[180px] opacity-20 font-mulish font-black text-slate-100 leading-none tracking-tighter absolute -top-20 -left-10 select-none -z-10">
            GLOBAL
          </h2>

          <div className="reveal-content pt-10 relative">
            <span className="inline-block px-3 py-1 rounded border border-cyan-77/30 bg-cyan-50 text-cyan-77 font-mulish font-bold tracking-[0.2em] text-[10px] uppercase mb-6">
              International Coverage
            </span>

            <h3 className="text-4xl md:text-6xl font-mulish font-black leading-[1.1] mb-6 text-slate-900">
              Global-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
                Vision & Execution.
              </span>
            </h3>

            <p className="text-xl md:text-2xl font-mulish font-light leading-relaxed text-slate-600 max-w-xl">
              Berangkat dari manufaktur berstandar internasional,
              <span className="text-cyan-77 font-bold"> 77 Performance </span>
              tidak dibatasi oleh geografi. Kami membangun ekosistem produk yang
              relevan untuk pasar Asia, Eropa, hingga Amerika.
            </p>
          </div>
        </div>

        {/* BOTTOM STATS / DETAILS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-8 reveal-content max-w-4xl">
          <StatItem
            label="Standard"
            value="OEM Equivalent"
            sub="Global Compliance"
          />
          <StatItem
            label="Expansion"
            value="Export Ready"
            sub="Cross-border Logistics"
          />
          <StatItem
            label="Network"
            value="Multi-Region"
            sub="APAC • EU • MEA • US"
          />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value, sub }) => (
  <div>
    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 font-mulish">
      {label}
    </h4>
    <p className="text-xl font-bold text-slate-900 font-mulish">{value}</p>
    <p className="text-xs text-slate-500 mt-1 font-mulish">{sub}</p>
  </div>
);

export default GlobalVision;
