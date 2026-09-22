import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SALON_INFO } from "@/data/salonInfo";

export const metadata: Metadata = {
  title: {
    default: "Karthikeya Lavish Looks | Luxury Unisex Salon & Bridal Artistry Warangal",
    template: "%s | Karthikeya Lavish Looks Warangal",
  },
  description:
    "Where Beauty Meets Detail. Premier unisex salon in Kashibugga, Warangal offering precision hair styling, skin rituals, bridal makeup, henna artistry, and men's grooming.",
  keywords: [
    "Karthikeya Lavish Looks",
    "Luxury salon Warangal",
    "Unisex salon Warangal",
    "Bridal makeup Warangal",
    "Mehndi artist Warangal",
    "Kashibugga salon",
    "Men's grooming Warangal",
    "Hair salon Warangal",
  ],
  authors: [{ name: "Karthikeya Lavish Looks" }],
  creator: "Karthikeya Lavish Looks",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lavishlooks.in",
    siteName: "Karthikeya Lavish Looks",
    title: "Karthikeya Lavish Looks | Luxury Unisex Salon & Bridal Artistry",
    description:
      "Beauty, Crafted With Intention. Luxury unisex salon in Warangal offering bespoke hair, skin, bridal artistry, and men's grooming.",
    images: [
      {
        url: "https://lavishlooks.in/images/hero-salon.jpg",
        width: 1200,
        height: 630,
        alt: "Karthikeya Lavish Looks Luxury Salon Warangal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeya Lavish Looks | Luxury Unisex Salon Warangal",
    description:
      "Where Beauty Meets Detail. Bespoke hair, skincare, bridal artistry, and men's grooming in Warangal.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SALON_INFO.name,
    image: "https://lavishlooks.in/images/hero-salon.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SALON_INFO.address.line1}, ${SALON_INFO.address.line2}, ${SALON_INFO.address.area}`,
      addressLocality: SALON_INFO.address.city,
      addressRegion: SALON_INFO.address.state,
      postalCode: SALON_INFO.address.pincode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "11",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    telephone: SALON_INFO.social.phone,
    url: "https://lavishlooks.in",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
