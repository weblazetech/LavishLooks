import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        surface: "var(--bg-surface)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-card": "var(--surface-card)",
        "surface-border": "var(--surface-border)",
        gold: {
          50: "#FBF8EE",
          100: "#F5EED5",
          200: "#ECDDAE",
          300: "#DFC67E",
          400: "var(--gold-primary)",
          500: "var(--gold-secondary)",
          600: "#A8831A",
          700: "#836314",
          800: "#5D450F",
          900: "#382909",
        },
        champagne: {
          light: "#F5EFE0",
          DEFAULT: "#E8D8B8",
          rich: "var(--gold-primary)",
          dark: "var(--gold-dark)",
        },
        ivory: {
          DEFAULT: "var(--text-primary)",
          muted: "var(--text-secondary)",
          subtle: "var(--text-muted)",
        },
        tealAccent: {
          DEFAULT: "var(--teal-accent)",
          glow: "var(--teal-glow)",
          dark: "#05564D",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "var(--font-cormorant)", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "var(--font-sans)", "Inter", "sans-serif"],
      },

      letterSpacing: {
        widestLuxe: "0.25em",
        brand: "0.2em",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sheen: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        sheen: "sheen 8s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;

