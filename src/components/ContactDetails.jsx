'use client';

const contactInfo = [
  {
    title: 'Visit Us',
    details: ['Plot No. 45, Sia Corporate Tower', 'Financial District, Nanakramguda', 'Hyderabad, Telangana 500032'],
    icon: 'M12 21s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 7.2c0 7.3-8 11.8-8 11.8z'
  },
  {
    title: 'Call Us',
    details: ['+91 95453 22 222'],
    icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
  },
  {
    title: 'Email Us',
    details: ['info@siaestates.com'],
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'
  }
];

export default function ContactDetails() {
  return (
    <section className="py-24 md:py-40 gutter bg-ink text-bone-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-bronze/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="space-y-12 text-center">
        <div className="max-w-3xl mx-auto" data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-4">
            — Our Office
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Visit the <span className="font-display-italic">heart of Sia.</span>
          </h2>
          <p className="text-bone-deep opacity-60 leading-relaxed max-w-xl mx-auto">
            Our doors are always open for visionaries and home-seekers alike. Join us for a coffee at our flagship corporate office in the Financial District.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch" data-reveal>
          {[
            {
              title: 'Corporate Office',
              icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />,
              details: ['Plot No.3,  Ashwini Layout, Road No.70, Jubilee Hils, Hyderabad-500033, Telangana'],
              link: null
            },
            {
              title: 'Direct Call',
              icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
              details: ['+91 95453 22 222'],
              link: 'tel:'
            },
            {
              title: 'Email Us',
              icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
              details: ['info@siaestates.com'],
              link: 'mailto:'
            }
          ].map((card, i) => (
            <div 
              key={i} 
              className="group relative p-8 md:p-10 bg-white/5 rounded-[40px] border border-white/10 overflow-hidden hover:border-bronze/40 transition-all duration-700 min-h-[300px] flex flex-col text-left"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-bronze/10 border border-bronze/20 flex items-center justify-center text-bronze mb-6 group-hover:bg-bronze group-hover:text-bone-light transition-all duration-500">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.icon}
                   </svg>
                </div>

                <h3 className="font-display text-2xl mb-4 tracking-tight">{card.title}</h3>
                
                <div className="space-y-2 mt-2">
                   {card.details.map((line, j) => (
                     card.link ? (
                       <a 
                         key={j} 
                         href={`${card.link}${line.replace(/\s/g, '')}`} 
                         className="block text-lg font-display-italic hover:text-bronze transition-colors"
                       >
                         {line}
                       </a>
                     ) : (
                       <p key={j} className="text-sm opacity-60 leading-relaxed font-light">
                         {line}
                       </p>
                     )
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
