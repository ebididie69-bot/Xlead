/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0E1116", 800: "#161B22", 700: "#1E252E", 600: "#2A323D" },
        brass: { DEFAULT: "#C9973E", light: "#E0B968", dark: "#9C7530" },
        signal: { DEFAULT: "#38B6A6", light: "#5FD3C4", dim: "#1F6B62" },
        ash: { DEFAULT: "#8B93A1", light: "#C4C9D1" },
        danger: "#E5484D",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px -6px rgba(56, 182, 166, 0.35)",
      },
    },
  },
  plugins: [],
};
