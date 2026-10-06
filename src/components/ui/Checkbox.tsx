"use client";

import React, { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  sublabel?: string;
}

export const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, sublabel, id, ...props }, ref) => {
  return (
    <div className="inline-flex items-start gap-2.5">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-border-light bg-surface-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-teal focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-teal data-[state=checked]:border-brand-teal data-[state=checked]:text-white mt-0.5",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <Check className="h-3 w-3 stroke-[2.5]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || sublabel) && (
        <div className="grid gap-0.5 leading-none">
          {label && (
            <label
              htmlFor={id}
              className="text-xs font-sans font-medium text-ink-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {label}
            </label>
          )}
          {sublabel && <span className="text-[11px] text-ink-muted">{sublabel}</span>}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
