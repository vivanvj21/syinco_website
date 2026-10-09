import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en-IN" className={`${inter.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}>
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
