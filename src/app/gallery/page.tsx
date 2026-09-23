import React from "react";
import { Metadata } from "next";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery & Portfolio | Real Transformations & Beauty Artistry",
  description:
    "View authentic hair transformations, bridal looks, mehndi designs, and men's grooming by Karthikeya Lavish Looks in Warangal, Telangana.",
};

export default function GalleryPage() {
  return <GalleryView />;
}
