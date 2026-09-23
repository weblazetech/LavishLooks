import React from "react";

interface DottedPriceRowProps {
  name: string;
  price?: string;
  description?: string;
  featured?: boolean;
}

export default function DottedPriceRow({
  name,
  price = "[PRICE]",
  description,
  featured = false,
}: DottedPriceRowProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1.1rem 0",
        borderBottom: "1px solid rgba(197, 168, 112, 0.14)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            color: featured ? "var(--gold-200)" : "var(--ivory-50)",
            fontWeight: 400,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {name}
          {featured && (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                border: "1px solid var(--gold-border)",
                padding: "0.15rem 0.45rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(197, 168, 112, 0.1)",
              }}
            >
              Signature
            </span>
          )}
        </span>

        {/* Dotted Gold Leader */}
        <span
          style={{
            flexGrow: 1,
            margin: "0 1rem",
            borderBottom: "1px dotted rgba(216, 189, 136, 0.4)",
            position: "relative",
            bottom: "4px",
          }}
          aria-hidden="true"
        />

        {/* Price Tag */}
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.92rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--gold-400)",
            padding: "0.22rem 0.75rem",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--gold-border)",
            background: "rgba(13, 49, 49, 0.5)",
            flexShrink: 0,
          }}
        >
          {price}
        </span>
      </div>

      {description && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            color: "var(--text-muted-dark)",
            marginTop: "0.35rem",
            maxWidth: "85%",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
