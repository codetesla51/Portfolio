import * as THREE from 'three';

export function createScene(): THREE.Scene {
	const scene = new THREE.Scene();
	scene.background = null;

	const ambient = new THREE.AmbientLight(0xfffaf0, 0.42);
	scene.add(ambient);

	const key = new THREE.DirectionalLight(0xfff5e6, 0.38);
	key.position.set(4, 7, 5);
	scene.add(key);

	const fill = new THREE.DirectionalLight(0xe6efff, 0.12);
	fill.position.set(-5, -1, -3);
	scene.add(fill);

	scene.add(makeContactShadow());

	return scene;
}

export function createCamera(aspect: number): THREE.PerspectiveCamera {
	const cam = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
	cam.position.set(5.4, 4.6, 6.8);
	cam.lookAt(0, 0, 0);
	return cam;
}

function makeContactShadow(): THREE.Mesh {
	const size = 256;
	const canvas = document.createElement('canvas');
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext('2d')!;
	const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.05, size / 2, size / 2, size / 2);
	grad.addColorStop(0, 'rgba(20, 22, 28, 0.22)');
	grad.addColorStop(0.45, 'rgba(20, 22, 28, 0.09)');
	grad.addColorStop(1, 'rgba(20, 22, 28, 0)');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, size, size);

	const tex = new THREE.CanvasTexture(canvas);
	tex.colorSpace = THREE.SRGBColorSpace;

	const geo = new THREE.PlaneGeometry(5, 5);
	const mat = new THREE.MeshBasicMaterial({
		map: tex,
		transparent: true,
		depthWrite: false
	});
	const mesh = new THREE.Mesh(geo, mat);
	mesh.name = 'contactShadow';
	mesh.rotation.x = -Math.PI / 2;
	mesh.position.y = -1.6;
	mesh.renderOrder = -1;
	return mesh;
}
