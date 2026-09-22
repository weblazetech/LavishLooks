import React from "react";
import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import ServiceCategories from "@/components/sections/ServiceCategories";
import BridalFeature from "@/components/sections/BridalFeature";
import SignatureServices from "@/components/sections/SignatureServices";
import GalleryPreview from "@/components/sections/GalleryPreview";
import WhyUs from "@/components/sections/WhyUs";
import SocialProof from "@/components/sections/SocialProof";
import LocationSection from "@/components/sections/LocationSection";
import BookingCTA from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Brand Intro */}
      <BrandIntro />

      {/* 3. Service Categories */}
      <ServiceCategories />

      {/* 4. Bridal Feature with Subtle Gold Sheen */}
      <BridalFeature />

      {/* 5. Signature Services */}
      <SignatureServices />

      {/* 6. Gallery Preview */}
      <GalleryPreview />

      {/* 7. Why Karthikeya Lavish Looks */}
      <WhyUs />

      {/* 8. Social Proof (5.0 rating, 11 JustDial reviews) */}
      <SocialProof />

      {/* 9. Location / Visit Us (Open all days except Tuesday) */}
      <LocationSection />

      {/* 10. Final Booking CTA */}
      <BookingCTA />
    </>
  );
}
