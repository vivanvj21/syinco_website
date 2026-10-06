"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section
      aria-label="Industries Served"
      className="py-14 bg-surface-card border-b border-border-light"
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-border-light">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block mb-1">
              Sectors &amp; Applications
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary tracking-tight">
              Industries Served
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-teal hover:underline group"
          >
            <span>View All Industry Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industries#${industry.slug}`}
              className="bg-white border border-border-light rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-teal hover:shadow-sm transition-all group"
            >
              <div>
                {/* Industry Photography */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-border-light/70">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                    {industry.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <div className="pt-3 border-t border-border-light/60 flex items-center justify-between text-xs font-mono font-semibold text-brand-teal">
                  <span>Explore Solutions</span>
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
