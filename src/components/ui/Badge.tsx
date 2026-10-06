import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "oem" | "classification" | "stock" | "bto" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium tracking-tight rounded-sm transition-colors border";

  const variantStyles = {
    default: "border-border-light bg-slate-100 text-ink-primary",
    oem: "border-brand-teal/40 bg-brand-teal-tint text-brand-teal font-semibold",
    classification: "border-slate-300 bg-slate-50 text-slate-700 uppercase",
    stock: "border-emerald-500/40 bg-emerald-50 text-emerald-800",
    bto: "border-action-amber/40 bg-amber-50 text-amber-900",
    outline: "border-border-light bg-transparent text-ink-muted",
  };

  const sizeStyles = {
    sm: "text-[10px] px-1.5 py-0.5 leading-none",
    md: "text-xs px-2 py-0.5 leading-tight",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {children}
    </span>
  );
}
