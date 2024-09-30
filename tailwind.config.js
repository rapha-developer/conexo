/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scaleGroup-medium': 'scaleGroup 1.6s ease-in-out forwards',
        'scaleUp-medium': 'scaleUp 1.6s ease-in-out forwards',
        'scaleDown-medium': 'scaleDown 1s ease-in-out forwards',
        'shake-medium': 'shake 1s linear forwards',
        'shake-fast': 'shake .5s linear infinite'
      },
      colors: {
        darkBorder: {
          gray: 'hsl(var(--clr-darkBorder-gray) / <alpha-value> )',
          red: 'hsl(var(--clr-darkBorder-red) / <alpha-value> )',
          text: 'hsl(var(--clr-darkBorder-text) / <alpha-value> )',
        },
        dark: {
          100: 'hsl(var(--clr-dark-100) / <alpha-value> )',
          200: 'hsl(var(--clr-dark-200) / <alpha-value> )',
          300: 'hsl(var(--clr-dark-300) / <alpha-value> )',
          400: 'hsl(var(--clr-dark-400) / <alpha-value> )',
          green: 'hsl(var(--clr-dark-green) / <alpha-value> )',
          yellow: 'hsl(var(--clr-dark-yellow) / <alpha-value> )',
        },
        darkGroup: {
          100: 'hsl(var(--clr-darkGroup-100) / <alpha-value> )',
          200: 'hsl(var(--clr-darkGroup-200) / <alpha-value> )',
          300: 'hsl(var(--clr-darkGroup-300) / <alpha-value> )',
          400: 'hsl(var(--clr-darkGroup-400) / <alpha-value> )',
        },
        darkText: {
          100: 'hsl(var(--clr-darkText-100) / <alpha-value> )',
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'mono', 'sans']
      },
      keyframes: {
        scaleUp: {
          '0%': {transform: 'scale(.87);'},
          '50%': {transform: 'scale(1.09);'},
          '100%': {transform: 'scale(1);'},
        },
        scaleDown: {
          '0%': {transform: 'scale(.87);'},
          '50%': {transform: 'scale(1.03);'},
          '100%': {transform: 'scale(1);'},
        },
        scaleGroup: {
          '0%': {transform: 'scale(.85);'},
          '50%': {transform: 'scale(1.1);'},
          '100%': {transform: 'scale(1);'},
        },
        shake: {
          '0%': {transform: 'rotate(0deg);'},
          '25%': {transform: 'rotate(5deg);'},
          '50%': {transform: 'rotate(0deg);'},
          '75%': {transform: 'rotate(-5deg);'},
          '100%': {transform: 'rotate(0deg);'}
        }
      }
    },
  },
  plugins: [],
}

