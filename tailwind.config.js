/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      screens: {
        '3-col': '1681px',
        '2-col': '1120px',
        '1-col': '560px',
      }
    },
  },
  plugins: [],
}
