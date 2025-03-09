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
        acc: '#2ecc71',
        text: '#e0e0e0',
        sec: '#1e1e1e',
        card: 'rgba(30, 30, 30, 0.7)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};