import React from "react";
import Link from "next/link";
import { allCategories } from "@/data/products";
import { CataloguePageClient } from "@/components/business/CataloguePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Product Catalogue | SYINCO TECHNOLOGIES India",
  description:
    "Explore verified scientific instruments, dry vacuum pumps, and spark plasma sintering systems. Authorized Indian sales and service partner for Advance Riko, Edwards Vacuum, and Fuji-SPS.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-container mx-auto px-4 py-6">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
          <li>
            <Link href="/" className="hover:text-ink-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-ink-primary font-semibold">Technical Catalogue</li>
        </ol>
      </nav>

      {/* Catalogue Header */}
      <div className="border-b border-border-light pb-4 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/50 px-2 py-0.5 rounded-xs border border-brand-teal/30">
            Product Catalogue
          </span>
          <span className="font-mono text-[11px] text-ink-muted">
            Official Equipment Portfolio across {allCategories.length} Disciplines
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-display font-bold text-ink-primary tracking-tight">
          Scientific Systems, Vacuum &amp; Process Instrumentation
        </h1>
        <p className="text-xs font-sans text-ink-muted mt-1 max-w-2xl">
          Authorized partner for Advance Riko (Japan), Edwards Vacuum (UK), and Fuji-SPS (Japan) with domestic INR billing and field support.
        </p>

        {/* Quick Category Jump Pills: Horizontal scroll on mobile, wrap on desktop */}
        <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-border-light/60 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap">
          <span className="text-[11px] font-mono text-ink-muted mr-1 shrink-0">Disciplines:</span>
          {allCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="shrink-0 whitespace-nowrap text-xs font-mono px-2 py-0.5 rounded-xs bg-slate-50 border border-border-light text-ink-primary hover:border-brand-teal hover:text-brand-teal transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Discovery Engine & Application-First Matrix Dual Modes */}
      <CataloguePageClient />
    </div>
  );
}
