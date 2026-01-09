import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-mulish relative overflow-hidden">
      {/* --- DECORATIVE TOP BORDER --- */}
      <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 opacity-50" />

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* COLUMN 1: BRAND IDENTITY (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">
              77 <span className="text-cyan-500">PERFORMANCE</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Kami membangun ekosistem otomotif masa depan. Bukan sekadar
              menjual sparepart, tapi memberikan solusi bisnis berkelanjutan,
              sistem teruji, dan produk Grade A untuk pertumbuhan mitra kami.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon="facebook" href="#" />
              <SocialIcon icon="instagram" href="#" />
              <SocialIcon icon="linkedin" href="#" />
              <SocialIcon icon="youtube" href="#" />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-lg">Perusahaan</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Tentang Kami</FooterLink>
              <FooterLink href="#">Visi & Misi</FooterLink>
              <FooterLink href="#">Karir</FooterLink>
              <FooterLink href="#">Berita & Artikel</FooterLink>
            </ul>
          </div>

          {/* COLUMN 3: SUPPORT (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">
                  Headquarters:
                  <br />
                  Jl. Otomotif Raya No. 77
                  <br />
                  Jakarta Utara, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-cyan-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:partnership@77performance.id"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  partnership@77performance.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-cyan-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg">Tetap Terhubung</h4>
            <p className="text-sm text-slate-400">
              Dapatkan update produk terbaru dan strategi bisnis otomotif
              langsung di inbox Anda.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Alamat Email Anda"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
              />
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm uppercase tracking-wider">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT BOTTOM BAR --- */}
      <div className="bg-slate-900 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} 77 Performance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* --- BACKGROUND GLOW ACCENT --- */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 flex items-center gap-1 text-sm"
    >
      {/* Icon panah kecil muncul saat hover bisa ditambahkan dengan CSS group, tapi simple transition pl-2 sudah cukup elegan */}
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon, href }) => {
  // SVG Paths simple untuk icon sosmed
  let path = "";
  if (icon === "facebook")
    path = "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z";
  if (icon === "instagram")
    path =
      "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"; // Circle version for simplicity
  if (icon === "linkedin")
    path =
      "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"; // Simplified
  if (icon === "youtube")
    path =
      "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z";

  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
};

export default Footer;
