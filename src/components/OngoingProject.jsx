'use client';

export default function OngoingProject() {
  return (
    <section className="py-24 md:py-32 gutter bg-bone text-ink">
      <div className="flex flex-col gap-12 md:gap-20">
        
        <div className="max-w-3xl" data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — Active Development
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-tight">
            Ongoing <span className="font-display-italic">Project.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left: Large Image */}
          <div className="col-span-12 lg:col-span-7" data-reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:rounded-[40px] group cursor-pointer shadow-2xl">
              <img
                src="images/projects/1.jpg"
                alt="Indis Sia Prospera"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <a href="/prospera" className="bg-bone text-ink px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-bronze hover:text-bone-light transition-colors">
                    Explore Project
                 </a>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="col-span-12 lg:col-span-5 space-y-8" data-reveal>
            <div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">Indis Sia Prospera</h3>
              <p className="text-bronze font-mono text-sm uppercase tracking-widest">Miyapur, Hyderabad</p>
            </div>
            
            <div className="space-y-6 text-ink-soft leading-relaxed border-t border-line-soft pt-8">
              <p>
                A landmark of modern architecture, Prospera brings a new level of sophistication to Miyapur. Designed with biophilic principles and engineered for efficiency, it stands as our flagship ongoing development.
              </p>
              
              <ul className="grid grid-cols-2 gap-y-6 gap-x-4">
                <li>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Status</div>
                  <div className="text-sm font-medium">Near Possession</div>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Type</div>
                  <div className="text-sm font-medium">Premium Residential</div>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Area</div>
                  <div className="text-sm font-medium">3 & 4 BHK</div>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Completion</div>
                  <div className="text-sm font-medium">Dec 2026</div>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a href="/prospera" className="inline-flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full border border-line-soft flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-all duration-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:text-bone-light transition-colors">
                    <path d="M1 13L13 1M13 1H4.6M13 1V9.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium">View Project</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
