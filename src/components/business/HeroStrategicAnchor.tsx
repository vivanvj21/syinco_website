import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroStrategicAnchor() {
  return (
    <section
      aria-label="SYINCO Strategic Positioning & Systems Architecture"
      className="relative bg-slate-canvas text-white border-b border-border-dark overflow-hidden py-14 lg:py-20"
    >
      {/* 24px Engineering CAD Grid Linework (Decorative Architectural Background) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E293B 1px, transparent 1px),
            linear-gradient(to bottom, #1E293B 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* H1 Authority Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Precision Scientific Systems, Vacuum Technology &amp; Thermal Instrumentation.
          </h1>

          {/* Concise Supporting Statement (Max 1-2 sentences) */}
          <p className="text-sm sm:text-base font-sans text-slate-300 max-w-2xl leading-relaxed">
            Synchronizing tier-1 Japanese and UK scientific hardware with direct domestic INR supply, Hyderabad spare parts warehousing, and factory-certified field engineering across India.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/products">
              <Button
                variant="primary"
                size="lg"
                className="bg-action-amber hover:bg-action-amber-hover text-slate-canvas font-bold text-xs sm:text-sm px-6 gap-2 shadow-md cursor-pointer"
              >
                <span>Explore Technical Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="border-border-dark bg-slate-surface text-white hover:bg-slate-panel hover:border-brand-teal text-xs sm:text-sm px-5 gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-brand-teal" />
                <span>Consult a Specialist</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
