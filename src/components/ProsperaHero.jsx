'use client';

export default function ProsperaHero() {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-bone-light overflow-hidden">
      <img
        src="images/breadcrumb.jpg"
        alt="Prospera Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 gutter text-center" data-reveal>
        <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono mb-4 text-bronze">
          <a href="/" className="hover:text-bone-light transition-colors">Home</a>
          <span className="opacity-50">/</span>
          <span className="text-bone-light">Indis Sia Prospera</span>
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-light">
          Indis Sia Prospera <span className="font-display-italic">-Miyapur.</span>
        </h1>
      </div>
    </section>
  );
}
