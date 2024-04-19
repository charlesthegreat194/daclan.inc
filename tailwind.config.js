/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFFAF0',
        'custom-black': '#0D09007',
      },
      fontFamily: {

        'font-jakarta': '"Plus Jakarta Sans", sans-serif',
      }
    },
  },
  plugins: [],
}

