import React from "react";
import { FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TechnicalDocumentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  type: "datasheet" | "brochure" | "manual" | "drawing" | "application-note";
  format?: "pdf" | "step" | "dwg" | "zip";
  fileSizeBytes: number;
  downloadUrl: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function TechnicalDocumentCard({
  className,
  title,
  type,
  format = "pdf",
  fileSizeBytes,
  downloadUrl,
  ...props
}: TechnicalDocumentCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3.5 border border-border-light bg-surface-card rounded-md hover:border-brand-teal/50 hover:bg-slate-50 transition-all duration-150 group",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3 min-w-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-slate-100 border border-border-light text-slate-700 shrink-0 group-hover:text-brand-teal group-hover:bg-brand-teal-tint/40 transition-colors">
          <FileText className="w-4 h-4" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-sans font-semibold text-ink-primary truncate group-hover:text-brand-teal transition-colors">
            {title}
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded-xs">
              {format}
            </span>
            <span className="font-mono text-[11px] text-ink-muted">
              {formatBytes(fileSizeBytes)}
            </span>
            <span className="text-[10px] font-sans text-ink-muted uppercase">
              • {type}
            </span>
          </div>
        </div>
      </div>

      <a
        href={downloadUrl}
        download
        aria-label={`Download ${title}`}
        className="flex items-center justify-center w-8 h-8 rounded-sm border border-border-light bg-surface-card text-ink-primary hover:border-brand-teal hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-teal shrink-0 ml-3 transition-colors"
      >
        <Download className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
