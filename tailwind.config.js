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
  acc: '#f97316',      // bold orange (high energy)
  text: '#f1f5f9',     // crisp white-gray
  sec: '#18181b',      // pure dark
  card: 'rgba(39, 39, 42, 0.9)' // zinc dark
}
    }
  },
  plugins: [require('@tailwindcss/typography')]
};