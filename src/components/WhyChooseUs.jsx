import React from 'react';
import { Award, ShieldAlert, Truck, Sliders, Sprout, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const problems = [
    "Uncontrolled soil water evaporation leading to high drip irrigation costs",
    "Heavy weed growth requiring chemical herbicides and high manual labor",
    "Extreme soil temperature spikes causing root heat stress during summer",
    "Fruit rot and soil splashing damage on harvest quality",
    "Unpredictable quality and tearing during mechanical field laying"
  ];

  const solutions = [
    "100% Light Opacity suppressing all weed seed germination naturally",
    "Reduces water evaporation, saving up to 50% drip irrigation water",
    "Silver-Black reflective coating keeping root zones up to 5°C cooler",
    "Co-extruded virgin polymers offering high tensile & elongation strength",
    "Direct regional supply & dependable B2B logistics from Hirapur"
  ];

  return (
    <section className="py-24 bg-[#f4f6f8] text-[#13202f]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">CHALLENGES & SOLUTIONS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13202f] font-heading leading-tight">
            Why choose <span className="text-[#e98423]">Index Polimar?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5b6672] mt-3 font-normal">
            Solving Agricultural Challenges Through Co-Extrusion Plastics Technology
          </p>
        </div>

        {/* Why Grid Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-[#dce1e6] overflow-hidden shadow-xl">
          
          {/* Problems Column */}
          <div className="bg-white p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#dce1e6]">
            <span className="font-mono text-xs font-bold text-[#b14a18] uppercase tracking-widest block mb-2">
              — COMMON AGRICULTURAL CHALLENGES
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-[#13202f] mb-6">
              Farming Without Mulching Protection
            </h3>

            <ul className="space-y-4 text-sm text-[#5b6672]">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c25b22] shrink-0 mt-2"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-[#eaedf1] text-xs text-[#5b6672] font-mono">
              Result: Higher operational costs & lower crop harvest quality.
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-[#101f35] text-white p-8 sm:p-12">
            <span className="font-mono text-xs font-bold text-[#ffa94d] uppercase tracking-widest block mb-2">
              — INDEX POLIMAR® SOLUTION
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-6">
              High-Performance Plastic Mulching Film
            </h3>

            <ul className="space-y-4 text-sm text-[#dce4ee]">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ffa94d] shrink-0 mt-2"></span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#ffa94d] font-mono">
              Result: 100% Field Reliability, Superior Crop Quality & Moisture Conservation.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
