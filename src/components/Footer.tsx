import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenBooking
}) => {
  return (
    <footer className="w-full pt-20 pb-12 bg-[#003527] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="font-serif text-3xl font-bold text-[#ffe088] hover:text-white transition-colors block"
            >
              Royal Place
            </a>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
              Experience the pinnacle of tropical prestige and serene hospitality in Sri Lanka.
            </p>
            <p className="text-white/60 text-xs pt-2">
              © {new Date().getFullYear()} Royal Place Sri Lanka. All rights reserved.
            </p>
          </div>

          {/* Location & Quick Contact */}
          <div className="md:col-span-4 space-y-3 text-xs text-white/80">
            <h4 className="font-sans font-semibold text-white uppercase tracking-widest text-xs mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ffe088]" />
              <span>Sanctuary Location</span>
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#ffe088] shrink-0 mt-0.5" />
              <span>Estate Peak Rd, Central Highlands, Kandy Province, Sri Lanka</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ffe088] shrink-0" />
              <span>+94 81 223 8890 (International Direct)</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#ffe088] shrink-0" />
              <span>reservations@royalplace.lk</span>
            </p>
          </div>

          {/* Explore Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-sans font-semibold text-white tracking-widest uppercase text-xs mb-2">
              Explore
            </h4>
            <button
              onClick={() => onNavigate('rooms')}
              className="text-left text-sm text-white/80 hover:text-[#ffe088] transition-all hover:underline decoration-[#e9c349] underline-offset-4"
            >
              Rooms &amp; Suites
            </button>
            <button
              onClick={() => onNavigate('facilities')}
              className="text-left text-sm text-white/80 hover:text-[#ffe088] transition-all hover:underline decoration-[#e9c349] underline-offset-4"
            >
              Facilities
            </button>
            <button
              onClick={() => onNavigate('dining')}
              className="text-left text-sm text-white/80 hover:text-[#ffe088] transition-all hover:underline decoration-[#e9c349] underline-offset-4"
            >
              Dining
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="text-left text-sm text-white/80 hover:text-[#ffe088] transition-all hover:underline decoration-[#e9c349] underline-offset-4"
            >
              Gallery
            </button>
            <button
              onClick={onOpenContact}
              className="text-left text-sm text-[#ffe088] hover:text-white transition-all hover:underline decoration-[#ffe088] underline-offset-4 font-medium"
            >
              Contact &amp; Concierge
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ffe088]" />
            <span>Sustainable Luxury Certified • Member of Small Luxury Hotels</span>
          </div>

          <div className="flex gap-6">
            <button onClick={onOpenBooking} className="hover:text-[#ffe088] transition-colors">
              Online Check-in
            </button>
            <button onClick={onOpenContact} className="hover:text-[#ffe088] transition-colors">
              Helipad Transfer
            </button>
            <button onClick={onOpenContact} className="hover:text-[#ffe088] transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
