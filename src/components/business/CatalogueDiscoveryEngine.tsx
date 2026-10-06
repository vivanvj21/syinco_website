"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Product } from "@/types/product";
import { VisualProductCard } from "@/components/business/VisualProductCard";
import {
  CatalogueFilterSidebar,
  FilterState,
  FacetCounts,
} from "@/components/business/CatalogueFilterSidebar";
import { searchProducts } from "@/lib/search";
import { Button } from "@/components/ui/Button";
import {
  Search,
  X,
  SlidersHorizontal,
  RotateCcw,
  PackageOpen,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select";

const PAGE_SIZE = 12;

export interface CatalogueDiscoveryEngineProps {
  initialProducts: Product[];
  categorySlug?: string;
  categoryTitle?: string;
  categoryDescription?: string;
}

function DiscoveryEngineInner({
  initialProducts,
  categorySlug,
}: CatalogueDiscoveryEngineProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read initial search, sort, and pagination from URL
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [sortOption, setSortOption] = useState(searchParams.get("sort") || "relevance");
  const [currentPage, setCurrentPage] = useState(() => {
    const p = searchParams.get("page");
    return p ? Math.max(1, parseInt(p, 10)) : 1;
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>(() => {
    const vendors = searchParams.getAll("vendor");
    const archetypes = searchParams.getAll("archetype");
    const domains = searchParams.getAll("domain");
    const stock = searchParams.getAll("stock");

    return {
      vendor: vendors,
      archetype: archetypes,
      domain: domains,
      stock: stock,
    };
  });

  // Base products (scoped to category if on category page)
  const baseCategoryProducts = useMemo(() => {
    return categorySlug
      ? initialProducts.filter((p) => p.categorySlug === categorySlug)
      : initialProducts;
  }, [initialProducts, categorySlug]);

  // Compute dynamic facet counts (single pass disjunctive aggregation)
  const facetCounts: FacetCounts = useMemo(() => {
    const counts: FacetCounts = {
      vendors: {},
      archetypes: {},
      domains: {},
      stocks: {},
    };

    // Filter by search query first if present
    const searchedBase = searchQuery.trim()
      ? searchProducts(baseCategoryProducts, searchQuery)
      : baseCategoryProducts;

    searchedBase.forEach((p) => {
      // Vendor counts (matching archetype, domain, stock)
      const matchForVendor =
        (filters.archetype.length === 0 || filters.archetype.includes(p.archetype)) &&
        (filters.domain.length === 0 || filters.domain.includes(p.domain)) &&
        (filters.stock.length === 0 || filters.stock.includes(p.stockStatus));
      if (matchForVendor) {
        counts.vendors[p.manufacturer.id] = (counts.vendors[p.manufacturer.id] || 0) + 1;
      }

      // Archetype counts (matching vendor, domain, stock)
      const matchForArchetype =
        (filters.vendor.length === 0 || filters.vendor.includes(p.manufacturer.id)) &&
        (filters.domain.length === 0 || filters.domain.includes(p.domain)) &&
        (filters.stock.length === 0 || filters.stock.includes(p.stockStatus));
      if (matchForArchetype) {
        counts.archetypes[p.archetype] = (counts.archetypes[p.archetype] || 0) + 1;
      }

      // Domain counts (matching vendor, archetype, stock)
      const matchForDomain =
        (filters.vendor.length === 0 || filters.vendor.includes(p.manufacturer.id)) &&
        (filters.archetype.length === 0 || filters.archetype.includes(p.archetype)) &&
        (filters.stock.length === 0 || filters.stock.includes(p.stockStatus));
      if (matchForDomain) {
        counts.domains[p.domain] = (counts.domains[p.domain] || 0) + 1;
      }

      // Stock counts (matching vendor, archetype, domain)
      const matchForStock =
        (filters.vendor.length === 0 || filters.vendor.includes(p.manufacturer.id)) &&
        (filters.archetype.length === 0 || filters.archetype.includes(p.archetype)) &&
        (filters.domain.length === 0 || filters.domain.includes(p.domain));
      if (matchForStock) {
        counts.stocks[p.stockStatus] = (counts.stocks[p.stockStatus] || 0) + 1;
      }
    });

    return counts;
  }, [baseCategoryProducts, searchQuery, filters]);

  // Filter and Search Pipeline
  const filteredProducts = useMemo(() => {
    let results = baseCategoryProducts;

    // Search query via Fuse.js
    if (searchQuery.trim()) {
      results = searchProducts(results, searchQuery);
    }

    // Vendor filter
    if (filters.vendor.length > 0) {
      results = results.filter((p) => filters.vendor.includes(p.manufacturer.id));
    }

    // Archetype filter
    if (filters.archetype.length > 0) {
      results = results.filter((p) => filters.archetype.includes(p.archetype));
    }

    // Domain filter
    if (filters.domain.length > 0) {
      results = results.filter((p) => filters.domain.includes(p.domain));
    }

    // Stock availability filter
    if (filters.stock.length > 0) {
      results = results.filter((p) => filters.stock.includes(p.stockStatus));
    }

    // Sorting
    const sorted = [...results];
    if (sortOption === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "vendor-asc") {
      sorted.sort((a, b) => a.manufacturer.name.localeCompare(b.manufacturer.name));
    }

    return sorted;
  }, [baseCategoryProducts, searchQuery, filters, sortOption]);

  // Calculate pagination bounds
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const validPage = Math.min(Math.max(1, currentPage), totalPages);

  // Synchronize state to URL search parameters
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    }

    if (sortOption !== "relevance") {
      params.set("sort", sortOption);
    }

    if (validPage > 1) {
      params.set("page", validPage.toString());
    }

    filters.vendor.forEach((v) => params.append("vendor", v));
    filters.archetype.forEach((a) => params.append("archetype", a));
    filters.domain.forEach((d) => params.append("domain", d));
    filters.stock.forEach((s) => params.append("stock", s));

    const queryString = params.toString();
    const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(targetUrl, { scroll: false });
  }, [filters, searchQuery, sortOption, validPage, pathname, router]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter alteration
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleClearAll = () => {
    setFilters({
      vendor: [],
      archetype: [],
      domain: [],
      stock: [],
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  const removePill = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
    setCurrentPage(1);
  };

  // Slice for active page
  const paginatedProducts = useMemo(() => {
    const startIdx = (validPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(startIdx, startIdx + PAGE_SIZE);
  }, [filteredProducts, validPage]);

  const activePillsCount =
    filters.vendor.length +
    filters.archetype.length +
    filters.domain.length +
    filters.stock.length;

  return (
    <div className="space-y-6">
      {/* Top Search & Controls Bar */}
      <div className="bg-surface-card border border-border-light rounded-md p-3 sm:p-4 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Fuse.js Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by model (e.g. nXDS15i), OEM, Seebeck, vacuum, or part number..."
              className="w-full pl-9 pr-8 py-2 bg-surface-light border border-border-light rounded-sm text-xs font-mono text-ink-primary placeholder:text-ink-muted placeholder:font-sans focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search text"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-primary p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 justify-between sm:justify-end">
            {/* Mobile Filter Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden text-xs gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
              <span>Filters</span>
              {activePillsCount > 0 && (
                <span className="font-mono text-[10px] px-1.5 py-0.2 bg-brand-teal text-white rounded-xs">
                  {activePillsCount}
                </span>
              )}
            </Button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <ArrowUpDown className="w-3.5 h-3.5 text-ink-muted hidden sm:inline" />
              <Select value={sortOption} onValueChange={(val) => setSortOption(val)}>
                <SelectTrigger className="w-[155px] text-xs h-8">
                  <SelectValue placeholder="Sort Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name-asc">Name (A–Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z–A)</SelectItem>
                  <SelectItem value="vendor-asc">OEM Partner</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Active Filter Pills Bar */}
        {(activePillsCount > 0 || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-light/60">
            <span className="text-[11px] font-mono text-ink-muted">Active:</span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-ink-primary rounded-xs text-[11px] font-mono border border-border-light">
                Query: &ldquo;{searchQuery}&rdquo;
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.vendor.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-teal-tint text-brand-teal rounded-xs text-[11px] font-mono border border-brand-teal/30"
              >
                OEM: {v}
                <button
                  type="button"
                  onClick={() => removePill("vendor", v)}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.archetype.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-teal-tint text-brand-teal rounded-xs text-[11px] font-mono border border-brand-teal/30"
              >
                Archetype: {a}
                <button
                  type="button"
                  onClick={() => removePill("archetype", a)}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.domain.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-teal-tint text-brand-teal rounded-xs text-[11px] font-mono border border-brand-teal/30"
              >
                Domain: {d}
                <button
                  type="button"
                  onClick={() => removePill("domain", d)}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.stock.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded-xs text-[11px] font-mono border border-emerald-200"
              >
                Stock: {s}
                <button
                  type="button"
                  onClick={() => removePill("stock", s)}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={handleClearAll}
              className="text-[11px] font-mono text-ink-muted hover:text-red-600 transition-colors ml-auto"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Main Stream Area: Sidebar + Products */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Parametric Filter Sidebar with Dynamic Facet Counts */}
        <CatalogueFilterSidebar
          filters={filters}
          facetCounts={facetCounts}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
          isMobileOpen={isMobileFilterOpen}
          onMobileClose={() => setIsMobileFilterOpen(false)}
          totalProductsCount={initialProducts.length}
          filteredCount={filteredProducts.length}
        />

        {/* Product Cards Grid (3-Column Desktop Grid) */}
        <div className="flex-1 w-full min-w-0">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginatedProducts.map((product) => (
                  <VisualProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-6 border-t border-border-light font-mono text-xs text-ink-primary">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={validPage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="gap-1 text-xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </Button>

                  <div className="flex items-center gap-2">
                    <span className="text-ink-muted">Page</span>
                    <span className="font-bold text-brand-teal bg-brand-teal-tint px-2 py-0.5 rounded-xs">
                      {validPage}
                    </span>
                    <span className="text-ink-muted">of {totalPages}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    disabled={validPage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="gap-1 text-xs"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* Technical Empty State */
            <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-surface-card border border-border-light rounded-md">
              <PackageOpen className="w-12 h-12 stroke-1 text-slate-300 mb-3" />
              <h3 className="font-display font-bold text-base text-ink-primary">
                No Systems Match the Specified Parameters
              </h3>
              <p className="text-xs font-sans text-ink-muted mt-1.5 max-w-md leading-relaxed">
                No verified products in this category match query &ldquo;
                <span className="font-mono text-ink-primary font-semibold">{searchQuery}</span>
                &rdquo; with the selected filter criteria.
              </p>
              <div className="flex items-center gap-2 mt-5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="text-xs gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CatalogueDiscoveryEngine(props: CatalogueDiscoveryEngineProps) {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center font-mono text-xs text-ink-muted">
          Loading SYINCO Product Discovery Engine...
        </div>
      }
    >
      <DiscoveryEngineInner {...props} />
    </Suspense>
  );
}
