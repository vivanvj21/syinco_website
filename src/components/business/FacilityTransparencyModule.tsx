import React from "react";
import { MapPin, Clock, ShieldCheck, GraduationCap, Plane, Flame, Cpu } from "lucide-react";

export function FacilityTransparencyModule() {
  const sectors = [
    { icon: GraduationCap, name: "Central Universities & IITs", desc: "Materials physics & thermoelectric energy harvesting." },
    { icon: Plane, name: "Defense & Aerospace Labs", desc: "Thermal vacuum testing and clean roughing systems." },
    { icon: Flame, name: "Metallurgy & Steel Plants", desc: "In-situ phase transformation & viewport pyrometry." },
    { icon: Cpu, name: "Semiconductor Cleanrooms", desc: "Rapid thermal annealing & oil-free vacuum." },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: Physical Facility Information */}
      <div className="lg:col-span-6 p-5 bg-surface-card border border-border-light rounded-md flex flex-col justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-teal uppercase tracking-wider mb-2 font-bold">
            <MapPin className="w-3.5 h-3.5 text-brand-teal" />
            <span>Hyderabad Logistics &amp; Engineering Center</span>
          </div>

          <h3 className="font-display font-bold text-lg text-ink-primary">
            Physical Operational Depot &amp; Service Facility
          </h3>

          <p className="text-xs font-sans text-ink-muted mt-1.5 leading-relaxed">
            Dedicated warehousing and service facility housing critical spares, vacuum overhaul benches, and certified metrology fixtures.
          </p>

          <div className="mt-4 space-y-2 font-mono text-xs text-ink-primary p-3 bg-slate-50 border border-border-light rounded-sm">
            <div>
              <span className="text-[10px] text-ink-muted uppercase block">Facility Address:</span>
              <span className="font-medium mt-0.5 block">
                D.No.12-1-468/ACE/B/313, ACE Ajanta, Nagole-Kuntloor Road, Hyderabad – 500068, India
              </span>
            </div>

            <div className="pt-2 border-t border-border-light flex items-center justify-between text-[11px]">
              <span className="text-ink-muted flex items-center gap-1">
                <Clock className="w-3 h-3 text-brand-teal" />
                <span>Hours:</span>
              </span>
              <span className="font-semibold text-ink-primary">Mon – Sat: 09:30 AM – 05:30 PM IST</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2.5 border-t border-border-light flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>GSTIN Registered Entity with Direct Warehousing Capability</span>
        </div>
      </div>

      {/* Right: Active Sectors Served */}
      <div className="lg:col-span-6 space-y-3">
        <div>
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block font-bold">
            Institutional Coverage
          </span>
          <h3 className="font-display font-bold text-lg text-ink-primary mt-0.5">
            Sectors Actively Serviced Across India
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-3 bg-surface-card border border-border-light rounded-sm hover:border-brand-teal/60 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-brand-teal shrink-0" />
                  <h4 className="font-display font-bold text-xs text-ink-primary">
                    {sec.name}
                  </h4>
                </div>
                <p className="text-[11px] font-sans text-ink-muted leading-snug">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
