import React, { useEffect } from 'react';
import { BUSINESS_INFO, LOCATIONS } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactFormSection } from '../components/ContactFormSection';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { ElfsightWidget } from '../components/ElfsightWidget';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Phone, Clock, Star, ShieldCheck, Mail, Navigation } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact RM Detailing | Car Detailing in Abbotsford, BC';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact RM Detailing in Abbotsford, BC. Call +1 778-878-3577 or request an online vehicle detailing quote today.'
      );
    }
  }, []);

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=2000&q=80"
            alt="Contact RM Detailing banner"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>Fast Responses & Honest Estimates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            CONTACT <span className="text-[#D72229]">US</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">
            Get in touch to request a quote, book a service, or ask any questions about our vehicle detailing solutions in Abbotsford and the Fraser Valley.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-[#D72229] transition-all flex items-start gap-4 group shadow-xs hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center shrink-0 group-hover:bg-[#D72229] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-neutral-500">Phone Consultation</span>
                <span className="text-base font-extrabold text-[#141414] group-hover:text-[#D72229] transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </span>
                <span className="block text-xs text-neutral-500 mt-1">Tap to call directly</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-neutral-500">Primary Hub</span>
                <span className="text-sm font-extrabold text-[#141414]">Abbotsford, BC</span>
                <span className="block text-xs text-neutral-500 mt-1">Serving all surrounding Fraser Valley areas</span>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-amber-500 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-neutral-500">Verified Rating</span>
                <span className="text-sm font-extrabold text-[#141414]">5.0 Star Google Rating</span>
                <span className="block text-xs text-neutral-500 mt-1">Reliable, professional vehicle detailing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quote & Inquiry Section */}
      <ContactFormSection isStandalonePage={true} />

      {/* Google Maps Location Section */}
      <section className="py-16 bg-[#f8f9fa] border-t border-neutral-200" id="location-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="OUR"
            highlightText="LOCATION"
            titleSuffix="& SERVICE AREA"
            subtitle="Based in Abbotsford, BC — Proudly Serving the entire Fraser Valley"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Map Embed Frame */}
            <div className="lg:col-span-8">
              <GoogleMapEmbed heightClass="h-[400px] sm:h-[450px]" />
            </div>

            {/* Location Details Box */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-extrabold uppercase text-[#141414] tracking-tight">
                  RM Detailing Abbotsford
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Abbotsford, British Columbia, Canada
                </p>
              </div>

              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-neutral-900 block">Phone</span>
                    <a href={BUSINESS_INFO.phoneHref} className="text-[#D72229] hover:underline font-semibold">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-neutral-900 block">Hours of Operation</span>
                    <span>Monday – Sunday: By Appointment</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-neutral-900 block">Areas Covered</span>
                    <span>Abbotsford, Chilliwack, Mission, Langley & Aldergrove</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=RM+Detailing+Abbotsford+BC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D72229] hover:bg-[#b81b22] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews on Contact Page */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="WHAT CLIENTS"
            highlightText="SAY ABOUT"
            titleSuffix="RM DETAILING"
            subtitle="Verified 5.0 Star Google Reviews"
          />

          <ElfsightWidget
            appId="elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};
