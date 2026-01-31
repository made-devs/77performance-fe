"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorOpening() {
  const container = useRef(null);
  const bgImage = useRef(null);

  useGSAP(
    () => {
      // Parallax
      gsap.to(bgImage.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text Reveal
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      introTl
        .from(".hero-uptitle", { y: 50, opacity: 0, duration: 1, delay: 0.2 })
        .from(
          ".hero-title-line",
          {
            yPercent: 120, // Fix: 120% to ensure hidden
            skewY: 7,
            stagger: 0.15,
            duration: 1.5,
          },
          "-=0.8",
        )
        .from(".hero-desc", { opacity: 0, y: 20, duration: 1 }, "-=1");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-[90vh] w-full flex items-center overflow-hidden bg-[var(--color-navy-77)]"
    >
      {/* Background with Brand Gradient */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div
          ref={bgImage}
          className="h-[130%] w-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter grayscale mix-blend-overlay"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy-77)] via-[#0f3d66] to-[var(--color-cyan-77)]/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-6xl">
          <p className="hero-uptitle text-[var(--color-cyan-77)] font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base border-l-4 border-[var(--color-cyan-77)] pl-4">
            Official Partnership
          </p>

          <div className="overflow-hidden">
            <h1 className="hero-title-line text-6xl md:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-white">
              DISTRIBUTOR
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-title-line text-6xl md:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-cyan-77)]">
              PROGRAM
            </h1>
          </div>

          <p className="hero-desc text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl border-t border-[var(--color-cyan-77)]/30 pt-6 mt-6">
            Structured Partnership for{" "}
            <span className="font-semibold text-white">Long-Term Growth</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
