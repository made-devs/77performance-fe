"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingBag, Activity, Zap, Server } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    id: "principal",
    label: "PRINCIPAL",
    sub: "System HQ",
    icon: Globe,
    stats: "Global Standards",
    color: "text-white",
    bg: "bg-[var(--color-navy-77)]",
    border: "border-[var(--color-cyan-77)]",
    // Mobile: Top (dengan jarak aman), Desktop: Top 5%
    pos: "top-8 left-1/2 -translate-x-1/2 md:top-[5%]",
  },
  {
    id: "distributor",
    label: "DISTRIBUTOR",
    sub: "Regional Hub",
    icon: Server,
    stats: "Stock Buffer",
    color: "text-[var(--color-navy-77)]",
    bg: "bg-white",
    border: "border-white",
    // Mobile: Center Middle, Desktop: Bottom Left
    pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[10%] md:left-[10%] md:translate-x-0",
  },
  {
    id: "retail",
    label: "RETAIL / WORKSHOP",
    sub: "Frontline Market",
    icon: ShoppingBag,
    stats: "End-User Service",
    color: "text-white",
    bg: "bg-[#111]",
    border: "border-slate-700",
    // Mobile: Bottom (dengan jarak aman), Desktop: Bottom Right
    pos: "bottom-8 left-1/2 -translate-x-1/2 md:bottom-[10%] md:left-auto md:right-[10%] md:translate-x-0",
  },
];

export default function EcosystemStructure() {
  const container = useRef(null);
  const svgRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Reveal Background Grid & Title
      tl.from(".bg-grid", { opacity: 0, scale: 1.2, duration: 1.5 }).from(
        ".header-reveal",
        { y: 50, opacity: 0, stagger: 0.1 },
        "<",
      );

      // 2. Connector Lines Drawing Effect - Target SVG elements safely
      tl.from(
        ".conn-path",
        {
          strokeDashoffset: 1000,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1",
      );

      // 3. Nodes Entrance (Tech Card Pop-up)
      tl.from(
        ".node-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=1.5",
      );

      // 4. Infinite Floating Animation for Nodes
      gsap.to(".node-card", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          yoyo: true,
          repeat: -1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[110vh] bg-[#0a1929] text-white flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* 1. BACKGROUND LAYERS */}
      <div className="bg-grid absolute inset-0 opacity-20 bg-[linear-gradient(rgba(5,145,190,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(5,145,190,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px] [transform:rotateX(60deg)_scale(2)] origin-top" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-cyan-77)] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-12 px-6">
        <div className="header-reveal inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--color-cyan-77)]/30 bg-[var(--color-cyan-77)]/10 text-[var(--color-cyan-77)] text-xs font-mono tracking-widest uppercase mb-6">
          <Activity size={14} className="animate-pulse" />
          Live Ecosystem Status
        </div>
        <h2 className="header-reveal text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          CONNECTED CORE
        </h2>
      </div>

      {/* THE DIAGRAM CONTAINER */}
      {/* FIX: Height ditetapkan 750px di mobile agar kartu bisa ditumpuk vertikal tanpa overlapping. Di desktop kembali ke aspect-video. */}
      <div className="relative w-full max-w-5xl h-[750px] md:h-auto md:aspect-video mx-auto">
        {/* MOBILE ONLY: Simple Vertical Line Connector */}
        <div className="md:hidden absolute left-1/2 top-20 bottom-20 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-cyan-77)]/50 to-transparent">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-white/20" />
        </div>

        {/* DESKTOP ONLY: Complex Triangle SVG Pipelines */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block"
          viewBox="0 0 800 500"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0591be" stopOpacity="0" />
              <stop offset="50%" stopColor="#0591be" stopOpacity="1" />
              <stop offset="100%" stopColor="#0591be" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Dotted Lines */}
          <path
            d="M400,120 L150,400 L650,400 Z"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="10 10"
            className="opacity-30"
          />

          {/* Main Power Bright Lines (Animated) */}
          <g>
            <path
              d="M400,120 L150,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
              filter="url(#glow)"
            />
            <path
              d="M400,120 L650,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
              filter="url(#glow)"
            />
            <path
              d="M150,400 L650,400"
              fill="none"
              stroke="#0591be"
              strokeWidth="2"
              strokeDasharray="1000"
              className="conn-path"
              filter="url(#glow)"
            />
          </g>

          {/* Moving Data Packets */}
          <circle
            r="4"
            fill="white"
            className="animate-[flow1_3s_linear_infinite]"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M400,120 L150,400"
            />
          </circle>
          <circle
            r="4"
            fill="white"
            className="animate-[flow2_3s_linear_infinite_1s]"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M400,120 L650,400"
            />
          </circle>
          <circle
            r="4"
            fill="white"
            className="animate-[flow3_4s_linear_infinite]"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M150,400 L650,400"
            />
          </circle>
        </svg>

        {/* 3. INTERACTIVE NODES */}
        {nodes.map((node, i) => (
          <div
            key={node.id}
            className={`node-card absolute ${node.pos} group cursor-pointer z-10 w-64`}
          >
            {/* Connector Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--color-cyan-77)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* The Tech Card */}
            <div
              className={`
                    relative overflow-hidden backdrop-blur-md rounded-xl border p-6
                    transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2 box-border 
                    ${node.bg} ${node.color} ${node.border} shadow-2xl
                `}
            >
              {/* Scanlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />

              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg bg-white/10 backdrop-blur-sm`}>
                  <node.icon size={24} />
                </div>
                <Zap
                  size={16}
                  className={`opacity-50 ${node.id === "principal" ? "text-[var(--color-cyan-77)]" : ""}`}
                />
              </div>

              <div>
                <span className="block text-[10px] font-mono opacity-60 tracking-widest uppercase mb-1">
                  {node.sub}
                </span>
                <h3 className="font-black text-lg tracking-tight leading-none mb-4">
                  {node.label}
                </h3>

                {/* Fake Stats Line */}
                <div className="w-full h-[1px] bg-current opacity-20 mb-3" />
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="opacity-70">Focus</span>
                  <span>{node.stats}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
