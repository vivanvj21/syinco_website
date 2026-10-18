import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalConversionHorizon() {
  return (
    <section
      id="consultation"
      aria-label="Procurement & Technical Consultation Gateway"
      className="py-14 bg-elephant text-slate-900 border-t border-elephant-border relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 relative z-10 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-white border border-elephant-border text-[10px] font-mono text-brand-teal font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>TENDER CONSULTATION &amp; BUDGETARY QUOTES</span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-slate-950 tracking-tight">
          Planning an Equipment Tender or Vacuum System Overhaul?
        </h2>

        <p className="text-xs sm:text-sm font-sans text-slate-700 max-w-xl mx-auto leading-relaxed">
          Our engineering team in Hyderabad provides formal INR budgetary quotations, utility load schedules, and technical compliance matrices with 18% GST credit.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+917382292929">
            <Button
              variant="primary"
              size="md"
              className="bg-action-amber hover:bg-action-amber-hover text-slate-950 font-bold text-xs sm:text-sm px-5 gap-2 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Desk: +91 73822 92929</span>
            </Button>
          </a>

          <a href="mailto:info@syinco.in">
            <Button
              variant="outline"
              size="md"
              className="border-elephant-border bg-white text-slate-900 hover:border-brand-teal hover:text-brand-teal text-xs sm:text-sm px-5 gap-2 shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4 text-brand-teal" />
              <span>Submit Tender Specification</span>
            </Button>
          </a>
        </div>

        <div className="pt-3 text-[11px] font-mono text-slate-600 flex items-center justify-center gap-2">
          <span>In-Country INR Billing</span>
          <span>•</span>
          <Link href="/products" className="text-brand-teal hover:underline flex items-center gap-1 font-semibold">
            <span>Browse Full Catalogue</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
