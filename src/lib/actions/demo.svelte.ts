import { prefersReducedMotion } from './reveal';

/**
 * Selection for an interactive illustration that demos itself: until the visitor picks
 * something, it steps through the items on a timer (paused while hovered, off with
 * reduced motion). Setting `index` counts as the visitor's choice and stops the demo.
 */
export function createDemo(length: () => number, { start = 0, ms = 2800 } = {}) {
	let index = $state(start);
	let touched = $state(false);
	let held = $state(false);

	$effect(() => {
		if (touched || held || prefersReducedMotion()) return;
		const id = setInterval(() => (index = (index + 1) % length()), ms);
		return () => clearInterval(id);
	});

	return {
		get index() {
			return index;
		},
		set index(value: number) {
			index = value;
			touched = true;
		},
		/** True once the visitor has interacted. */
		get touched() {
			return touched;
		},
		/** Marks an interaction that isn't a selection (e.g. saving an item). */
		touch() {
			touched = true;
		},
		/** Spread on the illustration's wrapper: pauses the demo while the pointer or focus is inside. */
		hold: {
			onpointerenter: () => (held = true),
			onpointerleave: () => (held = false),
			onfocusin: () => (held = true),
			onfocusout: () => (held = false)
		}
	};
}
