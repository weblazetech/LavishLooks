import * as React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

/**
 * SiteShell - wraps every page with the floating Nav + Footer.
 * Uses min-h-[100dvh] flex flex-col so the footer sticks to the bottom
 * on short pages and is pushed down naturally on long pages.
 * Top padding accounts for the floating nav (top-3 + ~64px nav height).
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-ivory">
      {/* Skip to content for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-teal focus:text-ivory focus:px-4 focus:py-2 focus:rounded-pill"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1 pt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
