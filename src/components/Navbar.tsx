import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#064e3b]/10'
            : 'bg-[#FFFDF5]/85 backdrop-blur-sm shadow-sm py-4 border-b border-[#064e3b]/10'
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-12">
          {/* Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="text-left group focus:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#003527] group-hover:text-[#064e3b] transition-colors">
              Royal Place
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[14px] tracking-wide font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 cursor-pointer transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'text-[#003527] font-semibold'
                      : 'text-[#404944] hover:text-[#003527]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#735c00] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Trailing Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="concierge-call-btn"
              onClick={onOpenContact}
              className="text-xs text-[#064e3b] hover:text-[#735c00] flex items-center gap-1.5 px-3 py-2 rounded border border-[#064e3b]/20 hover:border-[#735c00]/40 transition-colors font-medium"
              title="Speak with our Sri Lankan Concierge"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Concierge</span>
            </button>

            <button
              id="navbar-book-now-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#064e3b] text-white rounded-[4px] px-6 py-2.5 text-sm font-medium tracking-wider uppercase hover:bg-[#003527] hover:ring-1 hover:ring-[#fed65b] transition-all cursor-pointer shadow-sm active:scale-[0.98]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#064e3b] text-white rounded px-3 py-1.5 text-xs font-medium uppercase"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#003527] p-2 rounded-md hover:bg-[#064e3b]/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-xs">
          <div className="fixed top-[65px] left-0 right-0 bg-[#FFFDF5] border-b border-[#064e3b]/15 shadow-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left py-2.5 px-3 rounded text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#064e3b]/10 text-[#003527] font-semibold border-l-4 border-[#735c00]'
                    : 'text-[#404944] hover:bg-[#064e3b]/5'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-[#064e3b]/10 flex flex-col gap-3">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#064e3b] text-white rounded py-3 text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <button
                id="mobile-nav-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full border border-[#064e3b]/30 text-[#003527] rounded py-2.5 text-sm font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Concierge & Inquiries</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
