/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#e9f1ed',
          100: '#cbded5',
          200: '#a2c2b5',
          300: '#74a394',
          400: '#4c8875',
          500: '#286957',
          600: '#104836',
          700: '#083f39',
          800: '#043b37',
          850: '#033834',
          900: '#023936',
          950: '#012a28',
        },
        gold: {
          50: '#fff8e9',
          100: '#f8e8c4',
          200: '#e9ca8d',
          300: '#d9a957',
          400: '#c9953b',
          500: '#bf801f',
          600: '#a96d18',
          700: '#805115',
          800: '#5c3b14',
          900: '#3d2810',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ee',
          200: '#f9f0dc',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drawLine: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
