import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#008390",
          "teal-hover": "#006D77",
          "teal-tint": "#E6F4F5",
        },
        action: {
          amber: "#F59E0B",
          "amber-hover": "#D97706",
        },
        slate: {
          canvas: "#0B1118",
          surface: "#111827",
          panel: "#1E293B",
        },
        surface: {
          light: "#F8FAFC",
          card: "#FFFFFF",
        },
        border: {
          light: "#E2E8F0",
          dark: "#1E293B",
          teal: "#008390",
        },
        ink: {
          primary: "#0F172A",
          muted: "#64748B",
          "inverse-primary": "#F8FAFC",
          "inverse-muted": "#94A3B8",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "-apple-system", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "6px",
      },
      maxWidth: {
        container: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
