export interface ServiceItem {
  name: string;
  price: string; // Always "[PRICE]" as required
  description?: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  shortDesc: string;
  icon: string;
  heroImage: string;
  imagePosition?: string;
  items: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair",
    shortDesc: "Precision cuts, styling, colour and transformations.",
    icon: "Scissors",
    heroImage: "/images/services/hair-rituals.jpg",
    imagePosition: "center 25%",
    items: [
      { name: "Couture Precision Haircut & Styling", price: "[PRICE]", featured: true },
      { name: "Signature Blowout & Red-Carpet Finish", price: "[PRICE]" },
      { name: "Global Colour & Bespoke Gloss", price: "[PRICE]", featured: true },
      { name: "Balayage, Ombré & Dimensional Highlights", price: "[PRICE]" },
      { name: "Keratin Infusion & Smoothing Alchemy", price: "[PRICE]" },
      { name: "Botoplex Deep Restorative Hair Spa", price: "[PRICE]" },
      { name: "Moroccan Argan Scalp Clarifying Ritual", price: "[PRICE]" },
      { name: "Men's Structured Scissor Cut & Fade", price: "[PRICE]" },
    ],
  },
  {
    id: "skin-facials",
    name: "Skin & Facials",
    shortDesc: "Thoughtful skincare and facial rituals for refreshed skin.",
    icon: "Sparkles",
    heroImage: "/images/services/skin-facials.jpg",
    imagePosition: "center",
    items: [
      { name: "Hydra-Luxe Radiance Oxygen Infusion", price: "[PRICE]", featured: true },
      { name: "24K Pure Gold Cell-Renewing Ritual", price: "[PRICE]", featured: true },
      { name: "Vitamin C Anti-Oxidant Brightening Facial", price: "[PRICE]" },
      { name: "Deep Clarifying Charcoal & Pore Detox", price: "[PRICE]" },
      { name: "Diamond Micro-Exfoliation Polish", price: "[PRICE]" },
      { name: "Botanical Calm & Anti-Redness Therapy", price: "[PRICE]" },
      { name: "Targeted Under-Eye Awakening & Lymphatic Care", price: "[PRICE]" },
    ],
  },
  {
    id: "makeup",
    name: "Makeup",
    shortDesc: "Polished makeup looks for celebrations and special occasions.",
    icon: "Brush",
    heroImage: "/images/services/makeup-rituals.jpg",
    imagePosition: "center 20%",
    items: [
      { name: "High-Definition Editorial Celebration Makeup", price: "[PRICE]", featured: true },
      { name: "Airbrush Luminous Canvas Artistry", price: "[PRICE]", featured: true },
      { name: "Sangeet, Cocktail & Reception Glamour", price: "[PRICE]" },
      { name: "Soft Glow Minimalist Occasion Look", price: "[PRICE]" },
      { name: "Portfolio & Editorial Fashion Styling", price: "[PRICE]" },
      { name: "Signature Eye Couture & Lashes Sculpting", price: "[PRICE]" },
    ],
  },
  {
    id: "nails",
    name: "Nails",
    shortDesc: "Manicures, nail care and refined finishing touches.",
    icon: "HandMetal",
    heroImage: "/images/services/nails-rituals.jpg",
    imagePosition: "center",
    items: [
      { name: "Luxury Champagne Rose Manicure Ritual", price: "[PRICE]", featured: true },
      { name: "Therapeutic Nourishing Spa Pedicure", price: "[PRICE]" },
      { name: "Aesthetic Gel Extensions & Tip Architecture", price: "[PRICE]", featured: true },
      { name: "Minimalist Chrome & French Ombré Art", price: "[PRICE]" },
      { name: "Intense Botanical Cuticle & Paraffin Therapy", price: "[PRICE]" },
      { name: "Express Polish & Nail Refinement", price: "[PRICE]" },
    ],
  },
  {
    id: "mehndi-bridal",
    name: "Mehndi & Bridal",
    shortDesc: "Bridal beauty, henna and occasion-ready artistry.",
    icon: "Crown",
    heroImage: "/images/services/mehndi-bridal.jpg",
    imagePosition: "center 25%",
    items: [
      { name: "Royal Bridal Regimen (Hair, Makeup, Henna & Draping)", price: "[PRICE]", featured: true },
      { name: "Bridal Henna: Traditional Royal Bridal Hands & Feet", price: "[PRICE]", featured: true },
      { name: "Contemporary Arabic / Floral Henna Motifs", price: "[PRICE]" },
      { name: "Muhurtham & Pellikuthuru Heritage Artistry", price: "[PRICE]" },
      { name: "Couture Saree Draping & Silhouette Styling", price: "[PRICE]" },
      { name: "Pre-Bridal 7-Day Skin & Hair Luminosity Plan", price: "[PRICE]" },
      { name: "Groom Royal Preparation & Celebration Touchup", price: "[PRICE]" },
    ],
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    shortDesc: "Hair, beard and grooming services for a clean, confident finish.",
    icon: "UserCheck",
    heroImage: "/images/services/mens-grooming.jpg",
    imagePosition: "center 20%",
    items: [
      { name: "Executive Precision Haircut & Textured Finish", price: "[PRICE]", featured: true },
      { name: "Artisanal Beard Sculpting & Razor Edge Lineup", price: "[PRICE]", featured: true },
      { name: "Hot-Towel Charcoal Detox Facial for Men", price: "[PRICE]" },
      { name: "De-Stress Scalp & Neck Pressure Therapy", price: "[PRICE]" },
      { name: "Subtle Grey-Blending & Beard Camouflage", price: "[PRICE]" },
      { name: "Gentlemen's Royal Wedding Celebration Grooming", price: "[PRICE]" },
    ],
  },
];
