import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface GoogleMapEmbedProps {
  className?: string;
  heightClass?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  className = '',
  heightClass = 'h-[380px] sm:h-[450px]',
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-neutral-100 relative ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191400.688070181!2d-122.26766850000001!3d49.087045499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cccdbda39a89059%3A0xabd6f94a54833376!2sRM%20Detailing!5e1!3m2!1sen!2s!4v1788263292270!5m2!1sen!2s"
        width="100%"
        height="100%"
        className={`w-full ${heightClass} border-0 block`}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="RM Detailing Google Map Location in Abbotsford, BC"
      />
    </div>
  );
};
