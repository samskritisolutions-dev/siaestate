'use client';

const categories = [
  {
    id: 'agriculture-assets',
    number: '01',
    title: 'Agriculture & Strategic Assets',
    description: 'From sustainable farming to strategic land banking, we believe in the power of the land. Our diverse portfolio includes agricultural investments and high-value assets that serve as the foundation for future development and legacy.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sustainable Farming', 'Strategic Assets', 'Land Banking', 'Resource Management'],
    accent: 'from-green-900/20 to-transparent'
  },
  {
    id: 'real-estate',
    number: '02',
    title: 'Real Estate & Infrastructure',
    description: 'Architecting the future of urban living. From luxury high-rises to sprawling integrated townships, our real estate portfolio is defined by innovation, quality, and a commitment to creating timeless spaces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['Residential Mastery', 'Commercial Landmarks', 'Urban Planning'],
    accent: 'from-bronze/10 to-transparent'
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 md:py-40 bg-ink overflow-hidden">
      <div className="gutter space-y-32 md:space-y-60">
        {categories.map((cat, i) => (
          <div 
            key={cat.id} 
            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            data-reveal
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
               <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
               <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[40px] border border-white/5 relative z-10">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
               </div>
               {/* Floating number decoration */}
               <div className={`absolute -top-10 ${i % 2 === 1 ? '-right-10' : '-left-10'} font-display text-[12vw] text-white/5 select-none pointer-events-none`}>
                  {cat.number}
               </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-8">
               <div className="space-y-4">
                  <div className="text-bronze text-xs uppercase tracking-[0.3em] overflow-hidden">
                    <div data-line-reveal>Division {cat.number}</div>
                  </div>
                  <h2 className="font-display text-4xl md:text-6xl font-light text-bone-light leading-tight overflow-hidden">
                    {cat.title.split(' & ').map((part, index) => (
                      <span key={index} className="block overflow-hidden">
                        <span data-line-reveal className={index === 1 ? 'font-display-italic block' : 'block'}>
                          {index === 1 ? `& ${part}` : part}
                        </span>
                      </span>
                    ))}
                  </h2>
               </div>

               <p className="text-bone-deep opacity-60 text-lg leading-relaxed max-w-xl" data-reveal>
                  {cat.description}
               </p>

               <div className="flex flex-wrap gap-3" data-reveal>
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-bone-light/40">
                      {tag}
                    </span>
                  ))}
               </div>

               <div className="pt-6">
                  <a 
                    href={`/projects?filter=${cat.id}`}
                    className="inline-flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze transition-all duration-500">
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-bronze group-hover:text-bone-light transition-colors">
                          <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] font-medium text-bone-light group-hover:text-bronze transition-colors">
                       View Portfolio
                    </span>
                  </a>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
