export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    
    // Production optimizations
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['advanced', {
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