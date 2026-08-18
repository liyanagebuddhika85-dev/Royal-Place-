import React from 'react';
import { Calendar, Users, Home, Search } from 'lucide-react';

interface BookingBarProps {
  checkIn: string;
  setCheckIn: (val: string) => void;
  checkOut: string;
  setCheckOut: (val: string) => void;
  guests: number;
  setGuests: (val: number) => void;
  roomsCount: number;
  setRoomsCount: (val: number) => void;
  onCheckAvailability: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  roomsCount,
  setRoomsCount,
  onCheckAvailability
}) => {
  // Format today / tomorrow helper
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full max-w-[1280px] mx-auto">
      <div className="bg-[#ffffff] rounded-lg p-5 md:p-6 flex flex-col md:flex-row gap-4 items-stretch md:items-end ambient-shadow subsurface-border">
        {/* Check-in */}
        <div className="w-full md:w-1/4">
          <label
            htmlFor="booking-bar-checkin"
            className="block text-xs font-medium uppercase tracking-wider text-[#404944] mb-2 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#064e3b]" />
            <span>Check-in</span>
          </label>
          <input
            id="booking-bar-checkin"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded-[4px] px-3.5 py-2.5 text-sm text-[#121c2a] focus:outline-none focus:ring-1 focus:ring-[#735c00] focus:border-[#735c00] transition-colors cursor-pointer"
          />
        </div>

        {/* Check-out */}
        <div className="w-full md:w-1/4">
          <label
            htmlFor="booking-bar-checkout"
            className="block text-xs font-medium uppercase tracking-wider text-[#404944] mb-2 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#064e3b]" />
            <span>Check-out</span>
          </label>
          <input
            id="booking-bar-checkout"
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded-[4px] px-3.5 py-2.5 text-sm text-[#121c2a] focus:outline-none focus:ring-1 focus:ring-[#735c00] focus:border-[#735c00] transition-colors cursor-pointer"
          />
        </div>

        {/* Guests */}
        <div className="w-full md:w-1/5">
          <label
            htmlFor="booking-bar-guests"
            className="block text-xs font-medium uppercase tracking-wider text-[#404944] mb-2 flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-[#064e3b]" />
            <span>Guests</span>
          </label>
          <div className="relative">
            <select
              id="booking-bar-guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded-[4px] px-3.5 py-2.5 text-sm text-[#121c2a] focus:outline-none focus:ring-1 focus:ring-[#735c00] focus:border-[#735c00] transition-colors appearance-none pr-8 cursor-pointer"
            >
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>Family (5+ Guests)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#404944]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Rooms */}
        <div className="w-full md:w-1/5">
          <label
            htmlFor="booking-bar-rooms"
            className="block text-xs font-medium uppercase tracking-wider text-[#404944] mb-2 flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-[#064e3b]" />
            <span>Rooms</span>
          </label>
          <div className="relative">
            <select
              id="booking-bar-rooms"
              value={roomsCount}
              onChange={(e) => setRoomsCount(Number(e.target.value))}
              className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded-[4px] px-3.5 py-2.5 text-sm text-[#121c2a] focus:outline-none focus:ring-1 focus:ring-[#735c00] focus:border-[#735c00] transition-colors appearance-none pr-8 cursor-pointer"
            >
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3 Rooms</option>
              <option value={4}>4+ Rooms</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#404944]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Check Availability CTA */}
        <div className="w-full md:w-auto md:flex-grow flex items-end">
          <button
            id="hero-check-availability-btn"
            onClick={onCheckAvailability}
            className="w-full bg-[#064e3b] text-white rounded-[4px] px-6 py-2.5 text-sm font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all h-[42px] flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            <Search className="w-4 h-4 text-[#fed65b]" />
            <span className="whitespace-nowrap">Check Availability</span>
          </button>
        </div>
      </div>
    </div>
  );
};
