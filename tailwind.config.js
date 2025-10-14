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
  acc: '#ffffff',      // pure white accent (for hover/focus)
  text: '#e5e5e5',     // soft light gray
  sec: '#0a0a0a',      // deep black
  card: 'rgba(30, 30, 30, 0.6)' // subtle dark gray overlay
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};