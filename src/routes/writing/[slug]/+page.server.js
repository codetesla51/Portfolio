import { error } from '@sveltejs/kit';
import { getPosts, getPost } from '$lib/utils/posts.js';

export async function load({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }

  const modules = import.meta.glob('/src/posts/**/*.md', { eager: true });
  let content = '';
  
  for (const [path, module] of Object.entries(modules)) {
    const metadata = module.metadata;
    const filename = path.split('/').pop().replace('.md', '');
    const slug = metadata.slug || metadata.title?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '') || filename;
    
    if (slug === params.slug) {
      content = module.default?.render?.().html || '';
      break;
    }
  }

  return { post, content };
}
