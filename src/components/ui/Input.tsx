import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, helperText, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-xs font-sans font-medium text-ink-primary mb-1">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={cn(
            "w-full h-10 px-3 py-2 bg-surface-card border border-border-light rounded-md text-sm text-ink-primary placeholder:text-ink-muted transition-colors duration-150 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal disabled:opacity-50 disabled:bg-slate-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600 font-sans">{error}</p>}
        {helperText && !error && <p className="mt-1 text-xs text-ink-muted font-sans">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
