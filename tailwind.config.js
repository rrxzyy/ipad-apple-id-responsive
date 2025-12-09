/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: {
          "gray": "#F4F4F6",
        },
        finish: {
          'space-black': "#202020",
          'space-gray': "#959595",
          'space-silver': "#C4C4C4",
          'space-white': "#E3E4E5",
          'space-green': "#D7E5E6",
          'space-pink': "#E3DEE9",
          'space-gold': "#E3DCD1",
          'space-navy': "#6480A3",
          'space-red': "#DE6274",
          'space-yellow': "#F0D95B",
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}

