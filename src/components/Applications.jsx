import React from 'react';

export default function Applications() {
  const applications = [
    {
      title: "Vegetables",
      subtitle: "Tomato, Chili, Brinjal, Okra & Capsicum",
      image: "/images/app_vegetables.jpg",
      description: "Enhances soil warmth, blocks weed competition, and supports drip irrigation efficiency for high-yield vegetable crops."
    },
    {
      title: "Fruits & Orchards",
      subtitle: "Strawberry, Papaya, Pomegranate & Banana",
      image: "/images/product_silver_black.jpg",
      description: "Silver-black reflective mulch regulates soil moisture and protects root zones in commercial fruit plantations."
    },
    {
      title: "Nursery & Seedlings",
      subtitle: "Germination & Soil Warming",
      image: "/images/hero_bg.jpg",
      description: "Transparent and clear solarization mulch film warms nursery soil and promotes uniform seedling emergence."
    },
    {
      title: "Horticulture & Flowers",
      subtitle: "Commercial Floriculture & Ornamental Crops",
      image: "/images/product_black.jpg",
      description: "Keeps foliage and flowers clean by preventing soil splash while maintaining soil microclimates."
    },
    {
      title: "Field Crops",
      subtitle: "Cotton, Sugarcane & Melons",
      image: "/images/hero_bg.jpg",
      description: "Extends weed suppression over long field rows, reducing water evaporation and labor costs."
    },
    {
      title: "Protected Cultivation",
      subtitle: "Polyhouse & Greenhouse Farming",
      image: "/images/mfg_extrusion.jpg",
      description: "Optimizes humidity and soil health under protected polyhouse environments for high-value crops."
    }
  ];

  return (
    <section id="applications" className="py-24 bg-[#0a1626] text-white border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">FIELD APPLICATIONS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            Solutions for <em className="not-italic text-[#ffa94d]">modern agriculture.</em>
          </h2>
          <p className="text-base sm:text-lg text-[#8b9aae] mt-3 font-normal">
            Designed for Diverse Farming Environments and High-Value Crops
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-[#0a1626]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626]/95 via-[#0a1626]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="font-mono text-xs font-semibold text-[#ffa94d] uppercase tracking-wider mb-1 block">
                  — {app.subtitle}
                </span>
                <h3 className="font-heading font-extrabold text-2xl mb-2 group-hover:text-[#ffa94d] transition-colors">
                  {app.title}
                </h3>
                <p className="text-xs text-[#8b9aae] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity line-clamp-3">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
