/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontSize: {
        tiny: '0.6rem',
        thead: '1rem',
        custom: '1.1rem',
        smallest: '.9rem',
        smaller: '1.7rem',
        odds: '1.4rem',
        bigger: '1.2rem',
        username: '1.65rem',
        rounds: '.5rem',
      },
    },
  },
  plugins: [],
};
