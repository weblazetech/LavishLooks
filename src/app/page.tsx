import React from "react";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServiceCategories from "@/components/home/ServiceCategories";
import InstagramGalleryPreview from "@/components/home/InstagramGalleryPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceCategories />
      <InstagramGalleryPreview />
      <WhyChooseUs />
      <ReviewsSection />
      <BookingCTA />
    </>
  );
}

