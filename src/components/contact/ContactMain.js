"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Clock, Building2, Send } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ContactMain() {
  const container = useRef(null);
  const t = useTranslations("pageContact");

  useGSAP(
    () => {
      // Animasi Form Fields muncul satu per satu
      gsap.from(".form-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Animasi Info Kiri
      gsap.from(".info-item", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-white text-[var(--color-navy-77)]"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT: INFO & DISCLAIMER */}
          <div className="space-y-12">
            <div className="info-item">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                {t("main.headquartersTitle")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                {t("main.headquartersDesc")}
              </p>
            </div>

            <div className="info-item space-y-8 border-t border-slate-200 pt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-cyan-77)] shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">
                    {t("main.officeAddressTitle")}
                  </h4>
                  <p
                    className="text-slate-600"
                    dangerouslySetInnerHTML={{
                      __html:
                        t("main.officeAddress") ||
                        "Jl. Otomotif Raya No. 77, Kemayoran<br />Jakarta Pusat, Indonesia 10620",
                    }}
                  ></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-cyan-77)] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">
                    {t("main.businessHoursTitle")}
                  </h4>
                  <p
                    className="text-slate-600"
                    dangerouslySetInnerHTML={{
                      __html:
                        t("main.businessHours") ||
                        "Mon - Fri: 08:30 - 17:00 WIB<br />Sat: 09:00 - 14:00 WIB",
                    }}
                  ></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-cyan-77)] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">
                    {t("main.b2bTitle")}
                  </h4>
                  <p className="text-slate-600">
                    partnership@77performance.co.id
                  </p>
                </div>
              </div>
            </div>

            {/* Selection Disclaimer */}
            <div className="info-item bg-slate-50 p-6 border-l-4 border-[var(--color-navy-77)] mt-12">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">
                {t("main.selectionTitle")}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed text-justify">
                {t("main.selectionDesc")}
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:pl-12">
            <h3 className="text-xl font-bold tracking-widest uppercase text-[var(--color-cyan-77)] mb-8 info-item">
              {t("main.formTitle")}
            </h3>

            <form className="space-y-2">
              {/* Input Field Component */}
              <div className="form-item grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                    {t("main.formName")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-[var(--color-cyan-77)] transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                    {t("main.formCompany")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-[var(--color-cyan-77)] transition-colors text-lg"
                    placeholder="PT. Maju Mundur"
                  />
                </div>
              </div>

              <div className="form-item space-y-2 pb-6">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  {t("main.formEmail")}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-[var(--color-cyan-77)] transition-colors text-lg"
                  placeholder="business@company.com"
                />
              </div>

              <div className="form-item space-y-2 pb-6">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  {t("main.formPhone")}
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-[var(--color-cyan-77)] transition-colors text-lg"
                  placeholder="+62 ..."
                />
              </div>

              <div className="form-item space-y-2 pb-8">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  {t("main.formPurpose")}
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-[var(--color-cyan-77)] transition-colors text-lg min-h-[100px] resize-none"
                  placeholder={t("main.formPurposePlaceholder")}
                />
              </div>

              <div className="form-item">
                <button
                  type="button"
                  className="group w-full md:w-auto px-8 py-4 bg-[var(--color-navy-77)] text-white font-bold tracking-widest uppercase text-sm hover:bg-[var(--color-cyan-77)] transition-all duration-300 flex items-center justify-center gap-4"
                >
                  {t("main.formSubmit")}
                  <Send
                    size={16}
                    className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
