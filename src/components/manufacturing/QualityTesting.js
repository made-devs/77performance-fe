"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function QualityTesting() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".qc-overlay", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      gsap.from(".qc-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-[80vh] w-full bg-slate-900 overflow-hidden flex items-center justify-center"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1621252062590-78170c06eb62?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center grayscale" />
      </div>

      {/* Blue Overlay Curtain Effect */}
      <div className="qc-overlay absolute inset-0 bg-[var(--color-navy-77)]/90 mix-blend-multiply origin-bottom" />

      <div className="qc-content relative z-10 text-center max-w-4xl px-6">
        <div className="inline-block p-4 border-2 border-[var(--color-cyan-77)] rounded-full mb-8 hover:bg-[var(--color-cyan-77)] hover:text-white transition-colors cursor-pointer group">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-white font-bold tracking-[0.3em] uppercase mb-4 text-sm">
          Total Quality Management
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Tested Prior to Sale.
        </h3>
        <p className="text-slate-300 text-xl leading-relaxed mb-12">
          Setiap unit melewati Dynamic Damping Test dan Endurance Test yang
          ketat. Kami menolak 100% kecacatan sebelum produk dikemas.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left border-t border-white/20 pt-8">
          <div>
            <h4 className="text-[var(--color-cyan-77)] font-bold text-lg mb-1">
              Dynamic Test
            </h4>
            <p className="text-xs text-slate-400">
              Simulation of rugged terrain.
            </p>
          </div>
          <div>
            <h4 className="text-[var(--color-cyan-77)] font-bold text-lg mb-1">
              Endurance
            </h4>
            <p className="text-xs text-slate-400">
              300,000+ Cycles fatigue test.
            </p>
          </div>
          <div className="hidden md:block">
            <h4 className="text-[var(--color-cyan-77)] font-bold text-lg mb-1">
              Impact Load
            </h4>
            <p className="text-xs text-slate-400">
              High pressure resistance check.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
