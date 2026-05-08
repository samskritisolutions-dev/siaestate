'use client';

import { 
  Building, 
  Waves, 
  Leaf, 
  Dumbbell, 
  Laptop, 
  Film, 
  Trophy, 
  Sparkles, 
  Rocket 
} from 'lucide-react';
import AnimateIcon from './AnimateIcon';

const amenities = [
  { 
    title: 'Sky Clubhouse', 
    category: 'Social', 
    icon: <Building />,
    animation: 'bounce',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Infinity Edge Pool', 
    category: 'Wellness', 
    icon: <Waves />,
    animation: 'pulse',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Biophilic Gardens', 
    category: 'Nature', 
    icon: <Leaf />,
    animation: 'rotate',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'High-Tech Gym', 
    category: 'Fitness', 
    icon: <Dumbbell />,
    animation: 'bounce',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Co-working Pods', 
    category: 'Business', 
    icon: <Laptop />,
    animation: 'pulse',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Private Theater', 
    category: 'Leisure', 
    icon: <Film />,
    animation: 'rotate',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Sports Arena', 
    category: 'Activity', 
    icon: <Trophy />,
    animation: 'bounce',
    image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Zen Deck', 
    category: 'Relaxation', 
    icon: <Sparkles />,
    animation: 'pulse',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    title: 'Adventure Zone', 
    category: 'Kids', 
    icon: <Rocket />,
    animation: 'shake',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80'
  },
];

export default function ProsperaAmenities() {
  return (
    <section className="py-24 md:py-32 gutter bg-bone text-ink overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div data-reveal>
          <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-6">
            — The Lifestyle
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Luxury in every <br />
            <span className="font-display-italic">dimension.</span>
          </h2>
        </div>
        <p className="max-w-md text-ink-soft opacity-70 leading-relaxed" data-reveal>
          From high-altitude social spaces to ground-level sanctuaries, Prospera is designed to cater to every facet of your modern life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line-soft">
        {amenities.map((item, i) => (
          <div 
            key={i} 
            className="relative p-10 md:p-16 border-b border-r border-line-soft text-bone-light transition-all duration-700 group cursor-default overflow-hidden min-h-[380px] md:min-h-[480px] flex flex-col justify-end"
            data-reveal
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-100 transition-all duration-700 scale-100">
               <img 
                 src={item.image} 
                 alt={item.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-ink/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-12">
                 <div className="text-bronze text-xs uppercase tracking-[0.25em] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.category}
                 </div>
                 <div className="text-bronze group-hover:text-bone-light transition-all duration-500 transform group-hover:-translate-y-2">
                    <AnimateIcon animation={item.animation} size={48}>
                       {item.icon}
                    </AnimateIcon>
                 </div>
              </div>
              <h3 className="font-display text-2xl md:text-5xl leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
