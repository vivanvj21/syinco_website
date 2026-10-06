"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import { useCompareStore } from "@/hooks/useCompareStore";
import { Button } from "@/components/ui/Button";
import { X, Scale, AlertCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { OEMTag } from "@/components/technical/OEMTag";
import { ClassificationBadge } from "@/components/technical/ClassificationBadge";

export function CompareModal() {
  const {
    items,
    isCompareModalOpen,
    closeCompareModal,
    removeFromCompare,
    highlightDifferences,
    toggleHighlightDifferences,
  } = useCompareStore();

  if (items.length === 0) return null;

  // Check if domains are homogeneous
  const uniqueDomains = Array.from(new Set(items.map((i) => i.domain)));
  const isCrossDomain = uniqueDomains.length > 1;

  // Collect all unique spec parameters across items
  const allSpecParameters: Array<{
    groupName: string;
    parameter: string;
    unit?: string;
  }> = [];

  items.forEach((item) => {
    item.specifications.forEach((group) => {
      group.rows.forEach((row) => {
        if (!allSpecParameters.some((p) => p.parameter === row.parameter)) {
          allSpecParameters.push({
            groupName: group.groupName,
            parameter: row.parameter,
            unit: row.unit,
          });
        }
      });
    });
  });

  return (
    <Dialog open={isCompareModalOpen} onOpenChange={(open) => !open && closeCompareModal()}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto p-6"
        aria-labelledby="compare-modal-title"
        aria-describedby="compare-modal-desc"
      >
        <DialogHeader className="pb-4 border-b border-border-light">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Scale className="w-4 h-4 text-brand-teal" />
                <span className="font-mono text-xs font-semibold text-brand-teal uppercase tracking-wider">
                  Technical Specification Matrix
                </span>
              </div>
              <DialogTitle id="compare-modal-title">
                Side-by-Side Equipment Comparison ({items.length} Products)
              </DialogTitle>
              <DialogDescription id="compare-modal-desc">
                Review technical limits, mechanical interfaces, and domestic commercial terms.
              </DialogDescription>
            </div>

            {/* Difference Highlight Toggle */}
            <button
              type="button"
              onClick={toggleHighlightDifferences}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-mono transition-colors ${
                highlightDifferences
                  ? "bg-amber-50 border-amber-300 text-amber-900 font-semibold"
                  : "bg-surface-card border-border-light text-ink-muted hover:text-ink-primary"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${highlightDifferences ? "bg-amber-500" : "bg-slate-300"}`} />
              <span>Highlight Differences</span>
            </button>
          </div>
        </DialogHeader>

        {isCrossDomain && (
          <div className="my-3 p-3 bg-amber-50 border border-amber-200 rounded-sm flex items-start gap-2 text-xs text-amber-900 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Cross-Domain Comparison Notice:</strong> Selected items span different engineering domains (
              {uniqueDomains.join(", ")}). Direct physics comparison applies only to overlapping mechanical/electrical interfaces.
            </span>
          </div>
        )}

        {/* Side-by-Side Specification Table */}
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-border-light bg-slate-50">
                <th className="p-3 font-mono font-bold text-ink-muted uppercase tracking-wider w-1/4">
                  Parameter
                </th>
                {items.map((prod) => (
                  <th key={prod.id} className="p-3 font-sans w-1/4 align-top">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <OEMTag
                          name={prod.manufacturer.name}
                          country={prod.manufacturer.originCountry}
                        />
                        <button
                          type="button"
                          onClick={() => removeFromCompare(prod.id)}
                          aria-label={`Remove ${prod.name} from comparison`}
                          className="text-slate-400 hover:text-red-600 transition-colors p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="font-bold text-ink-primary text-sm line-clamp-2">
                        {prod.name}
                      </h4>
                      <ClassificationBadge classification={prod.classification} />
                      <div className="pt-2">
                        <Link
                          href={`/products/${prod.categorySlug}/${prod.slug}`}
                          onClick={closeCompareModal}
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-brand-teal hover:underline"
                        >
                          <span>Open PDP</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Common Commercial Terms */}
              <tr className="bg-slate-100/70 border-b border-border-light">
                <td colSpan={items.length + 1} className="p-2 font-mono font-bold text-ink-primary text-[11px] uppercase">
                  Commercial &amp; Operational Scope
                </td>
              </tr>
              <tr className="border-b border-border-light/60">
                <td className="p-2.5 font-mono text-ink-muted">In-Country Billing</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-2.5 font-mono text-emerald-700 font-semibold">
                    {prod.inrInvoicingAvailable ? "✓ Indian INR + GST" : "Import on Demand"}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border-light/60">
                <td className="p-2.5 font-mono text-ink-muted">Domestic Warranty</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-2.5 font-mono text-ink-primary">
                    {prod.warrantyPeriodMonths} Months (Factory Certified)
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border-light/60">
                <td className="p-2.5 font-mono text-ink-muted">Stock Status</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-2.5 font-mono text-ink-primary">
                    {prod.stockStatus === "hyderabad-stock" ? "Hyderabad Depot Stock" : "Built to Order"}
                  </td>
                ))}
              </tr>

              {/* Technical Specifications */}
              <tr className="bg-slate-100/70 border-b border-border-light">
                <td colSpan={items.length + 1} className="p-2 font-mono font-bold text-ink-primary text-[11px] uppercase">
                  Technical Parameters
                </td>
              </tr>

              {allSpecParameters.map((spec, idx) => {
                // Collect values for this parameter across items
                const values = items.map((prod) => {
                  for (const group of prod.specifications) {
                    const found = group.rows.find((r) => r.parameter === spec.parameter);
                    if (found) return String(found.value);
                  }
                  return "—";
                });

                const isDifferent = new Set(values).size > 1;

                return (
                  <tr
                    key={idx}
                    className={`border-b border-border-light/50 transition-colors ${
                      highlightDifferences && isDifferent ? "bg-amber-50/60" : ""
                    }`}
                  >
                    <td className="p-2.5 font-mono text-ink-muted">
                      {spec.parameter}
                      {spec.unit && <span className="text-[10px] text-ink-muted ml-1">({spec.unit})</span>}
                    </td>
                    {values.map((val, itemIdx) => (
                      <td
                        key={itemIdx}
                        className={`p-2.5 font-mono ${
                          val === "—" ? "text-slate-300" : "text-ink-primary font-medium"
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end pt-3 border-t border-border-light">
          <Button variant="outline" size="sm" onClick={closeCompareModal}>
            Close Specification Matrix
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
