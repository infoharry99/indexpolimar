import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/productsData';

export default function ProductSection({ onViewDetails, onRequestQuote }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Standard Mulch", "Silver-Black", "Transparent", "Colored", "Customized"];

  const filteredProducts = activeCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#0a1626] text-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-3">PRODUCT RANGE & SOLUTIONS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            High-performance <em className="not-italic text-[#ffa94d]">mulching film.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#8b9aae] mt-3 font-normal">
            Engineered Plastic Mulching Film Tailored for Modern Crop Protection
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all font-heading ${
                activeCategory === cat
                  ? 'bg-[#e98423] text-[#1a1005] shadow-lg scale-105'
                  : 'bg-[#101f35] text-[#dce4ee] hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        {/* Bottom Customization Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#101f35] to-[#0a1626] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="eyebrow mb-2">CUSTOM SPECIFICATIONS</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-heading">
              Need specific micron or roll sizes?
            </h3>
            <p className="text-xs text-[#8b9aae] leading-relaxed">
              We manufacture customized mulching film options tailored to your required micron thickness, roll width, roll length, and factory plant hole spacing.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote(productsData[4])}
            className="btn-primary shrink-0 px-7 py-3.5 rounded-full text-slate-950 font-bold text-sm font-heading"
          >
            Request Custom Quotation
          </button>
        </div>

      </div>
    </section>
  );
}
