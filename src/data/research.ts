// PLACEHOLDER: all research entries below are illustrative. Replace titles,
// journals and links with ARN's own publications and technical notes.

export const publishedResearch = [
  {
    journal: "Journal of Pharmaceutical Analysis",
    title: "HPLC quantification of curcuminoids in Curcuma longa extracts",
    summary:
      "A validated reverse-phase method for separating and quantifying the three principal curcuminoids in commercial extract batches.",
  },
  {
    journal: "Indian Journal of Natural Products",
    title: "Standardisation of gymnemic acid content in Gymnema sylvestre",
    summary:
      "Comparison of gravimetric and HPLC approaches to assaying gymnemic acids, with recommendations for routine QC use.",
  },
  {
    journal: "International Journal of Phytomedicine",
    title: "Stability of boswellic acids under accelerated storage conditions",
    summary:
      "Six-month accelerated stability data for AKBA-standardised Boswellia serrata extract across three packaging systems.",
  },
];

export const internalResearch = [
  {
    label: "Technical Note",
    title: "Cissus quadrangularis — extraction and marker profiling",
    summary:
      "Process notes on solvent selection and the marker profile obtained across three extraction ratios.",
  },
  {
    label: "Application Note",
    title: "Improving bioavailability of curcumin via particle size reduction",
    summary:
      "Dissolution comparison between standard 95% curcumin and a micronised nano grade in a simulated gastric medium.",
  },
  {
    label: "Method Note",
    title: "Residual solvent screening for hydro-alcoholic extracts",
    summary:
      "A headspace GC method for routine residual solvent screening within pharmacopoeial limits.",
  },
];

// PLACEHOLDER: replace with ARN's real certificates and certificate numbers.
export type Certification = {
  code: string;
  name: string;
  description: string;
  /** Official certification mark, stored in public/images/CERTIFICATIONS/ */
  logo: string;
};

export const certifications: Certification[] = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    description:
      "Documented quality management across sourcing, manufacturing, testing and dispatch.",
    logo: "/images/CERTIFICATIONS/iso-bg.png",
  },
  {
    code: "GMP",
    name: "Good Manufacturing Practice",
    description:
      "Manufacturing controls, hygiene and documentation practices audited against GMP requirements.",
    logo: "/images/CERTIFICATIONS/gmp-bg.png",
  },
  {
    code: "HACCP",
    name: "Food Safety Controls",
    description:
      "Hazard analysis and critical control points identified and monitored through the process.",
    logo: "/images/CERTIFICATIONS/haccp-bg.png",
  },
  {
    code: "FSSAI",
    name: "Food Safety Licence",
    description:
      "Licensed by the Food Safety and Standards Authority of India for food-grade production.",
    logo: "/images/CERTIFICATIONS/FSSAI_logo.png",
  },
  {
    code: "HALAL",
    name: "Halal Certified",
    description:
      "Sourcing and manufacturing certified as compliant with halal requirements.",
    logo: "/images/CERTIFICATIONS/halal-bg.png",
  },
  {
    code: "KOSHER",
    name: "Kosher Certified",
    description:
      "Production lines and ingredients certified to meet kosher dietary requirements.",
    logo: "/images/CERTIFICATIONS/kosher-bg.png",
  },
  {
    code: "SPICES BOARD",
    name: "Spices Board India",
    description:
      "Registered exporter with the Spices Board of India, the statutory body for spice and spice-product export.",
    logo: "/images/CERTIFICATIONS/spices-board.png",
  },
  {
    code: "MSME",
    name: "Micro, Small & Medium Enterprises",
    description:
      "Registered under the Government of India MSME framework for small and medium manufacturers.",
    logo: "/images/CERTIFICATIONS/msme-bg.png",
  },
];

// PLACEHOLDER: replace with ARN's actual plant and laboratory equipment list.
export const infrastructure = [
  {
    title: "Extraction Block",
    description:
      "Multi-solvent extractors with closed-loop solvent recovery, sized for both pilot campaigns and commercial batches.",
    points: ["Stainless steel extractors", "Closed-loop solvent recovery", "Pilot to commercial scale"],
  },
  {
    title: "Drying & Powder Handling",
    description:
      "Spray drying and vacuum drying lines with controlled mesh sizing and low-moisture packing under dehumidified conditions.",
    points: ["Spray and vacuum dryers", "Controlled mesh sizing", "Dehumidified packing area"],
  },
  {
    title: "Quality Control Laboratory",
    description:
      "Instrumented QC lab running identity, assay, residue and microbiological testing on every incoming and outgoing batch.",
    points: ["HPLC and UV-Vis", "GC headspace for residual solvents", "Microbiology and heavy metals"],
  },
  {
    title: "Warehousing & Dispatch",
    description:
      "Segregated raw material, quarantine and finished goods storage with batch-wise traceability through to dispatch.",
    points: ["Segregated storage zones", "Batch-wise traceability", "Export-ready documentation"],
  },
];
