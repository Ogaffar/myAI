/**
 * tailwind.config.ts — Zainab Olayiwola Portfolio
 *
 * IMPORTANT — Tailwind v4 note:
 * Theme extensions (colors, fonts, shadows, radii) are configured via CSS
 * @theme directives in app/globals.css, NOT here. This is a breaking change
 * from v3. The JS config below is valid for plugins, darkMode, and content
 * overrides only.
 *
 * The typed constants below mirror the @theme values in globals.css and can
 * be imported anywhere in the project for type-safe access to design tokens.
 */

import type { Config } from "tailwindcss";

// ── Design tokens (mirrors @theme in globals.css) ────────────────────────

export const colors = {
  background: "#fafaf7",
  surface: "#f2f0eb",
  border: "#e0ddd4",
  "text-primary": "#1c1917",
  "text-secondary": "#78716c",
  "text-muted": "#a8a29e",
  accent: "#0f4c3a",
  "accent-light": "#e8f0ee",
  "accent-hover": "#0a3629",
  gold: "#c9a84c",
  "gold-light": "#fbf5e6",
} as const;

export const fontFamily = {
  display: ["Cormorant Garamond", "serif"],
  body: ["DM Sans", "sans-serif"],
  mono: ["DM Mono", "monospace"],
} as const;

export const boxShadow = {
  soft: "0 2px 20px rgba(0,0,0,0.06)",
  medium: "0 4px 40px rgba(0,0,0,0.10)",
  accent: "0 4px 24px rgba(15,76,58,0.15)",
} as const;

export const borderRadius = {
  xl: "0.875rem",
  "2xl": "1.25rem",
} as const;

// ── Tailwind config (v4-compatible subset) ────────────────────────────────

const config: Config = {
  // Content paths are auto-detected in v4 but can be overridden here.
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  plugins: [],
};

export default config;
