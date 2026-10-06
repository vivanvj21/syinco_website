import React from "react";
import type { Metadata } from "next";
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
    <main className="w-full">
      {/* 1. HERO STRATEGIC ANCHOR */}
      <HeroStrategicAnchor />

      {/* 2. PRINCIPAL TECHNOLOGY COMPANIES */}
      <PrincipalShowcase />

      {/* 3. CURATED FLAGSHIP SYSTEMS SHOWCASE (STRICTLY 8 CURATED PRODUCTS) */}
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
