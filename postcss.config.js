export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    
    // Production optimizations
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          },
          reduceIdents: true,
          zindex: false,
          autoprefixer: false
        }]
      }
    })
  }
};