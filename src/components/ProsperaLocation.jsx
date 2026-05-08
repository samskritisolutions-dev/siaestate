'use client';

export default function ProsperaLocation() {
  return (
    <section className="py-24 md:py-24 gutter bg-bone text-ink">
      <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center">

        {/* Left: Content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5" data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6 md:mb-8">
            — The Connectivity
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 md:mb-10">
            A location in <br />
            <span className="font-display-italic">prime focus.</span>
          </h2>
          <div className="space-y-6 text-ink-soft leading-relaxed md:text-lg">
            <p>
              Situated in the rapidly evolving corridor of Miyapur, Prospera offers more than just a home-it offers a lifestyle of unparalleled convenience. With direct access to the metro and major arterial roads, your world is always within reach.
            </p>
            <ul className="space-y-4 pt-4 border-t border-line-soft">
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>2 mins to Miyapur Metro Station</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>12 mins to HITEC City</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>18 mins to Financial District</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>8 mins to JNTU University</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>Near top international schools & hospitals</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span>Minutes to Top Malls & Multiplexes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Image Composition */}
        <div className="col-span-12 md:col-span-6 lg:col-span-7 flex gap-4 md:gap-6 items-start">
          {/* Column 1: Two Smaller Images Stacked */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 mt-12 md:mt-12">
            <div className="aspect-[4/5] overflow-hidden rounded-xl md:rounded-3xl relative gallery-item">
              <img
                src="images/prospera/prospera-4.jpg"
                alt="Neighborhood"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl md:rounded-3xl relative gallery-item">
              <img
                src="images/prospera/prospera-2.jpg"
                alt="City Connectivity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Column 2: Large Image + New Image */}
          <div className="flex-[1.1] flex flex-col gap-4 md:gap-6 mt-12 md:mt-12 lg:mt-12">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[40px] relative gallery-item">
              <img
                src="images/prospera/prospera-3.jpg"
                alt="Prospera Main View"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-xl md:rounded-3xl relative gallery-item">
              <img
                src="images/prospera/prospera-1.jpg"
                alt="Skyline View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
