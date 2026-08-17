import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const defaultMsg = encodeURIComponent("Hello Index Polimar, I am interested in your plastic mulching film products. Please share product details and pricing.");

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-end">
      
      {/* Contact Selector Popup */}
      {open && (
        <div className="mb-3 bg-white rounded-2xl p-4 shadow-2xl border border-[#dce1e6] text-[#13202f] w-72 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#f4f6f8] pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-xs text-[#13202f]">Index Polimar WhatsApp</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#5b6672] mb-3">
            Select a representative line to chat on WhatsApp:
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/916263225675?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-900 transition-colors font-mono"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Line 1: 6263225675</span>
              </div>
              <span className="text-[10px] bg-[#25D366] text-white px-2 py-0.5 rounded">Chat</span>
            </a>

            <a
              href={`https://wa.me/919617232387?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-900 transition-colors font-mono"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Line 2: 9617232387</span>
              </div>
              <span className="text-[10px] bg-[#25D366] text-white px-2 py-0.5 rounded">Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-[58px] h-[58px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:scale-105 border-2 border-white"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-8 h-8 fill-white/20" />
      </button>

    </div>
  );
}
