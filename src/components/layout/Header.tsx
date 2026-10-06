"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";
import { SearchTrigger } from "./SearchTrigger";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-40 border-b border-border-light shadow-xs">
      {/* Main Navigation Bar (Clean White Background, High Legibility) */}
      <div className="max-w-container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo on Left */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="SYINCO Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-brand-teal transition-colors leading-tight">
              SYINCO
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <MegaMenu />

        {/* Global Actions: Search & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Search Dialog Trigger (⌘K) */}
          <SearchTrigger />

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open mobile navigation drawer"
            className="lg:hidden p-1.5 rounded-sm border border-border-light bg-slate-50 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer"
          >
            <Menu className="w-4 h-4 text-slate-700" />
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </header>
  );
}
