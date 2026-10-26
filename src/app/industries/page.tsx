import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Cpu, Plane, Zap, Flame, Building2, CheckCircle2 } from "lucide-react";
import { industries } from "@/data/industries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
      <section className="bg-white text-slate-900 py-12 border-b border-border-light">
        <div className="max-w-container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-semibold">Industries Served</li>
            </ol>
          </nav>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/40 px-2 py-0.5 rounded-xs border border-brand-teal/30 inline-block mb-2">
            Sector Solutions
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-slate-950">
            Industries &amp; Research Sectors Served
          </h1>
          <p className="text-xs sm:text-sm font-sans text-slate-600 mt-2 max-w-2xl leading-relaxed">
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
              <ScrollReveal
                key={ind.id}
                id={ind.slug}
                animation="fade-up"
                delay={index * 80}
                className="bg-white border border-border-light rounded-sm p-6 sm:p-8 scroll-mt-24 hover:border-brand-teal/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Top Section: Header & Overview Description */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border-light">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xs bg-brand-teal-tint/50 border border-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block font-bold mb-1">
                        Sector 0{index + 1} • {ind.badge}
                      </span>
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight leading-tight">
                        {ind.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed mt-2 max-w-3xl">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Side-by-Side Image + Technical Applications */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-6">
                  {/* Left Column: Sector Photography & Recommended Disciplines */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-xs overflow-hidden border border-border-light shadow-xs bg-slate-100 group">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                        Recommended Disciplines:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.recommendedDisciplines.map((disc, idx) => (
                          <Link
                            key={idx}
                            href={disc.href}
                            className="text-xs font-mono bg-slate-50 hover:bg-brand-teal-tint/60 hover:text-brand-teal text-slate-700 px-3 py-1.5 rounded-xs border border-border-light transition-all flex items-center gap-1.5 group shadow-2xs hover:shadow-xs"
                          >
                            <span>{disc.name}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Applications in India */}
                  <div className="lg:col-span-7 bg-slate-50/80 p-6 rounded-xs border border-border-light flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 block font-bold mb-3.5 pb-2 border-b border-border-light/80">
                        Key Technical Applications in India
                      </span>
                      <ul className="space-y-3">
                        {ind.keyApplications.map((app, appIdx) => (
                          <li key={appIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border-light/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-mono text-slate-500">
                        Need engineering site consultation?
                      </span>
                      <Link
                        href="/contact-us"
                        className="text-xs font-mono font-bold text-brand-teal hover:underline inline-flex items-center gap-1 group"
                      >
                        <span>Consult Sector Specialist</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section className="py-12 bg-white text-slate-900 text-center border-t border-border-light">
        <div className="max-w-container mx-auto px-4 space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">
            Looking for Custom System Configuration or Multi-Facility Tenders?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-slate-600 max-w-xl mx-auto">
            Our Hyderabad application engineers assist with turnkey vacuum layouts, high-temperature furnace compliance specs, and INR direct procurement.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="bg-action-amber hover:bg-action-amber-hover text-slate-950 font-bold text-xs font-mono px-5 py-2.5 rounded-xs transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Engineering Desk (+91 73822 92929)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
