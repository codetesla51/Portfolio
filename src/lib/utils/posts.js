import { slugify } from './slug.js';
import { readingTime } from './reading-time.js';

export async function getPosts() {
  const modules = import.meta.glob('/src/posts/**/*.md', { eager: true });
  const posts = [];

  for (const [path, module] of Object.entries(modules)) {
    const { metadata } = module;
    const rawContent = module.default?.render?.().html || '';
    const plainText = rawContent.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    
    const filename = path.split('/').pop().replace('.md', '');
    const slug = metadata.slug || slugify(metadata.title || filename);

    posts.push({
      ...metadata,
      slug,
      readingTime: readingTime(plainText),
      path
    });
  }

  return posts
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) || null;
}
