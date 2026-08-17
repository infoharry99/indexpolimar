import React from 'react';
import { ShieldCheck, Droplets, Thermometer, Sparkles, Layers, RefreshCw, Sun, CheckCircle } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Helps Reduce Weed Growth",
      description: "Blocks sunlight transmission to soil, suppressing weed germination naturally without relying on heavy chemical herbicides."
    },
    {
      icon: Droplets,
      title: "Helps Retain Soil Moisture",
      description: "Minimizes soil water evaporation, keeping root zone moisture consistent and reducing overall irrigation frequency."
    },
    {
      icon: Thermometer,
      title: "Helps Regulate Soil Temperature",
      description: "Silver-black and black films help control root thermal spikes in hot seasons and preserve soil warmth during cold spells."
    },
    {
      icon: Sparkles,
      title: "Supports Cleaner Crop Production",
      description: "Keeps fruits, leaves, and vegetables clean by preventing soil splashing during rain or overhead drip watering."
    },
    {
      icon: Layers,
      title: "Helps Protect Soil Structure",
      description: "Prevents soil crust formation and surface erosion caused by heavy rains, preserving soil aeration and root breathability."
    },
    {
      icon: RefreshCw,
      title: "Supports Efficient Water Usage",
      description: "Combines seamlessly with drip irrigation pipes under the plastic sheet, directing water straight to active root zones."
    },
    {
      icon: Sun,
      title: "Can Improve Growing Conditions",
      description: "Promotes uniform microclimates around roots, encouraging healthy root extension and balanced plant growth."
    },
    {
      icon: CheckCircle,
      title: "Reduces Direct Soil Contact",
      description: "Prevents direct fruit-to-soil contact, reducing fruit rot risk and enhancing harvest quality."
    }
  ];

  return (
    <section className="py-24 bg-[#f4f6f8] text-[#13202f]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">AGRICULTURAL SCIENCE & ADVANTAGES</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13202f] font-heading leading-tight">
            Better protection. <span className="text-[#e98423]">Better farming.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5b6672] mt-3 font-normal">
            Scientific Agronomic Benefits of High-Quality Plastic Mulching Film
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white hover:bg-[#101f35] hover:text-white p-6 rounded-2xl border border-[#dce1e6] hover:border-transparent transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0a1626] text-[#ffa94d] flex items-center justify-center mb-5 shadow-md group-hover:bg-[#e98423] group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#13202f] group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5b6672] group-hover:text-[#8b9aae] leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
