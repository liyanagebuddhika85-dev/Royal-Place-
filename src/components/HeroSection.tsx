import React from 'react';
import { HERO_IMAGE } from '../data/hotelData';
import { BookingBar } from './BookingBar';

interface HeroSectionProps {
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

export const HeroSection: React.FC<HeroSectionProps> = ({
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
  return (
    <header className="relative w-full min-h-[640px] md:h-[820px] lg:h-[900px] flex items-center justify-center pt-24 pb-28 md:pb-36">
      {/* Background Image with Emerald Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Royal Place Sri Lanka tropical luxury resort interior merging with lush rainforest"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep Emerald & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003527]/60 via-[#003527]/40 to-[#003527]/75" />
      </div>

      {/* Hero Headline Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mb-10 md:mb-16 animate-in fade-in duration-700">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-[64px] leading-tight md:leading-[1.15] font-bold text-white mb-5 tracking-tight drop-shadow-sm">
          Welcome to Royal Place
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-xs font-sans">
          Your Elegant Escape in Sri Lanka. Experience world-class hospitality surrounded by the serene beauty of the tropics.
        </p>
      </div>

      {/* Floating Booking Panel Widget */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4 sm:px-8 md:px-16 z-20">
        <BookingBar
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          guests={guests}
          setGuests={setGuests}
          roomsCount={roomsCount}
          setRoomsCount={setRoomsCount}
          onCheckAvailability={onCheckAvailability}
        />
      </div>
    </header>
  );
};
