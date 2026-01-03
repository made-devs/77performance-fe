import { Syne, Inter } from "next/font/google";
import "./globals.css";
import GSAPWrapper from "@/components/shared/GSAPWrapper";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor"; // Import ini

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "77 Performance | Premium Import Automotive Parts",
  description: "Modern parts for modern performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Wrapper untuk smooth scroll seluruh halaman */}
        <GSAPWrapper>
          <CustomCursor /> {/* Pasang di sini, paling atas */}
          <Navbar />
          {children}
        </GSAPWrapper>
      </body>
    </html>
  );
}
