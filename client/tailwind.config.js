/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        rounds: '.5rem',
        tiny: '0.6rem',
        answer: '0.7rem',
        smallest: '.9rem',
        thead: '1rem',
        custom: '1.1rem',
        bigger: '1.2rem',
        username: '1.2rem',
        odds: '1.4rem',
        menuItem: '1.3rem',
        menu: '2.4rem',
      },
    },
  },
  plugins: [],
};
