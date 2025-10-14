/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*.{svelte,js,ts}',
  ],
  
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
        acc: '#ffffff',     
        text: '#e5e5e5',     
        sec: '#0a0a0a',      
        card: 'rgba(30, 30, 30, 0.6)' 
      }
    }
  },
  
  plugins: [
    require('@tailwindcss/typography')
  ],

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Remove unused CSS in production
    safelist: [],
    
    // Enable all optimizations
    experimental: {
      optimizeUniversalDefaults: true
    }
  })
};