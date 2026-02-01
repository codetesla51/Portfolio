/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;

  try {
    // First try the direct slug endpoint
    const res = await fetch(`https://portfolio-backend-rawhttp-codetesla517280-9dphthj2.leapcell.dev/api/projects/${slug}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    // Check if response is JSON
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json') && res.ok) {
      const response = await res.json();
      const project = response.data || response.project || response;
      if (project && project.name) {
        return { project };
      }
    }
    
    // Fallback: fetch all projects and find by slug
    const allRes = await fetch('https://portfolio-backend-x9in.vercel.app/projects', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!allRes.ok) {
      return { project: null };
    }
    
    const allData = await allRes.json();
    const projects = allData.data || allData.projects || allData;
    
    if (Array.isArray(projects)) {
      const project = projects.find(p => p.slug === slug);
      return { project: project || null };
    }
    
    return { project: null };
  } catch (error) {
    console.error('Failed to load project:', error);
    return { project: null };
  }
}