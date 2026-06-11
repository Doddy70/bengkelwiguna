"use client";
import { gsap } from "@/libs/gsap.config";
import { useEffect, useRef } from "react";
const TjMagicCursor = () => {
	const cursorRef = useRef(null);
	const textRef = useRef(null);
	const pos = useRef({ x: -9999, y: -9999 });
	const stick = useRef(null);
	const visible = useRef(false);
	const visibleTimer = useRef(null);

	// ==== Helpers ====
	const moveCursor = (x, y, duration = 0.7) => {
		gsap.to(cursorRef.current, {
			x: x ?? pos.current.x,
			y: y ?? pos.current.y,
			force3D: true,
			overwrite: true,
			ease: "expo.out",
			duration: visible.current ? duration : 0,
		});
	};

	const show = () => {
		if (visible.current) return;
		clearTimeout(visibleTimer.current);
		cursorRef.current.classList.add("-visible");
		visibleTimer.current = setTimeout(() => {
			visible.current = true;
		}, 20);
	};

	const hide = () => {
		clearTimeout(visibleTimer.current);
		cursorRef.current.classList.remove("-visible");

		visibleTimer.current = setTimeout(() => {
			visible.current = false;
		}, 300);
	};

	// ==== Cursor States ====
	const setState = state => cursorRef.current.classList.add(state);
	const removeState = state => cursorRef.current.classList.remove(state);

	const setText = t => {
		textRef.current.innerHTML = t;
		cursorRef.current.classList.add("-text");
	};

	const removeText = () => {
		cursorRef.current.classList.remove("-text");
	};

	const setStick = selector => {
		const el = document.querySelector(selector);
		if (!el) return;

		const rect = el.getBoundingClientRect();
		stick.current = {
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2,
		};

		moveCursor(stick.current.x, stick.current.y, 0.5);
	};

	const removeStick = () => (stick.current = null);

	// ============================
	// EFFECT: Bind all listeners
	// ============================
	useEffect(() => {
		const body = document.body;

		const onMouseMove = e => {
			pos.current = {
				x: stick.current
					? stick.current.x - (stick.current.x - e.clientX) * 0.15
					: e.clientX,
				y: stick.current
					? stick.current.y - (stick.current.y - e.clientY) * 0.15
					: e.clientY,
			};
			moveCursor();
			show();
		};

		const onMouseEnter = () => show();
		const onMouseLeave = () => hide();
		const onMouseDown = () => setState("-active");
		const onMouseUp = () => removeState("-active");

		// --- Data attribute handlers ---
		const onEnterAttr = e => {
			const el = e.target;
			if (el.dataset.cursor) setState(el.dataset.cursor);
			if (el.dataset.cursorText) setText(el.dataset.cursorText);
			if (el.dataset.cursorClass)
				cursorRef.current.classList.add(...el.dataset.cursorClass.split(" "));
			if (el.dataset.cursorStick) setStick(el.dataset.cursorStick);
		};

		const onLeaveAttr = e => {
			const el = e.target;
			if (el.dataset.cursor) removeState(el.dataset.cursor);
			if (el.dataset.cursorText) removeText();
			if (el.dataset.cursorClass)
				cursorRef.current.classList.remove(
					...el.dataset.cursorClass.split(" ")
				);
			if (el.dataset.cursorStick) removeStick();
		};

		// Bind events
		body.addEventListener("mousemove", onMouseMove);
		body.addEventListener("mouseenter", onMouseEnter);
		body.addEventListener("mouseleave", onMouseLeave);
		body.addEventListener("mousedown", onMouseDown);
		body.addEventListener("mouseup", onMouseUp);

		body.addEventListener("mouseenter", onEnterAttr, true);
		body.addEventListener("mouseleave", onLeaveAttr, true);

		return () => {
			body.removeEventListener("mousemove", onMouseMove);
			body.removeEventListener("mouseenter", onMouseEnter);
			body.removeEventListener("mouseleave", onMouseLeave);
			body.removeEventListener("mousedown", onMouseDown);
			body.removeEventListener("mouseup", onMouseUp);

			body.removeEventListener("mouseenter", onEnterAttr, true);
			body.removeEventListener("mouseleave", onLeaveAttr, true);
		};
	}, []);

	return (
		<div id="magic-cursor">
			<div id="ball" className="cb-cursor" ref={cursorRef}>
				<div className="cb-cursor-text" ref={textRef}></div>
			</div>
		</div>
	);
};

export default TjMagicCursor;
