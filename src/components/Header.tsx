import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '../data/siteData';
import { Phone, Clock, MapPin, ChevronDown, Menu, X, Shield, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

export const Header: React.FC = () => {
  const { currentPath, navigate, openQuoteModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  };

  const isServicesActive = currentPath === '/services' || SERVICES.some((s) => currentPath === `/${s.slug}`);
  const isLocationsActive = currentPath === '/service-areas' || LOCATIONS.some((l) => currentPath === `/${l.slug}`);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-200">
      {/* Top Utility Bar - Hidden on mobile view */}
      <div className="hidden md:block bg-[#121212] text-neutral-300 text-xs py-2 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={BUSINESS_INFO.phoneHref}
              id="topbar-phone-link"
              className="flex items-center gap-1.5 hover:text-[#D72229] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D72229]" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="topbar-whatsapp-link"
              className="flex items-center gap-1.5 hover:text-[#25D366] text-emerald-400 transition-colors font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#D72229]" />
              <span>Mon–Sun: 24/7 </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-neutral-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D72229]" />
              <span>Serving Abbotsford & Surrounding Fraser Valley</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 bg-[#D72229]/20 text-[#D72229] px-2 py-0.5 rounded text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>5.0 Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-white transition-shadow duration-200 border-b border-neutral-100 ${
          isScrolled ? 'shadow-md py-3.5' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            id="brand-logo-link"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 bg-[#141414] rounded flex items-center justify-center border-2 border-[#D72229] shadow-sm group-hover:bg-[#D72229] transition-colors">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#141414] leading-none">
                D FORCE <span className="text-[#D72229]">AUTO DETAILING</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-semibold mt-0.5">
                Abbotsford, BC
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-2 ${
                currentPath === '/' ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('/services')}
                className={`flex items-center gap-1 text-xs uppercase font-bold tracking-wider transition-colors py-2 cursor-pointer ${
                  isServicesActive ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-xl border border-neutral-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/services');
                    }}
                    className="block px-4 py-2 text-xs font-bold text-[#D72229] hover:bg-neutral-50 border-b border-neutral-100 uppercase"
                  >
                    View All Services →
                  </a>
                  {SERVICES.map((service) => (
                    <a
                      key={service.id}
                      href={`/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/${service.slug}`);
                      }}
                      className="block px-4 py-2.5 text-xs text-neutral-700 hover:text-[#D72229] hover:bg-neutral-50 font-medium transition-colors"
                    >
                      {service.headlineTitle}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('/service-areas')}
                className={`flex items-center gap-1 text-xs uppercase font-bold tracking-wider transition-colors py-2 cursor-pointer ${
                  isLocationsActive ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-xl border border-neutral-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a
                    href="/service-areas"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/service-areas');
                    }}
                    className="block px-4 py-2 text-xs font-bold text-[#D72229] hover:bg-neutral-50 border-b border-neutral-100 uppercase"
                  >
                    All Service Areas →
                  </a>
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.id}
                      href={`/${loc.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/${loc.slug}`);
                      }}
                      className="block px-4 py-2.5 text-xs text-neutral-700 hover:text-[#D72229] hover:bg-neutral-50 font-medium transition-colors"
                    >
                      Car Detailing {loc.cityName}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/gallery');
              }}
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-2 ${
                currentPath === '/gallery' ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
              }`}
            >
              Gallery
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/about');
              }}
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-2 ${
                currentPath === '/about' ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/contact');
              }}
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-2 ${
                currentPath === '/contact' ? 'text-[#D72229]' : 'text-neutral-800 hover:text-[#D72229]'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="header-direct-whatsapp-button"
              className="text-xs font-bold text-neutral-800 hover:text-[#25D366] transition-colors px-2.5 py-2 flex items-center gap-1.5 border border-neutral-200 rounded-full hover:border-[#25D366]/40"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneHref}
              id="header-direct-call-button"
              className="text-xs font-bold text-neutral-800 hover:text-[#D72229] transition-colors px-2.5 py-2 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D72229]" />
              <span>Call Us</span>
            </a>

            <button
              type="button"
              id="header-quote-button"
              onClick={() => openQuoteModal()}
              className="bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu & Quote Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              type="button"
              id="mobile-quick-quote-button"
              onClick={() => openQuoteModal()}
              className="bg-[#D72229] text-white text-[11px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-sm"
            >
              Quote
            </button>

            <button
              type="button"
              id="mobile-menu-toggle-button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-[#D72229] rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="p-5 flex flex-col gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className={`text-sm font-bold uppercase tracking-wide py-2 border-b border-neutral-100 ${
                currentPath === '/' ? 'text-[#D72229]' : 'text-neutral-800'
              }`}
            >
              Home
            </a>

            {/* Mobile Services Accordion */}
            <div className="border-b border-neutral-100 py-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wide text-neutral-800"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[#D72229]' : ''
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2 pt-1">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/services');
                    }}
                    className="text-xs font-bold text-[#D72229] py-1"
                  >
                    • All Services Overview
                  </a>
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href={`/${s.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/${s.slug}`);
                      }}
                      className="text-xs text-neutral-700 py-1 font-medium"
                    >
                      • {s.headlineTitle}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations Accordion */}
            <div className="border-b border-neutral-100 py-1">
              <button
                type="button"
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wide text-neutral-800"
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileLocationsOpen ? 'rotate-180 text-[#D72229]' : ''
                  }`}
                />
              </button>
              {mobileLocationsOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2 pt-1">
                  <a
                    href="/service-areas"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/service-areas');
                    }}
                    className="text-xs font-bold text-[#D72229] py-1"
                  >
                    • All Service Areas
                  </a>
                  {LOCATIONS.map((l) => (
                    <a
                      key={l.id}
                      href={`/${l.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/${l.slug}`);
                      }}
                      className="text-xs text-neutral-700 py-1 font-medium"
                    >
                      • Car Detailing {l.cityName}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/gallery');
              }}
              className={`text-sm font-bold uppercase tracking-wide py-2 border-b border-neutral-100 ${
                currentPath === '/gallery' ? 'text-[#D72229]' : 'text-neutral-800'
              }`}
            >
              Gallery
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/about');
              }}
              className={`text-sm font-bold uppercase tracking-wide py-2 border-b border-neutral-100 ${
                currentPath === '/about' ? 'text-[#D72229]' : 'text-neutral-800'
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/contact');
              }}
              className={`text-sm font-bold uppercase tracking-wide py-2 border-b border-neutral-100 ${
                currentPath === '/contact' ? 'text-[#D72229]' : 'text-neutral-800'
              }`}
            >
              Contact
            </a>

            {/* Mobile CTAs in Drawer */}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                id="drawer-quote-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full bg-[#D72229] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center shadow"
              >
                Request Free Quote
              </button>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="drawer-whatsapp-button"
                className="w-full bg-[#25D366] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp ({BUSINESS_INFO.displayPhone})</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                id="drawer-phone-button"
                className="w-full bg-neutral-900 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D72229]" />
                <span>Call {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
