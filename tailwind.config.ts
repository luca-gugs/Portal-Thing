import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // logo: "url('/logo.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
