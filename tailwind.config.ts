import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-soft": "var(--paper-soft)",
        linen: "var(--linen)",
        "linen-deep": "var(--linen-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-muted": "var(--ink-muted)",
        "ink-whisper": "var(--ink-whisper)",
        ocean: "var(--ocean)",
        "ocean-soft": "var(--ocean-soft)",
        brass: "var(--brass)",
        "brass-deep": "var(--brass-deep)",
        "brass-glow": "var(--brass-glow)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        success: "var(--success)",
        background: "var(--paper)",
        foreground: "var(--ink)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        editorial: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-mega": ["15rem", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-xl": ["11.25rem", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["8rem", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-md": ["6rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-sm": ["4.5rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "headline-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline-lg": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline-md": ["1.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        quote: ["2rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.65" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.55" }],
        meta: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "meta-xs": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        snap: "cubic-bezier(0.32, 0.72, 0, 1)",
        magnetic: "cubic-bezier(0.22, 1, 0.36, 1)",
        stamp: "cubic-bezier(0.7, 0, 0.84, 0)",
      },
      transitionDuration: {
        instant: "80ms",
        fast: "200ms",
        base: "400ms",
        deliberate: "600ms",
        slow: "900ms",
        cinematic: "1200ms",
      },
      maxWidth: {
        narrow: "720px",
        default: "1080px",
        wide: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "brass-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 var(--brass-glow)" },
          "50%": { opacity: "0.85", boxShadow: "0 0 0 6px transparent" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "brass-pulse": "brass-pulse 3s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;