import React from 'react';
import { ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types';
import { X, Calendar, Users, Bed, Check, Sparkles, ArrowRight } from 'lucide-react';

interface AvailabilityModalProps {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomsCount: number;
  onClose: () => void;
  onSelectRoom: (roomId: string) => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  checkIn,
  checkOut,
  guests,
  roomsCount,
  onClose,
  onSelectRoom
}) => {
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();

  // Rooms that can accommodate the guest count or standard recommendations
  const availableRooms = ROOMS_DATA.filter((r) => r.guests >= Math.min(guests, 2));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FFFDF5] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-[#064e3b]/20 flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#064e3b]/10 bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
                Live Availability
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#003527]">
              Accommodations for {checkIn || 'Your Dates'} – {checkOut || 'Departure'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#064e3b]/10 text-[#404944] hover:text-[#003527] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Search Parameters Summary Bar */}
        <div className="bg-[#064e3b]/5 px-6 py-3 border-b border-[#064e3b]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#003527]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[#064e3b]" />
              <span>{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#064e3b]" />
              <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
            </span>
            <span className="font-medium">
              • {roomsCount} {roomsCount === 1 ? 'Room' : 'Rooms'}
            </span>
          </div>

          <span className="text-[11px] text-[#735c00] font-semibold bg-[#fed65b]/20 px-2.5 py-0.5 rounded">
            Best Rate Guaranteed Direct
          </span>
        </div>

        {/* Available Rooms List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow">
          {availableRooms.map((room) => {
            const totalPrice = room.pricePerNight * nights * roomsCount;

            return (
              <div
                key={room.id}
                className="bg-white rounded-lg p-5 border border-[#064e3b]/15 ambient-shadow hover:border-[#064e3b]/40 transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full md:w-auto">
                  <div className="w-full sm:w-40 h-28 rounded-md overflow-hidden framed-image shrink-0">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-xl font-bold text-[#003527]">{room.name}</h4>
                      {room.isFeatured && (
                        <span className="text-[10px] uppercase font-bold bg-[#735c00] text-white px-2 py-0.5 rounded">
                          Signature
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#404944]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#064e3b]" />
                        <span>Up to {room.guests} Guests</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#064e3b]" />
                        <span>{room.bedType}</span>
                      </span>
                    </div>

                    <p className="text-xs text-[#404944] line-clamp-1 max-w-md">
                      {room.view} • {room.size}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#064e3b] pt-1">
                      <Check className="w-3 h-3 text-[#735c00]" />
                      <span>Breakfast &amp; Afternoon High Tea Included</span>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex sm:flex-col items-end justify-between w-full md:w-auto border-t sm:border-t-0 border-[#064e3b]/10 pt-3 sm:pt-0">
                  <div className="text-right">
                    <div className="flex items-baseline gap-1.5 justify-end">
                      <span className="font-serif text-2xl font-bold text-[#003527]">
                        ${totalPrice}
                      </span>
                      <span className="text-xs text-[#404944]">total</span>
                    </div>
                    <span className="text-[11px] text-[#404944]">
                      ${room.pricePerNight} / night
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectRoom(room.id);
                    }}
                    className="mt-2 bg-[#064e3b] text-white rounded px-5 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Select Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
