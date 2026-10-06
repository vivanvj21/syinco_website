"use client";

import React from "react";
import { X, Scale, ArrowRight, Trash2 } from "lucide-react";
import { useCompareStore } from "@/hooks/useCompareStore";
import { Button } from "@/components/ui/Button";

export function CompareDock() {
  const { items, removeFromCompare, clearCompare, openCompareModal } = useCompareStore();

  if (items.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Product Comparison Dock"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-panel text-white border-t border-border-dark shadow-2xl transition-all duration-200"
    >
      <div className="max-w-container mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Indicator & Chips */}
        <div className="flex items-center gap-3 min-w-0 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0 text-xs font-mono text-slate-300">
            <Scale className="w-4 h-4 text-brand-teal" />
            <span className="font-bold">Compare ({items.length}/3):</span>
          </div>

          <div className="flex items-center gap-2">
            {items.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-surface border border-border-dark text-xs font-mono text-slate-100 max-w-[200px]"
              >
                <span className="truncate">{prod.name}</span>
                <button
                  type="button"
                  onClick={() => removeFromCompare(prod.id)}
                  aria-label={`Remove ${prod.name} from comparison`}
                  className="text-slate-400 hover:text-red-400 transition-colors p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <button
            type="button"
            onClick={clearCompare}
            className="text-[11px] font-mono text-slate-400 hover:text-red-400 flex items-center gap-1 px-2 py-1 transition-colors"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            disabled={items.length < 2}
            onClick={openCompareModal}
            className="text-xs gap-1.5 shadow-sm"
          >
            <span>Compare Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
