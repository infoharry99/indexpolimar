import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0a1626] text-white border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-3">VISUAL MEDIA GALLERY</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            Production & <em className="not-italic text-[#ffa94d]">product gallery.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#8b9aae] mt-3 font-normal">
            Explore Our Manufacturing Facility, Product Range, and Field Applications
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all font-heading ${
                activeCategory === cat
                  ? 'bg-[#e98423] text-slate-950 shadow-lg scale-105'
                  : 'bg-[#101f35] text-[#dce4ee] hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md border border-white/10 bg-[#101f35] cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#e98423]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-[#0a1626]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#e98423] text-slate-950 text-[10px] font-extrabold uppercase rounded font-mono">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-sm leading-tight text-white mb-1 group-hover:text-[#ffa94d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8b9aae] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#060d18]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#101f35] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
            
            <div className="p-6 bg-[#101f35] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="font-mono text-xs font-bold text-[#ffa94d] uppercase tracking-wider block mb-1">
                  — {filteredItems[lightboxIndex].category} ({lightboxIndex + 1} OF {filteredItems.length})
                </span>
                <h3 className="font-heading font-extrabold text-lg text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-[#8b9aae] mt-1">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <span className="font-mono text-xs text-[#8b9aae] font-semibold shrink-0">
                INDEX POLIMAR®
              </span>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
