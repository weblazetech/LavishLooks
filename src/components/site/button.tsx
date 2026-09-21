import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-semibold tracking-[0.02em] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

const variants: Record<Variant, string> = {
  // Filled teal with ivory label
  primary:
    "bg-teal text-ivory hover:bg-teal-deep hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_8px_24px_rgba(34,48,45,0.08)] hover:shadow-[0_14px_30px_rgba(34,48,45,0.12)]",
  // Porcelain ghost with ink label
  ghost:
    "bg-porcelain text-ink border border-hairline hover:border-teal/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_8px_24px_rgba(34,48,45,0.05)] hover:shadow-[0_14px_30px_rgba(34,48,45,0.10)]",
};

const sizes: Record<Size, string> = {
  md: "px-[26px] py-[12px] text-[0.95rem]",
  lg: "px-[30px] py-[14px] text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AsLink = CommonProps & {
  as: "link";
  href: string;
};

type AsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = AsButton | AsLink | AsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  if (props.as === "link") {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }
  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }
  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
