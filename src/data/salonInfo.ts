export interface SalonInfo {
  name: string;
  wordmarkTracker: string;
  wordmarkBrand: string;
  tagline: string;
  supportingText: string;
  businessType: string;
  locationLabel: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    colony: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
  };
  hours: {
    monday: string;
    remainingDays: string;
    note: string;
  };
  socialProof: {
    rating: string;
    reviewCount: string;
    platform: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    whatsappNumber: string;
    whatsappLink: string;
    phone: string;
    phoneFormatted: string;
  };
  mapUrl: string;
}

export const SALON_INFO: SalonInfo = {
  name: "Karthikeya Lavish Looks",
  wordmarkTracker: "KARTHIKEYA",
  wordmarkBrand: "Lavish Looks",
  tagline: "Beauty, Crafted With Intention.",
  supportingText: "Hair, skin, makeup, nails and bridal artistry for every occasion.",
  businessType: "Premium Unisex Salon in Warangal",
  locationLabel: "Warangal • Telangana",
  address: {
    line1: "Road No. 14A",
    line2: "Opposite O City Main Road",
    area: "Kashibugga Society Colony",
    colony: "Azam Jahi Mills Colony",
    city: "Warangal",
    state: "Telangana",
    pincode: "506002",
    plusCode: "XJJ7+7Q Warangal",
  },
  hours: {
    monday: "8:00 AM – 9:00 PM",
    remainingDays: "[CONFIRM]",
    note: "Appointments are recommended. Monday verified 8:00 AM – 9:00 PM; please confirm remaining days with our concierge.",
  },
  socialProof: {
    rating: "5.0 ★",
    reviewCount: "11 JustDial reviews",
    platform: "JustDial",
  },
  social: {
    instagramHandle: "@k_lavishlooks",
    instagramUrl: "https://www.instagram.com/k_lavishlooks",
    whatsappNumber: "919000000000",
    whatsappLink: "https://wa.me/919000000000?text=Hello%20Karthikeya%20Lavish%20Looks,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
    phone: "+91 90000 00000",
    phoneFormatted: "+91 90000 00000",
  },
  mapUrl: "https://maps.google.com/?q=Karthikeya+Lavish+Looks+Road+No+14A+Kashibugga+Warangal",
};
