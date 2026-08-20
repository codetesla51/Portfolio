<script>
	import { onMount } from 'svelte';

	/** @type {HTMLDivElement | undefined} */
	let container;
	/** @type {HTMLCanvasElement | undefined} */
	let canvas;
	let status = 'loading';

	onMount(() => {
		if (typeof window === 'undefined') return;

		let cleanup = () => {};
		let cancelled = false;

		(async () => {
			const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			const reduceMotion = prefersReduced;

			// Dynamic imports — keep three out of SSR
			const THREE = await import('three');
			const { CubeView } = await import('$lib/rubik/CubeView');
			const { createScene, createCamera } = await import('$lib/rubik/scene');
			const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
			const { easeInOutQuart } = await import('$lib/rubik/math');

			if (cancelled || !container || !canvas) return;

			// --- Scene / Camera / Renderer ---
			const scene = createScene();
			function getSize() {
				const r = container.getBoundingClientRect();
				return { w: Math.max(1, Math.round(r.width)), h: Math.max(1, Math.round(r.height)) };
			}
			let { w, h } = getSize();
			const camera = createCamera(w / h);

			const renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: true,
				alpha: true,
				powerPreference: 'high-performance'
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.outputColorSpace = THREE.SRGBColorSpace;
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 0.82;
			renderer.setClearColor(0x000000, 0);
			renderer.setSize(w, h, false);

			// --- Cube ---
			const view = new CubeView();
			scene.add(view.group);

			const pivot = new THREE.Group();
			view.group.add(pivot);

			view.group.rotation.set(0.35, 0.6, 0);

			// --- Controls ---
			const controls = new OrbitControls(camera, canvas);
			controls.enableDamping = true;
			controls.dampingFactor = 0.07;
			controls.enablePan = false;
			controls.minDistance = 4.5;
			controls.maxDistance = 12;
			controls.rotateSpeed = 0.9;
			controls.zoomSpeed = 0.6;
			controls.target.set(0, 0, 0);

			let isInteracting = false;
			controls.addEventListener('start', () => (isInteracting = true));
			controls.addEventListener('end', () => (isInteracting = false));

			// --- Move animation (visual only, manual trigger) ---
			const FACE_AXIS = {
				U: new THREE.Vector3(0, 1, 0),
				D: new THREE.Vector3(0, -1, 0),
				R: new THREE.Vector3(1, 0, 0),
				L: new THREE.Vector3(-1, 0, 0),
				F: new THREE.Vector3(0, 0, 1),
				B: new THREE.Vector3(0, 0, -1)
			};

			let animating = false;
			const FACES = ['U', 'R', 'F', 'D', 'L', 'B'];
			const SUFFIXES = ['', "'", '2'];

			async function animateMove(move) {
				if (animating) return;
				animating = true;
				const face = move[0];
				const suffix = move.slice(1);
				let angle = -Math.PI / 2;
				if (suffix === "'") angle = Math.PI / 2;
				else if (suffix === '2') angle = -Math.PI;

				const axis = FACE_AXIS[face].clone().normalize();
				const cubies = view.getLayerCubies(face);
				for (const c of cubies) pivot.attach(c.mesh);
				pivot.quaternion.identity();

				const start = performance.now();
				const duration = suffix === '2' ? 320 : 240;
				const fromQ = new THREE.Quaternion();
				const toQ = new THREE.Quaternion().setFromAxisAngle(axis, angle);

				await new Promise((resolve) => {
					const tick = () => {
						const t = Math.min(1, (performance.now() - start) / duration);
						const e = easeInOutQuart(t);
						const q = new THREE.Quaternion().slerpQuaternions(fromQ, toQ, e);
						pivot.quaternion.copy(q);
						if (t < 1) requestAnimationFrame(tick);
						else resolve(undefined);
					};
					tick();
				});

				for (const c of cubies) {
					const parent = pivot.parent;
					if (parent) parent.attach(c.mesh);
					c.mesh.position.x = Math.round(c.mesh.position.x);
					c.mesh.position.y = Math.round(c.mesh.position.y);
					c.mesh.position.z = Math.round(c.mesh.position.z);
				}
				pivot.quaternion.identity();
				view.snapAll();
				animating = false;
			}

			function randomMove() {
				const f = FACES[Math.floor(Math.random() * FACES.length)];
				const s = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
				return `${f}${s}`;
			}

			// --- Resize ---
			const ro = new ResizeObserver(() => {
				const { w: nw, h: nh } = getSize();
				w = nw;
				h = nh;
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h, false);
			});
			ro.observe(container);

			// --- Render loop — constant drift, no random rests ---
			let raf = 0;

			function onClick() {
				if (animating || reduceMotion) return;
				animateMove(randomMove());
			}
			canvas.addEventListener('click', onClick);

			function onKey(e) {
				if (e.target && ['INPUT', 'TEXTAREA'].includes(/** @type {HTMLElement} */ (e.target).tagName))
					return;
				// Ignore any modifier — just plain r/u/f
				if (e.ctrlKey || e.metaKey || e.altKey) return;
				if (e.key === 'r' && !animating && !reduceMotion) {
					e.preventDefault();
					animateMove('R');
				} else if (e.key === 'u' && !animating && !reduceMotion) {
					e.preventDefault();
					animateMove('U');
				} else if (e.key === 'f' && !animating && !reduceMotion) {
					e.preventDefault();
					animateMove('F');
				}
			}
			window.addEventListener('keydown', onKey);
			// Also allow keyboard when cube is focused
			canvas.setAttribute('tabindex', '0');
			canvas.addEventListener('keydown', onKey);

			const clock = new THREE.Clock();

			function frame() {
				raf = requestAnimationFrame(frame);
				if (document.hidden) return;
				const delta = clock.getDelta();
				const now = performance.now();
				// Constant gentle spin — no pauses, no hover slowdown
				if (!reduceMotion && !isInteracting && !animating) {
					view.group.rotation.y += delta * 0.35;
					view.group.position.y = Math.sin(now * 0.0005) * 0.06;
				}
				controls.update();
				renderer.render(scene, camera);
			}
			frame();
			status = 'ready';

			cleanup = () => {
				cancelAnimationFrame(raf);
				window.removeEventListener('keydown', onKey);
				canvas.removeEventListener('click', onClick);
				canvas.removeEventListener('keydown', onKey);
				ro.disconnect();
				controls.dispose();
				view.dispose();
				scene.traverse((obj) => {
					if (obj instanceof THREE.Mesh && obj.material) {
						const mat = /** @type {THREE.Material & { map?: THREE.Texture }} */ (obj.material);
						if (mat.map) mat.map.dispose();
					}
				});
				renderer.dispose();
			};
		})();

		return () => {
			cancelled = true;
			cleanup();
		};
	});
</script>

<div
	bind:this={container}
	class="rubik-wrap"
	role="img"
	aria-label="Interactive 3D Rubik's cube — drag to rotate, click to twist, or use keyboard R U F L D B, arrows/WASD to orbit, space for random move"
>
	<canvas bind:this={canvas} class="rubik-canvas" aria-hidden="true"></canvas>

	{#if status === 'loading'}
		<div class="rubik-loading" aria-hidden="true">
			<span class="rubik-spinner"></span>
		</div>
	{/if}

	<div class="rubik-hint" aria-hidden="true">
		<span class="hidden sm:inline">drag · click · <kbd>r</kbd> <kbd>u</kbd> <kbd>f</kbd></span>
		<span class="sm:hidden">drag · tap · keys</span>
	</div>
</div>

<style>
	.rubik-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 420px;
		max-height: 560px;
		aspect-ratio: 1;
		overflow: hidden;
		background: transparent;
		border: none;
		box-shadow: none;
		border-radius: 0;
		cursor: grab;
		touch-action: none;
		-webkit-tap-highlight-color: transparent;
	}

	.rubik-wrap:active {
		cursor: grabbing;
	}

	.rubik-canvas {
		display: block;
		width: 100%;
		height: 100%;
		outline: none;
	}

	.rubik-canvas:focus-visible {
		outline: 1px solid color-mix(in srgb, var(--color-hairline-strong) 80%, transparent);
		outline-offset: 2px;
	}

	.rubik-hint kbd {
		font-family: 'Geist Mono', ui-monospace, monospace;
		font-size: 9px;
		background: color-mix(in srgb, var(--color-surface-card) 85%, transparent);
		border: 1px solid color-mix(in srgb, var(--color-hairline) 70%, transparent);
		border-bottom-width: 2px;
		padding: 1px 4px;
		border-radius: 4px;
		color: var(--color-body);
	}

	.rubik-hint {
		position: absolute;
		left: 50%;
		bottom: 8px;
		max-width: 90%;
		transform: translateX(-50%);
		pointer-events: none;
		font-family: 'Geist Mono', ui-monospace, monospace;
		font-size: 10px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--color-mute) 85%, transparent);
		background: color-mix(in srgb, var(--color-canvas) 78%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid color-mix(in srgb, var(--color-hairline) 60%, transparent);
		border-radius: 9999px;
		padding: 4px 10px;
		white-space: nowrap;
		opacity: 1;
		transition: opacity 0.2s ease;
	}

	.rubik-wrap:hover .rubik-hint {
		opacity: 0.9;
	}

	.rubik-loading {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		background: color-mix(in srgb, var(--color-canvas) 40%, transparent);
	}

	.rubik-spinner {
		width: 22px;
		height: 22px;
		border-radius: 9999px;
		border: 2px solid color-mix(in srgb, var(--color-hairline) 90%, transparent);
		border-top-color: var(--color-mute);
		animation: rubik-spin 0.7s linear infinite;
	}

	@keyframes rubik-spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 1024px) {
		.rubik-wrap {
			min-height: 320px;
			max-height: 420px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.rubik-spinner {
			animation: none;
		}
	}
</style>
