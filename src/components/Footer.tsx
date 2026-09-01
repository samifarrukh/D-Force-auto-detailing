import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '../data/siteData';
import { Phone, MapPin, Clock, Star, Shield, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

export const Footer: React.FC = () => {
  const { navigate, openQuoteModal } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-neutral-300 pt-16 pb-12 border-t-4 border-[#D72229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#1f1f1f] rounded flex items-center justify-center border border-[#D72229]">
                <Shield className="w-5 h-5 text-[#D72229]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                D FORCE <span className="text-[#D72229]">AUTO DETAILING</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Professional car detailing, ceramic coating, and paint correction in Abbotsford and surrounding Fraser Valley communities. Dedicated to restoring, protecting, and maintaining your vehicle.
            </p>

            {/* Google Rating Badge */}
            <div className="bg-[#1f1f1f] p-3.5 rounded-md border border-neutral-800 inline-block">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white text-xs font-bold ml-1.5">{BUSINESS_INFO.ratingDisplay}</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Verified 5.0 Star Google Rating (28 reviews) in Abbotsford, BC
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links & SEO Services */}
          <div>
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider mb-4 pb-1 border-b border-neutral-800 inline-block">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${s.slug}`);
                    }}
                    className="hover:text-[#D72229] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D72229] text-[10px]">›</span>
                    <span>{s.headlineTitle}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services');
                  }}
                  className="text-[#D72229] hover:underline font-bold text-xs"
                >
                  View All Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider mb-4 pb-1 border-b border-neutral-800 inline-block">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={`/${loc.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${loc.slug}`);
                    }}
                    className="hover:text-[#D72229] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D72229] text-[10px]">›</span>
                    <span>Car Detailing {loc.cityName}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/service-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/service-areas');
                  }}
                  className="text-[#D72229] hover:underline font-bold text-xs"
                >
                  All Service Areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider mb-4 pb-1 border-b border-neutral-800 inline-block">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs text-neutral-300">
              <a
                href={BUSINESS_INFO.phoneHref}
                id="footer-phone-call-link"
                className="flex items-start gap-2.5 text-white hover:text-[#D72229] transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.displayPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="flex items-start gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold text-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
              </a>

              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-[#D72229] mt-0.5 shrink-0" />
                <div>
                  <p>{BUSINESS_INFO.hoursDisplay}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase font-bold tracking-wider py-2.5 rounded-full text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                id="footer-get-quote-button"
                onClick={() => openQuoteModal()}
                className="w-full bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider py-2.5 rounded-full text-center transition-all shadow-sm cursor-pointer"
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Quick Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-center sm:text-left">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/service-areas"
              onClick={(e) => {
                e.preventDefault();
                navigate('/service-areas');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Service Areas
            </a>
            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                navigate('/gallery');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Gallery
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-center sm:text-right">
              Copyright © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All Rights Reserved.
            </p>
            <button
              type="button"
              id="back-to-top-button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#D72229] text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
