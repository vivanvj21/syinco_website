"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomepageCuratedProducts } from "@/data/homepage-curated";
import { VisualProductCard } from "./VisualProductCard";

export function CuratedFlagshipGrid() {
  const curatedProducts = getHomepageCuratedProducts();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Flagships" },
    { id: "advance-riko", label: "Advance Riko (Japan)" },
    { id: "edwards-vacuum", label: "Edwards Vacuum (UK)" },
    { id: "fuji-electronic", label: "Fuji-SPS (Japan)" },
  ];

  const displayedProducts =
    selectedFilter === "all"
      ? curatedProducts
      : curatedProducts.filter((p) => p.manufacturer.id === selectedFilter);

  return (
    <section
      aria-label="Flagship Hardware Showcase"
      className="py-14 bg-surface-light border-b border-border-light"
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-border-light">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block mb-1">
              Curated Equipment
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary tracking-tight">
              Featured Flagship Systems
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-muted hidden sm:block">
            9 principal systems across 3 OEM partners
          </span>
        </div>

        {/* Filter Pills for Curated Items */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xs text-xs font-mono transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-slate-panel text-white font-semibold shadow-xs"
                  : "bg-white border border-border-light text-slate-600 hover:text-slate-900 hover:border-slate-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop (3x3 grid) / 2-Column Tablet / 1-Column Mobile for 9 flagship products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProducts.map((product) => (
            <VisualProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner to Full Catalogue */}
        <div className="mt-8 p-5 bg-surface-card border border-border-light rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-sm text-slate-900">
              Need specialized vacuum pumps, thermal furnaces, or sintering systems?
            </h4>
            <p className="text-xs text-slate-600 font-sans mt-0.5">
              Browse our complete range with parametric filters by discipline, technology, and operating range.
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs font-mono px-4 py-2.5 rounded-xs shadow-xs transition-colors"
          >
            <span>Explore the Complete Product Catalogue →</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
