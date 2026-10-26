import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Mail, Factory } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 text-sm font-sans">
      {/* 4-Column Technical Directory */}
      <div className="max-w-container mx-auto px-4 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Institutional Identity & Facility */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-sm bg-white p-0.5 shrink-0 flex items-center justify-center border border-slate-200 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="SYINCO Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                  SYINCO TECHNOLOGIES
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Systems • Instruments • Components
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Manufacture, Sales and Services of Advanced, Customized and Specialized Systems, Instruments and Components for Metallurgy, Thermal, Thermoelectric, Vacuum, Analytical and Medical application. NDT &amp; Helium Leak Testing Services.
            </p>
            <div className="pt-2 space-y-2.5 font-mono text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="tel:+914024142929" className="hover:text-brand-teal font-semibold transition-colors">
                    +91 (40) 24142929
                  </a>
                  <span>/</span>
                  <a href="tel:+914024143939" className="hover:text-brand-teal font-semibold transition-colors">
                    24143939
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="mailto:info@syinco.in" className="hover:text-brand-teal font-medium transition-colors">
                    info@syinco.in
                  </a>
                  <span>•</span>
                  <a href="mailto:syincoindia@gmail.com" className="hover:text-brand-teal font-medium transition-colors">
                    syincoindia@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Technology Domains & Catalogue */}
          <div className="space-y-3.5">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900">
              Technology Domains
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/products/thermoelectric-evaluation" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Thermoelectric Characterization (Seebeck &amp; ρ)
                </Link>
              </li>
              <li>
                <Link href="/products/dry-vacuum-pumps" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Dry Scroll &amp; Mechanical Vacuum Pumps
                </Link>
              </li>
              <li>
                <Link href="/products/high-temp-furnaces" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Spark Plasma Sintering (SPS) &amp; Furnaces
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Infrared Gold Image Furnaces &amp; Dilatometry
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/products" className="font-mono text-brand-teal font-bold hover:underline inline-flex items-center gap-1">
                  → Browse Complete Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Engineering Moat */}
          <div className="space-y-3.5">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900">
              Domestic Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services#contract-sample-analysis" className="hover:text-brand-teal transition-colors font-semibold text-slate-800">
                  Paid Contract Sample Analysis (ZEM-3)
                </Link>
              </li>
              <li>
                <Link href="/services#factory-commissioning-service" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Factory-Certified On-Site Commissioning
                </Link>
              </li>
              <li>
                <Link href="/services#helium-leak-detection" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Helium Mass Spectrometer Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/services#hyderabad-spares-depot" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Hyderabad Spares Warehousing Depot
                </Link>
              </li>
              <li>
                <Link href="/services#amc-preventative-maintenance" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Annual Maintenance Contracts (AMC)
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/services" className="font-mono text-brand-teal font-bold hover:underline inline-flex items-center gap-1">
                  → Explore All Engineering Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Global Principals */}
          <div className="space-y-3.5">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900">
              Authorized Principals
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 bg-white rounded-md border border-slate-200 shadow-2xs hover:border-brand-teal/40 transition-colors">
                <div className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Advance Riko, Inc.</span>
                  <span className="font-mono text-xs font-semibold text-brand-teal bg-brand-teal-tint/50 px-1.5 py-0.5 rounded-xs border border-brand-teal/20">
                    Japan
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Thermoelectric, thermal analysis &amp; infrared heating
                </p>
              </div>

              <div className="p-3 bg-white rounded-md border border-slate-200 shadow-2xs hover:border-brand-teal/40 transition-colors">
                <div className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Edwards Vacuum</span>
                  <span className="font-mono text-xs font-semibold text-brand-teal bg-brand-teal-tint/50 px-1.5 py-0.5 rounded-xs border border-brand-teal/20">
                    UK
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Dry scroll, turbomolecular &amp; industrial vacuum systems
                </p>
              </div>

              <div className="p-3 bg-white rounded-md border border-slate-200 shadow-2xs hover:border-brand-teal/40 transition-colors">
                <div className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Fuji-SPS / Fuji Electronic</span>
                  <span className="font-mono text-xs font-semibold text-brand-teal bg-brand-teal-tint/50 px-1.5 py-0.5 rounded-xs border border-brand-teal/20">
                    Japan
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Spark Plasma Sintering (SPS) systems &amp; tooling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Works & Manufacturing Facility Strip */}
      <div className="border-t border-slate-200/80 bg-slate-100/70 py-6 px-4 text-xs sm:text-sm font-sans text-slate-600">
        <div className="max-w-container mx-auto">
          <div className="p-4 sm:p-5 rounded-md bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-xs sm:text-sm uppercase tracking-wider">
                <Factory className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Works Facility</span>
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">
                SYINCO TECHNOLOGIES • Telangana, India
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              H.No.2-50, Plot No.194, Sri Venkateswara Colony, GSI (SR) Post Office, Mattuguda, Nagole, Hyderabad 500068, Ranga Reddy, Telangana, India.
            </p>
            <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs sm:text-sm text-slate-600">
              <span className="text-brand-teal font-semibold">Landmark: 9HCM+329 Hyderabad (Opp. PeopleLink Factory)</span>
              <span>•</span>
              <span>Tel: <a href="tel:+914024142929" className="hover:text-brand-teal text-slate-800 font-semibold transition-colors">+91 (40) 24142929</a>, <a href="tel:+914024143939" className="hover:text-brand-teal text-slate-800 font-semibold transition-colors">24143939</a></span>
              <span>•</span>
              <span>Fax: +91 (40) 24143939</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-slate-200 bg-white py-4 px-4 text-xs sm:text-sm font-mono text-slate-600">
        <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" />
            <span className="font-sans text-xs sm:text-sm text-slate-600">
              © {new Date().getFullYear()} SYINCO TECHNOLOGIES. All Rights Reserved. Direct In-Country Supply &amp; Technical Service.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-xs font-sans">
            <span>ISO Compliant Protocols</span>
            <span>•</span>
            <span>Hyderabad Depot Logistics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
