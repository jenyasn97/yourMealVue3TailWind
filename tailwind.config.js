/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        background_header: "url('../assets/img/header/background_header.png')",
        background_header_1024:
          "url('../assets/img/header/background_header_1024.png')",
        background_header_768:
          "url('../assets/img/header/background_header_768.png')",
        background_header_mob:
          "url('../assets/img/header/background_header_mob.png')",
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
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
