/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      no: "0px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      "2md": "900px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1320px",
      "2xl": "1440px",
      "3xl": "1780px",
      "4xl": "2160px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
