'use client';

const categories = [
  {
    num: '01',
    title: ['Sia', 'Agro & Properties'],
    italicFirst: false,
    detail: 'Sustainable farming & premium living spaces',
    desc: 'From the fertile grounds of our agricultural ventures to the architectural excellence of our residential properties, we create value that harmonises with nature and defines luxury.',
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
    link: '#agro-properties',
  },
  {
    num: '02',
    title: ['Sia', 'Real Estate'],
    italicFirst: false,
    detail: 'Strategic land banking & development',
    desc: 'Identifying potential before it becomes obvious. Our real estate division focuses on acquiring premium land parcels and developing them strategically for exceptional future value.',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    link: '#real-estate',
  },
];

export default function Upcoming() {
  return (
    <section className="py-24 md:py-24 gutter relative">
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-32">
        <div className="col-span-12 lg:col-span-7">
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-5">
            — 05 / On the horizon
          </div>
          <h2 className="font-display h-section font-light" data-reveal>
            Land. Legacy. Vision.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 self-end">
          <p className="text-ink-soft leading-relaxed" data-reveal>
            Meticulously curated ventures shaping the future of integrated living and sustainable growth. From expansive agricultural landscapes to strategically positioned residential and commercial land banks, every development is envisioned to create long-term value and environmental harmony.
          </p>
        </div>
      </div>

      <div className="relative pb-24 md:pb-24">
        {categories.map((c, i) => (
          <div
            key={i}
            className="sticky w-full h-[70vh] md:h-[85vh] rounded-3xl md:rounded-[40px] overflow-hidden mb-12 md:mb-32 last:mb-0 shadow-2xl origin-top"
            style={{
              top: `calc(15vh + ${i * 40}px)`,
              zIndex: i * 10,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={c.src}
                alt={c.title.join(' ')}
                className="w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"></div>
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between text-bone-light">
              <div className="flex justify-between items-start">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono opacity-80 backdrop-blur-md bg-ink/30 px-4 py-2 rounded-full border border-bone-light/20">
                  Division / {c.num}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-7">
                  <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-bronze mb-3 md:mb-5">
                    {c.detail}
                  </div>
                  <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8">
                    {c.italicFirst ? (
                      <>
                        <span className="font-display-italic">{c.title[0]}</span>{' '}
                        {c.title[1]}
                      </>
                    ) : (
                      <>
                        {c.title[0]}{' '}
                        <span className="font-display-italic">{c.title[1]}</span>
                      </>
                    )}
                  </h3>
                  <a
                    href={c.link}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-bone-light/30 hover:bg-bone-light hover:text-ink transition-colors duration-300 text-xs tracking-[0.2em] uppercase backdrop-blur-md bg-ink/10"
                    data-cursor
                  >
                    Explore {c.title[1]}
                    <span className="text-bronze">→</span>
                  </a>
                </div>
                <div className="md:col-span-4 md:col-start-9 hidden md:block">
                  <p className="text-sm lg:text-base leading-relaxed opacity-80 backdrop-blur-md bg-ink/20 p-6 rounded-2xl border border-bone-light/10">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
