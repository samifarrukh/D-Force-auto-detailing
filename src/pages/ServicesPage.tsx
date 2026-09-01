import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES, BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { Check, Phone, ArrowRight, Shield, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate, openQuoteModal } = useNavigation();

  useEffect(() => {
    document.title = 'Professional Car Detailing Services | D Force Auto Detailing Abbotsford';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore D Force Auto Detailing car detailing services in Abbotsford: Ceramic coating, paint correction, interior shampooing, exterior wash, and complete car care.'
      );
    }
  }, []);

  const generalFAQs = [
    {
      question: 'Which car detailing service is best for my vehicle?',
      answer:
        'If your vehicle has paint swirls and you want long-lasting protection, we recommend Paint Correction paired with Ceramic Coating. If your cabin needs a deep refresh, our Premium Interior Cleaning or Full Car Detailing will restore both interior hygiene and exterior shine.',
    },
    {
      question: 'How do I prepare my car prior to detailing?',
      answer:
        'Please remove personal valuables, loose change, and child car seats if you would like the upholstery underneath shampooed. We handle all other cleaning and decontamination steps.',
    },
    {
      question: 'Do you offer mobile car detailing in Abbotsford and Fraser Valley?',
      answer:
        'Yes, we provide flexible detailing options across Abbotsford, Chilliwack, Mission, Langley, and Aldergrove.',
    },
  ];

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=2000&q=80"
            alt="Car detailing services banner"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Automotive Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Our Detailing Services <br />
            <span className="text-[#D72229]">in Abbotsford, BC</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">
            From precision ceramic coatings to deep interior sanitation and multi-stage paint correction, discover our specialized vehicle care packages.
          </p>
        </div>
      </section>

      {/* Services Grid with Large Imagery & Full Vertical Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="EXPLORE ALL"
            highlightText="SERVICES"
            subtitle="Tailored Automotive Rejuvenation & Protection"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-[#fafafa] rounded-xl overflow-hidden border border-neutral-200 hover:border-[#D72229] transition-all flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#141414]/90 text-white text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full border border-neutral-700">
                      Abbotsford
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-extrabold uppercase tracking-tight text-[#141414] group-hover:text-[#D72229] transition-colors mb-1">
                      {s.headlineTitle}
                    </h3>
                    <p className="text-xs text-neutral-500 italic mb-3 font-medium">
                      {s.subtitle}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {s.shortDescription}
                    </p>

                    <div className="space-y-1.5 border-t border-neutral-200/60 pt-3">
                      <p className="text-[11px] font-bold text-neutral-800 uppercase">
                        Package Highlights:
                      </p>
                      {s.included.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#D72229] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-200/60 flex items-center justify-between gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => navigate(`/${s.slug}`)}
                    className="text-xs font-bold text-[#D72229] uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(s.headlineTitle)}
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

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="GENERAL DETAILING"
            highlightText="QUESTIONS"
            subtitle="Common Inquiries About Vehicle Detailing in Abbotsford"
          />
          <FAQAccordion items={generalFAQs} className="mt-8" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Have Questions or Need a Custom Detailing Package?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Reach out to our team in Abbotsford. We provide straightforward advice and accurate pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-widest px-8 py-3.5 rounded-full"
            >
              REQUEST A QUOTE
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
