import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export interface PartnerCardProps {
  name: string;
  country: "Japan" | "UK" | "India" | "Germany" | "USA";
  relationship: string;
  technologyArea: string;
  vendorId: string;
}

export function PartnerCard({
  name,
  country,
  relationship,
  technologyArea,
  vendorId,
}: PartnerCardProps) {
  return (
    <div className="p-5 bg-slate-surface border border-border-dark rounded-md hover:border-brand-teal transition-all group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal bg-slate-panel px-2 py-0.5 rounded-xs border border-border-dark">
            {country} Principal
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
            <ShieldCheck className="w-3 h-3" />
            <span>{relationship}</span>
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-teal transition-colors">
          {name}
        </h3>

        <p className="text-xs font-mono text-slate-300 mt-2">
          {technologyArea}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-border-dark">
        <Link
          href={`/products?vendor=${vendorId}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-teal hover:underline"
        >
          <span>Explore {name} Systems</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
