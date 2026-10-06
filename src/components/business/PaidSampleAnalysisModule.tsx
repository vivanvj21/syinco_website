import React from "react";
import Link from "next/link";
import { Microscope, ArrowRight, FileSpreadsheet, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PaidSampleAnalysisModule() {
  return (
    <div className="p-6 lg:p-8 bg-slate-panel text-white border border-border-dark rounded-md relative overflow-hidden shadow-xl">
      <div className="max-w-3xl space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-xs bg-slate-surface border border-border-dark text-[10px] font-mono text-brand-teal">
          <Microscope className="w-3.5 h-3.5" />
          <span>HYDERABAD SAMPLE TESTING GATEWAY</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
          Evaluate Material Feasibility Before Capital Expenditure.
        </h2>

        <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed max-w-2xl">
          Test custom pellets for Seebeck coefficient and electrical resistivity on our Advance Riko ZEM-3 benchmark system in Hyderabad before committing capital budgets.
        </p>

        {/* 3 Metric Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 p-2 bg-slate-surface border border-border-dark rounded-xs">
            <FileSpreadsheet className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span className="text-xs text-slate-200">Raw CSV Data &amp; Power Factor</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-surface border border-border-dark rounded-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span className="text-xs text-slate-200">Certified Temperature Curves</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-surface border border-border-dark rounded-xs">
            <Clock className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span className="text-xs text-slate-200">5-Day Fast Turnaround</span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link href="/products/thermoelectric-evaluation/advance-riko-zem-3">
            <Button
              variant="primary"
              size="md"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs gap-2"
            >
              <span>Book Paid Sample Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <span className="text-[11px] font-mono text-slate-400">
            Confidential Testing in Hyderabad Facility
          </span>
        </div>
      </div>
    </div>
  );
}
