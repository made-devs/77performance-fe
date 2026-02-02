"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { X, MapPin, Phone, ArrowRight } from "lucide-react";

// Import MapWrapper secara dinamis dengan SSR false
const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-white/20">
      Loading Map Core...
    </div>
  ),
});

const branches = [
  {
    id: 1,
    city: "JAKARTA (HQ)",
    coords: [-6.1751, 106.865],
    address: "Jl. Otomotif Raya No. 77, Kemayoran, Jakarta Pusat",
    phone: "+62 21 5555 7777",
    role: "HEADQUARTERS",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    city: "SURABAYA",
    coords: [-7.2575, 112.7521],
    address: "Kawasan Industri Rungkut, Surabaya, Jawa Timur",
    phone: "+62 31 8888 9999",
    role: "EAST JAVA HUB",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    city: "MEDAN",
    coords: [3.5952, 98.6722],
    address: "Jl. Gatot Subroto No. 88, Medan, Sumatera Utara",
    phone: "+62 61 4444 2222",
    role: "SUMATRA POINT",
    image:
      "https://images.unsplash.com/photo-1566576912902-1d59f3e0821c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    city: "MAKASSAR",
    coords: [-5.1477, 119.4327],
    address: "Jl. Pettarani No. 100, Makassar, Sulawesi Selatan",
    phone: "+62 411 777 0000",
    role: "EAST INDONESIA",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DistributionMap() {
  const [activeBranch, setActiveBranch] = useState(null);

  // Helper untuk clear active branch (tombol X)
  const handleClose = () => setActiveBranch(null);

  return (
    <section className="relative w-full h-[90vh] bg-slate-900 overflow-hidden flex flex-col md:flex-row">
      {/* 1. MAP CONTAINER */}
      <div className="w-full h-full relative z-0">
        <MapWrapper
          branches={branches}
          activeBranch={activeBranch}
          onBranchClick={setActiveBranch}
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-navy-77)] to-transparent pointer-events-none z-[400]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-navy-77)] to-transparent pointer-events-none z-[400]" />
      </div>

      {/* 2. FLOATING INFO CARD */}
      <div
        className={`
            absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-[500]
            w-[90%] md:w-[450px] bg-[#0a1929]/90 backdrop-blur-xl border border-white/20 text-white rounded-3xl overflow-hidden
            transition-all duration-500 transform shadow-2xl
            ${activeBranch ? "translate-x-0 opacity-100 visible" : "-translate-x-10 opacity-0 invisible"}
        `}
      >
        {activeBranch && (
          <div className="flex flex-col max-h-[80vh] overflow-y-auto">
            {/* IMAGE HEADER */}
            <div className="relative w-full h-48 shrink-0">
              <img
                src={activeBranch.image}
                alt={activeBranch.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] to-transparent" />

              {/* Close Button on Image */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full transition-colors text-white border border-white/20"
              >
                <X size={18} />
              </button>
            </div>

            {/* CONTENT BODY */}
            <div className="p-8 -mt-6 relative z-10">
              <div className="flex items-center gap-2 text-[var(--color-cyan-77)] mb-4">
                <MapPin size={18} />
                <span className="text-xs font-mono tracking-widest uppercase">
                  Location Detail
                </span>
              </div>

              <h3 className="text-4xl font-black tracking-tighter mb-2">
                {activeBranch.city}
              </h3>
              <span className="inline-block px-3 py-1 bg-[var(--color-cyan-77)]/20 text-[var(--color-cyan-77)] border border-[var(--color-cyan-77)]/30 text-xs font-bold uppercase tracking-wider rounded mb-6">
                {activeBranch.role}
              </span>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <p className="text-lg font-light leading-relaxed text-slate-300">
                  {activeBranch.address}
                </p>
                <div className="flex items-center gap-3 text-xl">
                  <Phone size={20} className="text-[var(--color-cyan-77)]" />
                  <span>{activeBranch.phone}</span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 bg-[var(--color-cyan-77)] hover:bg-white hover:text-[var(--color-navy-77)] font-bold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2 group text-white rounded-xl"
              >
                View on G-Maps
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* 3. INSTRUCTION OVERLAY */}
      <div
        className={`absolute bottom-12 right-12 z-[400] text-right pointer-events-none transition-opacity duration-500 ${activeBranch ? "opacity-0" : "opacity-100"}`}
      >
        <h2 className="text-5xl md:text-8xl font-black text-white/5 tracking-tighter leading-none">
          NETWORK
        </h2>
        <p className="text-[var(--color-cyan-77)] font-mono text-xs md:text-sm tracking-widest uppercase animate-pulse">
          Use scroll/pinch to zoom • Click points
        </p>
      </div>

      <style jsx global>{`
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
      `}</style>
    </section>
  );
}
