import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/siteData';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 0C5.396 0 .02 5.376.02 12.012c0 2.118.553 4.187 1.603 6.009L0 24l6.169-1.619a12.018 12.018 0 0 0 5.862 1.517h.005c6.632 0 12.008-5.376 12.008-12.013C24.044 5.376 18.664 0 12.031 0zm0 21.87c-1.802 0-3.568-.485-5.111-1.401l-.367-.218-3.799.997 1.014-3.702-.239-.381a9.988 9.988 0 0 1-1.533-5.153c0-5.521 4.492-10.013 10.038-10.013 2.68 0 5.2 1.044 7.094 2.94a10.007 10.007 0 0 1 2.944 7.094c0 5.523-4.492 10.017-10.037 10.017zm5.496-7.508c-.301-.151-1.782-.88-2.059-.98-.276-.101-.477-.151-.678.151-.201.302-.779.98-.955 1.181-.176.202-.351.226-.653.076-.301-.151-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.088-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.151-.176.201-.302.301-.503.101-.201.05-.377-.025-.528-.075-.151-.678-1.633-.929-2.236-.245-.588-.494-.508-.678-.517l-.578-.01c-.201 0-.527.075-.804.377-.276.302-1.054 1.03-1.054 2.512 0 1.482 1.079 2.914 1.23 3.115.151.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.198 1.897.12.578-.087 1.782-.728 2.033-1.432.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352z" />
  </svg>
);

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanded Bubble Tooltip on hover/desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-neutral-900 text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-neutral-200 mr-2 transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat on WhatsApp</span>
        <span className="text-[#D72229] font-extrabold">{BUSINESS_INFO.displayPhone}</span>
      </div>

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={BUSINESS_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with RM Detailing on WhatsApp (+1 778-878-3577)"
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-108 active:scale-95"
      >
        {/* Pulse effect badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};
