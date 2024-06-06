/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        background_header:
          "url('./src/assets/img/header/background_header.png')",
      },
      height: {
        466: "466px",
        326: "326px",
      },
      width: {
        326: "326px",
      },
      spacing: {
        300: "300px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        orange: "#FFAB08",
        redOrange: "#FF7020",
        black: "#000000",
        gray: "#F9F9F9",
        graySecond: "#F2F2F3",
        red: "#F86310",
      },
    },
  },
  plugins: [],
};
