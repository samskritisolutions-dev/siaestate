'use client';

import { useState } from 'react';

export default function ContactContent() {
  const [selectedProject, setSelectedProject] = useState('Interested Project');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = ['Indis Sia Prospera', 'Sia One', 'The Terraces', 'Imperial Heights'];

  return (
    <section className="py-24 md:py-32 gutter bg-bone text-ink">
      <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
        
        {/* Left: Image */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6" data-reveal>
          <div className="aspect-[3/4] overflow-hidden rounded-[30px] md:rounded-[60px] shadow-2xl relative">
            <img
              src="images/contact/1.jpg"
              alt="Our Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-bronze/10 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:pt-12" data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — Inquiry Form
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-12">
            Send us a <span className="font-display-italic">message.</span>
          </h2>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-line-soft py-4 focus:outline-none focus:border-bronze transition-colors placeholder:text-ink-mute text-sm"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-line-soft py-4 focus:outline-none focus:border-bronze transition-colors placeholder:text-ink-mute text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-line-soft py-4 focus:outline-none focus:border-bronze transition-colors placeholder:text-ink-mute text-sm"
                />
              </div>
              
              {/* Custom Styled Dropdown */}
              <div className="relative group">
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full border-b border-line-soft py-4 cursor-pointer flex justify-between items-center group transition-colors hover:border-bronze"
                >
                  <span className={`text-sm ${selectedProject === 'Interested Project' ? 'text-ink-mute' : 'text-ink'}`}>
                    {selectedProject}
                  </span>
                  <svg 
                    width="10" height="6" viewBox="0 0 10 6" fill="none" 
                    className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-bone border border-line-soft rounded-2xl shadow-2xl mt-2 z-20 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {projects.map((project, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          setSelectedProject(project);
                          setIsDropdownOpen(false);
                        }}
                        className="px-6 py-3 text-sm hover:bg-bronze hover:text-bone-light transition-colors cursor-pointer"
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative group">
              <textarea 
                placeholder="Your Message"
                rows="4"
                className="w-full bg-transparent border-b border-line-soft py-4 focus:outline-none focus:border-bronze transition-colors placeholder:text-ink-mute text-sm resize-none"
              ></textarea>
            </div>

            <button type="button" className="group flex items-center gap-6 mt-12 transition-all">
              <span className="w-16 h-16 rounded-full bg-ink text-bone-light flex items-center justify-center group-hover:bg-bronze transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 18L18 2M18 2H6.6M18 2V13.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-xs uppercase tracking-[0.3em] font-medium border-b border-transparent group-hover:border-bronze transition-all">
                Send Inquiry
              </span>
            </button>
          </form>

          {/* Social Presence in whitespace */}
          <div className="mt-20 pt-12 border-t border-line-soft">
             <div className="text-bronze text-[10px] uppercase tracking-[0.3em] mb-8">Follow Our Journey</div>
             <div className="flex gap-4">
                {[
                  { name: 'Instagram', url: 'https://instagram.com/siaestates', icon: 'M17.5,2.5H6.5C4.3,2.5,2.5,4.3,2.5,6.5v11c0,2.2,1.8,4,4,4h11c2.2,0,4-1.8,4-4v-11C21.5,4.3,19.7,2.5,17.5,2.5z M19.5,17.5c0,1.1-0.9,2-2,2h-11c-1.1,0-2-0.9-2-2v-11c0-1.1,0.9-2,2-2h11c1.1,0,2,0.9,2,2V17.5z M12,7.5c-2.5,0-4.5,2-4.5,4.5 s2,4.5,4.5,4.5s4.5-2,4.5-4.5S14.5,7.5,12,7.5z M12,14.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S13.4,14.5,12,14.5z M17.5,6c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8S17.9,6,17.5,6z' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/company/siaestates', icon: 'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H6.5v-7H9V17z M7.8,8.9 c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4C9.2,8.3,8.5,8.9,7.8,8.9z M18,17h-2.5v-3.5c0-0.8-0.7-1.5-1.5-1.5 s-1.5,0.7-1.5,1.5V17H10v-7h2.5v1c0.5-0.7,1.4-1.2,2.3-1.2c1.7,0,3.2,1.3,3.2,3.2V17z' },
                  { name: 'Facebook', url: 'https://facebook.com/siaestates', icon: 'M18,3H6C4.3,3,3,4.3,3,6v12c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3V6C21,4.3,19.7,3,18,3z M17,11h-3v8h-3v-8H9V8h2V7 c0-1.7,1.3-3,3-3h3v3h-3c-0.6,0-1,0.4-1,1v1h3V11z' },
                  { name: 'Twitter', url: 'https://twitter.com/siaestates', icon: 'M21,6.5c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1.1,1.5-1.9c-0.6,0.4-1.3,0.7-2.1,0.8C18,5.4,17.2,5,16.3,5 c-1.7,0-3.1,1.4-3.1,3.1c0,0.2,0,0.5,0.1,0.7c-2.6-0.1-4.9-1.4-6.4-3.2C6.6,6.1,6.5,6.5,6.5,7c0,1.1,0.6,2,1.4,2.6 c-0.5,0-1-0.2-1.4-0.4c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.5,2.1,2.8,2.1 c-1,0.8-2.3,1.3-3.7,1.3c-0.2,0-0.5,0-0.7,0c1.4,0.9,3,1.4,4.7,1.4c5.7,0,8.8-4.7,8.8-8.8c0-0.1,0-0.3,0-0.4C20,7.7,20.5,7.1,21,6.5z' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-line-soft flex items-center justify-center hover:bg-ink hover:text-bone-light transition-all duration-500 group"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                       <path d={social.icon} />
                    </svg>
                  </a>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
