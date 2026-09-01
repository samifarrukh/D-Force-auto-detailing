import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ServiceItem } from '../types';
import { SERVICES, LOCATIONS, GALLERY_ITEMS, BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  Check,
  Phone,
  Shield,
  Sparkles,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const { navigate, openQuoteModal } = useNavigation();

  useEffect(() => {
    document.title = service.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.metaDescription);
    }
  }, [service]);

  const relatedServices = SERVICES.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  const relatedGallery = GALLERY_ITEMS.filter(
    (g) =>
      g.category === service.headlineTitle ||
      g.title.toLowerCase().includes(service.id.replace('-', ' ')) ||
      g.caption.toLowerCase().includes(service.headlineTitle.toLowerCase())
  ).slice(0, 3);

  const galleryToShow =
    relatedGallery.length >= 2 ? relatedGallery : GALLERY_ITEMS.slice(0, 3);

  return (
    <div className="w-full bg-white">
      {/* 1. Breadcrumb */}
      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.headlineTitle },
        ]}
      />

      {/* 2 & 3. Hero Section with Large Image & SEO H1 */}
      <section className="relative bg-black text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.altText}
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abbotsford, BC Vehicle Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-3xl">
            {service.h1}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-neutral-200 font-medium max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openQuoteModal(service.headlineTitle)}
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

      {/* 4. Service Introduction */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <SectionHeading
            titlePrefix="ABOUT THIS"
            highlightText="SERVICE"
            subtitle="Professional Automotive Care for Abbotsford Drivers"
          />

          <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* 5. What Is Included */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="WHAT IS"
            highlightText="INCLUDED"
            subtitle="Our Complete Multi-Step Process"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {service.included.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg border border-neutral-200/80 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="KEY"
            highlightText="BENEFITS"
            subtitle="Why Invest in Professional Vehicle Protection"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] p-6 rounded-xl border border-neutral-200 flex flex-col justify-between group hover:border-[#D72229]/50 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-4 group-hover:bg-[#D72229] group-hover:text-white transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase text-[#141414] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose RM Detailing */}
      <section className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <SectionHeading
            titlePrefix="WHY CHOOSE"
            highlightText="RM DETAILING"
            subtitle="Dedicated to Craftsmanship & Customer Satisfaction"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">5.0 Star Rated</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Consistent 5-star customer ratings across Abbotsford and Fraser Valley vehicle owners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="w-6 h-6 text-[#D72229] mb-2 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">Premium Products</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We use industry-trusted compounds, safe pH-neutral chemicals, and professional ceramic formulas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="w-6 h-6 text-[#D72229] mb-2 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-[#141414] mb-1">Hassle-Free Booking</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear communication, punctual turnaround, and custom solutions matching your exact vehicle type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Related Gallery Images */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="RELATED"
            highlightText="WORK"
            subtitle="Results from our Detailing Studio"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {galleryToShow.map((item) => (
              <div
                key={item.id}
                className="group rounded-lg overflow-hidden border border-neutral-200 bg-neutral-900 aspect-4/3 relative cursor-pointer"
                onClick={() => navigate('/gallery')}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-white font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="text-xs font-bold uppercase tracking-wider text-[#D72229] hover:underline"
            >
              View Full Gallery →
            </button>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="FREQUENTLY ASKED"
            highlightText="QUESTIONS"
            subtitle={`Everything You Need to Know About ${service.headlineTitle}`}
          />

          <FAQAccordion items={service.faqs} className="mt-8" />
        </div>
      </section>

      {/* 10. Related Services */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="EXPLORE RELATED"
            highlightText="SERVICES"
            subtitle="Complete Auto Detailing Packages in Abbotsford"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="bg-neutral-50 rounded-lg p-5 border border-neutral-200 hover:border-[#D72229] transition-all flex flex-col justify-between group"
              >
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-[#141414] group-hover:text-[#D72229] transition-colors mb-2">
                    {rel.headlineTitle}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-200/60">
                  <button
                    type="button"
                    onClick={() => navigate(`/${rel.slug}`)}
                    className="text-xs font-bold text-[#D72229] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Service Areas Link */}
      <section className="py-12 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#D72229] mb-2">
            Available Service Areas
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6">
            We provide {service.headlineTitle.toLowerCase()} across Abbotsford and surrounding Fraser Valley communities:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={`/${loc.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${loc.slug}`);
                }}
                className="bg-white px-3.5 py-1.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:border-[#D72229] hover:text-[#D72229] transition-colors flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-[#D72229]" />
                <span>{loc.cityName}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Strong CTA */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Ready to Schedule Your <br />
            <span className="text-[#D72229]">{service.headlineTitle}</span> in Abbotsford?
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Contact RM Detailing today for an honest, upfront quote tailored to your vehicle’s condition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal(service.headlineTitle)}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              REQUEST A QUOTE
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 text-xs uppercase font-bold tracking-widest px-7 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D72229]" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
