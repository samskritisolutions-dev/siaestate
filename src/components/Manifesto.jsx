export default function Manifesto() {
  return (
    <section id="about" className="gutter py-24 md:py-40 stripe-bg">
      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-32">
            <div className="text-bronze text-xs uppercase tracking-[0.25em] font-medium mb-6">
              — 01 / Manifesto
            </div>
            <div className="text-xs text-ink-mute uppercase tracking-[0.2em]">
              Hyderabad
            </div>
            <div className="font-mono text-xs text-ink-mute mt-1">
              17.4239° N, 78.4026° E
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <h2
            className="font-display h-section font-light max-w-5xl"
            data-reveal
          >
            Sia Estates is a{' '}
            <span className="font-display-italic squiggle">promise</span>
            <br />
            of superior quality cast
            <br />
            in concrete, kept in spirit.
          </h2>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
            <div data-reveal>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-mono text-xs text-bronze">/ 01</span>
                <h3 className="font-display text-2xl md:text-3xl">
                  Who we are
                </h3>
              </div>
              <p className="text-ink-soft leading-relaxed text-base md:text-lg">
                We stand as a testament to meticulous planning and thoughtful
                execution - building a robust industry presence over two
                exemplary decades. Real estate, but with reverence for the
                people who eventually call it home.
              </p>
            </div>
            <div data-reveal>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-mono text-xs text-bronze">/ 02</span>
                <h3 className="font-display text-2xl md:text-3xl">
                  What we do
                </h3>
              </div>
              <p className="text-ink-soft leading-relaxed text-base md:text-lg">
                Expansive, prestigious projects - meticulously curated to
                provide unparalleled comfort and functionality. We sweat the
                elevation, the thresholds, the cross&#8209;ventilation. The
                ordinary, executed extraordinarily.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 md:mt-32 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
            <div className="py-10 md:py-12 pr-4 md:pr-8 border-r border-b lg:border-b-0 border-line group">
              <div
                className="font-display stat-num text-5xl md:text-7xl font-light"
                data-counter
                data-target="30"
              >
                0
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink-mute mt-3 opacity-70">
                Years standing
              </div>
            </div>
            <div className="py-10 md:py-12 pl-6 md:px-8 border-b lg:border-b-0 lg:border-r border-line">
              <div
                className="font-display stat-num text-5xl md:text-7xl font-light"
                data-counter
                data-target="15"
              >
                0
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink-mute mt-3 opacity-70">
                Projects delivered
              </div>
            </div>
            <div className="py-10 md:py-12 pr-4 md:px-8 border-r border-line">
              <div
                className="font-display stat-num text-5xl md:text-7xl font-light"
                data-counter
                data-target="2.4"
                data-suffix="M"
              >
                0
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink-mute mt-3 opacity-70">
                Sq.ft. constructed
              </div>
            </div>
            <div className="py-10 md:py-12 pl-6 md:pl-8">
              <div
                className="font-display stat-num text-5xl md:text-7xl font-light"
                data-counter
                data-target="3000"
                data-suffix="+"
              >
                0
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ink-mute mt-3 opacity-70">
                Happy Families
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
