import { slugify } from './slug.js';
import { readingTime } from './reading-time.js';
import { marked } from 'marked';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: false
});

export async function getPosts() {
  const modules = import.meta.glob('/src/posts/**/*.md', { eager: true });
  const posts = [];

  for (const [path, module] of Object.entries(modules)) {
    const { metadata } = module;
    // Get raw content from the module
    const rawContent = module.__raw || module.default?.toString() || '';
    const plainText = rawContent.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    
    const filename = path.split('/').pop().replace('.md', '');
    const slug = slugify(filename);

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

export function stripFrontmatter(content) {
  // Match --- at start, content, then ---
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (match) {
    return match[2];
  }
  return content;
}

export function renderMarkdown(content) {
  const body = stripFrontmatter(content);
  return marked(body);
}
