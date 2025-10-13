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
  acc: '#818cf8',      // gentle indigo (very soft)
  text: '#cbd5e1',     // muted light gray
  sec: '#0f172a',      // deep navy
  card: 'rgba(30, 41, 59, 0.5)' // very subtle overlay
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};