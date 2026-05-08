'use client';

export default function AboutHero() {
  return (
    <>
      {/* Banner / Breadcrumb Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-bone-light overflow-hidden">
        <img
          src="images/breadcrumb.jpg"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 gutter text-center" data-reveal>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono mb-4 text-bronze">
            <a href="/" className="hover:text-bone-light transition-colors">Home</a>
            <span className="opacity-50">/</span>
            <span className="text-bone-light">About Us</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-light">
            Our <span className="font-display-italic">Story.</span>
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 gutter bg-bone text-ink">
        <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center">

          {/* Left: Image Composition */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6 flex gap-4 md:gap-6 items-start">
            {/* Large Image */}
            <div className="flex-[1.2] aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[40px] relative gallery-item mt-12 md:mt-20">
              <img
                src="/images/about/about-1.jpg"
                alt="Our Office Main"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Two Smaller Images */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="aspect-square overflow-hidden rounded-xl md:rounded-3xl relative gallery-item">
                <img
                  src="/images/about/about-2.jpg"
                  alt="Our Office Detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl md:rounded-3xl relative gallery-item">
                <img
                  src="/images/about/about-3.jpg"
                  alt="Our Office Detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7" data-reveal>
            <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6 md:mb-8">
              — Since 1996
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 md:mb-10">
              Who <span className="font-display-italic">we are.</span>
            </h2>
            <div className="space-y-6 text-ink-soft leading-relaxed md:text-lg">
              <p>
                With three decades of standing tall, Sia Estates has grown from a visionary developer to a household name in Hyderabad's premium real estate landscape. We don't just build structures; we craft landmarks that redefine the skyline.
              </p>
              <p>
                Our approach is rooted in architectural brilliance and uncompromising quality. Every project we undertake is a promise kept-cast in concrete and preserved in spirit. We are dedicated to creating spaces that foster community and elevate the art of living.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
