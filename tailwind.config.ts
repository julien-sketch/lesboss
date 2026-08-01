import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1c1c",
        paper: "#fcf9f8",
        punch: "#fdc003",
        graphite: "#303030",
        line: "#cfc4c5",
        cloud: "#f0eded",
        muted: "#4c4546",
      },
      boxShadow: {
        boss: "0 10px 28px rgba(0, 0, 0, 0.08)",
        punch: "0 8px 0 rgba(253, 192, 3, 0.28)",
      },
      borderRadius: {
        boss: "0.75rem",
      },
    },
  },
  plugins: [forms],
};

export default config;
