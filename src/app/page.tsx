import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { HeroStrategicAnchor } from "@/components/business/HeroStrategicAnchor";
import { PrincipalShowcase } from "@/components/business/PrincipalShowcase";
import { CuratedFlagshipGrid } from "@/components/business/CuratedFlagshipGrid";
import { IndustriesSection } from "@/components/business/IndustriesSection";
import { ServicesOverviewModule } from "@/components/business/ServicesOverviewModule";
import { FinalConversionHorizon } from "@/components/business/FinalConversionHorizon";

export const metadata: Metadata = {
  title: "SYINCO TECHNOLOGIES | Precision Scientific Systems, Vacuum & Thermal Instrumentation",
  description:
    "Official Indian partner for Advance Riko (Japan), Edwards Vacuum (UK), and Fuji-SPS (Japan). Domestic INR billing, Hyderabad spares warehousing, and factory field service.",
};

export default function HomePage() {
  return (
    <main className="relative w-full">
      {/* Full-page scientific equipment background — fixed behind all sections */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/home/homepage-bg.jpg"
          alt=""
          fill
          priority
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so section text & cards remain fully legible */}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* 1. HERO STRATEGIC ANCHOR */}
      <HeroStrategicAnchor />

      {/* 2. PRINCIPAL TECHNOLOGY COMPANIES */}
      <PrincipalShowcase />

      {/* 3. CURATED FLAGSHIP SYSTEMS SHOWCASE (STRICTLY 9 CURATED PRODUCTS) */}
      <CuratedFlagshipGrid />

      {/* 4. INDUSTRIES SERVED */}
      <IndustriesSection />

      {/* 5. DOMESTIC ENGINEERING SERVICES */}
      <ServicesOverviewModule />

      {/* 6. CONVERSION HORIZON */}
      <FinalConversionHorizon />
    </main>
  );
}
