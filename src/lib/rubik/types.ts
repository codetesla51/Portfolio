export type Face = 'U' | 'R' | 'F' | 'D' | 'L' | 'B';
export const FACES: Face[] = ['U', 'R', 'F', 'D', 'L', 'B'];

export type Slice = 'M' | 'E' | 'S';
export const SLICES: Slice[] = ['M', 'E', 'S'];

export type Suffix = '' | "'" | '2';
export type Move = `${Face}${Suffix}` | `${Slice}${Suffix}`;

export type StickerColor = 'W' | 'Y' | 'R' | 'O' | 'G' | 'B';

export const FACE_COLOR: Record<Face, StickerColor> = {
	U: 'W',
	R: 'R',
	F: 'G',
	D: 'Y',
	L: 'O',
	B: 'B'
};

export const COLOR_HEX: Record<StickerColor, number> = {
	W: 0xf7f5ee,
	Y: 0xd4a017,
	R: 0xb91c1c,
	O: 0xc2570c,
	G: 0x4d7c0f,
	B: 0x1e40af
};
