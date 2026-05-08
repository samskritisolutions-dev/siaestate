'use client';

import { useState, useEffect } from 'react';

const plansData = {
  'East Facing': [
    { id: '4bhk-3434-e', label: '4BHK', size: '3,434sft', mapId: 'Prospera_4BHK_Maid_East_1', carpet: '2134 sft', plinth: '2748 sft' },
    { id: '4bhk-3252-e', label: '4BHK', size: '3,252sft', mapId: 'Prospera_4BHK_Maid_East', carpet: '2021 sft', plinth: '2602 sft' },
    { id: '3bhk-2424-e', label: '3BHK', size: '2,424sft', mapId: 'Prospera_3BHK_WFH_East', carpet: '1506 sft', plinth: '1939 sft' },
  ],
  'West Facing': [
    { id: '3bhk-2545-w', label: '3BHK', size: '2,545sft', mapId: 'Prospera_3BHK_WFH_West', carpet: '1581 sft', plinth: '2036 sft' },
    { id: '3bhk-2388-w', label: '3BHK', size: '2,388sft', mapId: 'Prospera_3BHK_WFH_West_1', carpet: '1484 sft', plinth: '1910 sft' },
  ]
};

const facingOptions = ['East Facing', 'West Facing'];

export default function ProsperaMasterPlan() {
  const [activeFacing, setActiveFacing] = useState(facingOptions[0]);
  const [activeBhk, setActiveBhk] = useState(plansData[facingOptions[0]][0]);

  // When facing changes, reset to the first available BHK for that facing
  const handleFacingChange = (facing) => {
    setActiveFacing(facing);
    setActiveBhk(plansData[facing][0]);
  };

  return (
    <section className="py-16 md:py-32 gutter bg-ink text-bone-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20" data-reveal>
          <h2 className="font-display text-4xl md:text-7xl font-light leading-tight mb-8">
            masterplan and <br />
            <span className="font-display-italic">floorplans</span>
          </h2>
        </div>

        {/* Interactive Layout Container */}
        <div className="relative border-t border-white/10 pt-8 md:pt-12" data-reveal>
          
          {/* BHK Navigation - Top Horizontal (Scrollable on mobile) */}
          <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-12 mb-10 md:mb-16 ml-0 lg:ml-72 pb-4 md:pb-0">
            {plansData[activeFacing].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveBhk(opt)}
                className={`flex-shrink-0 group flex flex-col items-start transition-all duration-300 ${
                  activeBhk.id === opt.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className={`text-[10px] md:text-sm font-medium tracking-widest uppercase mb-1 ${activeBhk.id === opt.id ? 'text-bronze' : ''}`}>
                  {opt.label} — {opt.size}
                </span>
                <div className={`h-0.5 bg-bronze transition-all duration-500 ${activeBhk.id === opt.id ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></div>
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Facing Navigation - Left Vertical (Compact on mobile) */}
            <div className="flex flex-row lg:flex-col gap-6 md:gap-10 lg:w-72 lg:pt-12 border-b lg:border-b-0 lg:border-l border-white/10 pb-6 lg:pb-0 pl-0 lg:pl-8">
              {facingOptions.map((facing) => (
                <button
                  key={facing}
                  onClick={() => handleFacingChange(facing)}
                  className={`text-left text-lg md:text-3xl font-light transition-all duration-500 relative whitespace-nowrap ${
                    activeFacing === facing ? 'text-bronze' : 'text-white/20 hover:text-white/40'
                  }`}
                >
                  <span className={`absolute lg:block hidden -left-[38px] top-1/2 -translate-y-1/2 text-bronze text-xl transition-all duration-500 ${
                    activeFacing === facing ? 'opacity-100' : 'opacity-0'
                  }`}>
                    +
                  </span>
                  {facing}
                </button>
              ))}
            </div>

            {/* Content Area - Plan View */}
            <div className="flex-1 relative aspect-[4/5] md:aspect-[16/9] lg:aspect-video rounded-2xl md:rounded-[20px] overflow-hidden bg-bone-deep/5 border border-white/10 group shadow-2xl">
               <div className="absolute inset-0 bg-white opacity-[0.03] pointer-events-none"></div>
               
               {/* Map Iframe */}
               <iframe 
                key={activeBhk.id}
                src={`https://indis.co.in/leaflet-map?id=${activeBhk.mapId}`} 
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
                title="Floor Plan View"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Map UI Decorations */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-2 z-20">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-ink/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-bone-light/60 hover:text-bronze cursor-pointer transition-colors text-sm md:text-base">+</div>
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-ink/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-bone-light/60 hover:text-bronze cursor-pointer transition-colors text-sm md:text-base">−</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


