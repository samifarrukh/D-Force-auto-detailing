import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { ElfsightWidget } from '../components/ElfsightWidget';
import { Shield, Sparkles, Award, Star, Phone, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  useEffect(() => {
    document.title = 'About RM Detailing | Premium Car Care in Abbotsford, BC';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about RM Detailing in Abbotsford, BC. Our philosophy is rooted in meticulous vehicle care, attention to detail, and quality results.'
      );
    }
  }, []);

  return (
    <div className="w-full bg-white">
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
            alt="About RM Detailing vehicle care banner"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229] px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Dedicated Automotive Craftsmanship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            ABOUT <span className="text-[#D72229]">RM DETAILING</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">
            Professional vehicle care designed to restore, protect, and maintain your car with precision and pride.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
                alt="Detailing precision vehicle paint finish"
                className="w-full h-80 sm:h-[420px] object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold text-[#D72229] uppercase tracking-widest">
                Our Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#141414]">
                A Commitment to Quality & Respect for Every Vehicle
              </h2>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                RM Detailing was established around a simple but unwavering premise: vehicles are significant investments that deserve meticulous, honest care. Rather than treating car washing as a hurried assembly line, we take the time to examine every panel, crease, stitch, and wheel.
              </p>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Based in Abbotsford and serving the broader Fraser Valley, we recognize the local environmental challenges vehicle owners face — heavy rain, highway grit, pollen, and mud. We utilize dedicated methods that protect surfaces without introducing scratches or dulling factory finishes.
              </p>

              {/* Verified 5-Star Callout */}
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center gap-3 mt-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-neutral-800">
                  5.0 Google Rating from Fraser Valley Vehicle Owners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="OUR FOUR"
            highlightText="CORE PILLARS"
            subtitle="The Standards Behind Every Appointment"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Pillar 1 */}
            <div className="bg-white p-7 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold uppercase text-[#141414] mb-2">
                  Vehicle Care
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Gentle yet effective cleaning chemistry that cleans without stripping natural leather oils or compromising clear coats.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-7 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold uppercase text-[#141414] mb-2">
                  Attention to Detail
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  From air vent vanes and console seams to lug nut wells, no crevice is neglected.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-7 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold uppercase text-[#141414] mb-2">
                  Professional Service
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Punctual communication, transparent pricing, and straightforward vehicle consultations without high-pressure sales.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-7 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold uppercase text-[#141414] mb-2">
                  Quality Results
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Breathtaking gloss depth, hydrophobic water beading, and fresh, sanitized vehicle cabins that stay cleaner longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="CLIENT"
            highlightText="TESTIMONIALS"
            subtitle="Read Verified 5.0 Star Reviews on Google"
          />

          <ElfsightWidget
            appId="elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3"
            className="w-full"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Experience the RM Detailing Difference
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Book your car detailing, ceramic coating, or paint correction service in Abbotsford today.
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
