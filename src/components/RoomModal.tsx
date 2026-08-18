import React, { useState } from 'react';
import { Room } from '../types';
import { X, Users, Bed, Maximize2, Mountain, Check, Sparkles, Calendar, ShieldCheck } from 'lucide-react';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBookNow }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FFFDF5] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-[#064e3b]/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#064e3b]/10 bg-white">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
              Accommodations
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#003527]">{room.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#064e3b]/10 text-[#404944] hover:text-[#003527] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main Image & Carousel */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden framed-image ambient-shadow bg-black/5">
              <img
                src={images[activeImageIdx]}
                alt={`${room.name} view`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#064e3b]/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                {room.size}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                      activeImageIdx === i ? 'border-[#064e3b] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-lg border border-[#064e3b]/10">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#064e3b]" />
              <div>
                <p className="text-[11px] text-[#404944] uppercase">Capacity</p>
                <p className="text-xs font-semibold text-[#003527]">{room.guests} Guests</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-[#064e3b]" />
              <div>
                <p className="text-[11px] text-[#404944] uppercase">Bedding</p>
                <p className="text-xs font-semibold text-[#003527]">{room.bedType}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Maximize2 className="w-4 h-4 text-[#064e3b]" />
              <div>
                <p className="text-[11px] text-[#404944] uppercase">Area</p>
                <p className="text-xs font-semibold text-[#003527]">{room.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mountain className="w-4 h-4 text-[#064e3b]" />
              <div>
                <p className="text-[11px] text-[#404944] uppercase">Panorama</p>
                <p className="text-xs font-semibold text-[#003527] truncate">{room.view}</p>
              </div>
            </div>
          </div>

          {/* Room Description */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#003527] mb-2">About This Sanctuary</h4>
            <p className="text-[#404944] text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Amenities & Inclusions */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#003527] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#735c00]" />
              <span>Complimentary Privileges &amp; Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#121c2a] bg-white p-2.5 rounded border border-[#064e3b]/8">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Cancellation Promise */}
          <div className="bg-[#064e3b]/5 p-4 rounded-lg border border-[#064e3b]/15 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#064e3b] shrink-0" />
            <p className="text-xs text-[#003527]">
              <strong>Flexible Reservation:</strong> Free cancellation up to 48 hours prior to arrival. Includes bespoke daily breakfast and tropical fruit basket.
            </p>
          </div>
        </div>

        {/* Modal Footer / CTA */}
        <div className="px-6 py-4 bg-white border-t border-[#064e3b]/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#404944]">From</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-[#003527]">${room.pricePerNight}</span>
              <span className="text-xs text-[#404944]">/ night + taxes</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-[#bfc9c3] rounded-[4px] text-xs font-medium text-[#404944] hover:bg-[#FFFDF5] transition-colors"
            >
              Close
            </button>
            <button
              id={`modal-book-now-${room.id}`}
              onClick={() => {
                onClose();
                onBookNow(room.id);
              }}
              className="bg-[#064e3b] text-white rounded-[4px] px-6 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
