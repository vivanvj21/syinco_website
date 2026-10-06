import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-canvas border-t border-border-dark text-slate-400 text-xs font-sans">
      {/* 4-Column Technical Directory */}
      <div className="max-w-container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Institutional Identity & Facility */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xs bg-white p-0.5 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SYINCO Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-tight text-white leading-tight">
                  SYINCO TECHNOLOGIES
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  Systems • Instruments • Components
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Authorized systems integrator, channel partner, and technical service center in India for global scientific and industrial hardware manufacturers.
            </p>
            <div className="pt-2 space-y-1.5 font-mono text-[11px] text-slate-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                <span>Hyderabad Warehousing &amp; Calibration Depot, Telangana, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <a href="tel:+917382292929" className="hover:text-white font-semibold">
                  +91 73822 92929
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <a href="mailto:info@syinco.in" className="hover:text-white">
                  info@syinco.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Technology Domains & Catalogue */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              Technology Domains
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/products/thermoelectric-evaluation" className="hover:text-brand-teal transition-colors">
                  Thermoelectric Characterization (Seebeck &amp; ρ)
                </Link>
              </li>
              <li>
                <Link href="/products/dry-vacuum-pumps" className="hover:text-brand-teal transition-colors">
                  Dry Scroll &amp; Mechanical Vacuum Pumps
                </Link>
              </li>
              <li>
                <Link href="/products/high-temp-furnaces" className="hover:text-brand-teal transition-colors">
                  Spark Plasma Sintering (SPS) &amp; Furnaces
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-teal transition-colors">
                  Infrared Gold Image Furnaces &amp; Dilatometry
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/products" className="font-mono text-brand-teal font-bold hover:underline">
                  → Browse Complete Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Engineering Moat */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              Domestic Services
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/services#contract-sample-analysis" className="hover:text-brand-teal transition-colors font-semibold text-slate-200">
                  Paid Contract Sample Analysis (ZEM-3)
                </Link>
              </li>
              <li>
                <Link href="/services#factory-commissioning-service" className="hover:text-brand-teal transition-colors">
                  Factory-Certified On-Site Commissioning
                </Link>
              </li>
              <li>
                <Link href="/services#helium-leak-detection" className="hover:text-brand-teal transition-colors">
                  Helium Mass Spectrometer Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/services#hyderabad-spares-depot" className="hover:text-brand-teal transition-colors">
                  Hyderabad Spares Warehousing Depot
                </Link>
              </li>
              <li>
                <Link href="/services#amc-preventative-maintenance" className="hover:text-brand-teal transition-colors">
                  Annual Maintenance Contracts (AMC)
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="font-mono text-brand-teal font-bold hover:underline">
                  → Explore All Engineering Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Global Principals */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              Authorized Principals
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 bg-slate-surface rounded-xs border border-border-dark">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Advance Riko, Inc.</span>
                  <span className="font-mono text-[9px] text-brand-teal bg-slate-panel px-1 py-0.2 rounded-xs border border-border-dark">
                    Japan
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Thermoelectric, thermal analysis &amp; infrared heating
                </p>
              </div>

              <div className="p-2 bg-slate-surface rounded-xs border border-border-dark">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Edwards Vacuum</span>
                  <span className="font-mono text-[9px] text-brand-teal bg-slate-panel px-1 py-0.2 rounded-xs border border-border-dark">
                    UK
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Dry scroll, turbomolecular &amp; industrial vacuum systems
                </p>
              </div>

              <div className="p-2 bg-slate-surface rounded-xs border border-border-dark">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Fuji-SPS / Fuji Electronic</span>
                  <span className="font-mono text-[9px] text-brand-teal bg-slate-panel px-1 py-0.2 rounded-xs border border-border-dark">
                    Japan
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Spark Plasma Sintering (SPS) systems &amp; tooling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-border-dark/80 bg-slate-panel py-4 px-4 text-[11px] font-mono text-slate-400">
        <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>
              © {new Date().getFullYear()} SYINCO TECHNOLOGIES. All Rights Reserved. Direct In-Country Supply with 18% GST Input Credit.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-[10px]">
            <span>ISO Compliant Protocols</span>
            <span>•</span>
            <span>Hyderabad Depot Logistics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
