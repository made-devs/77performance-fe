# 77 PERFORMANCE - VISUAL & MOTION GUIDELINE (Awwwards Standard)

## 1. CORE VISUAL IDENTITY: "Technical Brutalism meets Corporate Luxury"

Desain tidak boleh terlihat seperti template standar. Fokus pada kepadatan informasi, tipografi raksasa, dan struktur grid yang kokoh.

### Color Palette (Strict)

- **Navy 77:** `#145591` (Dominan, Background Solid, Text Heading)
- **Cyan 77:** `#0591be` (Accent, Buttons, Highlights, Borders)
- **Silver:** `#b2b2b2` (Secondary Text, Thin Lines)
- **Dark:** `#111111` (Alternative Background)
- **White:** `#ffffff` (Clean Backgrounds, High Contrast Text)

### Typography Rules

- **Headings:** Masif, Bold/Black weight. Menggunakan `tracking-tighter` (huruf rapat). Ukuran seringkali ekstrem (`text-8xl` hingga `text-[12vw]`).
- **Body:** Clean, legible. Sering menggunakan layout editorial (teks di kolom sempit di samping judul besar).
- **Vertical Text:** Gunakan teks vertikal (`-rotate-90`) untuk elemen dekoratif atau label teknis sisi pinggir.

### Layout Principles (Anti-Whitespace)

- **Zero Whitespace:** Hindari margin putih tak bermakna. Gunakan `h-screen`, `w-screen`, atau Grid `border-collapse`.
- **Full Bleed:** Gambar dan blok warna harus menyentuh tepi layar.
- **Split Screen:** Gunakan pembagian layar 50/50 atau 70/30 yang tegas dengan garis pemisah visible.
- **Compact Grids:** Grid rapat dengan border yang saling menempel (seperti tabel spesifikasi teknik).

---

## 2. MOTION PHILOSOPHY: "Kinetic & Reactive" (GSAP Focused)

Jangan gunakan animasi preset (seperti FadeIn biasa) kecuali untuk mikro-interaksi. Animasi harus terasa berat, fisikal, dan merespons scroll.

### Animation Rules

1.  **Scroll-Linked (ScrollTrigger):**
    - Animasi utama dikontrol oleh posisi scroll (`scrub: true` atau `toggleActions`).
    - Elemen tidak cuma "muncul", tapi bergerak (Parallax, Scaling, Rotating) selama user scroll.
2.  **Horizontal Scroll:** Gunakan `pin: true` untuk mengubah scroll vertikal menjadi gerakan horizontal pada galeri.
3.  **Sticky Stacking:** Gunakan `position: sticky` untuk menumpuk section satu di atas yang lain (seperti tumpukan kartu).
4.  **Kinetic Typography:** Teks berjalan (_Marquee_) atau karakter yang muncul satu per satu (`stagger`) untuk memberikan tekstur gerak.
5.  **Micro-Interactions:**
    - **Magnetic Buttons:** Tombol mengikuti kursor mouse saat di-hover.
    - **Expand on Hover:** Elemen grid melebar (Accordion style) saat di-hover.
    - **Badge Rotation:** Elemen stempel/badge berputar saat scroll.

---

## 3. COMPONENT PATTERNS (Reference)

### A. The Gallery (Horizontal Immersion)

- **Konsep:** User scroll ke bawah, tapi konten geser ke samping.
- **Tech:** GSAP Pinning + `xPercent`.

### B. The Philosophy (Sticky Stack / Kinetic Accordion)

- **Konsep:** Kartu menumpuk 100vh ATAU Layout grid yang melebar saat hover.
- **Tech:** Flexbox transition atau CSS Sticky.

### C. The Visualizer (Scrollytelling)

- **Konsep:** Objek grafis (garis/blob/svg) berubah bentuk berdasarkan scroll progress.
- **Tech:** GSAP Timeline scrub.

### D. The Footer (Magnetic Call-to-Action)

- **Konsep:** Tombol bulat raksasa yang "menarik" kursor. Teks marquee di background.
- **Tech:** GSAP QuickTo + Event Listener Mouse.

---

## 4. B2B COPYWRITING TONE

Target audiens adalah **Distributor/Importir**, bukan end-user.

- **Keywords:** Supply Chain, Quality Control, Profit Margin, Scale, Partnership, Distribution.
- **Tone:** Profesional, Otoritatif, Direct (To the point).
- **Goal:** Mendorong user untuk menghubungi via WhatsApp untuk kerjasama bisnis/wholesale.
