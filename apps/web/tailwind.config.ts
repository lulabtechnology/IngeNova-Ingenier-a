import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./app/(site)/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#141A22",
        text: "#E6EAF0",
        muted: "#9AA3B2",
        primary: "#00E0A4",
        secondary: "#6A7DFF",
        border: "#1F2933"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
} satisfies Config;
