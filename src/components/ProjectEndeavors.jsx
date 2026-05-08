'use client';

import { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    title: 'Sia',
    location: 'Jubilee Hills',
    type: 'Road No. 70',
    image: '/images/projects/prolist/1.webp',
  },
  {
    title: 'Sia Estates',
    location: 'Jubilee Hills',
    type: 'Phase II, Kavuri Hills',
    image: '/images/projects/prolist/2.webp',
  },
  {
    title: 'N-95',
    location: 'Jubilee Hills',
    type: 'Nandagiri Hills, 2016 - 2018',
    image: '/images/projects/prolist/3.jpg',
  },
  {
    title: 'Guru S Choice Residency',
    location: 'East Marredpally',
    type: 'H.No. 10-3-3/14 & 18, 2010-2012',
    image: '/images/projects/prolist/4.webp',
  },
  {
    title: 'Srinivasa Residency',
    location: 'Narayanguda',
    type: 'H.No. 3-5-694 & 694/A, 2003-2005',
    image: '/images/projects/prolist/5.webp',
  },
  {
    title: 'Silver Nest Arcade',
    location: 'Narayanguda',
    type: '3-5-1113, 2001-2003',
    image: '/images/projects/prolist/6.webp',
  },
  {
    title: 'Choice Centre',
    location: 'Secunderabad',
    type: 'S.D.Road, 2018-2020',
    image: '/images/projects/prolist/7.webp',
  },
  {
    title: 'Sia Serene',
    location: 'Jubilee Hills',
    type: '2013-2015',
    image: '/images/projects/prolist/8.webp',
  },
  {
    title: 'Sree Mahalakshmi Meadows',
    location: 'Lakdikapool',
    type: 'H.No. 6-1-72, 2006-2009',
    image: '/images/projects/prolist/9.webp',
  },
  {
    title: 'Sai Dhamam',
    location: 'Domalguda',
    type: 'H.No.1-2-33, 1999-2000',
    image: '/images/projects/prolist/10.webp',
  },
  {
    title: 'Pandit Narendra Bhavan',
    location: 'Narayanguda',
    type: '3-5-112, 1999-2000',
    image: '/images/projects/prolist/11.jpg',
  }
];

export default function ProjectEndeavors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (projects.length - visibleItems + 1));
  }, [visibleItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - visibleItems : prev - 1));
  }, [visibleItems]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 md:py-32 gutter bg-ink text-bone-light overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24" data-reveal>
        <div>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — Portfolio
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Our Project <br />
            <span className="font-display-italic">Endeavors.</span>
          </h2>
        </div>
      </div>

      <div className="relative overflow-visible" data-reveal>
        <div 
          className="flex transition-transform duration-1000 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `calc((100% - ${(visibleItems - 1) * 24}px) / ${visibleItems})` }}
            >
              <div className="group relative aspect-[3/4] rounded-2xl md:rounded-[40px] overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-bronze font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
                    {project.location}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-4 text-bone-light">
                    {project.title}
                  </h3>
                  <div className="h-px w-0 group-hover:w-full bg-bronze/50 transition-all duration-700 mb-4"></div>
                  <p className="text-[10px] uppercase tracking-widest text-bone-light/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8" data-reveal>
        {/* Progress Bar */}
        <div className="w-full md:w-1/2 h-0.5 bg-white/5 relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-bronze transition-all duration-1000 ease-in-out"
            style={{ width: `${((currentIndex + visibleItems) / projects.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-bone-light/20 flex items-center justify-center hover:bg-bone-light hover:text-ink transition-colors group"
              aria-label="Previous projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-bone-light/20 flex items-center justify-center hover:bg-bone-light hover:text-ink transition-colors group"
              aria-label="Next projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          {/* Slide Indicator */}
          <div className="text-[10px] uppercase tracking-[0.2em] text-bone-light/40">
            <span className="text-bronze">{currentIndex + 1}</span> — {projects.length - visibleItems + 1}
          </div>
        </div>
      </div>
    </section>
  );
}

