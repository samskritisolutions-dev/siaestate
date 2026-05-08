const features = [
  {
    num: '01',
    title: ['Eco\u2011friendly &', 'sustainable'],
    body: 'Every detail is designed to harmonise with the environment - homes that not only stand the test of time but contribute to a healthier planet.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 5 C 12 14, 12 22, 20 35 C 28 22, 28 14, 20 5 Z" />
        <path d="M20 5 V 35" />
      </svg>
    ),
  },
  {
    num: '02',
    title: ['Superior quality', 'assurance'],
    body: 'Precision in craftsmanship that redefines the standard of excellence - your investment, built on a foundation of enduring value.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="20" r="14" />
        <path d="M14 20 l 4 4 l 8 -8" />
      </svg>
    ),
  },
  {
    num: '03',
    title: ['Spacious & thoughtful', 'floor plans'],
    body: 'A perfect blend of space and considered design - homes that seamlessly integrate comfort and functionality, beyond compare.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="28" height="28" />
        <line x1="6" y1="20" x2="34" y2="20" />
        <line x1="20" y1="6" x2="20" y2="34" />
      </svg>
    ),
  },
  {
    num: '04',
    title: ['Cost\u2011effective', 'investment'],
    body: 'Affordability meets quality - a smart, secure, rewarding future in real estate that aligns with your financial goals.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 32 L 16 22 L 22 26 L 32 12" />
        <path d="M26 12 L 32 12 L 32 18" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      id="projects"
      className="bg-bone-deep py-24 md:py-32 gutter relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-bronze opacity-[0.05] blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sage opacity-[0.06] blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-5">
              — 04 / Why Sia
            </div>
            <h2 className="font-display h-section font-light" data-reveal>
              Projects in{' '}
              <span className="font-display-italic">prime locations.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-ink-soft leading-relaxed" data-reveal>
              A distinguished real estate company with a rich legacy -
              consistently pushing the boundaries of innovation. Renowned for
              our commitment to excellence, we meticulously select prime
              locations to bring our vision to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {features.map((f) => (
            <div
              key={f.num}
              className="feat-card bg-bone-deep p-8 md:p-12 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-12 md:mb-20">
                <span className="feat-num font-mono text-xs text-bronze">
                  / {f.num}
                </span>
                {f.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
                {f.title[0]}{' '}
                <span className="font-display-italic">{f.title[1]}</span>
              </h3>
              <div className="feat-divider h-px w-12 bg-line my-5"></div>
              <p className="text-sm md:text-base leading-relaxed opacity-80">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
