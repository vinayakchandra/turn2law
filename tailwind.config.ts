import type { Config } from "tailwindcss";

import tailwind_scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        text: "#000", // Custom text color
        primary: "#DF9C49",
        secondary: "#AE7739",
        tertiary: "#17726E",
        background: "#FFF",
        border: "#C2C2C2",
      },
      ringColor: {
        tertiary: "#17726E",
      },

    },
  },
  plugins: [],
} satisfies Config;
