"use client";

import * as React from "react";
import dynamic from "next/dynamic";

/* ============================================================
   HeroCanvas - the ONE WebGL canvas on the Home hero.
   - Dynamic import with ssr:false (R3F can't SSR)
   - IntersectionObserver pauses frameloop when offscreen
   - prefers-reduced-motion renders a static sand-gradient fallback (no canvas)
   - WebGL-unavailable renders the same static fallback
   - Particle count halved on mobile
   ============================================================ */

const LustrousStrandsCanvas = dynamic(
  () =>
    import("./lustrous-strands").then(
      (mod) => mod.LustrousStrandsCanvas
    ),
  {
    ssr: false,
    loading: () => null, // we render the static fallback beneath; canvas overlays when ready
  }
);

export type HeroCanvasProps = {
  className?: string;
};

export function HeroCanvas({ className }: HeroCanvasProps) {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [webglOk, setWebglOk] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Reduced motion + mobile + WebGL support detection
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMq = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onMq);

    const mobile = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobile.matches);
    const onMobile = () => setIsMobile(mobile.matches);
    mobile.addEventListener("change", onMobile);

    // WebGL support check
    try {
      const test = document.createElement("canvas");
      const gl =
        test.getContext("webgl2") ||
        test.getContext("webgl") ||
        test.getContext("experimental-webgl");
      if (!gl) setWebglOk(false);
    } catch {
      setWebglOk(false);
    }

    return () => {
      mq.removeEventListener("change", onMq);
      mobile.removeEventListener("change", onMobile);
    };
  }, []);

  // Pause frameloop when offscreen via IntersectionObserver
  // We control this by toggling a `paused` flag - the Canvas mounts/unmounts
  // based on visibility to fully stop the GPU work.
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setVisible((prev) => {
            const next = e.isIntersecting;
            // Only update if changed to avoid re-renders
            return next === prev ? prev : next;
          });
        }
      },
      { threshold: 0 }
    );
    io.observe(el);
    setVisible(true); // assume visible until IO fires (progressive enhancement)
    return () => io.disconnect();
  }, []);

  const shouldRenderCanvas = !reducedMotion && webglOk;
  // Particle count: 1200 desktop, 600 mobile
  const particleCount = isMobile ? 600 : 1200;

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {/* Static fallback: always rendered beneath the canvas. If the canvas
          fails or is disabled, this is what the user sees. */}
      <StaticFallback />

      {shouldRenderCanvas && visible && (
        <div className="absolute inset-0">
          <LustrousStrandsCanvas particleCount={particleCount} />
        </div>
      )}
    </div>
  );
}

/** Static sand-gradient fallback. Renders when WebGL is unavailable
 *  or under reduced-motion. Identical content shape (panel + photo)
 *  is handled by the parent - this just provides the gradient base. */
function StaticFallback() {
  return (
    <div className="absolute inset-0 bg-sand-gradient" />
  );
}
