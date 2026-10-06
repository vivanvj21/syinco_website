import React from "react";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { StockStatusType } from "@/types/product";

export interface StockStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StockStatusType;
  inrInvoicing?: boolean;
  leadTimeWeeks?: number;
}

export function StockStatus({
  className,
  status,
  inrInvoicing = true,
  leadTimeWeeks,
  ...props
}: StockStatusProps) {
  if (status === "hyderabad-stock") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm font-mono text-[11px] font-medium border border-emerald-500/40 bg-emerald-50/70 text-emerald-800",
          className
        )}
        {...props}
      >
        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
        <span>Hyderabad Stock {inrInvoicing && "• In-Country INR Billing"}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm font-mono text-[11px] font-medium border border-amber-500/40 bg-amber-50/70 text-amber-900",
        className
      )}
      {...props}
    >
      <Clock className="w-3.5 h-3.5 text-amber-600" />
      <span>
        Built-to-Order {leadTimeWeeks ? `(${leadTimeWeeks} Wks)` : ""} {inrInvoicing && "• INR Billing"}
      </span>
    </div>
  );
}
