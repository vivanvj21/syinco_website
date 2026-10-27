import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

export function HeroStrategicAnchor() {
  return (
    <section
      aria-label="SYINCO Strategic Positioning & Systems Architecture"
      className="relative bg-white text-slate-900 border-b border-border-light overflow-hidden py-16 lg:py-24"
    >
      {/* High-Precision Scientific Equipment Background Image on Pure White Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/home/hero-scientific-white.jpg"
          alt="Precision Vacuum Technology and Scientific Instrumentation"
          fill
          priority
          quality={95}
          className="object-cover object-right opacity-95"
          sizes="100vw"
        />
        {/* Soft subtle gradient to guarantee crisp headline contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent max-w-3xl" />
      </div>

      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-teal block animate-fade-in">
            SYINCO TECHNOLOGIES
          </span>

          {/* H1 Authority Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-950 leading-tight animate-fade-up">
            Precision Vacuum | Thermal | Scientific | Solutions for Research &amp; Industry
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl animate-fade-up [animation-delay:150ms]">
            Delivering engineered solutions for research, industry, and critical applications.
          </p>


          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-up [animation-delay:250ms]">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center font-sans bg-action-amber hover:bg-action-amber-hover text-slate-950 font-bold text-xs sm:text-sm px-6 h-12 rounded-md gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Explore Technical Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center font-sans border border-slate-300 bg-white/90 text-slate-800 hover:bg-white hover:border-brand-teal hover:text-brand-teal text-xs sm:text-sm px-5 h-12 rounded-md gap-2 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-brand-teal group-hover:scale-110 transition-transform" />
              <span>Consult a Specialist</span>
            </Link>
          </div>

          {/* Official Coordinates Quick Reference */}
          <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-slate-500 animate-fade-up [animation-delay:350ms]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
              Works Facility: Nagole, Hyderabad 500068
            </span>
            <span>•</span>
            <a href="tel:+914024142929" className="hover:text-slate-900 transition-colors">
              Tel: +91 (40) 24142929
            </a>
            <span>•</span>
            <a href="mailto:info@syinco.in" className="text-brand-teal hover:underline font-semibold">
              info@syinco.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
