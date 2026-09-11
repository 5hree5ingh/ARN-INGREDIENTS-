export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  icon: "droplet" | "flask" | "leaf" | "molecule" | "sparkle" | "factory";
  // PLACEHOLDER: stock photography — swap for ARN's own product shots.
  image: string;
  imageAlt: string;
  highlights: string[];
  // PLACEHOLDER: representative SKUs — replace with ARN's actual catalogue.
  items: { name: string; spec: string; source: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "essential-oils",
    name: "Essential Oils",
    summary:
      "Steam-distilled and cold-pressed oils with verified aroma and actives profiles.",
    intro:
      "Our essential oils are distilled from botanicals traced back to the growing region, then profiled by GC-MS so every batch you receive matches the one before it. Supplied in food, pharma and aroma grades.",
    icon: "droplet",
    image: "/images/cat-essential-oils.jpg",
    imageAlt: "Amber essential oil bottles with glass dropper on pale stone",
    highlights: [
      "GC-MS profile supplied with every batch",
      "Food, pharmaceutical and aroma grades",
      "Amber glass, HDPE and MS drum packing",
    ],
    items: [
      { name: "Peppermint Oil", spec: "Menthol 50–60%", source: "Mentha piperita" },
      { name: "Eucalyptus Oil", spec: "Cineole 70–80%", source: "Eucalyptus globulus" },
      { name: "Lemongrass Oil", spec: "Citral 75% min", source: "Cymbopogon flexuosus" },
      { name: "Clove Bud Oil", spec: "Eugenol 80% min", source: "Syzygium aromaticum" },
      { name: "Turmeric Oil", spec: "Ar-turmerone 40%", source: "Curcuma longa" },
    ],
  },
  {
    slug: "oleoresins",
    name: "Oleoresins",
    summary:
      "Solvent-extracted concentrates delivering full flavour and colour at consistent potency.",
    intro:
      "Oleoresins concentrate the volatile and non-volatile fractions of a spice into a single standardised liquid, giving formulators reproducible colour, pungency and flavour without the variability of raw botanicals.",
    icon: "flask",
    image: "/images/cat-oleoresins.jpg",
    imageAlt: "Warm amber oleoresin concentrate in ceramic dish with brass spatula",
    highlights: [
      "Standardised on colour value or pungency units",
      "Residual solvent within pharmacopoeial limits",
      "Dispersible and food-grade variants available",
    ],
    items: [
      { name: "Capsicum Oleoresin", spec: "1,00,000–20,00,000 SHU", source: "Capsicum annuum" },
      { name: "Paprika Oleoresin", spec: "40,000–1,00,000 CU", source: "Capsicum annuum" },
      { name: "Black Pepper Oleoresin", spec: "Piperine 40% min", source: "Piper nigrum" },
      { name: "Ginger Oleoresin", spec: "Gingerols 20–30%", source: "Zingiber officinale" },
      { name: "Turmeric Oleoresin", spec: "Curcuminoids 35–45%", source: "Curcuma longa" },
    ],
  },
  {
    slug: "herbal-extracts",
    name: "Standardised Herbal Extracts",
    summary:
      "Marker-standardised dry and liquid extracts meeting international pharmacopoeia limits.",
    intro:
      "Each extract is standardised against a named marker compound by HPLC or UV, with heavy metals, pesticide residue and microbiology tested to USP, EP and IP limits. Custom ratios and solvent systems on request.",
    icon: "leaf",
    image: "/images/cat-herbal-extracts.jpg",
    imageAlt: "Sage-green standardized extract powder in ceramic dish on pale stone",
    highlights: [
      "HPLC / UV standardisation against named markers",
      "Water, hydro-alcoholic and CO₂ extraction routes",
      "Full CoA, MSDS and stability data pack",
    ],
    items: [
      { name: "Ashwagandha Extract", spec: "Withanolides 2.5–10%", source: "Withania somnifera" },
      { name: "Boswellia Extract", spec: "AKBA 30%", source: "Boswellia serrata" },
      { name: "Gymnema Extract", spec: "Gymnemic acids 25–75%", source: "Gymnema sylvestre" },
      { name: "Green Tea Extract", spec: "Polyphenols 95%", source: "Camellia sinensis" },
      { name: "Ginseng Extract", spec: "Ginsenosides 20%", source: "Panax ginseng" },
      { name: "Bacopa Extract", spec: "Bacosides 20–50%", source: "Bacopa monnieri" },
    ],
  },
  {
    slug: "phytochemicals",
    name: "Phytochemicals",
    summary:
      "High-purity isolated actives for pharmaceutical and clinical nutrition applications.",
    intro:
      "Isolated and purified single molecules for formulators who need a defined active rather than a botanical matrix. Supplied with full characterisation — HPLC purity, identity by IR, and residual solvent data.",
    icon: "molecule",
    image: "/images/cat-phytochemicals.jpg",
    imageAlt: "Crystalline golden curcumin isolate in glass dish on pale stone",
    highlights: [
      "Purity from 90% to 98%+ by HPLC",
      "Identity confirmed by IR and melting point",
      "Nano and micronised particle sizes available",
    ],
    items: [
      { name: "Curcumin", spec: "Curcuminoids 95%", source: "Curcuma longa" },
      { name: "Nano Curcumin", spec: "Curcuminoids 30%", source: "Curcuma longa" },
      { name: "Berberine HCl", spec: "Purity 95–98%", source: "Berberis aristata" },
      { name: "Piperine", spec: "Purity 95%", source: "Piper nigrum" },
      { name: "Catechin", spec: "Purity 90%", source: "Acacia catechu" },
      { name: "L-Dopa", spec: "Purity 98%", source: "Mucuna pruriens" },
    ],
  },
  {
    slug: "cosmoceutical-ingredients",
    name: "Cosmoceutical Ingredients",
    summary:
      "Actives formulated for skin and hair care, supplied cosmetic-grade and preservative-compatible.",
    intro:
      "Botanical actives prepared specifically for topical formulation — colour-controlled, odour-controlled and screened for compatibility with common emulsion and surfactant systems.",
    icon: "sparkle",
    image: "/images/cat-cosmoceutical.jpg",
    imageAlt: "Pearlescent cosmetic-grade extract powder in frosted glass vessel with botanical serum",
    highlights: [
      "Cosmetic-grade with INCI documentation",
      "Water-soluble and oil-dispersible grades",
      "Colour and odour controlled for clear formulations",
    ],
    items: [
      { name: "Licorice Extract", spec: "Glabridin 10–40%", source: "Glycyrrhiza glabra" },
      { name: "Centella Extract", spec: "Triterpenes 10–80%", source: "Centella asiatica" },
      { name: "Aloe Vera Powder", spec: "200:1 concentrate", source: "Aloe barbadensis" },
      { name: "Neem Extract", spec: "Bitters 5–10%", source: "Azadirachta indica" },
      { name: "Bhringraj Extract", spec: "10:1 concentrate", source: "Eclipta alba" },
    ],
  },
  {
    slug: "contract-manufacturing",
    name: "Contract Manufacturing",
    summary:
      "End-to-end custom extraction and formulation under your specification and your brand.",
    intro:
      "Bring us a specification, a marker target or a finished-product brief and we will develop, scale and manufacture it. Capacity is reserved on a campaign basis with full batch traceability and documentation handed over at release.",
    icon: "factory",
    image: "/images/cat-contract-mfg.jpg",
    imageAlt: "Bespoke botanical extract vessel, custom sample vials and brass scoop on pale travertine",
    highlights: [
      "Custom marker targets and extraction ratios",
      "Pilot batches before commercial scale-up",
      "Complete batch documentation and traceability",
    ],
    items: [
      { name: "Custom Extraction", spec: "Pilot to commercial scale", source: "Client specification" },
      { name: "Spray-Dried Powders", spec: "Carrier and mesh to spec", source: "Client specification" },
      { name: "Standardisation to Marker", spec: "Client-defined assay", source: "Client specification" },
      { name: "Private Label Packing", spec: "Bulk and retail packs", source: "Client specification" },
    ],
  },
];

// PLACEHOLDER: marquee SKUs — swap for ARN's actual bestsellers.
export const popularProducts = [
  "AKBA 30%",
  "Ginseng Extract 20%",
  "Nano Curcumin 30%",
  "Curcumin 95% Curcuminoids",
  "Gymnema Extract 25–75%",
  "Acacia Catechin 90%",
  "Berberine HCl 95%",
  "Green Tea Extract 95%",
  "Ashwagandha Withanolides 10%",
  "Bacopa Bacosides 50%",
];

export const consultancyServices = [
  {
    title: "Herbal Extraction Projects",
    description:
      "Plant layouts, solvent recovery design and utility sizing for greenfield and expansion extraction facilities.",
    icon: "factory" as const,
  },
  {
    title: "Product Development",
    description:
      "From marker selection and extraction trials through to stability data and a transferable manufacturing process.",
    icon: "flask" as const,
  },
  {
    title: "Project Management",
    description:
      "Design engineering, vendor coordination, commissioning and qualification — in full or as individual work packages.",
    icon: "molecule" as const,
  },
];
