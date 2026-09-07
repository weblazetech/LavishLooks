import { cn } from "@/lib/utils";

/**
 * Peacock feather motif - gold line-art ornament.
 * Used only as: wordmark glyph, divider ornament, bridal band corner accent.
 * Max 48px. Stroke-only, 1.5px, no fill.
 *
 * A stylized peacock eye feather: an eye shape on a slender stem.
 */
export function FeatherMotif({
  className,
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      {/* Stem */}
      <path
        d="M24 44 C 24 36, 24 28, 24 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Eye - outer oval */}
      <ellipse
        cx="24"
        cy="14"
        rx="9"
        ry="11"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Eye - inner ring */}
      <ellipse
        cx="24"
        cy="14"
        rx="5"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Center pupil */}
      <circle
        cx="24"
        cy="14"
        r="2.2"
        fill="currentColor"
      />
      {/* Side barbs - subtle */}
      <path
        d="M24 30 L 19 28 M24 32 L 29 30 M24 34 L 19 33 M24 36 L 29 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
