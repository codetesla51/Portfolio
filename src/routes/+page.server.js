/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  try {
    const res = await fetch('https://portfolio-backend-x9in.vercel.app/projects', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      console.error(`Failed to fetch projects: ${res.status}`);
      return { projects: [], error: 'Failed to load projects' };
    }

    const data = await res.json();
    return { 
      projects: data.data || [],
      error: null
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { 
      projects: [],
      error: 'Failed to load projects'
    };
  }
}