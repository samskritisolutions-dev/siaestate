'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ScheduleModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    project: 'Indis Sia Prospera'
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const projects = ['Indis Sia Prospera', 'Sia One', 'The Terraces', 'Imperial Heights'];

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/80 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-bone rounded-[10px] md:rounded-[20px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col md:flex-row">
        
        {/* Left: Branding/Visual */}
        <div className="hidden md:block w-1/3 bg-ink relative overflow-hidden">
           <img 
              src="images/popup.jpg" 
              alt="Schedule Visit" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
           <div className="absolute bottom-10 left-8 right-8 text-bone-light">
              <div className="text-bronze text-[10px] uppercase tracking-[0.3em] mb-2">Private Tour</div>
              <h3 className="font-display text-2xl">Experience Sia Estates first-hand.</h3>
           </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 p-8 md:p-12 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-line-soft flex items-center justify-center hover:bg-ink hover:text-bone-light transition-all duration-300 group"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:rotate-90 transition-transform duration-300">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Schedule a Visit</h2>
            <p className="text-sm text-ink-mute">Our executive will guide you through the property of your dreams.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                 <label className="text-[10px] uppercase tracking-widest text-bronze ml-1">Full Name</label>
                 <input 
                   type="text" 
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   className="w-full bg-white/50 border border-line-soft rounded-xl px-4 py-3 focus:outline-none focus:border-bronze transition-colors text-sm"
                   placeholder="Enter your name"
                 />
              </div>
              <div className="space-y-1">
                 <label className="text-[10px] uppercase tracking-widest text-bronze ml-1">Phone Number</label>
                 <input 
                   type="tel" 
                   value={formData.phone}
                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
                   className="w-full bg-white/50 border border-line-soft rounded-xl px-4 py-3 focus:outline-none focus:border-bronze transition-colors text-sm"
                   placeholder="+91"
                 />
              </div>
            </div>

            <div className="space-y-1">
               <label className="text-[10px] uppercase tracking-widest text-bronze ml-1">Preferred Project</label>
               <div className="relative">
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white/50 border border-line-soft rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer focus:border-bronze transition-all"
                  >
                    <span className="text-sm">{formData.project}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                       <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#A68966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-ink text-bone-light rounded-xl overflow-hidden shadow-2xl z-50 animate-in slide-in-from-top-2 duration-300">
                      {projects.map((p) => (
                        <div 
                          key={p}
                          onClick={() => {
                            setFormData({...formData, project: p});
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-3 text-sm hover:bg-bronze hover:text-white transition-colors cursor-pointer border-b border-white/5 last:border-0"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>

            <div className="space-y-1">
               <label className="text-[10px] uppercase tracking-widest text-bronze ml-1">Select Date</label>
               <input 
                 type="date" 
                 value={formData.date}
                 onChange={(e) => setFormData({...formData, date: e.target.value})}
                 className="w-full bg-white/50 border border-line-soft rounded-xl px-4 py-3 focus:outline-none focus:border-bronze transition-colors text-sm"
               />
            </div>

            <button type="button" className="w-full bg-ink text-bone-light rounded-xl py-4 flex items-center justify-center gap-4 group hover:bg-bronze transition-all duration-500 mt-4">
              <span className="text-xs uppercase tracking-[0.3em] font-medium">Confirm Appointment</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-2 transition-transform">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>,
    document.body
  );
}
