/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2.25rem'
    },
    extend: {
      screens: {
        'xsm': "530px"
      },
      colors: {
        'primary': '#F68B1E',
        "secondary": "#181818"
      },
      animation: {
        "round-left": 'round-left-mv 300ms linear both',
        "round-right": 'round-right-mv 300ms linear both',
        "bounce-left-right": 'bounce-lr 1s linear infinite'
      },
      keyframes: {
        'bounce-lr': {
          '0%, 100%': {
            'transform': 'translateX(-25%)'
          },
          '50%': {
            'transform': 'translateX(0)'
          }
        },
        'round-left-mv': {
          '50%': {
            'left': 0,
            'width': '20px',
            'height': '20px',
            'border-radius': '50%'
          },
          '100%': {
            'left': 0,
            'width': '51%',
            'height': '100%',
            'border-radius': '0px'
          }
        },
        'round-right-mv': {
          '50%': {
            'right': 0,
            'width': '20px',
            'height': '20px',
            'border-radius': '50%'
          },
          '100%': {
            'right': 0,
            'width': '50%',
            'height': '100%',
            'border-radius': '0px'
          }
        }
      }
    },
  },
  plugins: [],
}

