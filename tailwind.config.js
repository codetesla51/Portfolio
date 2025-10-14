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
  acc: '#a8a29e',      // warm gray (stone-like)
  text: '#e7e5e4',     // warm light gray
  sec: '#0c0a09',      // warm black
  card: 'rgba(28, 25, 23, 0.6)' // warm dark overlay
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};