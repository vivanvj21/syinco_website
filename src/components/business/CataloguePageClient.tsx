"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { activeCatalogueProducts } from "@/data/products";
import { CatalogueDiscoveryEngine } from "@/components/business/CatalogueDiscoveryEngine";
import { ApplicationDiscoveryMatrix } from "@/components/business/ApplicationDiscoveryMatrix";
import { SlidersHorizontal, Sparkles } from "lucide-react";

// No props needed — data is imported directly to avoid RSC serialisation of 122 product records
function CataloguePageClientInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") === "application" ? "application" : "discipline";
  const [activeTab, setActiveTab] = useState<"discipline" | "application">(currentTab);

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") === "application" ? "application" : "discipline";
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (newTab: "discipline" | "application") => {
    setActiveTab(newTab);
    const params = new URLSearchParams(searchParams.toString());
    if (newTab === "application") {
      params.set("tab", "application");
    } else {
      params.delete("tab");
    }
    const newQuery = params.toString();
    router.replace(`${pathname}${newQuery ? `?${newQuery}` : ""}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      {/* Discovery Mode Switcher Tabs */}
      <div className="flex items-center gap-2 border-b border-border-light pb-3">
        <button
          type="button"
          onClick={() => handleTabChange("discipline")}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-xs transition-all ${
            activeTab === "discipline"
              ? "bg-slate-panel text-white font-semibold shadow-xs"
              : "bg-surface-card border border-border-light text-ink-muted hover:text-ink-primary hover:border-brand-teal/40"
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Browse by Discipline (Parametric Filter)
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("application")}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-xs transition-all relative ${
            activeTab === "application"
              ? "bg-brand-teal text-white font-semibold shadow-xs"
              : "bg-surface-card border border-border-light text-ink-muted hover:text-brand-teal hover:border-brand-teal/40"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Find by Application (Material-First)
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-brand-teal-tint/30 text-white/90 border border-white/20 uppercase">
            New
          </span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "discipline" ? (
        <CatalogueDiscoveryEngine initialProducts={activeCatalogueProducts} />
      ) : (
        <ApplicationDiscoveryMatrix />
      )}
    </div>
  );
}

export function CataloguePageClient() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs font-mono text-ink-muted">
          Loading Technical Catalogue...
        </div>
      }
    >
      <CataloguePageClientInner />
    </Suspense>
  );
}
