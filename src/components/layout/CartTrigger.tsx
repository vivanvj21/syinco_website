"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useRfqStore } from "@/hooks/useRfqStore";

export function CartTrigger() {
  const [mounted, setMounted] = useState(false);
  const { toggleDrawer, getTotalCount } = useRfqStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = mounted ? getTotalCount() : 0;

  return (
    <button
      type="button"
      onClick={toggleDrawer}
      aria-label={`Open RFQ Requisition Cart (${count} items)`}
      className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-border-light bg-slate-50 text-slate-800 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal-tint/20 transition-all cursor-pointer font-mono text-xs shadow-2xs"
    >
      <ShoppingCart className="w-4 h-4 text-brand-teal" />
      <span className="hidden sm:inline font-semibold">Cart</span>
      {count > 0 && (
        <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-brand-teal text-white font-mono text-[10px] font-bold leading-none animate-in zoom-in-50 duration-150">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
