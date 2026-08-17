import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function Contact({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    product: prefilledProduct ? prefilledProduct.name : 'Black Plastic Mulching Film',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#f4f6f8] text-[#13202f]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-3">CONNECT WITH OUR TEAM</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13202f] font-heading leading-tight">
            Contact <span className="text-[#e98423]">Index Polimar</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5b6672] mt-3 font-normal">
            Reach Out for Product Inquiries, Specifications & Direct Quotations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#dce1e6] flex items-start gap-4 shadow-sm hover:border-[#e98423] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0a1626] text-[#ffa94d] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[#13202f] text-base mb-1">Company Address</h3>
                <p className="text-sm font-semibold text-[#13202f]">INDEX POLIMAR®</p>
                <p className="text-xs text-[#5b6672] leading-relaxed">
                  Sanawad Bhikangaon Road<br />
                  Hirapur, Madhya Pradesh - 451111
                </p>
              </div>
            </div>

            {/* Phone & Call Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#dce1e6] flex items-start gap-4 shadow-sm hover:border-[#e98423] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0a1626] text-[#ffa94d] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[#13202f] text-base mb-1">Phone Contact</h3>
                <div className="flex flex-col gap-1 text-sm font-bold text-[#13202f] font-mono">
                  <a href="tel:6263225675" className="hover:text-[#e98423] transition-colors flex items-center gap-2">
                    📞 +91 6263225675
                  </a>
                  <a href="tel:9617232387" className="hover:text-[#e98423] transition-colors flex items-center gap-2">
                    📞 +91 9617232387
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#dce1e6] flex items-start gap-4 shadow-sm hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[#13202f] text-base mb-1">WhatsApp Quick Connect</h3>
                <p className="text-xs text-[#5b6672] mb-2">Instant product specs & pricing support on WhatsApp.</p>
                <a
                  href="https://wa.me/916263225675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 font-mono"
                >
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Embed Box */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#dce1e6] bg-slate-100">
              <iframe
                title="Index Polimar Sanawad Bhikangaon Road Hirapur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14800.0!2d76.06!3d22.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEyJzM2LjAiTiA3NsKwMDMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="p-3 bg-[#0a1626] text-white text-center text-xs font-mono">
                📍 Sanawad Bhikangaon Road, Hirapur
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#dce1e6] shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#13202f] font-heading">Enquiry Received!</h3>
                <p className="text-sm text-[#5b6672] max-w-md mx-auto">
                  Thank you <strong>{formData.name}</strong>. Our sales & technical team at INDEX POLIMAR will contact you shortly on <strong>{formData.phone}</strong> regarding your inquiry for {formData.product}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-6 px-6 py-2.5 rounded-full text-xs font-heading font-bold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#dce1e6] pb-4 mb-2">
                  <h3 className="text-2xl font-extrabold text-[#13202f] font-heading">Request Product Quote</h3>
                  <p className="text-xs text-[#5b6672]">Fill in your requirements below for bulk pricing and technical details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Company / Farm Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Patel Agro Farms"
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Product Interested In *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    >
                      {productsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                      Required Quantity (Rolls / Kg)
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 50 Rolls / 1000 Meters"
                      className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13202f] uppercase mb-1 font-mono">
                    Custom Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention any custom thickness (microns), width, roll length, or hole punching requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#dce1e6] focus:border-[#e98423] focus:ring-2 focus:ring-[#e98423]/20 bg-white text-[#13202f] text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-full text-slate-950 font-extrabold flex items-center justify-center gap-2 text-base font-heading shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
