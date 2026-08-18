import React from 'react';
import { INTRO_IMAGE } from '../data/hotelData';
import { Compass, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface IntroSectionProps {
  onDiscoverClick: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onDiscoverClick }) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:pr-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sri Lankan Tropical Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-[#003527] leading-tight">
            A Stay Designed Around You
          </h2>

          <p className="text-[#404944] text-base md:text-lg leading-relaxed">
            Nestled in the heart of Sri Lanka's lush landscapes, Royal Place offers a sanctuary of refined luxury. Every detail is curated to provide a tactile, serene experience that balances modern comfort with authentic local charm.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#064e3b]/10 text-[#064e3b]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#003527]">Secluded Estate</h4>
                <p className="text-xs text-[#404944] mt-0.5">Private 40-acre rainforest reserve</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#064e3b]/10 text-[#064e3b]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#003527]">Bespoke Butler</h4>
                <p className="text-xs text-[#404944] mt-0.5">24/7 dedicated personal service</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              id="discover-royal-place-btn"
              onClick={onDiscoverClick}
              className="inline-flex items-center gap-2 bg-transparent border border-[#735c00] text-[#003527] rounded-[4px] px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-[#735c00]/10 transition-colors cursor-pointer active:scale-98"
            >
              <Compass className="w-4 h-4 text-[#735c00]" />
              <span>Discover Royal Place</span>
            </button>
          </div>
        </div>

        {/* Meticulously Composed Image Frame */}
        <div className="relative h-[420px] sm:h-[480px] md:h-[560px] w-full rounded-lg overflow-hidden ambient-shadow subsurface-border group">
          <img
            src={INTRO_IMAGE}
            alt="Royal Place luxury suite with pristine ivory linens and tropical jungle panorama"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003527]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 bg-[#FFFDF5]/90 backdrop-blur-md p-3.5 rounded-md border border-[#064e3b]/10 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#003527]">Sanctuary Master Suite</p>
              <p className="text-[11px] text-[#404944]">Uninterrupted valley mist & rainforest canopy</p>
            </div>
            <span className="text-xs font-bold text-[#735c00] bg-[#fed65b]/20 px-2 py-0.5 rounded">
              Curated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
