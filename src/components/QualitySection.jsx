import React from 'react';
import { ShieldCheck, CheckCircle2, Eye, Ruler, Activity, Box } from 'lucide-react';

export default function QualitySection() {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: "Material Quality",
      description: "Sourcing premium virgin LLDPE resins blended with high-grade carbon black and specialized UV stabilizers."
    },
    {
      icon: Ruler,
      title: "Thickness Consistency",
      description: "Continuous micro-gauge monitoring across film width to maintain tight micron tolerances."
    },
    {
      icon: Activity,
      title: "Strength Testing",
      description: "Testing tensile elongation and puncture resistance to ensure film withstands manual and mechanical field laying."
    },
    {
      icon: Eye,
      title: "Visual Inspection",
      description: "Full surface visual inspection checking for pinholes, gel spots, color uniformity, and web alignment."
    },
    {
      icon: Box,
      title: "Packaging Quality",
      description: "Sturdy core tube winding and protective exterior shrink wrapping to prevent transit and storage damage."
    }
  ];

  return (
    <section id="quality" className="py-24 bg-[#f4f6f8] text-[#13202f]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        <div className="bg-[#101f35] text-white rounded-2xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
          
          <div className="max-w-3xl mb-12 relative z-10">
            <div className="eyebrow mb-3">QUALITY ASSURANCE COMMITMENT</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 font-heading text-white">
              Quality • Strength • <em className="not-italic text-[#ffa94d]">Trust</em>
            </h2>
            <p className="text-base sm:text-lg text-[#8b9aae] leading-relaxed font-normal">
              "At Index Polimar, quality is an essential part of every stage of production. Our focus is on consistent manufacturing, product strength, reliable performance, and complete customer satisfaction."
            </p>
          </div>

          {/* Quality Indicators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {qualityPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#e98423] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e98423] text-slate-950 flex items-center justify-center mb-4 shadow-md font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-extrabold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-[#8b9aae] leading-relaxed">{item.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-[#ffa94d] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED STANDARD</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
