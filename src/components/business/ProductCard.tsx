"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { OEMTag } from "@/components/technical/OEMTag";
import { ClassificationBadge } from "@/components/technical/ClassificationBadge";
import { StockStatus } from "@/components/technical/StockStatus";
import { ProductPlaceholder } from "@/components/technical/ProductPlaceholder";
import { Button } from "@/components/ui/Button";
import { useCompareStore } from "@/hooks/useCompareStore";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  onRequestQuote?: (product: Product) => void;
}

export function ProductCard({
  className,
  product,
  ...props
}: ProductCardProps) {
  const pdpHref = `/products/${product.categorySlug}/${product.slug}`;
  const { isInCompare, addToCompare, removeFromCompare } = useCompareStore();
  const inCompare = isInCompare(product.id);
  const [imageError, setImageError] = React.useState(false);

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  // Extract exactly 2-3 key metrics based on product data or domain
  const getMetrics = () => {
    if (product.keyMetricHighlights && product.keyMetricHighlights.length > 0) {
      return product.keyMetricHighlights.slice(0, 3);
    }
    if (product.domain === "vacuum-technology") {
      return [
        { label: "Pumping Speed", value: "Up to 21 m³/h" },
        { label: "Ultimate Vacuum", value: "0.007 mbar" },
        { label: "Noise Level", value: "52 dB(A)" },
      ];
    }
    if (product.domain === "high-temp-furnaces") {
      return [
        { label: "Sintering Force", value: "5 kN to 5000 kN" },
        { label: "Peak Temp", value: "Up to 2500°C" },
        { label: "Technology", value: "Spark Plasma Sintering" },
      ];
    }
    // Default: Thermoelectric
    return [
      { label: "Temperature", value: "Ambient to 1000°C" },
      { label: "Measurement", value: "Seebeck & Resistivity" },
      { label: "Atmosphere", value: "Helium Gas Flow" },
    ];
  };

  const metrics = getMetrics();

  // Asset Pipeline Invariant: Only 'product-hero' or 'product-secondary' can be displayed as hero images.
  // Performance curves, dimensional drawings, technical diagrams, logos, decorative assets, and placeholders must fall back to ProductPlaceholder.
  const isHeroEligible =
    Boolean(product.heroImage?.url) &&
    !imageError &&
    product.assetStatus !== "placeholder-active" &&
    product.heroImage?.role !== "performance-curve" &&
    product.heroImage?.role !== "dimensional-drawing" &&
    product.heroImage?.role !== "technical-diagram" &&
    product.heroImage?.role !== "decorative" &&
    product.heroImage?.role !== "page-artwork" &&
    product.heroImage?.role !== "logo" &&
    product.heroImage?.role !== "unknown" &&
    (!product.heroImage?.role ||
      product.heroImage.role === "product-hero" ||
      product.heroImage.role === "product-secondary");

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-stretch border border-border-light bg-surface-card rounded-md overflow-hidden hover:border-brand-teal/50 hover:shadow-xs transition-all duration-150 group relative",
        className
      )}
      {...props}
    >
      {/* 1. 4:3 Visual Anchor */}
      <div className="w-full sm:w-[200px] lg:w-[240px] shrink-0 bg-white sm:bg-slate-50/60 border-b sm:border-b-0 sm:border-r border-border-light flex items-center justify-center p-3 relative min-h-[160px] sm:min-h-[auto]">
        {isHeroEligible ? (
          <Link href={pdpHref} className="w-full h-full flex items-center justify-center p-1 relative">
            <Image
              src={product.heroImage.url}
              alt={product.heroImage.altText || product.name}
              width={product.heroImage.width || 240}
              height={product.heroImage.height || 180}
              unoptimized={product.heroImage.url.startsWith("http")}
              onError={() => setImageError(true)}
              className="max-h-[150px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>
        ) : (
          <ProductPlaceholder
            type={product.archetype === "industrial-component" ? "component" : "instrument"}
            aspectRatio="4/3"
            label={product.modelSeries}
            className="h-full border-none bg-transparent shadow-none"
          />
        )}

        {/* Compare Quick Toggle */}
        <button
          type="button"
          onClick={handleCompareToggle}
          aria-label={inCompare ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
          className={cn(
            "absolute top-2 left-2 flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-xs border transition-colors cursor-pointer z-10 shadow-2xs",
            inCompare
              ? "bg-brand-teal text-white border-brand-teal font-bold"
              : "bg-white/90 backdrop-blur-xs text-ink-muted border-border-light hover:text-brand-teal hover:border-brand-teal"
          )}
        >
          {inCompare ? <Check className="w-3 h-3" /> : <Scale className="w-3 h-3" />}
          <span>{inCompare ? "Compared" : "Compare"}</span>
        </button>
      </div>

      {/* 2. Content & Specification Summary Body */}
      <div className="flex flex-col justify-between flex-1 p-4 min-w-0">
        <div>
          {/* Header Metadata: OEM + Classification */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <OEMTag
              name={product.manufacturer.name}
              country={product.manufacturer.originCountry}
            />
            <ClassificationBadge classification={product.classification} />
          </div>

          {/* Product Name & Series */}
          <Link href={pdpHref} className="group-hover:text-brand-teal transition-colors block">
            <h3 className="text-base font-display font-bold text-ink-primary leading-snug">
              {product.name}
            </h3>
          </Link>
          <div className="flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-ink-muted">
            <span>
              Series: <strong className="text-ink-primary font-semibold">{product.modelSeries || product.name}</strong>
            </span>
            {product.variants && product.variants.length > 0 && (
              <span className="text-ink-muted truncate">
                · Models: <span className="text-ink-primary font-medium">{product.variants.map((v) => v.modelNumber).join(" · ")}</span>
              </span>
            )}
          </div>

          {/* Single-Line Purpose Description (Level 2 Supporting) */}
          <p className="text-xs font-sans text-ink-muted line-clamp-1 mt-1">
            {product.shortDescription}
          </p>

          {/* Key Metric Highlights (Scannable in 3 Seconds) */}
          <div className="grid grid-cols-3 gap-2 my-2.5 pt-2.5 border-t border-border-light/70">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col min-w-0">
                <span className="text-[10px] font-sans text-ink-muted uppercase truncate">{m.label}</span>
                <span className="font-mono text-xs font-bold text-ink-primary truncate">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer & Conversion Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-border-light/60">
          <StockStatus
            status={product.stockStatus}
            leadTimeWeeks={product.typicalLeadTimeWeeks}
            inrInvoicing={product.inrInvoicingAvailable}
          />

          <Link href={pdpHref}>
            <Button variant="primary" size="sm" className="text-xs h-7 px-3 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
