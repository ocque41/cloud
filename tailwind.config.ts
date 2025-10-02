import type { Config } from "tailwindcss";

const spacingScale = {
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

const config: Config = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#171717",
          foreground: "#DEDDD9",
          muted: "#b4b2ac",
        },
      },
    },
    spacing: spacingScale,
  },
};

export default config;
