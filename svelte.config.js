import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import shiki from 'shiki';

const highlighter = await shiki.createHighlighter({
  themes: ['github-dark'],
  langs: ['go', 'bash', 'javascript', 'typescript', 'python', 'rust', 'c', 'sql', 'json', 'yaml', 'markdown', 'html', 'css']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: {
        highlighter: (code, lang) => {
          const html = highlighter.codeToHtml(code, {
            lang: lang || 'text',
            theme: 'github-dark'
          });
          return `<div class="code-block relative group"><div class="code-block-header"><span class="code-lang">${lang || 'text'}</span><button class="copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block').querySelector('code').textContent).then(()=>{this.textContent='Copied!';setTimeout(()=>{this.textContent='Copy'},1500)})">Copy</button></div>{@html html}</div>`;
        }
      },
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
