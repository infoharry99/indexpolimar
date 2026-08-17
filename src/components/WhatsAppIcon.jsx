import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppIcon({ size = 48, className = "" }) {
  return (
    <div 
      className={`rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border-2 border-white shrink-0 transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <MessageCircle className="w-[60%] h-[60%] text-white fill-white/10 stroke-[2.2]" />
    </div>
  );
}
