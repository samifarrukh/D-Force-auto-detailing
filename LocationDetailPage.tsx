import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LocationItem } from '../types';
import { LOCATIONS, SERVICES, BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { ElfsightWidget } from '../components/ElfsightWidget';
import { MapPin, Phone, Check, ArrowRight, Star, Shield, Sparkles } from 'lucide-react';

interface LocationDetailPageProps {
  location: LocationItem;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ location }) => {
  const { navigate, openQuoteModal } = useNavigation();

  useEffect(() => {
    document.title = location.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', location.metaDescription);
    }
  }, [location]);

  const nearbyLocations = LOCATIONS.filter((loc) =>
    location.nearbySlugs.includes(loc.slug)
  );

  return (
    <div className="w-full bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Service Areas', path: '/service-areas' },
          { label: `Car Detailing ${location.cityName}` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2000&q=80"
            alt={`Car detailing service in ${location.cityName}, BC`}
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 flex flex-col items-center">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.region}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {location.h1}
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            {location.intro}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              GET A QUOTE
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs uppercase font-bold tracking-widest px-7 py-3.5 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D72229]" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <SectionHeading
            titlePrefix="VEHICLE CARE FOR"
            highlightText={location.cityName.toUpperCase()}
            titleSuffix="DRIVERS"
            subtitle="Local Weather & Road Condition Protection"
          />

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            {location.localContext}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {location.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] p-4 rounded-lg border border-neutral-200 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Services in this Location */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="DETAILING SERVICES IN"
            highlightText={location.cityName.toUpperCase()}
            subtitle="Explore Our Core Auto Detailing Options"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-[#D72229] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src={s.image}
                      alt={s.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-base font-extrabold uppercase tracking-tight text-[#141414] group-hover:text-[#D72229] transition-colors mb-1">
                    {s.headlineTitle}
                  </h3>
                  <p className="text-xs text-neutral-500 italic mb-2 font-medium">
                    {s.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate(`/${s.slug}`)}
                    className="text-xs font-bold text-[#D72229] uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(`${s.headlineTitle} - ${location.cityName}`)}
                    className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Owners Choose RM Detailing */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <SectionHeading
            titlePrefix="WHY"
            highlightText={location.cityName.toUpperCase()}
            titleSuffix="CAR OWNERS TRUST RM DETAILING"
            subtitle="Quality, Punctuality & Verified 5.0 Star Feedback"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">
                5.0 Customer Rating
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Dedicated customer service with verified 5-star ratings across the Fraser Valley.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="w-6 h-6 text-[#D72229] mb-2 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">
                Safe Detailing Tech
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Scratch-free two-bucket contact washing and pH-neutral cleaners that protect vehicle integrity.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="w-6 h-6 text-[#D72229] mb-2 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">
                Direct Communication
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear quotes, prompt arrival, and honest evaluations for vehicle owners in {location.cityName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Specific FAQs */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="FREQUENTLY ASKED"
            highlightText="QUESTIONS"
            subtitle={`Car Detailing Inquiries for ${location.cityName}, BC`}
          />
          <FAQAccordion items={location.faqs} className="mt-8" />
        </div>
      </section>

      {/* Verified Google Reviews */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="5.0 STAR REVIEWS FROM"
            highlightText={location.cityName.toUpperCase()}
            titleSuffix="& FRASER VALLEY"
            subtitle="Verified Client Experiences & Results"
          />

          <ElfsightWidget
            appId="elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3"
            className="w-full"
          />
        </div>
      </section>

      {/* Map & Service Hub */}
      <section className="py-16 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="FRASER VALLEY"
            highlightText="SERVICE HUB"
            subtitle={`Serving ${location.cityName} and surrounding communities`}
          />

          <div className="max-w-4xl mx-auto">
            <GoogleMapEmbed heightClass="h-[360px] sm:h-[420px]" />
          </div>
        </div>
      </section>

      {/* Related Nearby Service Areas */}
      <section className="py-14 sm:py-16 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#D72229] mb-2">
            Other Nearby Service Areas
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6">
            We also serve drivers in neighboring communities across the Fraser Valley:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {nearbyLocations.map((nb) => (
              <a
                key={nb.id}
                href={`/${nb.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${nb.slug}`);
                }}
                className="bg-[#fafafa] hover:bg-white px-4 py-2 rounded-full border border-neutral-300 hover:border-[#D72229] text-xs font-bold text-neutral-800 hover:text-[#D72229] transition-all flex items-center gap-1.5 shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D72229]" />
                <span>Car Detailing {nb.cityName}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Ready for Premium Detailing in <span className="text-[#D72229]">{location.cityName}</span>?
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Book your car detailing, ceramic coating, or paint correction service today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal(`Service for ${location.cityName}`)}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              REQUEST A QUOTE
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 text-xs uppercase font-bold tracking-widest px-7 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
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
