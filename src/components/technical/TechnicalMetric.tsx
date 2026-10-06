import React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalMetricProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  unit?: string;
  isProminent?: boolean;
}

export function TechnicalMetric({
  className,
  label,
  value,
  unit,
  isProminent = false,
  ...props
}: TechnicalMetricProps) {
  return (
    <div
      className={cn(
        "flex flex-col border border-border-light bg-surface-card p-3 rounded-md transition-colors",
        isProminent && "border-brand-teal/40 bg-brand-teal-tint/20",
        className
      )}
      {...props}
    >
      <span className="text-[11px] font-sans font-medium text-ink-muted uppercase tracking-wider">
        {label}
      </span>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-mono text-base lg:text-lg font-bold text-ink-primary tracking-tight tabular-nums">
          {value}
        </span>
        {unit && (
          <span className="font-mono text-xs font-medium text-ink-muted">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
