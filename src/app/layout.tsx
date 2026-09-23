import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { SALON_DATA } from "@/data/salonData";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0C10" },
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Karthikeya Lavish Looks | Luxury Unisex Salon in Warangal",
    template: "%s | Karthikeya Lavish Looks",
  },
  description:
    "Karthikeya Lavish Looks is a premier luxury unisex salon in Warangal, Telangana offering bespoke hair styling, bridal makeup, mehndi artistry, skin rituals, and men's grooming.",
  keywords: [
    "Karthikeya Lavish Looks",
    "Salon in Warangal",
    "Unisex Salon Warangal",
    "Bridal Makeup Warangal",
    "Hair Salon Warangal",
    "Mehndi Artist Warangal",
    "Men's Grooming Warangal",
    "Kashibugga Salon",
    "O City Road Salon",
    "Luxury Salon Telangana",
  ],
  authors: [{ name: "Karthikeya Lavish Looks" }],
  openGraph: {
    title: "Karthikeya Lavish Looks | Luxury Unisex Salon in Warangal",
    description:
      "Where Beauty Meets Lavish Confidence. Discover exceptional hair transformations, bespoke bridal glamour, intricate mehndi, and men's grooming in Warangal.",
    url: "https://karthikeyalavishlooks.com",
    siteName: "Karthikeya Lavish Looks",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
    name: SALON_DATA.name,
    description: SALON_DATA.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SALON_DATA.address.street,
      addressLocality: SALON_DATA.address.city,
      addressRegion: SALON_DATA.address.state,
      postalCode: SALON_DATA.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.9942",
      longitude: "79.6105",
    },
    url: "https://karthikeyalavishlooks.com",
    sameAs: [SALON_DATA.instagram.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SALON_DATA.rating.score.toString(),
      reviewCount: SALON_DATA.rating.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
  };

  const themeInitializerScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : (prefersDark ? 'dark' : 'dark');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      } catch (e) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
      <head>

        <script
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ivory antialiased selection:bg-gold-400 selection:text-background min-h-screen flex flex-col justify-between transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

