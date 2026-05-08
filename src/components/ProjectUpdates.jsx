'use client';

const updates = [
  {
    src: 'images/cons/1.jpg',
    num: '01',
  },
  {
    src: 'images/cons/2.jpg',
    num: '02',
  },
  {
    src: 'images/cons/11.jpeg',
    num: '03',
  },
  {
    src: 'images/cons/8.jpeg',
    num: '04',
  },
  {
    src: 'images/cons/3.jpg',
    num: '05',
  },
  {
    src: 'images/cons/10.jpeg',
    num: '06',
  },
  {
    src: 'images/cons/9.jpeg',
    num: '07',
  },
];

export default function ProjectUpdates() {
  return (
    <section id="updates" className="gutter py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-4">
            — 03 / Live from site
          </div>
          <h2 className="font-display h-section font-light" data-reveal>
            On site,{' '}
            <span className="font-display-italic">May 2026.</span>
          </h2>
        </div>
        <p className="max-w-md text-ink-soft" data-reveal>
          Construction notes, transparent and unfiltered. Because trust is
          built one slab at a time.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {updates.map((u) => (
          <div
            key={u.num}
            className={`gallery-item aspect-square`}
          >
            <img
              src={u.src}
              alt={`Update ${u.num}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = u.fallback;
              }}
            />
            <span className="gallery-num">/ {u.num}</span>
          </div>
        ))}

        <div className="gallery-item aspect-square bg-ink text-bone-light flex items-center justify-center p-6">
          <a href="/projects" className="text-center group" data-cursor>
            <div className="font-display text-3xl md:text-4xl mb-3">
              <span className="font-display-italic">+ 11</span> more
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70 has-caret">
              View projects
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
