"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowUpRight, Download, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCTA({
  uptitle = "GET IN TOUCH",
  titleLines = ["LET'S WORK", "TOGETHER."],
  ctaText = "CHAT NOW",
  ctaSub = "ON WHATSAPP",
  whatsappUrl = "https://wa.me/",
  footerLeft = "CONNECT WITH US",
  footerRight = "GLOBAL NETWORK",
  marqueeText = "SUPPLY. QUALITY. PROFIT.",
  bgImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920",
}) {
  const container = useRef(null);
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const triggers = [];

      // 1. Parallax Effect for Background Image
      const bgTw = gsap.to(".bg-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      if (bgTw.scrollTrigger) triggers.push(bgTw.scrollTrigger);

      // 2. Magnetic Button Effect
      const btn = btnRef.current;
      let xTo, yTo;

      if (btn) {
        xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3" });
        yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3" });

        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = btn.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x * 0.3);
          yTo(y * 0.3);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);

        // Store cleanup to a property so we can easily remove it later
        btn._rmEvent1 = handleMouseMove;
        btn._rmEvent2 = handleMouseLeave;
      }

      // 3. Reveal Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          invalidateOnRefresh: true,
        },
      });

      tl.from(".char-reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      }).from(
        btn,
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      );
      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);

      const refresh = () => ScrollTrigger.refresh();
      const rafId = requestAnimationFrame(refresh);
      window.addEventListener("load", refresh);

      return () => {
        if (btn) {
          btn.removeEventListener("mousemove", btn._rmEvent1);
          btn.removeEventListener("mouseleave", btn._rmEvent2);
        }
        cancelAnimationFrame(rafId);
        window.removeEventListener("load", refresh);
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#145591] to-[#021526] text-white"
    >
      {/* 1. LAYER BACKGROUND - Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-luminosity pointer-events-none">
        <div
          className="bg-image w-full h-[130%] absolute -top-[15%] left-0 bg-cover bg-center grayscale mix-blend-multiply"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-77,#145591)] via-[var(--color-navy-77,#145591)]/80 to-transparent" />
      </div>

      {/* 2. LAYER MARQUEE TEXT */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 select-none pointer-events-none opacity-5 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex">
          <span className="text-[20vw] font-black tracking-tighter leading-none mr-12">
            {marqueeText}
          </span>
          <span className="text-[20vw] font-black tracking-tighter leading-none mr-12">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* 3. LAYER MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <p className="char-reveal text-[var(--color-cyan-77,#0591be)] font-mono text-sm tracking-[0.5em] mb-8 uppercase">
          {uptitle}
        </p>

        <h2
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12 mix-blend-overlay"
        >
          <div className="overflow-hidden">
            <span className="char-reveal inline-block">{titleLines[0]}</span>
          </div>
          {titleLines[1] && (
            <div className="overflow-hidden">
              <span className="char-reveal inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {titleLines[1]}
              </span>
            </div>
          )}
        </h2>

        {/* 4. CONTENT & ACTIONS WRAPPER */}
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-16">
          {/* Main WhatsApp CTA */}
          <a
            ref={btnRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-cyan-77,#0591be)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-dark-77"
          >
            <div className="absolute inset-0 rounded-full border border-[var(--color-cyan-77,#0591be)] scale-100 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />

            <div className="relative z-10 flex flex-col items-center gap-2 text-white group-hover:text-[var(--color-navy-77,#145591)] transition-colors duration-300">
              <span className="text-lg font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                {ctaText}
              </span>
              <MessageCircle
                size={48}
                strokeWidth={1.5}
                className="drop-shadow-sm"
              />
              <div className="flex items-center gap-1 text-xs opacity-80 mt-2 font-mono">
                <span>{ctaSub}</span>
                <ArrowUpRight size={12} />
              </div>
            </div>
          </a>

          {/* Secondary Actions (Downloads) */}
          <div className="char-reveal flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center">
            {/* Compro PDF Download */}
            <a
              href="/downloads/compro-77-performance.pdf"
              download="Compro 77 Performance.pdf"
              className="group flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-full hover:bg-[var(--color-cyan-77,#0591be)]/20 hover:border-[var(--color-cyan-77,#0591be)] transition-all duration-300 w-64"
            >
              <Download
                size={18}
                className="text-[var(--color-cyan-77,#0591be)] group-hover:text-white transition-colors"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-200 group-hover:text-white transition-colors">
                Company Profile
              </span>
            </a>

            {/* Distributor Proposal Download */}
            <a
              href="/downloads/proposal-distributor-77-performance.docx"
              download="Proposal Distributor 77 Performance.docx"
              className="group flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-full hover:bg-[var(--color-cyan-77,#0591be)]/20 hover:border-[var(--color-cyan-77,#0591be)] transition-all duration-300 w-64"
            >
              <FileText
                size={18}
                className="text-[var(--color-cyan-77,#0591be)] group-hover:text-white transition-colors"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-200 group-hover:text-white transition-colors">
                Distributor Form
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col md:flex-row gap-8 items-center text-xs text-white/30 font-mono tracking-widest uppercase">
          <span>{footerLeft}</span>
          <span className="hidden md:inline">•</span>
          <span>{footerRight}</span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `,
        }}
      />
    </section>
  );
}
