'use client';

const leaders = [
  {
    name: 'Buchireddy Malathi Reddy',
    role: 'Director',
    image: 'images/women.webp',
  },
  {
    name: 'Shahidhar Reddy Buchireddy',
    role: 'Managing Director',
    image: '/images/men.webp',
  },
  {
    name: 'Chaitanya Bhaargava Buchireddy',
    role: 'Additional Director',
    image: '/images/men.webp',
  },
];

export default function LegacyLeadership() {
  return (
    <section className="py-24 md:py-32 gutter bg-bone text-ink">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — Leadership
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            The Visionaries <br />
            <span className="font-display-italic">behind Sia.</span>
          </h2>
        </div>
        <p className="max-w-md text-ink-soft opacity-70 leading-relaxed" data-reveal>
          Guided by two decades of wisdom and a relentless drive for innovation, our leadership team ensures that every Sia project is a masterpiece of execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {leaders.map((person, i) => (
          <div key={i} className="group" data-reveal>
            <div className="aspect-[3/4] overflow-hidden rounded-[30px] md:rounded-[50px] mb-8 relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 opacity-30 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl mb-2">{person.name}</h3>
              <p className="text-bronze font-mono text-[10px] uppercase tracking-[0.2em]">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
