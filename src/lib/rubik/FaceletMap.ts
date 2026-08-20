import type { Face } from './types';
import { FACES } from './types';

export type Vec3 = [number, number, number];

export interface FaceletEntry {
	face: Face;
	index: number;
	position: Vec3;
	normal: Vec3;
}

const NORMAL: Record<Face, Vec3> = {
	U: [0, 1, 0],
	R: [1, 0, 0],
	F: [0, 0, 1],
	D: [0, -1, 0],
	L: [-1, 0, 0],
	B: [0, 0, -1]
};

function cubiePosForFacelet(face: Face, r: number, c: number): Vec3 {
	switch (face) {
		case 'U':
			return [c - 1, +1, r - 1];
		case 'R':
			return [+1, 1 - r, 1 - c];
		case 'F':
			return [c - 1, 1 - r, +1];
		case 'D':
			return [c - 1, -1, 1 - r];
		case 'L':
			return [-1, 1 - r, c - 1];
		case 'B':
			return [1 - c, 1 - r, -1];
	}
}

export const FACELET_MAP: FaceletEntry[] = (() => {
	const out: FaceletEntry[] = [];
	for (const face of FACES) {
		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				const idx = r * 3 + c;
				out.push({
					face,
					index: idx,
					position: cubiePosForFacelet(face, r, c),
					normal: NORMAL[face]
				});
			}
		}
	}
	return out;
})();

export function faceletGlobalIndex(face: Face, idx: number): number {
	return FACES.indexOf(face) * 9 + idx;
}
