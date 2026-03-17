"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const BENEFIT_ICONS = ["users", "lightning", "book", "globe", "ticket", "gift"];

const MemberCommunity = () => {
  const containerRef = useRef(null);
  const bgTextRef = useRef(null);
  const t = useTranslations("pageHome.memberCommunity");
  const benefits = t.raw("benefits").map((item, index) => ({
    id: index + 1,
    title: item.title,
    desc: item.desc,
    icon: BENEFIT_ICONS[index],
  }));

  useGSAP(
    () => {
      // 1. Ghost Typography Parallax — quickSetter
      const setGhostX = gsap.quickSetter(bgTextRef.current, "xPercent");
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => setGhostX(-20 * self.progress),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // 2. Entrance Sequence
      tl.fromTo(
        ".comm-header-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
      )
        .fromTo(
          ".ecosystem-hub",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
          "-=0.4",
        )
        .fromTo(
          ".benefit-card",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
          "-=0.6",
        )
        .fromTo(
          ".connector-line",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, stagger: 0.05 },
          "-=0.5",
        );

      // 3. Continuous Hub Aura — gated by visibility
      const hubAura = gsap.to(".hub-aura", {
        scale: 1.4,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: "sine.out",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => hubAura.play(),
        onEnterBack: () => hubAura.play(),
        onLeave: () => hubAura.pause(),
        onLeaveBack: () => hubAura.pause(),
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 min-h-dvh flex items-center justify-center bg-[#0a0a0a] overflow-hidden text-white"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          ref={bgTextRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[22vw] font-black uppercase text-cyan-77/10 italic tracking-tighter"
        >
          {t("bgText")}
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#22d3ee 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-77/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#021526]/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="comm-header-el inline-flex items-center gap-2 px-4 py-1.5 bg-[#021526]/80 border border-cyan-77/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-cyan-300 font-bold text-[10px] uppercase tracking-[0.2em]">
              {t("badge")}
            </span>
          </div>
          <h2 className="comm-header-el text-5xl lg:text-6xl font-black font-mulish mb-6 leading-tight text-white">
            {t("titleLine1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-77 drop-shadow-sm">
              {t("titleLine2")}
            </span>
          </h2>
          <p className="comm-header-el text-slate-300 text-lg font-light max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* ECOSYSTEM VISUAL */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-4">
          <div className="flex flex-col gap-6 order-2 lg:order-1 relative z-10">
            {benefits.slice(0, 3).map((item, i) => (
              <BenefitCard
                key={item.id}
                item={item}
                align="right"
                position={i === 0 ? "top" : i === 1 ? "middle" : "bottom"}
              />
            ))}
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2 h-72">
            <div className="ecosystem-hub relative z-20">
              <div className="hub-aura absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 blur-[30px] rounded-full" />
              <div className="relative w-48 h-48 rounded-full bg-[#021526]/90 backdrop-blur-xl border border-cyan-77/40 shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center p-8 text-center group hover:border-cyan-400 transition-colors duration-500">
                <div className="absolute inset-2 border border-dashed border-cyan-400/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <span className="text-3xl mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  🤝
                </span>
                <span className="text-[10px] font-bold text-cyan-200/70 uppercase tracking-widest leading-none mb-1">
                  {t("hubRepeat")}
                </span>
                <span className="text-lg font-black text-cyan-400 leading-none drop-shadow-md">
                  {t("hubEcosystem")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-3 lg:order-3 relative z-10">
            {benefits.slice(3, 6).map((item, i) => (
              <BenefitCard
                key={item.id}
                item={item}
                align="left"
                position={i === 0 ? "top" : i === 1 ? "middle" : "bottom"}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="comm-footer mt-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#021526] to-[#010e1a] border border-cyan-77/20 rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-[0_20px_40px_rgba(2,21,38,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-77/10 blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -ml-32 -mb-32" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black font-mulish mb-4 text-white drop-shadow-lg">
                “{t("footerQuote")}”
              </h3>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ item, align, position }) => {
  const isRight = align === "right";

  // Logic to angle the connecting lines to the center hub
  let lineClass = "";
  if (isRight) {
    if (position === "top")
      lineClass =
        "w-[80px] xl:w-[120px] -right-[80px] xl:-right-[120px] rotate-[35deg] origin-left";
    else if (position === "middle")
      lineClass =
        "w-[60px] xl:w-[90px] -right-[60px] xl:-right-[90px] origin-left";
    else if (position === "bottom")
      lineClass =
        "w-[80px] xl:w-[120px] -right-[80px] xl:-right-[120px] -rotate-[35deg] origin-left";
  } else {
    if (position === "top")
      lineClass =
        "w-[80px] xl:w-[120px] -left-[80px] xl:-left-[120px] -rotate-[35deg] origin-right";
    else if (position === "middle")
      lineClass =
        "w-[60px] xl:w-[90px] -left-[60px] xl:-left-[90px] origin-right";
    else if (position === "bottom")
      lineClass =
        "w-[80px] xl:w-[120px] -left-[80px] xl:-left-[120px] rotate-[35deg] origin-right";
  }

  return (
    <div
      className={`benefit-card group relative p-6 rounded-2xl bg-[#021526]/50 backdrop-blur-md border border-cyan-77/10 hover:border-cyan-400/50 hover:bg-[#021526]/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500 flex items-center gap-5 ${
        isRight ? "lg:flex-row-reverse lg:text-right" : "lg:text-left"
      }`}
    >
      {/* Animated Connector Line that points to the Center */}
      <div
        className={`connector-line absolute top-1/2 -translate-y-1/2 h-[1.5px] hidden lg:block pointer-events-none z-[-1] opacity-70 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300 ${
          isRight
            ? "bg-gradient-to-r from-cyan-400/80 to-transparent"
            : "bg-gradient-to-l from-cyan-400/80 to-transparent"
        } ${lineClass}`}
      />
      <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-900/30 border border-cyan-77/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#021526] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-500 shadow-sm relative z-10">
        {getIcon(item.icon)}
      </div>
      <div className="relative z-10">
        <h4 className="font-mulish font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors leading-tight">
          {item.title}
        </h4>
        <p className="text-[12px] text-slate-300 leading-relaxed font-light font-mulish">
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
