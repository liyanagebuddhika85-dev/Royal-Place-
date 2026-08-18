import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types';
import { Users, Bed, Eye, ArrowRight, Sparkles, Check } from 'lucide-react';

interface RoomsSectionProps {
  onSelectRoomToBook: (roomId: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoomToBook,
  onViewRoomDetails
}) => {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'suites'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'rooms') return !room.id.includes('suite');
    if (filter === 'suites') return room.id.includes('suite');
    return true;
  });

  return (
    <section id="rooms-section" className="py-24 bg-[#FFFDF5] px-6 md:px-12 border-t border-[#064e3b]/8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#003527] mb-3">
            Stay in Comfort &amp; Style
          </h2>
          <p className="text-[#404944] text-base md:text-lg max-w-2xl mx-auto">
            Select from our range of beautifully appointed accommodations.
          </p>

          {/* Quick Filter Pill Tabs */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === 'all'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              All Accommodations ({ROOMS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('rooms')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === 'rooms'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              Rooms
            </button>
            <button
              onClick={() => setFilter('suites')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === 'suites'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              Suites &amp; Villas
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRooms.map((room, idx) => {
            const isRoyalSuite = room.id === 'royal-suite';

            return (
              <div
                key={room.id}
                id={`room-card-${room.id}`}
                className="bg-white rounded-lg overflow-hidden subsurface-border ambient-shadow group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Inset Frame */}
                <div>
                  <div className="h-64 relative overflow-hidden framed-image cursor-pointer" onClick={() => onViewRoomDetails(room)}>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* View Tag & Price Badge */}
                    <div className="absolute top-3 right-3 bg-[#064e3b]/90 backdrop-blur-md text-[#b0f0d6] text-xs px-2.5 py-1 rounded font-semibold">
                      ${room.pricePerNight} <span className="text-[10px] text-white/80 font-normal">/ night</span>
                    </div>

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewRoomDetails(room);
                        }}
                        className="bg-white/95 text-[#003527] px-4 py-2 rounded text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-md hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#064e3b]" />
                        <span>View Room Gallery &amp; Specs</span>
                      </button>
                    </div>
                  </div>

                  {/* Room Card Body */}
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl font-bold text-[#003527]">
                        {room.name}
                      </h3>
                    </div>

                    {/* Room Meta Badges */}
                    <div className="flex items-center space-x-5 text-[#404944] mb-4 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#064e3b]" />
                        <span>{room.guests} Guests</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#064e3b]" />
                        <span>{room.bedType}</span>
                      </span>
                    </div>

                    <p className="text-xs text-[#404944] line-clamp-2 leading-relaxed mb-4">
                      {room.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-[#064e3b]/10">
                      {room.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#003527]/80">
                          <Check className="w-3 h-3 text-[#735c00] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-7 pb-7 pt-0 flex gap-2">
                  <button
                    onClick={() => onViewRoomDetails(room)}
                    className="p-2.5 border border-[#bfc9c3]/50 text-[#003527] rounded-[4px] hover:bg-[#064e3b]/5 transition-colors"
                    title="View full specs"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {isRoyalSuite ? (
                    <button
                      id={`book-btn-${room.id}`}
                      onClick={() => onSelectRoomToBook(room.id)}
                      className="w-full bg-[#064e3b] text-white rounded-[4px] px-4 py-2.5 text-sm font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      id={`book-btn-${room.id}`}
                      onClick={() => onSelectRoomToBook(room.id)}
                      className="w-full bg-transparent border border-[#735c00] text-[#003527] rounded-[4px] px-4 py-2.5 text-sm font-medium tracking-wider uppercase hover:bg-[#735c00]/10 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      <span>Book Now</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
