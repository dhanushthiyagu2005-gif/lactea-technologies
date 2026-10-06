import { COMPANY } from '@/lib/constants';

type EnquiryPayload = {
  name?: string;
  service?: string;
  date?: string;
  location?: string;
  problem?: string;
};

/** Build a WhatsApp deep link that pre-fills a message. */
export function buildWhatsappLink(message: string): string {
  return `${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function enquireService(service: string): string {
  return buildWhatsappLink(
    `Hello ${COMPANY.name}, I would like to enquire about your ${service} services. Please share more details.`
  );
}

export function buildBookingLink(p: EnquiryPayload): string {
  const lines = [
    `New Service Request for ${COMPANY.name}:`,
    ``,
    `Name: ${p.name || '-'}`,
    `Service Required: ${p.service || '-'}`,
    `Preferred Date: ${p.date || '-'}`,
    `Location: ${p.location || '-'}`,
    `Problem / Requirement: ${p.problem || '-'}`,
  ];
  return buildWhatsappLink(lines.join('\n'));
}
