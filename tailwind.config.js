/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#2E294E",
        100: "#eeecf5",
        200: "#cbc7e2",
        300: "#a8a2ce",
        400: "#857dbb",
        500: "#6358a7",
        600: "#4d4482",
        700: "#37315d",
        800: "#211d38",
        900: "#0b0a13",
      },
      secondary: {
        DEFAULT: "#1B998B",
        100: "#e7fbf9",
        200: "#b7f2ec",
        300: "#87eadf",
        400: "#56e1d2",
        500: "#26d9c5",
        600: "#1ea999",
        700: "#15786d",
        800: "#0d4842",
        900: "#041816",
      },
      success: "#C5D86D",
      error: "#D7263D",
      warning: "#F46036",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
