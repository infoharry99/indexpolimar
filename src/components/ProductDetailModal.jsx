import React from 'react';
import { X, CheckCircle2, FileText, ShieldCheck, Sprout } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onRequestQuote }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#060d18]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#dce1e6] my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0a1626] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="font-mono text-xs font-bold text-[#ffa94d] uppercase tracking-wider">
              PRODUCT SPECIFICATION SHEET
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md border border-[#dce1e6] bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-3 bg-[#0a1626] text-white text-center font-mono text-xs">
                Category: {product.category}
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#e98423] text-slate-950 text-xs font-mono font-bold uppercase rounded mb-2">
                {product.badge}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#13202f] mb-2">
                {product.tagline}
              </h3>
              <p className="text-xs text-[#5b6672] leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 bg-[#f4f6f8] p-4 rounded-xl border border-[#dce1e6] text-xs font-mono">
                <div>
                  <span className="text-[#5b6672] block">Micron Thickness:</span>
                  <span className="font-bold text-[#13202f]">{product.availableThickness}</span>
                </div>
                <div>
                  <span className="text-[#5b6672] block">Standard Widths:</span>
                  <span className="font-bold text-[#13202f]">{product.availableWidths}</span>
                </div>
                <div>
                  <span className="text-[#5b6672] block">Roll Lengths:</span>
                  <span className="font-bold text-[#13202f]">{product.rollLength}</span>
                </div>
                <div>
                  <span className="text-[#5b6672] block">Packaging:</span>
                  <span className="font-bold text-[#13202f]">{product.packaging}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-heading text-lg font-bold text-[#13202f] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#e98423]" />
              <span>Key Features & Field Performance</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f4f6f8] border border-[#dce1e6] text-xs font-medium text-[#13202f]">
                  <CheckCircle2 className="w-4 h-4 text-[#e98423] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-heading text-lg font-bold text-[#13202f] mb-4 flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-600" />
              <span>Recommended Agricultural Applications</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span key={idx} className="px-3.5 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold rounded-lg">
                  🌱 {app}
                </span>
              ))}
            </div>
          </div>

          {/* Customization Callout */}
          <div className="bg-[#0a1626] text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-heading text-sm font-bold mb-1 text-white">Need specific technical specifications for this product?</p>
              <p className="text-xs text-[#8b9aae]">
                Available Specifications → Contact Our Team for custom micron thickness, roll sizes, and bulk pricing.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="btn-primary shrink-0 px-5 py-2.5 rounded-full text-xs font-bold font-heading shadow-lg"
            >
              <FileText className="w-4 h-4" />
              Request Product Quote
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#f4f6f8] px-6 py-4 flex items-center justify-between border-t border-[#dce1e6]">
          <span className="font-mono text-xs text-[#5b6672]">INDEX POLIMAR® Technical Sheet</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#13202f] bg-white hover:bg-slate-200 border border-[#dce1e6] rounded-lg transition-colors font-heading"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
