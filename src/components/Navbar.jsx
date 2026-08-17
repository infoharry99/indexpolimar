import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronRight, FileText } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Applications', href: '#applications' },
    { name: 'Quality', href: '#quality' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Topbar matching Pearlcon CSS */}
      <div className={`bg-[#0a1626] text-white border-b border-white/10 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-10 opacity-100 py-1.5'
      }`}>
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center text-xs font-mono">
          <div className="flex items-center gap-4">
            <span>📍 Sanawad Bhikangaon Road, Hirapur</span>
            <span className="text-[#ffa94d]">|</span>
            <span className="text-[#ffa94d] font-bold">QUALITY • STRENGTH • TRUST</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6263225675" className="hover:text-[#ffa94d] transition-colors">
              📞 6263225675
            </a>
            <span>/</span>
            <a href="tel:9617232387" className="hover:text-[#ffa94d] transition-colors">
              📞 9617232387
            </a>
          </div>
        </div>
      </div>

      {/* Mainbar matching Pearlcon CSS */}
      <div className={`bg-white/98 backdrop-blur-md border-b border-[#dce1e6] transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-3'
      }`}>
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-[#0a1626] p-1 flex items-center justify-center border border-[#e98423]/40">
              <img src="/logo_emblem.svg" alt="Index Polimar Emblem" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#13202f]">
                  INDEX POLIMAR
                </span>
                <span className="text-red-500 font-bold text-xs">®</span>
              </div>
              <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#e98423] font-bold block">
                PLASTIC MULCHING FILM
              </span>
            </div>
          </a>

          {/* Primary Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#13202f] hover:text-[#e98423] hover:bg-[#f4f6f8] rounded-lg transition-colors font-heading"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/916263225675"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenQuote}
              className="btn-primary px-5 py-2.5 rounded-full text-slate-950 font-extrabold text-xs flex items-center gap-2 font-heading"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#13202f]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1626] text-white p-6 shadow-2xl animate-fadeIn border-b border-slate-800">
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-lg font-semibold text-white border-b border-white/10 flex items-center justify-between font-heading"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#e98423]" />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="btn-primary w-full py-3 rounded-full text-center text-slate-950 font-bold text-sm"
          >
            Get a Quote Now
          </button>
        </div>
      )}
    </header>
  );
}
