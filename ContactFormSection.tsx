import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/siteData';
import { Phone, Mail, MapPin, CheckCircle2, Sparkles, Calendar, Clock } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { QuoteFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppFloatingButton';
import { getWhatsAppBookingUrl, generateGoogleCalendarUrl } from '../utils/bookingHelpers';

interface ContactFormSectionProps {
  initialService?: string;
  className?: string;
  isStandalonePage?: boolean;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  initialService = 'Ceramic Coating',
  className = '',
  isStandalonePage = false,
}) => {
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    vehicleYear: '',
    service: initialService,
    location: 'Abbotsford',
    preferredDate: tomorrowStr,
    preferredTime: '10:00 AM',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleMakeModel: '',
      vehicleYear: '',
      service: initialService,
      location: 'Abbotsford',
      preferredDate: tomorrowStr,
      preferredTime: '10:00 AM',
      message: '',
    });
  };

  const whatsappUrl = getWhatsAppBookingUrl(formData);
  const googleCalendarUrl = generateGoogleCalendarUrl(formData);

  return (
    <section id="contact-form-section" className={`py-16 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {!isStandalonePage && (
          <SectionHeading
            titlePrefix="NEED"
            highlightText="HELP?"
            subtitle="Contact Us!"
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Guidance & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#141414]">
              Let’s Discuss Your Vehicle’s Care
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              When it comes to vehicle care, we understand that every car and driving routine has unique needs. Reach out to us via call, WhatsApp, or request an appointment below!
            </p>

            <div className="pt-4 space-y-3.5">
              {/* WhatsApp Direct Card */}
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-card"
                className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 hover:border-[#25D366] transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-emerald-800">Chat on WhatsApp</span>
                  <span className="text-base font-extrabold text-[#141414] group-hover:text-emerald-700 transition-colors">
                    {BUSINESS_INFO.whatsappDisplay}
                  </span>
                  <span className="block text-xs text-neutral-600 mt-0.5">Instant messaging & photo consultations</span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                id="contact-call-card"
                className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#D72229] transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#D72229]/10 text-[#D72229] flex items-center justify-center shrink-0 group-hover:bg-[#D72229] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-neutral-500">Call Directly</span>
                  <span className="text-base font-extrabold text-[#141414] group-hover:text-[#D72229] transition-colors">
                    {BUSINESS_INFO.displayPhone}
                  </span>
                  <span className="block text-xs text-neutral-500 mt-0.5">Prompt response & consultations</span>
                </div>
              </a>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-neutral-500">Primary Location</span>
                  <span className="text-sm font-bold text-[#141414]">Abbotsford, British Columbia</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">Serving Abbotsford, Chilliwack, Mission, Langley & Aldergrove</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-neutral-500">Google Rating</span>
                  <span className="text-sm font-bold text-[#141414]">5.0 ★★★★★ Verified Detailer</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">Consistent 5-star vehicle detailing results</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote & Appointment Form */}
          <div className="lg:col-span-7 bg-[#fafafa] p-6 sm:p-10 rounded-xl border border-neutral-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#141414] uppercase">
                  Appointment Request Ready!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-neutral-900">{formData.name}</span>. Your request for{' '}
                  <span className="font-bold text-neutral-900">{formData.vehicleYear ? `${formData.vehicleYear} ` : ''}{formData.vehicleMakeModel}</span> ({formData.service}) on{' '}
                  <span className="font-bold text-[#D72229]">{formData.preferredDate} at {formData.preferredTime}</span> has been prepared.
                </p>

                {/* Instant Actions: WhatsApp & Google Calendar */}
                <div className="p-4 sm:p-5 bg-white rounded-xl border border-neutral-200 space-y-3 max-w-lg mx-auto text-left shadow-xs">
                  <p className="text-xs font-bold text-neutral-600 uppercase tracking-wider text-center">
                    Instant Calendar & Message Options
                  </p>

                  {/* WhatsApp Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-form-whatsapp-btn"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all transform hover:scale-[1.01]"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Send Booking Details to +1 778-878-3577 on WhatsApp</span>
                  </a>

                  {/* Google Calendar Action */}
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-form-calendar-btn"
                    className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all transform hover:scale-[1.01]"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Add to Google Calendar ({formData.preferredDate})</span>
                  </a>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-neutral-200 text-neutral-800 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-300 transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-[#D72229] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#b81b22] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.displayPhone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-200 pb-3 mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-extrabold uppercase tracking-tight text-[#141414]">
                      Schedule Appointment / Request Quote
                    </h4>
                    <p className="text-xs text-neutral-500">
                      Choose your preferred date/time and fill in your vehicle details.
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 text-[#25D366] border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 778-878-3577"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      City / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Abbotsford, Chilliwack, Mission..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      Vehicle Make & Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BMW X5, Honda Civic, Ford F-150"
                      value={formData.vehicleMakeModel}
                      onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                      Vehicle Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2024"
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors font-medium"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.headlineTitle}>
                        {s.headlineTitle}
                      </option>
                    ))}
                    <option value="Custom Combination Detail">Custom Combination Detail</option>
                    <option value="Consultation Needed">Not Sure — Recommend Best Option</option>
                  </select>
                </div>

                {/* Preferred Appointment Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-lg border border-neutral-300/80 shadow-2xs">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D72229]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-neutral-50 rounded border border-neutral-300 focus:border-[#D72229] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D72229]" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-neutral-50 rounded border border-neutral-300 focus:border-[#D72229] focus:bg-white focus:outline-none"
                    >
                      <option value="09:00 AM">09:00 AM (Morning Slot)</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM (Afternoon Slot)</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:30 PM">05:30 PM (Evening Drop-off)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you'd like done or any specific concerns (e.g. paint swirls, pet hair, interior stains, ceramic protection)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-3 text-xs bg-white rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="submit-contact-quote-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#D72229] hover:bg-[#b81b22] text-white text-xs uppercase font-bold tracking-wider px-8 py-3.5 rounded-full transition-all shadow hover:shadow-md cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? 'Preparing Booking...' : 'SUBMIT APPOINTMENT REQUEST'}
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
