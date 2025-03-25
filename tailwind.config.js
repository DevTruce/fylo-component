/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
        gradientOne: "hsl(6, 100%, 80%) ",
        gradientTwo: "hsl(335, 100%, 65%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        bgMobile: "url('../images/bg-mobile.png')",
        bgDesktop: "url('../images/bg-desktop.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
