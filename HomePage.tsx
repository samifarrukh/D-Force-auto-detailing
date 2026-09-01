import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO, SERVICES, LOCATIONS, GALLERY_ITEMS } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { ContactFormSection } from '../components/ContactFormSection';
import { ElfsightWidget } from '../components/ElfsightWidget';
import {
  Phone,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Award,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openQuoteModal } = useNavigation();

  return (
    <div className="w-full bg-white">
      {/* ============================================================
          SECTION 1 — HERO
          ============================================================ */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Background Image with Subtle Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
            alt="Red BMW sports vehicle with premium ceramic coating reflection"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center text-white flex flex-col items-center">
          {/* Top Pill Badge - Hidden on mobile */}
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#D72229]/90 backdrop-blur-xs px-3.5 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abbotsford & Surrounding Fraser Valley</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08] max-w-4xl">
            Premium Car Detailing <br />
            <span className="text-[#D72229]">in Abbotsford</span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg md:text-xl text-neutral-200 font-medium max-w-2xl leading-relaxed">
            Professional vehicle care designed to restore, protect and maintain your car.
          </p>

          {/* Rating Summary */}
          <div className="mt-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-700/60">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white text-xs font-bold">5.0 Star Rated Automotive Care</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              type="button"
              id="hero-quote-btn"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              GET A QUOTE
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              id="hero-call-btn"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs uppercase font-bold tracking-widest px-7 py-4 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D72229]" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — INTRO / BRAND MESSAGE
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <SectionHeading
            titlePrefix="PREMIUM VEHICLE"
            highlightText="CARE"
            titleSuffix="STARTS HERE"
            subtitle="Meticulous Attention to Every Vehicle Surface"
          />

          <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto font-normal">
            At RM Detailing, we treat every car, truck, and SUV with the utmost care and attention. From durable ceramic coatings to deep interior sanitation and precision paint correction, our services are structured to revitalize your vehicle and keep it looking exceptional in all seasons.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs font-bold uppercase tracking-wider px-7 py-3 rounded-full shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — WHY CHOOSE RM DETAILING (Icon Benefits)
          ============================================================ */}
      <section className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center group hover:border-[#D72229]/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-5 group-hover:bg-[#D72229] group-hover:text-white transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#141414] mb-2">
                ATTENTION TO DETAIL
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Professional care focused on every part of your vehicle, from paintwork pores and wheel wells to interior stitch lines.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center group hover:border-[#D72229]/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-5 group-hover:bg-[#D72229] group-hover:text-white transition-all">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#141414] mb-2">
                QUALITY SERVICE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                A professional approach to vehicle detailing using pH-balanced products, micro-scratch prevention, and verified 5.0 star results.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center group hover:border-[#D72229]/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-5 group-hover:bg-[#D72229] group-hover:text-white transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#141414] mb-2">
                VEHICLE CARE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Services designed to clean, restore and protect your vehicle against Fraser Valley rain, road grime, and sun exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — POPULAR SERVICES (Vertical Editorial Layout as in Reference)
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="OUR MOST"
            highlightText="POPULAR"
            titleSuffix="SERVICES"
            subtitle="Professional Automotive Care Packages"
          />

          <div className="space-y-16 sm:space-y-24 mt-12">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={service.id} className="service-vertical-item">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Large Professional Image */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      } overflow-hidden rounded-lg shadow-sm border border-neutral-200`}
                    >
                      <img
                        src={service.image}
                        alt={service.altText}
                        className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Editorial Content */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'lg:order-1 text-left' : 'lg:order-2 text-left'
                      } space-y-4`}
                    >
                      <span className="text-xs font-bold text-[#D72229] uppercase tracking-widest">
                        Featured Service #{index + 1}
                      </span>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#141414]">
                        {service.headlineTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-500 italic font-medium">
                        {service.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 pt-1 text-xs text-neutral-700">
                        {service.included.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D72229] mt-0.5 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => navigate(`/${service.slug}`)}
                          className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-6 py-2.5 rounded-full shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
                        >
                          Learn More
                        </button>
                        <button
                          type="button"
                          onClick={() => openQuoteModal(service.headlineTitle)}
                          className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#D72229] px-3 py-2 transition-colors cursor-pointer"
                        >
                          Get Quote →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Divider between services */}
                  {index < SERVICES.length - 1 && (
                    <div className="mt-16 sm:mt-24 border-b border-neutral-200/80" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — 5-STAR GOOGLE REVIEWS (Elfsight Google Reviews)
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-y border-neutral-200" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="VERIFIED 5.0 STAR"
            highlightText="CUSTOMER"
            titleSuffix="REVIEWS"
            subtitle="Real Feedback from Abbotsford & Fraser Valley Car Owners"
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#141414]">5.0 Google Rating</span>
            </div>
            <span className="text-xs text-neutral-500 font-medium">Abbotsford, BC</span>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="min-h-[250px] flex items-center justify-center">
            <ElfsightWidget
              appId="elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — SERVICE AREA (Fraser Valley Local Locations)
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="PROFESSIONAL CAR DETAILING IN"
            highlightText="ABBOTSFORD"
            titleSuffix="& SURROUNDING AREAS"
            subtitle="Local Fraser Valley Vehicle Care Services"
          />

          <p className="text-center text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto mb-10">
            RM Detailing proudly serves vehicle owners throughout Abbotsford and neighboring communities with top-rated mobile and workshop detailing solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={`/${loc.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${loc.slug}`);
                }}
                className="bg-[#f8f9fa] p-6 rounded-lg border border-neutral-200 hover:border-[#D72229] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center mb-3 group-hover:bg-[#D72229] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#141414] group-hover:text-[#D72229] transition-colors uppercase">
                    {loc.cityName}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-1">{loc.region}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-[#D72229] font-bold">
                  <span>View Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate('/service-areas')}
              className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-7 py-3 rounded-full shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              VIEW SERVICE AREAS
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — RECENT WORK & INSTAGRAM FEED (Elfsight Instagram)
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            titlePrefix="FOLLOW OUR RECENT"
            highlightText="TRANSFORMATIONS"
            titleSuffix="ON INSTAGRAM"
            subtitle="Latest Detailing Projects & Studio Updates"
          />

          {/* Elfsight Instagram Widget */}
          <div className="mt-8 mb-10 min-h-[250px]">
            <ElfsightWidget
              appId="elfsight-app-add898e2-60fb-44f2-af34-f3ba3bd66494"
              className="w-full"
            />
          </div>

          {/* Featured Static Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 cursor-pointer aspect-4/3 shadow-xs hover:shadow-lg transition-all"
                onClick={() => navigate('/gallery')}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-7 py-3 rounded-full shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              VIEW FULL GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — ABOUT PREVIEW
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa] border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
                alt="Automotive detailer inspecting vehicle paint finish"
                className="w-full h-72 sm:h-96 object-cover object-center"
              />
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold text-[#D72229] uppercase tracking-widest">
                About RM Detailing
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#141414]">
                MORE THAN JUST <br />
                <span className="text-[#D72229]">A CAR WASH</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Car detailing is about preservation, precision, and genuine vehicle care. While automated car washes quickly sweep over surfaces with harsh abrasive brushes, RM Detailing focuses on meticulous hands-on processes that protect clear coat integrity, extract interior pollutants, and seal surfaces against Fraser Valley road grime.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We believe in honest communication, high standard craftsmanship, and creating a hassle-free experience for every car owner in Abbotsford and surrounding areas.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-7 py-3 rounded-full shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  ABOUT RM DETAILING
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 — CONTACT / QUOTE FORM
          ============================================================ */}
      <ContactFormSection />

      {/* ============================================================
          SECTION 9 — FINAL CTA
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#141414] text-white text-center border-t-2 border-[#D72229]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
            READY TO GIVE YOUR VEHICLE <br />
            <span className="text-[#D72229]">THE CARE IT DESERVES?</span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-300 max-w-xl mx-auto">
            Book an appointment or request an online quote today. Fast turnaround, 5-star customer service, and unmatched detailing in Abbotsford, BC.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              GET A QUOTE
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
