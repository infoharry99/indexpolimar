import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            {isPrivacy ? <ShieldCheck className="w-5 h-5 text-blue-400" /> : <FileText className="w-5 h-5 text-blue-400" />}
            <h3 className="font-extrabold text-lg">
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto">
          {isPrivacy ? (
            <>
              <p><strong>INDEX POLIMAR®</strong> values your privacy. This policy explains how we collect and manage your business enquiry data.</p>
              <h4 className="font-bold text-slate-900 text-sm">Information Collection</h4>
              <p>We collect contact details (name, company name, phone number, email, roll quantity requirements) submitted through our enquiry form solely to process product quotes.</p>
              <h4 className="font-bold text-slate-900 text-sm">Data Security</h4>
              <p>Your information is handled strictly for business correspondence and will never be sold or shared with unauthorized third parties.</p>
            </>
          ) : (
            <>
              <p>Welcome to <strong>INDEX POLIMAR®</strong>. By accessing our corporate website, you agree to these standard business terms.</p>
              <h4 className="font-bold text-slate-900 text-sm">Product Specifications</h4>
              <p>All product dimensions, micron options, and roll specifications presented on this site are for commercial reference. Technical specifications can be tailored upon quotation confirmation.</p>
              <h4 className="font-bold text-slate-900 text-sm">Intellectual Property</h4>
              <p>All trademarks, brand logos, and content regarding INDEX POLIMAR® are protected under Indian intellectual property laws.</p>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-3 text-right border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
