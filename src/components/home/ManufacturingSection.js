'use client';
import Image from 'next/image';

const FEATURES = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M7 7h0v0" />
        <path d="M17 17h0v0" />
      </svg>
    ),
    title: 'Industrial Scale Facility',
    desc: 'Puluhan ribu meter persegi, produksi, R&D, QC, dan warehouse terpusat.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Automated Assembly Line',
    desc: 'Menggunakan sistem otomatis untuk konsistensi dan efisiensi produksi.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 20v-6M12 4v2M6.5 7l-1.5 1.5M17.5 7l1.5 1.5M4 12h2M18 12h2M6.5 17l-1.5-1.5M17.5 17l1.5-1.5" />
      </svg>
    ),
    title: 'Precision Machining',
    desc: 'Teknologi machining presisi untuk akurasi dan performa komponen.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Multi-stage Quality Control',
    desc: 'Inspeksi berlapis dari material, proses, hingga final inspection.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 20v-6M12 4v2M6.5 7l-1.5 1.5M17.5 7l1.5 1.5M4 12h2M18 12h2M6.5 17l-1.5-1.5M17.5 17l1.5-1.5" />
      </svg>
    ),
    title: 'R&D Oriented Manufacturing',
    desc: 'Tim R&D internal untuk inovasi desain dan peningkatan kualitas.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Global Supply & OEM Replacement',
    desc: 'Pengalaman 15+ tahun, produk digunakan di pasar global dan OEM.',
  },
];

export default function ManufacturingSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Ornamen biru diagonal kanan atas */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-cyan-77/30 to-blue-900/10 skew-x-12 pointer-events-none z-0" />
      {/* Ornamen lingkaran biru transparan kiri bawah */}
      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-cyan-77/10 blur-2xl z-0" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Judul & Deskripsi */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black font-display text-dark-77 mb-4">
            Global Manufacturing{' '}
            <span className="text-cyan-77">Background</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-77 to-blue-900 rounded-full mb-6" />
          <p className="text-lg text-gray-600">
            Pabrik suspension & chassis system dengan fasilitas industri puluhan
            ribu meter persegi, automated assembly, precision machining,
            multi-stage QC, R&D, warehouse, pengalaman 15+ tahun, supply global
            & OEM replacement.
          </p>
        </div>

        {/* Grid Fitur */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-cyan-77/10 to-blue-900/5 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-77/20 hover:border-cyan-77/40 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-cyan-77 group-hover:text-blue-900 transition-colors">
                {f.icon}
              </div>
              <h4 className="font-bold text-lg text-dark-77 mb-2">{f.title}</h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual: Pabrik/mesin/robot arm */}
        <div className="relative mt-16 mx-auto max-w-4xl h-72 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
            alt="Automotive Factory Robot Arm"
            fill
            className="object-cover"
          />
          {/* Overlay biru */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-77/20 to-blue-900/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
