import { getPosts } from '$lib/utils/posts.js';

export async function load() {
  const posts = await getPosts();
  return { posts };
}
