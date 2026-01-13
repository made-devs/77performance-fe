"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MAIN_PROMO = {
  title: "Buy Shockbreaker / Racksteer",
  highlight: "FREE Trisev Buffer Suspension",
  subtitle: "Program Utama",
  desc: "Setiap pembelian unit Shockbreaker dan/atau Racksteer 77 Performance mendapatkan Bonus Langsung Trisev Buffer Suspension. Tingkatkan kenyamanan & stabilitas tanpa biaya tambahan.",
  tags: ["Shockbreaker", "Racksteer", "Bundling Package"],
};

const ADDITIONAL_PROGRAMS = [
  {
    id: 1,
    title: "Gratis Materi Digital",
    desc: "Akses foto, poster, & konten sosmed resmi HD siap posting.",
    icon: "image",
  },
  {
    id: 2,
    title: "Endorse Video Zack Lee",
    desc: "Video promosi eksklusif bengkel & toko langsung oleh Zack Lee.",
    icon: "star",
  },
  {
    id: 3,
    title: "Akses Video Demo",
    desc: "Video edukasi produk & demo instalasi resmi untuk bantu closing.",
    icon: "play",
  },
  {
    id: 4,
    title: "Diskon Produk 30%",
    desc: "Potongan harga hingga 30% untuk item tertentu selama periode promo.",
    icon: "percent",
  },
  {
    id: 5,
    title: "Harga Paket Bundling",
    desc: "Harga khusus pembelian paket bundling dengan margin profit menarik.",
    icon: "box",
  },
  {
    id: 6,
    title: "Free Ongkir Nasional",
    desc: "Gratis biaya pengantaran pembelian promo ke seluruh Indonesia.",
    icon: "truck",
  },
  {
    id: 7,
    title: "Prioritas Pengiriman",
    desc: "Pesanan promo mendapatkan jalur prioritas proses packing.",
    icon: "fast",
  },
  {
    id: 8,
    title: "Akses Promo Awal",
    desc: "Info launching produk baru & promo lebih awal dibanding pasar.",
    icon: "lock",
  },
  {
    id: 9,
    title: "Diskon 10% di Official Store",
    desc: "Dapatkan diskon 10% untuk setiap pembelian melalui official store.",
    icon: "store",
  },
];

const PromotionStrategy = () => {
  const containerRef = useRef(null);
  const hudCircleRef = useRef(null);
  const bgTextRef = useRef(null);
  const spotlightRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Kinetic Background Typography (Parallax)
      gsap.to(bgTextRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. Spotlight Sweep Movement
      gsap.to(spotlightRef.current, {
        yPercent: 50,
        xPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // 3. Precision Lines Animation
      gsap.from(".precision-line", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      // Entrance Animations
      gsap.fromTo(
        ".promo-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".main-card-promo",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".main-card-wrapper", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".additional-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: ".additional-grid", start: "top 90%" },
        }
      );

      // HUD Rotation
      if (hudCircleRef.current) {
        gsap.to(hudCircleRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "linear",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-[#021526] via-[#0e6ba0] to-[#021526] overflow-hidden text-white"
    >
      {/* --- PREMIUM BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Kinetic Typography Outline */}
        <div
          ref={bgTextRef}
          className="absolute top-20 left-0 whitespace-nowrap opacity-[0.03] leading-none font-black text-[25vw] tracking-tighter uppercase italic"
        >
          77 Performance 77 Performance
        </div>

        {/* Dynamic Spotlight Sweep */}
        <div
          ref={spotlightRef}
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,_rgba(34,211,238,0.15)_0%,_transparent_60%)] blur-[120px]"
        />

        {/* Precision Lines */}
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 precision-line" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 precision-line" />

        {/* Grid & HUD */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          ref={hudCircleRef}
          className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] border border-white/5 border-dashed rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <div className="promo-text opacity-0 flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-cyan-400" />
            <span className="text-cyan-400 font-bold tracking-[0.3em] text-xs uppercase font-mulish">
              Professional Strategy
            </span>
          </div>
          <h2 className="promo-text opacity-0 text-5xl lg:text-7xl font-black font-mulish leading-[1.1] text-white">
            Relevansi Fungsi. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Premium Value.
            </span>
          </h2>
          <p className="promo-text opacity-0 mt-8 text-white/60 text-xl max-w-2xl font-mulish font-light leading-relaxed">
            Membangun kepercayaan mitra melalui strategi produk komplementer
            yang menambah <b>nilai nyata</b> pada setiap transaksi.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="main-card-wrapper mb-20">
          <div className="main-card-promo opacity-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-1 shadow-2xl">
            <div className="relative rounded-[38px] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-14">
              <div className="flex-1 z-10">
                <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 text-cyan-300">
                  {MAIN_PROMO.subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mulish leading-tight">
                  {MAIN_PROMO.title}
                </h3>
                <div className="text-4xl lg:text-5xl font-black text-white mb-8 font-mulish leading-tight">
                  <span className="text-cyan-400">+</span>{" "}
                  {MAIN_PROMO.highlight}
                </div>
                <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-lg font-light italic border-l border-white/20 pl-6">
                  {MAIN_PROMO.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {MAIN_PROMO.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase tracking-tighter bg-white/5 border border-white/10 px-3 py-1 rounded-md text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[500px] aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800"
                  alt="Product"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
                    Corporate Offer
                  </p>
                  <p className="text-white text-xl font-bold font-mulish">
                    Exclusive Bundling Kit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL GRID */}
        <div>
          <h3 className="text-xl font-bold font-mulish text-white/40 uppercase tracking-[0.2em] mb-12 text-center">
            Program Keunggulan
          </h3>
          <div className="additional-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_PROGRAMS.map((item) => (
              <div
                key={item.id}
                className="additional-card opacity-0 group relative bg-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white/40 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-mulish">
                  {item.title}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getIcon(name) {
  const className = "w-6 h-6";
  switch (name) {
    case "image":
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "star":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "play":
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
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "percent":
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "box":
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    case "truck":
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
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1"
          />
        </svg>
      );
    case "fast":
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
    case "lock":
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2m8 0H4"
          />
        </svg>
      );
    case "store":
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
            d="M3 9.5V7a2 2 0 012-2h14a2 2 0 012 2v2.5M3 9.5l1.6 9.5A2 2 0 006.56 21h10.88a2 2 0 001.96-1.99L21 9.5M3 9.5h18"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default PromotionStrategy;
