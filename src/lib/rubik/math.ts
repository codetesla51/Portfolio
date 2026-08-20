export const easeInOutQuart = (t: number) =>
	t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
