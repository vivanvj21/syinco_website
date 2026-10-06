import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface ApplicationCardProps {
  sector: string;
  oneLineProblem: string;
  href: string;
  icon?: LucideIcon;
}

export function ApplicationCard({
  sector,
  oneLineProblem,
  href,
  icon: Icon,
}: ApplicationCardProps) {
  return (
    <div className="p-5 bg-surface-card border border-border-light rounded-md flex flex-col justify-between hover:border-brand-teal transition-all group shadow-2xs">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted bg-slate-100 px-2 py-0.5 rounded-xs border border-border-light">
            Application
          </span>
          {Icon && <Icon className="w-4 h-4 text-brand-teal" />}
        </div>

        <h3 className="font-display font-bold text-base text-ink-primary group-hover:text-brand-teal transition-colors">
          {sector}
        </h3>

        <p className="font-sans text-xs text-ink-muted mt-2 leading-relaxed line-clamp-2">
          {oneLineProblem}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-border-light/60">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-teal hover:underline"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
