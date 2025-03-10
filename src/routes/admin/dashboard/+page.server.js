export async function load({ fetch }) {
  console.log("Server-side load function executing");
  try {
    const response = await fetch('https://portfolio-backend-x9in.vercel.app/projects');

    if (!response.ok) {
      console.error(`Error fetching projects: ${response.status}`);
      return { projects: [] };
    }

    const data = await response.json();
    console.log("API Response data:", data);

    // Check the exact structure of the response
    if (data && typeof data === 'object') {
      // If data.projects exists and is an array, use it
      if (Array.isArray(data.projects)) {
        console.log(`Successfully loaded ${data.projects.length} projects`);
        return { projects: data.projects };
      }
      // If data itself is an array, use it
      else if (Array.isArray(data)) {
        console.log(`Successfully loaded ${data.length} projects`);
        return { projects: data };
      }
      // If there's a data property that's an array, use it
      else if (data.data && Array.isArray(data.data)) {
        console.log(`Successfully loaded ${data.data.length} projects`);
        return { projects: data.data };
      }
      // Otherwise log the structure and return an empty array
      else {
        console.warn("Unexpected data structure:", data);
        return { projects: [], rawData: data };
      }
    }

    return { projects: [], rawData: data };
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return { projects: [], error: error.message };
  }
}