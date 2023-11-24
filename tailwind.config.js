/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#2E294E",
        100: "#666086",
        200: "#56506E",
        300: "#474160",
        400: "#2E294E",
        500: "#24213F",
        600: "#1C1932",
        700: "#141125",
        800: "#0D0B1B",
        900: "#070512",
      },

      secondary: {
        DEFAULT: "#1B998B",
        100: "#76E8DA",
        200: "#5BDAC4",
        300: "#3FCBB0",
        400: "#1B998B",
        500: "#128271",
        600: "#0F7258",
        700: "#0A5B45",
        800: "#084831",
        900: "#042E23",
      },

      error: {
        light: "#EC6479",
        DEFAULT: "#D7263D",
        dark: "#911628",
      },

      success: {
        light: "#E4F2AF",
        DEFAULT: "#C5D86D",
        dark: "#A5B440",
      },

      warning: {
        DEFAULT: "#F46036",
      },

      white: {
        light: "#F5F5F5",
        DEFAULT: "#ffffff",
        gray: "#E0E0E0",
      },
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
