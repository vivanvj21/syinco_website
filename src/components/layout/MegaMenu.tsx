"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { allCategories } from "@/data/products";
import { principals } from "@/data/principals";

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-sans font-medium text-slate-700"
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Home */}
      <Link
        href="/"
        className="px-3 py-2 rounded-sm hover:text-brand-teal transition-colors"
      >
        Home
      </Link>

      {/* 2. Industries Served */}
      <Link
        href="/industries"
        className="px-3 py-2 rounded-sm hover:text-brand-teal transition-colors"
      >
        Industries Served
      </Link>

      {/* 3. Products (with clean dropdown for quick access) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("products")}
      >
        <Link
          href="/products"
          className={`flex items-center gap-1 px-3 py-2 rounded-sm transition-colors ${
            activeMenu === "products" ? "text-brand-teal bg-slate-50" : "hover:text-brand-teal"
          }`}
          aria-expanded={activeMenu === "products"}
          aria-haspopup="true"
        >
          <span>Products</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              activeMenu === "products" ? "rotate-180 text-brand-teal" : "text-slate-400"
            }`}
          />
        </Link>

        {activeMenu === "products" && (
          <div
            className="absolute top-full left-0 w-[540px] bg-white border border-border-light rounded-sm p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={() => handleMouseEnter("products")}
          >
            <div className="grid grid-cols-12 gap-5">
              {/* Disciplines Column */}
              <div className="col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2.5 font-bold">
                  Disciplines
                </span>
                <ul className="space-y-1">
                  {allCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/products/${cat.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between py-1.5 px-2 rounded-xs hover:bg-slate-50 hover:text-brand-teal transition-colors"
                      >
                        <span className="font-sans font-medium text-xs text-slate-800 group-hover:text-brand-teal">
                          {cat.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-brand-teal transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Principals Column */}
              <div className="col-span-5 bg-slate-50 p-3.5 rounded-xs border border-border-light flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2.5 font-bold">
                    Principals
                  </span>
                  <div className="space-y-1.5">
                    {principals.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products?vendor=${p.filterVendorId}`}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between py-1.5 px-2 rounded-xs hover:bg-white transition-colors"
                      >
                        <span className="font-sans font-medium text-xs text-slate-900 group-hover:text-brand-teal">
                          {p.shortName} <span className="text-[10px] text-slate-400 font-normal">({p.country})</span>
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-brand-teal transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border-light mt-4">
                  <Link
                    href="/products"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand-teal font-bold hover:underline"
                  >
                    <span>Explore Full Catalogue</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* 5. Services */}
      <Link
        href="/services"
        className="px-3 py-2 rounded-sm hover:text-brand-teal transition-colors"
      >
        Services
      </Link>

      {/* 6. About Us */}
      <Link
        href="/about"
        className="px-3 py-2 rounded-sm hover:text-brand-teal transition-colors"
      >
        About Us
      </Link>

      {/* 7. Contact Us */}
      <Link
        href="/contact-us"
        className="px-3 py-2 rounded-sm hover:text-brand-teal transition-colors"
      >
        Contact Us
      </Link>
    </nav>
  );
}
