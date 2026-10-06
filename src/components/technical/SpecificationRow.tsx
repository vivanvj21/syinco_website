import React from "react";
import { cn } from "@/lib/utils";

export interface SpecificationRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  parameter: string;
  unit?: string;
  valuesByModel?: Record<string, string | number>;
  singleValue?: string | number;
  highlight?: boolean;
  modelColumns?: string[];
  activeModel?: string;
}

export function SpecificationRow({
  className,
  parameter,
  unit,
  valuesByModel,
  singleValue,
  highlight = false,
  modelColumns,
  activeModel,
  ...props
}: SpecificationRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-border-light/80 hover:bg-slate-50/80 transition-colors text-xs",
        highlight && "bg-brand-teal-tint/15",
        className
      )}
      {...props}
    >
      <th
        scope="row"
        className="py-2.5 px-3 text-left font-sans font-medium text-ink-primary align-top"
      >
        <span>{parameter}</span>
        {unit && <span className="ml-1 text-ink-muted font-mono text-[11px]">({unit})</span>}
      </th>

      {modelColumns && valuesByModel ? (
        modelColumns.map((model) => {
          const isModelActive = activeModel === model;
          const val = valuesByModel[model] ?? "—";
          return (
            <td
              key={model}
              className={cn(
                "py-2.5 px-3 text-left font-mono text-ink-primary tabular-nums align-top border-l border-border-light/60",
                isModelActive && "bg-brand-teal-tint/20 font-semibold text-brand-teal border-l-brand-teal/40"
              )}
            >
              {val}
            </td>
          );
        })
      ) : (
        <td className="py-2.5 px-3 text-left font-mono text-ink-primary tabular-nums align-top border-l border-border-light/60">
          {singleValue ?? "—"}
        </td>
      )}
    </tr>
  );
}
