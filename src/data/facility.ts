const DIR = "/images/FACTORY_IMAGES";

export type FacilityPhoto = {
  src: string;
  alt: string;
  caption: string;
  detail: string;
};

/** Photographs of the Haridwar plant, supplied by ARN Ingredients. */
export const facilityPhotos: FacilityPhoto[] = [
  {
    src: `${DIR}/extraction_plant.jpg`,
    alt: "Stainless steel extraction vessels on a mezzanine in the main extraction hall",
    caption: "Extraction Hall",
    detail:
      "Jacketed stainless steel extractors and receivers arranged over two levels, with demarcated clean-area flooring and GMP signage at every entry point.",
  },
  {
    src: `${DIR}/rotary_extractor.jpg`,
    alt: "Horizontal rotary extractor vessel mounted on a steel frame",
    caption: "Rotary Extractor",
    detail:
      "Rotary extraction for botanicals that need gentle, uniform solvent contact across the full charge.",
  },
  {
    src: `${DIR}/vaccum_tray_dryer.jpg`,
    alt: "Vacuum tray dryer with condenser column alongside",
    caption: "Vacuum Tray Dryer",
    detail:
      "Low-temperature drying under vacuum protects heat-sensitive markers that would degrade in conventional hot-air drying.",
  },
  {
    src: `${DIR}/extraction_plant2.jpg`,
    alt: "Extraction vessels, condensers and distillation columns in the plant",
    caption: "Distillation & Recovery",
    detail:
      "Condensers and recovery columns return solvent to the process, keeping residual solvent within pharmacopoeial limits.",
  },
  {
    src: `${DIR}/boiler.jpg`,
    alt: "Steam boiler installation supplying process heat to the plant",
    caption: "Steam Generation",
    detail:
      "Dedicated boiler house supplying consistent process steam to extractors, dryers and recovery columns.",
  },
  {
    src: `${DIR}/raw_material_storage.jpg`,
    alt: "Raw botanical material stored in sacks on pallets in a warehouse",
    caption: "Raw Material Store",
    detail:
      "Incoming botanicals held on pallets by lot, quarantined until identity and quality checks are cleared.",
  },
  {
    src: `${DIR}/finish_good_storage.jpg`,
    alt: "Rows of sealed blue drums of finished product in a warehouse",
    caption: "Finished Goods Store",
    detail:
      "Released material held in sealed HDPE drums, lot-marked and staged in dispatch lanes for export consignments.",
  },
];

export type Capability = {
  title: string;
  description: string;
  points: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Intake & Quarantine",
    description:
      "Every consignment of botanical raw material is logged, sampled and held until it clears identity and quality checks.",
    points: [
      "Lot-wise segregation on pallets",
      "Identity and assay verified before release to production",
      "Rejected material isolated and recorded",
    ],
  },
  {
    title: "Extraction",
    description:
      "Jacketed and rotary extractors run water, hydro-alcoholic and solvent routes, selected to protect the marker compound.",
    points: [
      "Multiple extractor types for different botanical matrices",
      "Campaign-based scheduling with full traceability",
      "Clean-area demarcation and GMP controls throughout",
    ],
  },
  {
    title: "Concentration & Drying",
    description:
      "Recovery columns concentrate the extract before drying, with vacuum tray drying used for heat-sensitive actives.",
    points: [
      "Solvent recovery to pharmacopoeial residual limits",
      "Vacuum tray drying for thermolabile markers",
      "Particle size and mesh controlled to specification",
    ],
  },
  {
    title: "Quality Control & Dispatch",
    description:
      "Material is released only once the full test panel is on file, then stored and staged for export dispatch.",
    points: [
      "HPLC and UV assay against the named marker",
      "Heavy metals, pesticide residue and microbiology screening",
      "Sealed, lot-marked drums with complete documentation",
    ],
  },
];
