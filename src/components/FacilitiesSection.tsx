import React from 'react';
import { FACILITIES } from '../data/hotelData';
import { Sparkles, Clock, Check } from 'lucide-react';

interface FacilitiesSectionProps {
  onExploreFacilities: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onExploreFacilities }) => {
  return (
    <section id="facilities-section" className="py-24 bg-[#eff4ff]/40 px-6 md:px-12 border-t border-[#064e3b]/8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sanctuary Amenities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#003527] mb-3">
            Holistic Facilities &amp; Escapes
          </h2>
          <p className="text-[#404944] text-base md:text-lg max-w-2xl mx-auto">
            Immerse yourself in regenerative therapies, suspended infinity waters, and untouched highland wilderness.
          </p>
        </div>

        {/* 3-Column Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg overflow-hidden subsurface-border ambient-shadow group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden framed-image">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#003527]/85 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-medium">
                    {facility.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#003527] mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-[#404944] leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#735c00] font-medium mb-4 bg-[#fed65b]/15 px-2.5 py-1 rounded w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{facility.timings}</span>
                  </div>

                  <div className="space-y-1.5 border-t border-[#064e3b]/8 pt-3">
                    {facility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#003527]">
                        <Check className="w-3 h-3 text-[#735c00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onExploreFacilities}
                  className="w-full bg-transparent border border-[#064e3b]/30 text-[#003527] rounded-[4px] py-2 text-xs font-medium uppercase tracking-wider hover:bg-[#064e3b]/5 transition-colors"
                >
                  Request Schedule / Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
