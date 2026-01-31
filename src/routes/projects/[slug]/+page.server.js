/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;

  try {
    const res = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${slug}`);

    if (!res.ok) {
      return { project: null };
    }

    const project = await res.json();
    return { project };
  } catch (error) {
    console.error('Failed to load project:', error);
    return { project: null };
  }
}