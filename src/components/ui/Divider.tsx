import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  dark?: boolean;
  label?: string;
}

export function Divider({
  className,
  orientation = "horizontal",
  dark = false,
  label,
  ...props
}: DividerProps) {
  const borderColor = dark ? "border-border-dark" : "border-border-light";

  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("inline-block w-px self-stretch border-r", borderColor, className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div className={cn("relative flex items-center w-full my-4", className)} {...props}>
        <div className={cn("flex-grow border-t", borderColor)} />
        <span className="flex-shrink mx-3 text-[11px] font-mono text-ink-muted uppercase tracking-wider">
          {label}
        </span>
        <div className={cn("flex-grow border-t", borderColor)} />
      </div>
    );
  }

  return (
    <hr
      className={cn("w-full border-t my-4", borderColor, className)}
      {...props}
    />
  );
}
