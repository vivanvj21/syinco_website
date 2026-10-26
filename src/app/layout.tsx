import type { Metadata } from "next";
import "@/styles/globals.css";

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
import { RfqBasketDrawer } from "@/components/business/RfqBasketDrawer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen flex flex-col bg-surface-light text-ink-primary font-sans antialiased">
        <ScrollProgress />
        <Header />
        <div className="flex-1 pb-16">{children}</div>
        <Footer />
        <CompareDock />
        <CompareModal />
        <RfqBasketDrawer />
        <BackToTopButton />
      </body>
    </html>
  );
}
