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
  acc: '#60a5fa',      // soft blue (calm, not aggressive)
  text: '#e2e8f0',     // soft light gray (not harsh white)
  sec: '#0f172a',      // deep navy-black (softer than pure black)
  card: 'rgba(30, 41, 59, 0.6)' // subtle slate overlay
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};