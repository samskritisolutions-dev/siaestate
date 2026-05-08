'use client';

const stats = [
  { label: 'Years standing', target: 30, suffix: '+' },
  { label: 'Projects delivered', target: 15, suffix: '' },
  { label: 'Sq.ft. constructed', target: 2.4, suffix: 'M' },
  { label: 'Happy Families', target: 3000, suffix: '+' },
];

export default function LegacyStats() {
  return (
    <section className="py-12 md:py-12 gutter bg-ink text-bone-light">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center" data-reveal>
            <div 
              className="font-display text-5xl md:text-7xl lg:text-8xl text-bronze mb-4"
              data-counter
              data-target={stat.target}
              data-suffix={stat.suffix}
            >
              0
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-50 font-mono">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
