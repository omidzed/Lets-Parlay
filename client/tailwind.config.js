/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700', // Assuming you want to keep the same gold
          DEFAULT: '#FFD700',
          dark: '#FCC201',
        },
        azure: '#007FFF', // Azure color
      },
      backgroundColor: () => ({
        'gold-to-azure-gradient': `linear-gradient(to right, rgba(255, 215, 0, 0.75), rgba(0, 127, 255, 0.75))`, // Adjust opacity as needed
      }),
      fontSize: {
        tiny: '0.5rem',
        custom: '1.1rem',
        smallest: '.9rem',
        smaller: '1.7rem',
        odds: '1.3rem',
        bigger: '1.2rem',
        username: '1.65rem',
      },

      screens: {
        xs: '375px',
        // => @media (min-width: 375px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
