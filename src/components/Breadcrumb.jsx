'use client';

export default function Breadcrumb({ title, bgImage }) {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-bone-light overflow-hidden bg-ink">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </>
      )}
      
      <div className="relative z-10 gutter text-center">
        <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono mb-4 text-bronze overflow-hidden">
          <div data-line-reveal>
            <a href="/" className="hover:text-bone-light transition-colors">Home</a>
            <span className="opacity-50 mx-1">/</span>
            <span className="text-bone-light">{title}</span>
          </div>
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-light overflow-hidden">
          <div data-line-reveal>
            {title.split(' ').map((word, i) => (
              i === 1 ? <span key={i} className="font-display-italic"> {word}</span> : word
            ))}
          </div>
        </h1>
      </div>
    </section>
  );
}
