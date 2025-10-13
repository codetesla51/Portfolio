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
  acc: '#3b82f6',      // clean blue
  text: '#f8fafc',     // pure light
  sec: '#1e293b',      // slate dark
  card: 'rgba(51, 65, 85, 0.7)' // slate transparent
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};