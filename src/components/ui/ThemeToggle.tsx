"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <button
        type="button"
        className={`w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-ivory/60 ${className}`}
        aria-label="Theme toggle loading"
        disabled
      >
        <span className="w-4 h-4 rounded-full border border-gold-400/40 border-t-transparent animate-spin" />
      </button>
    );
  }

  const isDark = theme === "dark";
  const label = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`group relative flex items-center justify-center gap-2 rounded-full p-2.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
        isDark
          ? "bg-surface-card hover:bg-gold-400/10 border border-surface-border hover:border-gold-400/50 text-gold-300 hover:text-gold-200 shadow-md"
          : "bg-surface-elevated hover:bg-gold-400/15 border border-surface-border hover:border-gold-500/50 text-gold-600 hover:text-gold-700 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs uppercase tracking-wider font-semibold">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
