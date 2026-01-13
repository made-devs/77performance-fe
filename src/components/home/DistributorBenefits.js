"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    title: "Garansi Omset Bulanan",
    desc: "Garansi omset minimum Rp100.000.000 per bulan dari penjualan ke jaringan Bengkel TJM Auto Care dan Raja Oto seluruh Indonesia.",
  },
  {
    title: "Target Order Tahunan",
    desc: "Target Rp500jt/bulan (Rp6 M/tahun). Tahun pertama diringankan: Rp250jt/bulan.",
  },
  {
    title: "Profit Margin Maksimal",
    desc: "Profit hingga 150%, diskon khusus distributor, & special price berdasarkan volume.",
  },
  {
    title: "Garansi Produk Resmi",
    desc: "Garansi nasional 1 tahun dan garansi internasional 2 tahun untuk semua produk.",
  },
  {
    title: "Area Eksklusif",
    desc: "1 distributor untuk 1 kota/wilayah. Tanpa distributor ganda di area yang sama.",
  },
  {
    title: "Pelatihan Produk",
    desc: "Training product knowledge resmi online/offline & update teknologi terbaru.",
  },
  {
    title: "Website Premium Gratis",
    desc: "Website khusus distributor untuk branding (cth: www.7performancejogja.com).",
  },
  {
    title: "Bantuan Legal Korporat",
    desc: "Akses legal team & debt recovery pihak ketiga untuk bantuan tagihan macet.",
  },
  {
    title: "Promosi Artis Nasional",
    desc: "Free promosi Zack Lee & konten siap publish untuk mendukung mitra toko/bengkel.",
  },
  {
    title: "Paket Promosi Lengkap",
    desc: "Marketing set: banner, rak showing, modul produk, & brosur fisik.",
  },
  {
    title: "Sistem Stock Modern",
    desc: "Manajemen stock, barcode custom, & live pricelist update real-time.",
  },
  {
    title: "Paket Display Toko",
    desc: "1 set TV display + video promosi & edukasi siap tayang di toko.",
  },
  {
    title: "Support Emergency",
    desc: "Akses tim pusat fast response untuk stock urgent, klaim, & teknis.",
  },
  {
    title: "Referral Principal",
    desc: "Rekomendasi bengkel & toko langsung dari principal pusat ke distributor area.",
  },
  {
    title: "Free Ongkir Nasional",
    desc: "Gratis ongkir Jabodetabek + Subsidi seluruh Indonesia (Min. order Rp400jt).",
  },
  {
    title: "Konten Marketing Siap",
    desc: "Full kit: Foto produk, video cinematic, materi branding tinggal posting.",
  },
];

const BONUS_BENEFITS = [
  {
    title: "Bonus Omset Tahunan",
    desc: "Reward eksklusif (cash/unit display) berdasarkan pencapaian omset & konsistensi.",
  },
  {
    title: "Prioritas Stok Awal",
    desc: "Akses lebih awal terhadap produk baru & prioritas ketersediaan stock sebelum pasar umum.",
  },
];

const DistributorBenefits = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Header Animation (Tetap Aktif - Aman)
      gsap.from(".benefit-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // REMOVED: Main Grid Cards Animation
      // Animasi grid dihapus total sesuai request agar tidak ada masalah visibility.
      // Kartu akan dirender secara statis oleh browser.

      // 3. Bonus Cards Animation (Tetap Aktif - Aman)
      gsap.from(".bonus-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bonus-container",
          start: "top 90%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            // Mengganti #0891b2 (cyan-500) menjadi #0591be (cyan-77)
            backgroundImage:
              "linear-gradient(#0591be 1px, transparent 1px), linear-gradient(90deg, #0591be 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-77/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        {/* Mengganti bg-blue-100/50 menjadi bg-navy-77/20 */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-77/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-16">
          <div className="benefit-header flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-cyan-77" />
            <span className="text-cyan-77 font-bold tracking-widest uppercase text-sm font-mulish">
              Distributor Value Proposition
            </span>
          </div>
          {/* Mengganti text-slate-900 menjadi text-dark-77 */}
          <h2 className="benefit-header text-4xl lg:text-5xl font-black text-dark-77 font-mulish leading-tight">
            Not Just Buying Parts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
              It's a Structured Partnership.
            </span>
          </h2>
          <p className="benefit-header mt-6 text-lg text-slate-600 max-w-2xl font-mulish">
            Menjadi distributor 77 Performance berarti memiliki akses ke
            ekosistem bisnis yang matang. Kami memberikan dukungan 360° dari
            hulu ke hilir.
          </p>
        </div>

        {/* --- MAIN GRID (16 POINTS) --- */}
        {/* Tidak ada class opacity-0 atau hidden disini, render statis normal */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 mb-8">
          {BENEFITS.map((item, index) => (
            <div
              key={index}
              // Hapus class 'benefit-card' agar tidak tertarget oleh script GSAP lama (jika ada sisa)
              // Tambahkan hover effect CSS murni (hover:scale-[1.02]) untuk interaktivitas tanpa JS
              className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-cyan-77/10 hover:border-cyan-77 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Number Watermark - Mengganti group-hover:text-cyan-50/80 menjadi text-cyan-77/10 */}
              <div className="absolute -right-2 -top-4 text-[80px] font-black text-slate-100/50 select-none group-hover:text-cyan-77/10 transition-colors font-mulish z-0">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Decorative Header Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-transparent group-hover:from-cyan-77 transition-all duration-300" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  {/* Mengganti text-slate-800 menjadi text-dark-77 */}
                  <h3 className="font-mulish font-extrabold text-lg text-dark-77 leading-snug mb-3 group-hover:text-cyan-77 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-mulish">
                    {item.desc}
                  </p>
                </div>

                {/* Micro Interaction Element */}
                <div className="mt-4 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-cyan-77 group-hover:border-cyan-77 transition-all">
                  <svg
                    className="w-3 h-3 text-slate-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BONUS SECTION --- */}
        {/* Mengganti from-slate-900 menjadi from-dark-77 */}
        <div className="bonus-container bg-gradient-to-br from-navy-77 to-cyan-77 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-cyan-77/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-77/20 text-white border border-cyan-77/30 text-xs font-bold uppercase tracking-widest mb-4">
                Exclusive Distributor Perks
              </span>
              <h3 className="text-3xl font-black text-white font-mulish">
                Benefit Tambahan Khusus
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {BONUS_BENEFITS.map((item, index) => (
                <div
                  key={index}
                  className="bonus-card flex items-start gap-6 bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-77 to-navy-77 rounded-lg flex items-center justify-center text-white font-bold text-xl font-mulish shadow-lg shadow-cyan-77/20">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 font-mulish">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-mulish text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorBenefits;
