import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO } from '../data/siteData';
import { Phone, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

export const FloatingMobileCTA: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-2.5 py-2 shadow-2xl flex items-center gap-1.5">
      <a
        href={BUSINESS_INFO.phoneHref}
        id="mobile-sticky-call-btn"
        className="flex-1 bg-neutral-900 hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider py-2.5 px-2 rounded-full flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-[0.98]"
      >
        <Phone className="w-3.5 h-3.5 text-[#D72229]" />
        <span>Call</span>
      </a>

      <a
        href={BUSINESS_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-sticky-whatsapp-btn"
        className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-bold uppercase tracking-wider py-2.5 px-2 rounded-full flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-[0.98]"
      >
        <WhatsAppIcon className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        id="mobile-sticky-quote-btn"
        onClick={() => openQuoteModal()}
        className="flex-1 bg-[#D72229] hover:bg-[#b81b22] text-white text-[11px] font-bold uppercase tracking-wider py-2.5 px-2 rounded-full flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-[0.98] cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book</span>
      </button>
    </div>
  );
};
