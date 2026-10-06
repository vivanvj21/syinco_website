import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { principals } from "@/data/principals";

export const metadata: Metadata = {
  title: "About Us | SYINCO TECHNOLOGIES India",
  description:
    "Learn about SYINCO TECHNOLOGIES: Authorized Indian channel partner for Advance Riko, Edwards Vacuum, and Fuji-SPS. Hyderabad warehousing, calibration depot, and engineering support.",
};

export default function AboutPage() {
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
              <li className="text-white font-semibold">About Us</li>
            </ol>
          </nav>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/30 px-2 py-0.5 rounded-xs border border-brand-teal/40 inline-block mb-2">
            Corporate Profile
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white">
            About SYINCO TECHNOLOGIES
          </h1>
          <p className="text-xs sm:text-sm font-sans text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Systems, Instruments &amp; Components — Authorized Indian channel partner and technical service hub for premier global scientific hardware manufacturers.
          </p>
        </div>
      </section>

      {/* 2. Core Profile & Mission */}
      <section className="py-12 bg-white border-b border-border-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block">
                Foundational Mission
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Bridging Global Precision Instrumentation with Indian Engineering Realities
              </h2>
              <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed">
                SYINCO TECHNOLOGIES was established to address the critical gap in high-precision scientific procurement across India: the friction of international logistics, customs clearance, currency exposure, and delayed post-warranty technical service.
              </p>
              <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed">
                By maintaining formal, accredited channel partnerships with leading Japanese and UK OEM manufacturers, SYINCO delivers complete capital equipment systems, genuine subcomponents, and consumables through domestic Indian Rupee (INR) invoicing, backed by local inventory and factory-trained field engineers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-slate-50 border border-border-light rounded-xs">
                  <span className="font-display font-bold text-lg text-slate-900 block">4 OEM</span>
                  <span className="text-[11px] font-mono text-slate-500">Accredited Principals</span>
                </div>
                <div className="p-3 bg-slate-50 border border-border-light rounded-xs">
                  <span className="font-display font-bold text-lg text-slate-900 block">Hyderabad</span>
                  <span className="text-[11px] font-mono text-slate-500">Warehousing Depot</span>
                </div>
                <div className="p-3 bg-slate-50 border border-border-light rounded-xs">
                  <span className="font-display font-bold text-lg text-slate-900 block">100% Domestic</span>
                  <span className="text-[11px] font-mono text-slate-500">INR Invoicing + GST</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-panel p-6 rounded-sm text-white space-y-4 border border-border-dark">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border-dark">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <h3 className="font-display font-bold text-sm text-white">
                  Accreditation &amp; Governance
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs font-sans text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Authorized Indian channel agreements with Advance Riko and Edwards Vacuum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Accredited equipment supplier for Fuji-SPS Spark Plasma Sintering hardware.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Factory-trained field engineers certified directly by Japanese and UK facilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Full compliance with Government of India tender procurement guidelines (GeM / CPPP).</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-border-dark/80">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-semibold text-brand-teal hover:underline"
                >
                  <span>Request Corporate Credentials Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principal Partnerships */}
      <section className="py-12 bg-surface-card border-b border-border-light">
        <div className="max-w-container mx-auto px-4">
          <div className="mb-8 pb-4 border-b border-border-light">
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block mb-1">
              Global OEM Lineage
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
              Authorized OEM Principals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principals.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-border-light rounded-sm p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl leading-none" role="img" aria-label={p.country}>
                      {p.flag}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-600">
                      {p.country}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] text-brand-teal block mb-2 font-semibold">
                    {p.role}
                  </span>
                  <p className="text-xs font-sans text-slate-600 leading-relaxed">
                    {p.specialty}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-light/60">
                  <Link
                    href={`/products?vendor=${p.filterVendorId}`}
                    className="text-xs font-mono font-semibold text-brand-teal hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Equipment</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hyderabad Logistics Depot */}
      <section className="py-12 bg-white border-b border-border-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block">
                Engineering Infrastructure
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Hyderabad Warehousing, Calibration &amp; Testing Facility
              </h2>
              <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed">
                Located centrally in Hyderabad, Telangana, our logistics and engineering center houses inventory of fast-moving Edwards dry pump tip-seal maintenance kits, vacuum flanges, Advance Riko spare thermocouples, and calibration reference standards.
              </p>
              <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed">
                The facility also houses our contract sample analysis laboratory equipped with an operational Advance Riko ZEM-3 system for client demonstration, sample feasibility runs, and academic research support.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white font-mono text-xs font-semibold px-4 py-2.5 rounded-xs transition-colors"
                >
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 border border-border-light rounded-sm p-6 space-y-4">
              <h3 className="font-display font-bold text-sm text-slate-900">
                Key Facility Capabilities:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-700">
                <div className="p-3 bg-white border border-border-light rounded-xs">
                  <span className="font-semibold block text-slate-900 mb-0.5">Spares Warehousing</span>
                  <span className="text-slate-500 text-[11px]">48-hour dispatch for Edwards &amp; Advance Riko kits</span>
                </div>
                <div className="p-3 bg-white border border-border-light rounded-xs">
                  <span className="font-semibold block text-slate-900 mb-0.5">Vacuum Testing Bay</span>
                  <span className="text-slate-500 text-[11px]">Helium mass spectrometer leak audit stations</span>
                </div>
                <div className="p-3 bg-white border border-border-light rounded-xs">
                  <span className="font-semibold block text-slate-900 mb-0.5">Analytical Lab</span>
                  <span className="text-slate-500 text-[11px]">Advance Riko ZEM-3 Seebeck testing desk</span>
                </div>
                <div className="p-3 bg-white border border-border-light rounded-xs">
                  <span className="font-semibold block text-slate-900 mb-0.5">Training Center</span>
                  <span className="text-slate-500 text-[11px]">Hands-on technical maintenance workshops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion */}
      <section className="py-10 bg-slate-panel text-white text-center">
        <div className="max-w-container mx-auto px-4 space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
            Connect With Our Engineering Team
          </h3>
          <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-xl mx-auto">
            Discuss procurement tenders, equipment specifications, or arrange a technical visit to our Hyderabad depot.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="bg-brand-amber hover:bg-brand-amber-dark text-slate-900 font-bold text-xs font-mono px-5 py-2.5 rounded-xs transition-colors"
            >
              Contact Head Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
