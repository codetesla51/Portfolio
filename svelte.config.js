import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      smartypants: {
        dashes: 'oldschool'
      }
    })
  ],

  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x'
    }),
    
    prerender: {
      crawl: true,
      entries: ['*']
    },

    alias: {
      '$posts': 'src/posts'
    }
  },

  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info']
        },
        mangle: true,
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['svelte']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['svelte']
    }
  }
};

export default config;
