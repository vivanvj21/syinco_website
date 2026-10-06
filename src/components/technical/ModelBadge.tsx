import React from "react";
import { cn } from "@/lib/utils";

export interface ModelBadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modelNumber: string;
  isSelected?: boolean;
  isInteractive?: boolean;
}

export function ModelBadge({
  className,
  modelNumber,
  isSelected = false,
  isInteractive = false,
  onClick,
  ...props
}: ModelBadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2 py-1 rounded-sm font-mono text-xs font-medium tracking-tight border transition-colors duration-150";

  const stateStyles = isSelected
    ? "border-brand-teal bg-brand-teal-tint text-brand-teal font-semibold shadow-xs"
    : "border-border-light bg-surface-card text-ink-primary hover:border-slate-400";

  const interactiveStyles = isInteractive
    ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-teal"
    : "cursor-default pointer-events-none";

  return (
    <button
      type="button"
      className={cn(baseStyles, stateStyles, interactiveStyles, className)}
      onClick={isInteractive ? onClick : undefined}
      aria-pressed={isInteractive ? isSelected : undefined}
      {...props}
    >
      {modelNumber}
    </button>
  );
}
