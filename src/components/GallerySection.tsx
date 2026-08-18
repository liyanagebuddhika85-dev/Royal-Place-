import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'rooms' | 'architecture'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery-section" className="py-24 bg-[#FFFDF5] px-6 md:px-12 border-t border-[#064e3b]/8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#735c00] bg-[#fed65b]/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#003527] mb-3">
            The Royal Place Gallery
          </h2>
          <p className="text-[#404944] text-base md:text-lg max-w-2xl mx-auto">
            A visual glimpse into our tropical architecture, panoramic suites, and tranquil surroundings.
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              All Perspectives ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('rooms')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === 'rooms'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              Suites &amp; Rooms
            </button>
            <button
              onClick={() => setSelectedFilter('architecture')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === 'architecture'
                  ? 'bg-[#064e3b] text-white shadow-xs'
                  : 'bg-[#064e3b]/5 text-[#404944] hover:bg-[#064e3b]/10'
              }`}
            >
              Architecture &amp; Vistas
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="relative h-64 sm:h-72 rounded-lg overflow-hidden framed-image ambient-shadow cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003527]/80 via-[#003527]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#fed65b] font-semibold">{item.category}</p>
                    <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                    <p className="text-xs text-white/80 line-clamp-1 mt-0.5">{item.caption}</p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4 text-white max-w-xl">
                <h3 className="font-serif text-xl font-bold">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-xs text-white/80 mt-1">{filteredItems[lightboxIndex].caption}</p>
                <span className="text-[11px] text-[#fed65b] mt-1 inline-block">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
