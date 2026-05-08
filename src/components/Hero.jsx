'use client';

const heroImages = [
  {
    src: '/images/hero/hero-section-image.webp',
    fallback: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85',
  },
  {
    src: '/images/hero/2.jpg',
    fallback: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
  },
  {
    src: '/images/hero/3.jpg',
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  },
];

export default function Hero() {
  const mainImage = heroImages[0];

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <div className="hero-img-wrap absolute inset-0">
        <div className="absolute inset-0 opacity-100">
          <img
            src={mainImage.src}
            alt="Indis Sia Hero"
            className="w-full h-full object-cover scale-105 animate-slow-pan"
            onError={(e) => {
              e.currentTarget.src = mainImage.fallback;
            }}
          />
        </div>
        <div className="absolute inset-0 hero-grad z-10"></div>
      </div>

      {/* Top meta strip */}
      <div className="absolute top-0 left-0 right-0 pt-28 md:pt-32 gutter z-10">
        <div className="flex items-center justify-between text-bone-light text-[10px] md:text-[11px] tracking-[0.25em] uppercase opacity-80">
          <span className="flex items-center gap-3">
            <span className="marker"></span> Near Possession · Indis Sia Prospera
          </span>
          <span className="hidden md:flex items-center gap-3">
            Miyapur · Hyderabad <span className="marker"></span>
          </span>
        </div>
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex items-center md:items-end pt-32 pb-24 md:pb-32 z-10">
        <div className="gutter w-full text-bone-light">
          <h1 className="font-display h-hero font-light max-w-[1300px]">
            <span className="reveal-line">
              <span data-hero-line>Building the</span>
            </span>
            <span className="reveal-line block">
              <span data-hero-line>
                <span className="font-display-italic">promises of tomorrow</span>.
              </span>
            </span>
          </h1>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p
              className="max-w-md text-sm md:text-base leading-relaxed opacity-85"
              data-hero-fade
            >
              A legacy of 30&#8209;plus years revolutionizing how Hyderabad
              lives one meticulously crafted address at a time.
            </p>
            <div className="flex items-center gap-4" data-hero-fade>
              <a
                href="/#prospera"
                className="btn-ink magnetic"
                data-cursor
              >
                Explore Prospera
                <svg
                  className="arrow"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                >
                  <path
                    d="M1 5h14m0 0L11 1m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

