import React from "react";
import { Banknote, Warehouse, Wrench, ShieldCheck } from "lucide-react";

export function LocalAdvantageModule() {
  const pillars = [
    {
      icon: Banknote,
      title: "INR PROCUREMENT",
      line: "Direct in-country Indian Rupee commercial billing with 18% GST input credit.",
    },
    {
      icon: Warehouse,
      title: "HYDERABAD DEPOT",
      line: "Ready stock of vacuum pump oils, overhaul kits, and thermocouples in Hyderabad.",
    },
    {
      icon: Wrench,
      title: "FIELD ENGINEERING",
      line: "On-site uncrating, mechanical leveling, utility safety, and commissioning.",
    },
    {
      icon: ShieldCheck,
      title: "NABL CALIBRATION",
      line: "Helium Mass Spectrometer leak testing and metrology-traceable calibration.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {pillars.map((pillar, idx) => {
        const Icon = pillar.icon;
        return (
          <div
            key={idx}
            className="p-4 bg-surface-card border border-border-light rounded-md flex flex-col justify-between hover:border-brand-teal/60 transition-all shadow-2xs group"
          >
            <div>
              <div className="w-8 h-8 rounded-xs bg-slate-50 border border-border-light flex items-center justify-center text-brand-teal mb-3 group-hover:bg-brand-teal-tint/50 transition-colors">
                <Icon className="w-4 h-4" />
              </div>

              <h4 className="font-mono font-bold text-xs text-ink-primary tracking-wide">
                {pillar.title}
              </h4>

              <p className="text-xs font-sans text-ink-muted mt-1.5 leading-relaxed">
                {pillar.line}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
