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
        mono: ["var(--font-mono)"]
      },
      colors: {
        ink: "#111111",
        muted: "#5f5f5f",
        line: "#e7e5e4",
        panel: "#fafaf9"
      },
      boxShadow: {
        card: "0 10px 30px rgba(17, 17, 17, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
