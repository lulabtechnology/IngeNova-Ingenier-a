import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./app/(site)/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0D12",
        surface: "#0F141A",
        text: "#EAF2FF",
        muted: "#9BA7B6",
        primary: "#00F2A9",   // verde-neón
        secondary: "#5B8CFF", // azul eléctrico
        border: "#1A2330"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 12px 30px rgba(0,0,0,0.35)",
        glow: "0 0 0 2px rgba(0,242,169,0.25), 0 8px 24px rgba(0,242,169,0.15)"
      },
      backgroundImage: {
        "mesh-accent":
          "radial-gradient(600px 400px at 80% 20%, rgba(0,242,169,0.18), transparent 60%), radial-gradient(500px 320px at 15% 85%, rgba(91,140,255,0.18), transparent 60%)",
        "grid-dots":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)"
      }
    }
  },
  plugins: []
} satisfies Config;
