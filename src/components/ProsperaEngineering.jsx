'use client';

const engineeringPoints = [
  {
    title: 'Pre-cast Technology',
    desc: 'Precision-engineered components manufactured in controlled environments for superior structural integrity and faster delivery.',
    icon: '01'
  },
  {
    title: 'Seismic Resistance',
    desc: 'Built to exceed standard safety requirements, ensuring your home remains a safe haven for generations.',
    icon: '02'
  },
  {
    title: 'Smart Water Systems',
    desc: 'Advanced water management and recycling systems integrated into the core architecture of the community.',
    icon: '03'
  }
];

export default function ProsperaEngineering() {
  return (
    <section className="py-24 md:py-32 gutter bg-bone text-ink">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24" data-reveal>
        <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
          — Indis Standards
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">
          Engineering <span className="font-display-italic">Precision.</span>
        </h2>
        <p className="text-ink-soft leading-relaxed opacity-80 mx-auto max-w-2xl">
          We don't just build homes; we engineer experiences. Every beam, joint, and conduit is placed with meticulous attention to detail and a commitment to innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {engineeringPoints.map((point, i) => (
          <div 
            key={i} 
            className="p-8 md:p-10 bg-bone-light rounded-3xl border border-line-soft hover:border-bronze/30 transition-all duration-500 group"
            data-reveal
          >
            <div className="text-bronze font-mono text-xs mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-bronze/30"></span>
              {point.icon}
            </div>
            <h3 className="font-display text-2xl mb-4 group-hover:text-bronze transition-colors duration-500">
              {point.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-mute opacity-80">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
