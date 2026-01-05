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
    desc: "Kami tidak berkompromi pada bahan dasar. Menggunakan baja berkualitas tinggi dan komponen karet grade-A yang tahan terhadap iklim tropis maupun kondisi jalan ekstrem.",
    features: [
      "High-Tensile Steel",
      "Heat Resistant Rubber",
      "Anti-Corrosion Coating",
    ],
    // Image: Raw Steel / Metal Texture
    image: "/home4.avif",
  },
  {
    id: "02",
    bgText: "COMFORT",
    title: "Engineered Comfort",
    subtitle: "Precision Damping",
    desc: "Kenyamanan berkendara bukan kebetulan, melainkan hasil hitungan matematis. Valving system kami dikalibrasi untuk meredam getaran mikro namun tetap stabil saat manuver.",
    features: ["Adaptive Valving", "Noise Reduction", "Smooth Rebound"],
    // Image: Suspension / Mechanical Parts
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "03",
    bgText: "DURABILITY",
    title: "Extreme Durability",
    subtitle: "Built to Last",
    desc: "Dirancang untuk umur pakai panjang. Setiap unit melewati uji ketahanan siklus tinggi untuk memastikan performa tidak menurun meski dipakai harian dalam jangka waktu lama.",
    features: ["High Cycle Testing", "Leak-Proof Seal", "Heavy Duty Structure"],
    // Image: Industrial Robot / Testing
    image: "/home5.png",
  },
];

export default function QualitySection() {
  const triggerRef = useRef(null);
  const bgTextRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".quality-panel");

      // Main horizontal scroll logic
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + triggerRef.current.offsetWidth * 2,
        },
      });

      // Slower Parallax for Kinetic Typography
      gsap.to(bgTextRef.current, {
        xPercent: -50, // Bergerak lebih lambat dibanding konten utama
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 1,
          start: "top top",
          end: () => "+=" + triggerRef.current.offsetWidth * 2,
        },
      });

      // Content fade-in animation
      sections.forEach((section) => {
        const text = section.querySelector(".panel-content");
        if (text) {
          gsap.fromTo(
            text,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    { scope: triggerRef }
  );

  return (
    <section className="relative bg-white text-slate-800 overflow-hidden">
      <div
        ref={triggerRef}
        className="h-screen w-full flex flex-nowrap overflow-hidden relative"
      >
        {/* --- LAYER 0: KINETIC TYPOGRAPHY BACKGROUND --- */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex flex-nowrap items-center pointer-events-none z-0 whitespace-nowrap"
        >
          {/* Spacer untuk panel pertama (Intro) */}
          <div className="min-w-full" />

          {QUALITY_PILLARS.map((item, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <span
                className="text-[35vw] font-black leading-none opacity-10 select-none"
                style={{
                  WebkitTextStroke: "2px #0891b2",
                  color: "#0891b2",
                }}
              >
                {item.bgText}
              </span>
            </div>
          ))}
        </div>

        {/* --- PANEL 1: INTRO --- */}
        <div className="quality-panel min-w-full h-full flex items-center justify-center relative border-r border-slate-100 z-10">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/home3.webp')" }}
            />
            {/* Overlay Putih Transparan untuk menjaga readability & tema Clean */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block py-1 px-3 border border-cyan-500/30 rounded-full bg-cyan-50/80 backdrop-blur-sm text-cyan-600 text-xs font-mulish font-bold tracking-widest uppercase mb-6">
                The Philosophy
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-mulish font-black leading-tight mb-8 text-slate-900">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Quality
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-xl border-l-4 border-cyan-500 pl-6 font-mulish">
                Kualitas bukan sekadar janji. Di 77 Performance, kami
                mengutamakan presisi teknik dan standar global.
              </p>

              {/* --- NAVIGATION HINT --- */}
              <div className="mt-12 flex items-center gap-5 animate-pulse">
                {/* Icon Mouse / Scroll */}
                <div className="w-8 h-12 border-2 border-cyan-500/50 rounded-full flex justify-center p-1">
                  <div className="w-1.5 h-3 bg-cyan-500 rounded-full animate-[bounce_1.5s_infinite]" />
                </div>

                {/* Text Instruction */}
                <div className="flex flex-col">
                  <span className="text-sm font-mulish font-black text-cyan-600 tracking-[0.2em] uppercase">
                    Scroll Down
                  </span>
                  <span className="text-[10px] text-slate-400 font-mulish font-bold tracking-wider">
                    TO EXPLORE PROCESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PANELS 2, 3, 4: THE PILLARS --- */}
        {QUALITY_PILLARS.map((item, index) => (
          <div
            key={index}
            className="quality-panel min-w-full h-full flex items-center relative border-r border-slate-100 bg-transparent z-10"
          >
            <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT COLUMN: TEXT */}
              <div className="panel-content">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-mulish font-black text-cyan-500/20">
                    {item.id}
                  </span>
                  <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500 to-transparent opacity-20" />
                </div>
                <h3 className="text-4xl md:text-5xl font-mulish font-black text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-cyan-600 font-mulish font-bold tracking-widest text-sm mb-8 uppercase">
                  {item.subtitle}
                </p>
                <p className="text-lg text-slate-600 mb-10 font-mulish">
                  {item.desc}
                </p>
                <ul className="space-y-4">
                  {item.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-mulish font-bold uppercase text-sm tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN: IMAGE & ORNAMENTS */}
              <div className="relative h-[400px] w-full hidden lg:block group">
                {/* Ornament 1: Offset Border (Tech Frame) */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-500/20 rounded-br-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                {/* Ornament 2: Corner Accents */}
                <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-cyan-500 z-20" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-cyan-500 z-20" />

                {/* Ornament 3: Tech Dots */}
                <div className="absolute top-1/2 -right-6 flex flex-col gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full" />
                  ))}
                </div>

                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden bg-slate-100 z-10 shadow-2xl shadow-cyan-900/10">
                  {/* Image */}
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 "
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />

                  {/* Overlay Gradient (Supaya terlihat lebih menyatu dengan background putih) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent mix-blend-overlay" />

                  {/* Grid Overlay (Tech Feel) */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
