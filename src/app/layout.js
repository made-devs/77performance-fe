import { Syne, Mulish } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "77 Performance | Premium Import Automotive Parts",
  description: "Modern parts for modern performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${mulish.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
