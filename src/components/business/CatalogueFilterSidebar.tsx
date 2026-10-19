"use client";

import React, { useState, useEffect } from "react";
import { X, RotateCcw, ChevronDown, ChevronRight, Layers, Factory, Check } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { OEM_CATEGORIES } from "@/data/oem-categories";

export interface FilterState {
  vendor: string[];
  archetype: string[];
  domain: string[];
  stock: string[];
  oemCategory: string[];
}

export interface FacetCounts {
  vendors: Record<string, number>;
  archetypes: Record<string, number>;
  domains: Record<string, number>;
  stocks: Record<string, number>;
  oemCategories?: Record<string, number>;
}

export interface CatalogueFilterSidebarProps {
  filters: FilterState;
  facetCounts?: FacetCounts;
  onFilterChange: (newFilters: FilterState) => void;
  onClearAll: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
  totalProductsCount: number;
  filteredCount: number;
}

export function CatalogueFilterSidebar({
  filters,
  facetCounts = { vendors: {}, archetypes: {}, domains: {}, stocks: {} },
  onFilterChange,
  onClearAll,
  isMobileOpen,
  onMobileClose,
  totalProductsCount,
  filteredCount,
}: CatalogueFilterSidebarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeCompanyTab, setActiveCompanyTab] = useState<string>(() => {
    if (filters.vendor.includes("advance-riko")) return "advance-riko";
    if (filters.vendor.includes("fuji-electronic")) return "fuji-electronic";
    return "edwards-vacuum";
  });

  useEffect(() => {
    if (filters.vendor.length === 1) {
      setActiveCompanyTab(filters.vendor[0]);
    }
  }, [filters.vendor]);

  const toggleFilter = (category: keyof FilterState, value: string) => {
    const current = filters[category];
    const exists = current.includes(value);
    const updated = exists
      ? current.filter((v) => v !== value)
      : [...current, value];

    onFilterChange({
      ...filters,
      [category]: updated,
    });
  };

  const hasActiveFilters =
    filters.vendor.length > 0 ||
    filters.archetype.length > 0 ||
    filters.domain.length > 0 ||
    filters.stock.length > 0 ||
    filters.oemCategory.length > 0;

  const content = (
    <div className="space-y-6 text-xs select-none">
      {/* 1. Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border-light">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 block">
            Navigation &amp; Discovery
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            {filteredCount} of {totalProductsCount} systems
          </span>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="font-mono text-[11px] text-brand-teal hover:text-red-600 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 2. OEM / PRINCIPAL */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-1.5 text-slate-900">
          <Factory className="w-3.5 h-3.5 text-brand-teal shrink-0" />
          <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-900">
            OEM / Principal
          </h4>
        </div>
        <div className="space-y-1 font-sans pl-1">
          {[
            { id: "edwards-vacuum", label: "Edwards Vacuum (UK)" },
            { id: "advance-riko", label: "Advance Riko, Inc. (Japan)" },
            { id: "fuji-electronic", label: "Fuji-SPS (Japan)" },
          ].map((item) => {
            const checked = filters.vendor.includes(item.id);
            const count = facetCounts.vendors[item.id] || 0;
            return (
              <label
                key={item.id}
                className={`flex items-center justify-between gap-2 py-1 px-1.5 rounded-xs cursor-pointer transition-colors ${
                  checked
                    ? "bg-brand-teal-tint/30 text-brand-teal font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                } ${count === 0 && !checked ? "opacity-35" : ""}`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      toggleFilter("vendor", item.id);
                      setActiveCompanyTab(item.id);
                    }}
                    className="rounded-xs border-slate-300 text-brand-teal focus:ring-brand-teal h-3.5 w-3.5 shrink-0 cursor-pointer"
                  />
                  <span className="truncate text-xs">{item.label}</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 shrink-0">
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 3. PRODUCT CATEGORIES (BELOW OEM / PRINCIPAL) */}
      <div className="space-y-3 pt-4 border-t border-border-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-900">
            <Layers className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-900">
              Product Categories
            </h4>
          </div>
        </div>

        {/* Company Dropdown */}
        <div className="relative">
          <label htmlFor="company-category-select" className="sr-only">
            Select OEM / Company
          </label>
          <div className="relative">
            <select
              id="company-category-select"
              value={activeCompanyTab}
              onChange={(e) => setActiveCompanyTab(e.target.value)}
              className="w-full text-xs font-mono py-1.5 pl-2.5 pr-8 bg-slate-50 border border-border-light rounded-xs text-slate-900 focus:outline-none focus:border-brand-teal appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <option value="edwards-vacuum">Edwards Vacuum (UK)</option>
              <option value="advance-riko">Advance Riko (Japan)</option>
              <option value="fuji-electronic">Fuji-SPS (Japan)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Category List with horizontal lines matching user specification */}
        <div className="divide-y divide-border-light border-y border-border-light font-sans">
          {(OEM_CATEGORIES[activeCompanyTab] || []).map((item) => {
            const checked = filters.oemCategory.includes(item.id);
            const count = facetCounts.oemCategories?.[item.id] || 0;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleFilter("oemCategory", item.id)}
                className={`w-full text-left py-2.5 px-2 flex items-center justify-between text-xs transition-colors cursor-pointer group ${
                  checked
                    ? "bg-brand-teal-tint/25 text-brand-teal font-semibold"
                    : "text-slate-800 hover:text-brand-teal hover:bg-slate-50"
                } ${count === 0 && !checked ? "opacity-40" : ""}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center shrink-0 transition-colors ${
                      checked
                        ? "bg-brand-teal border-brand-teal text-white"
                        : "border-slate-300 bg-white group-hover:border-slate-400"
                    }`}
                  >
                    {checked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                  </div>
                  <span className="truncate">{item.name}</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 shrink-0 ml-2">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. ADVANCED FILTERS (VISUALLY SECONDARY & COLLAPSIBLE) */}
      <div className="pt-4 border-t border-border-light">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-between text-slate-500 hover:text-slate-900 py-1 transition-colors cursor-pointer"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
            Advanced Filters
          </span>
          {showAdvanced ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" />
          )}
        </button>

        {showAdvanced && (
          <div className="pt-3 space-y-4 pl-1">
            {/* System Archetype */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold">
                Equipment Classification
              </span>
              {[
                { id: "scientific-instrument", label: "Scientific Instrument (Capital)" },
                { id: "industrial-component", label: "Industrial Component (OEM)" },
                { id: "consumable-spare", label: "Consumable / Spare Kit" },
              ].map((item) => {
                const checked = filters.archetype.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFilter("archetype", item.id)}
                      className="rounded-xs border-slate-300 text-brand-teal focus:ring-brand-teal h-3 w-3 cursor-pointer"
                    />
                    <span className="truncate">{item.label}</span>
                  </label>
                );
              })}
            </div>

            {/* Availability */}
            <div className="space-y-1.5 pt-2 border-t border-border-light/60">
              <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold">
                Availability
              </span>
              {[
                { id: "hyderabad-stock", label: "Hyderabad Depot Stock" },
                { id: "built-to-order", label: "Direct Import / BTO" },
              ].map((item) => {
                const checked = filters.stock.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFilter("stock", item.id)}
                      className="rounded-xs border-slate-300 text-brand-teal focus:ring-brand-teal h-3 w-3 cursor-pointer"
                    />
                    <span className="truncate">{item.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Panel */}
      <aside
        aria-label="Catalogue Navigation"
        className="hidden md:block w-64 lg:w-72 shrink-0 bg-white border border-border-light rounded-sm p-4 sticky top-24 self-start shadow-xs"
      >
        {content}
      </aside>

      {/* Mobile Drawer */}
      <Drawer open={isMobileOpen} onOpenChange={(open) => !open && onMobileClose()}>
        <DrawerContent
          aria-label="Catalogue Navigation Mobile Drawer"
          className="w-full max-w-xs p-5 bg-white overflow-y-auto text-slate-900"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-light">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Filter Systems
            </span>
            <button
              type="button"
              onClick={onMobileClose}
              className="p-1 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {content}
        </DrawerContent>
      </Drawer>
    </>
  );
}
