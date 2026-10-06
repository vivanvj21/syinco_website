import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Cpu, Plane, Zap, Flame, Building2, CheckCircle2 } from "lucide-react";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries Served | SYINCO TECHNOLOGIES India",
  description:
    "Precision scientific systems and dry vacuum solutions for Semiconductors, Aerospace, Advanced Materials, Metallurgy, and National Research Laboratories in India.",
};

const industryIcons: Record<string, React.ElementType> = {
  "semiconductor-microelectronics": Cpu,
  "aerospace-defense": Plane,
  "advanced-materials-energy": Zap,
  "metallurgy-ceramics": Flame,
  "academic-national-laboratories": Building2,
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-canvas text-white py-12 border-b border-border-dark">
        <div className="max-w-container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">Industries Served</li>
            </ol>
          </nav>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/30 px-2 py-0.5 rounded-xs border border-brand-teal/40 inline-block mb-2">
            Sector Solutions
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white">
            Industries &amp; Research Sectors Served
          </h1>
          <p className="text-xs sm:text-sm font-sans text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Delivering precision scientific instrumentation, hydrocarbon-free dry vacuum systems, and non-contact pyrometry across India&apos;s leading high-technology industries and national laboratories.
          </p>
        </div>
      </section>

      {/* 2. Industry Detailed Cards */}
      <section className="py-12 bg-surface-light border-b border-border-light">
        <div className="max-w-container mx-auto px-4 space-y-10">
          {industries.map((ind, index) => {
            const Icon = industryIcons[ind.id] || Cpu;
            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="bg-white border border-border-light rounded-sm p-6 sm:p-8 scroll-mt-24 hover:border-brand-teal/40 hover:shadow-xs transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xs bg-brand-teal-tint/40 flex items-center justify-center text-brand-teal shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block font-semibold">
                          Sector 0{index + 1} • {ind.badge}
                        </span>
                        <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    {/* Industry Sector Photography */}
                    <div className="relative w-full aspect-[16/9] rounded-xs overflow-hidden border border-border-light my-2 shadow-xs bg-slate-100">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed pt-1">
                      {ind.description}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                        Recommended Disciplines:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.recommendedDisciplines.map((disc, idx) => (
                          <Link
                            key={idx}
                            href={disc.href}
                            className="text-xs font-mono bg-slate-50 hover:bg-brand-teal-tint/40 hover:text-brand-teal text-slate-700 px-2 py-1 rounded-xs border border-border-light transition-colors"
                          >
                            {disc.name} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Applications & System Alignment */}
                  <div className="lg:col-span-7 bg-slate-50 p-5 rounded-xs border border-border-light space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block font-bold">
                      Key Technical Applications in India
                    </span>
                    <ul className="space-y-2">
                      {ind.keyApplications.map((app, appIdx) => (
                        <li key={appIdx} className="flex items-start gap-2 text-xs font-sans text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-border-light/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500">
                        Need engineering site consultation?
                      </span>
                      <Link
                        href="/contact-us"
                        className="text-xs font-mono text-brand-teal font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <span>Consult Sector Specialist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section className="py-10 bg-slate-panel text-white text-center">
        <div className="max-w-container mx-auto px-4 space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
            Custom Industrial Specifications &amp; Project Integration
          </h3>
          <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xl mx-auto">
            Contact our Hyderabad technical engineering desk for detailed equipment integration schedules and domestic INR procurement tenders.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="bg-brand-amber hover:bg-brand-amber-dark text-slate-900 font-bold text-xs font-mono px-5 py-2.5 rounded-xs transition-colors"
            >
              Contact Engineering Desk
            </Link>
            <Link
              href="/products"
              className="bg-slate-surface hover:bg-slate-panel border border-border-dark text-white font-mono text-xs px-5 py-2.5 rounded-xs transition-colors"
            >
              Browse Complete Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
