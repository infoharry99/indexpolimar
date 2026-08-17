import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1626] text-[#8b9aae] pt-20 pb-8 border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Top Footer Grid matching Pearlcon CSS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#101f35] p-1 flex items-center justify-center border border-[#e98423]/30">
                <img src="/logo_emblem.svg" alt="Index Polimar Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl tracking-tight text-white">
                  INDEX POLIMAR<span className="text-red-500 font-bold text-sm">®</span>
                </h3>
                <span className="font-mono text-[10px] font-bold text-[#ffa94d] tracking-widest uppercase block">
                  — QUALITY • STRENGTH • TRUST
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8b9aae] leading-relaxed max-w-md">
              INDEX POLIMAR® is a trusted manufacturer and supplier of high-performance plastic mulching film and agricultural plastic solutions designed to conserve soil moisture, suppress weeds, and protect crop root zones.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/916263225675"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#101f35] border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:6263225675"
                className="w-9 h-9 rounded-full bg-[#101f35] border border-white/10 flex items-center justify-center text-[#ffa94d] hover:bg-[#e98423] hover:text-slate-950 transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-mono text-xs font-bold text-white uppercase tracking-widest">— NAVIGATION</h5>
            <ul className="space-y-2 text-xs text-[#8b9aae] font-medium">
              <li><a href="#home" className="hover:text-[#ffa94d] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#ffa94d] transition-colors">About Index Polimar</a></li>
              <li><a href="#products" className="hover:text-[#ffa94d] transition-colors">Plastic Mulching Film Range</a></li>
              <li><a href="#applications" className="hover:text-[#ffa94d] transition-colors">Agricultural Applications</a></li>
              <li><a href="#quality" className="hover:text-[#ffa94d] transition-colors">Quality Assurance</a></li>
              <li><a href="#manufacturing" className="hover:text-[#ffa94d] transition-colors">Manufacturing Process</a></li>
              <li><a href="#gallery" className="hover:text-[#ffa94d] transition-colors">Media Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#ffa94d] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-mono text-xs font-bold text-white uppercase tracking-widest">— LOCATION & CONTACT</h5>
            <div className="space-y-2.5 text-xs text-[#8b9aae]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffa94d] shrink-0 mt-0.5" />
                <span>Sanawad Bhikangaon Road, Hirapur, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-[#ffa94d] shrink-0" />
                <span>+91 6263225675 / +91 9617232387</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: 6263225675</span>
              </div>
            </div>
          </div>

        </div>

        {/* Foot Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b9aae] font-mono">
          <p>© 2026 INDEX POLIMAR®. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#ffa94d] transition-colors"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#ffa94d] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#101f35] border border-white/10 hover:bg-[#e98423] hover:text-slate-950 transition-colors text-white"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
