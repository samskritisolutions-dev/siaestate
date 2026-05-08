'use client';

const pillars = [
  {
    num: '01',
    title: 'Uncompromising Quality',
    desc: 'We source only the finest materials and employ stringent quality control measures at every stage of construction, ensuring that every Sia home is built to last a lifetime.',
  },
  {
    num: '02',
    title: 'Absolute Transparency',
    desc: 'From clear legal documentation to straightforward pricing and regular construction updates, we believe in keeping our customers informed and confident throughout their journey.',
  },
  {
    num: '03',
    title: 'Timely Delivery',
    desc: 'Time is your most valuable asset. Our robust project management frameworks and dedicated teams ensure that we meet our commitments and hand over keys exactly when promised.',
  },
  {
    num: '04',
    title: 'Customer Centricity',
    desc: 'Our relationship doesn\'t end at handover. We provide comprehensive post-possession support and facility management to ensure your living experience remains pristine.',
  },
];

export default function ChoiceOfCustomers() {
  return (
    <section className="py-24 md:py-32 gutter bg-ink text-bone-light border-t border-ink">
      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column: Heading */}
        <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
          <div className="sticky top-32">
            <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-5">
              — The Sia Advantage
            </div>
            <h2 className="font-display h-section font-light" data-reveal>
              The choice of <span className="font-display-italic block">customers.</span>
            </h2>
            <p className="mt-8 text-bone-deep opacity-80 leading-relaxed max-w-sm" data-reveal>
              It takes more than bricks and mortar to build a home. It takes a foundation of trust. Here is why thousands of families have chosen to build their futures with Sia Estates.
            </p>
            <div className="mt-12 overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] relative max-w-sm" data-reveal>
              <img
                src="images/about/choice.jpg"
                alt="Happy Home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/10"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Pillars List */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex flex-col border-t border-bone-light/10">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="py-10 md:py-16 border-b border-bone-light/10 grid grid-cols-1 md:grid-cols-12 gap-6 group"
                data-reveal
              >
                <div className="md:col-span-2 text-xs font-mono text-bronze uppercase tracking-[0.2em] mt-2">
                  / {pillar.num}
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-bronze transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-bone-deep opacity-70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
