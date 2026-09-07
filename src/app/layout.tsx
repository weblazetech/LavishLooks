import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/site-shell";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthikeya Lavish Looks | Warangal's Unisex Beauty Studio",
  description:
    "Hair, skin, makeup, mehndi and men's grooming in Kashibugga. Warangal's 5.0-rated unisex salon. Book an appointment today.",
  keywords: [
    "Karthikeya Lavish Looks",
    "unisex salon Warangal",
    "beauty parlour Kashibugga",
    "bridal makeup Warangal",
    "hair salon Warangal",
    "mehndi Warangal",
    "men's grooming Warangal",
  ],
  authors: [{ name: "Karthikeya Lavish Looks" }],
  openGraph: {
    title: "Karthikeya Lavish Looks | Warangal's Unisex Beauty Studio",
    description:
      "Hair, skin, makeup, mehndi and men's grooming in Kashibugga. Warangal's 5.0-rated unisex salon.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeya Lavish Looks | Warangal's Unisex Beauty Studio",
    description:
      "Hair, skin, makeup, mehndi and men's grooming in Kashibugga. Warangal's 5.0-rated unisex salon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased bg-ivory text-ink`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
