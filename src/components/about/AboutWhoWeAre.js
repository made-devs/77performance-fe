"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutWhoWeAre() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animasi Garis Dekorasi
      gsap.from(".divider-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Animasi Text Utama (Highlight)
      gsap.from(".main-statement span", {
        opacity: 0.1,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".main-statement",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1, // Text menyala sesuai scroll
        },
      });

      // Animasi Paragraf Detail
      gsap.from(".detail-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".details-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-white text-[var(--color-navy-77)] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label Section */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-[var(--color-cyan-77)]">
            01 / The Identity
          </span>
          <div className="divider-line h-[1px] flex-1 bg-slate-200" />
        </div>

        {/* Big Statement - Scroll Scrubbed */}
        <h2 className="main-statement text-4xl md:text-7xl font-bold leading-[1.1] mb-20 max-w-5xl">
          <span>We </span>
          <span>are </span>
          <span>not </span>
          <span>just </span>
          <span>importers. </span>
          <br className="hidden md:block" />
          <span className="text-[var(--color-cyan-77)]">We </span>
          <span className="text-[var(--color-cyan-77)]">are </span>
          <span className="text-[var(--color-cyan-77)]">brand </span>
          <span className="text-[var(--color-cyan-77)]">builders </span>
          <span>engineered </span>
          <span>for </span>
          <span>long-term </span>
          <span>excellence.</span>
        </h2>

        {/* Detailed Content */}
        <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-slate-200 pt-12">
          <div className="detail-text">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Global Manufacturing DNA
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              77 Performance berdiri kokoh di atas fondasi manufaktur global.
              Setiap komponen yang kami rilis telah melalui proses R&D ketat,
              bukan sekadar renaming produk generik.
            </p>
          </div>
          <div className="detail-text">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Value Beyond Price
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fokus kami adalah menciptakan{" "}
              <strong>Sustainable Business</strong>. Produk kami tidak dirancang
              untuk perang harga murah, melainkan memberikan konsistensi
              performa yang membangun kepercayaan pelanggan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
