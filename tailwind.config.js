/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2.25rem'
    },
    extend: {
      colors: {
        'primary': '#F68B1E'
      },
    },
  },
  plugins: [],
}

