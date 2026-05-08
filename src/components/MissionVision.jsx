'use client';

export default function MissionVision() {
  return (
    <section className="py-20 md:py-32 gutter bg-bone text-ink border-t border-line-soft">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Mission */}
        <div className="group" data-reveal>
          <div className="flex items-baseline gap-3 mb-6 md:mb-10">
            <span className="font-mono text-xs text-bronze uppercase tracking-[0.2em]">/ Our Mission</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Building spaces that inspire <span className="font-display-italic">lifelong connections.</span>
          </h2>
          <p className="text-ink-soft leading-relaxed lg:text-lg">
            Our mission is to continually elevate the standards of real estate development. We strive to craft environments that seamlessly blend modern aesthetics with functional design, ensuring that every project we deliver enhances the quality of life for its residents while respecting the natural environment.
          </p>
        </div>

        {/* Vision */}
        <div className="group" data-reveal>
          <div className="flex items-baseline gap-3 mb-6 md:mb-10">
            <span className="font-mono text-xs text-bronze uppercase tracking-[0.2em]">/ Our Vision</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            To be the defining mark of <span className="font-display-italic">architectural excellence.</span>
          </h2>
          <p className="text-ink-soft leading-relaxed lg:text-lg">
            We envision a future where Sia Estates is synonymous with trust, innovation, and unparalleled luxury. By consistently pushing the boundaries of design and engineering, our vision is to create sustainable, future-ready landmarks that stand as lasting legacies for generations to come.
          </p>
        </div>

      </div>
    </section>
  );
}
