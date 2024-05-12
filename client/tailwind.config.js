/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        rounds: '.5rem',
        tiny: '0.6rem',
        answer: '0.7rem',
        small: '0.8rem',
        smallest: '.9rem',
        thead: '1rem',
        medium: '1.1rem',
        custom: '1.2rem',
        bigger: '1.2rem',
        username: '1.2rem',
        odds: '1.4rem',
        menuItem: '1.2rem',
        large: '2rem',
        extraLarge: '2.3rem',
      },
    },
  },
  plugins: [],
};
