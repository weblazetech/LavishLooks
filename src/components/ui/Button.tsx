import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const getPadding = () => {
    switch (size) {
      case "sm":
        return "0.55rem 1.1rem";
      case "lg":
        return "1rem 2.2rem";
      default:
        return "0.78rem 1.65rem";
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return "0.78rem";
      case "lg":
        return "0.95rem";
      default:
        return "0.85rem";
    }
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6rem",
    padding: getPadding(),
    fontSize: getFontSize(),
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    borderRadius: "var(--radius-full)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    textDecoration: "none",
    opacity: disabled ? 0.6 : 1,
    whiteSpace: "nowrap",
  };

  let variantStyle: React.CSSProperties = {};

  if (variant === "primary") {
    variantStyle = {
      background: "var(--gold-gradient)",
      color: "var(--teal-950)",
      border: "1px solid var(--gold-300)",
      boxShadow: "0 4px 18px rgba(197, 168, 112, 0.28)",
    };
  } else if (variant === "secondary") {
    variantStyle = {
      background: "rgba(18, 64, 64, 0.6)",
      color: "var(--ivory-50)",
      border: "1px solid var(--gold-border)",
      backdropFilter: "blur(8px)",
    };
  } else if (variant === "outline") {
    variantStyle = {
      background: "transparent",
      color: "var(--gold-300)",
      border: "1px solid var(--gold-400)",
    };
  } else if (variant === "ghost") {
    variantStyle = {
      background: "transparent",
      color: "var(--ivory-100)",
      border: "1px solid transparent",
    };
  }

  const combinedStyle = { ...baseStyle, ...variantStyle };

  if (href) {
    return (
      <Link href={href} style={combinedStyle} className={className}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyle}
      className={className}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
