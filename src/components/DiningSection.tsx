import React, { useState } from 'react';
import { DINING_VENUES } from '../data/hotelData';
import { Sparkles, UtensilsCrossed, Clock, Wine, Check } from 'lucide-react';

interface DiningSectionProps {
  onReserveDining: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onReserveDining }) => {
  const [selectedVenue, setSelectedVenue] = useState(DINING_VENUES[0].id);

  const activeVenue = DINING_VENUES.find((v) => v.id === selectedVenue) || DINING_VENUES[0];

  return (
    <section id="dining-section" className="py-24 bg-[#FFFDF5] px-6 md:px-12 border-t border-[#064e3b]/8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Epicurean Journeys</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#003527] mb-3">
            Gastronomy of the Tropics
          </h2>
          <p className="text-[#404944] text-base md:text-lg max-w-2xl mx-auto">
            From heirloom spice-infused coastal delicacies to high-elevation single-estate Ceylon tea ceremonies.
          </p>

          {/* Venue Toggle Tabs */}
          <div className="flex justify-center gap-3 mt-6">
            {DINING_VENUES.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setSelectedVenue(venue.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedVenue === venue.id
                    ? 'bg-[#064e3b] text-white shadow-xs'
                    : 'bg-white text-[#404944] border border-[#064e3b]/10 hover:border-[#064e3b]/30'
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Venue Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-xl p-6 md:p-10 ambient-shadow subsurface-border">
          {/* Image Column */}
          <div className="lg:col-span-6 h-[340px] md:h-[420px] rounded-lg overflow-hidden framed-image relative group">
            <img
              src={activeVenue.image}
              alt={activeVenue.name}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#064e3b]/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#fed65b]" />
              <span>{activeVenue.cuisine}</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
                {activeVenue.subtitle}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#003527] mt-1 mb-3">
                {activeVenue.name}
              </h3>
              <p className="text-sm text-[#404944] leading-relaxed">
                {activeVenue.description}
              </p>
            </div>

            {/* Timings & Dress Code */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#064e3b]/10 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#064e3b]" />
                <div>
                  <p className="font-semibold text-[#003527]">Operating Hours</p>
                  <p className="text-[#404944] text-[11px]">{activeVenue.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-[#064e3b]" />
                <div>
                  <p className="font-semibold text-[#003527]">Attire Policy</p>
                  <p className="text-[#404944] text-[11px]">{activeVenue.dressCode}</p>
                </div>
              </div>
            </div>

            {/* Signature Creations */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003527] mb-3">
                Chef's Signature Selections
              </h4>
              <div className="space-y-2.5">
                {activeVenue.signatureDishes.map((dish, i) => (
                  <div key={i} className="flex justify-between items-start p-2.5 rounded bg-[#FFFDF5] border border-[#064e3b]/8 text-xs">
                    <div>
                      <p className="font-semibold text-[#003527] flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#735c00]" />
                        <span>{dish.name}</span>
                      </p>
                      <p className="text-[11px] text-[#404944] mt-0.5 ml-5">{dish.desc}</p>
                    </div>
                    <span className="font-serif font-bold text-[#064e3b] ml-3">{dish.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onReserveDining}
                className="bg-[#064e3b] text-white rounded-[4px] px-6 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all cursor-pointer shadow-xs active:scale-[0.98]"
              >
                Reserve Dining Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
