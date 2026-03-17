"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsCategories() {
  const container = useRef(null);
  const t = useTranslations("pageProducts");
  const intro = t.raw("categories.intro");
  const categories = t.raw("categories.items");

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".bento-card");
      if (!cards.length || !container.current) return;

      const revealCards = () => {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "opacity,transform",
        });
      };

      const trigger = ScrollTrigger.create({
        trigger: container.current,
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
        onEnter: revealCards,
      });

      const refreshTriggers = () => ScrollTrigger.refresh();
      const rafId = requestAnimationFrame(refreshTriggers);
      window.addEventListener("load", refreshTriggers);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("load", refreshTriggers);
        trigger.kill();
      };
    },
    {
      scope: container,
      revertOnUpdate: true,
      dependencies: [categories.length],
    },
  );

  // Custom function to create bento layout variations
  const getBentoClass = (index) => {
    const pattern = [
      "md:col-span-2 md:row-span-2", // Large feature card
      "md:col-span-1 md:row-span-1", // Standard
      "md:col-span-1 md:row-span-1", // Standard
      "md:col-span-2 md:row-span-1", // Wide (shares row with next)
      "md:col-span-1 md:row-span-1", // Partner card to keep pair on same row
      "md:col-span-1 md:row-span-1", // Standard / fills remaining column
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section ref={container} className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="block text-[#0591be] font-mono text-sm font-bold tracking-[0.5em] mb-4 uppercase drop-shadow-md">
            {intro.tag}
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mulish leading-[1.1] text-white tracking-tighter mb-6">
            {intro.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0591be] to-cyan-200">
              {intro.titleLine2}
            </span>
          </h2>
          <p className="text-white/60 font-mono tracking-widest text-sm uppercase flex items-center gap-3">
            {intro.scrollHint}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[380px]">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`bento-card group relative rounded-[2rem] overflow-hidden ${getBentoClass(index)} bg-[#111] hover:shadow-[0_0_40px_rgba(5,145,190,0.15)] transition-all duration-500 border border-white/5 hover:border-[#0591be]/30 cursor-pointer flex flex-col justify-end`}
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.45] contrast-125 group-hover:scale-110 group-hover:brightness-[0.6] transition-all duration-700 ease-out"
                />
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#145591]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0591be]/0 to-black/80" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                {/* Subtle ID watermark */}
                <span className="absolute top-8 right-8 text-[4rem] font-black text-white mix-blend-overlay opacity-10 leading-none select-none group-hover:text-[#0591be] transition-colors duration-500">
                  {item.id}
                </span>

                <div className="flex justify-between items-end gap-6 relative">
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-[#0591be]/20 backdrop-blur-md text-[#0591be] text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-[#0591be]/30 mb-4 group-hover:bg-[#0591be] group-hover:text-white transition-colors duration-300">
                      {item.category}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9] group-hover:text-[#0591be] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Icon Action */}
                  <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0591be] group-hover:border-[#0591be] group-hover:-translate-y-2 group-hover:rotate-45 transition-all duration-300 ease-out">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
