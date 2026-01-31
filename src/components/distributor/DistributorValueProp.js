"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DistributorValueProp() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".value-text span",
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            end: "center center",
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 md:py-32 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h2 className="value-text text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-[var(--color-navy-77)]">
          <span>Joining </span>
          <span>77 </span>
          <span>Performance </span>
          <span>is </span>
          <span>not </span>
          <span>about </span>
          <span>buying </span>
          <span>products. </span>
          <br className="my-4 block" />
          <span className="text-[var(--color-cyan-77)]">It </span>
          <span className="text-[var(--color-cyan-77)]">is </span>
          <span className="text-[var(--color-cyan-77)]">entering </span>
          <span className="text-[var(--color-cyan-77)]">a </span>
          <span className="text-[var(--color-cyan-77)]">structured </span>
          <span className="text-[var(--color-cyan-77)]">business </span>
          <span className="text-[var(--color-cyan-77)]">ecosystem.</span>
        </h2>
        <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto">
          We provide the system, the product, and the market positioning. You
          provide the local dominance.
        </p>
      </div>
    </section>
  );
}
