// src/routes/[slug]/+page.js
import { withLoading, stopLoading } from '$lib/stores/loader';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;

  console.log(`Page load function called for slug: ${slug}`);

  try {
    const project = await withLoading(async () => {
      try {
        const res = await fetch(`https://uthmangobackend.leapcell.app/projects/${slug}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch project: ${res.status}`);
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error(`Error in fetch operation: ${error.message}`);
        throw error;
      }
    });

    return { project };
  } catch (error) {
    console.error('Failed to load project in page.js:', error);
    stopLoading();
    return {
      project: null,
      error: error.message
    };
  }
}