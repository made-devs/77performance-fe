"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpecsSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate Title
      gsap.from(".spec-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".spec-title",
          start: "top 80%",
        },
      });

      // Animate Grid Items (Staggered Reveal) - Fixed
      const cards = gsap.utils.toArray(".bento-card");

      cards.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Grid Decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl spec-title">
          <span className="text-cyan-600 font-mulish font-bold tracking-widest text-sm uppercase mb-2 block">
            Manufacturing DNA
          </span>
          <h2 className="text-4xl md:text-5xl font-mulish font-black text-slate-900 leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Blueprint
            </span>{" "}
            of <br />
            Global Standards
          </h2>
          <p className="mt-4 text-slate-600 text-lg font-mulish">
            Fondasi manufaktur kami dibangun di atas pilar kualitas yang
            menjamin presisi, konsistensi, dan daya tahan kelas dunia.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* CARD 1: FACTORY ECOSYSTEM (Large) */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-500">
            <div className="absolute inset-0 bg-slate-900">
              {/* Image Placeholder */}
              <div
                className="w-full h-full bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: "url('home2.png')",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

            <div className="relative h-full p-8 flex flex-col justify-end text-white">
              <div className="mb-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-2xl font-mulish font-bold mb-2">
                Integrated Production Ecosystem
              </h3>
              <p className="text-slate-300 text-sm mb-4 max-w-md font-mulish">
                Fasilitas puluhan ribu m² dengan sistem terintegrasi: Machining,
                Assembly, Surface Treatment, hingga Final Inspection dalam satu
                atap.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge text="Automated Assembly" />
                <Badge text="Precision Machining" />
                <Badge text="Scale Industry" />
              </div>
            </div>
          </div>

          {/* CARD 2: EXPERIENCE (Medium) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <h4 className="text-6xl font-mulish font-black text-slate-900 relative z-10">
              15<span className="text-cyan-500 text-4xl">+</span>
            </h4>
            <p className="text-slate-500 font-mulish font-bold text-sm tracking-wider uppercase mt-2 relative z-10">
              Years Experience
            </p>
            <p className="text-xs text-slate-400 mt-2 relative z-10 font-mulish">
              Sejak 2008, rekam jejak produksi stabil & berkelanjutan.
            </p>
          </div>

          {/* CARD 3: GLOBAL REACH (Medium) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-800 hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Abstract Map Dots */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#22d3ee 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-white font-mulish font-bold text-xl">
                Global Market
              </h3>
              <p className="text-cyan-400 text-xs mt-1 font-mulish">
                ASIA • EUROPE • AMERICA • MEA
              </p>
            </div>
            <div className="relative z-10 mt-4">
              <p className="text-slate-400 text-xs leading-relaxed font-mulish">
                Dipercaya di berbagai wilayah dunia untuk pasar Aftermarket &
                OEM Replacement.
              </p>
            </div>
          </div>

          {/* CARD 4: QUALITY STANDARDS (Tall) */}
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-300 flex flex-col">
            <div className="mb-6">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 text-cyan-600">
                <svg
                  className="w-6 h-6"
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
              <h3 className="text-xl font-mulish font-bold text-slate-900">
                Strict Quality Control
              </h3>
              <p className="text-slate-500 text-xs mt-2 font-mulish">
                Multi-stage inspection dari material hingga barang jadi.
              </p>
            </div>

            <ul className="space-y-4 flex-grow">
              <ListItem
                title="ISO Certified"
                desc="Quality Management System"
              />
              <ListItem
                title="E-Coating"
                desc="Electrophoresis Anti-Corrosion"
              />
              <ListItem title="Dynamic Damping" desc="100% Performance Test" />
              <ListItem title="High Cycle Test" desc="Durability Assurance" />
              <ListItem title="OEM Standard" desc="Equivalent Quality" />
            </ul>
          </div>

          {/* CARD 5: PRODUCT PORTFOLIO (Wide) */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-mulish font-bold text-slate-900 mb-2">
                Complete Portfolio
              </h3>
              <p className="text-slate-600 text-sm mb-4 font-mulish">
                Rangkaian produk chassis & suspensi lengkap: Shock Absorber,
                Control Arm, Bushing, Ball Joint, hingga Rack End.
              </p>
              <div className="flex gap-3">
                <div className="px-3 py-1 bg-slate-100 rounded text-xs font-mulish font-bold text-slate-600">
                  Shock Absorber
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded text-xs font-mulish font-bold text-slate-600">
                  Suspension Parts
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-32 md:h-full relative">
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
          <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-lg text-white flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg font-mulish font-bold mb-2">R&D Oriented</h3>
            <p className="text-cyan-100 text-xs leading-relaxed font-mulish">
              Tim riset internal untuk peningkatan desain & material secara
              berkelanjutan.
            </p>
            <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
              <span className="text-xs font-mulish font-bold">OEM & ODM</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-mulish font-medium text-white">
      {text}
    </span>
  );
}

function ListItem({ title, desc }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
      <div>
        <h4 className="text-sm font-mulish font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
          {title}
        </h4>
        <p className="text-[10px] text-slate-500 uppercase tracking-wide font-mulish">
          {desc}
        </p>
      </div>
    </li>
  );
}
