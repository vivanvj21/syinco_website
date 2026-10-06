"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { ProductPlaceholder } from "@/components/technical/ProductPlaceholder";
import {
  getProductPrincipal,
  getDisplayProductName,
  getProductType,
  getShortDescription,
} from "@/lib/product-display";
import { cn } from "@/lib/utils";

export interface VisualProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

/**
 * VisualProductCard — Level 1 Product Discovery Card
 * 
 * Strict Hierarchy:
 * 1. Product Image (4:3 aspect ratio, official equipment photography)
 * 2. Principal / Manufacturer (EDWARDS VACUUM, ADVANCE RIKO, FUJI-SPS)
 * 3. Product Name (e.g. nXDS Series, ZEM-3, Dr. Sinter Lab Jr.)
 * 4. Equipment Type (e.g. Dry Scroll Vacuum Pump, Thermoelectric Evaluation System)
 * 5. One Short Description (1 concise sentence explaining physical/scientific function)
 * 6. Learn More -> (Direct link to PDP Level 2/3 technical information)
 */
export function VisualProductCard({
  product,
  className,
  ...props
}: VisualProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const pdpHref = `/products/${product.categorySlug}/${product.slug}`;

  // Image eligibility check matching approved asset governance
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

  const principal = getProductPrincipal(product);
  const displayName = getDisplayProductName(product);
  const equipmentType = getProductType(product);
  const shortDescription = getShortDescription(product);

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-white border border-border-light rounded-sm overflow-hidden hover:border-brand-teal/60 hover:shadow-md transition-all duration-200 group",
        className
      )}
      {...props}
    >
      {/* 1. Product Image (4:3 Aspect Ratio) */}
      <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-border-light/70 overflow-hidden flex items-center justify-center p-4">
        {isHeroEligible ? (
          <Link href={pdpHref} className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.heroImage.url}
              alt={product.heroImage.altText || displayName}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          </Link>
        ) : (
          <ProductPlaceholder aspectRatio="4/3" label="TECHNICAL SPECIFICATION PREVIEW" />
        )}
      </div>

      {/* 2. Content Area */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Principal / Manufacturer */}
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
            {principal}
          </span>

          {/* Product Name */}
          <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-brand-teal transition-colors line-clamp-1 leading-snug">
            <Link href={pdpHref}>
              {displayName}
            </Link>
          </h3>

          {/* Equipment Type */}
          <span className="font-sans font-medium text-xs text-brand-teal block mt-1">
            {equipmentType}
          </span>

          {/* One Short Description (1-2 lines, clean concise sentence) */}
          <p className="text-xs text-slate-600 font-sans mt-2.5 line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* 3. Learn More CTA */}
        <div className="mt-4 pt-3 border-t border-border-light/60">
          <Link
            href={pdpHref}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 group-hover:text-brand-teal transition-colors py-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
