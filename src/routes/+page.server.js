import { withLoading } from '$lib/stores/loader';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  return {
    projects: await withLoading(async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/projects');

        if (!res.ok) {
          throw new Error(`Failed to fetch projects: ${res.status}`);
        }

        const data = await res.json();
        return data.data || [];
      } catch (error) {
        console.error(error);
        return [];
      }
    })
  };
}