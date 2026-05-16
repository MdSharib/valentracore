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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dim: "var(--primary-dim)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          highlight: "var(--surface-highlight)",
          border: "var(--surface-border)",
        },
        accent: {
          DEFAULT: "var(--accent-teal)",
          glow: "var(--accent-glow)",
          blue: "var(--accent-blue)",
          teal: "var(--accent-teal)",
          cyan: "var(--accent-cyan)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "satin-gradient": "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)",
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'slow-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.05)',
        'glow-intense': '0 0 40px rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
