export interface ServiceItem {
  id: string;
  name: string;
  category: "Hair" | "Skin & Facials" | "Makeup" | "Nails" | "Mehndi & Bridal" | "Men's Grooming";
  description: string;
  duration?: string;
  price: string;
  featured?: boolean;
}

export interface ServiceCategoryMeta {
  id: "all" | "Hair" | "Skin & Facials" | "Makeup" | "Nails" | "Mehndi & Bridal" | "Men's Grooming";
  title: string;
  description: string;
  iconName: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryMeta[] = [
  {
    id: "all",
    title: "All Services",
    description: "Browse our comprehensive luxury treatment and grooming menu.",
    iconName: "Sparkles",
  },
  {
    id: "Hair",
    title: "Hair",
    description: "Professional hair styling, precision haircutting, coloring, smoothing, and transformation services.",
    iconName: "Scissors",
  },
  {
    id: "Skin & Facials",
    title: "Skin & Facials",
    description: "Rejuvenating beauty rituals, signature facials, and advanced skin wellness treatments.",
    iconName: "Sparkles",
  },
  {
    id: "Makeup",
    title: "Makeup",
    description: "Exquisite makeup artistry for celebrations, special occasions, and photoshoots.",
    iconName: "Palette",
  },
  {
    id: "Nails",
    title: "Nails",
    description: "Deluxe manicure, pedicure, nail grooming, and artistic nail care.",
    iconName: "Gem",
  },
  {
    id: "Mehndi & Bridal",
    title: "Mehndi & Bridal",
    description: "Traditional and contemporary bridal mehndi, signature bridal makeup, and comprehensive bridal packages.",
    iconName: "Heart",
  },
  {
    id: "Men's Grooming",
    title: "Men's Grooming",
    description: "Precision men's hair styling, beard sculpting, royal grooming rituals, and scalp care.",
    iconName: "Crown",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  // Hair
  {
    id: "hair-cut-style-w",
    name: "Women's Precision Haircut & Styling",
    category: "Hair",
    description: "Customized consultation, therapeutic wash, tailored layer/bob/structure cut, and signature blow-dry finish.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "hair-color-global",
    name: "Global Hair Coloring & Balayage",
    category: "Hair",
    description: "Premium ammonia-free hues, seamless highlights, root melting, and tonal gloss for radiant dimension.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "hair-keratin-botox",
    name: "Keratin Treatment & Hair Botox",
    category: "Hair",
    description: "Deep restorative protein treatment providing frizz control, ultra-glossy finish, and long-lasting smoothness.",
    price: "[PRICE]",
  },
  {
    id: "hair-spa-luxury",
    name: "Lavish Botanical Hair Spa",
    category: "Hair",
    description: "Intense scalp nourishment, hydrating masque, steam infusion, and relaxing head acupressure massage.",
    price: "[PRICE]",
  },

  // Skin & Facials
  {
    id: "skin-gold-facial",
    name: "Signature 24K Radiance Facial",
    category: "Skin & Facials",
    description: "Luxurious brightening therapy with active botanical extracts to restore youthful luminosity and tone.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "skin-hydra-glow",
    name: "Deep Pore Cleansing & Hydra Care",
    category: "Skin & Facials",
    description: "Exfoliation, gentle extraction, lymphatic stimulation, and intense hyaluronic hydration infusion.",
    price: "[PRICE]",
  },
  {
    id: "skin-detox-cleanup",
    name: "Anti-Pollution Clarifying Cleanup",
    category: "Skin & Facials",
    description: "Purifying mask and antioxidant therapy crafted for city-stressed skin and instant freshness.",
    price: "[PRICE]",
  },

  // Makeup
  {
    id: "mu-occasion-glam",
    name: "Party & Occasion Glam Makeup",
    category: "Makeup",
    description: "HD long-wear finish, contouring, customized eye artistry, and premium lashes tailored for special events.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "mu-reception-look",
    name: "Engagement & Sangeet Makeup",
    category: "Makeup",
    description: "Flawless camera-ready glow, waterproof formulation, and coordinated hairstyle draping.",
    price: "[PRICE]",
  },
  {
    id: "mu-editorial-hd",
    name: "Editorial & High-Definition Makeup",
    category: "Makeup",
    description: "Camera-calibrated makeup artistry designed for cinematic lighting and high-resolution photography.",
    price: "[PRICE]",
  },

  // Nails
  {
    id: "nail-luxe-manicure",
    name: "Lavish Royal Spa Manicure",
    category: "Nails",
    description: "Gentle exfoliation, cuticle therapy, therapeutic hand massage, and long-lasting glossy coat.",
    price: "[PRICE]",
  },
  {
    id: "nail-pedicure-therapy",
    name: "Soothing Organic Spa Pedicure",
    category: "Nails",
    description: "Aromatic mineral soak, callus smoothing, pressure point reflex massage, and nail shaping.",
    price: "[PRICE]",
  },
  {
    id: "nail-gel-extensions",
    name: "Custom Nail Extensions & Artistry",
    category: "Nails",
    description: "Precision gel/acrylic tips with intricate hand-painted designs, chrome accents, or French elegance.",
    price: "[PRICE]",
    featured: true,
  },

  // Mehndi & Bridal
  {
    id: "bridal-mu-complete",
    name: "Traditional Muhurtham Bridal Artistry",
    category: "Mehndi & Bridal",
    description: "Complete signature bridal makeup, traditional jewelry placement, customized hair styling, and saree draping.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "bridal-mehndi-ceremony",
    name: "Full Bridal Henna / Mehndi Artistry",
    category: "Mehndi & Bridal",
    description: "Intricate organic bridal mehndi motifs covering hands, arms, and feet with rich natural color guarantee.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "bridal-pre-grooming",
    name: "Pre-Bridal Luxury Radiance Package",
    category: "Mehndi & Bridal",
    description: "Curated multi-step bridal prep: body polish, brightening facial, hair spa, manicure, and pedicure.",
    price: "[PRICE]",
  },

  // Men's Grooming
  {
    id: "men-haircut-styling",
    name: "Men's Signature Cut & Styling",
    category: "Men's Grooming",
    description: "Tailored fade/scissor work, refreshing scalp wash, neck taper, and matte/shine styling finish.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "men-beard-sculpt",
    name: "Royal Beard Sculpt & Hot Towel Treatment",
    category: "Men's Grooming",
    description: "Crisp razor line-up, beard shaping, hot towel conditioning, and nourishing beard oil massage.",
    price: "[PRICE]",
    featured: true,
  },
  {
    id: "men-groom-package",
    name: "Gentleman's Complete Grooming Ritual",
    category: "Men's Grooming",
    description: "Haircut, beard sculpt, revitalizing express face cleanup, and relaxing shoulder massage.",
    price: "[PRICE]",
  },
];
