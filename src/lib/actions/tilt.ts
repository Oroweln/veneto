import { prefersReducedMotion } from './reveal';

/**
 * Leans an element toward the pointer in 3D. Writes `--rx` / `--ry` (degrees) for the
 * element's own `transform`, so the resting angle stays in CSS. Mouse and pen only.
 */
export function tilt(node: HTMLElement, strength = 7) {
	if (prefersReducedMotion()) return;

	function move(e: PointerEvent) {
		if (e.pointerType === 'touch') return;
		const r = node.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - 0.5;
		const y = (e.clientY - r.top) / r.height - 0.5;
		node.style.setProperty('--ry', `${(x * strength * 2).toFixed(2)}deg`);
		node.style.setProperty('--rx', `${(-y * strength * 2).toFixed(2)}deg`);
	}
	function leave() {
		node.style.removeProperty('--ry');
		node.style.removeProperty('--rx');
	}
	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', leave);
	return {
		destroy() {
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', leave);
		}
	};
}
