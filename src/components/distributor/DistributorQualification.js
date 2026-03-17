'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function DistributorQualification() {
  const container = useRef(null);
  const t = useTranslations('pageDistributor.qualification');

  const quals = t.raw('items') || [];

  useGSAP(
    () => {
      gsap.fromTo(
        '.qual-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.qual-list',
            start: 'top 85%',
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 md:py-32 relative overflow-hidden bg-[#050a10]"
    >
      {/* Decorative deep flares */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[var(--color-navy-77)] blur-[250px] rounded-full opacity-30 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[var(--color-cyan-77)] blur-[250px] rounded-full opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-white font-extrabold mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-md">
            {t('title')}
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
            {t('description')}
          </p>
        </div>

        <ul className="qual-list grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {quals.map((item, idx) => (
            <li
              key={idx}
              className="qual-item group flex items-start gap-5 text-lg md:text-xl font-medium text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[var(--color-cyan-77)]/30 rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-[0_15px_40px_rgba(5,145,190,0.15)] hover:-translate-y-1"
            >
              <div className="p-3 rounded-2xl bg-[var(--color-navy-77)]/20 group-hover:bg-gradient-to-br from-[var(--color-cyan-77)] to-[var(--color-navy-77)] group-hover:shadow-[0_0_20px_rgba(5,145,190,0.5)] transition-all duration-500 shrink-0 border border-white/5 group-hover:border-transparent">
                <CheckCircle2
                  className="text-[var(--color-cyan-77)] group-hover:text-white min-w-[28px] min-h-[28px] transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>
              <span className="tracking-wide font-light flex-1 leading-relaxed mt-1 text-slate-200 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
