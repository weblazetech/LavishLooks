"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Crown, Sparkles, Check, Send, Calendar, Phone, MessageSquare, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function BridalPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "Muhurtham Wedding",
    servicesRequired: ["Bridal Makeup", "Bridal Henna"],
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    "Bridal Makeup (HD / Airbrush)",
    "Bridal Hair Styling & Flowers",
    "Bridal Henna / Mehndi",
    "Saree Draping & Silhouette",
    "Pre-Bridal Skin & Hair Glow",
    "Groom Grooming & Styling",
    "Family / Bridesmaid Makeovers",
  ];

  const handleCheckboxToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== service)
          : [...prev.servicesRequired, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const packages = [
    {
      title: "Royal Muhurtham Heritage",
      tag: "Flagship Bridal",
      desc: "Complete ceremonial perfection tailored for South Indian and Telugu wedding traditions.",
      includes: [
        "Airbrush / HD Water-Resistant Makeup",
        "Traditional Bridal Plait & Poola Jada Styling",
        "Intricate Handcrafted Bridal Henna (Elbows & Feet)",
        "Silk Saree Draping with Custom Pleat Pinning",
        "Pre-Bridal Radiance Facial Session",
      ],
    },
    {
      title: "Sangeet & Reception Glamour",
      tag: "Celebration Night",
      desc: "Contemporary high-fashion glamour designed for radiant evening lighting and dancing.",
      includes: [
        "Luminous Smoky or Champagne Gold Eye Glamour",
        "Romantic Textured Waves or Sculpted Updo",
        "Contemporary Floral Mehndi Finger Accents",
        "Lehenga / Gown Draping & Silhouette Setting",
        "Touch-up Kit & Setting Spray Treatment",
      ],
    },
    {
      title: "Royal Couple Harmony",
      tag: "Bride & Groom",
      desc: "Coordinated aesthetic luxury for both the bride and groom for a synchronized presence.",
      includes: [
        "Complete Bridal Regimen (Hair, Makeup, Henna, Draping)",
        "Groom Executive Facial & Charcoal Beard Sculpting",
        "Groom Hair Cut & Royal Styling Touchup",
        "Synchronized Pre-Wedding Scheduling",
        "Dedicated VIP Suite Access",
      ],
    },
  ];

  const bridalGallery = [
    {
      title: "Temple Jewellery & Muhurtham Glow",
      category: "Makeup & Hair",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Peacock Royal Bridal Henna",
      category: "Mehndi",
      image: "/images/services/mehndi-bridal.jpg",
    },
    {
      title: "Reception Diamond Shimmer",
      category: "Occasion Glamour",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Handcrafted Jaali Palms",
      category: "Mehndi",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--teal-950)", minHeight: "100vh", paddingTop: "calc(var(--header-height) + 2rem)" }}>
      {/* Dramatic Bridal Hero */}
      <section
        className="bridal-sheen-container"
        style={{
          position: "relative",
          padding: "6rem 0 5rem",
          backgroundColor: "var(--teal-900)",
          borderBottom: "1px solid rgba(197, 168, 112, 0.25)",
          overflow: "hidden",
        }}
      >
        <div className="bridal-sheen-overlay" />

        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="editorial-tag" style={{ marginBottom: "1.5rem" }}>
              <Crown size={14} /> The Bridal Atelier
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                fontWeight: 400,
                color: "var(--ivory-50)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                marginBottom: "1.5rem",
              }}
            >
              Bridal & <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>Occasion Glamour</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "var(--ivory-100)",
                lineHeight: 1.8,
                maxWidth: "680px",
                margin: "0 auto 2.5rem",
              }}
            >
              Makeup, hair and henna crafted for your big day — booked by appointment only. Honoring Telugu traditions and modern celebratory elegance with heartfelt care.
            </p>

            <Button
              href="#enquiry"
              variant="primary"
              size="lg"
              icon={<Heart size={16} />}
            >
              Reserve Bridal Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Bridal Introduction */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="editorial-tag" style={{ marginBottom: "1.2rem" }}>
                <Sparkles size={12} /> The Bridal Philosophy
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--ivory-50)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Honoring Your Heritage, <br />
                <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>
                  Perfecting Every Angle.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "var(--ivory-100)",
                  lineHeight: 1.8,
                  marginBottom: "1.2rem",
                }}
              >
                A wedding is a lifetime milestone. At Karthikeya Lavish Looks, our bridal artists understand the nuances of daylight Muhurtham ceremonies, evening high-definition photography, and the cultural reverence of Indian weddings.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--text-muted-dark)",
                  lineHeight: 1.8,
                }}
              >
                We collaborate with you on fabric draping, jewellery balance, skin undertones, and henna aesthetics to craft a timeless look that feels genuinely like you.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: "460px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--gold-border)",
              }}
            >
              <Image
                src="/images/services/mehndi-bridal.jpg"
                alt="Bridal Henna Craftsmanship"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(4, 18, 18, 0.75) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Bridal Disciplines (Makeup, Hair, Mehndi, Occasion Looks) */}
      <section className="section-spacing" style={{ backgroundColor: "var(--teal-900)" }}>
        <div className="container">
          <SectionHeader
            tag="Artisanal Pillars"
            title="Bridal Disciplines"
            subtitle="Four synchronized arts delivered seamlessly under one prestigious roof in Warangal."
            align="center"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="editorial-glass-card" style={{ padding: "2.2rem" }}>
              <span className="font-serif" style={{ fontSize: "1.8rem", color: "var(--gold-300)" }}>
                01. Makeup
              </span>
              <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--ivory-50)", margin: "0.6rem 0" }}>
                HD & Airbrush Artistry
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted-dark)", lineHeight: 1.6 }}>
                Flawless coverage calibrated for camera lenses, tear resistance, and lasting radiant glow from first rituals to final send-off.
              </p>
            </div>

            <div className="editorial-glass-card" style={{ padding: "2.2rem" }}>
              <span className="font-serif" style={{ fontSize: "1.8rem", color: "var(--gold-300)" }}>
                02. Hair
              </span>
              <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--ivory-50)", margin: "0.6rem 0" }}>
                Architectural Styling
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted-dark)", lineHeight: 1.6 }}>
                Classic jada flower arrangements, temple jewellery pinning, romantic soft waves, and sculpted crowns secured for hours.
              </p>
            </div>

            <div className="editorial-glass-card" style={{ padding: "2.2rem" }}>
              <span className="font-serif" style={{ fontSize: "1.8rem", color: "var(--gold-300)" }}>
                03. Mehndi
              </span>
              <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--ivory-50)", margin: "0.6rem 0" }}>
                Organic Royal Henna
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted-dark)", lineHeight: 1.6 }}>
                Bespoke designs, customized wedding motifs, peacock figures, and rich mahogany stains prepared with 100% pure organic ingredients.
              </p>
            </div>

            <div className="editorial-glass-card" style={{ padding: "2.2rem" }}>
              <span className="font-serif" style={{ fontSize: "1.8rem", color: "var(--gold-300)" }}>
                04. Draping
              </span>
              <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--ivory-50)", margin: "0.6rem 0" }}>
                Couture Saree Draping
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted-dark)", lineHeight: 1.6 }}>
                Crisp pleat alignment, heavy kanjeevaram structuring, and comfortable mobility throughout your ceremonial duties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Packages Overview */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            tag="Curated Experiences"
            title="Bridal Packages Overview"
            subtitle="Thoughtfully structured packages for brides, grooms, and celebration entourages. Custom adjustments welcomed."
            align="center"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="editorial-glass-card"
                style={{
                  padding: "2.8rem 2.2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div>
                  <span className="editorial-tag" style={{ marginBottom: "1rem" }}>
                    {pkg.tag}
                  </span>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.7rem", color: "var(--ivory-50)", marginBottom: "0.75rem" }}
                  >
                    {pkg.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted-dark)", marginBottom: "1.75rem", lineHeight: 1.6 }}>
                    {pkg.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <Check size={16} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "3px" }} />
                        <span style={{ fontSize: "0.88rem", color: "var(--ivory-100)", lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(197, 168, 112, 0.15)" }}>
                  <Button href="#enquiry" variant="outline" size="sm">
                    Inquire For This Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Real Bridal Gallery */}
      <section className="section-spacing" style={{ backgroundColor: "var(--teal-900)" }}>
        <div className="container">
          <SectionHeader
            tag="Visual Archives"
            title="Real Bridal Creations"
            subtitle="A glimpse into the authentic bridal beauty, intricate henna patterns, and ceremonial looks crafted at our Warangal salon."
            align="center"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {bridalGallery.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  height: "360px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--gold-border)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(4, 18, 18, 0.85) 0%, transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.72rem", color: "var(--gold-400)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {item.category}
                  </span>
                  <h4 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--ivory-50)", marginTop: "2px" }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Appointment / Enquiry Form */}
      <section className="section-spacing" id="enquiry">
        <div className="container">
          <div
            className="editorial-glass-card"
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "clamp(2rem, 5vw, 4rem)",
              backgroundColor: "rgba(7, 30, 30, 0.75)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="editorial-tag" style={{ marginBottom: "1rem" }}>
                <Crown size={12} /> Confidential Consultation
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--ivory-50)", fontWeight: 400 }}
              >
                Bridal & Event Enquiry
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted-dark)", marginTop: "0.5rem" }}>
                Share your wedding vision with us. Our senior bridal concierge will connect directly to discuss availability and bespoke arrangements.
              </p>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1.5rem",
                  border: "1px solid var(--gold-border)",
                  borderRadius: "16px",
                  background: "rgba(13, 49, 49, 0.6)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "var(--radius-full)",
                    background: "var(--gold-gradient)",
                    color: "var(--teal-950)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Check size={30} />
                </div>
                <h3 className="font-serif" style={{ fontSize: "2rem", color: "var(--ivory-50)", marginBottom: "0.8rem" }}>
                  Enquiry Received
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-muted-dark)", maxWidth: "480px", margin: "0 auto 2rem" }}>
                  Thank you, {formData.name}. Our bridal coordinator will contact you at {formData.phone} within 24 hours.
                </p>

                <a
                  href={`https://wa.me/${SALON_INFO.social.whatsappNumber}?text=Hello%20Karthikeya%20Lavish%20Looks,%20I%20have%20submitted%20a%20bridal%20enquiry%20for%20${encodeURIComponent(
                    formData.name
                  )}%20on%20${encodeURIComponent(formData.eventDate)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 1.8rem",
                    borderRadius: "var(--radius-full)",
                    background: "var(--gold-gradient)",
                    color: "var(--teal-950)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.7)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.7)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                  {/* Event Date */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.7)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Event Type */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.7)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      <option value="Muhurtham Wedding">Muhurtham Wedding Ceremony</option>
                      <option value="Sangeet & Mehendi">Sangeet & Mehendi Celebration</option>
                      <option value="Reception Gala">Grand Reception Gala</option>
                      <option value="Engagement Ceremony">Engagement / Pellikuthuru</option>
                      <option value="Multi-day Complete Package">Multi-day Wedding Extravaganza</option>
                    </select>
                  </div>
                </div>

                {/* Services Required Checkboxes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                    Services Required
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "0.75rem",
                    }}
                  >
                    {availableServices.map((service) => {
                      const isChecked = formData.servicesRequired.includes(service);
                      return (
                        <div
                          key={service}
                          onClick={() => handleCheckboxToggle(service)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            padding: "0.6rem 0.8rem",
                            borderRadius: "6px",
                            backgroundColor: isChecked ? "rgba(197, 168, 112, 0.15)" : "rgba(4, 18, 18, 0.4)",
                            border: `1px solid ${isChecked ? "var(--gold-400)" : "var(--gold-border)"}`,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "3px",
                              border: "1px solid var(--gold-400)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: isChecked ? "var(--gold-400)" : "transparent",
                              color: "var(--teal-950)",
                            }}
                          >
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </div>
                          <span style={{ fontSize: "0.85rem", color: "var(--ivory-100)" }}>{service}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                    Notes & Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your timing, location, attire colors, or any custom requests..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      padding: "0.9rem 1.2rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(4, 18, 18, 0.7)",
                      border: "1px solid var(--gold-border)",
                      color: "var(--ivory-50)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />}>
                    Send Bridal Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
