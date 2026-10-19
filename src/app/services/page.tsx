import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Warehouse, Wrench, SearchCheck, TestTube2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Engineering Services & Hyderabad Depot | SYINCO TECHNOLOGIES India",
  description:
    "Domestic engineering support in India: Hyderabad spares warehousing, factory-certified commissioning, helium vacuum leak testing, ZEM-3 paid sample analysis, and Annual Maintenance Contracts.",
};

const serviceIcons: Record<string, React.ElementType> = {
  "hyderabad-spares-depot": Warehouse,
  "factory-commissioning-service": Wrench,
  "helium-leak-detection": SearchCheck,
  "contract-sample-analysis": TestTube2,
  "amc-preventative-maintenance": ShieldCheck,
};

export default function ServicesPage() {
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
              <li className="text-white font-semibold">Services</li>
            </ol>
          </nav>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/30 px-2 py-0.5 rounded-xs border border-brand-teal/40 inline-block mb-2">
            Local Engineering Support
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white">
            Domestic Engineering &amp; Depot Services
          </h1>
          <p className="text-xs sm:text-sm font-sans text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Eliminating international logistics barriers through Hyderabad warehousing, factory-trained field engineers, NABL-traceable calibration, and fast in-country technical assistance.
          </p>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-12 bg-surface-light border-b border-border-light">
        <div className="max-w-container mx-auto px-4 space-y-10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Wrench;
            return (
              <ScrollReveal
                key={service.id}
                id={service.slug}
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
                        Service 0{index + 1} • {service.badge}
                      </span>
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed mt-2 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Side-by-Side Image + Deliverables */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-6">
                  {/* Left Column: Photography & Direct Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-xs overflow-hidden border border-border-light shadow-xs bg-slate-100 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>

                    <div>
                      <Link
                        href={`/contact-us?service=${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-white font-mono text-xs font-semibold px-5 py-2.5 rounded-xs shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group"
                      >
                        <span>{service.contactAction}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Scope of Deliverables */}
                  <div className="lg:col-span-7 bg-slate-50/80 p-6 rounded-xs border border-border-light flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 block font-bold mb-3.5 pb-2 border-b border-border-light/80">
                        Scope of Deliverables &amp; Inclusions
                      </span>
                      <ul className="space-y-3">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border-light/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        Direct INR Invoicing Available
                      </span>
                      <span>GST Input Tax Credit Eligible</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Spares Requisition Banner */}
      <section className="py-10 bg-slate-panel text-white text-center">
        <div className="max-w-container mx-auto px-4 space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
            Need Immediate Consumables, Tip-Seal Kits, or Emergency Spares?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xl mx-auto">
            Check live inventory at our Hyderabad warehouse or dispatch an urgent parts requisition directly to our logistics team.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="bg-action-amber hover:bg-action-amber-hover text-slate-950 font-bold text-xs font-mono px-5 py-2.5 rounded-xs transition-colors shadow-md"
            >
              Contact Spares Desk (+91 73822 92929)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
