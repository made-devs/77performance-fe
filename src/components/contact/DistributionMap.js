"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  MapPin,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

const MapLoadingFallback = () => {
  const t = useTranslations("pageContact");
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-white/20">
      {t("map.loading")}
    </div>
  );
};

// Import MapWrapper secara dinamis dengan SSR false
const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
  loading: MapLoadingFallback,
});

const defaultBranches = [
  {
    id: 1,
    coords: [-6.1751, 106.865],
    phone: "+62 21 5555 7777",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    coords: [-7.2575, 112.7521],
    phone: "+62 31 8888 9999",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    coords: [3.5952, 98.6722],
    phone: "+62 61 4444 2222",
    image:
      "https://images.unsplash.com/photo-1566576912902-1d59f3e0821c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    coords: [-5.1477, 119.4327],
    phone: "+62 411 777 0000",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DistributionMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("pageContact");

  const transBranches = t.raw("map.branches") || [];
  const branches = defaultBranches.map((b, i) => ({
    ...b,
    ...transBranches[i],
    city:
      transBranches[i]?.city ?? (i === 0 ? "JAKARTA (HQ)" : `BRANCH ${i + 1}`),
    address: transBranches[i]?.address ?? "",
    role: transBranches[i]?.role ?? "OFFICE",
  }));

  const activeBranch = branches[activeIndex] ?? branches[0];

  const handleMarkerClick = (branch) => {
    const idx = branches.findIndex((b) => b.id === branch.id);
    if (idx >= 0) setActiveIndex(idx);
  };

  const handlePrevBranch = () => {
    setActiveIndex((prev) => (prev - 1 + branches.length) % branches.length);
  };

  const handleNextBranch = () => {
    setActiveIndex((prev) => (prev + 1) % branches.length);
  };

  return (
    <section className="w-full bg-[#145591] pt-28 pb-0 flex flex-col relative z-20">
      {/* 1. INTRO & HEADER SECTION */}
      <div className="container mx-auto px-6 max-w-7xl mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6 font-semibold backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {t("map.networkTitle") || "Global Network"}
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
          Global Reach,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200">
            Local Presence
          </span>
        </h2>

        <p className="text-blue-100/80 max-w-2xl mx-auto font-light text-lg">
          Connect with 77 Performance anywhere in the world. Our strategic
          distribution network ensures you get unobstructed access to premium
          quality and top-tier services, regardless of your location.
        </p>
      </div>

      {/* 2. ROUNDED MAP WRAPPER EXPEREINCE */}
      <div className="relative w-full h-[80vh] lg:h-[800px] bg-[#0a1929] overflow-hidden flex flex-col md:flex-row rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] border-t border-white/10">
        {/* MAP KANVAS */}
        <div className="w-full h-full relative z-0">
          <MapWrapper
            branches={branches}
            activeBranch={activeBranch}
            onBranchClick={handleMarkerClick}
          />

          {/* Overlay Gradients */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a1929] to-transparent pointer-events-none z-[400]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a1929] to-transparent pointer-events-none z-[400]" />
        </div>

        {/* FLOATING INFO CARD */}
        <div
          className={`
              absolute top-[45%] md:top-1/2 left-6 md:left-24 -translate-y-1/2 z-[500]
              w-[90%] md:w-[450px] bg-[#0a1929]/90 backdrop-blur-xl border border-white/10 text-white rounded-3xl overflow-hidden
              transition-all duration-500 transform shadow-2xl
              translate-x-0 opacity-100 visible
          `}
        >
          <div className="flex flex-col max-h-[75vh] overflow-y-auto custom-scrollbar">
            {/* IMAGE HEADER */}
            <div className="relative w-full h-48 shrink-0">
              <img
                src={activeBranch.image}
                alt={activeBranch.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] to-transparent border-b border-white/5" />
            </div>

            {/* CONTENT BODY */}
            <div className="p-8 -mt-6 relative z-10">
              <div className="flex items-center gap-2 text-cyan-400 mb-4">
                <MapPin size={18} />
                <span className="text-xs font-mono tracking-widest uppercase">
                  {t("map.locationDetail")}
                </span>
              </div>

              <h3 className="text-4xl font-black tracking-tighter mb-2">
                {activeBranch.city}
              </h3>
              <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                {activeBranch.role}
              </span>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <p className="text-lg font-light leading-relaxed text-blue-100/70">
                  {activeBranch.address}
                </p>
                <div className="flex items-center gap-3 text-xl">
                  <Phone size={20} className="text-cyan-400" />
                  <span className="font-medium text-white">
                    {activeBranch.phone}
                  </span>
                </div>
              </div>

              {/* CARD PAGINATION */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevBranch}
                  className="w-12 h-12 rounded-full border border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-white hover:text-cyan-400 transition-all flex items-center justify-center pointer-events-auto"
                  aria-label="Previous office"
                >
                  <ChevronLeft size={20} />
                </button>

                <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-200/50">
                  {activeIndex + 1} / {branches.length}
                </span>

                <button
                  onClick={handleNextBranch}
                  className="w-12 h-12 rounded-full border border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-white hover:text-cyan-400 transition-all flex items-center justify-center pointer-events-auto"
                  aria-label="Next office"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-4 bg-cyan-500 text-slate-900 font-bold tracking-widest uppercase text-xs hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group rounded-xl hover:shadow-[0_10px_20px_rgba(34,211,238,0.2)]"
              >
                {t("map.viewOnMaps")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 3. INSTRUCTION OVERLAY */}
        <div className="absolute bottom-10 right-10 z-[400] text-right pointer-events-none transition-opacity duration-500 opacity-100 hidden md:block">
          <h2 className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter leading-none mb-2">
            {t("map.networkTitle")}
          </h2>
          <p className="text-cyan-400/70 font-mono text-xs md:text-sm tracking-widest uppercase animate-pulse">
            {t("map.instructionOverlay")}
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-marker {
          background: transparent;
          border: none;
        }
        .marker-dot {
          width: 20px;
          height: 20px;
          background-color: #0591be;
          border-radius: 50%;
          border: 3px solid white;
          position: relative;
          box-shadow: 0 0 10px rgba(5, 145, 190, 0.8);
        }
        .marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background-color: #0591be;
          border-radius: 50%;
          opacity: 0.5;
          animation: ping-marker 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          z-index: -1;
        }
        @keyframes ping-marker {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `,
        }}
      />
    </section>
  );
}
