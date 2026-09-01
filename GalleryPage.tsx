import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { ElfsightWidget } from '../components/ElfsightWidget';
import { Sparkles, Phone, Instagram } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Car Detailing Gallery | RM Detailing Abbotsford, BC';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'View recent vehicle detailing transformations by RM Detailing in Abbotsford, BC. Ceramic coating, paint correction, interior & exterior detailing.'
      );
    }
  }, []);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Gallery' }]} />

      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=2000&q=80"
            alt="Automotive detailing gallery banner"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio of Recent Results</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            OUR <span className="text-[#D72229]">WORK</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">
            Explore authentic results from our detailing studio — from gloss-restored paintwork to immaculate interior cabins.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="RECENT"
            highlightText="TRANSFORMATIONS"
            subtitle="Click any vehicle photo to view in full resolution"
          />

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-900 aspect-4/3 cursor-pointer shadow-xs hover:shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Instagram Live Feed Section */}
      <section className="py-16 sm:py-20 bg-[#f8f9fa] border-t border-neutral-200" id="instagram-feed">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="LIVE FROM OUR"
            highlightText="INSTAGRAM"
            titleSuffix="FEED"
            subtitle="Latest Behind-The-Scenes, Customer Deliveries & Detailing Shots"
          />

          <div className="min-h-[280px]">
            <ElfsightWidget
              appId="elfsight-app-add898e2-60fb-44f2-af34-f3ba3bd66494"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Want Your Vehicle to Look Like This?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Reach out to RM Detailing today for custom recommendations in Abbotsford and Fraser Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-full"
            >
              GET A QUOTE
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 text-xs uppercase font-bold tracking-widest px-7 py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D72229]" />
              <span>CALL {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
