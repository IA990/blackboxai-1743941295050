/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}