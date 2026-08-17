import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function QuoteCTA({ onOpenQuote }) {
  return (
    <section className="py-20 bg-[#0a1626] text-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        <div className="bg-gradient-to-r from-[#101f35] to-[#0a1626] rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="eyebrow mb-3">DIRECT B2B MANUFACTURER INQUIRY</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight mb-4">
              Looking for <em className="not-italic text-[#ffa94d]">reliable mulching film?</em>
            </h2>
            <p className="text-base sm:text-lg text-[#8b9aae] font-normal">
              "Talk to our team for product details, technical specifications, custom micron thickness, and direct bulk pricing."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="tel:6263225675"
              className="btn-ghost-dark w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 font-heading"
            >
              <Phone className="w-4 h-4 text-[#ffa94d]" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/916263225675"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 text-sm font-heading"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-full text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 font-heading"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
