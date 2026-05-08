'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScheduleModal from './ScheduleModal';

const navItems = [
  { href: '/', label: 'Home', num: '01' },
  { href: '/about', label: 'About', num: '02' },
  { href: '/prospera', label: 'Prospera', num: '03' },
  { href: '/projects', label: 'Projects', num: '04' },
  { href: '/divisions', label: 'Divisions', num: '05' },
  { href: '/legacy', label: 'Legacy', num: '06' },
  { href: '/contact', label: 'Contact', num: '07' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openScheduleModal', handleOpenModal);
    return () => window.removeEventListener('openScheduleModal', handleOpenModal);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
      gsap.from('.mobile-link', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'expo.out',
        delay: 0.2,
      });
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          open ? 'text-ink' : 'text-bone-light'
        }`}
      >
        <div className="gutter flex items-center justify-between py-5 md:py-4">
          <a
            href="/"
            className="magnetic block"
            data-cursor
          >
            <div className="logo-highlight-wrap">
              <img 
                src="images/sia-logo.png" 
                alt="Sia Estates" 
                className="h-8 md:h-10 w-auto object-contain logo-white" 
              />
              <img 
                src="images/sia-logo.png" 
                alt="Sia Estates" 
                className="h-8 md:h-10 w-auto object-contain logo-dark hidden" 
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-u"
                data-cursor
              >
                {item.italic ? (
                  <span className="font-display-italic">{item.label}</span>
                ) : (
                  item.label
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex btn-ghost magnetic"
              data-cursor
            >
              Schedule a Visit
              <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`nav-burger lg:hidden w-11 h-11 rounded-full border border-line grid place-items-center ${
                open ? 'open' : ''
              }`}
              aria-label="Menu"
              aria-expanded={open}
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-px bg-current block"></span>
                <span className="w-5 h-px bg-current block"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-bone-light lg:hidden flex flex-col overflow-y-auto ${
          open ? 'open' : ''
        }`}
      >
        <div className="flex-1 flex flex-col justify-between min-h-max gutter pb-10 pt-28">
          <div className="text-[11px] uppercase tracking-[0.25em] text-bronze mb-4">
            
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={`mobile-link font-display text-5xl py-3 ${
                  i < navItems.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                {item.italic ? (
                  <span className="font-display-italic">{item.label}</span>
                ) : (
                  item.label
                )}
                <span className="float-right text-base text-ink-mute mt-3">
                  {item.num}
                </span>
              </a>
            ))}
            <button 
              onClick={() => {
                close();
                setIsModalOpen(true);
              }}
              className="mobile-link font-display text-5xl py-3 text-left"
            >
              <span className="font-display-italic text-bronze">Schedule Visit</span>
            </button>
          </nav>
          <div className="mt-12 pt-8 border-t border-line flex items-center justify-between text-xs text-ink-mute">
            <span>Plot 3, Ashwini Layout, Hyderabad</span>
            <span>+91 ·· ····</span>
          </div>
        </div>
      </div>

      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
