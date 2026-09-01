import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LOCATIONS, BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { ElfsightWidget } from '../components/ElfsightWidget';
import { MapPin, ArrowRight, Phone, Sparkles, Shield } from 'lucide-react';

export const ServiceAreasPage: React.FC = () => {
  const { navigate, openQuoteModal } = useNavigation();

  useEffect(() => {
    document.title = 'Car Detailing Service Areas | RM Detailing Fraser Valley';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RM Detailing proudly serves vehicle owners in Abbotsford, Chilliwack, Mission, Langley, and Aldergrove, British Columbia.'
      );
    }
  }, []);

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
            alt="Fraser Valley car detailing service areas"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fraser Valley & Metro East</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            AREAS WE <span className="text-[#D72229]">SERVE</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            RM Detailing proudly serves vehicle owners in Abbotsford and surrounding communities across the Fraser Valley.
          </p>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="SELECT YOUR"
            highlightText="COMMUNITY"
            subtitle="Dedicated Auto Detailing Coverage"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#fafafa] rounded-xl p-7 border border-neutral-200 hover:border-[#D72229] transition-all flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center group-hover:bg-[#D72229] group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 bg-white px-2.5 py-1 rounded-full border border-neutral-200">
                      {loc.region}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#141414] group-hover:text-[#D72229] transition-colors mb-2">
                    Car Detailing {loc.cityName}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {loc.intro}
                  </p>

                  <div className="space-y-1.5 border-t border-neutral-200/60 pt-3">
                    <p className="text-[11px] font-bold text-neutral-800 uppercase">
                      Popular In {loc.cityName}:
                    </p>
                    {loc.popularServices.slice(0, 3).map((serv, idx) => (
                      <p key={idx} className="text-xs text-neutral-600 flex items-center gap-1.5">
                        <span className="text-[#D72229] font-bold">›</span>
                        <span>{serv}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate(`/${loc.slug}`)}
                    className="text-xs font-bold text-[#D72229] uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    <span>Location Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(`Service in ${loc.cityName}`)}
                    className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <section className="py-16 bg-[#f8f9fa] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="5.0 STAR"
            highlightText="CUSTOMER REVIEWS"
            subtitle="What Our Clients Say Across the Fraser Valley"
          />

          <ElfsightWidget
            appId="elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3"
            className="w-full"
          />
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="OUR"
            highlightText="SERVICE AREA"
            titleSuffix="MAP"
            subtitle="Headquartered in Abbotsford, BC — Covering Surrounding Communities"
          />

          <div className="max-w-4xl mx-auto">
            <GoogleMapEmbed heightClass="h-[380px] sm:h-[450px]" />
          </div>
        </div>
      </section>

      {/* Fraser Valley Commitment */}
      <section className="py-16 sm:py-20 bg-[#f8f9fa] border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <SectionHeading
            titlePrefix="COMMITTED TO"
            highlightText="FRASER VALLEY"
            titleSuffix="DRIVERS"
            subtitle="Local Precision Vehicle Care"
          />

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Whether you are dealing with winter highway slush along the Trans-Canada Highway, seasonal tree sap in Mission, or trail dust in Chilliwack, RM Detailing has the tools, chemistry, and dedication to keep your vehicle in prime condition.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 rounded-full shadow-sm"
            >
              REQUEST A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
