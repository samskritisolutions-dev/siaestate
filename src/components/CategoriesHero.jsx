'use client';

export default function CategoriesHero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden bg-ink">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bronze/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="gutter relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <a href="/" className="text-[10px] uppercase tracking-[0.3em] text-bone-light/40 hover:text-bronze transition-colors">Home</a>
           <span className="w-1 h-1 rounded-full bg-bronze"></span>
           <span className="text-[10px] uppercase tracking-[0.3em] text-bronze font-medium">Divisions</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-bone-light font-light leading-[0.9] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            A Diverse <br />
            <span className="font-display-italic text-bronze">Portfolio of Value.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-end animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
             <p className="text-bone-deep opacity-60 text-lg md:text-xl leading-relaxed max-w-xl">
                From the fertile grounds of our agricultural ventures to the architectural excellence of our real estate projects, we curate assets that stand the test of time.
             </p>
             <div className="hidden md:block w-px h-24 bg-white/10 mx-8"></div>
             <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-bronze">Explore Pillars</span>
                <div className="flex gap-4">
                   <span className="text-bone-light/30 text-sm">01. Agro & Assets</span>
                   <span className="text-bone-light/30 text-sm">02. Real Estate</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
         <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
