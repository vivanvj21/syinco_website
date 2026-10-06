import React from "react";
import { cn } from "@/lib/utils";
import { EquipmentClassification } from "@/types/product";

export interface ClassificationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  classification: EquipmentClassification;
}

const CLASSIFICATION_LABELS: Record<EquipmentClassification, string> = {
  "rd-laboratory": "R&D / Laboratory Scale",
  "pilot-production": "Pilot & Production Scale",
  "industrial-automated": "Industrial Automated Line",
  "subsystem-component": "Subsystem Component",
  "spare-consumable": "Spare / Consumable",
};

export function ClassificationBadge({
  className,
  classification,
  ...props
}: ClassificationBadgeProps) {
  const label = CLASSIFICATION_LABELS[classification] || classification;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-sm font-mono text-[10px] font-semibold uppercase tracking-wider border border-slate-300 bg-slate-100/80 text-slate-700",
        className
      )}
      {...props}
    >
      [{label}]
    </span>
  );
}
