import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { RoomsSection } from './components/RoomsSection';
import { RoomModal } from './components/RoomModal';
import { DiningSection } from './components/DiningSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { BookingModal } from './components/BookingModal';
import { AvailabilityModal } from './components/AvailabilityModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Room } from './types';

export default function App() {
  // Default dates: Today and 2 nights later
  const today = new Date().toISOString().split('T')[0];
  const defaultDeparture = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [activeSection, setActiveSection] = useState<string>('home');
  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(defaultDeparture);
  const [guests, setGuests] = useState<number>(2);
  const [roomsCount, setRoomsCount] = useState<number>(1);

  // Modals
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<Room | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | null>(null);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Scroll section listener to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rooms-section', 'dining-section', 'facilities-section', 'gallery-section', 'about-section'];
      const scrollPos = window.scrollY + 200;

      for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const mappedName = secId === 'rooms-section' ? 'rooms' : secId === 'dining-section' ? 'dining' : secId === 'facilities-section' ? 'facilities' : secId === 'gallery-section' ? 'gallery' : secId === 'about-section' ? 'about' : 'home';
            setActiveSection(mappedName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = sectionId === 'rooms' ? 'rooms-section' : sectionId === 'dining' ? 'dining-section' : sectionId === 'facilities' ? 'facilities-section' : sectionId === 'gallery' ? 'gallery-section' : 'about-section';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setBookingRoomId(roomId);
    }
    setIsBookingOpen(true);
  };

  const handleCheckAvailability = () => {
    setIsAvailabilityOpen(true);
  };

  return (
    <div id="home" className="min-h-screen flex flex-col bg-[#FFFDF5] text-[#121c2a] selection:bg-[#064e3b] selection:text-[#FFFDF5]">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Floating Booking Bar */}
        <HeroSection
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          guests={guests}
          setGuests={setGuests}
          roomsCount={roomsCount}
          setRoomsCount={setRoomsCount}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* 2. Intro Section "A Stay Designed Around You" */}
        <div className="pt-24 sm:pt-28 md:pt-32">
          <IntroSection onDiscoverClick={() => handleNavigate('about')} />
        </div>

        {/* 3. Rooms & Suites Section */}
        <RoomsSection
          onSelectRoomToBook={(roomId) => handleOpenBooking(roomId)}
          onViewRoomDetails={(room) => setSelectedRoomForModal(room)}
        />

        {/* 4. Dining Section */}
        <DiningSection onReserveDining={() => setIsContactOpen(true)} />

        {/* 5. Facilities & Holistic Wellness Section */}
        <FacilitiesSection onExploreFacilities={() => setIsContactOpen(true)} />

        {/* 6. Curated Gallery Section with Lightbox */}
        <GallerySection />

        {/* 7. About Us & Heritage Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      {selectedRoomForModal && (
        <RoomModal
          room={selectedRoomForModal}
          onClose={() => setSelectedRoomForModal(null)}
          onBookNow={(roomId) => {
            setSelectedRoomForModal(null);
            handleOpenBooking(roomId);
          }}
        />
      )}

      {isAvailabilityOpen && (
        <AvailabilityModal
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          roomsCount={roomsCount}
          onClose={() => setIsAvailabilityOpen(false)}
          onSelectRoom={(roomId) => {
            setIsAvailabilityOpen(false);
            handleOpenBooking(roomId);
          }}
        />
      )}

      {isBookingOpen && (
        <BookingModal
          initialRoomId={bookingRoomId}
          initialCheckIn={checkIn}
          initialCheckOut={checkOut}
          initialGuests={guests}
          initialRooms={roomsCount}
          onClose={() => {
            setIsBookingOpen(false);
            setBookingRoomId(null);
          }}
        />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </div>
  );
}
