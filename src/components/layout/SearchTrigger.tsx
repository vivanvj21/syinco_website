"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, CornerDownLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import { allProducts } from "@/data/products";
import { searchProducts } from "@/lib/search";
import { OEMTag } from "@/components/technical/OEMTag";

export function SearchTrigger() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = query.trim() ? searchProducts(allProducts, query) : allProducts;

  const handleSelect = (categorySlug: string, slug: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/products/${categorySlug}/${slug}`);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Search equipment by model, OEM or specification"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs border border-border-light bg-slate-50 text-xs font-mono text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <Search className="w-3.5 h-3.5 text-slate-500" />
        <span className="hidden xl:inline text-slate-500">Search...</span>
        <kbd className="hidden lg:inline-flex items-center text-[10px] font-mono text-slate-500 bg-slate-200/80 px-1 py-0.2 rounded-xs border border-slate-300">
          ⌘K
        </kbd>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-xl p-0 overflow-hidden bg-surface-card border border-border-light shadow-2xl"
          aria-labelledby="search-dialog-title"
          aria-describedby="search-dialog-desc"
        >
          <DialogHeader className="p-4 pb-2 border-b border-border-light">
            <div className="flex items-center justify-between">
              <DialogTitle id="search-dialog-title" className="text-sm font-mono font-bold text-ink-primary">
                Global Technical Equipment Search
              </DialogTitle>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-ink-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DialogDescription id="search-dialog-desc" className="text-[11px] font-sans text-ink-muted">
              Query by model number (e.g. nXDS15i, ZEM-3M10), principal OEM, part number, or measurement physics.
            </DialogDescription>

            <div className="relative mt-2">
              <Search className="w-4 h-4 text-brand-teal absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type model, Seebeck, dry vacuum, pyrometer, or part #..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-border-light rounded-sm text-xs font-mono text-ink-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
            </div>
          </DialogHeader>

          {/* Results List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1">
            {results.length > 0 ? (
              results.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => handleSelect(prod.categorySlug, prod.slug)}
                  className="w-full text-left p-2.5 rounded-sm hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-border-light"
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      <OEMTag
                        name={prod.manufacturer.name}
                        country={prod.manufacturer.originCountry}
                      />
                      <span className="font-mono text-[10px] text-ink-muted">
                        Series: {prod.modelSeries}
                      </span>
                    </div>
                    <h4 className="text-xs font-display font-bold text-ink-primary group-hover:text-brand-teal truncate">
                      {prod.name}
                    </h4>
                    <p className="text-[11px] font-sans text-ink-muted line-clamp-1 mt-0.5">
                      {prod.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-teal shrink-0 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-xs font-sans text-ink-muted">
                No matching systems found for &ldquo;<span className="font-mono font-bold text-ink-primary">{query}</span>&rdquo;.
              </div>
            )}
          </div>

          <div className="p-2.5 bg-slate-50 border-t border-border-light text-[10px] font-mono text-ink-muted flex items-center justify-between">
            <span>Press ESC or click outside to dismiss</span>
            <span className="flex items-center gap-1">
              Select <CornerDownLeft className="w-2.5 h-2.5" />
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
