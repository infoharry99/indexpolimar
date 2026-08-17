import React from 'react';
import { ArrowRight, FileText, ShieldCheck, CheckCircle2, Zap, Layers, Activity } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden text-white bg-[#0a1626]">
      
      {/* Background Gradient & Animated Blobs */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(120%_90%_at_15%_-10%,#16283f_0%,#0a1626_55%,#060d18_100%)]">
        <div className="blob blob-a absolute -top-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-900/40 to-blue-900/30 blur-3xl opacity-50"></div>
        <div className="blob blob-b absolute top-20 -right-28 w-96 h-96 rounded-full bg-gradient-to-r from-amber-600/30 to-orange-500/20 blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7">
            
            {/* Eyebrow Label matching Pearlcon CSS */}
            <div className="eyebrow mb-6">
              INDEX POLIMAR SOLUTIONS • SANAWAD
            </div>

            {/* Main Headline in Space Grotesk */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-6 font-heading">
              Strong mulching film.<br />
              <em className="not-italic text-[#ffa94d]">Better crop protection</em> & higher yield.
            </h1>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#8b9aae] font-normal leading-relaxed mb-10 max-w-xl">
              We manufacture and supply high-performance plastic mulching film designed to help farmers improve soil moisture retention, suppress weed growth, regulate root temperatures, and maximize agricultural performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#products"
                className="btn-primary px-7 py-3.5 rounded-full text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <button
                onClick={onOpenQuote}
                className="btn-ghost-dark px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#ffa94d]" />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Trust Micro Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs font-mono text-[#8b9aae]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e98423]"></span>
                <span className="text-white font-semibold">QUALITY ASSURED</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-white font-semibold">HIGH TENSILE STRENGTH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-white font-semibold">DIRECT B2B SUPPLY</span>
              </div>
            </div>

          </div>

          {/* Right Column: Orbit Hub Graphic + Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Dashed Orbit Rings */}
              <div className="absolute inset-0 border border-dashed border-white/15 rounded-full animate-[spin_45s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-amber-500/20 rounded-full animate-[spin_35s_linear_infinite_reverse]"></div>
              
              {/* Hub Core Center Circle */}
              <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#ffb763] via-[#e98423] to-[#c96a15] shadow-2xl flex flex-col items-center justify-center text-center p-4">
                <span className="font-heading font-extrabold text-sm text-[#1a1005] leading-tight">
                  INDEX POLIMAR®
                </span>
                <span className="font-mono text-[9px] text-[#4a2c05] tracking-wider uppercase font-bold mt-1">
                  EST. HIRAPUR
                </span>
              </div>

              {/* Floating Glassmorphism Cards */}
              <div className="float-card fc-1 -top-2 -left-4 z-20">
                <b className="text-white font-mono text-base font-bold">100% Opacity</b>
                <span className="text-xs text-[#8b9aae] block">Weed Control</span>
              </div>

              <div className="float-card fc-2 bottom-8 -right-6 z-20">
                <b className="text-[#ffa94d] font-mono text-base font-bold">20 - 100μ</b>
                <span className="text-xs text-[#8b9aae] block">Micron Range</span>
              </div>

              <div className="float-card fc-3 -bottom-4 left-8 z-20">
                <b className="text-white font-mono text-base font-bold">Silver-Black</b>
                <span className="text-xs text-[#8b9aae] block">Reflective Mulch</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
