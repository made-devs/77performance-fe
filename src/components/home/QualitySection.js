"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QUALITY_PILLARS = [
  {
    id: "01",
    bgText: "77 PERFORMANCE",
    title: "Premium Materials",
    subtitle: "Grade A Selection",
    desc: "Kami tidak berkompromi pada bahan dasar. Menggunakan baja berkualitas tinggi dan komponen karet grade-A.",
    features: [
      "High-Tensile Steel",
      "Heat Resistant Rubber",
      "Anti-Corrosion Coating",
    ],
    image: "/home4.avif",
  },
  {
    id: "02",
    bgText: "COMFORT",
    title: "Engineered Comfort",
    subtitle: "Precision Damping",
    desc: "Kenyamanan berkendara bukan kebetulan. Valving system kami dikalibrasi untuk meredam getaran mikro.",
    features: ["Adaptive Valving", "Noise Reduction", "Smooth Rebound"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "03",
    bgText: "DURABILITY",
    title: "Extreme Durability",
    subtitle: "Built to Last",
    desc: "Dirancang untuk umur pakai panjang. Setiap unit melewati uji ketahanan siklus tinggi.",
    features: ["High Cycle Testing", "Leak-Proof Seal", "Heavy Duty Structure"],
    image: "/home5.png",
  },
];

export default function QualitySection() {
  const triggerRef = useRef(null);
  const bgTextRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".quality-panel");

      // 1. Horizontal Scroll Logic
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // Tambahkan end lebih panjang agar scroll terasa lebih 'berat'/premium
          end: () => "+=" + triggerRef.current.offsetWidth * 3,
        },
      });

      // 2. Parallax Text Background
      gsap.to(bgTextRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 1,
          start: "top top",
          end: () => "+=" + triggerRef.current.offsetWidth * 3,
        },
      });

      // 3. Stagger Animation for Content per Panel
      gsap.utils.toArray(".panel-content").forEach((text) => {
        gsap.fromTo(
          text,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: text.parentElement, // Trigger saat parent panel masuk
              containerAnimation: scrollTween,
              start: "left center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: triggerRef }
  );

  return (
    <section className="relative bg-white text-slate-800 overflow-hidden">
      {/* Container utama: Flex nowrap untuk horizontal layout, h-screen dynamic */}
      <div
        ref={triggerRef}
        className="w-full flex flex-nowrap h-[100dvh] overflow-hidden relative"
      >
        {/* --- Background Kinetic Text --- */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex flex-nowrap items-center pointer-events-none z-0 whitespace-nowrap top-1/2 -translate-y-1/2"
        >
          <div className="min-w-[100vw]" /> {/* Spacer awal */}
          {QUALITY_PILLARS.map((item, index) => (
            <div key={index} className="min-w-[100vw] flex justify-center">
              <span
                className="text-[40vw] lg:text-[25vw] font-black leading-none opacity-10 select-none"
                style={{
                  WebkitTextStroke: "2px #0891b2",
                  color: "transparent",
                }}
              >
                {item.bgText}
              </span>
            </div>
          ))}
        </div>

        {/* --- PANEL 1: INTRO --- */}
        <div className="quality-panel min-w-full h-full flex items-center justify-center relative border-r border-slate-100 z-10">
          {/* BG Image Intro */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/home3.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/95 via-white/80 to-white/50" />
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col justify-center h-full">
            <div className="max-w-4xl panel-content">
              <span className="inline-block py-1 px-3 border border-cyan-500/30 rounded-full bg-cyan-50/80 backdrop-blur-sm text-cyan-600 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6">
                The Philosophy
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight mb-4 lg:mb-8 text-slate-900">
                ENGINEERED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  QUALITY
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl border-l-4 border-cyan-500 pl-4 lg:pl-6">
                Kualitas bukan sekadar janji. Di 77 Performance, kami
                mengutamakan presisi teknik dan standar global.
              </p>

              {/* Scroll Indicator */}
              <div className="mt-8 lg:mt-12 flex items-center gap-5 animate-pulse">
                <div className="w-6 h-10 lg:w-8 lg:h-12 border-2 border-cyan-500/50 rounded-full flex justify-center p-1">
                  <div className="w-1 lg:w-1.5 h-2 lg:h-3 bg-cyan-500 rounded-full animate-[bounce_1.5s_infinite]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm font-black text-cyan-600 tracking-[0.2em] uppercase">
                    Scroll
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PANEL PILLARS (LOOP) --- */}
        {QUALITY_PILLARS.map((item, index) => (
          <div
            key={index}
            className="quality-panel min-w-full h-full flex items-center relative border-r border-slate-100 bg-transparent z-10"
          >
            {/* Mobile Background: Image visible faint behind text */}
            <div className="absolute inset-0 lg:hidden z-[-1] opacity-20">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
            </div>

            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
              {/* Text Content */}
              <div className="panel-content flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                  <span className="text-5xl lg:text-6xl font-black text-cyan-500/20">
                    {item.id}
                  </span>
                  <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500 to-transparent opacity-20" />
                </div>

                <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-cyan-600 font-bold tracking-widest text-xs lg:text-sm mb-4 lg:mb-8 uppercase">
                  {item.subtitle}
                </p>
                <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-10 line-clamp-4 lg:line-clamp-none">
                  {item.desc}
                </p>

                <ul className="space-y-2 lg:space-y-4">
                  {item.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-bold uppercase text-xs lg:text-sm tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Content (Desktop Only - 'hidden lg:block') */}
              <div className="relative h-[400px] w-full hidden lg:block group panel-image">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-500/20 rounded-br-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-cyan-500 z-20" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-cyan-500 z-20" />

                <div className="relative w-full h-full overflow-hidden bg-slate-100 z-10 shadow-2xl shadow-cyan-900/10">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
