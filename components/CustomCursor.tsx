"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 8;

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const haloRef = useRef<HTMLDivElement>(null);
	const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);

	useEffect(() => {
		const root = document.documentElement;
		const canUseCustomCursor = window.matchMedia(
			"(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
		).matches;

		if (!canUseCustomCursor) return;

		root.classList.add("custom-cursor-enabled");

		let animationFrame = 0;
		let visible = false;
		let hoveringInteractive = false;
		let pointer = { x: 0, y: 0 };
		let halo = { x: 0, y: 0 };
		let previous = { x: 0, y: 0 };
		const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));

		const setVisibility = (nextVisible: boolean) => {
			visible = nextVisible;
			if (cursorRef.current) cursorRef.current.style.opacity = visible ? "1" : "0";
			if (haloRef.current) haloRef.current.style.opacity = visible ? "1" : "0";
		};

		const render = () => {
			const ease = hoveringInteractive ? 0.24 : 0.18;
			halo.x += (pointer.x - halo.x) * ease;
			halo.y += (pointer.y - halo.y) * ease;

			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
			}
			if (haloRef.current) {
				haloRef.current.style.transform = `translate3d(${halo.x}px, ${halo.y}px, 0)`;
			}

			trail[0].x += (pointer.x - trail[0].x) * 0.34;
			trail[0].y += (pointer.y - trail[0].y) * 0.34;
			for (let index = 1; index < trail.length; index += 1) {
				trail[index].x += (trail[index - 1].x - trail[index].x) * 0.24;
				trail[index].y += (trail[index - 1].y - trail[index].y) * 0.24;
			}

			const movementX = pointer.x - previous.x;
			const movementY = pointer.y - previous.y;
			const angle = Math.atan2(movementY, movementX) * (180 / Math.PI);
			const speed = Math.min(Math.hypot(movementX, movementY), 24);

			trailRefs.current.forEach((element, index) => {
				if (!element) return;
				const progress = index / trail.length;
				const opacity = visible ? (1 - progress) * Math.min(speed / 5, 1) * 0.42 : 0;
				const scaleX = 1 + Math.min(speed / 12, 1) * (1 - progress) * 1.8;
				element.style.opacity = String(opacity);
				element.style.transform = `translate3d(${trail[index].x}px, ${trail[index].y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scaleX(${scaleX})`;
			});

			previous = { ...pointer };
			animationFrame = requestAnimationFrame(render);
		};

		const handlePointerMove = (event: PointerEvent) => {
			pointer = { x: event.clientX, y: event.clientY };
			if (!visible) {
				halo = { ...pointer };
				trail.forEach((position) => Object.assign(position, pointer));
			}
			setVisibility(true);

			const target = event.target instanceof Element ? event.target : null;
			hoveringInteractive = Boolean(
				target?.closest("a, button, input, textarea, select, [role='button']"),
			);
			root.classList.toggle("custom-cursor-hover", hoveringInteractive);
		};

		const handlePointerLeave = () => setVisibility(false);
		const handlePointerEnter = (event: PointerEvent) => {
			pointer = { x: event.clientX, y: event.clientY };
			halo = { ...pointer };
			previous = { ...pointer };
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });
		document.addEventListener("pointerleave", handlePointerLeave);
		document.addEventListener("pointerenter", handlePointerEnter);
		animationFrame = requestAnimationFrame(render);

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("pointermove", handlePointerMove);
			document.removeEventListener("pointerleave", handlePointerLeave);
			document.removeEventListener("pointerenter", handlePointerEnter);
			root.classList.remove("custom-cursor-enabled", "custom-cursor-hover");
		};
	}, []);

	return (
		<div aria-hidden="true" className="custom-cursor-layer">
			<div ref={haloRef} className="custom-cursor-halo" />
			{Array.from({ length: TRAIL_LENGTH }, (_, index) => (
				<span
					key={index}
					ref={(element) => {
						trailRefs.current[index] = element;
					}}
					className="custom-cursor-trail"
				/>
			))}
			<div ref={cursorRef} className="custom-cursor-core" />
		</div>
	);
}
