import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      zIndex: { base: "0", navbar: "10" },
      height: {
        header: "var(--header-height)",
        "screen-without-header": "calc(100vh - var(--header-height))",
      },
      minHeight: {
        "screen-without-header": "calc(100vh - var(--header-height))",
      },
      inset: {
        header: "var(--header-height)",
      },
      padding: {
        header: "var(--header-height)",
      },
    },
  },
  plugins: [],
} satisfies Config;
