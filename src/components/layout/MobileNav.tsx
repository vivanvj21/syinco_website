"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight, ShoppingCart, Phone, Mail, MapPin } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { allCategories } from "@/data/products";
import { principals } from "@/data/principals";
import { useRfqStore } from "@/hooks/useRfqStore";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [productsExpanded, setProductsExpanded] = useState(false);
  const { getTotalCount, openDrawer } = useRfqStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = mounted ? getTotalCount() : 0;

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent
        aria-label="Mobile Navigation Menu"
        className="w-full max-w-xs p-5 bg-white text-slate-800 border-r border-slate-200 flex flex-col justify-between overflow-y-auto shadow-2xl"
      >
        <div className="space-y-5">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-sm bg-white p-0.5 shrink-0 flex items-center justify-center border border-slate-200 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="SYINCO Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-950">
                  SYINCO TECHNOLOGIES
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Precision Systems
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close mobile navigation"
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-sm cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links: 7 Simplified Links */}
          <nav className="space-y-1.5 text-sm sm:text-base font-sans">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={onClose}
              className="block py-2.5 px-3 rounded-sm text-slate-800 font-medium hover:bg-slate-50 hover:text-brand-teal transition-colors"
            >
              Home
            </Link>

            {/* 2. Industries Served */}
            <Link
              href="/industries"
              onClick={onClose}
              className="block py-2.5 px-3 rounded-sm text-slate-800 font-medium hover:bg-slate-50 hover:text-brand-teal transition-colors"
            >
              Industries Served
            </Link>

            {/* 3. Products (with accordion for disciplines & principals) */}
            <div className="border-y border-slate-200/80 py-1.5">
              <div className="flex items-center justify-between">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="flex-1 py-2 px-3 text-slate-800 font-medium hover:text-brand-teal transition-colors"
                >
                  Products
                </Link>
                <button
                  type="button"
                  onClick={() => setProductsExpanded(!productsExpanded)}
                  className="p-2 text-slate-500 hover:text-slate-900 cursor-pointer"
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
                <div className="pl-4 space-y-3.5 pt-2 pb-2">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                      Disciplines
                    </span>
                    <div className="space-y-1.5">
                      {allCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          onClick={onClose}
                          className="block text-xs sm:text-sm text-slate-600 hover:text-brand-teal py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                      Principals
                    </span>
                    <div className="space-y-1.5">
                      {principals.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products?vendor=${p.filterVendorId}`}
                          onClick={onClose}
                          className="block text-xs sm:text-sm text-slate-600 hover:text-brand-teal py-1"
                        >
                          {p.shortName} <span className="text-xs text-slate-400">({p.country})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/products"
                    onClick={onClose}
                    className="block font-mono text-xs sm:text-sm text-brand-teal font-bold pt-2 border-t border-slate-200"
                  >
                    → Explore Full Catalogue
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Services */}
            <Link
              href="/services"
              onClick={onClose}
              className="block py-2.5 px-3 rounded-sm text-slate-800 font-medium hover:bg-slate-50 hover:text-brand-teal transition-colors"
            >
              Services
            </Link>

            {/* 5. About Us */}
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2.5 px-3 rounded-sm text-slate-800 font-medium hover:bg-slate-50 hover:text-brand-teal transition-colors"
            >
              About Us
            </Link>

            {/* Requisition Cart Button */}
            <button
              type="button"
              onClick={() => {
                onClose();
                openDrawer();
              }}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-sm text-brand-teal font-medium hover:bg-slate-50 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                <ShoppingCart className="w-4 h-4 text-brand-teal" />
                <span>RFQ Cart</span>
              </div>
              {cartCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-brand-teal text-white font-mono text-xs font-bold">
                  {cartCount} {cartCount === 1 ? "unit" : "units"}
                </span>
              )}
            </button>

            {/* 6. Contact Us CTA Button */}
            <Link
              href="/contact-us"
              onClick={onClose}
              className="block py-2.5 px-3 rounded-md bg-action-amber hover:bg-action-amber-hover text-slate-950 font-bold text-center shadow-xs hover:shadow-sm transition-all mt-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom Contact & Verification Block */}
        <div className="pt-5 border-t border-slate-200 space-y-2.5 font-mono text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2 text-slate-500">
            <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
            <span>Hyderabad Depot, Telangana</span>
          </div>

          <a
            href="tel:+917382292929"
            className="flex items-center gap-2 text-slate-800 font-bold hover:text-brand-teal transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-teal shrink-0" />
            <span>+91 73822 92929</span>
          </a>

          <a
            href="mailto:info@syinco.in"
            className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-teal shrink-0" />
            <span>info@syinco.in</span>
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
