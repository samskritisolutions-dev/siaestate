"use client";

export default function ContactMap() {
  return (
    <section className="bg-bone relative">
      <div className="gutter py-24 md:py-32">
        <div
          className="relative w-full aspect-video rounded-[10px] md:rounded-[20px] overflow-hidden border border-line-soft shadow-2xl bg-bone-deep"
          data-reveal
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1XDLSJj1rJwAj8PjDJeVIfaMatm3ufn2L&ehbc=2E312F"
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            title="Sia Estates Office Location"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute bottom-10 left-10 hidden md:block">
            <div className="bg-ink/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-bone-light">
              <div className="text-bronze text-[10px] uppercase tracking-widest mb-1">
                Office Location
              </div>
              <div className="text-sm">Financial District, Hyderabad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
