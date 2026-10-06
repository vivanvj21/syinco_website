import React from "react";
import { cn } from "@/lib/utils";

export interface ProductPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "instrument" | "component" | "accessory";
  aspectRatio?: "4/3" | "16/9" | "1/1";
  label?: string;
}

export function ProductPlaceholder({
  className,
  type = "instrument",
  aspectRatio = "4/3",
  label = "SPECIFICATION PREVIEW — OFFICIAL OEM ASSET PENDING",
  ...props
}: ProductPlaceholderProps) {
  const aspectClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "1/1": "aspect-square",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full bg-slate-50 border border-border-light rounded-md overflow-hidden p-6 select-none",
        aspectClass,
        className
      )}
      {...props}
    >
      {/* Background Engineering CAD Grid */}
      <svg
        className="absolute inset-0 w-full h-full stroke-slate-200/70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ph-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-grid)" />
      </svg>

      {/* Technical Isometric Wireframe Silhouette */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xs">
        <svg
          viewBox="0 0 100 90"
          className="w-20 h-20 stroke-slate-400 fill-slate-100/50 mb-3"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {type === "instrument" ? (
            // Isometric Instrument Chamber & Rack
            <g>
              {/* Main chamber cube */}
              <polygon points="50,10 85,28 50,46 15,28" />
              <polygon points="15,28 50,46 50,82 15,64" />
              <polygon points="50,46 85,28 85,64 50,82" />
              {/* Window & stage lines */}
              <line x1="50" y1="46" x2="50" y2="28" strokeDasharray="2,2" />
              <circle cx="50" cy="55" r="4" fill="#008390" stroke="none" />
              <line x1="42" y1="55" x2="58" y2="55" stroke="#008390" strokeWidth="1" />
            </g>
          ) : (
            // Component / Subsystem Cylinder
            <g>
              <ellipse cx="50" cy="25" rx="30" ry="12" />
              <line x1="20" y1="25" x2="20" y2="65" />
              <line x1="80" y1="25" x2="80" y2="65" />
              <ellipse cx="50" cy="65" rx="30" ry="12" />
              <circle cx="50" cy="45" r="5" fill="#008390" stroke="none" />
            </g>
          )}
        </svg>

        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-xs border border-slate-300">
          {label}
        </span>
        <span className="font-mono text-[9px] text-slate-400 mt-1">
          Precision CAD Schematic View
        </span>
      </div>
    </div>
  );
}
