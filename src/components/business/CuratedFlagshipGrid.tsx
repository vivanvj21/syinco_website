"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getHomepageCuratedProducts } from "@/data/homepage-curated";
import { VisualProductCard } from "./VisualProductCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CuratedFlagshipGrid() {
  const curatedProducts = getHomepageCuratedProducts();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScrollState();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollState, { passive: true });
    }
    window.addEventListener("resize", checkScrollState);
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState, displayedProducts]);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 350;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Flagship Hardware Showcase"
      className="py-14 bg-surface-light border-b border-border-light"
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-border-light">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block mb-1">
                Curated Equipment
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-primary tracking-tight">
                Featured Flagship Systems
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-muted hidden sm:block">
                {displayedProducts.length} principal systems • Scroll horizontally
              </span>
              {/* Scroll Navigation Arrows */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Scroll flagships left"
                  className="w-8 h-8 rounded-xs border border-border-light bg-white flex items-center justify-center text-slate-700 hover:text-brand-teal hover:border-brand-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer hover:shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Scroll flagships right"
                  className="w-8 h-8 rounded-xs border border-border-light bg-white flex items-center justify-center text-slate-700 hover:text-brand-teal hover:border-brand-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer hover:shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Pills for Curated Items */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
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
        </ScrollReveal>

        {/* Horizontal Scroll Reel for Flagship Products */}
        <ScrollReveal animation="fade-up" delay={120}>
          <div
            ref={scrollContainerRef}
            tabIndex={0}
            role="region"
            aria-label="Featured flagship systems horizontal reel"
            className="flex gap-5 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory focus:outline-none"
            style={{ scrollbarWidth: "thin" }}
          >
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start flex flex-col"
              >
                <VisualProductCard product={product} className="h-full" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Banner to Full Catalogue */}
        <ScrollReveal animation="scale-up" delay={150}>
          <div className="mt-8 p-5 bg-surface-card border border-border-light rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-brand-teal/50 hover:shadow-md transition-all duration-300">
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
              className="shrink-0 inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs font-mono px-4 py-2.5 rounded-xs shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span>Explore the Complete Product Catalogue →</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
