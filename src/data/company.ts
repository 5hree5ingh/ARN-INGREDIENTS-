export const company = {
  name: "ARN Ingredients Pvt. Ltd.",
  shortName: "ARN Ingredients",
  tagline: "Standardised by Science, Sourced from Nature",
  description:
    "Manufacturer, supplier and exporter of standardised herbal extracts, phytochemicals and cosmoceutical ingredients.",
  address: {
    line1: "Plot No. 1-11, Pipli Mini Industrial Area",
    city: "Haridwar",
    state: "Uttarakhand",
    country: "India",
    pincode: "247663",
  },
  salesOffice: {
    line1: "C115, Ithum Tower, Sector 62",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "201309",
  },
  phones: ["+91-8130000846", "+91-8840804180"],
  email: "ARNINGREDIENTS@GMAIL.COM",
  // Digits only — used for both wa.me links and the primary enquiry phone line.
  whatsapp: "918840804180",
} as const;

/**
 * Enquiry routes, split by purpose so buyers and suppliers call the right
 * line. Each has its own phone number; email is shared and shown once,
 * separately, rather than repeated under both.
 */
export const enquiryContacts = [
  {
    label: "Sales Enquiry",
    note: "Quotations, samples and orders",
    phone: company.phones[0],
  },
  {
    label: "Purchase Enquiry",
    note: "Raw material and vendor offers",
    phone: company.phones[1],
  },
] as const;

/** `mailto:` link with the subject pre-filled. */
export function mailtoLink(address: string, subject: string) {
  return `mailto:${address}?subject=${encodeURIComponent(subject)}`;
}

/** Pre-filled WhatsApp deep link. */
export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const addressLines = [
  company.address.line1,
  `${company.address.city}, ${company.address.state}, ${company.address.country} — ${company.address.pincode}`,
];

export const salesOfficeLines = [
  company.salesOffice.line1,
  `${company.salesOffice.city}, ${company.salesOffice.state}, ${company.salesOffice.country} — ${company.salesOffice.pincode}`,
];

export const stats = [
  { value: 1350, suffix: "+", label: "Products" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];
