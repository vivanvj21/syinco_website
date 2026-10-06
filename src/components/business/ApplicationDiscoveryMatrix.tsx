"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  getPropertiesForMaterial,
  getProcessesForMaterial,
  findRecommendedSystems,
  getProductCanonicalUrl,
  MaterialClassId,
  TargetPropertyId,
  ProcessTypeId,
  MATERIAL_CLASSES,
  TARGET_PROPERTIES,
  PROCESS_TYPES,
} from "@/data/application-matrix";
import { Product } from "@/types/product";
import { OEMTag } from "@/components/technical/OEMTag";
import { ClassificationBadge } from "@/components/technical/ClassificationBadge";
import { Button } from "@/components/ui/Button";
import { ApplicationQuoteModal } from "@/components/business/ApplicationQuoteModal";
import {
  Sparkles,
  RotateCcw,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Activity,
  Flame,
} from "lucide-react";

export function ApplicationDiscoveryMatrix() {
  // Step 1: Material Class
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialClassId>("thermoelectric-materials");

  // Step 2: Mode Toggle (Property vs Process)
  const [investigationMode, setInvestigationMode] = useState<"property" | "process">("property");
  const [selectedProperty, setSelectedProperty] = useState<TargetPropertyId | undefined>("seebeck-coefficient");
  const [selectedProcess, setSelectedProcess] = useState<ProcessTypeId | undefined>(undefined);

  // Step 3: Direction / Method (Contextual)
  const [selectedDirection, setSelectedDirection] = useState<string | undefined>(undefined);

  // RFQ Modal State
  const [quoteModalProduct, setQuoteModalProduct] = useState<Product | null>(null);

  // Available options for current material
  const availableProperties = useMemo(() => {
    return getPropertiesForMaterial(selectedMaterial);
  }, [selectedMaterial]);

  const availableProcesses = useMemo(() => {
    return getProcessesForMaterial(selectedMaterial);
  }, [selectedMaterial]);

  // Handle Material Selection
  const handleSelectMaterial = (matId: MaterialClassId) => {
    setSelectedMaterial(matId);
    setSelectedDirection(undefined);

    // Auto-select first available property or process for seamless UX
    const props = getPropertiesForMaterial(matId);
    const procs = getProcessesForMaterial(matId);

    if (investigationMode === "property") {
      if (props.length > 0) {
        setSelectedProperty(props[0].id);
      } else if (procs.length > 0) {
        setInvestigationMode("process");
        setSelectedProcess(procs[0].id);
        setSelectedProperty(undefined);
      } else {
        setSelectedProperty(undefined);
      }
    } else {
      if (procs.length > 0) {
        setSelectedProcess(procs[0].id);
      } else if (props.length > 0) {
        setInvestigationMode("property");
        setSelectedProperty(props[0].id);
        setSelectedProcess(undefined);
      } else {
        setSelectedProcess(undefined);
      }
    }
  };

  // Switch Mode (Property vs Process)
  const handleModeSwitch = (mode: "property" | "process") => {
    setInvestigationMode(mode);
    setSelectedDirection(undefined);
    if (mode === "property") {
      setSelectedProcess(undefined);
      if (availableProperties.length > 0) {
        setSelectedProperty(availableProperties[0].id);
      } else {
        setSelectedProperty(undefined);
      }
    } else {
      setSelectedProperty(undefined);
      if (availableProcesses.length > 0) {
        setSelectedProcess(availableProcesses[0].id);
      } else {
        setSelectedProcess(undefined);
      }
    }
  };

  // Reset to default
  const handleReset = () => {
    setSelectedMaterial("thermoelectric-materials");
    setInvestigationMode("property");
    setSelectedProperty("seebeck-coefficient");
    setSelectedProcess(undefined);
    setSelectedDirection(undefined);
  };

  // Execute lookup
  const discoveryResult = useMemo(() => {
    return findRecommendedSystems({
      materialClass: selectedMaterial,
      targetProperty: investigationMode === "property" ? selectedProperty : undefined,
      processType: investigationMode === "process" ? selectedProcess : undefined,
      measurementDirection: selectedDirection,
    });
  }, [selectedMaterial, investigationMode, selectedProperty, selectedProcess, selectedDirection]);

  // Active Material object
  const currentMaterialObj = MATERIAL_CLASSES.find((m) => m.id === selectedMaterial);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-surface-card border border-border-light rounded-md p-4 sm:p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/40 px-2 py-0.5 rounded-xs border border-brand-teal/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-teal" />
                Application-First Discovery
              </span>
              <span className="font-mono text-[11px] text-ink-muted">
                Zero Prior Model Knowledge Required
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-display font-bold text-ink-primary tracking-tight">
              Equipment Discovery by Material &amp; Measurement Objective
            </h2>
            <p className="text-xs text-ink-muted mt-1 max-w-2xl">
              Filter by your research sample and scientific target. Every recommendation strictly resolves to verified OEM-manufactured systems with deterministic canonical deep links.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="text-xs font-mono self-start md:self-center shrink-0 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Selection
          </Button>
        </div>
      </div>

      {/* Discovery Configuration Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Input Selection Panels */}
        <div className="lg:col-span-5 space-y-6">
          {/* STEP 1: Material Class Selection */}
          <div className="bg-surface-card border border-border-light rounded-md p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-mono font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-primary">
                  Material Domain
                </h3>
              </div>
              <span className="text-[10px] font-mono text-ink-muted">9 Active Classes</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {MATERIAL_CLASSES.map((mat) => {
                const isSelected = selectedMaterial === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => handleSelectMaterial(mat.id)}
                    className={`text-left p-2 rounded-xs border transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? "border-brand-teal bg-brand-teal-tint/20 text-brand-navy font-semibold shadow-xs"
                        : "border-border-light bg-surface-base text-ink-secondary hover:border-brand-teal/40 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="truncate">{mat.label}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 ml-1" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {currentMaterialObj && (
              <p className="text-[11px] font-sans text-ink-muted bg-slate-50 p-2 rounded-xs border border-border-light/60">
                <span className="font-semibold text-ink-primary">Typical Samples:</span> {currentMaterialObj.description}
              </p>
            )}
          </div>

          {/* STEP 2: Investigation Path Selection (Property vs Process) */}
          <div className="bg-surface-card border border-border-light rounded-md p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-primary">
                  Investigation Target
                </h3>
              </div>
              <span className="text-[10px] font-mono text-ink-muted">Property vs. Process</span>
            </div>

            {/* Mode Switch Tabs */}
            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xs border border-border-light">
              <button
                type="button"
                onClick={() => handleModeSwitch("property")}
                className={`py-1.5 px-2 text-xs font-mono rounded-xs flex items-center justify-center gap-1.5 transition-all ${
                  investigationMode === "property"
                    ? "bg-white text-ink-primary font-bold shadow-xs border border-border-light"
                    : "text-ink-muted hover:text-ink-primary"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-brand-teal" />
                Physical Property
              </button>
              <button
                type="button"
                onClick={() => handleModeSwitch("process")}
                className={`py-1.5 px-2 text-xs font-mono rounded-xs flex items-center justify-center gap-1.5 transition-all ${
                  investigationMode === "process"
                    ? "bg-white text-ink-primary font-bold shadow-xs border border-border-light"
                    : "text-ink-muted hover:text-ink-primary"
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-brand-orange" />
                Thermal Process
              </button>
            </div>

            {/* List Options Based on Mode */}
            {investigationMode === "property" ? (
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-ink-muted block">
                  Select Target Property for {currentMaterialObj?.label}:
                </label>
                <div className="flex flex-col gap-1">
                  {TARGET_PROPERTIES.map((prop) => {
                    const isAvailable = availableProperties.some((p) => p.id === prop.id);
                    const isSelected = selectedProperty === prop.id;

                    return (
                      <button
                        key={prop.id}
                        onClick={() => setSelectedProperty(prop.id)}
                        className={`text-left p-2 rounded-xs border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? "border-brand-teal bg-brand-teal-tint/20 text-brand-navy font-semibold"
                            : isAvailable
                            ? "border-border-light bg-surface-base text-ink-primary hover:border-brand-teal/40"
                            : "border-dashed border-border-light/60 bg-slate-50/50 text-ink-muted/70 hover:border-border-light"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{prop.label}</span>
                          {isAvailable ? (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Verified
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-slate-100 text-ink-muted border border-border-light">
                              Custom OEM
                            </span>
                          )}
                        </div>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-ink-muted block">
                  Select Process / Synthesis Method for {currentMaterialObj?.label}:
                </label>
                <div className="flex flex-col gap-1">
                  {PROCESS_TYPES.map((proc) => {
                    const isAvailable = availableProcesses.some((p) => p.id === proc.id);
                    const isSelected = selectedProcess === proc.id;

                    return (
                      <button
                        key={proc.id}
                        onClick={() => setSelectedProcess(proc.id)}
                        className={`text-left p-2 rounded-xs border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? "border-brand-orange bg-amber-50/50 text-brand-navy font-semibold"
                            : isAvailable
                            ? "border-border-light bg-surface-base text-ink-primary hover:border-brand-orange/40"
                            : "border-dashed border-border-light/60 bg-slate-50/50 text-ink-muted/70 hover:border-border-light"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{proc.label}</span>
                          {isAvailable ? (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-amber-50 text-amber-800 border border-amber-200">
                              Verified
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-slate-100 text-ink-muted border border-border-light">
                              Specialized
                            </span>
                          )}
                        </div>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* STEP 3: Contextual Refinement (Direction / Atmosphere) */}
          {(selectedProperty === "thermal-conductivity" || selectedProperty === "thermal-diffusivity") && (
            <div className="bg-surface-card border border-border-light rounded-md p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-600 text-white text-[11px] font-mono font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-primary">
                  Transport Direction Refinement
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDirection(selectedDirection === "cross-plane" ? undefined : "cross-plane")}
                  className={`text-xs p-2 rounded-xs border text-left ${
                    selectedDirection === "cross-plane"
                      ? "border-brand-teal bg-brand-teal-tint/20 font-semibold text-brand-navy"
                      : "border-border-light hover:border-brand-teal/40 text-ink-secondary"
                  }`}
                >
                  Cross-Plane (Through-Thickness)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDirection(selectedDirection === "in-plane" ? undefined : "in-plane")}
                  className={`text-xs p-2 rounded-xs border text-left ${
                    selectedDirection === "in-plane"
                      ? "border-brand-teal bg-brand-teal-tint/20 font-semibold text-brand-navy"
                      : "border-border-light hover:border-brand-teal/40 text-ink-secondary"
                  }`}
                >
                  In-Plane (Radial / Substrate Sheet)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Hardware Recommendation Cards */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-border-light pb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-ink-primary">
                Verified Hardware Solutions
              </h3>
              {discoveryResult.hasMatches && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                  {discoveryResult.recommendedProducts.length} System{discoveryResult.recommendedProducts.length > 1 ? "s" : ""}
                </span>
              )}
            </div>

            <span className="text-[11px] font-mono text-ink-muted">
              {currentMaterialObj?.label} → {investigationMode === "property" ? "Property" : "Process"}
            </span>
          </div>

          {/* Matches Found */}
          {discoveryResult.hasMatches ? (
            <div className="space-y-4">
              {discoveryResult.recommendedProducts.map((product) => {
                const canonicalUrl = getProductCanonicalUrl(product);
                const matchingMapping = discoveryResult.verifiedMappings.find((m) =>
                  m.productIds.includes(product.id)
                );

                return (
                  <div
                    key={product.id}
                    className="bg-surface-card border border-border-light rounded-md p-4 sm:p-5 hover:border-brand-teal/60 hover:shadow-xs transition-all duration-150 space-y-3 relative group"
                  >
                    {/* Header line: OEM, Domain, Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <OEMTag
                          name={product.manufacturer.name}
                          country={product.manufacturer.originCountry}
                          isOfficialPartner={product.manufacturer.isOfficialChannelPartner}
                        />
                        <ClassificationBadge classification={product.classification} />
                      </div>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-xs bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified OEM Match
                      </span>
                    </div>

                    {/* Product Name & Description */}
                    <div>
                      <h4 className="text-base font-display font-bold text-ink-primary group-hover:text-brand-teal transition-colors">
                        <Link href={canonicalUrl} className="hover:underline">
                          {product.name}
                        </Link>
                      </h4>
                      <p className="text-xs text-ink-secondary mt-1 line-clamp-2">
                        {matchingMapping ? matchingMapping.description : product.shortDescription}
                      </p>
                    </div>

                    {/* Technology & Operating Envelope */}
                    {matchingMapping?.technology && (
                      <div className="p-2.5 rounded-xs bg-slate-50 border border-border-light text-xs font-mono space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-ink-muted">Methodology:</span>
                          <span className="text-ink-primary font-semibold">{matchingMapping.technology}</span>
                        </div>
                        {matchingMapping.temperatureRange && (
                          <div className="flex items-center justify-between">
                            <span className="text-ink-muted">Operating Temperature:</span>
                            <span className="text-ink-primary font-semibold">{matchingMapping.temperatureRange}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Metric Highlights */}
                    {product.keyMetricHighlights && product.keyMetricHighlights.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                        {product.keyMetricHighlights.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className="bg-white border border-border-light p-2 rounded-xs">
                            <span className="block font-mono text-[10px] text-ink-muted uppercase">
                              {metric.label}
                            </span>
                            <span className="block font-mono text-xs font-bold text-ink-primary mt-0.5 truncate">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Footer */}
                    <div className="pt-2 border-t border-border-light flex flex-wrap items-center justify-between gap-2">
                      {/* Deep Link to Canonical PDP */}
                      <Link
                        href={canonicalUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-teal hover:text-brand-teal/80 transition-colors"
                      >
                        View System Specifications
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setQuoteModalProduct(product)}
                        className="text-xs font-mono"
                      >
                        Request Formal Quote
                      </Button>
                    </div>

                    {/* Source References & Provenance Verification */}
                    {matchingMapping?.sourceReferences && matchingMapping.sourceReferences.length > 0 && (
                      <div className="pt-1 text-[10px] font-mono text-ink-muted flex items-center gap-1">
                        <span>Source:</span>
                        <a
                          href={matchingMapping.sourceReferences[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-secondary hover:text-brand-teal hover:underline flex items-center gap-0.5 truncate max-w-[320px]"
                        >
                          {matchingMapping.sourceReferences[0]}
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Honest Zero-Result Empty State */
            <div className="bg-surface-card border border-border-light rounded-md p-6 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-border-light flex items-center justify-center mx-auto text-ink-muted">
                <AlertCircle className="w-6 h-6 text-ink-muted" />
              </div>

              <div className="max-w-md mx-auto space-y-1.5">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-ink-primary">
                  No Standard Turnkey System Mapped
                </h4>
                <p className="text-xs text-ink-muted">
                  {discoveryResult.emptyReason || "No verified system mapping is available for this combination yet."}
                </p>
                <p className="text-[11px] text-ink-muted/80">
                  SYINCO strictly recommends verified instruments backed by OEM engineering documentation. We never fabricate specifications or simulate unverified capabilities.
                </p>
              </div>

              {discoveryResult.derivedMappingsCount > 0 && (
                <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xs text-[11px] text-amber-900 max-w-md mx-auto text-left font-sans">
                  <span className="font-bold font-mono uppercase text-[10px] block mb-0.5">
                    Scientific Literature Reference Notice
                  </span>
                  Experimental setups for this combination exist in peer-reviewed literature, but are not verified turnkey production standards. Our technical specialists can consult factory engineering to review custom feasibility.
                </div>
              )}

              <div className="pt-2 flex justify-center gap-3">
                <Link href="/contact?subject=Custom+Application+Evaluation">
                  <Button variant="primary" size="sm" className="text-xs font-mono">
                    Consult an Applications Specialist
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="text-xs font-mono"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reusable Capital Equipment RFQ Modal */}
      {quoteModalProduct && (
        <ApplicationQuoteModal
          isOpen={!!quoteModalProduct}
          onClose={() => setQuoteModalProduct(null)}
          productSlug={quoteModalProduct.slug}
          productName={quoteModalProduct.name}
          manufacturerName={quoteModalProduct.manufacturer.name}
          activeModel={quoteModalProduct.variants?.[0]?.modelNumber || "Standard Unit"}
        />
      )}
    </div>
  );
}
