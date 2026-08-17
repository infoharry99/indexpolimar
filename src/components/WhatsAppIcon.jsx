import React from 'react';

export default function WhatsAppIcon({ size = 56, className = "" }) {
  return (
    <div 
      className={`shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        src="/images/whatsapp_official.svg"
        alt="WhatsApp Icon"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
