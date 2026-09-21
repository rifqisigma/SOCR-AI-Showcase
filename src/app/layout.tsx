import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SOCRATIVE — Socratic Optimized Cognitive Responsiveness",
    default: "SOCRATIVE — Socratic Optimized Cognitive Responsiveness",
  },
  description:
    "A learning approach integrating Socratic Questioning and Large Language Models to encourage students to think before relying on AI-generated answers.",
  keywords: [
    "SOCRATIVE",
    "Socratic Method",
    "Cognitive Responsiveness",
    "Educational AI",
    "Cognitive Offloading",
    "Inquiry-Based Learning",
    "AI in Education",
  ],
  authors: [{ name: "Rifqi Adli Hernawan", url: "/creator" }],
  openGraph: {
    title: "SOCRATIVE — Socratic Optimized Cognitive Responsiveness",
    description:
      "Turning AI from an answer machine into a thinking partner through structured Socratic inquiry.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#141413] selection:bg-[#EADBC8] selection:text-[#141413]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
