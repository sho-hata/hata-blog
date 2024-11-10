import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hiragino Kaku Gothic ProN", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
