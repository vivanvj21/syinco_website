"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface UnitOption<T extends string> {
  id: T;
  label: string;
}

export interface UnitSwitcherProps<T extends string> {
  label?: string;
  options: UnitOption<T>[];
  activeUnit: T;
  onUnitChange: (unit: T) => void;
  className?: string;
}

export function UnitSwitcher<T extends string>({
  label,
  options,
  activeUnit,
  onUnitChange,
  className,
}: UnitSwitcherProps<T>) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {label && (
        <span className="text-xs font-sans font-medium text-ink-muted">
          {label}:
        </span>
      )}
      <div
        role="radiogroup"
        aria-label={label || "Unit selector"}
        className="inline-flex items-center p-0.5 rounded-sm border border-border-light bg-slate-100"
      >
        {options.map((option) => {
          const isSelected = option.id === activeUnit;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onUnitChange(option.id)}
              className={cn(
                "px-2 py-0.5 font-mono text-[11px] font-medium rounded-xs transition-colors duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-teal",
                isSelected
                  ? "bg-surface-card text-brand-teal font-semibold shadow-xs border border-border-light"
                  : "text-ink-muted hover:text-ink-primary bg-transparent border border-transparent"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
