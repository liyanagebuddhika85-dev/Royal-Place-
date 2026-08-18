import React, { useState } from 'react';
import { ROOMS_DATA, ADD_ONS_DATA } from '../data/hotelData';
import { BookingState } from '../types';
import {
  X,
  Calendar,
  Users,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Printer,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface BookingModalProps {
  initialRoomId?: string | null;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialRooms?: number;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialRooms = 1,
  onClose
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || today);
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || tomorrowDate);
  const [guests, setGuests] = useState<number>(initialGuests);
  const [roomsCount, setRoomsCount] = useState<number>(initialRooms);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    specialRequests: '',
    arrivalEstimatedTime: '14:00 PM'
  });
  const [bookingRef, setBookingRef] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  const roomSubtotal = selectedRoom.pricePerNight * nights * roomsCount;
  const addOnsTotal = selectedAddOns.reduce((sum, addonId) => {
    const item = ADD_ONS_DATA.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const taxesAndService = Math.round((roomSubtotal + addOnsTotal) * 0.12);
  const grandTotal = roomSubtotal + addOnsTotal + taxesAndService;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `RP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);
    setIsConfirmed(true);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FFFDF5] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-[#064e3b]/20 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#064e3b]/10 bg-white shrink-0">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
              Direct Sanctuary Reservation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#003527]">
              Royal Place Sri Lanka
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#064e3b]/10 text-[#404944] hover:text-[#003527] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 3) */}
        {!isConfirmed && (
          <div className="bg-white/80 border-b border-[#064e3b]/10 px-6 py-3 shrink-0 flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-[#064e3b] text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                1
              </span>
              <span className={step >= 1 ? 'text-[#003527] font-semibold' : 'text-gray-500'}>
                Dates &amp; Suite
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-[#064e3b] text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                2
              </span>
              <span className={step >= 2 ? 'text-[#003527] font-semibold' : 'text-gray-500'}>
                Curated Add-ons
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-[#064e3b] text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                3
              </span>
              <span className={step >= 3 ? 'text-[#003527] font-semibold' : 'text-gray-500'}>
                Guest Details
              </span>
            </div>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {/* STEP 1: Dates & Suite Selection */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Dates & Rooms Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-white p-4 rounded-lg border border-[#064e3b]/10">
                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[#404944] mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[#404944] mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[#404944] mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[#404944] mb-1">
                    Rooms
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  >
                    <option value={1}>1 Room</option>
                    <option value={2}>2 Rooms</option>
                    <option value={3}>3 Rooms</option>
                  </select>
                </div>
              </div>

              {/* Suite Selection */}
              <div>
                <h4 className="font-serif text-lg font-bold text-[#003527] mb-3">
                  Choose Your Sanctuary ({nights} {nights === 1 ? 'Night' : 'Nights'})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ROOMS_DATA.map((room) => {
                    const isSelected = room.id === selectedRoomId;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 bg-white ${
                          isSelected
                            ? 'border-[#064e3b] shadow-md ring-2 ring-[#064e3b]/20'
                            : 'border-transparent hover:border-[#064e3b]/30'
                        }`}
                      >
                        <div className="h-36 relative overflow-hidden">
                          <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-[#064e3b] text-white p-1 rounded-full">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h5 className="font-serif font-bold text-[#003527] text-base">
                            {room.name}
                          </h5>
                          <p className="text-[11px] text-[#404944] line-clamp-1 mt-0.5">
                            {room.bedType} • {room.size}
                          </p>
                          <div className="mt-3 flex justify-between items-baseline">
                            <span className="text-xs text-[#404944]">Per Night</span>
                            <span className="font-serif font-bold text-sm text-[#064e3b]">
                              ${room.pricePerNight}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Add-Ons & Enhancements */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#003527] mb-1">
                  Elevate Your Stay
                </h4>
                <p className="text-xs text-[#404944]">
                  Personalize your Sri Lankan escape with bespoke culinary, wellness, and transport services.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ADD_ONS_DATA.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all bg-white flex items-start justify-between ${
                        isChecked
                          ? 'border-[#064e3b] bg-[#064e3b]/5'
                          : 'border-[#064e3b]/10 hover:border-[#064e3b]/30'
                      }`}
                    >
                      <div className="pr-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked ? 'bg-[#064e3b] border-[#064e3b] text-white' : 'border-gray-400'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <h5 className="font-semibold text-xs text-[#003527]">{addon.name}</h5>
                        </div>
                        <p className="text-[11px] text-[#404944] pl-6 leading-normal">
                          {addon.description}
                        </p>
                      </div>
                      <span className="font-serif font-bold text-sm text-[#064e3b] whitespace-nowrap">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Guest Information & Special Requests */}
          {step === 3 && (
            <form id="guest-form" onSubmit={handleConfirmReservation} className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#003527] mb-1">
                  Primary Guest Information
                </h4>
                <p className="text-xs text-[#404944]">
                  Please enter your contact details for booking confirmation and concierge coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-lg border border-[#064e3b]/10">
                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John"
                    value={guestInfo.firstName}
                    onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Last Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Anderson"
                    value={guestInfo.lastName}
                    onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john.anderson@example.com"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Phone Number / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Country of Residence
                  </label>
                  <select
                    value={guestInfo.country}
                    onChange={(e) => setGuestInfo({ ...guestInfo, country: e.target.value })}
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other Country</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Estimated Arrival Time
                  </label>
                  <select
                    value={guestInfo.arrivalEstimatedTime}
                    onChange={(e) =>
                      setGuestInfo({ ...guestInfo, arrivalEstimatedTime: e.target.value })
                    }
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  >
                    <option value="12:00 PM - 14:00 PM">12:00 PM - 14:00 PM (Standard Check-in)</option>
                    <option value="14:00 PM - 18:00 PM">14:00 PM - 18:00 PM</option>
                    <option value="18:00 PM - 22:00 PM">18:00 PM - 22:00 PM (Late Arrival)</option>
                    <option value="After 22:00 PM">Night Flight Arrival (Special Transfer)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Special Dietary or Sanctuary Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Dietary preferences, anniversary celebration, pillow menu choices, etc."
                    value={guestInfo.specialRequests}
                    onChange={(e) =>
                      setGuestInfo({ ...guestInfo, specialRequests: e.target.value })
                    }
                    className="w-full bg-[#FFFDF5] border border-[#bfc9c3]/50 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>
              </div>
            </form>
          )}

          {/* STEP 4: Instant Confirmation & Itinerary */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="inline-flex p-4 rounded-full bg-[#064e3b]/10 text-[#064e3b] mb-2 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#003527] mt-1">
                  Ayubowan, {guestInfo.firstName || 'Guest'}!
                </h3>
                <p className="text-xs text-[#404944] mt-1 max-w-md mx-auto">
                  We look forward to welcoming you to Royal Place. A formal itinerary with pre-arrival concierge contact has been sent to {guestInfo.email || 'your email'}.
                </p>
              </div>

              {/* Confirmation Slip */}
              <div className="bg-white p-6 rounded-xl border border-[#064e3b]/15 text-left max-w-lg mx-auto shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-[#064e3b]/10 pb-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#404944]">Booking Reference</p>
                    <p className="font-serif text-xl font-bold text-[#064e3b]">{bookingRef}</p>
                  </div>
                  <span className="text-xs bg-[#064e3b]/10 text-[#064e3b] px-2.5 py-1 rounded font-semibold">
                    Guaranteed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-[#404944]">Accommodation</p>
                    <p className="font-semibold text-[#003527]">{selectedRoom.name}</p>
                  </div>
                  <div>
                    <p className="text-[#404944]">Duration</p>
                    <p className="font-semibold text-[#003527]">
                      {nights} {nights === 1 ? 'Night' : 'Nights'} ({checkIn} → {checkOut})
                    </p>
                  </div>
                  <div>
                    <p className="text-[#404944]">Guests / Rooms</p>
                    <p className="font-semibold text-[#003527]">
                      {guests} Guests, {roomsCount} Room
                    </p>
                  </div>
                  <div>
                    <p className="text-[#404944]">Total Investment</p>
                    <p className="font-serif font-bold text-base text-[#064e3b]">
                      ${grandTotal} USD
                    </p>
                  </div>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="border-t border-[#064e3b]/10 pt-3">
                    <p className="text-[11px] text-[#404944] uppercase mb-1">Included Experiences</p>
                    <ul className="text-xs space-y-1">
                      {selectedAddOns.map((id) => {
                        const item = ADD_ONS_DATA.find((a) => a.id === id);
                        return item ? (
                          <li key={id} className="flex items-center gap-1.5 text-[#003527]">
                            <Check className="w-3 h-3 text-[#735c00]" />
                            <span>{item.name}</span>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 border border-[#064e3b]/30 rounded text-xs font-medium text-[#003527] flex items-center gap-2 hover:bg-[#064e3b]/5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Itinerary</span>
                </button>

                <button
                  onClick={onClose}
                  className="bg-[#064e3b] text-white rounded px-6 py-2.5 text-xs font-medium uppercase tracking-wider hover:bg-[#003527]"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer / Price Breakdown & Navigation */}
        {!isConfirmed && (
          <div className="px-6 py-4 bg-white border-t border-[#064e3b]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            {/* Live Pricing Summary */}
            <div className="text-left w-full sm:w-auto">
              <span className="text-[11px] text-[#404944]">
                {selectedRoom.name} ({nights} {nights === 1 ? 'nt' : 'nts'}) + Taxes
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-[#003527]">${grandTotal}</span>
                <span className="text-xs text-[#404944]">Total USD</span>
              </div>
            </div>

            {/* Steps Controller */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {step > 1 && (
                <button
                  onClick={() => setStep((prev) => (prev - 1) as any)}
                  className="px-4 py-2.5 border border-[#bfc9c3] rounded text-xs font-medium text-[#404944] hover:bg-[#FFFDF5] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}

              {step < 3 ? (
                <button
                  onClick={() => setStep((prev) => (prev + 1) as any)}
                  className="bg-[#064e3b] text-white rounded px-6 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-[#003527] flex items-center gap-1.5 shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="submit"
                  form="guest-form"
                  className="bg-[#064e3b] text-white rounded px-8 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] flex items-center gap-1.5 shadow-sm"
                >
                  <span>Complete Reservation</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#fed65b]" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
