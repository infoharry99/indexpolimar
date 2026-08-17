import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import About from './components/About';
import ProductSection from './components/ProductSection';
import ProductDetailModal from './components/ProductDetailModal';
import WhyChooseUs from './components/WhyChooseUs';
import Applications from './components/Applications';
import Benefits from './components/Benefits';
import Manufacturing from './components/Manufacturing';
import QualitySection from './components/QualitySection';
import Gallery from './components/Gallery';
import QuoteCTA from './components/QuoteCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prefilledProduct, setPrefilledProduct] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleOpenQuote = (product = null) => {
    if (product) {
      setPrefilledProduct(product);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={() => handleOpenQuote()} />
        <TrustStats />
        <About />
        <ProductSection
          onViewDetails={(product) => setSelectedProduct(product)}
          onRequestQuote={(product) => handleOpenQuote(product)}
        />
        <WhyChooseUs />
        <Applications />
        <Benefits />
        <Manufacturing />
        <QualitySection />
        <Gallery />
        <QuoteCTA onOpenQuote={() => handleOpenQuote()} />
        <Contact prefilledProduct={prefilledProduct} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Interactive Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(product) => {
            setSelectedProduct(null);
            handleOpenQuote(product);
          }}
        />
      )}

      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
