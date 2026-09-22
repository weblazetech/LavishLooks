export interface GalleryItem {
  id: string;
  title: string;
  category: "Hair" | "Mehndi" | "Makeup" | "Men's Grooming";
  imageUrl: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
  featuredOnHome?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Bridal Henna Intricacy",
    category: "Mehndi",
    imageUrl: "/images/gallery/bridal-henna.jpg",
    caption: "Handcrafted bridal henna detailing with traditional peacock and floral lattice motifs.",
    aspect: "portrait",
    featuredOnHome: true,
  },
  {
    id: "g2",
    title: "Couture Bridal Makeup",
    category: "Makeup",
    imageUrl: "/images/gallery/bridal-makeup.jpg",
    caption: "Dewy, high-definition bridal glow finished with champagne gold eye contouring and temple jewellery styling.",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "g3",
    title: "Dimensional Caramel Balayage",
    category: "Hair",
    imageUrl: "/images/gallery/caramel-balayage.jpg",
    caption: "Seamless dimensional tones blended with lustrous silk-press waves and argan gloss finish.",
    aspect: "portrait",
    featuredOnHome: true,
  },
  {
    id: "g4",
    title: "Executive Fade & Beard Sculpt",
    category: "Men's Grooming",
    imageUrl: "/images/gallery/executive-fade.jpg",
    caption: "Sharp taper fade paired with precision razor cheek architecture and sculpted beard styling.",
    aspect: "square",
    featuredOnHome: true,
  },
  {
    id: "g5",
    title: "Modern Festive Mehndi",
    category: "Mehndi",
    imageUrl: "/images/gallery/festive-mehndi.jpg",
    caption: "Organic geometric mandala patterns with fine finger detailing and gold jewellery accents.",
    aspect: "square",
    featuredOnHome: true,
  },
  {
    id: "g6",
    title: "Celebration Evening Glamour",
    category: "Makeup",
    imageUrl: "/images/gallery/evening-glam.jpg",
    caption: "Subtle smoky eye aesthetic with luminous velvet skin and bespoke sculpted nude lip.",
    aspect: "portrait",
    featuredOnHome: true,
  },
  {
    id: "g7",
    title: "Textured Crop & Low Fade",
    category: "Men's Grooming",
    imageUrl: "/images/gallery/textured-crop.jpg",
    caption: "Textured French crop styled with matte natural pomade and clean low taper fade.",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "g8",
    title: "Velvet Waves & Restorative Spa",
    category: "Hair",
    imageUrl: "/images/gallery/couture-hair.jpg",
    caption: "Deep nourishment salon ritual followed by loose red-carpet romantic waves.",
    aspect: "square",
    featuredOnHome: true,
  },
  {
    id: "g9",
    title: "Traditional South Indian Bridal Look",
    category: "Makeup",
    imageUrl: "/images/gallery/bridal-makeup.jpg",
    caption: "Classic Muhurtham elegance with kohl-rimmed eyes, temple jewellery, and gold silk saree.",
    aspect: "portrait",
    featuredOnHome: false,
  },
  {
    id: "g10",
    title: "Royal Henna Palms & Jaali",
    category: "Mehndi",
    imageUrl: "/images/gallery/festive-mehndi.jpg",
    caption: "Intricate jaali patterns with personalized auspicious wedding insignias.",
    aspect: "landscape",
    featuredOnHome: false,
  },
  {
    id: "g11",
    title: "Polished Gentleman Grooming",
    category: "Men's Grooming",
    imageUrl: "/images/gallery/executive-fade.jpg",
    caption: "Classic precision haircut with hot-towel skin preparation and beard conditioning.",
    aspect: "portrait",
    featuredOnHome: false,
  },
  {
    id: "g12",
    title: "Gloss Finish Dimensional Waves",
    category: "Hair",
    imageUrl: "/images/gallery/caramel-balayage.jpg",
    caption: "Precision geometric cut with high-shine argan gloss treatment and soft movement.",
    aspect: "landscape",
    featuredOnHome: false,
  },
];
