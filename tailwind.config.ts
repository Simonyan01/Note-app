import type { Config } from "tailwindcss"

export default {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
