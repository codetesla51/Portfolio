import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import type { Face, Slice, StickerColor } from './types';
import { COLOR_HEX, FACES } from './types';
import { FACELET_MAP, faceletGlobalIndex, type Vec3 } from './FaceletMap';

export interface Cubie {
	mesh: THREE.Group;
	home: Vec3;
	stickers: Map<Face, THREE.Mesh>;
}

const CUBIE_SIZE = 0.96;
const CUBIE_RADIUS = 0.06;
const STICKER_SIZE = 0.84;
const STICKER_RADIUS = 0.09;
const STICKER_INSET = 0.502;

const FACE_NORMAL: Record<Face, Vec3> = {
	U: [0, 1, 0],
	R: [1, 0, 0],
	F: [0, 0, 1],
	D: [0, -1, 0],
	L: [-1, 0, 0],
	B: [0, 0, -1]
};

function makeCubieBody(): THREE.Mesh {
	const geo = new RoundedBoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE, 4, CUBIE_RADIUS);
	const mat = new THREE.MeshStandardMaterial({
		color: 0x1a1a1f,
		roughness: 0.78,
		metalness: 0.02
	});
	return new THREE.Mesh(geo, mat);
}

function roundedSquareShape(size: number, radius: number): THREE.Shape {
	const s = size / 2;
	const r = Math.min(radius, s);
	const shape = new THREE.Shape();
	shape.moveTo(-s + r, -s);
	shape.lineTo(s - r, -s);
	shape.quadraticCurveTo(s, -s, s, -s + r);
	shape.lineTo(s, s - r);
	shape.quadraticCurveTo(s, s, s - r, s);
	shape.lineTo(-s + r, s);
	shape.quadraticCurveTo(-s, s, -s, s - r);
	shape.lineTo(-s, -s + r);
	shape.quadraticCurveTo(-s, -s, -s + r, -s);
	return shape;
}

const STICKER_GEOMETRY = new THREE.ShapeGeometry(
	roundedSquareShape(STICKER_SIZE, STICKER_RADIUS),
	6
);

function makeStickerMesh(color: StickerColor, face: Face): THREE.Mesh {
	const mat = new THREE.MeshStandardMaterial({
		color: COLOR_HEX[color],
		roughness: 0.58,
		metalness: 0.02,
		side: THREE.DoubleSide,
		emissive: 0x000000,
		emissiveIntensity: 0
	});
	const mesh = new THREE.Mesh(STICKER_GEOMETRY, mat);
	const [nx, ny, nz] = FACE_NORMAL[face];
	mesh.position.set(nx * STICKER_INSET, ny * STICKER_INSET, nz * STICKER_INSET);
	const axis = new THREE.Vector3(nx, ny, nz);
	const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
	mesh.quaternion.copy(quat);
	mesh.userData.face = face;
	return mesh;
}

export class CubeView {
	readonly group: THREE.Group;
	private cubies: Cubie[] = [];

	constructor() {
		this.group = new THREE.Group();
		this.build();
	}

	private build(): void {
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				for (let z = -1; z <= 1; z++) {
					const g = new THREE.Group();
					g.position.set(x, y, z);
					g.add(makeCubieBody());
					const cubie: Cubie = { mesh: g, home: [x, y, z], stickers: new Map() };
					this.cubies.push(cubie);
					this.group.add(g);
				}
			}
		}
		this.repaintFromFacelets(this.solvedFacelets());
	}

	private cubieByHome(pos: Vec3): Cubie | null {
		for (const c of this.cubies) {
			if (c.home[0] === pos[0] && c.home[1] === pos[1] && c.home[2] === pos[2]) return c;
		}
		return null;
	}

	private solvedFacelets(): string {
		return 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB';
	}

	repaintFromFacelets(facelets: string): void {
		if (facelets.length !== 54) throw new Error('expected 54 facelets');
		for (const cubie of this.cubies) {
			if (cubie.mesh.parent !== this.group) this.group.attach(cubie.mesh);
			cubie.mesh.position.set(cubie.home[0], cubie.home[1], cubie.home[2]);
			cubie.mesh.quaternion.identity();
			cubie.stickers.forEach((s) => {
				cubie.mesh.remove(s);
				(s.material as THREE.Material).dispose();
			});
			cubie.stickers.clear();
		}
		for (const entry of FACELET_MAP) {
			const cubie = this.cubieByHome(entry.position);
			if (!cubie) continue;
			const letter = facelets[faceletGlobalIndex(entry.face, entry.index)];
			const color = letterToColor(letter);
			const sticker = makeStickerMesh(color, entry.face);
			cubie.mesh.add(sticker);
			cubie.stickers.set(entry.face, sticker);
		}
	}

	getLayerCubies(face: Face): Cubie[] {
		const axis = FACE_NORMAL[face];
		const sign = axis[0] + axis[1] + axis[2];
		const axisIdx = axis[0] !== 0 ? 0 : axis[1] !== 0 ? 1 : 2;
		const out: Cubie[] = [];
		for (const c of this.cubies) {
			const p = c.mesh.position;
			const v = axisIdx === 0 ? p.x : axisIdx === 1 ? p.y : p.z;
			if (Math.abs(v - sign) < 0.1) out.push(c);
		}
		return out;
	}

	getSliceCubies(slice: Slice): Cubie[] {
		const out: Cubie[] = [];
		for (const c of this.cubies) {
			const p = c.mesh.position;
			const coord = slice === 'M' ? p.x : slice === 'E' ? p.y : p.z;
			if (Math.abs(coord) < 0.1) out.push(c);
		}
		return out;
	}

	getAllCubies(): Cubie[] {
		return this.cubies;
	}

	snapAll(): void {
		for (const c of this.cubies) {
			c.mesh.position.x = Math.round(c.mesh.position.x);
			c.mesh.position.y = Math.round(c.mesh.position.y);
			c.mesh.position.z = Math.round(c.mesh.position.z);
		}
	}

	dispose(): void {
		for (const cubie of this.cubies) {
			for (const [, sticker] of cubie.stickers) {
				(sticker.geometry as THREE.BufferGeometry).dispose?.();
				(sticker.material as THREE.Material).dispose();
			}
			// Dispose cubie body geometry/material (first child)
			const body = cubie.mesh.children[0] as THREE.Mesh | undefined;
			if (body) {
				(body.geometry as THREE.BufferGeometry).dispose();
				(body.material as THREE.Material).dispose();
			}
		}
	}
}

function letterToColor(letter: string): StickerColor {
	switch (letter) {
		case 'U':
			return 'W';
		case 'R':
			return 'R';
		case 'F':
			return 'G';
		case 'D':
			return 'Y';
		case 'L':
			return 'O';
		case 'B':
			return 'B';
		default:
			throw new Error(`Unknown facelet letter "${letter}"`);
	}
}

export const FACES_LIST = FACES;
