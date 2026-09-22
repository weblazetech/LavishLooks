import React from "react";
import { Metadata } from "next";
import BridalHero from "@/components/bridal/BridalHero";
import BridalPackages from "@/components/bridal/BridalPackages";
import BridalGallery from "@/components/bridal/BridalGallery";
import BridalEnquiryForm from "@/components/bridal/BridalEnquiryForm";

export const metadata: Metadata = {
  title: "Bridal & Occasion Glamour | Muhurtham, Mehndi & Reception Artistry",
  description:
    "Experience bespoke bridal makeup, intricate henna, traditional saree draping, and pre-wedding beauty packages at Karthikeya Lavish Looks in Warangal.",
};

export default function BridalPage() {
  return (
    <>
      <BridalHero />
      <BridalPackages />
      <BridalGallery />
      <BridalEnquiryForm />
    </>
  );
}
