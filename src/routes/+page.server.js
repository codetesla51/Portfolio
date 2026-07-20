import { getPosts } from '$lib/utils/posts.js';

const GITHUB_USER = 'codetesla51';

async function getCurrentlyBuilding(fetch) {
  const headers = {
    Accept: 'application/vnd.github+json'
  };

  try {
    const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`, { headers });
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      const recentEvent = events.find((event) => ['PushEvent', 'CreateEvent'].includes(event.type) && event.repo?.name);

      if (recentEvent?.repo?.name) {
        const fullName = recentEvent.repo.name;
        const name = fullName.split('/')[1] || fullName;
        return {
          name,
          url: `https://github.com/${fullName}`
        };
      }
    }
  } catch (error) {
    console.error('Error fetching GitHub public events:', error);
  }

  try {
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=1`, { headers });
    if (reposRes.ok) {
      const repos = await reposRes.json();
      const repo = repos[0];
      if (repo?.name && repo?.html_url) {
        return {
          name: repo.name,
          url: repo.html_url
        };
      }
    }
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
  }

  return null;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const currentlyBuilding = await getCurrentlyBuilding(fetch);
  const posts = await getPosts();

  try {
    const res = await fetch('https://portfolio-backend-rawhttp-codetesla517280-9dphthj2.leapcell.dev/api/projects', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      console.error(`Failed to fetch projects: ${res.status}`);
      return { projects: [], posts, error: 'Failed to load projects' };
    }

    const data = await res.json();
    return { 
      projects: data.data || [],
      posts,
      currentlyBuilding,
      error: null
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { 
      projects: [],
      posts,
      currentlyBuilding,
      error: 'Failed to load projects'
    };
  }
}
