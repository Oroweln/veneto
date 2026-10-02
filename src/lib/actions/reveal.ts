/** Fade-up once when the element scrolls into view. Stagger with `delay` (ms). */
export function reveal(node: HTMLElement, delay = 0) {
	node.classList.add('reveal');
	if (delay) node.style.setProperty('--delay', `${delay}ms`);

	if (!('IntersectionObserver' in window)) {
		node.classList.add('is-in');
		return;
	}
	const io = new IntersectionObserver(
		(entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				node.classList.add('is-in');
				io.disconnect();
			}
		},
		{ rootMargin: '0px 0px -6% 0px' }
	);
	io.observe(node);
	return {
		destroy: () => io.disconnect()
	};
}

/** Toggles `is-offscreen` so looping CSS animations can pause while not visible. */
export function onscreen(node: HTMLElement, callback?: (visible: boolean) => void) {
	if (!('IntersectionObserver' in window)) return;
	const io = new IntersectionObserver((entries) => {
		const visible = entries.some((e) => e.isIntersecting);
		node.classList.toggle('is-offscreen', !visible);
		callback?.(visible);
	});
	io.observe(node);
	return {
		destroy: () => io.disconnect()
	};
}

export function prefersReducedMotion(): boolean {
	return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Background video: plays only while on screen, never with reduced motion (the poster stays). */
export function bgVideo(video: HTMLVideoElement) {
	if (prefersReducedMotion()) {
		video.removeAttribute('autoplay');
		video.pause();
		return;
	}
	if (!('IntersectionObserver' in window)) return;
	const io = new IntersectionObserver((entries) => {
		if (entries.some((e) => e.isIntersecting)) video.play().catch(() => {});
		else video.pause();
	});
	io.observe(video);
	return {
		destroy: () => io.disconnect()
	};
}
