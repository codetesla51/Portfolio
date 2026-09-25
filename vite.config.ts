import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Vite binds `localhost`, which Node 17+ resolves to ::1 first — so the dev
// server ends up listening on IPv6 loopback only and a browser that resolves
// localhost to 127.0.0.1 gets a dead connection. Binding `::` with dual-stack
// on serves both, so http://localhost:5173 works either way.
const devNoStore = {
	name: 'dev-no-store',
	apply: 'serve',
	configureServer(server) {
		server.middlewares.use((_req, res, next) => {
			// Without this, a browser can hold on to an error page (or stale HTML)
			// from an earlier broken reload and keep replaying it while curl sees
			// a perfectly good 200. Dev responses should never be cached.
			res.setHeader('Cache-Control', 'no-store');
			next();
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), devNoStore],
	server: {
		host: '::'
	}
});
