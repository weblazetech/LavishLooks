import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

/**
 * Kicker - Montserrat 600 tracked teal caps. 2-4 words.
 * Teal passes AA at any size on any surface, so small is fine.
 */
export function Kicker({ children, className, as: Tag = "p" }: KickerProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-semibold uppercase tracking-[0.18em] text-teal text-[0.8125rem] leading-[1.4]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
