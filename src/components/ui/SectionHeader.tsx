import React from "react";

interface SectionHeaderProps {
  tag?: string;
  number?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export default function SectionHeader({
  tag,
  number,
  title,
  subtitle,
  align = "left",
  maxWidth = "720px",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? maxWidth : "100%",
        margin: isCenter ? "0 auto 3.5rem" : "0 0 3rem",
      }}
    >
      {/* Tag / Number badge */}
      {(tag || number) && (
        <div style={{ marginBottom: "1rem", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
          {number && (
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                color: "var(--gold-400)",
                fontStyle: "italic",
              }}
            >
              {number}
            </span>
          )}
          {tag && <span className="editorial-tag">{tag}</span>}
        </div>
      )}

      {/* Main Title */}
      <h2
        className="font-serif"
        style={{
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "var(--ivory-50)",
          marginBottom: subtitle ? "1.2rem" : "0",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            color: "var(--text-muted-dark)",
            lineHeight: 1.7,
            maxWidth: maxWidth,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
