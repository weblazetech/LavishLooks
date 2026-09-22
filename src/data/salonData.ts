export interface SalonInfo {
  name: string;
  wordmarkTop: string;
  wordmarkBottom: string;
  tagline: string;
  description: string;
  type: string;
  phone: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappLink: string;
  rating: {
    score: number;
    source: string;
    reviewCount: number;
  };
  address: {
    street: string;
    colony: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    plusCode: string;
    mapsEmbedUrl: string;
  };
  hours: {
    verifiedDay: string;
    verifiedTime: string;
    note: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  categories: string[];
}

export const SALON_DATA: SalonInfo = {
  name: "Karthikeya Lavish Looks",
  wordmarkTop: "KARTHIKEYA",
  wordmarkBottom: "Lavish Looks",
  tagline: "Where Beauty Meets Lavish Confidence",
  description:
    "A premier luxury unisex salon in Warangal delivering high-precision haircuts, bespoke bridal artistry, transformative makeup, exquisite mehndi, and dedicated men's grooming in an authentic, high-end environment.",
  type: "Unisex Salon",
  phone: "+91 89770 08676",
  phoneDisplay: "+91 89770 08676",
  phoneTel: "+918977008676",
  whatsappNumber: "918977008676",
  whatsappLink: "https://wa.me/918977008676?text=Hi%20Karthikeya%20Lavish%20Looks,%20I%20would%20like%20to%20inquire%20about%20salon%20services",
  rating: {
    score: 5.0,
    source: "JustDial",
    reviewCount: 11,
  },
  address: {
    street: "Road No. 14A (opposite O City Main Road)",
    colony: "Kashibugga Society Colony, Kashibugga",
    area: "Azam Jahi Mills Colony",
    city: "Warangal",
    state: "Telangana",
    pincode: "506002",
    full: "Road No. 14A (opposite O City Main Road), Kashibugga Society Colony, Kashibugga, Azam Jahi Mills Colony, Warangal, Telangana 506002",
    plusCode: "XJJ7+7Q Warangal",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.778736412192!2d79.6105!3d17.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU5JzM5LjEiTiA3OcKwMzYnMzcuOCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin",
  },
  hours: {
    verifiedDay: "Monday",
    verifiedTime: "8:00 AM – 9:00 PM",
    note: "Verified timing for Monday. Please contact or book ahead for customized appointments.",
  },
  instagram: {
    handle: "@k_lavishlooks",
    url: "https://www.instagram.com/k_lavishlooks/",
  },
  categories: ["Hair", "Skin & Facials", "Makeup", "Nails", "Mehndi & Bridal", "Men's Grooming"],
};
