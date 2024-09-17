/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(75px, 1fr))',
      }
    },
  },
  plugins: [],
}