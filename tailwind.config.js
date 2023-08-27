/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        primary: '#0ea5e9',
        secondary:'#64748B',
        dark: '#082f49',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

