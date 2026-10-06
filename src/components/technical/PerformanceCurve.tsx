import React from "react";
import { cn } from "@/lib/utils";

export interface DataPoint {
  x: number;
  y: number;
}

export interface CurveSeries {
  seriesName: string;
  color?: string;
  points: DataPoint[];
}

export interface PerformanceCurveProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  xAxisLabel: string;
  yAxisLabel: string;
  series: CurveSeries[];
}

export function PerformanceCurve({
  className,
  title,
  subtitle,
  xAxisLabel,
  yAxisLabel,
  series,
  ...props
}: PerformanceCurveProps) {
  // Compute normalized bounding box for static SVG rendering
  const allX = series.flatMap((s) => s.points.map((p) => p.x));
  const allY = series.flatMap((s) => s.points.map((p) => p.y));

  const minX = Math.min(...allX, 0);
  const maxX = Math.max(...allX, 100);
  const minY = Math.min(...allY, 0);
  const maxY = Math.max(...allY, 100);

  const viewBoxWidth = 400;
  const viewBoxHeight = 220;
  const padding = 40;

  const plotWidth = viewBoxWidth - padding * 2;
  const plotHeight = viewBoxHeight - padding * 2;

  const scaleX = (x: number) => padding + ((x - minX) / (maxX - minX || 1)) * plotWidth;
  const scaleY = (y: number) => viewBoxHeight - padding - ((y - minY) / (maxY - minY || 1)) * plotHeight;

  return (
    <div
      className={cn(
        "flex flex-col border border-border-light bg-surface-card rounded-md p-4 shadow-xs",
        className
      )}
      {...props}
    >
      <div className="flex flex-col mb-3">
        <h4 className="text-xs font-sans font-bold text-ink-primary">{title}</h4>
        {subtitle && <p className="text-[11px] text-ink-muted mt-0.5">{subtitle}</p>}
      </div>

      {/* SVG Plot */}
      <div className="w-full aspect-[16/9] max-h-[260px] bg-slate-50/50 rounded-sm border border-border-light/60 p-2">
        <svg
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          className="w-full h-full overflow-visible font-mono text-[9px]"
        >
          {/* Engineering CAD Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect
            x={padding}
            y={padding}
            width={plotWidth}
            height={plotHeight}
            fill="url(#grid)"
          />

          {/* Axes */}
          <line
            x1={padding}
            y1={viewBoxHeight - padding}
            x2={viewBoxWidth - padding}
            y2={viewBoxHeight - padding}
            stroke="#94A3B8"
            strokeWidth="1"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={viewBoxHeight - padding}
            stroke="#94A3B8"
            strokeWidth="1"
          />

          {/* Axis Labels */}
          <text
            x={viewBoxWidth / 2}
            y={viewBoxHeight - 8}
            textAnchor="middle"
            fill="#64748B"
            className="font-sans font-medium"
          >
            {xAxisLabel}
          </text>
          <text
            x={-viewBoxHeight / 2}
            y={14}
            transform="rotate(-90)"
            textAnchor="middle"
            fill="#64748B"
            className="font-sans font-medium"
          >
            {yAxisLabel}
          </text>

          {/* Render Curve Series */}
          {series.map((s, idx) => {
            const color = s.color || (idx === 0 ? "#008390" : "#F59E0B");
            const pathD = s.points
              .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.x)} ${scaleY(p.y)}`)
              .join(" ");

            return (
              <g key={s.seriesName}>
                <path
                  d={pathD}
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {s.points.map((p, pIdx) => (
                  <circle
                    key={pIdx}
                    cx={scaleX(p.x)}
                    cy={scaleY(p.y)}
                    r="2.5"
                    fill={color}
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 border-t border-border-light/60">
        {series.map((s, idx) => (
          <div key={s.seriesName} className="flex items-center gap-1.5 font-mono text-[11px]">
            <span
              className="w-2.5 h-2.5 rounded-xs"
              style={{ backgroundColor: s.color || (idx === 0 ? "#008390" : "#F59E0B") }}
            />
            <span className="text-ink-primary font-medium">{s.seriesName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
