"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale, useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function SpecsSection() {
  const containerRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations("pageHome.specsSection");
  const cards = t.raw("cards");

  useGSAP(
    () => {
      const scoped = gsap.utils.selector(containerRef);
      const titleElement = scoped(".spec-title")[0];

      // Animate Title
      if (titleElement) {
        gsap.from(titleElement, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleElement,
            start: "top 80%",
          },
        });
      }

      // Animate Grid Items (Robust on locale switch)
      const cardElements = gsap.utils.toArray(scoped(".bento-card"));
      const revealThreshold = window.innerHeight * 0.85;

      gsap.set(cardElements, {
        clearProps: "opacity,transform",
      });

      cardElements.forEach((card) => {
        const isAlreadyInView =
          card.getBoundingClientRect().top <= revealThreshold;

        if (isAlreadyInView) {
          gsap.set(card, { y: 0, autoAlpha: 1 });
          return;
        }

        gsap.set(card, { y: 80, autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(card, {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: containerRef, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section
      key={`specs-${locale}`}
      ref={containerRef}
      className="py-24 min-h-dvh flex items-center justify-center bg-navy-77/90 relative overflow-hidden"
    >
      {/* Absolute dark overlay to keep it professional but tinted navy */}
      <div className="absolute inset-0 bg-dark-77/80 pointer-events-none" />

      {/* Background Ambient Glow (Increased intensity) */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-cyan-77/20 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      {/* Background Grid Decoration */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl spec-title">
          <span className="text-cyan-77 font-mulish font-bold tracking-widest text-sm uppercase mb-2 block">
            {t("header.tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-mulish font-black text-white leading-tight">
            {t("header.titlePrefix")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
              {t("header.titleMiddle")}
            </span>{" "}
            <br />
            {t("header.titleSuffix")}
          </h2>
          <p className="mt-4 text-slate-300 text-lg font-mulish">
            {t("header.description")}
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* CARD 1: FACTORY ECOSYSTEM (Large) */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-[2rem] bg-cyan-77/10 backdrop-blur-xl shadow-2xl shadow-cyan-900/20 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-cyan-400/30 hover:bg-cyan-77/20 transition-all duration-500">
            <div className="absolute inset-0 bg-navy-900/50 mix-blend-overlay">
              {/* Image Placeholder */}
              <div
                className="w-full h-full bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity"
                style={{
                  backgroundImage: "url('home2.png')",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-77 via-navy-77/40 to-transparent" />

            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
              <div className="mb-4 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#22d3ee]">
                <svg
                  className="w-6 h-6 text-dark-77"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-mulish font-bold mb-2 drop-shadow-md">
                {cards.integrated.title}
              </h3>
              <p className="text-cyan-50 text-sm mb-4 max-w-md font-mulish drop-shadow-sm">
                {cards.integrated.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {cards.integrated.badges.map((badge) => (
                  <Badge key={badge} text={badge} />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: EXPERIENCE (Medium) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-cyan-77/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl shadow-cyan-900/20 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-77/20 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-cyan-400/40 transition-all duration-500" />
            <h4 className="text-6xl font-mulish font-black text-white relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              15<span className="text-cyan-400 text-4xl">+</span>
            </h4>
            <p className="text-cyan-300 font-mulish font-bold text-sm tracking-wider uppercase mt-2 relative z-10">
              {cards.experience.label}
            </p>
            <p className="text-xs text-cyan-100/70 mt-2 relative z-10 font-mulish">
              {cards.experience.desc}
            </p>
          </div>

          {/* CARD 3: GLOBAL REACH (Medium) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-cyan-77/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl shadow-cyan-900/20 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-77/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Abstract Map Dots */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(#22d3ee 2px, transparent 2px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-white font-mulish font-bold text-xl drop-shadow-md">
                {cards.globalMarket.title}
              </h3>
              <p className="text-cyan-400 text-xs mt-1 font-mulish font-bold">
                {cards.globalMarket.regions}
              </p>
            </div>
            <div className="relative z-10 mt-4">
              <p className="text-cyan-100/70 text-xs leading-relaxed font-mulish">
                {cards.globalMarket.desc}
              </p>
            </div>
          </div>

          {/* CARD 4: QUALITY STANDARDS (Tall) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-cyan-77/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl shadow-cyan-900/20 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-77/20 transition-all duration-300 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cyan-400/5 via-transparent to-transparent pointer-events-none group-hover:from-cyan-400/20 transition-colors duration-500" />
            <div className="mb-6 relative z-10">
              <div className="w-12 h-12 bg-cyan-400/20 border border-cyan-400/50 rounded-xl flex items-center justify-center mb-6 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-mulish font-bold text-white drop-shadow-md">
                {cards.quality.title}
              </h3>
              <p className="text-cyan-100/70 text-xs mt-2 font-mulish">
                {cards.quality.desc}
              </p>
            </div>

            <ul className="space-y-5 flex-grow relative z-10 mt-2">
              {cards.quality.items.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ul>
          </div>

          {/* CARD 5: PRODUCT PORTFOLIO (Wide) */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-cyan-77/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl shadow-cyan-900/20 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-77/20 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-cyan-400/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-mulish font-bold text-white mb-2 drop-shadow-md">
                {cards.portfolio.title}
              </h3>
              <p className="text-cyan-50/80 text-sm mb-5 font-mulish">
                {cards.portfolio.desc}
              </p>
              <div className="flex gap-3">
                <div className="px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/40 rounded-lg text-xs font-mulish font-bold text-cyan-200 backdrop-blur-sm">
                  {cards.portfolio.tag1}
                </div>
                <div className="px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/40 rounded-lg text-xs font-mulish font-bold text-cyan-200 backdrop-blur-sm">
                  {cards.portfolio.tag2}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-32 md:h-full relative z-10 mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity">
              {/* Placeholder for Product Image */}
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop')",
                }}
              ></div>
            </div>
          </div>

          {/* CARD 6: R&D (Small) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-gradient-to-br from-cyan-400 to-cyan-77 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(34,211,238,0.3)] text-dark-77 flex flex-col justify-center hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 mix-blend-overlay" />
            <h3 className="text-xl font-mulish font-black mb-2 relative z-10">
              {cards.rnd.title}
            </h3>
            <p className="text-dark-77/80 text-xs leading-relaxed font-mulish font-bold relative z-10">
              {cards.rnd.desc}
            </p>
            <div className="mt-5 pt-5 border-t border-dark-77/20 flex justify-between items-center relative z-10">
              <span className="text-xs font-mulish font-black uppercase tracking-wider">
                {cards.rnd.footer}
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Components
function Badge({ text }) {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-cyan-400/20 backdrop-blur-md border border-cyan-400/50 text-xs font-mulish font-bold text-cyan-50 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
      {text}
    </span>
  );
}

function ListItem({ title, desc }) {
  return (
    <li className="flex items-start gap-4 group">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] group-hover:scale-150 transition-transform" />
      <div>
        <h4 className="text-sm font-mulish font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm">
          {title}
        </h4>
        <p className="text-[10px] text-cyan-200/60 uppercase tracking-widest font-mulish font-semibold mt-0.5">
          {desc}
        </p>
      </div>
    </li>
  );
}
