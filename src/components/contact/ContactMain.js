"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Clock,
  Building2,
  Send,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ContactMain() {
  const container = useRef(null);
  const t = useTranslations("pageContact");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
      });

      tl.from(".info-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".form-item",
        {
          x: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative py-32 bg-[#145591] overflow-hidden"
    >
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0c3157] to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT: INFO & DISCLAIMER (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="info-item">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6 font-semibold backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Global Hub
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-white leading-tight">
                {t("main.headquartersTitle")}
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed font-light">
                {t("main.headquartersDesc")}
              </p>
            </div>

            <div className="info-item space-y-8">
              {/* Info Block 1 */}
              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <Building2 size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2 text-blue-200/60">
                    {t("main.officeAddressTitle")}
                  </h4>
                  <p
                    className="text-white leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{
                      __html:
                        t("main.officeAddress") ||
                        "Jl. Otomotif Raya No. 77, Kemayoran<br />Jakarta Pusat, Indonesia 10620",
                    }}
                  />
                </div>
              </div>

              {/* Info Block 2 */}
              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2 text-blue-200/60">
                    {t("main.businessHoursTitle")}
                  </h4>
                  <p
                    className="text-white leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{
                      __html:
                        t("main.businessHours") ||
                        "Mon - Fri: 08:30 - 17:00 WIB<br />Sat: 09:00 - 14:00 WIB",
                    }}
                  />
                </div>
              </div>

              {/* Info Block 3 */}
              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2 text-blue-200/60">
                    {t("main.b2bTitle")}
                  </h4>
                  <p className="text-white font-medium">
                    partnership@77performance.co.id
                  </p>
                </div>
              </div>
            </div>

            {/* Selection Disclaimer */}
            <div className="info-item relative overflow-hidden bg-[#0a2f54] rounded-2xl p-8 border border-[#145591] shadow-[0_20px_40px_rgba(0,0,0,0.2)] mt-6">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-cyan-400 pointer-events-none">
                <ShieldCheck size={120} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-cyan-400 flex items-center gap-2">
                  <ShieldCheck size={16} />
                  {t("main.selectionTitle")}
                </h4>
                <p className="text-sm text-blue-100/70 leading-relaxed text-justify font-light">
                  {t("main.selectionDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-tr-[2rem] rounded-bl-[4rem] pointer-events-none" />

              <h3 className="text-2xl font-black tracking-tight text-white mb-8 form-item">
                {t("main.formTitle")}
              </h3>

              <form className="space-y-6">
                {/* Input Field Component */}
                <div className="form-item grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 ml-1">
                      {t("main.formName")}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-white font-medium placeholder:text-blue-200/30 placeholder:font-normal"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 ml-1">
                      {t("main.formCompany")}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-white font-medium placeholder:text-blue-200/30 placeholder:font-normal"
                      placeholder="PT. Bina Karya"
                    />
                  </div>
                </div>

                <div className="form-item grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 ml-1">
                      {t("main.formEmail")}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-white font-medium placeholder:text-blue-200/30 placeholder:font-normal"
                      placeholder="business@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 ml-1">
                      {t("main.formPhone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-white font-medium placeholder:text-blue-200/30 placeholder:font-normal"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div className="form-item space-y-2 pt-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 ml-1">
                    {t("main.formPurpose")}
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-white font-medium placeholder:text-blue-200/30 placeholder:font-normal min-h-[140px] resize-none"
                    placeholder={t("main.formPurposePlaceholder")}
                  />
                </div>

                <div className="form-item pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 mt-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-200/50">
                    <PhoneCall size={14} />
                    <span>Secure End-to-End</span>
                  </div>

                  <button
                    type="button"
                    className="group w-full sm:w-auto px-8 py-4 bg-cyan-500 text-slate-900 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-cyan-400 hover:shadow-[0_10px_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10">
                      {t("main.formSubmit")}
                    </span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `,
        }}
      />
    </section>
  );
}
