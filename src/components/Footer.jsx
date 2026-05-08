const exploreLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/prospera', label: 'Prospera' },
  { href: '/legacy', label: 'Legacy' },
];

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Disclaimer' },
  { href: '#', label: 'RERA' },
  { href: '#', label: 'Careers' },
];

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'YouTube' },
];

const marqueeItems = [
  'Made in Hyderabad',
  'Promises kept since 1996',
  'RERA Registered',
  'Indis Sia Prospera · Near Possession',
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone-light pt-20 md:pt-24 pb-8 gutter">
      <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <img
            src="images/sia-white-logo.png"
            alt="Sia Estates"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain mb-6"
          />
          <p className="text-sm text-bone-deep opacity-75 leading-relaxed max-w-sm">
            Building the promises of tomorrow, today. With three decades of excellence, Sia Estates is dedicated to crafting premium spaces that harmonise design, comfort, and legacy.
          </p>
        </div>

        {/* Spacer for desktop to push nav items right */}
        <div className="hidden lg:block lg:col-span-2"></div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.25em] text-bronze mb-5">
            Explore
          </div>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="link-u" data-cursor>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.25em] text-bronze mb-5">
            Legal
          </div>
          <ul className="space-y-3 text-sm">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="link-u" data-cursor>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.25em] text-bronze mb-5">
            Follow
          </div>
          <ul className="space-y-3 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="link-u" data-cursor>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-bone/10 py-3 mb-10">
        <div className="marquee-track text-xs uppercase tracking-[0.3em] opacity-70">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="flex items-center gap-10 pr-10"
              aria-hidden={row === 1 || undefined}
            >
              {marqueeItems.map((text, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span>{text}</span>
                  <span className="text-bronze">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-bone-deep opacity-60">
        <span>© 2026 Sia Estates. All rights reserved.</span>
        <span>Crafted with care · Samskriti</span>
      </div>
    </footer>
  );
}
