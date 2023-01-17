/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#C10206',
        // secondary: '#263238',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      xs: '360px',
      sm: '480px',
    },
  },
  plugins: [],
}
