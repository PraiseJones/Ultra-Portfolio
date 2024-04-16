/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        ublue: "#01203f",
        uorange: "#ff1700",
        ulblue: "#0344dc",
        uwhite: "#ffffff",
      },
    },
  },
  plugins: [],
}