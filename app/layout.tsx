import type { Metadata } from "next";
import { Geist_Mono, Inter, Newsreader } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], weight: ["400", "500"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.shortName} — Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}