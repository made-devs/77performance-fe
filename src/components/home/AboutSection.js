import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* --- AERO FLOW BACKGROUND START --- */}

      {/* 1. Top-Left Cyan Flow (Soft Entry) */}
      <div className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-br from-cyan-77/12 via-cyan-77/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Bottom-Right Cyan Flow (Soft Exit) */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl from-cyan-77/12 via-cyan-77/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Subtle Tech Grid Pattern (Optional - for industrial feel) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* --- AERO FLOW BACKGROUND END --- */}

      {/* Decorative Background Element (Blue Slash) - Keep if you like it */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-20 z-0" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Visual Composition */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
                alt="Automotive Factory Production Line"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge: 15 Years Experience */}
              <div className="absolute bottom-0 left-0 bg-cyan-77 text-white p-6 max-w-[200px]">
                <p className="text-4xl font-mulish font-black">15+</p>
                <p className="text-sm font-mulish font-bold leading-tight">
                  Years of Global Manufacturing Experience
                </p>
              </div>
            </div>

            {/* Decorative Pattern/Dots */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[url('/grid-pattern.png')] opacity-20" />
          </div>

          {/* RIGHT COLUMN: Content */}
          <div>
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-cyan-77" />
              <span className="text-cyan-77 font-mulish font-bold tracking-widest text-sm uppercase">
                Global Ready Vision
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-mulish font-black text-dark-77 leading-tight mb-6">
              Built on Proven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
                Global Manufacturing
              </span>
            </h2>

            {/* Main Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-mulish">
              77 Performance adalah brand sparepart otomotif impor premium yang
              dibangun di atas fondasi manufaktur global, menggunakan material
              Premium Grade A, serta didukung sistem bisnis untuk pertumbuhan
              jangka panjang.
            </p>

            {/* Key Features List */}
            <div className="space-y-4">
              <FeatureItem text="Global Manufacturing Standard" />
              <FeatureItem text="Material Premium Grade A" />
              <FeatureItem text="Sistem Bisnis untuk Long-term Growth" />
            </div>

            {/* Stats / Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-mulish font-bold text-dark-77 text-xl">
                  10k+
                </h4>
                <p className="text-xs text-gray-500 uppercase font-mulish">
                  SQM Facility
                </p>
              </div>
              <div>
                <h4 className="font-mulish font-bold text-dark-77 text-xl">
                  OEM
                </h4>
                <p className="text-xs text-gray-500 uppercase font-mulish">
                  Quality Standard
                </p>
              </div>
              <div>
                <h4 className="font-mulish font-bold text-dark-77 text-xl">
                  4+
                </h4>
                <p className="text-xs text-gray-500 uppercase font-mulish">
                  Continents Export
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for the List Items
function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 border-l-4 border-cyan-77 hover:bg-white hover:shadow-md transition-all duration-300 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-77/10 flex items-center justify-center text-cyan-77 group-hover:bg-cyan-77 group-hover:text-white transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="font-mulish font-bold text-dark-77">{text}</span>
    </div>
  );
}
