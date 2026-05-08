'use client';

const milestones = [
  {
    year: '1996',
    title: 'The Visionary Inception',
    desc: 'Sia Estates was founded with a singular vision: to bring world-class architectural integrity and uncompromising quality to the Hyderabad skyline.',
  },
  {
    year: '1999',
    title: 'Pandit Narendra Bhavan & Sai Dhamam',
    desc: 'Our first major residential landmarks in Narayanguda and Domalguda, establishing our commitment to quality-focused living.',
  },
  {
    year: '2001',
    title: 'Silver Nest Arcade',
    desc: 'Expanding our Narayanguda footprint with premium spaces that balanced modern design with community needs.',
  },
  {
    year: '2003',
    title: 'Srinivasa Residency',
    desc: 'A significant milestone in Narayanguda, delivering high-quality living spaces that stood the test of time.',
  },
  {
    year: '2006',
    title: 'Sree Mahalakshmi Meadows',
    desc: 'Marking our entry into Lakdikapool with a project that redefined luxury living in the heart of the city.',
  },
  {
    year: '2010',
    title: "Guru S Choice Residency",
    desc: 'Bringing architectural excellence to East Marredpally with meticulously crafted residential units.',
  },
  {
    year: '2013',
    title: 'Sia Serene',
    desc: 'Introducing luxury and serenity to Jubilee Hills, further cementing our status as a premium developer.',
  },
  {
    year: '2016',
    title: 'N-95 Nandagiri Hills',
    desc: 'A masterpiece of contemporary architecture in the prestigious Nandagiri Hills area of Jubilee Hills.',
  },
  {
    year: '2018',
    title: 'Choice Centre & Sia Sky',
    desc: 'Strategic commercial expansion on S.D. Road and premium residential ventures in Jubilee Hills.',
  },
  {
    year: '2024',
    title: 'Sia Estates Phase II & Prospera',
    desc: 'The evolution of our legacy with flagship projects in Kavuri Hills and our next-gen biophilic masterpiece.',
  }
];

export default function LegacyTimeline() {
  return (
    <section className="py-12 md:py-24 gutter bg-bone text-ink overflow-hidden">
      <div className="max-w-4xl mx-auto mb-20 md:mb-32 text-center" data-reveal>
        <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
          — Milestones
        </div>
        <h2 className="font-display text-5xl md:text-8xl font-light">
          A Legacy in <span className="font-display-italic">Motion.</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-line-soft -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24 md:space-y-40">
          {milestones.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                i % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Year Column */}
              <div className="flex-1 text-center md:text-right w-full">
                <div className={`font-display text-6xl md:text-8xl lg:text-9xl font-light text-bronze/20 ${
                   i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`} data-reveal>
                   {item.year}
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-bronze border-4 border-bone hidden md:block" data-reveal></div>

              {/* Content Column */}
              <div className="flex-1 w-full" data-reveal>
                <div className="p-8 md:p-12 bg-bone-light rounded-3xl border border-line-soft hover:border-bronze/30 transition-colors duration-500">
                  <h3 className="font-display text-2xl md:text-3xl mb-4">{item.title}</h3>
                  <p className="text-ink-soft leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
