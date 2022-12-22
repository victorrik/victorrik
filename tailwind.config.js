const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
				'patitash': "url('https://firebasestorage.googleapis.com/v0/b/victorrik-1.appspot.com/o/src%2Fpatitash_512.jpg?alt=media')",
      },
      fontFamily: {
        sans: ["rubik", ...defaultTheme.fontFamily.sans],
        serif: ["rubik", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        iceberg: {
          50: "#f4f9fb",
          100: "#dbedf3",
          200: "#cae6ed",
          300: "#9bd2de",
          400: "#65bbcb",
          500: "#41a4b6",
          600: "#308599",
          700: "#286b7c",
          800: "#245a68",
          900: "#234c57",
        },
        "radical-red": {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#ffccd2",
          300: "#ffa2ae",
          400: "#fd6f83",
          500: "#f73859",
          600: "#e41a46",
          700: "#c10f3a",
          800: "#a11038",
          900: "#8a1136",
        },
        fiord: {
          50: "#f6f7f9",
          100: "#ebedf3",
          200: "#d3d8e4",
          300: "#adb6cc",
          400: "#808fb0",
          500: "#607197",
          600: "#4c5a7d",
          700: "#404b69",
          800: "#363f56",
          900: "#313749",
        },
        "pickled-bluewood": {
          50: "#f5f6fa",
          100: "#eaecf4",
          200: "#cfd6e8",
          300: "#a5b4d4",
          400: "#758cbb",
          500: "#546fa3",
          600: "#415688",
          700: "#35456f",
          800: "#2f3c5d",
          900: "#283149",
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
};
