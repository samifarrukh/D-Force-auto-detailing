import { QuoteFormData } from '../types';
import { BUSINESS_INFO } from '../data/siteData';

/**
 * Formats a clean, professional WhatsApp text message for booking inquiries.
 */
export function formatBookingWhatsAppMessage(formData: QuoteFormData): string {
  const parts = [
    `🚗 *RM DETAILING - APPOINTMENT / QUOTE REQUEST*`,
    ``,
    `👤 *Client Name:* ${formData.name}`,
    `📞 *Phone:* ${formData.phone}`,
    `✉️ *Email:* ${formData.email}`,
    `📍 *Location:* ${formData.location || 'Abbotsford, BC'}`,
    `🚙 *Vehicle:* ${formData.vehicleYear ? formData.vehicleYear + ' ' : ''}${formData.vehicleMakeModel}`,
    `✨ *Service:* ${formData.service}`,
  ];

  if (formData.preferredDate) {
    parts.push(`📅 *Preferred Date:* ${formData.preferredDate}`);
  }

  if (formData.preferredTime) {
    parts.push(`⏰ *Preferred Time:* ${formData.preferredTime}`);
  }

  if (formData.message && formData.message.trim()) {
    parts.push(`💬 *Notes / Vehicle Condition:* ${formData.message.trim()}`);
  }

  parts.push(``);
  parts.push(`Sent via RM Detailing Online Booking Portal (Abbotsford, BC)`);

  return parts.join('\n');
}

/**
 * Generates a direct WhatsApp link to RM Detailing (+1 778-878-3577) with pre-filled booking details.
 */
export function getWhatsAppBookingUrl(formData: QuoteFormData): string {
  const text = formatBookingWhatsAppMessage(formData);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a general WhatsApp chat link with an optional custom message.
 */
export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || `Hi RM Detailing! I would like to inquire about detailing services in Abbotsford.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a Google Calendar event URL for the user to add the appointment directly to their calendar.
 */
export function generateGoogleCalendarUrl(formData: QuoteFormData): string {
  // Parse date or fallback to tomorrow
  let dateStr = formData.preferredDate;
  if (!dateStr) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateStr = tomorrow.toISOString().split('T')[0];
  }

  // Parse time (e.g. "09:00 AM", "10:00 AM", "01:00 PM", "14:00", etc.)
  let hour = 10;
  let minute = 0;

  if (formData.preferredTime) {
    const rawTime = formData.preferredTime.toLowerCase().trim();
    const isPM = rawTime.includes('pm');
    const isAM = rawTime.includes('am');
    const cleanNumbers = rawTime.replace(/[^0-9:]/g, '');
    const [hStr, mStr] = cleanNumbers.split(':');
    
    if (hStr) {
      let parsedH = parseInt(hStr, 10);
      if (isPM && parsedH < 12) parsedH += 12;
      if (isAM && parsedH === 12) parsedH = 0;
      hour = parsedH;
    }
    if (mStr) {
      minute = parseInt(mStr, 10) || 0;
    }
  }

  // Format start and end times in YYYYMMDDTHHmmss format
  const [year, month, day] = dateStr.split('-').map((v) => parseInt(v, 10));
  const startDate = new Date(year, (month || 1) - 1, day || 1, hour, minute, 0);
  
  // Detailing appointments usually 2-3 hours duration
  const endDate = new Date(startDate.getTime() + 2.5 * 60 * 60 * 1000);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const formatCalTime = (d: Date) => {
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  };

  const startCal = formatCalTime(startDate);
  const endCal = formatCalTime(endDate);

  const title = `RM Detailing - ${formData.service || 'Vehicle Detailing'}`;
  const location = `RM Detailing, Abbotsford, BC, Canada (Tel: ${BUSINESS_INFO.displayPhone})`;
  
  const details = [
    `Vehicle: ${formData.vehicleYear ? formData.vehicleYear + ' ' : ''}${formData.vehicleMakeModel || 'Client Vehicle'}`,
    `Service: ${formData.service || 'Detailing Service'}`,
    `Location Area: ${formData.location || 'Abbotsford, BC'}`,
    `Client: ${formData.name || 'Client'} (${formData.phone || ''})`,
    `Studio Phone: ${BUSINESS_INFO.displayPhone}`,
    `Website: RM Detailing Abbotsford`,
    formData.message ? `Notes: ${formData.message}` : '',
  ].filter(Boolean).join('\n');

  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startCal}/${endCal}`,
    details: details,
    location: location,
  });

  return `${baseUrl}?${params.toString()}`;
}
