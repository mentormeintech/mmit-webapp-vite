/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#F89878",
        },
        secondary: {
          200: "#F1F9FF",
          500: "#0F88D9",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.jpg')",
      },
      screens: {
        'xs': '395px',
        'smd': '500px',
        'mdl':"900px",
        ...defaultTheme.screens,
      }
    },
  },
  extend: {},
  plugins: [],
}

