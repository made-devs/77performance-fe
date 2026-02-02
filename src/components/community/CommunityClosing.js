"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CommunityClosing() {
  const container = useRef(null);
  const btnRef = useRef(null);

  // CTA Config: Link ke WhatsApp untuk Join Community/Network
  const whatsappNumber = "6285210450511";
  const message =
    "Halo Admin, saya tertarik untuk bergabung dalam jaringan ekosistem bisnis 77 Performance. Mohon info syarat dan ketentuannya.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useGSAP(
    () => {
      // 1. Text Reveal Animation
      gsap.from(".closing-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // 2. Magnetic Button Logic (High-End UX)
      const btn = btnRef.current;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3" });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = btn.getBoundingClientRect();
        const x = clientX - (rect.left + rect.width / 2);
        const y = clientY - (rect.top + rect.height / 2);
        // Membatasi pergerakan agar tidak terlalu jauh
        xTo(x * 0.3);
        yTo(y * 0.3);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      if (btn) {
        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
      }

      // Animasi Masuk Tombol (Pop Up)
      gsap.from(btn, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5,
        scrollTrigger: {
          trigger: btn,
          start: "top 95%",
        },
      });

      return () => {
        if (btn) {
          btn.removeEventListener("mousemove", handleMouseMove);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-[var(--color-navy-77)] text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Decor (Glow effect) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-cyan-77),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="w-1 h-20 bg-[var(--color-cyan-77)] mx-auto mb-12 closing-text" />

        <h2 className="closing-text text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
          BUILDING TOGETHER. <br />
          <span className="text-[var(--color-cyan-77)]">GROWING TOGETHER.</span>
        </h2>

        <p className="closing-text text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-3xl mx-auto mb-16">
          77 Performance Community dirancang sebagai fondasi hubungan jangka
          panjang, memperkuat jaringan bisnis, dan menciptakan ekosistem
          otomotif yang sehat dan berkelanjutan.
        </p>

        {/* --- NEW COOL CTA SECTION --- */}
        <div className="flex justify-center py-8">
          <a
            ref={btnRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-64 h-64 rounded-full bg-white text-[var(--color-navy-77)] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--color-cyan-77)] hover:text-white z-20 shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(5,145,190,0.4)]"
          >
            {/* 1. Radar Ping Animation */}
            <div className="absolute inset-0 border border-white/40 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute inset-[-10px] border border-white/10 rounded-full" />

            {/* 2. Content */}
            <Network
              size={40}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform duration-300 mb-2"
            />

            <div className="text-center leading-none">
              <span className="block text-xs font-mono tracking-[0.2em] opacity-60 group-hover:opacity-90 mb-1 uppercase">
                Join The
              </span>
              <span className="block text-3xl font-black tracking-tighter">
                ECOSYSTEM
              </span>
            </div>

            {/* 3. Arrow Icon Bubble */}
            <div className="mt-4 w-10 h-10 rounded-full bg-[var(--color-navy-77)] text-white group-hover:bg-white group-hover:text-[var(--color-cyan-77)] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>

        <div className="mt-24 opacity-30 font-mono tracking-widest text-xs uppercase flex justify-center gap-4 md:gap-8">
          <span>© 2026 77 Performance</span>
          <span>•</span>
          <span>Community Division</span>
        </div>
      </div>
    </section>
  );
}
