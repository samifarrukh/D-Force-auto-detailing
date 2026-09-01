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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7467783105135!2d-122.34601207740658!3d49.05198659504157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cb106da01e4f%3A0xa6c21fe619835338!2sD%20Force%20auto%20detailing!5e1!3m2!1sen!2s!4v1788274722632!5m2!1sen!2s"
        width="100%"
        height="100%"
        className={`w-full ${heightClass} border-0 block`}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="D Force Auto Detailing Google Map Location in Abbotsford, BC"
      />
    </div>
  );
};
