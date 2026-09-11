export const company = {
  name: "ARN Ingredients Pvt. Ltd.",
  shortName: "ARN Ingredients",
  tagline: "Standardised by Science, Sourced from Nature",
  description:
    "Manufacturer, supplier and exporter of standardised herbal extracts, phytochemicals and cosmoceutical ingredients.",
  address: {
    line1: "Plot No. 12/11, Pipli Mini Industrial Area",
    line2: "Khasra No. 587, Akbarpuruood, Behind Shree Cement",
    line3: "Haridwar - Laksar Road, Lakshar",
    city: "Haridwar",
    state: "Uttarakhand",
    country: "India",
    pincode: "247663",
  },
  salesOffice: {
    line1: "C115, Ithum Tower",
    line2: "Sector 62",
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

/** Pre-filled WhatsApp deep link. */
export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const addressLines = [
  company.address.line1,
  company.address.line2,
  company.address.line3,
  `${company.address.city}, ${company.address.state}, ${company.address.country} — ${company.address.pincode}`,
];

export const salesOfficeLines = [
  company.salesOffice.line1,
  company.salesOffice.line2,
  `${company.salesOffice.city}, ${company.salesOffice.state}, ${company.salesOffice.country} — ${company.salesOffice.pincode}`,
];

// PLACEHOLDER: confirm real figures before launch.
export const stats = [
  { value: 135, suffix: "+", label: "Products" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];
