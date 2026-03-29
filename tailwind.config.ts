import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"]
      },
      colors: {
        ink: "#171916",
        muted: "#60635f",
        line: "#d8dcd3",
        panel: "#f6f6f0"
      },
      boxShadow: {
        card: "0 20px 45px rgba(23, 25, 22, 0.04), 0 1px 0 rgba(23, 25, 22, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
