import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '../data/siteData';
import { X, CheckCircle2, Phone, Sparkles, Calendar, Clock } from 'lucide-react';
import { QuoteFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppFloatingButton';
import { getWhatsAppBookingUrl, generateGoogleCalendarUrl } from '../utils/bookingHelpers';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedQuoteService } = useNavigation();

  // Tomorrow as default date
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    vehicleYear: '',
    service: selectedQuoteService || 'Ceramic Coating',
    location: 'Abbotsford',
    preferredDate: tomorrowStr,
    preferredTime: '10:00 AM',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedQuoteService) {
      setFormData((prev) => ({ ...prev, service: selectedQuoteService }));
    }
  }, [selectedQuoteService]);

  if (!isQuoteModalOpen) return null;

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
      service: 'Ceramic Coating',
      location: 'Abbotsford',
      preferredDate: tomorrowStr,
      preferredTime: '10:00 AM',
      message: '',
    });
    closeQuoteModal();
  };

  const whatsappUrl = getWhatsAppBookingUrl(formData);
  const googleCalendarUrl = generateGoogleCalendarUrl(formData);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeQuoteModal();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden my-8 border border-neutral-200">
        {/* Modal Header */}
        <div className="bg-[#141414] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-[#D72229]">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#D72229] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded">
                Fast Response
              </span>
              <span className="text-neutral-400 text-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 5.0 Rated Detailing
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mt-1">
              Book Appointment / Get Quote
            </h3>
          </div>
          <button
            type="button"
            onClick={closeQuoteModal}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">
                Booking Request Prepared!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Your request for{' '}
                <span className="font-semibold text-neutral-900">{formData.vehicleYear ? `${formData.vehicleYear} ` : ''}{formData.vehicleMakeModel}</span> ({formData.service}) on{' '}
                <span className="font-semibold text-[#D72229]">{formData.preferredDate} at {formData.preferredTime}</span> has been created.
              </p>

              {/* Action Buttons: WhatsApp and Google Calendar */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2.5 text-left">
                <p className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider text-center">
                  Instant Next Actions
                </p>

                {/* 1. WhatsApp Direct Send Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-send-whatsapp-btn"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Send Booking via WhatsApp (+1 778-878-3577)</span>
                </a>

                {/* 2. Add to Google Calendar Button */}
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-add-google-calendar-btn"
                  className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Add to Google Calendar ({formData.preferredDate})</span>
                </a>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 bg-neutral-900 text-white text-xs font-bold uppercase px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D72229]" />
                  <span>Call {BUSINESS_INFO.displayPhone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-neutral-200 text-neutral-800 text-xs font-bold uppercase px-6 py-2.5 rounded-full hover:bg-neutral-300 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <p className="text-xs text-neutral-600">
                Select your preferred appointment date/time and vehicle details. We will confirm your slot promptly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 778-878-3577"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.cityName}>
                        {loc.cityName}, BC
                      </option>
                    ))}
                    <option value="Other Fraser Valley">Other Fraser Valley Area</option>
                  </select>
                </div>
              </div>

              {/* Vehicle info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Vehicle Make & Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BMW X5, Ford F-150, Tesla Model 3"
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                  Service Interested In *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white font-medium"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.headlineTitle}>
                      {s.headlineTitle}
                    </option>
                  ))}
                  <option value="Custom Detailing Package">Custom / Unsure — Need Advice</option>
                </select>
              </div>

              {/* Preferred Date & Time for Meeting/Appointment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D72229]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D72229]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-white font-medium"
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
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                  Message / Vehicle Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specific pet hair, swirls, scratches, or protection requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:border-[#D72229] focus:outline-none bg-neutral-50 focus:bg-white"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D72229] hover:bg-[#b81b22] text-white py-3 rounded-full text-xs uppercase font-bold tracking-wider transition-all shadow hover:shadow-md cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? 'Preparing Booking...' : 'Schedule & Get Quote'}
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs text-neutral-600">
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-bold"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#D72229] font-medium"
                >
                  <Phone className="w-3 h-3 text-[#D72229]" />
                  <span className="font-semibold">{BUSINESS_INFO.displayPhone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
