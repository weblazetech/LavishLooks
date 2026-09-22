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
    schedule: string;
    operatingDays: string;
    tuesday: string;
    timings: string;
    note: string;
    monday: string;
    remainingDays: string;
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
  googleMapsPlaceUrl: string;
  mapEmbedUrl: string;
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
    schedule: "Wed – Mon: 8:00 AM – 9:00 PM",
    operatingDays: "Wednesday – Monday (All Days Except Tuesday)",
    tuesday: "Closed",
    timings: "8:00 AM – 9:00 PM",
    note: "Open all days except Tuesday from 8:00 AM to 9:00 PM. Appointments recommended; walk-ins warmly welcome.",
    monday: "8:00 AM – 9:00 PM",
    remainingDays: "8:00 AM – 9:00 PM (Tue Closed)",
  },
  socialProof: {
    rating: "5.0 ★",
    reviewCount: "11 JustDial reviews",
    platform: "JustDial",
  },
  social: {
    instagramHandle: "@k_lavishlooks",
    instagramUrl: "https://www.instagram.com/k_lavishlooks",
    whatsappNumber: "918977008676",
    whatsappLink: "https://wa.me/918977008676?text=Hello%20Karthikeya%20Lavish%20Looks,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
    phone: "+91 89770 08676",
    phoneFormatted: "+91 89770 08676",
  },
  mapUrl: "https://maps.app.goo.gl/xKCMnDyKg84kBKg96",
  googleMapsPlaceUrl: "https://maps.app.goo.gl/xKCMnDyKg84kBKg96",
  mapEmbedUrl: "https://maps.google.com/maps?q=Karthikeya+Lavish+looks,+Road+No.+14A,+Opp:+O+City+Main+Rd,+Kashibugga+Society+Colony,+Warangal,+Telangana+506002&t=&z=17&ie=UTF8&iwloc=&output=embed",
};
