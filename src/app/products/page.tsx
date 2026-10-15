import React from "react";
import Link from "next/link";
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

      {/* Discovery Engine & Application-First Matrix Dual Modes */}
      <CataloguePageClient />
    </div>
  );
}
