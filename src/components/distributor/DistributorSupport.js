'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Gift, MonitorPlay, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function DistributorSupport() {
  const container = useRef(null);
  const t = useTranslations('pageDistributor.support');

  useGSAP(
    () => {
      gsap.fromTo(
        '.support-item',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.support-grid',
            start: 'top 80%',
          },
        },
      );
    },
    { scope: container },
  );

  const icons = [Package, Gift, MonitorPlay, Truck];
  const supports = (t.raw('items') || []).map((item, idx) => ({
    ...item,
    icon: icons[idx] || Package,
  }));

  return (
    <section
      ref={container}
      className="py-24 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-navy-77)]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-cyan-77)]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="support-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {supports.map((item, idx) => (
            <div
              key={idx}
              className="support-item group flex flex-col sm:flex-row items-start gap-6 bg-[#111111] p-8 md:p-10 rounded-2xl shadow-2xl border border-white/5 hover:border-[var(--color-cyan-77)]/40 hover:bg-[#151515] transition-all duration-500 ease-out"
            >
              <div className="p-5 bg-gradient-to-br from-[var(--color-navy-77)]/20 to-[var(--color-cyan-77)]/10 rounded-2xl text-[var(--color-cyan-77)] group-hover:scale-110 group-hover:text-white group-hover:from-[var(--color-cyan-77)] group-hover:to-[var(--color-navy-77)] group-hover:shadow-[0_0_25px_rgba(5,145,190,0.4)] transition-all duration-500 shrink-0">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--color-cyan-77)] transition-colors duration-300 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed font-light text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
