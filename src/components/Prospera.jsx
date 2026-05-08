'use client';

function FallbackImg({ src, fallback, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = fallback;
      }}
    />
  );
}

export default function Prospera() {
  return (
    <section
      id="prospera"
      className="relative bg-ink text-bone-light overflow-hidden"
    >
      <div className="gutter pt-24 md:pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-16">
          <div>
            <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-5">
              — 02 / Featured Project
            </div>
            <h2
              className="font-display h-section font-light max-w-4xl"
              data-reveal
            >
              Indis <span className="font-display-italic">Sia Prospera</span>
            </h2>
          </div>
          <div
            className="max-w-md text-base text-bone-deep opacity-80"
            data-reveal
          >
            <p>
              An exclusive lifestyle launching in Miyapur. Where every
              threshold, every louvre, every shaft of morning light is
              conspired to make a day feel longer in the right way.
            </p>
          </div>
        </div>

        {/* Spec strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-bone/10 py-8 md:py-10 mb-12 md:mb-16">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
              Location
            </div>
            <div className="font-display text-xl md:text-2xl">Miyapur</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
              Configuration
            </div>
            <div className="font-display text-xl md:text-2xl">3 & 4 BHK</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
              Clubhouse
            </div>
            <div className="font-display text-xl md:text-2xl">36,350 sqft</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
              Status
            </div>
            <div className="font-display text-xl md:text-2xl">Near Possession</div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="gutter pb-24 md:pb-32 space-y-24 md:space-y-40">
        {/* Block 1 */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 aspect-[5/3] overflow-hidden gallery-item">
            <FallbackImg
              src="images/hero/feature-project-3.jpg"
              fallback="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85"
              alt="Balcony louvres"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
            <div className="font-mono text-xs text-bronze mb-4">
              / Highlight 01
            </div>
            <h3
              className="font-display text-3xl md:text-4xl font-light leading-tight mb-5"
              data-reveal
            >
              Double the grandeur for an{' '}
              <span className="font-display-italic">elevated lifestyle.</span>
            </h3>
            <p className="text-bone-deep opacity-75 leading-relaxed">
              A grand double&#8209;height lobby beckons residents into a realm
              where every detail is meticulously designed to evoke awe — with
              calm, with light, with proportion.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
            <div className="font-mono text-xs text-bronze mb-4">
              / Highlight 02
            </div>
            <h3
              className="font-display text-3xl md:text-4xl font-light leading-tight mb-5"
              data-reveal
            >
              A symphony in design,
              <br />
              <span className="font-display-italic">a melody in lifestyle.</span>
            </h3>
            <p className="text-bone-deep opacity-75 leading-relaxed mb-6">
              Hotel&#8209;inspired bedrooms with alcoves, clever wardrobe
              spaces, dedicated study areas, and customised TV walls. Doors
              open into your personal haven — never into common areas.
            </p>
            <ul className="text-sm space-y-2.5 text-bone-deep">
              <li className="flex items-baseline gap-3">
                <span className="text-bronze">—</span> Cross&#8209;ventilation
                in most rooms
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-bronze">—</span> Customised TV walls &
                study alcoves
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-bronze">—</span> Privacy&#8209;first door
                planning
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 aspect-[5/3] overflow-hidden gallery-item order-1 lg:order-2">
            <img
              src="images/hero/feature-project-4.jpg"
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 aspect-[5/3] overflow-hidden gallery-item">
            <img
              src="images/hero/feature-project-5.jpg"
              alt="Clubhouse pool"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
            <div className="font-mono text-xs text-bronze mb-4">
              / Highlight 03
            </div>
            <h3
              className="font-display text-3xl md:text-4xl font-light leading-tight mb-5"
              data-reveal
            >
              The epicentre of a{' '}
              <span className="font-display-italic">thriving community.</span>
            </h3>
            <p className="text-bone-deep opacity-75 leading-relaxed">
              A roof&#8209;top pool. Indoor badminton. A supermarket round the
              corner. A banquet hall and a picturesque party lawn. The
              36,350&nbsp;sqft Clubhouse is designed to be the pulse of
              community life.
            </p>
          </div>
        </div>

        {/* Block 4 — Sunrise */}
        <div className="relative">
          <div className="aspect-[16/8] md:aspect-[16/7] overflow-hidden gallery-item">
            <FallbackImg
              src="images/hero/feature-project.webp"
              fallback="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=85"
              alt="Sunrise over Miyapur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-xs text-bronze">
                / Highlight 04
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3
                className="font-display text-3xl md:text-5xl font-light leading-tight mb-5"
                data-reveal
              >
                Prosper with{' '}
                <span className="font-display-italic">every dawn.</span>
              </h3>
              <p className="text-bone-deep opacity-75 leading-relaxed max-w-2xl">
                As the sun rises over Miyapur, so does Indis Sia Prospera. Not
                merely a structure - a revelation of possibilities. With each
                dawn, residents wake into a tapestry of modern living: the
                carefully designed backdrop for a life of fulfilment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="border-t border-bone/10 py-6 md:py-8 gutter">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.2em] opacity-70">
          <div className="flex items-center gap-3">
            <span className="marker"></span> RERA registered
          </div>
          <div>Possession · Phase&nbsp;01 — 2026</div>
          <a href="/images/brochure.pdf" target="_blank" rel="noopener noreferrer" className="link-u">
            Download brochure →
          </a>
        </div>
      </div>
    </section>
  );
}
