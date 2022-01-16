const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: {
    enabled: true,
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  },
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "3/20": "15%",
      },
    },
    colors: {
      primary: colors.red,
      secondary: colors.gray,
      grey: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      heading: `"Balsamiq Sans", sans, sans-serif`,
      round: `"M PLUS Rounded 1c", sans, sans-serif`,
      sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      monospace: `"Courier Prime", monospace`,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
