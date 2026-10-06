import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AcademicCitationProps extends React.HTMLAttributes<HTMLDivElement> {
  paperTitle: string;
  authors: string;
  journal: string;
  year: number;
  doiUrl?: string;
}

export function AcademicCitation({
  className,
  paperTitle,
  authors,
  journal,
  year,
  doiUrl,
  ...props
}: AcademicCitationProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3.5 border border-border-light bg-surface-card rounded-md hover:border-slate-300 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-sm bg-slate-100 border border-border-light text-slate-700 shrink-0 mt-0.5">
        <BookOpen className="w-3.5 h-3.5" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-sans font-semibold text-ink-primary leading-snug">
          &ldquo;{paperTitle}&rdquo;
        </h4>
        <p className="mt-1 text-[11px] font-sans text-ink-muted">
          <span className="text-ink-primary font-medium">{authors}</span> —{" "}
          <span className="italic">{journal}</span>,{" "}
          <span className="font-mono font-medium">{year}</span>
        </p>
        {doiUrl && (
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-1.5 font-mono text-[11px] text-brand-teal hover:underline"
          >
            <span>View Publication (DOI)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
