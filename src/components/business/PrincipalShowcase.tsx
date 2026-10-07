"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { principals } from "@/data/principals";

function CountryFlag({ country }: { country: string }) {
  if (country === "Japan") {
    return (
      <span className="inline-flex items-center shrink-0" title="Japan">
        <svg viewBox="0 0 24 16" className="w-5 h-3.5 rounded-xs border border-slate-200 overflow-hidden shrink-0 shadow-xs" aria-hidden="true">
          <rect width="24" height="16" fill="#ffffff" />
          <circle cx="12" cy="8" r="4.8" fill="#bc002d" />
        </svg>
      </span>
    );
  }
  if (country === "United Kingdom") {
    return (
      <span className="inline-flex items-center shrink-0" title="United Kingdom">
        <svg viewBox="0 0 24 16" className="w-5 h-3.5 rounded-xs border border-slate-200 overflow-hidden shrink-0 shadow-xs" aria-hidden="true">
          <rect width="24" height="16" fill="#012169" />
          <path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M0,0 L24,16 M24,0 L0,16" stroke="#c8102e" strokeWidth="1.5" />
          <path d="M12,0 v16 M0,8 h24" stroke="#ffffff" strokeWidth="5" />
          <path d="M12,0 v16 M0,8 h24" stroke="#c8102e" strokeWidth="3" />
        </svg>
      </span>
    );
  }
  return <span className="font-mono text-[10px] text-slate-500 font-bold">{country}</span>;
}

export function PrincipalShowcase() {
  return (
    <section
      aria-label="Accredited OEM Technology Partners"
      className="py-14 bg-slate-canvas border-b border-border-dark text-white"
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-border-dark/80">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block mb-1">
              Technology Partners
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              Principal Global Manufacturers
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-sans max-w-md">
            Direct, accredited channel partnerships with leading Japanese and UK scientific hardware manufacturers.
          </p>
        </div>

        {/* 3 Principal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principals.map((principal) => (
            <Link
              key={principal.id}
              href={`/products?vendor=${principal.filterVendorId}`}
              className="bg-slate-surface border border-border-dark rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-teal hover:bg-slate-panel transition-all group"
            >
              <div>
                {/* Official OEM Logo Banner - Matching Dark Blue Card Background */}
                <div className="relative aspect-[16/10] w-full bg-slate-surface overflow-hidden border-b border-border-dark/60 flex items-center justify-center p-6">
                  <Image
                    src={principal.logo}
                    alt={`${principal.name} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  {/* Header: Flag, Name, Official Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <CountryFlag country={principal.country} />
                      <div>
                        <h3 className="font-display font-bold text-base text-white group-hover:text-brand-teal transition-colors leading-tight">
                          {principal.shortName}
                        </h3>
                        <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
                          {principal.country}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs bg-brand-teal-tint/30 text-brand-teal border border-brand-teal/40 font-semibold">
                      Official
                    </span>
                  </div>

                  {/* Scope / Specialty */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mt-2.5">
                    {principal.specialty}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-border-dark/60 flex items-center justify-between text-xs font-mono font-semibold text-brand-teal">
                  <span>View All Equipment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
