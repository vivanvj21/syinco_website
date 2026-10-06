"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  Check,
  Microscope,
  ArrowRight,
  PackagePlus,
  Activity,
  Gauge,
  Zap,
} from "lucide-react";
import { getProductBySlug, getCategoryBySlug } from "@/data/products";
import { OEMTag } from "@/components/technical/OEMTag";
import { ClassificationBadge } from "@/components/technical/ClassificationBadge";
import { ModelBadge } from "@/components/technical/ModelBadge";
import { StockStatus } from "@/components/technical/StockStatus";
import { TechnicalMetric } from "@/components/technical/TechnicalMetric";
import { ProductPlaceholder } from "@/components/technical/ProductPlaceholder";
import { SpecificationTable } from "@/components/technical/SpecificationTable";
import { AcademicCitation } from "@/components/technical/AcademicCitation";
import { TechnicalDocumentCard } from "@/components/technical/TechnicalDocumentCard";
import { PerformanceCurve } from "@/components/technical/PerformanceCurve";
import { ApplicationQuoteModal } from "@/components/business/ApplicationQuoteModal";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { useRfqStore } from "@/hooks/useRfqStore";
import { m3hToLs } from "@/lib/conversions";
import { cn } from "@/lib/utils";

interface PDPPageProps {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export default function ProductDetailClient({ params }: PDPPageProps) {
  const unwrappedParams = React.use(params);
  const { categorySlug, productSlug } = unwrappedParams;

  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  const matchesCategory =
    product &&
    category &&
    (product.categorySlug === category.slug || category.aliases?.includes(product.categorySlug));

  // Validate that route matches an official record in the catalog registry
  if (!product || !matchesCategory) {
    notFound();
  }

  const searchParams = useSearchParams();
  const queryModel = searchParams ? searchParams.get("model") : null;

  const modelColumns = product.variants ? product.variants.map((v) => v.modelNumber) : [product.modelSeries];
  const defaultModel = modelColumns[modelColumns.length > 2 ? 1 : 0];
  const initialModel = queryModel && modelColumns.includes(queryModel) ? queryModel : defaultModel;

  const [selectedModel, setSelectedModel] = useState<string>(initialModel);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [curveSpeedUnit, setCurveSpeedUnit] = useState<"m3h" | "ls">("m3h");
  const [activeGalleryView, setActiveGalleryView] = useState<"photo" | "interface" | "cad">("photo");
  const [imageError, setImageError] = useState(false);

  const handleModelSelect = (m: string) => {
    setSelectedModel(m);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("model", m);
      window.history.replaceState(null, "", url.toString());
    }
  };

  const { addItem: addSparesItem } = useRfqStore();

  const isInstrument = product.archetype === "scientific-instrument";
  const isComponent = product.archetype === "industrial-component";

  // Formatted spec groups with numerical data for unit conversion toggling
  const specGroups = product.specifications.map((group) => ({
    groupName: group.groupName,
    rows: group.rows.map((row) => {
      const valuesMap: Record<string, string | number> = { ...(row.valuesByModel || {}) };
      modelColumns.forEach((m) => {
        if (valuesMap[m] === undefined) {
          const variant = product.variants?.find((v) => v.modelNumber === m);
          if (variant?.keySpecs && variant.keySpecs[row.parameter] !== undefined) {
            valuesMap[m] = variant.keySpecs[row.parameter];
          } else {
            valuesMap[m] = row.value;
          }
        }
      });
      const sampleVal = valuesMap[selectedModel] ?? valuesMap[modelColumns[0]] ?? row.value;
      const isNum = typeof sampleVal === "number" || (!isNaN(Number(sampleVal)) && sampleVal !== "");

      return {
        parameter: row.parameter,
        unit: row.unit,
        valuesByModel: valuesMap,
        celsiusValue: row.unit === "°C" && isNum ? Number(sampleVal) : undefined,
        mbarValue: row.unit === "mbar" && isNum ? Number(sampleVal) : undefined,
        m3hValue: row.unit === "m³/h" && isNum ? Number(sampleVal) : undefined,
        highlight: row.highlight,
      };
    }),
  }));

  // Dynamic Metrics for nXDS models
  const nxdsMetricsMap: Record<string, { speed: string; vacuum: string; noise: string; flange: string }> = {
    nXDS6i: { speed: "6.2", vacuum: "0.020", noise: "52", flange: "NW25" },
    nXDS10i: { speed: "11.1", vacuum: "0.007", noise: "52", flange: "NW25" },
    nXDS15i: { speed: "15.1", vacuum: "0.007", noise: "52", flange: "NW25" },
    nXDS20i: { speed: "21.0", vacuum: "0.030", noise: "52", flange: "NW25" },
  };

  // Performance curve data points for Edwards nXDS Series
  const nxdsCurves = [
    {
      seriesName: "nXDS6i",
      color: "#64748B",
      points: [
        { x: 0, y: 0 },
        { x: 10, y: curveSpeedUnit === "m3h" ? 0.5 : m3hToLs(0.5) },
        { x: 25, y: curveSpeedUnit === "m3h" ? 3.8 : m3hToLs(3.8) },
        { x: 50, y: curveSpeedUnit === "m3h" ? 5.8 : m3hToLs(5.8) },
        { x: 75, y: curveSpeedUnit === "m3h" ? 6.2 : m3hToLs(6.2) },
        { x: 100, y: curveSpeedUnit === "m3h" ? 5.8 : m3hToLs(5.8) },
      ],
    },
    {
      seriesName: "nXDS10i",
      color: "#008390",
      points: [
        { x: 0, y: 0 },
        { x: 10, y: curveSpeedUnit === "m3h" ? 1.2 : m3hToLs(1.2) },
        { x: 25, y: curveSpeedUnit === "m3h" ? 7.5 : m3hToLs(7.5) },
        { x: 50, y: curveSpeedUnit === "m3h" ? 10.5 : m3hToLs(10.5) },
        { x: 75, y: curveSpeedUnit === "m3h" ? 11.1 : m3hToLs(11.1) },
        { x: 100, y: curveSpeedUnit === "m3h" ? 10.2 : m3hToLs(10.2) },
      ],
    },
    {
      seriesName: "nXDS15i",
      color: "#F59E0B",
      points: [
        { x: 0, y: 0 },
        { x: 10, y: curveSpeedUnit === "m3h" ? 2.0 : m3hToLs(2.0) },
        { x: 25, y: curveSpeedUnit === "m3h" ? 10.5 : m3hToLs(10.5) },
        { x: 50, y: curveSpeedUnit === "m3h" ? 14.5 : m3hToLs(14.5) },
        { x: 75, y: curveSpeedUnit === "m3h" ? 15.1 : m3hToLs(15.1) },
        { x: 100, y: curveSpeedUnit === "m3h" ? 13.8 : m3hToLs(13.8) },
      ],
    },
    {
      seriesName: "nXDS20i",
      color: "#0EA5E9",
      points: [
        { x: 0, y: 0 },
        { x: 10, y: curveSpeedUnit === "m3h" ? 0.8 : m3hToLs(0.8) },
        { x: 25, y: curveSpeedUnit === "m3h" ? 13.0 : m3hToLs(13.0) },
        { x: 50, y: curveSpeedUnit === "m3h" ? 19.5 : m3hToLs(19.5) },
        { x: 75, y: curveSpeedUnit === "m3h" ? 21.0 : m3hToLs(21.0) },
        { x: 100, y: curveSpeedUnit === "m3h" ? 19.0 : m3hToLs(19.0) },
      ],
    },
  ];

  // Dynamic metrics extraction for universal PDP
  const getHeroMetrics = () => {
    // 1. Check if the active variant has specificationHighlights
    const variant = product.variants?.find((v) => v.modelNumber === selectedModel);
    if (variant?.specificationHighlights && variant.specificationHighlights.length > 0) {
      return variant.specificationHighlights.slice(0, 4).map((h, i) => ({
        label: h.label,
        value: h.value,
        unit: h.unit,
        isProminent: i === 0,
      }));
    }

    // 1b. Check if active variant has keySpecs
    if (variant?.keySpecs && Object.keys(variant.keySpecs).length > 0) {
      const entries = Object.entries(variant.keySpecs);
      return entries.slice(0, 4).map(([k, v], i) => ({
        label: k,
        value: v,
        unit: undefined,
        isProminent: i === 0,
      }));
    }

    // 2. Fall back to product keyMetricHighlights
    if (product.keyMetricHighlights && product.keyMetricHighlights.length > 0) {
      return product.keyMetricHighlights.slice(0, 4).map((h, i) => ({
        label: h.label,
        value: h.value,
        unit: undefined,
        isProminent: i === 0,
      }));
    }

    // 3. Defaults for nXDS and ZEM-3
    if (isComponent) {
      return [
        { label: "Peak Pumping Speed", value: nxdsMetricsMap[selectedModel]?.speed || "15.1", unit: "m³/h", isProminent: true },
        { label: "Ultimate Vacuum", value: nxdsMetricsMap[selectedModel]?.vacuum || "0.007", unit: "mbar" },
        { label: "Acoustic Noise", value: "52", unit: "dB(A)" },
        { label: "Flange Interface", value: "NW25", unit: "KF25 Quick" },
      ];
    }

    return [
      { label: "Max Temperature", value: selectedModel === "ZEM-3M10" ? "1000" : "800", unit: "°C", isProminent: true },
      { label: "Measurement", value: "Simultaneous", unit: "S & ρ" },
      { label: "Lead Resistance", value: "4-Terminal", unit: "Cancelled" },
      { label: "Atmosphere", value: "Helium", unit: "Gas Purge" },
    ];
  };

  const heroMetrics = getHeroMetrics();

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-ink-muted">
          <li>
            <Link href="/" className="hover:text-ink-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-ink-primary transition-colors">
              Products
            </Link>
          </li>
          <li>/</li>
          <li>
            <span className="text-ink-muted capitalize">
              {product.domain.replace(/-/g, " ")}
            </span>
          </li>
          <li>/</li>
          <li className="text-ink-primary font-semibold truncate">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* 2. Hero Conversion Module (2-Column Asymmetric Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-border-light pb-10">
        {/* Left Column (55%): Precision Visual & Schematic Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="w-full bg-white border border-border-light rounded-md overflow-hidden relative shadow-xs aspect-4/3 flex items-center justify-center p-4">
            {activeGalleryView === "photo" && product.heroImage?.url && !imageError ? (
              <Image
                src={product.heroImage.url}
                alt={product.heroImage.altText || product.name}
                width={product.heroImage.width || 800}
                height={product.heroImage.height || 600}
                priority
                unoptimized={product.heroImage.url.startsWith("http")}
                onError={() => setImageError(true)}
                className="w-full h-full max-h-[440px] object-contain transition-all duration-300"
              />
            ) : (
              <ProductPlaceholder
                type={isComponent ? "component" : "instrument"}
                aspectRatio="4/3"
                label={
                  activeGalleryView === "cad"
                    ? `${product.manufacturer.name.toUpperCase()} CAD SCHEMATIC`
                    : activeGalleryView === "interface"
                    ? `${product.manufacturer.name.toUpperCase()} PORT INTERFACE`
                    : `${product.manufacturer.name.toUpperCase()} ${selectedModel} ${product.modelSeries.toUpperCase()}`
                }
              />
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setActiveGalleryView("photo")}
              className={cn(
                "rounded-sm p-2 text-center transition-all cursor-pointer",
                activeGalleryView === "photo"
                  ? "border-2 border-brand-teal bg-white shadow-2xs"
                  : "border border-border-light bg-slate-50 hover:bg-white"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] font-bold block",
                  activeGalleryView === "photo" ? "text-brand-teal" : "text-slate-600"
                )}
              >
                PRODUCT PHOTO
              </span>
              <span className="text-[9px] text-ink-muted block mt-0.5 truncate">
                OEM High-Res
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveGalleryView("interface")}
              className={cn(
                "rounded-sm p-2 text-center transition-all cursor-pointer",
                activeGalleryView === "interface"
                  ? "border-2 border-brand-teal bg-white shadow-2xs"
                  : "border border-border-light bg-slate-50 hover:bg-white"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] font-bold block",
                  activeGalleryView === "interface" ? "text-brand-teal" : "text-slate-600"
                )}
              >
                {isComponent ? "PORT INTERFACE" : "STAGE & PROBES"}
              </span>
              <span className="text-[9px] text-ink-muted block mt-0.5 truncate">
                {isComponent ? "Flange Config" : "Sensor Array"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveGalleryView("cad")}
              className={cn(
                "rounded-sm p-2 text-center transition-all cursor-pointer",
                activeGalleryView === "cad"
                  ? "border-2 border-brand-teal bg-white shadow-2xs"
                  : "border border-border-light bg-slate-50 hover:bg-white"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] font-bold block",
                  activeGalleryView === "cad" ? "text-brand-teal" : "text-slate-600"
                )}
              >
                SCHEMATIC CAD
              </span>
              <span className="text-[9px] text-ink-muted block mt-0.5 truncate">
                Footprint & Envelope
              </span>
            </button>
          </div>
        </div>

        {/* Right Column (45%): Identification, Sizing & Primary Conversion */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <OEMTag
                name={product.manufacturer.name}
                country={product.manufacturer.originCountry}
              />
              <ClassificationBadge classification={product.classification} />
            </div>

            <h1 className="text-2xl lg:text-3xl font-display font-bold text-ink-primary leading-tight">
              {product.name}
            </h1>
            <p className="text-xs font-sans text-ink-muted mt-1 leading-relaxed">
              {product.tagline}
            </p>

            {/* Model Selector Tabs */}
            <div className="mt-4 pt-3 border-t border-border-light/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-sans font-medium text-ink-primary">
                  Available Model Variants:
                </span>
                <span className="font-mono text-[11px] text-brand-teal">
                  Selected: {selectedModel}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {modelColumns.map((m) => (
                  <ModelBadge
                    key={m}
                    modelNumber={m}
                    isSelected={selectedModel === m}
                    isInteractive
                    onClick={() => handleModelSelect(m)}
                  />
                ))}
              </div>
            </div>

            {/* Key Technical Highlights (Tabular Monospace) */}
            <div className="grid grid-cols-2 gap-2.5 mt-5">
              {heroMetrics.map((m, idx) => (
                <TechnicalMetric
                  key={idx}
                  label={m.label}
                  value={m.value}
                  unit={m.unit}
                  isProminent={m.isProminent}
                />
              ))}
            </div>
          </div>

          {/* Supply Status & Dual Commercial CTAs */}
          <div className="mt-6 pt-4 border-t border-border-light space-y-3">
            <StockStatus
              status={product.stockStatus}
              leadTimeWeeks={product.typicalLeadTimeWeeks}
              inrInvoicing={product.inrInvoicingAvailable}
            />

            <div className="flex flex-col gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full text-sm justify-between shadow-xs"
              >
                <span>Request Technical Quotation ({selectedModel})</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              {isComponent ? (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    addSparesItem({
                      id: `${product.id}-${selectedModel.toLowerCase()}`,
                      partNumber: `${product.modelSeries}-${selectedModel}`,
                      name: `${product.manufacturer.name} ${selectedModel} (${product.name})`,
                      category: product.technologySubcategory || "Vacuum Equipment",
                      associatedModelSeries: selectedModel,
                      stockStatus: product.stockStatus === "hyderabad-stock" ? "ready-stock" : "dispatch-10-days",
                    });
                  }}
                  className="w-full text-xs gap-1.5"
                >
                  <PackagePlus className="w-4 h-4 text-brand-teal" />
                  <span>+ Add {selectedModel} Unit to Spares RFQ Basket</span>
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full text-xs"
                >
                  Consult an Applications Specialist
                </Button>
              )}
            </div>

            {/* Contextual Pre-Sales or Supply Assurance Gateway */}
            {isInstrument ? (
              <div className="p-3 bg-brand-teal-tint/30 border border-brand-teal/30 rounded-md">
                <div className="flex items-start gap-2 text-xs">
                  <Microscope className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-ink-primary">
                      Need Sample Validation First?
                    </span>
                    <span className="text-[11px] text-ink-muted mt-0.5 leading-relaxed">
                      Test your custom thermoelectric pellets in our Hyderabad characterization laboratory prior to capital commitment.
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="mt-1.5 font-mono text-[11px] text-brand-teal font-semibold hover:underline text-left"
                    >
                      Book Paid Sample Analysis in Hyderabad &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3 bg-slate-50 border border-border-light rounded-md">
                <div className="flex items-start gap-2 text-xs">
                  <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-ink-primary">
                      {product.manufacturer.name} Support &amp; Local India Scope
                    </span>
                    <span className="text-[11px] text-ink-muted mt-0.5 leading-relaxed">
                      {product.id === "edwards-nxds-series"
                        ? "In-stock Edwards nXDS pumps, genuine tip-seal service kits, and silencer filters dispatched within 48 business hours across India with formal GST invoicing."
                        : `Official ${product.manufacturer.name} ${product.technologySubcategory || "systems"} supplied by SYINCO with authorized manufacturer warranty, customs clearance, local engineering service in India, and direct INR GST invoicing.`}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Layered Progressive Disclosure Navigation & Content */}
      <Tabs defaultValue="overview" className="my-6">
        <div className="sticky top-[61px] z-30 bg-surface-card border-b border-border-light shadow-xs py-1.5 mb-6">
          <TabsList className="overflow-x-auto border-none scrollbar-none flex gap-1">
            <TabsTrigger value="overview" className="text-xs font-mono">
              [// Overview]
            </TabsTrigger>
            <TabsTrigger value="specifications" className="text-xs font-mono">
              [// Specifications]
            </TabsTrigger>
            <TabsTrigger value="physics" className="text-xs font-mono">
              {isComponent ? "[// Mechanism & Curves]" : "[// Measurement Physics]"}
            </TabsTrigger>
            <TabsTrigger value="applications" className="text-xs font-mono">
              {isInstrument ? "[// Applications & Papers]" : "[// Target Applications]"}
            </TabsTrigger>
            <TabsTrigger value="accessories" className="text-xs font-mono">
              [// Spares & Accessories]
            </TabsTrigger>
            <TabsTrigger value="support" className="text-xs font-mono">
              [// Delivery & Documentation]
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Overview */}
        <TabsContent value="overview">
          <section id="overview" className="py-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-brand-teal">{"// 01"}</span>
              <h2 className="text-lg font-display font-bold text-ink-primary">
                Engineering Overview
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-sans text-ink-primary leading-relaxed">
              <div className="lg:col-span-8 space-y-3">
                <p>{product.longDescription || product.shortDescription}</p>
                <div className="pt-2">
                  <h4 className="font-bold text-ink-primary mb-1 font-sans">
                    Core Architectural Strengths:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink-muted text-xs">
                    {product.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-4 p-4 bg-slate-50 border border-border-light rounded-md flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    {isComponent ? "Physical & Interface Highlights" : "Sample Physical Envelope"}
                  </span>
                  <div className="space-y-2 font-mono text-xs text-ink-primary">
                    {isComponent ? (
                      product.id === "edwards-nxds-series" ? (
                        <>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Inlet Port:</span>
                            <span className="font-bold">NW25 (KF25 Quick Clamp)</span>
                          </div>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Exhaust Port:</span>
                            <span className="font-bold">NW25 (KF25 Quick Clamp)</span>
                          </div>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Supply Power:</span>
                            <span className="font-bold">100–240V AC 50/60Hz</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink-muted">Acoustic Noise:</span>
                            <span className="font-bold text-brand-teal">52 dB(A) Whisper-Quiet</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Technology:</span>
                            <span className="font-bold text-right truncate max-w-[150px]">{product.technologySubcategory || "Vacuum"}</span>
                          </div>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Classification:</span>
                            <span className="font-bold">{product.classification.replace(/-/g, " ").toUpperCase()}</span>
                          </div>
                          <div className="flex justify-between border-b border-border-light pb-1">
                            <span className="text-ink-muted">Model Family:</span>
                            <span className="font-bold">{product.modelSeries}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink-muted">Supply Mode:</span>
                            <span className="font-bold text-brand-teal">Direct INR Invoicing</span>
                          </div>
                        </>
                      )
                    ) : (
                      <>
                        <div className="flex justify-between border-b border-border-light pb-1">
                          <span className="text-ink-muted">Cross-Section (Sq):</span>
                          <span className="font-bold">2 x 2 to 4 x 4 mm</span>
                        </div>
                        <div className="flex justify-between border-b border-border-light pb-1">
                          <span className="text-ink-muted">Cross-Section (Dia):</span>
                          <span className="font-bold">ø 2 to ø 4 mm</span>
                        </div>
                        <div className="flex justify-between border-b border-border-light pb-1">
                          <span className="text-ink-muted">Length Envelope:</span>
                          <span className="font-bold">6 to 22 mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink-muted">Purge Atmosphere:</span>
                          <span className="font-bold">He Flow (0.01 MPa)</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border-light text-[11px] text-ink-muted">
                  {isComponent
                    ? (product.id === "edwards-nxds-series"
                        ? "* Inverter-driven universal drive eliminates manual voltage rewiring."
                        : "* Official Edwards equipment engineered for continuous industrial and laboratory duty.")
                    : "* Samples must have plane-parallel polished ends to ensure ohmic current injection."}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Tab 2: Specifications */}
        <TabsContent value="specifications">
          <section id="specifications" className="py-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand-teal">{"// 02"}</span>
                <h2 className="text-lg font-display font-bold text-ink-primary">
                  Multi-Model Specification Matrix
                </h2>
              </div>
              <span className="text-xs font-mono text-ink-muted">
                {isComponent
                  ? "Deterministic Unit Switching: m³/h ↔ L/s | mbar ↔ Torr ↔ Pa"
                  : "Interactive Unit Conversion: Celsius (°C) ↔ Kelvin (K)"}
              </span>
            </div>

            <SpecificationTable
              modelColumns={modelColumns}
              groups={specGroups}
              activeModel={selectedModel}
              onModelSelect={(m) => handleModelSelect(m)}
              supportsTemperatureSwitch={isInstrument}
              supportsPressureSwitch={isComponent}
              supportsPumpingSpeedSwitch={isComponent}
            />
          </section>
        </TabsContent>

        {/* Tab 3: Mechanism / Physics & Curves */}
        <TabsContent value="physics">
          <div className="space-y-8 py-2">
            <section id={isComponent ? "mechanism" : "principle"}>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-brand-teal">{"// 03A"}</span>
                <h2 className="text-lg font-display font-bold text-ink-primary">
                  {product.id === "edwards-nxds-series"
                    ? "Dry Scroll Mechanism & Bearing Isolation"
                    : (isComponent ? `${product.technologySubcategory || "Mechanism"} Engineering Features` : "Measurement Principle & Physics")}
                </h2>
              </div>

              {isComponent ? (
                product.id === "edwards-nxds-series" ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-ink-muted leading-relaxed">
                    <div className="p-4 bg-surface-card border border-border-light rounded-md">
                      <div className="flex items-center gap-2 text-ink-primary font-bold mb-2">
                        <Activity className="w-4 h-4 text-brand-teal" />
                        <span>Hermetic Bellows Seal</span>
                      </div>
                      <p>
                        Unlike standard scroll pumps where shaft seals can degrade and leak lubricant vapors, the nXDS utilizes a high-integrity metallic bellows. This completely isolates the atmospheric bearing lubrication from the process vacuum stream.
                      </p>
                    </div>

                    <div className="p-4 bg-surface-card border border-border-light rounded-md">
                      <div className="flex items-center gap-2 text-ink-primary font-bold mb-2">
                        <Zap className="w-4 h-4 text-brand-teal" />
                        <span>Smart Inverter Drive</span>
                      </div>
                      <p>
                        An integrated microprocessor-controlled inverter matches pump speed to load demands. It accepts 100–240V single-phase supplies without jumper changes, delivering constant pumping speed regardless of grid frequency fluctuations.
                      </p>
                    </div>

                    <div className="p-4 bg-surface-card border border-border-light rounded-md">
                      <div className="flex items-center gap-2 text-ink-primary font-bold mb-2">
                        <Gauge className="w-4 h-4 text-brand-teal" />
                        <span>Gas Ballast Flexibility</span>
                      </div>
                      <p>
                        Equipped with a 4-position manual gas ballast valve. Position 2 introduces dry air or nitrogen to vaporize and sweep up to 240 g/h of water vapor out of the scroll pockets without internal condensation.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-ink-muted leading-relaxed">
                    <div className="p-4 bg-surface-card border border-border-light rounded-md">
                      <div className="flex items-center gap-2 text-ink-primary font-bold mb-2">
                        <Activity className="w-4 h-4 text-brand-teal" />
                        <span>Verified OEM Operating Architecture</span>
                      </div>
                      <p>
                        {product.shortDescription}
                      </p>
                    </div>
                    <div className="p-4 bg-surface-card border border-border-light rounded-md">
                      <div className="flex items-center gap-2 text-ink-primary font-bold mb-2">
                        <Gauge className="w-4 h-4 text-brand-teal" />
                        <span>Engineered Performance Standard</span>
                      </div>
                      <p>
                        Engineered in accordance with official Edwards quality standards, delivering deterministic performance and long service life for mission-critical vacuum installations.
                      </p>
                    </div>
                  </div>
                )
              ) : (
                <div
                  className="prose prose-sm max-w-none text-xs text-ink-muted"
                  dangerouslySetInnerHTML={{ __html: product.measurementPrincipleHtml || product.fullDescriptionHtml || "" }}
                />
              )}
            </section>

            {isComponent && product.id === "edwards-nxds-series" && (
              <section id="curves" className="pt-6 border-t border-border-light">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-teal">{"// 03B"}</span>
                    <h2 className="text-lg font-display font-bold text-ink-primary">
                      Pumping Speed Performance Curves
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-50 border border-border-light rounded-sm p-1">
                    <span className="text-xs font-mono text-ink-muted px-2">Unit:</span>
                    <button
                      type="button"
                      onClick={() => setCurveSpeedUnit("m3h")}
                      className={`px-2 py-0.5 text-xs font-mono rounded-xs transition-colors ${
                        curveSpeedUnit === "m3h"
                          ? "bg-brand-teal text-white font-bold"
                          : "text-ink-primary hover:bg-slate-200"
                      }`}
                    >
                      m³/h
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurveSpeedUnit("ls")}
                      className={`px-2 py-0.5 text-xs font-mono rounded-xs transition-colors ${
                        curveSpeedUnit === "ls"
                          ? "bg-brand-teal text-white font-bold"
                          : "text-ink-primary hover:bg-slate-200"
                      }`}
                    >
                      L/s
                    </button>
                  </div>
                </div>

                <PerformanceCurve
                  title={`Edwards nXDS Pumping Speed vs. Inlet Pressure (${curveSpeedUnit === "m3h" ? "m³/h" : "L/s"})`}
                  subtitle="Verified OEM characteristic curves across inlet pressure range (10⁻³ mbar to atmospheric pressure)."
                  xAxisLabel="Inlet Pressure (mbar - Log Scale)"
                  yAxisLabel={`Speed (${curveSpeedUnit === "m3h" ? "m³/h" : "L/s"})`}
                  series={nxdsCurves}
                />
              </section>
            )}
          </div>
        </TabsContent>

        {/* Tab 4: Applications & Citations */}
        <TabsContent value="applications">
          <section id="applications" className="py-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-brand-teal">{"// 04"}</span>
              <h2 className="text-lg font-display font-bold text-ink-primary">
                {isInstrument
                  ? "Target Applications & Peer-Reviewed Literature"
                  : "Verified Target Applications & Vacuum Systems"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className={`${isInstrument ? "lg:col-span-5" : "lg:col-span-12"} space-y-3`}>
                <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-primary">
                  Validated Integration Scenarios:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.targetApplications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono border border-border-light bg-surface-card rounded-sm text-ink-primary"
                    >
                      • {app}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-sans text-ink-muted leading-relaxed pt-2">
                  Widely deployed across Indian Central Universities, IITs, CSIR, and DRDO defense laboratories for materials research spanning high-temperature power generation and cryogenic Peltier cooling.
                </p>
              </div>

              {isInstrument && (
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-primary">
                    Peer-Reviewed Scientific Citations (ZEM-3 Characterized):
                  </h3>
                  <div className="space-y-2.5">
                    {product.scientificCitations?.map((cit, idx) => (
                      <AcademicCitation
                        key={idx}
                        paperTitle={cit.paperTitle}
                        authors={cit.authors}
                        journal={cit.journal}
                        year={cit.year}
                        doiUrl={cit.doiUrl}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </TabsContent>

        {/* Tab 5: Spares & Accessories */}
        <TabsContent value="accessories">
          <section id="accessories" className="py-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-brand-teal">{"// 05"}</span>
              <h2 className="text-lg font-display font-bold text-ink-primary">
                Compatible Spares &amp; Consumables (Hyderabad Local Stock)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.compatibleAccessories?.map((acc) => (
                <div
                  key={acc.id}
                  className="p-3.5 border border-border-light bg-surface-card rounded-md flex flex-col justify-between hover:border-brand-teal/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] font-bold text-brand-teal uppercase">
                      Part #{acc.partNumber}
                    </span>
                    <h4 className="text-xs font-sans font-semibold text-ink-primary mt-1">
                      {acc.name}
                    </h4>
                    {acc.description && (
                      <p className="text-[11px] font-sans text-ink-muted mt-1 leading-snug line-clamp-2">
                        {acc.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-light flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-xs self-start">
                      ✓ Hyderabad Ready Stock
                    </span>

                    {isComponent ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          addSparesItem({
                            id: acc.id,
                            partNumber: acc.partNumber,
                            name: acc.name,
                            category: acc.category || "General Spares",
                            associatedModelSeries: product.modelSeries,
                            stockStatus: "hyderabad-stock",
                          });
                        }}
                        className="text-[11px] h-7 px-2 justify-between"
                      >
                        <span>+ Add to Spares RFQ</span>
                        <PackagePlus className="w-3.5 h-3.5 text-brand-teal" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="text-[11px] h-7 px-2"
                      >
                        Quote Spares
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Tab 6: Delivery Scope & Documentation */}
        <TabsContent value="support">
          <div className="space-y-8 py-2">
            <section id="support">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-brand-teal">{"// 06A"}</span>
                <h2 className="text-lg font-display font-bold text-ink-primary">
                  Local India Support &amp; Delivery Scope (SYINCO Advantage)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.scopeOfDeliveryPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 bg-slate-50 border border-border-light rounded-md text-xs font-sans text-ink-primary"
                  >
                    <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="downloads" className="pt-6 border-t border-border-light">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-brand-teal">{"// 06B"}</span>
                <h2 className="text-lg font-display font-bold text-ink-primary">
                  Ungated Technical Documentation &amp; Protocols
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.documents.map((doc) => (
                  <TechnicalDocumentCard
                    key={doc.id}
                    title={doc.title}
                    type={doc.type}
                    format={doc.format}
                    fileSizeBytes={doc.fileSizeBytes}
                    downloadUrl={doc.fileUrl}
                  />
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>

      {/* 12. Closing Consultation Banner */}
      <div className="my-10 p-6 bg-slate-panel text-white rounded-md border border-border-dark flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-action-amber font-bold">
            Institutional Procurement &amp; Tender Assistance
          </span>
          <h3 className="text-xl font-display font-bold text-white">
            Need System Sizing or Tender Specifications for {product.name}?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Our engineering team in Hyderabad prepares compliant technical tender documents, utility load specifications, and formal INR budgetary quotations.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsQuoteModalOpen(true)}
            className="text-xs"
          >
            Request Quotation
          </Button>
        </div>
      </div>

      {/* Quotation Dialog Modal */}
      <ApplicationQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productSlug={product.slug}
        productName={product.name}
        manufacturerName={product.manufacturer.name}
        activeModel={selectedModel}
      />
    </div>
  );
}
