/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

