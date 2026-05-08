'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter logic
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        setCount(Math.round(obj.val));
      },
      onComplete: () => {
        // Final exit sequence
        const tl = gsap.timeline();
        tl.to('.preloader-content', {
          y: -100,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.inOut'
        })
        .to('.preloader-bg', {
          height: 0,
          duration: 1.2,
          ease: 'expo.inOut',
          stagger: 0.1
        }, '-=0.4')
        .set('.preloader-wrapper', { display: 'none' });
      }
    });

    // Logo & Subtitle fade
    gsap.fromTo('.preloader-logo', 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'expo.out' }
    );
    
    gsap.fromTo('.preloader-sub', 
      { opacity: 0, y: 10 }, 
      { opacity: 0.5, y: 0, duration: 1, delay: 0.8 }
    );

  }, []);

  return (
    <div className="preloader-wrapper fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden">
      {/* Background panels for cinematic slide-up */}
      <div className="preloader-bg absolute inset-0 bg-ink"></div>
      <div className="preloader-bg absolute inset-0 bg-bronze/5 h-full"></div>
      
      <div className="preloader-content relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="preloader-logo mb-12">
          <img 
            src="/images/sia-logo.png" 
            alt="Sia Estates" 
            className="h-12 md:h-20 w-auto object-contain brightness-0 invert opacity-80" 
          />
        </div>

        <div className="overflow-hidden">
          <div className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-bronze uppercase flex items-center gap-4">
             <span className="w-12 h-px bg-bronze/20"></span>
             <span>Loading {count}%</span>
             <span className="w-12 h-px bg-bronze/20"></span>
          </div>
        </div>
        
        <div className="preloader-sub mt-12 text-bone-light/40 text-[10px] uppercase tracking-[0.4em] font-medium opacity-0">
          Promises built in stone
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-bone-light/10 text-[10px] uppercase tracking-widest font-mono">
        Sia Estates &copy; 2026
      </div>
    </div>
  );
}

