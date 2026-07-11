import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cares: {
          navy: "#0b1f3a",
          teal: "#1f4f8a",
          blue: "#3d6fb5",
          soft: "#e8eef7",
          gold: "#c4a35a",
          cream: "#f4f7fb",
          slate: "#4a5568",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        glass: "0 10px 40px rgba(11, 31, 58, 0.08)",
        lift: "0 18px 50px rgba(11, 31, 58, 0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(61,111,181,0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(196,163,90,0.15), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
