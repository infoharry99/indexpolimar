import React from 'react';
import { Award, ShieldAlert, Sprout, Users } from 'lucide-react';

export default function TrustStats() {
  const highlights = [
    {
      icon: Award,
      metric: "100%",
      label: "Quality Focused",
      desc: "Consistent product quality"
    },
    {
      icon: ShieldAlert,
      metric: "20-100μ",
      label: "Strong & Durable",
      desc: "High elongation resistance"
    },
    {
      icon: Sprout,
      metric: "All Crops",
      label: "Agricultural Solutions",
      desc: "Designed for modern farming"
    },
    {
      icon: Users,
      metric: "Direct B2B",
      label: "Customer Trust",
      desc: "Dependable regional supply"
    }
  ];

  return (
    <section className="bg-[#101f35] border-y border-white/10 text-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 lg:px-6 ${
                  idx !== 0 ? 'lg:border-l lg:border-white/10' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#e98423]/15 border border-[#e98423]/30 flex items-center justify-center text-[#ffa94d] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <b className="font-mono text-xl text-white block font-bold leading-none mb-1">{item.metric}</b>
                  <h4 className="font-heading text-sm text-[#dce4ee] font-semibold">{item.label}</h4>
                  <span className="text-xs text-[#8b9aae]">{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
