import React from 'react';
import { HERO_IMAGE } from '../data/hotelData';
import { Sparkles, Leaf, Award, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#FFFDF5] px-6 md:px-12 border-t border-[#064e3b]/8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage &amp; Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#003527] leading-tight">
              Tropical Prestige Grounded in Serenity
            </h2>

            <p className="text-[#404944] text-base leading-relaxed">
              Conceived as a tribute to Sri Lanka's timeless architectural heritage and raw tropical grandeur, Royal Place bridges modern minimalist comfort with the ancient warmth of Ceylonese hospitality.
            </p>

            <p className="text-[#404944] text-sm leading-relaxed">
              Every timber beam is sustainably reclaimed, every granite surface sculpted by local artisans, and every suite oriented to embrace the soothing breeze flowing down the highland valleys.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#064e3b]/10">
              <div className="p-4 rounded-lg bg-white border border-[#064e3b]/10">
                <Leaf className="w-5 h-5 text-[#064e3b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#003527]">100% Sustainable</h4>
                <p className="text-[11px] text-[#404944] mt-1">Solar-powered &amp; zero single-use plastic estate</p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#064e3b]/10">
                <Award className="w-5 h-5 text-[#064e3b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#003527]">World Luxury Award</h4>
                <p className="text-[11px] text-[#404944] mt-1">Recognized for premier tropical design 2024</p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#064e3b]/10">
                <MapPin className="w-5 h-5 text-[#064e3b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#003527]">Secluded Haven</h4>
                <p className="text-[11px] text-[#404944] mt-1">Central Highlands, Kandy Region, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-xl overflow-hidden framed-image ambient-shadow">
              <img
                src={HERO_IMAGE}
                alt="Royal Place Architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003527]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-[#fed65b] font-medium">Sri Lanka's Highlands</p>
                <h4 className="font-serif text-xl font-bold mt-0.5">Where Rainforest Meets Serenity</h4>
                <p className="text-xs text-white/80 mt-1">Immerse in the natural rhythm of Ceylon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
