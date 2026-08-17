import React from 'react';
import { ArrowRight, FileText, Info } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onRequestQuote }) {
  return (
    <div className="bg-[#101f35] rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-[#e98423]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101f35] via-transparent to-transparent opacity-80"></div>
        
        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-[#e98423] text-slate-950 text-xs font-bold rounded-md font-mono uppercase">
          {product.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-mono text-[11px] font-semibold text-[#ffa94d] uppercase tracking-wider block mb-1">
            — {product.category}
          </span>
          <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#ffa94d] transition-colors font-heading">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-[#8b9aae] italic mb-4">
            "{product.tagline}"
          </p>

          <p className="text-xs text-[#8b9aae] leading-relaxed mb-5 line-clamp-3">
            {product.shortDescription}
          </p>

          {/* Key Features List */}
          <div className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e98423] shrink-0 mt-1.5"></span>
                <span className="text-xs font-medium text-[#dce4ee]">{feat}</span>
              </div>
            ))}
          </div>

          {/* Available Specifications Link Box */}
          <div 
            onClick={() => onViewDetails(product)}
            className="mb-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-between cursor-pointer transition-colors text-xs font-semibold text-[#dce4ee]"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#ffa94d]" />
              <span>Available Specifications</span>
            </div>
            <span className="flex items-center gap-1 font-bold text-[#ffa94d] font-mono text-[11px]">
              Contact Team <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => onViewDetails(product)}
            className="py-2.5 px-3 rounded-xl border border-white/20 hover:border-white text-[#dce4ee] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 font-heading"
          >
            <span>View Details</span>
          </button>
          
          <button
            onClick={() => onRequestQuote(product)}
            className="btn-primary py-2.5 px-3 rounded-xl text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 font-heading"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}
