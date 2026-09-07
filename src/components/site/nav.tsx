"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Wordmark } from "./wordmark";
import { Button } from "./button";
import { FeatherMotif } from "./feather-motif";
import { navLinks } from "@/data/salon";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating porcelain pill - detached from top */}
      <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4">
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-[1160px] items-center justify-between gap-4",
            "rounded-pill bg-porcelain/95 backdrop-blur-md",
            "border border-hairline/60 shadow-[0_8px_24px_rgba(34,48,45,0.08)]",
            "px-4 sm:px-5 py-2.5"
          )}
        >
          {/* Wordmark + feather glyph */}
          <div className="flex items-center gap-2.5">
            <FeatherMotif size={22} className="hidden sm:block" />
            <Wordmark />
          </div>

          {/* Center links - desktop only (>= 820px) */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-pill font-sans text-[0.875rem] font-medium transition-colors",
                      active
                        ? "text-teal bg-sand/70"
                        : "text-ink hover:text-teal hover:bg-sand/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-2">
            <Button as="link" href="/contact" size="md" className="hidden sm:inline-flex">
              Book an Appointment
            </Button>
            {/* Hamburger - below 1024px (lg breakpoint ~ matches 820px+ with CTA) */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className={cn(
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-pill",
                "border border-hairline bg-porcelain text-ink",
                "hover:border-teal/40 transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              )}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen sand overlay menu - mobile / tablet below 820px */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-sand-gradient"
          >
            <div className="flex h-full flex-col px-6 pt-24 pb-10">
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-card bg-porcelain border border-hairline/60",
                          "px-6 py-5 font-display text-[2rem] font-semibold text-ink",
                          "hover:text-teal transition-colors"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 + navLinks.length * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6"
              >
                <Button as="link" href="/contact" size="lg" className="w-full">
                  Book an Appointment
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
