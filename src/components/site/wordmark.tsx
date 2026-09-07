import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark - stacked lockup.
 * "KARTHIKEYA" tracked Montserrat caps above "Lavish Looks" in Cormorant Garamond.
 */
export function Wordmark({
  className,
  href = "/",
  onClick,
}: {
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Karthikeya Lavish Looks - home"
      className={cn(
        "group inline-flex flex-col leading-none text-ink no-underline",
        className
      )}
    >
      <span className="font-sans font-semibold uppercase tracking-[0.32em] text-[0.6875rem] text-ink/85 transition-colors group-hover:text-teal">
        KARTHIKEYA
      </span>
      <span className="font-display font-semibold text-[1.5rem] leading-[1.05] text-ink transition-colors group-hover:text-teal">
        Lavish Looks
      </span>
    </Link>
  );
}
