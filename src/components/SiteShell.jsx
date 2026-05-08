'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Preloader from './Preloader';

export default function SiteShell({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Lenis smooth scroll ---
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    let rafId = requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);

    // expose for components that need to lock/unlock scroll (mobile menu)
    window.__lenis = lenis;

    const cleanups = [];

    // wait for layout to settle before binding triggers
    const setupTimer = setTimeout(() => {
      document.body.classList.remove('preload');

      // --- Hero load sequence ---
      const tl = gsap.timeline({ 
        defaults: { ease: 'expo.out' },
        delay: 3.2 // Wait for preloader to finish
      });
      tl.from('.hero-img', { scale: 1.4, duration: 1.8, ease: 'expo.out' })
        .from(
          '[data-hero-line]',
          { yPercent: 110, duration: 1.2, stagger: 0.12 },
          '-=1.4'
        )
        .from(
          '[data-hero-fade]',
          { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 },
          '-=0.6'
        );

      // --- Generic reveal on scroll ---
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // --- Generic line reveal ---
      gsap.utils.toArray('[data-line-reveal]').forEach((el) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // --- Gallery items reveal ---
      gsap.utils.toArray('.gallery-item').forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          delay: (i % 4) * 0.06,
        });
      });

      // --- Hero parallax ---
      gsap.to('.hero-img', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-img',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // --- Number counters ---
      document.querySelectorAll('[data-counter]').forEach((el) => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const isFloat = !Number.isInteger(target);
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: 'expo.out',
              onUpdate: () => {
                let v;
                if (isFloat) v = obj.val.toFixed(1);
                else if (target >= 1000) v = Math.round(obj.val).toLocaleString();
                else v = Math.round(obj.val);
                el.textContent = v + suffix;
              },
            });
          },
        });
      });

      // --- Magnetic buttons ---
      document.querySelectorAll('.magnetic').forEach((btn) => {
        const move = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.18,
            y: y * 0.25,
            duration: 0.5,
            ease: 'power3.out',
          });
        };
        const leave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.4)',
          });
        };
        btn.addEventListener('mousemove', move);
        btn.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          btn.removeEventListener('mousemove', move);
          btn.removeEventListener('mouseleave', leave);
        });
      });

      // --- Nav state on scroll ---
      const navbar = document.getElementById('navbar');
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
          if (!navbar) return;
          if (self.scroll() > 80) navbar.classList.add('nav-scrolled');
          else navbar.classList.remove('nav-scrolled');
        },
      });

      // --- Smooth anchor scroll via Lenis ---
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        const handler = (e) => {
          const id = a.getAttribute('href');
          if (id && id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -20, duration: 1.4 });
            }
          }
        };
        a.addEventListener('click', handler);
        cleanups.push(() => a.removeEventListener('click', handler));
      });

      // refresh in case layout shifted
      ScrollTrigger.refresh();
    }, 80);

    return () => {
      clearTimeout(setupTimer);
      cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
