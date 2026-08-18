import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Sanctuary Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FFFDF5] w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#064e3b]/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#064e3b]/10 bg-white">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#735c00]">
              Personal Concierge &amp; Inquiries
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#003527]">
              Connect with Royal Place
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#064e3b]/10 text-[#404944] hover:text-[#003527] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-[#064e3b]/10 text-[#064e3b]">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#003527]">
                Message Received with Gratitude
              </h4>
              <p className="text-xs text-[#404944] max-w-md mx-auto">
                Our Senior Concierge will respond to {formData.email} within 2 hours with personalized arrangements.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#064e3b] text-white rounded px-6 py-2 text-xs font-medium uppercase tracking-wider hover:bg-[#003527]"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded border border-[#064e3b]/10 text-xs">
                  <Phone className="w-4 h-4 text-[#064e3b] mb-1.5" />
                  <p className="font-semibold text-[#003527]">24/7 Concierge</p>
                  <p className="text-[11px] text-[#404944] mt-0.5">+94 81 223 8890</p>
                </div>
                <div className="p-3 bg-white rounded border border-[#064e3b]/10 text-xs">
                  <Mail className="w-4 h-4 text-[#064e3b] mb-1.5" />
                  <p className="font-semibold text-[#003527]">Direct Email</p>
                  <p className="text-[11px] text-[#404944] mt-0.5">concierge@royalplace.lk</p>
                </div>
                <div className="p-3 bg-white rounded border border-[#064e3b]/10 text-xs">
                  <MapPin className="w-4 h-4 text-[#064e3b] mb-1.5" />
                  <p className="font-semibold text-[#003527]">Location</p>
                  <p className="text-[11px] text-[#404944] mt-0.5">Highlands, Sri Lanka</p>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#003527] mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lady / Lord / Dr."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#bfc9c3]/60 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#003527] mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#bfc9c3]/60 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-[#bfc9c3]/60 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  >
                    <option value="General Sanctuary Inquiry">General Sanctuary Inquiry</option>
                    <option value="Helicopter / Private Airport Transfer">Helicopter / Private Airport Transfer</option>
                    <option value="Bespoke Ayurvedic Wellness Retreat">Bespoke Ayurvedic Wellness Retreat</option>
                    <option value="Private Event & Intimate Wedding">Private Event &amp; Intimate Wedding</option>
                    <option value="Private Dining Degustation">Private Dining Degustation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#003527] mb-1">
                    Message or Special Instructions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell our concierge team how we can curate your experience..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#bfc9c3]/60 rounded px-3 py-2 text-xs text-[#121c2a] focus:ring-1 focus:ring-[#735c00]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border border-[#bfc9c3] rounded text-xs font-medium text-[#404944]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#064e3b] text-white rounded px-6 py-2 text-xs font-medium uppercase tracking-wider hover:bg-[#003527] flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#fed65b]" />
                    <span>Send to Concierge</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
