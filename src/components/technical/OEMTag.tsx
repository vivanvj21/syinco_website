import React from "react";
import { cn } from "@/lib/utils";

export interface OEMTagProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  country?: string;
  isOfficialPartner?: boolean;
}

export function OEMTag({
  className,
  name,
  country,
  isOfficialPartner = true,
  ...props
}: OEMTagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-teal",
        className
      )}
      {...props}
    >
      <span>{name}</span>
      {country && <span className="text-ink-muted text-[10px]">({country})</span>}
      {isOfficialPartner && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-brand-teal"
          title="Official Authorized Indian Channel Partner"
          aria-label="Official Channel Partner"
        />
      )}
    </div>
  );
}
