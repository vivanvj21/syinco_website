import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TechnologyDomainCardProps {
  title: string;
  oneSentence: string;
  productFamilies: string[];
  href: string;
  icon?: LucideIcon;
  className?: string;
  featured?: boolean;
}

export function TechnologyDomainCard({
  title,
  oneSentence,
  productFamilies,
  href,
  icon: Icon,
  className,
  featured = false,
}: TechnologyDomainCardProps) {
  return (
    <div
      className={cn(
        "p-5 lg:p-6 rounded-md border transition-all duration-150 flex flex-col justify-between group",
        featured
          ? "bg-slate-panel text-white border-border-dark hover:border-brand-teal"
          : "bg-surface-card text-ink-primary border-border-light hover:border-brand-teal/60 hover:shadow-xs",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs border",
              featured
                ? "text-brand-teal bg-slate-surface border-border-dark"
                : "text-brand-teal bg-brand-teal-tint/40 border-brand-teal/30"
            )}
          >
            Domain
          </span>
          {Icon && <Icon className="w-4 h-4 text-brand-teal" />}
        </div>

        <h3
          className={cn(
            "font-display font-bold text-base lg:text-lg leading-snug transition-colors group-hover:text-brand-teal",
            featured ? "text-white" : "text-ink-primary"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-xs font-sans mt-2 leading-relaxed line-clamp-2",
            featured ? "text-slate-300" : "text-ink-muted"
          )}
        >
          {oneSentence}
        </p>

        {/* 2–4 Representative Product Families as scannable tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border-light/60">
          {productFamilies.map((fam, idx) => (
            <span
              key={idx}
              className={cn(
                "text-[10px] font-mono px-2 py-0.5 rounded-xs border",
                featured
                  ? "bg-slate-surface border-border-dark text-slate-300"
                  : "bg-slate-50 border-border-light text-ink-primary"
              )}
            >
              {fam}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-border-light/60">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-teal hover:underline"
        >
          <span>Explore Systems</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
