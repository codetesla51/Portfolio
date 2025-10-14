// src/routes/[slug]/+page.js
import { withLoading } from '$lib/stores/loader'; // Remove stopLoading import

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;

  console.log(`Page load function called for slug: ${slug}`);

  try {
    const project = await withLoading(async () => {
      const res = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${slug}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch project: ${res.status}`);
      }

      const data = await res.json();
      return data;
    });

    return { project };
  } catch (error) {
    console.error('Failed to load project in page.js:', error);
    // stopLoading() not needed - withLoading() handles it
    return {
      project: null,
      error: error.message
    };
  }
}