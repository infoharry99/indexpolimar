import React from 'react';
import { PackageCheck, ShieldCheck, Truck, Cpu, Layers } from 'lucide-react';

export default function Manufacturing() {
  const steps = [
    {
      number: "01",
      icon: Layers,
      title: "Raw Material Selection",
      description: "Virgin LLDPE/LDPE resins mixed with carbon black & UV masterbatches."
    },
    {
      number: "02",
      icon: Cpu,
      title: "Blown Film Production",
      description: "Multi-layer co-extrusion towers ensuring uniform film gauge."
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Quality Check",
      description: "Micrometer gauge check, tensile stretch & puncture resistance."
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Precision Packaging",
      description: "Tight core winding, protective shrink wrapping & labeling."
    },
    {
      number: "05",
      icon: Truck,
      title: "Logistics Dispatch",
      description: "Palletized storage & dependable regional dispatch to dealers."
    }
  ];

  return (
    <section id="manufacturing" className="py-24 bg-[#0a1626] text-white border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">INDUSTRIAL MANUFACTURING PROCESS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            Quality built into <em className="not-italic text-[#ffa94d]">every roll.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#8b9aae] mt-3 font-normal">
            From Raw Virgin Resins to Precision Rolled Film Dispatch
          </p>
        </div>

        {/* Manufacturing Feature Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#101f35]">
            <img
              src="/images/mfg_extrusion.jpg"
              alt="Index Polimar Blown Film Extrusion Machine"
              className="w-full h-[380px] sm:h-[450px] object-cover"
            />
          </div>

          <div className="lg:col-span-5 bg-[#101f35] text-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/10">
            <span className="font-mono text-xs font-bold text-[#ffa94d] uppercase tracking-widest block mb-2">
              — EXTRUSION TECHNOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-heading">
              Advanced Multi-Layer Co-Extrusion Plant
            </h3>
            <p className="text-xs text-[#8b9aae] leading-relaxed mb-6">
              Our production facility utilizes precision temperature control and high-output extrusion towers to deliver plastic mulching film with exceptional thickness uniformity, high tensile elongation, and long-lasting UV resistance.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-[#ffa94d] block text-lg font-bold">20-100μ</span>
                <span className="text-[#8b9aae]">Micron Gauge Range</span>
              </div>
              <div>
                <span className="text-[#ffa94d] block text-lg font-bold">100% Virgin</span>
                <span className="text-[#8b9aae]">Polymer Base</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Track Pipeline matching Pearlcon CSS */}
        <div className="relative pt-4">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#101f35] rounded-2xl p-6 border border-white/10 shadow-xl hover:border-[#e98423] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#0a1626] border-2 border-[#e98423] text-white flex items-center justify-center font-mono font-bold text-base shadow-lg group-hover:bg-[#e98423] group-hover:text-slate-950 transition-colors">
                        {step.number}
                      </div>
                      <Icon className="w-5 h-5 text-[#ffa94d]" />
                    </div>

                    <h4 className="font-heading font-extrabold text-base text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#8b9aae] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#ffa94d] flex items-center justify-between font-bold">
                    <span>STAGE {step.number}</span>
                    <span>✓ VERIFIED</span>
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
