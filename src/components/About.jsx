import React from 'react';
import { ArrowRight, Factory, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      tag: "01 / PRODUCT QUALITY",
      title: "Virgin Polymer Manufacturing",
      description: "Co-extruded plastic mulching film produced using 100% virgin LLDPE polymer resins and carbon black UV masterbatches.",
      tags: ["100% Virgin Resins", "UV Stabilized", "Gauge Controlled"]
    },
    {
      tag: "02 / AGRONOMIC SCIENCE",
      title: "Crop Microclimate Control",
      description: "Engineered to control soil heat, block weed germination, and preserve root hydration throughout active growing seasons.",
      tags: ["Soil Solarization", "Weed Suppression", "Water Savings"]
    },
    {
      tag: "03 / RELIABLE B2B SUPPLY",
      title: "Direct Regional Distribution",
      description: "Dependable dispatch schedules from Sanawad Bhikangaon Road, Hirapur to commercial farms, distributors, and dealers.",
      tags: ["On-Time Logistics", "Bulk Core Winding", "Custom Orders"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#f4f6f8] text-[#13202f]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">ABOUT INDEX POLIMAR</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13202f] font-heading leading-tight">
            Building stronger <span className="text-[#e98423]">agricultural solutions.</span>
          </h2>
        </div>

        {/* About Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Container */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-[#dce1e6] bg-[#101f35]">
            <img
              src="/images/app_vegetables.jpg"
              alt="Index Polimar Agriculture Application"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <b className="font-mono text-xl text-[#ffa94d] block font-bold">100%</b>
              <span className="text-xs text-[#dce4ee]">Quality Focused Agricultural Plastic Manufacturing</span>
            </div>
          </div>

          {/* Copy & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#13202f] leading-relaxed">
              <strong>INDEX POLIMAR®</strong> is a dedicated manufacturer and supplier specializing in high-performance <strong>plastic mulching film and agricultural plastic products</strong> located on Sanawad Bhikangaon Road, Hirapur.
            </p>

            <p className="text-sm text-[#5b6672] leading-relaxed">
              Our core objective is to deliver reliable crop protection solutions that empower modern farmers to maximize soil moisture retention, suppress weed growth without heavy herbicides, regulate soil temperatures, and achieve superior crop quality across diverse agricultural climates.
            </p>

            {/* About Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#dce1e6]">
              <div>
                <b className="font-mono text-2xl text-[#13202f] font-bold block">100%</b>
                <span className="text-xs text-[#5b6672]">Quality Tested</span>
              </div>
              <div className="border-l border-[#dce1e6] pl-4">
                <b className="font-mono text-2xl text-[#e98423] font-bold block">20-100μ</b>
                <span className="text-xs text-[#5b6672]">Micron Range</span>
              </div>
              <div className="border-l border-[#dce1e6] pl-4">
                <b className="font-mono text-2xl text-[#13202f] font-bold block">Direct</b>
                <span className="text-xs text-[#5b6672]">B2B Logistics</span>
              </div>
            </div>

          </div>

        </div>

        {/* Then vs Now Comparison Row */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center mb-16">
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#dce1e6] shadow-sm">
            <span className="font-mono text-xs text-[#5b6672] font-bold uppercase tracking-wider block mb-2">
              TRADITIONAL OPEN SOIL FARMING
            </span>
            <h4 className="font-heading font-bold text-lg text-[#13202f] mb-2">High Evaporation & Weed Growth</h4>
            <p className="text-xs text-[#5b6672] leading-relaxed">
              Exposed soil experiences severe moisture loss, heavy weed infestation, soil crusting, and unpredictable root temperature swings.
            </p>
          </div>

          <div className="lg:col-span-1 text-center font-heading text-2xl text-[#e98423] font-bold hidden lg:block">
            ➔
          </div>

          <div className="lg:col-span-5 bg-[#101f35] text-white p-8 rounded-2xl border border-white/10 shadow-xl">
            <span className="font-mono text-xs text-[#ffa94d] font-bold uppercase tracking-wider block mb-2">
              INDEX POLIMAR® MULCHED FARMING
            </span>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Optimized Soil Microclimate</h4>
            <p className="text-xs text-[#8b9aae] leading-relaxed">
              100% weed suppression, 50% water savings, controlled root temperatures, and cleaner harvests protected from soil splashing.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#dce1e6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="eyebrow mb-3">{p.tag}</span>
                <h4 className="font-heading font-bold text-xl text-[#13202f] mb-3">{p.title}</h4>
                <p className="text-xs text-[#5b6672] leading-relaxed mb-6">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#f4f6f8]">
                {p.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-[#eaedf1] text-[#5b6672] rounded-full text-[11px] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
