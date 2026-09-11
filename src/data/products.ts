export type ProductItem = {
  name: string;
  botanical?: string;
  spec?: string; // biomarker & specification
  method?: string; // method of analysis
  application?: string;
};

export type ProductGroup = {
  title: string;
  items: string[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  icon: "droplet" | "flask" | "leaf" | "molecule" | "sparkle" | "factory";
  image: string;
  imageAlt: string;
  highlights: string[];
  // Categories with a full spec sheet use `items`; simple powder ranges use
  // `groups` (rendered as grouped name lists rather than a spec table).
  items?: ProductItem[];
  groups?: ProductGroup[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "herbal-extracts",
    name: "Standardised Herbal Extracts",
    summary:
      "Marker-standardised dry and hydro-alcoholic extracts meeting international pharmacopoeia limits.",
    intro:
      "Each extract is standardised against a named marker compound by HPLC, UV, gravimetric or titrimetric assay, with heavy metals, pesticide residue and microbiology tested to BP/USP limits. Custom ratios and solvent systems available on request.",
    icon: "leaf",
    image: "/images/cat-herbal-extracts.jpg",
    imageAlt: "Sage-green standardized extract powder in ceramic dish on pale stone",
    highlights: [
      "Standardised against a named biomarker on every batch",
      "HPLC, UV, gravimetric and titrimetric methods",
      "Full CoA, MSDS and stability data pack",
    ],
    items: [
      { name: "Amla Fresh Juice Powder", botanical: "Emblica officinalis", spec: "Hydrolysable tannins 20–40%, Vit C >3%", method: "Titration", application: "Antioxidant, anti-ageing skin" },
      { name: "Aloe Vera Extract", botanical: "Aloe vera", spec: "200:1 concentrate", method: "Gravimetric", application: "Cosmetic ingredient" },
      { name: "Garlic Extract", botanical: "Allium sativum", spec: "Allicin ≥1.0%", method: "HPLC", application: "Cholesterol, lipid support" },
      { name: "Kalmegh Extract", botanical: "Andrographis paniculata", spec: "Andrographolides 10–50%", method: "HPLC", application: "Liver support" },
      { name: "Bacopa Extract", botanical: "Bacopa monnieri", spec: "Bacosides 10–50%", method: "HPLC / UV", application: "Memory support" },
      { name: "Banaba Extract", botanical: "Lagerstroemia speciosa", spec: "Corosolic acid 1–2%", method: "HPLC", application: "Blood sugar, weight" },
      { name: "Black Pepper Extract", botanical: "Piper nigrum", spec: "Piperine 95%", method: "HPLC", application: "Digestive, bioavailability" },
      { name: "Boswellia Extract", botanical: "Boswellia serrata", spec: "Boswellic acids 65%", method: "Titration", application: "Anti-inflammatory" },
      { name: "Boswellia Extract (AKBA)", botanical: "Boswellia serrata", spec: "AKBA 30–90%", method: "HPLC", application: "Anti-inflammatory" },
      { name: "Bamboo Extract", botanical: "Bambusa arundinacea", spec: "Natural silica 75%", method: "Gravimetric", application: "Bone & skin support" },
      { name: "Calcium Sennosides", botanical: "Cassia angustifolia", spec: "Sennosides 6–20%", method: "BP/USP HPLC", application: "Laxative" },
      { name: "Cassia Fistula Extract", botanical: "Cassia fistula", spec: "Saponins 10%", method: "Gravimetric", application: "Skin, constipation" },
      { name: "Cissus Extract", botanical: "Cissus quadrangularis", spec: "Ketosterones 5–40%", method: "Gravimetric", application: "Bone health" },
      { name: "Vijaysar Extract", botanical: "Pterocarpus marsupium", spec: "Tannins 20%", method: "Gravimetric", application: "Blood sugar" },
      { name: "Coffee Bean Extract", botanical: "Coffea robusta", spec: "Chlorogenic acid 45–50%", method: "HPLC", application: "Antioxidant, weight" },
      { name: "Cinnamon Extract", botanical: "Cinnamomum zeylanicum", spec: "Polyphenols 10–20%", method: "UV", application: "Anti-diabetic, antioxidant" },
      { name: "Papaya Leaf Extract", botanical: "Carica papaya", spec: "Tannins 40%, flavonoids 5%", method: "Titration", application: "Platelet support" },
      { name: "Bhringraj Extract", botanical: "Eclipta alba", spec: "Bitters 3%", method: "Gravimetric", application: "Liver tonic, hair" },
      { name: "Fenugreek Extract", botanical: "Trigonella foenum-graecum", spec: "Saponins 40–50%", method: "Gravimetric", application: "Blood sugar, heart" },
      { name: "Guggul Extract", botanical: "Commiphora mukul", spec: "Guggulsterones 2.5–10%", method: "HPLC / UV", application: "Anti-inflammatory, heart" },
      { name: "Ginger Extract", botanical: "Zingiber officinale", spec: "Gingerols 5%", method: "HPLC", application: "Digestive, anti-inflammatory" },
      { name: "Ginkgo Biloba Extract", botanical: "Ginkgo biloba", spec: "Flavone glycosides 24%", method: "HPLC", application: "Memory, circulation" },
      { name: "Gotu Kola Extract", botanical: "Centella asiatica", spec: "Triterpenes 10–40%", method: "HPLC", application: "Skin care, memory" },
      { name: "Green Tea Extract", botanical: "Camellia sinensis", spec: "Polyphenols 50–90%, EGCG", method: "HPLC", application: "Antioxidant" },
      { name: "Gymnema Extract", botanical: "Gymnema sylvestre", spec: "Gymnemic acid 25–75%", method: "Gravimetric", application: "Anti-diabetic" },
      { name: "Garcinia Cambogia Extract", botanical: "Garcinia cambogia", spec: "HCA 50–60%", method: "HPLC", application: "Weight management" },
      { name: "Jamun Extract", botanical: "Syzygium cumini", spec: "Tannins 20%", method: "UV / HPLC", application: "Blood sugar" },
      { name: "Horse Chestnut Extract", botanical: "Aesculus hippocastanum", spec: "Aescin 20–40%", method: "HPLC", application: "Vein health" },
      { name: "Mucuna Extract", botanical: "Mucuna pruriens", spec: "L-DOPA 10–50%", method: "HPLC", application: "Men's health, neuro" },
      { name: "Licorice Extract", botanical: "Glycyrrhiza glabra", spec: "Glycyrrhizic acid 10–20%", method: "HPLC", application: "Digestive support" },
      { name: "Karela Extract", botanical: "Momordica charantia", spec: "Bitters 2.5–15%", method: "Gravimetric", application: "Blood sugar" },
      { name: "Moringa Seed Extract", botanical: "Moringa oleifera", spec: "Protein 60%", method: "Kjeldahl", application: "Immune support" },
      { name: "Noni Extract", botanical: "Morinda citrifolia", spec: "Tannins 40%", method: "Gravimetric", application: "General wellness" },
      { name: "Neem Leaf Extract", botanical: "Azadirachta indica", spec: "Bitters 2.5–10%", method: "Gravimetric", application: "Antibacterial" },
      { name: "Frankincense Oil", botanical: "Boswellia serrata", spec: "Thujene 70%", method: "GC-HS", application: "Anti-inflammatory" },
      { name: "Bhumi Amla Extract", botanical: "Phyllanthus niruri", spec: "Bitters 2.5–5%", method: "Gravimetric", application: "Hepatoprotective" },
      { name: "Kutki Extract", botanical: "Picrorhiza kurroa", spec: "Kutkin 5%, bitters 5–10%", method: "HPLC", application: "Liver support" },
      { name: "Shatavari Extract", botanical: "Asparagus racemosus", spec: "Saponins 40%", method: "Gravimetric", application: "Women's health" },
      { name: "Gokhru / Tribulus Extract", botanical: "Tribulus terrestris", spec: "Saponins 20–40%", method: "Gravimetric", application: "Vitality, immune" },
      { name: "Triphala Extract", botanical: "Emblica + T. chebula + T. bellerica (1:1:1)", spec: "Tannins 20–40%", method: "Titration", application: "Digestive, laxative" },
      { name: "Harad Extract", botanical: "Terminalia chebula", spec: "Tannins 40%", method: "Titration", application: "Detoxification" },
      { name: "Tulsi Extract", botanical: "Ocimum sanctum", spec: "Tannins 10%", method: "Titration", application: "Antioxidant, respiratory" },
      { name: "Arjuna Extract", botanical: "Terminalia arjuna", spec: "Tannins 30%", method: "Titration", application: "Heart, circulation" },
      { name: "Baheda Extract", botanical: "Terminalia bellerica", spec: "Tannins 40%", method: "Titration", application: "Detoxification" },
      { name: "Giloy Extract", botanical: "Tinospora cordifolia", spec: "Bitters 2.5–10%", method: "Gravimetric", application: "Immune support" },
      { name: "Vasaca Extract", botanical: "Adhatoda vasica", spec: "Alkaloids 1%, vasicine 1%", method: "Gravimetric / HPLC", application: "Respiratory support" },
      { name: "Symplocos Extract", botanical: "Symplocos racemosa", spec: "Saponins 5%", method: "Gravimetric", application: "Women's health" },
    ],
  },
  {
    slug: "phytochemicals",
    name: "Phytochemicals",
    summary:
      "High-purity isolated actives for pharmaceutical and clinical nutrition applications.",
    intro:
      "Isolated and purified single molecules for formulators who need a defined active rather than a botanical matrix. Supplied with full characterisation — HPLC purity, identity by IR, and residual solvent data. Nano and micronised particle sizes available.",
    icon: "molecule",
    image: "/images/cat-phytochemicals.jpg",
    imageAlt: "Crystalline golden curcumin isolate in glass dish on pale stone",
    highlights: [
      "Purity from 90% to 98%+ by HPLC",
      "Identity confirmed by IR and melting point",
      "Nano and micronised grades available",
    ],
    items: [
      { name: "Andrographolide", botanical: "Andrographis paniculata", spec: "Purity 95%", method: "HPLC", application: "Liver support" },
      { name: "Natural Curcumin", botanical: "Curcuma longa", spec: "Purity 95%", method: "HPLC", application: "Antioxidant, anti-inflammatory" },
      { name: "Natural Caffeine", botanical: "Coffea / Camellia sinensis", spec: "Purity 95–98%", method: "HPLC", application: "Stimulant, antioxidant" },
      { name: "Piperine", botanical: "Piper nigrum", spec: "Purity 95%", method: "HPLC", application: "Bioavailability enhancer" },
      { name: "Natural Tetrahydrocurcumin", botanical: "Curcuma longa", spec: "Purity 95%", method: "HPLC", application: "Skin brightening, antioxidant" },
      { name: "Stevioside", botanical: "Stevia rebaudiana", spec: "Purity 90%", method: "HPLC", application: "Natural sweetener" },
    ],
  },
  {
    slug: "water-soluble-extracts",
    name: "Water-Soluble Extracts",
    summary:
      "Fully water-dispersible extracts for beverages, instant mixes and clear liquid formulations.",
    intro:
      "Water-soluble grades dissolve cleanly without carriers or clouding, engineered for ready-to-mix beverages, effervescents and clear syrups. Each is standardised against its marker and released with the same documentation as our dry extracts.",
    icon: "droplet",
    image: "/images/cat-herbal-extracts.jpg",
    imageAlt: "Water-soluble botanical extract dissolving in a glass of water",
    highlights: [
      "Cold-water soluble without added carriers",
      "Suited to beverages, effervescents and syrups",
      "Marker-standardised with full CoA",
    ],
    items: [
      { name: "Shatavari Extract (WS)", botanical: "Asparagus racemosus", spec: "Saponins 40%", method: "Gravimetric", application: "Women's health" },
      { name: "Neem Extract (WS)", botanical: "Azadirachta indica", spec: "Bitters 10%+", method: "Gravimetric", application: "Antiseptic, anti-inflammatory" },
      { name: "Safed Musli Extract (WS)", botanical: "Chlorophytum borivilianum", spec: "Saponins 40%", method: "Gravimetric", application: "Men's health" },
      { name: "Garcinia Cambogia (WS)", botanical: "Garcinia cambogia", spec: "HCA 50–60% (Ca salt)", method: "HPLC", application: "Weight management" },
      { name: "Mulethi / Licorice (WS)", botanical: "Glycyrrhiza glabra", spec: "Glycyrrhizic acid 10–20%", method: "HPLC", application: "Natural sweetener" },
      { name: "Gymnema (WS)", botanical: "Gymnema sylvestre", spec: "Gymnemic acids 25%", method: "Gravimetric", application: "Anti-diabetic" },
      { name: "Tulsi Extract (WS)", botanical: "Ocimum sanctum", spec: "Tannins 10%", method: "Titration", application: "Skin care, acne" },
      { name: "Amla Extract (WS)", botanical: "Phyllanthus emblica", spec: "Tannins 40%", method: "Titration", application: "Hair care" },
      { name: "Giloy Extract (WS)", botanical: "Tinospora cordifolia", spec: "Bitters 3%", method: "Gravimetric", application: "Immune support" },
      { name: "Gokhru Extract (WS)", botanical: "Tribulus terrestris", spec: "Saponins 40%", method: "Gravimetric", application: "Vitality, immune" },
      { name: "Fenugreek Extract (WS)", botanical: "Trigonella foenum-graecum", spec: "Saponins 50%", method: "Gravimetric", application: "Blood sugar, cardiovascular" },
      { name: "Green Coffee Bean (WS)", botanical: "Coffea arabica", spec: "Chlorogenic acid 45–50%", method: "HPLC", application: "Antioxidant, weight" },
      { name: "Green Tea Extract (WS)", botanical: "Camellia sinensis", spec: "Polyphenols 50–90%", method: "UV", application: "Antioxidant" },
      { name: "Noni Extract (WS)", botanical: "Morinda citrifolia", spec: "Morindin 20%", method: "Gravimetric", application: "General wellness" },
      { name: "Haritaki Extract (WS)", botanical: "Terminalia chebula", spec: "Tannins 40%", method: "Titration", application: "Digestive, laxative" },
      { name: "Grape Seed Extract (WS)", botanical: "Vitis vinifera", spec: "Polyphenols 95%", method: "UV", application: "Antioxidant" },
      { name: "Pomegranate Fruit Extract (WS)", botanical: "Punica granatum", spec: "Polyphenols 40%", method: "UV", application: "Antioxidant, skin" },
      { name: "Papaya Leaf Extract (WS)", botanical: "Carica papaya", spec: "Tannins 40%+, flavonoids 5%", method: "Titration", application: "Platelet support" },
      { name: "Triphala Extract (WS)", botanical: "Amla + Harad + Baheda (1:1:1)", spec: "Tannins 40%", method: "Titration", application: "Digestive, laxative" },
      { name: "Turmeric Oleoresin (WS)", botanical: "Curcuma longa", spec: "Curcuminoids 10%", method: "UV / HPLC", application: "Colour, flavouring" },
      { name: "Ginseng Extract (WS)", botanical: "Panax ginseng", spec: "Ginsenosides 20%", method: "HPLC", application: "Immune support" },
      { name: "Moringa Leaf Extract (WS)", botanical: "Moringa oleifera", spec: "Saponins 20%, protein 20%", method: "Gravimetric", application: "Immune, wellness" },
    ],
  },
  {
    slug: "spray-dried-powders",
    name: "Spray-Dried Powders",
    summary:
      "Free-flowing food and pharma-grade fruit, vegetable, dairy and specialty powders.",
    intro:
      "Spray-dried under controlled inlet temperatures to preserve colour, flavour and nutrition, these free-flowing powders reconstitute cleanly and are supplied food and pharma-grade for beverages, bakery, seasonings, nutraceuticals and instant mixes. Carrier system and mesh size to your specification.",
    icon: "sparkle",
    image: "/images/turmeric-powder.jpg",
    imageAlt: "Free-flowing spray-dried powder in a ceramic bowl",
    highlights: [
      "Colour, flavour and nutrition preserved in drying",
      "Food and pharmaceutical grades",
      "Carrier system and mesh size to specification",
    ],
    groups: [
      {
        title: "Fruit Powders",
        items: [
          "Tomato Powder (PJ Grade)",
          "Tomato Powder (Premium)",
          "Raw Mango Powder",
          "Alphonso Mango Powder",
          "Kiwi Powder",
          "Lychee Powder",
          "Orange Powder",
          "Lemon Powder",
          "Blackberry Powder",
          "Black Grape Powder",
          "Apple Powder",
          "Watermelon Powder",
          "Guava Powder",
          "Pineapple Powder",
          "Papaya Powder",
          "Banana Powder",
          "Custard Apple Powder",
          "Blueberry Powder",
          "Strawberry Powder",
          "Cranberry Powder",
          "Raspberry Powder",
          "Mulberry Powder",
          "Jamun Powder",
          "Rose Petal Powder",
          "Tamarind Powder",
          "Dates Powder",
          "Amla Powder (min 15%)",
        ],
      },
      {
        title: "Vegetable & Herb Powders",
        items: [
          "Carrot Powder (Premium)",
          "Beetroot Powder (0.4%)",
          "Spinach Powder",
          "Cucumber Powder",
          "Green Chillies Powder",
          "Green Coriander Powder",
          "Onion Powder",
          "Garlic Powder",
          "Ginger Powder",
          "Mint Powder",
          "Chicory Powder",
        ],
      },
      {
        title: "Dairy & Specialty Powders",
        items: [
          "Curd Powder",
          "Cheese Powder",
          "Cream Powder",
          "Honey Powder",
          "Coconut Milk Powder",
          "Tender Coconut Powder",
          "Soya HVP Powder",
          "Palm Fat Powder (50–70%)",
          "HOSO Fat Powder (50–70%)",
          "Stevia Powder",
        ],
      },
    ],
  },
  {
    slug: "essential-oils",
    name: "Essential Oils",
    summary:
      "Steam-distilled and cold-pressed oils with verified aroma and actives profiles.",
    intro:
      "Our essential oils are distilled from botanicals traced back to the growing region, then profiled by GC so every batch you receive matches the one before it. Supplied in food, pharmaceutical and aroma grades. The range below is representative — tell us the oil and specification you need.",
    icon: "droplet",
    image: "/images/cat-essential-oils.jpg",
    imageAlt: "Amber essential oil bottles with glass dropper on pale stone",
    highlights: [
      "GC profile supplied with every batch",
      "Food, pharmaceutical and aroma grades",
      "Amber glass, HDPE and MS drum packing",
    ],
    items: [
      { name: "Frankincense Oil", botanical: "Boswellia serrata", spec: "Thujene 70%", method: "GC-HS", application: "Anti-inflammatory" },
      { name: "Peppermint Oil", botanical: "Mentha piperita", spec: "Menthol 50–60%", method: "GC", application: "Digestive, aroma" },
      { name: "Eucalyptus Oil", botanical: "Eucalyptus globulus", spec: "Cineole 70–80%", method: "GC", application: "Respiratory, aroma" },
      { name: "Lemongrass Oil", botanical: "Cymbopogon flexuosus", spec: "Citral 75% min", method: "GC", application: "Aroma, flavour" },
      { name: "Turmeric Oil", botanical: "Curcuma longa", spec: "Ar-turmerone 40%", method: "GC", application: "Anti-inflammatory" },
    ],
  },
  {
    slug: "oleoresins",
    name: "Oleoresins",
    summary:
      "Solvent-extracted concentrates delivering full flavour and colour at consistent potency.",
    intro:
      "Oleoresins concentrate the volatile and non-volatile fractions of a spice into a single standardised liquid, giving formulators reproducible colour, pungency and flavour without the variability of raw botanicals. The range below is representative — tell us the oleoresin and value you need.",
    icon: "flask",
    image: "/images/cat-oleoresins.jpg",
    imageAlt: "Warm amber oleoresin concentrate in ceramic dish with brass spatula",
    highlights: [
      "Standardised on colour value or pungency units",
      "Residual solvent within pharmacopoeial limits",
      "Dispersible and food-grade variants available",
    ],
    items: [
      { name: "Turmeric Oleoresin", botanical: "Curcuma longa", spec: "Curcuminoids 35–45%", method: "HPLC", application: "Colour, flavour" },
      { name: "Capsicum Oleoresin", botanical: "Capsicum annuum", spec: "1,00,000–20,00,000 SHU", method: "HPLC", application: "Pungency, heat" },
      { name: "Paprika Oleoresin", botanical: "Capsicum annuum", spec: "40,000–1,00,000 CU", method: "UV", application: "Natural colour" },
      { name: "Black Pepper Oleoresin", botanical: "Piper nigrum", spec: "Piperine 40% min", method: "HPLC", application: "Flavour, pungency" },
      { name: "Ginger Oleoresin", botanical: "Zingiber officinale", spec: "Gingerols 20–30%", method: "HPLC", application: "Flavour, warmth" },
    ],
  },
  {
    slug: "cosmoceutical-ingredients",
    name: "Cosmoceutical Ingredients",
    summary:
      "Botanical actives selected for skin and hair care, supplied cosmetic-grade for topical formulation.",
    intro:
      "A curated selection of our extracts prepared for personal-care formulation — colour and odour controlled, screened for compatibility with common emulsion and surfactant systems. Grades below are drawn from our extract lines; water-soluble and oil-dispersible variants are available.",
    icon: "sparkle",
    image: "/images/cat-cosmoceutical.jpg",
    imageAlt: "Pearlescent cosmetic-grade extract powder in frosted glass vessel with botanical serum",
    highlights: [
      "Cosmetic-grade with supporting documentation",
      "Water-soluble and oil-dispersible grades",
      "Colour and odour controlled for clear formulations",
    ],
    items: [
      { name: "Aloe Vera Extract", botanical: "Aloe vera", spec: "200:1 concentrate", method: "Gravimetric", application: "Soothing, hydration" },
      { name: "Amla Extract", botanical: "Phyllanthus emblica", spec: "Tannins 40%", method: "Titration", application: "Hair care, shine" },
      { name: "Gotu Kola Extract", botanical: "Centella asiatica", spec: "Triterpenes 10–40%", method: "HPLC", application: "Skin repair, firming" },
      { name: "Bamboo Extract", botanical: "Bambusa arundinacea", spec: "Natural silica 75%", method: "Gravimetric", application: "Skin & nail support" },
      { name: "Licorice Extract", botanical: "Glycyrrhiza glabra", spec: "Glycyrrhizic acid 10–20%", method: "HPLC", application: "Brightening, soothing" },
      { name: "Green Tea Extract", botanical: "Camellia sinensis", spec: "Polyphenols 50–90%", method: "HPLC", application: "Antioxidant, anti-ageing" },
      { name: "Pomegranate Extract", botanical: "Punica granatum", spec: "Polyphenols 40%", method: "UV", application: "Antioxidant, skin tone" },
      { name: "Tetrahydrocurcumin", botanical: "Curcuma longa", spec: "Purity 95%", method: "HPLC", application: "Skin brightening" },
      { name: "Grape Seed Extract", botanical: "Vitis vinifera", spec: "Polyphenols 95%", method: "UV", application: "Antioxidant, anti-ageing" },
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
      { name: "Custom Extraction", spec: "Pilot to commercial scale", application: "Client specification" },
      { name: "Spray-Dried Powders", spec: "Carrier and mesh to spec", application: "Client specification" },
      { name: "Standardisation to Marker", spec: "Client-defined assay", application: "Client specification" },
      { name: "Private Label Packing", spec: "Bulk and retail packs", application: "Client specification" },
    ],
  },
  {
    slug: "active-pharmaceutical-ingredients",
    name: "Active Pharmaceutical Ingredients",
    summary:
      "High-purity botanical-derived APIs released to USP, EP and IP pharmacopoeial standards with full regulatory documentation.",
    intro:
      "Our API range covers naturally derived actives used in finished pharmaceutical dosage forms. Each grade is manufactured under GMP controls and released with a full certificate of analysis referencing the applicable pharmacopoeial monograph — USP, EP or IP. Bulk and clinical-trial quantities available.",
    icon: "molecule",
    image: "/images/cat-api.jpg",
    imageAlt: "Pharmaceutical-grade white crystalline powder in a glass vial with brass spatula on pale travertine",
    highlights: [
      "Released to USP / EP / IP pharmacopoeial standards",
      "GMP-controlled manufacture with full batch traceability",
      "CoA, MSDS and regulatory support documentation supplied",
    ],
    items: [
      { name: "Thiocolchicoside", spec: "USP / EP grade", method: "HPLC", application: "Muscle relaxant, anti-spastic" },
      { name: "Colchicine", spec: "USP / EP / IP grade", method: "HPLC", application: "Gout, anti-inflammatory" },
      { name: "Hyoscine Butyl Bromide", spec: "USP / EP / IP grade", method: "HPLC", application: "Antispasmodic, GI disorders" },
      { name: "Nicotine", spec: "USP / EP grade", method: "HPLC", application: "Nicotine replacement therapy" },
      { name: "Pterostilbene", spec: "USP grade", method: "HPLC", application: "Antioxidant, cardiovascular support" },
    ],
  },
];

// Bestselling grades drawn from the live catalogue, shown in the marquee.
export const popularProducts = [
  "AKBA 30–90%",
  "Curcumin 95%",
  "Piperine 95%",
  "Boswellic Acids 65%",
  "Gymnemic Acid 25–75%",
  "Bacosides 50%",
  "Green Tea Polyphenols 90%",
  "Garcinia HCA 60%",
  "Chlorogenic Acid 50%",
  "L-DOPA 50%",
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
