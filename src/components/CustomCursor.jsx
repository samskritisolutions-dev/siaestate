'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onEnter = () => cursor.classList.add('hover');
    const onLeave = () => cursor.classList.remove('hover');

    const targets = document.querySelectorAll('[data-cursor], a, button');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot" id="cursor" />;
}
