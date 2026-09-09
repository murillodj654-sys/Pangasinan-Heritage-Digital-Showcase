import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens (Atom: Color Tokens) — inspired by Pangasinan's coast & heritage
        ocean: {
          50: "#eef6fb",
          100: "#d6ebf5",
          300: "#84bfdd",
          500: "#1c6ea4", // primary
          700: "#124a70",
          900: "#0a2c44",
        },
        sand: {
          50: "#fdf8ee",
          100: "#f8ecd1",
          300: "#eecf8c",
          500: "#dba64a", // secondary / accent
          700: "#9c7327",
        },
        terracotta: {
          500: "#c15b3c", // call-to-action accent
          700: "#8f3e27",
        },
        ink: {
          900: "#1a2027",
          700: "#3a4350",
          500: "#6b7280",
          200: "#e5e7eb",
        },
      },
      fontFamily: {
        // Casual, friendly sans-serif pairing (replaces the previous serif heading font).
        heading: ["var(--font-heading)", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
