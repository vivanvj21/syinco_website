import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation",
  description: "Authorized Indian channel partners for Advance Riko, Edwards Vacuum, and Fuji-SPS.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompareDock } from "@/components/business/CompareDock";
import { CompareModal } from "@/components/business/CompareModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface-light text-ink-primary font-sans antialiased">
        <Header />
        <div className="flex-1 pb-16">{children}</div>
        <Footer />
        <CompareDock />
        <CompareModal />
      </body>
    </html>
  );
}
