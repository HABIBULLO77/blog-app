import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        base: "62.5%", // Root font-size (10px equivalent)
      },
    },
  },
  plugins: [],
} satisfies Config;
