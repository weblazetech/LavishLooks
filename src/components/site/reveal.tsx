"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: "div" | "section" | "article" | "li" | "header" | "span";
};

/**
 * Reveal - fade-up 20px, 600ms ease-out, with optional stagger via delay.
 * Respects prefers-reduced-motion: renders children statically (no transform/opacity animation).
 *
 * Progressive enhancement: the default DOM state is opacity:1 + translateY(0),
 * so if JS fails or motion hasn't mounted, content is fully visible.
 * We achieve this by NOT setting initial hidden styles in CSS - motion only
 * animates when it actually mounts on the client.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return <MotionTag className={cn(className)}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
