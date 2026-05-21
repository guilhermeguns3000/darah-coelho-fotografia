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
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e0c99a",
          dark: "#a07840",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          100: "#141414",
          200: "#1c1c1c",
          300: "#2a2a2a",
          400: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
