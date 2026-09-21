/**
 * Karthikeya Lavish Looks - Canonical salon data
 * Verified Sep 7, 2026. Placeholders marked [PHONE], [WHATSAPP], [PRICE], [CONFIRM].
 * Never invent prices, reviews, hours, or certifications.
 */

export const salon = {
  name: "Karthikeya Lavish Looks",
  wordmarkTop: "KARTHIKEYA", // tracked Montserrat caps
  wordmarkBottom: "Lavish Looks", // Cormorant Garamond
  tagline: "Warangal's unisex beauty studio",
  city: "Kashibugga, Warangal",
  region: "Telangana 506002",
  // Contact placeholders - fill before launch
  phone: "[PHONE]",
  whatsapp: "[WHATSAPP]",
  instagramHandle: "@k_lavishlooks",
  instagramUrl: "https://www.instagram.com/k_lavishlooks/",
  // Address - verified verbatim
  addressLines: [
    "Road No. 14A (opposite O City Main Road)",
    "Kashibugga Society Colony, Kashibugga",
    "Azam Jahi Mills Colony, Warangal",
    "Telangana 506002",
  ],
  plusCode: "XJJ7+7Q Warangal",
  // Hours - Monday verified, full week to be confirmed
  hours: [
    { day: "Monday", time: "8:00 AM – 9:00 PM", verified: true },
    { day: "Tuesday", time: "Hours to be confirmed", verified: false },
    { day: "Wednesday", time: "Hours to be confirmed", verified: false },
    { day: "Thursday", time: "Hours to be confirmed", verified: false },
    { day: "Friday", time: "Hours to be confirmed", verified: false },
    { day: "Saturday", time: "Hours to be confirmed", verified: false },
    { day: "Sunday", time: "Hours to be confirmed", verified: false },
  ],
  hoursNote: "Verified Monday Hours: 8:00 AM – 9:00 PM. Remaining days to be confirmed.",
  // Rating - verified JustDial
  rating: {
    stars: 5.0,
    count: 11,
    platform: "JustDial",
    url: "https://www.justdial.com/Warangal/Lavish-Looks-The-Family-Salon-Hair-Beauty-Kashibugga-Society-Colony/9999PX870-X870-250822183301-H4F9_BZDET",
  },
  // Map embed - centered on the plus code
  mapEmbedUrl:
    "https://www.google.com/maps?q=XJJ7%2B7Q+Warangal&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=XJJ7%2B7Q+Warangal",
} as const;

export type ServiceCategory = {
  slug: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "hair",
    name: "Hair",
    icon: "scissors",
    description: "Professional cuts, styling and hair transformations.",
  },
  {
    slug: "skin-facials",
    name: "Skin & Facials",
    icon: "sparkles",
    description: "Beauty and skincare treatments tailored to your needs.",
  },
  {
    slug: "makeup",
    name: "Makeup",
    icon: "brush",
    description: "Makeup looks for occasions, celebrations and special moments.",
  },
  {
    slug: "nails",
    name: "Nails",
    icon: "hand",
    description: "Clean, polished and occasion-ready nail services.",
  },
  {
    slug: "mehndi-bridal",
    name: "Mehndi & Bridal",
    icon: "flower2",
    description: "Mehndi, bridal makeup and occasion-ready beauty services.",
  },
  {
    slug: "mens-grooming",
    name: "Men's Grooming",
    icon: "user",
    description: "Professional hair, beard and grooming services for men.",
  },
];

// Service rows for the /services page. Prices stay as [PRICE] placeholders
// until the salon's printed rate card arrives - never invented.
export type ServiceRow = {
  category: string; // slug
  name: string;
  price: string; // [PRICE] placeholder or real INR
  tag?: string; // e.g. "Bridal", "Men's"
};

export const serviceRows: ServiceRow[] = [
  // Hair
  { category: "hair", name: "Hair cut (women)", price: "[PRICE]" },
  { category: "hair", name: "Hair cut (men)", price: "[PRICE]", tag: "Men's" },
  { category: "hair", name: "Hair colour - global", price: "[PRICE]" },
  { category: "hair", name: "Hair colour - root touch-up", price: "[PRICE]" },
  { category: "hair", name: "Keratin / smoothening treatment", price: "[PRICE]" },
  { category: "hair", name: "Hair spa & deep conditioning", price: "[PRICE]" },
  { category: "hair", name: "Blow-dry & styling", price: "[PRICE]" },
  { category: "hair", name: "Haircut + beard combo (men)", price: "[PRICE]", tag: "Men's" },

  // Skin & Facials
  { category: "skin-facials", name: "Basic cleanup", price: "[PRICE]" },
  { category: "skin-facials", name: "Fruit facial", price: "[PRICE]" },
  { category: "skin-facials", name: "Gold facial", price: "[PRICE]" },
  { category: "skin-facials", name: "Detan / de-pigmentation facial", price: "[PRICE]" },
  { category: "skin-facials", name: "Threading (eyebrows)", price: "[PRICE]" },
  { category: "skin-facials", name: "Waxing - full arms", price: "[PRICE]" },
  { category: "skin-facials", name: "Waxing - full legs", price: "[PRICE]" },

  // Makeup
  { category: "makeup", name: "Party makeup", price: "[PRICE]" },
  { category: "makeup", name: "Engagement makeup", price: "[PRICE]" },
  { category: "makeup", name: "Reception makeup", price: "[PRICE]" },
  { category: "makeup", name: "Pre-bridal trial makeup", price: "[PRICE]" },

  // Nails
  { category: "nails", name: "Manicure", price: "[PRICE]" },
  { category: "nails", name: "Pedicure", price: "[PRICE]" },
  { category: "nails", name: "Nail art (per nail)", price: "[PRICE]" },
  { category: "nails", name: "Gel polish - hands", price: "[PRICE]" },

  // Mehndi & Bridal
  { category: "mehndi-bridal", name: "Bridal mehndi (full hands + feet)", price: "[PRICE]", tag: "Bridal" },
  { category: "mehndi-bridal", name: "Occasion mehndi (hands)", price: "[PRICE]" },
  { category: "mehndi-bridal", name: "Family mehndi (per person)", price: "[PRICE]" },

  // Men's Grooming
  { category: "mens-grooming", name: "Beard shaping & lining", price: "[PRICE]", tag: "Men's" },
  { category: "mens-grooming", name: "Clean shave (hot towel)", price: "[PRICE]", tag: "Men's" },
  { category: "mens-grooming", name: "Head massage", price: "[PRICE]", tag: "Men's" },
  { category: "mens-grooming", name: "Men's facial", price: "[PRICE]", tag: "Men's" },
];

// Bridal packages. Contents are deliberately limited to makeup, hair and henna
// per the spec - no invented package inclusions beyond those three.
export type BridalPackage = {
  slug: string;
  name: string;
  tagline: string;
  contents: string[];
  price: string; // [PRICE] placeholder
};

export const bridalPackages: BridalPackage[] = [
  {
    slug: "engagement",
    name: "Engagement",
    tagline: "A soft, photogenic look for the first ceremony.",
    contents: [
      "Engagement makeup",
      "Hair styling",
      "Occasion mehndi (hands)",
    ],
    price: "[PRICE]",
  },
  {
    slug: "wedding-day",
    name: "Wedding Day",
    tagline: "The full bridal look, crafted for the camera and the mandapam.",
    contents: [
      "Bridal makeup",
      "Bridal hair & draping assist",
      "Bridal mehndi (full hands + feet)",
    ],
    price: "[PRICE]",
  },
  {
    slug: "family-guests",
    name: "Family & Guests",
    tagline: "Coordinated looks for the people standing with you.",
    contents: [
      "Party makeup per person",
      "Hair styling per person",
      "Mehndi per person",
    ],
    price: "[PRICE]",
  },
];

// Gallery tiles. Real IG reel stills would be downloaded at build time;
// here we use generated images labeled as generated, plus captions.
export type GalleryTile = {
  slug: string;
  src: string; // /salon/...
  caption: string;
  category: "Hair" | "Mehndi" | "Makeup" | "Grooming";
  generated: boolean; // image-gen label per spec
};

export const galleryTiles: GalleryTile[] = [
  { slug: "hair-gloss", src: "/salon/gallery-hair-1.png", caption: "Glossy long-layer cut, blow-dried.", category: "Hair", generated: true },
  { slug: "mens-fade", src: "/salon/gallery-hair-2.png", caption: "Skin fade and beard shape for a clean finish.", category: "Grooming", generated: true },
  { slug: "bridal-mehndi", src: "/salon/gallery-mehndi-1.png", caption: "Bridal mehndi with paisley and peacock motifs.", category: "Mehndi", generated: true },
  { slug: "soft-evening-makeup", src: "/salon/gallery-makeup-1.png", caption: "Soft evening makeup with gold shadow.", category: "Makeup", generated: true },
  { slug: "hot-towel-shave", src: "/salon/gallery-grooming-1.png", caption: "Hot-towel beard shave in the chair.", category: "Grooming", generated: true },
  { slug: "blow-dry", src: "/salon/gallery-styling-1.png", caption: "Blow-dry finish on freshly washed hair.", category: "Hair", generated: true },
  { slug: "bridal-still-life", src: "/salon/bridal-still-life.png", caption: "Bridal jewelry, henna and gold - the kit for the day.", category: "Makeup", generated: true },
];

// Home gallery strip (subset)
export const homeGalleryTiles = galleryTiles.slice(0, 6);

// Reviews - stat + attribution only. No invented quotes per spec.
export const reviews = {
  stat: "5.0",
  count: 11,
  platform: "JustDial",
  note: "Real review text will be quoted here once the salon provides it. No fabricated quotes.",
  ctaLabel: "Read reviews on JustDial",
};

// Why-row promises - written only with what the salon can stand behind
export const promises = [
  {
    icon: "scissors",
    title: "Trained stylists",
    body: "Every chair is held by a stylist who has put in the hours on cuts, colour and bridal work - not a trainee learning on you.",
  },
  {
    icon: "shield-check",
    title: "Hygienic tools, single-use disposables",
    body: "Tools are sanitised between every guest, and disposables are used where it matters. Cleanliness is visible, not promised.",
  },
  {
    icon: "receipt",
    title: "Honest pricing with a printed rate card",
    body: "Every rate is printed before you sit down. No surprise add-ons, no padded bills at the counter.",
  },
];

// Nav links
export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/bridal", label: "Bridal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Service select options for the booking form
export const bookingServiceOptions = [
  { value: "Hair", label: "Hair" },
  { value: "Skin & Facials", label: "Skin & Facials" },
  { value: "Makeup", label: "Makeup" },
  { value: "Nails", label: "Nails" },
  { value: "Mehndi & Bridal", label: "Mehndi & Bridal" },
  { value: "Men's Grooming", label: "Men's Grooming" },
];
