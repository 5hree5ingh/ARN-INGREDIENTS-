export const company = {
  name: "ARN Ingredients Pvt. Ltd.",
  shortName: "ARN Ingredients",
  tagline: "Standardised by Science, Sourced from Nature",
  description:
    "Manufacturer, supplier and exporter of standardised herbal extracts, phytochemicals and cosmoceutical ingredients.",
  address: {
    line1: "Khasra No. 587, Akbarpuruood, Behind Shree Cement",
    line2: "Haridwar - Laksar Road, Lakshar",
    city: "Haridwar",
    state: "Uttarakhand",
    country: "India",
    pincode: "247663",
  },
  phones: ["+91-8130000846", "+91-8840804180"],
  email: "ARNINGREDIENTS@GMAIL.COM",
} as const;

export const addressLines = [
  company.address.line1,
  company.address.line2,
  `${company.address.city}, ${company.address.state}, ${company.address.country} - ${company.address.pincode}`,
];

// PLACEHOLDER: confirm real figures before launch.
export const stats = [
  { value: 500, suffix: "+", label: "Products" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];
