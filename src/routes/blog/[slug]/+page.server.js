import { error } from '@sveltejs/kit';
import { getPosts, getPost, renderMarkdown } from '$lib/utils/posts.js';

export async function load({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }

  // Get raw markdown content using ?raw import
  const modules = import.meta.glob('/src/posts/**/*.md', { query: '?raw', eager: true });
  let rawContent = '';
  
  for (const [path, module] of Object.entries(modules)) {
    // Extract slug from filename (same logic as posts.js)
    const filename = path.split('/').pop().replace('.md', '');
    const pathSlug = filename.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
    
    if (pathSlug === params.slug) {
      rawContent = module.default || '';
      break;
    }
  }
  
  // Render markdown to HTML
  const content = rawContent ? renderMarkdown(rawContent) : '';

  return { post, content };
}
