/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const { slug } = params;

	try {
		// Try direct slug endpoint on canonical backend
		const res = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${slug}`, {
			headers: {
				Accept: 'application/json'
			}
		});

		const contentType = res.headers.get('content-type');
		if (contentType?.includes('application/json') && res.ok) {
			const response = await res.json();
			const project = response.data || response.project || response;
			if (project?.name) {
				return { project };
			}
		}

		// Fallback: fetch all and find by slug (same backend)
		const allRes = await fetch('https://portfolio-backend-x9in.vercel.app/projects', {
			headers: {
				Accept: 'application/json'
			}
		});
		if (!allRes.ok) {
			return { project: null };
		}

		const allData = await allRes.json();
		const projects = allData.data || allData.projects || allData;

		if (Array.isArray(projects)) {
			const project = projects.find((p) => p.slug === slug);
			return { project: project || null };
		}

		return { project: null };
	} catch (error) {
		console.error('Failed to load project:', error);
		return { project: null };
	}
}
