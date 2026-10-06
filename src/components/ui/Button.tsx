import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-teal focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px]";

    const variantStyles = {
      primary: "bg-action-amber text-slate-canvas hover:bg-action-amber-hover font-semibold shadow-sm border border-transparent",
      secondary: "bg-slate-panel text-ink-inverse-primary hover:bg-slate-surface border border-transparent",
      outline: "bg-transparent border border-border-light text-ink-primary hover:bg-slate-100 hover:border-slate-300",
      ghost: "bg-transparent text-ink-primary hover:bg-brand-teal-tint hover:text-brand-teal border border-transparent",
      danger: "bg-red-600 text-white hover:bg-red-700 border border-transparent",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-sm gap-1.5",
      md: "h-10 px-4 text-sm rounded-md gap-2",
      lg: "h-12 px-6 text-base rounded-md gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
