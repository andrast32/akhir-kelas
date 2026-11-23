import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhir perjalanan | Sampai jumpa di ketidak sengajaan lainnya",
  description:
    "Catatan pelayaran akhir semester, arsip foto kru kelas, dan papan apresiasi murid.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="text-[#2B1E16] font-sans antialiased selection:bg-amber-300 selection:text-amber-950">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}