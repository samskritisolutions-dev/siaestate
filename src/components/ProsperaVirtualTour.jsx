'use client';

export default function ProsperaVirtualTour() {
  return (
    <section className="py-24 md:py-32 gutter bg-ink text-bone-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-bronze/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24" data-reveal>
        <div className="text-bronze text-xs uppercase tracking-[0.3em] mb-6">
          — Experience Prospera
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
          360° <span className="font-display-italic">Virtual Tour.</span>
        </h2>
        <p className="mt-8 text-bone-deep opacity-70 leading-relaxed max-w-xl mx-auto">
          Step inside your future home. Explore every corner of Indis Sia Prospera with our immersive virtual experience.
        </p>
      </div>

      <div className="relative aspect-video w-full rounded-2xl md:rounded-[0px] overflow-hidden border border-bone-light/10 shadow-2xl group" data-reveal>
        <iframe 
          src="https://indis.co.in/content/virtual-tours/prospera-v1/index.htm" 
          className="absolute inset-0 w-full h-full"
          title="Prospera Virtual Tour"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        
        {/* Decorative Overlay for interaction hint */}
        <div className="absolute top-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="bg-ink/60 backdrop-blur-md px-4 py-2 rounded-full border border-bone-light/20 text-[10px] uppercase tracking-widest">
              Interactive View
           </div>
        </div>
      </div>
    </section>
  );
}
