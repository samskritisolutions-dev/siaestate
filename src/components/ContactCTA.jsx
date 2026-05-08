'use client';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 gutter">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — 07 / Begin the conversation
          </div>
          <h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]"
            data-reveal
          >
            Crafted Spaces
            <br />
            <span className="font-display-italic">Ready to Experience.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 self-end mt-8 lg:mt-0">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-ink-mute mb-2">
                Visit
              </div>
              <p className="text-base">
                Plot No. 3, Ashwini Layout,
                <br />
                Road No. 70, Jubilee Hils, Hyderabad-500033, Telangana
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-ink-mute mb-2">
                Reach
              </div>
              <p className="text-base">
                info@siaestates.com
                <br />
                +91 95453 22 222
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => window.dispatchEvent(new Event('openScheduleModal'))}
                className="btn-ink magnetic"
                data-cursor
              >
                Schedule a visit
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
              </button>
              <a href="/images/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost" data-cursor>
                Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
