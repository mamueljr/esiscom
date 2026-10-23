/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './constants.tsx',
    './components/**/*.{ts,tsx}',
    './services/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dbeeff',
          200: '#bfe1ff',
          300: '#8ecbff',
          400: '#2e9bff',
          500: '#0a84e8',
          600: '#006fca',
          700: '#005aa6',
          800: '#064a85',
          900: '#0b3e6b',
          950: '#072a4a',
        },
        ink: {
          DEFAULT: '#070b14',
          soft: '#0c1322',
          line: 'rgba(255,255,255,0.10)',
        },
        paper: {
          DEFAULT: '#f4f7fb',
          soft: '#e9eff6',
        },
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'wa-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.35)', opacity: '0.28' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'wa-pulse': 'wa-pulse 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
