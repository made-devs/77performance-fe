"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClosing() {
  const container = useRef(null);
  const textTitle = useRef(null);

  useGSAP(
    () => {
      // Scale Down overlay saat scroll
      gsap.to(".bg-scale", {
        scale: 1,
        filter: "brightness(0.6)", // Sedikit menggelap saat selesai
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      });

      // Text Reveal
      gsap.from(".closing-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "center 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image that Scales */}
      <div className="bg-scale absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=3483&auto=format&fit=crop')] bg-cover bg-center scale-125 origin-center opacity-70 will-change-transform" />

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="closing-content relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black text-white px-4 md:px-0 tracking-tighter mb-8 leading-[0.9]">
          NOT JUST{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-77)] to-white">
            PARTS.
          </span>{" "}
          <br />
          BUSINESS <span className="text-[var(--color-cyan-77)]">VALUE.</span>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Join the ecosystem designed for long-term growth and stability.
        </p>

        <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-cyan-77)] text-white rounded-full font-bold tracking-wider uppercase hover:bg-white hover:text-[var(--color-navy-77)] transition-all duration-300 overflow-hidden">
          <span className="relative z-10">Become A Distributor</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          {/* Fill Effect */}
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
        </button>
      </div>
    </section>
  );
}
