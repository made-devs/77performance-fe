"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "01",
    title: "SHOCK ABSORBER",
    category: "DAMPING",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "CONTROL ARMS",
    category: "LINKAGE",
    image:
      "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    title: "BRAKE SYSTEM",
    category: "SAFETY",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "STABILIZER",
    category: "BALANCE",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "05",
    title: "BALL JOINT",
    category: "PIVOT",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProductsCategories() {
  const container = useRef(null);
  const raceRef = useRef(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".category-panel");

      // Calculate total width needed
      const totalWidth = 100 * (slides.length - 1); // 100vw * (n - 1)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true, // Kunci layar
          scrub: 1, // Smooth dragging effect
          snap: 1 / (slides.length - 1), // Snap ke tiap slide
          end: () => "+=" + container.current.offsetWidth * 3, // Durasi scroll virtual
          invalidateOnRefresh: true,
        },
      });

      // Horizontal Scroll Animation
      tl.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
      });

      // Parallax effect untuk gambar di dalam slide
      slides.forEach((slide) => {
        gsap.to(slide.querySelector("img"), {
          x: 100, // Geser gambar sedikit berlawanan arah scroll
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: tl,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative overflow-hidden bg-slate-900">
      {/* Container Panjang Horisontal */}
      <div ref={raceRef} className="flex flex-nowrap h-screen w-fit">
        {/* Intro Slide (Judul Besar) */}
        <div className="category-panel w-screen h-screen flex-shrink-0 bg-[var(--color-navy-77)] relative flex items-center justify-center border-r border-white/10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 text-center px-4">
            <span className="block text-[var(--color-cyan-77)] font-mono text-sm tracking-[0.5em] mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-[12vw] font-black leading-[0.85] text-white tracking-tighter">
              PRODUCT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-77)] to-white">
                RANGE
              </span>
            </h2>
            <div className="mt-12 flex items-center justify-center gap-4 text-white/50 animate-pulse">
              <span>SCROLL TO EXPLORE</span>
              <ArrowUpRight size={20} className="rotate-45" />
            </div>
          </div>
        </div>

        {/* Product Slides */}
        {categories.map((item, index) => (
          <div
            key={index}
            className="category-panel w-screen h-screen flex-shrink-0 relative flex"
          >
            {/* Split Layout: Image & Text overlapping */}

            {/* Background Image (Full Height) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-[110%] h-full object-cover filter brightness-50 contrast-125" // Scale 110% for parallax room
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
              <div className="border-t border-[var(--color-cyan-77)] pt-8 flex flex-col md:flex-row justify-between items-end">
                <div>
                  <span className="text-[10vw] md:text-[8vw] font-black text-white leading-[0.8] opacity-20 select-none absolute top-10 left-10">
                    {item.id}
                  </span>
                  <div className="inline-block px-3 py-1 bg-[var(--color-cyan-77)] text-white text-xs font-bold tracking-widest mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-4">
                    {item.title}
                  </h3>
                </div>

                {/* Action Button */}
                <button className="group flex items-center gap-4 border border-white/30 rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white hover:text-[var(--color-navy-77)] transition-all duration-300">
                  <span className="text-sm font-bold tracking-widest">
                    VIEW SPECS
                  </span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
