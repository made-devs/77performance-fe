"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandPositioning = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Reveal Text elements
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
      });

      // Parallax Effect
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Decor (Grid & Aero Flow) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-77/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: STORYTELLING */}
          <div className="lg:col-span-5">
            <div className="reveal-text mb-4">
              <Badge text="Brand Positioning" />
            </div>

            <h2 className="reveal-text text-4xl lg:text-5xl font-mulish font-black text-dark-77 leading-[1.15] mb-8">
              The Long-Term <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-blue-900">
                Business Game.
              </span>
            </h2>

            <p className="reveal-text text-gray-600 text-lg leading-relaxed mb-8 font-mulish">
              Di pasar yang dipenuhi fluktuasi kualitas, kami memilih jalur
              berbeda.
              <strong className="text-dark-77"> 77 Performance</strong> tidak
              diciptakan untuk sekadar bersaing di rak harga termurah.
            </p>

            <div className="reveal-text border-l-4 border-cyan-77 pl-6 py-2 mb-10 bg-slate-50/50">
              <p className="text-dark-77 font-bold text-xl italic font-mulish leading-snug">
                "Kami tidak hanya menjual sparepart. Kami membangun otoritas,
                konsistensi, dan kepercayaan untuk masa depan."
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Value Over Price",
                  desc: "Harga yang mencerminkan kualitas material Grade-A & R&D.",
                },
                {
                  title: "Global Consistency",
                  desc: "Kualitas batch pertama identik dengan batch ke-1000.",
                },
                {
                  title: "Legacy Building",
                  desc: "Bagi mitra yang mencari otoritas bisnis, bukan sekadar komoditas.",
                },
              ].map((item, i) => (
                <div key={i} className="reveal-text flex items-start group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-77 mr-4 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-dark-77 font-black text-sm uppercase tracking-wider group-hover:text-cyan-77 transition-colors font-mulish">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1 font-mulish">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: VISUAL IDENTITY */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
              <div className="absolute inset-0 bg-dark-77/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2600&auto=format&fit=crop"
                alt="77 Performance Engineering"
                className="w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />

              {/* Float Card */}
              <div className="absolute bottom-8 right-8 z-20 bg-dark-77/90 backdrop-blur-md border border-white/10 p-6 text-white rounded-xl shadow-2xl">
                <div className="text-3xl font-mulish font-black text-cyan-400 mb-1">
                  100%
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-80 font-mulish">
                  Premium Standard Compliance
                </div>
              </div>
            </div>

            {/* Tech Decor Accent */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[url('/grid-pattern.png')] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

function Badge({ text }) {
  return (
    <span className="inline-block px-3 py-1 rounded-md bg-cyan-77/10 border border-cyan-77/20 text-cyan-77 font-mulish font-extrabold tracking-widest text-[10px] uppercase">
      {text}
    </span>
  );
}

export default BrandPositioning;
