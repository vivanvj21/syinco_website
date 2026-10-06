"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { allCategories } from "@/data/products";
import { principals } from "@/data/principals";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [productsExpanded, setProductsExpanded] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent
        aria-label="Mobile Navigation Menu"
        className="w-full max-w-xs p-5 bg-slate-canvas text-white border-r border-border-dark flex flex-col justify-between overflow-y-auto"
      >
        <div className="space-y-5">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border-dark">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xs bg-white p-0.5 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SYINCO Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs tracking-tight text-white">
                  SYINCO TECHNOLOGIES
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  Precision Systems
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close mobile navigation"
              className="p-1 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links: 7 Simplified Links */}
          <nav className="space-y-1 text-sm font-sans">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={onClose}
              className="block py-2.5 px-2 rounded-xs text-white font-medium hover:bg-slate-surface hover:text-brand-teal transition-colors"
            >
              Home
            </Link>

            {/* 2. Industries Served */}
            <Link
              href="/industries"
              onClick={onClose}
              className="block py-2.5 px-2 rounded-xs text-white font-medium hover:bg-slate-surface hover:text-brand-teal transition-colors"
            >
              Industries Served
            </Link>

            {/* 3. Products (with accordion for disciplines & principals) */}
            <div className="border-y border-border-dark/60 py-1">
              <div className="flex items-center justify-between">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="flex-1 py-2 px-2 text-white font-medium hover:text-brand-teal transition-colors"
                >
                  Products
                </Link>
                <button
                  type="button"
                  onClick={() => setProductsExpanded(!productsExpanded)}
                  className="p-2 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Toggle products disciplines"
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      productsExpanded ? "rotate-90 text-brand-teal" : ""
                    }`}
                  />
                </button>
              </div>

              {productsExpanded && (
                <div className="pl-4 space-y-3 pt-2 pb-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Disciplines
                    </span>
                    <div className="space-y-1">
                      {allCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          onClick={onClose}
                          className="block text-xs text-slate-300 hover:text-brand-teal py-0.5"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border-dark/40">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Principals
                    </span>
                    <div className="space-y-1">
                      {principals.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products?vendor=${p.filterVendorId}`}
                          onClick={onClose}
                          className="block text-xs text-slate-300 hover:text-brand-teal py-0.5"
                        >
                          {p.shortName} <span className="text-[10px] text-slate-500">({p.country})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/products"
                    onClick={onClose}
                    className="block font-mono text-[11px] text-brand-teal font-bold pt-2 border-t border-border-dark/40"
                  >
                    → Explore Full Catalogue
                  </Link>
                </div>
              )}
            </div>


            {/* 5. Services */}
            <Link
              href="/services"
              onClick={onClose}
              className="block py-2.5 px-2 rounded-xs text-white font-medium hover:bg-slate-surface hover:text-brand-teal transition-colors"
            >
              Services
            </Link>

            {/* 6. About Us */}
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2.5 px-2 rounded-xs text-white font-medium hover:bg-slate-surface hover:text-brand-teal transition-colors"
            >
              About Us
            </Link>

            {/* 7. Contact Us */}
            <Link
              href="/contact-us"
              onClick={onClose}
              className="block py-2.5 px-2 rounded-xs text-white font-medium hover:bg-slate-surface hover:text-brand-teal transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom Contact & Verification Block */}
        <div className="pt-5 border-t border-border-dark/80 space-y-2.5 font-mono text-[11px] text-slate-300">
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>Hyderabad Depot, Telangana</span>
          </div>

          <a
            href="tel:+917382292929"
            className="flex items-center gap-2 text-white font-bold hover:text-brand-teal transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>+91 73822 92929</span>
          </a>

          <a
            href="mailto:info@syinco.in"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>info@syinco.in</span>
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
