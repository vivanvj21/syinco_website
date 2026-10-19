"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up";
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
}

/**
 * ScrollReveal — Ultra-smooth, hardware-accelerated scroll-triggered animation container.
 * Automatically respects `prefers-reduced-motion` and provides seamless SSR fallback.
 */
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 650,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }
    }

    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  const getInitialTransform = () => {
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 28px, 0)";
      case "fade-down":
        return "translate3d(0, -28px, 0)";
      case "fade-left":
        return "translate3d(-28px, 0, 0)";
      case "fade-right":
        return "translate3d(28px, 0, 0)";
      case "scale-up":
        return "scale3d(0.96, 0.96, 1) translate3d(0, 14px, 0)";
      case "fade-in":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(className)}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale3d(1, 1, 1)" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
