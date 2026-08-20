import { getPosts } from '$lib/utils/posts.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = await getPosts();
	return { posts };
}
