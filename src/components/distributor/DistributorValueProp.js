'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function DistributorValueProp() {
  const container = useRef(null);
  const t = useTranslations('pageDistributor.valueProp');
  const line1 = t.raw('line1') || [];
  const line2 = t.raw('line2') || [];

  useGSAP(
    () => {
      gsap.fromTo(
        '.value-text span',
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 75%',
            end: 'center center',
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
      className="py-24 md:py-32 bg-[var(--color-dark-77)] text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,var(--color-navy-77)_0%,transparent_70%)] blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full" />

      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
        <h2 className="value-text text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-white tracking-tight">
          {line1.map((text, idx) => (
            <span key={`line1-${idx}`}>{text}</span>
          ))}
          <br className="my-4 block" />
          {line2.map((text, idx) => (
            <span
              key={`line2-${idx}`}
              className="text-[var(--color-cyan-77)] drop-shadow-[0_0_15px_rgba(5,145,190,0.3)]"
            >
              {text}
            </span>
          ))}
        </h2>
        <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
