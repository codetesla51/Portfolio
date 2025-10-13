/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ice: ['Iceland', 'sans-serif'],
        mono: ["VT323", 'serif']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      },
      colors: {
        acc: '#1abc9c',      // bright teal-green
        text: '#f0f0f0',     // slightly lighter text
        sec: '#222222',      // slightly lighter dark background
        card: 'rgba(40, 40, 40, 0.75)' // slightly more opaque card
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};