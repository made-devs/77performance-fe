import { Syne, Mulish } from "next/font/google";
import "./globals.css";
import GSAPWrapper from "@/components/shared/GSAPWrapper";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";

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
      <body className="antialiased">
        <CustomCursor />
        <Navbar />

        <GSAPWrapper>{children}</GSAPWrapper>
      </body>
    </html>
  );
}
