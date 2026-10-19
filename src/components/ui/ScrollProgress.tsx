"use client";

import React, { useEffect, useState } from "react";

/**
 * ScrollProgress — Smooth, high-precision reading/scroll progress indicator at the top of the viewport.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = window.scrollY || document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (windowHeight > 0) {
            const scrollPercent = (totalScroll / windowHeight) * 100;
            setProgress(Math.min(100, Math.max(0, scrollPercent)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-brand-teal via-brand-teal to-action-amber transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(0,131,144,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
