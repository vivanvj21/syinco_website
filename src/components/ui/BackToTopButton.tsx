"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * BackToTopButton — Floating, elegant jump-to-top button that fades in as user scrolls down.
 */
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-border-light text-slate-700 shadow-lg hover:bg-brand-teal hover:text-white hover:border-brand-teal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
