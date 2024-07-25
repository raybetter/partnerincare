/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        "ak-green": "#2f8b19",
        "ak-orange": "#ef834d",
        "ak-vlight-orange": "#ffe0c4",
        "ak-light-orange": "#fdd7c3",
        "ak-dark-orange": "#b45f06",
      }
    },
    fontFamily: {
      Convergence: ["Convergence"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}


