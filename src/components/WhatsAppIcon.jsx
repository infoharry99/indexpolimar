import React from 'react';

export default function WhatsAppIcon({ size = 48, className = "" }) {
  return (
    <div 
      className={`rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg 
        viewBox="0 0 500 500" 
        className="w-[78%] h-[78%]"
      >
        {/* White Speech Bubble Outline */}
        <path 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="30" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          d="M 250 100 C 167.2 100 100 167.2 100 250 C 100 280.5 109.1 308.8 124.8 332.4 L 105 405 L 180 385.5 C 201.5 397.7 225 400 250 400 C 332.8 400 400 332.8 400 250 C 400 167.2 332.8 100 250 100 Z"
        />
        {/* White Phone Handset inside Speech Bubble */}
        <path 
          fill="#FFFFFF" 
          d="M 205 185 C 198 185 190 190 187 200 C 180 220 195 260 235 300 C 275 340 315 355 335 348 C 345 345 350 337 350 330 L 330 295 C 326 288 316 285 309 289 L 290 300 C 270 288 252 270 240 250 L 251 231 C 255 224 252 214 245 210 L 210 190 Z"
        />
      </svg>
    </div>
  );
}
