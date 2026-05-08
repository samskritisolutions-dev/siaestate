'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Marquee() {
  const trackRef = useRef(null);

  const items = [
    { text: '30 Years Standing', italic: false },
    { text: 'Promises kept in concrete', italic: true },
    { text: '25000 Smiles', italic: false },
    { text: 'Hyderabad to its core', italic: true },
  ];

  const Row = ({ ariaHidden }) => (
    <div
      className="flex items-center gap-12 pr-12 shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-12">
          <span className={item.italic ? 'font-display-italic' : ''}>
            {item.text}
          </span>
          <span className="text-bronze">✦</span>
        </span>
      ))}
    </div>
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let direction = -1;
    let xPercent = 0;
    let speedMult = 1;
    let speedTween;

    const tick = () => {
      // With 4 rows, 25% is exactly one row
      if (xPercent <= -25) {
        xPercent += 25;
      } else if (xPercent > 0) {
        xPercent -= 25;
      }

      if (trackRef.current) {
        gsap.set(trackRef.current, { xPercent });
      }
      // base speed is 0.04. speedMult increases on scroll
      xPercent += 0.04 * speedMult * direction;
    };

    gsap.ticker.add(tick);

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        // Change direction based on scroll up/down
        direction = self.direction === 1 ? -1 : 1;

        // Map velocity to speed multiplier
        const vel = Math.abs(self.getVelocity() || 0);
        speedMult = 1 + vel / 300;

        // Smoothly return to normal speed
        if (speedTween) speedTween.kill();
        speedTween = gsap.to(
          {},
          {
            duration: 0.8,
            onUpdate: () => {
              speedMult += (1 - speedMult) * 0.1;
            },
          }
        );
      },
    });

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      if (speedTween) speedTween.kill();
    };
  }, []);

  return (
    <div className="bg-ink text-bone-light py-5 md:py-6 overflow-hidden border-y border-ink">
      <div
        ref={trackRef}
        className="flex w-max font-display text-3xl md:text-5xl"
      >
        <Row />
        <Row ariaHidden />
        <Row ariaHidden />
        <Row ariaHidden />
      </div>
    </div>
  );
}
