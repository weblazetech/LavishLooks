"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, MessageSquare, Check, Phone, ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Hair Styling & Colour",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const servicesList = [
    "Hair Styling & Colour",
    "Skin Rituals & Facials",
    "Celebration / Occasion Makeup",
    "Royal Bridal Artistry & Henna",
    "Couture Nails & Manicure/Pedicure",
    "Men's Precision Cut & Beard Sculpting",
    "Multiple Services / Full Makeover",
  ];

  const timeslots = [
    "Morning (9:00 AM - 12:00 PM)",
    "Early Afternoon (12:00 PM - 3:00 PM)",
    "Late Afternoon (3:00 PM - 6:00 PM)",
    "Evening (6:00 PM - 9:00 PM)",
  ];

  return (
    <div style={{ backgroundColor: "var(--teal-950)", minHeight: "100vh", paddingTop: "calc(var(--header-height) + 2rem)" }}>
      {/* Header */}
      <section
        style={{
          position: "relative",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <span className="editorial-tag" style={{ marginBottom: "1rem" }}>
              <Calendar size={12} /> Appointments & Concierge
            </span>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                fontWeight: 400,
                color: "var(--ivory-50)",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Let's Create <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>Your Look.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-muted-dark)", lineHeight: 1.8 }}>
              Reserve your personalized session at {SALON_INFO.name}. Our artisans provide dedicated time for consultation, precision treatment, and refined finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Location Information Grid */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Booking Form Card */}
            <div
              className="editorial-glass-card"
              style={{
                padding: "clamp(2rem, 4vw, 3.5rem)",
                backgroundColor: "rgba(7, 30, 30, 0.7)",
              }}
            >
              <h2
                className="font-serif"
                style={{ fontSize: "1.9rem", color: "var(--ivory-50)", fontWeight: 400, marginBottom: "0.5rem" }}
              >
                Request An Appointment
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted-dark)", marginBottom: "2.2rem" }}>
                Complete the fields below and our salon concierge will confirm your requested slot.
              </p>

              {isSubmitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem 1.5rem",
                    border: "1px solid var(--gold-border)",
                    borderRadius: "16px",
                    background: "rgba(13, 49, 49, 0.5)",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "var(--radius-full)",
                      background: "var(--gold-gradient)",
                      color: "var(--teal-950)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--ivory-50)", marginBottom: "0.6rem" }}>
                    Appointment Requested
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted-dark)", marginBottom: "1.8rem" }}>
                    Thank you, {formData.name}. We have noted your request for {formData.service} on {formData.preferredDate} ({formData.preferredTime}).
                  </p>

                  <a
                    href={`https://wa.me/${SALON_INFO.social.whatsappNumber}?text=Hello%20Karthikeya%20Lavish%20Looks,%20I%20have%20requested%20an%20appointment%20for%20${encodeURIComponent(
                      formData.name
                    )}%20for%20${encodeURIComponent(formData.service)}%20on%20${encodeURIComponent(formData.preferredDate)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.8rem 1.6rem",
                      borderRadius: "var(--radius-full)",
                      background: "var(--gold-gradient)",
                      color: "var(--teal-950)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Confirm Instantly via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.6)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.6)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Service */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.6)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        style={{
                          padding: "0.85rem 1.1rem",
                          borderRadius: "8px",
                          backgroundColor: "rgba(4, 18, 18, 0.6)",
                          border: "1px solid var(--gold-border)",
                          color: "var(--ivory-50)",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                        Preferred Time *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        style={{
                          padding: "0.85rem 1.1rem",
                          borderRadius: "8px",
                          backgroundColor: "rgba(4, 18, 18, 0.6)",
                          border: "1px solid var(--gold-border)",
                          color: "var(--ivory-50)",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      >
                        {timeslots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    <label style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-300)" }}>
                      Notes / Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific requests or hair/skin considerations..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        padding: "0.85rem 1.1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(4, 18, 18, 0.6)",
                        border: "1px solid var(--gold-border)",
                        color: "var(--ivory-50)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  {/* Submit CTA */}
                  <Button type="submit" variant="primary" size="lg" icon={<Calendar size={16} />}>
                    Request Appointment
                  </Button>
                </form>
              )}
            </div>

            {/* Location & Details Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Salon Details Box */}
              <div
                className="editorial-glass-card"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(7, 30, 30, 0.6)",
                }}
              >
                <div className="brand-wordmark" style={{ marginBottom: "1.5rem" }}>
                  <span className="wordmark-karthikeya">{SALON_INFO.wordmarkTracker}</span>
                  <span className="wordmark-lavish-looks">{SALON_INFO.wordmarkBrand}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Address */}
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <MapPin size={20} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.92rem", color: "var(--ivory-100)", lineHeight: 1.6 }}>
                      <p style={{ fontWeight: 600, color: "var(--ivory-50)" }}>{SALON_INFO.name}</p>
                      <p>{SALON_INFO.address.line1}, {SALON_INFO.address.line2}</p>
                      <p>{SALON_INFO.address.area}</p>
                      <p>{SALON_INFO.address.colony}, {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.pincode}</p>
                      <p style={{ color: "var(--gold-300)", fontWeight: 600, marginTop: "4px" }}>
                        Plus Code: {SALON_INFO.address.plusCode}
                      </p>
                    </div>
                  </div>

                  {/* Hours Rule Compliant */}
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <Clock size={20} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }} />
                    <div style={{ fontSize: "0.92rem", color: "var(--ivory-100)", lineHeight: 1.6 }}>
                      <p>
                        Monday: <span style={{ color: "var(--gold-300)", fontWeight: 600 }}>{SALON_INFO.hours.monday}</span>
                      </p>
                      <p>
                        Remaining Days:{" "}
                        <span
                          style={{
                            color: "var(--gold-400)",
                            fontWeight: 600,
                            padding: "0.1rem 0.4rem",
                            borderRadius: "4px",
                            border: "1px solid var(--gold-border)",
                            background: "rgba(13, 49, 49, 0.6)",
                          }}
                        >
                          {SALON_INFO.hours.remainingDays}
                        </span>
                      </p>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-muted-dark)", marginTop: "3px" }}>
                        Please call ahead or send a WhatsApp message to confirm timings for remaining days.
                      </p>
                    </div>
                  </div>

                  {/* Phone Direct */}
                  <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                    <Phone size={20} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                    <div style={{ fontSize: "0.92rem", color: "var(--ivory-100)" }}>
                      <a
                        href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
                        style={{ color: "var(--ivory-50)", fontWeight: 600, fontSize: "1.05rem" }}
                      >
                        {SALON_INFO.social.phoneFormatted}
                      </a>
                      <p style={{ fontSize: "0.78rem", color: "var(--gold-300)" }}>Direct Call & Inquiries</p>
                    </div>
                  </div>

                  {/* Social & WhatsApp Buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", paddingTop: "0.5rem" }}>
                    <a
                      href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.65rem 1.2rem",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--gold-border)",
                        background: "rgba(13, 49, 49, 0.6)",
                        color: "var(--ivory-50)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                      }}
                    >
                      <Phone size={16} style={{ color: "var(--gold-400)" }} />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={SALON_INFO.social.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.65rem 1.2rem",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--gold-border)",
                        background: "rgba(13, 49, 49, 0.6)",
                        color: "var(--ivory-50)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                      }}
                    >
                      <MessageSquare size={16} style={{ color: "var(--gold-400)" }} />
                      <span>WhatsApp Us</span>
                    </a>

                    <a
                      href={SALON_INFO.social.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.65rem 1.2rem",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--gold-border)",
                        background: "rgba(13, 49, 49, 0.6)",
                        color: "var(--gold-300)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                      }}
                    >
                      <InstagramIcon size={16} />
                      <span>{SALON_INFO.social.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed with Exact Location */}
              <div
                className="editorial-glass-card"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "320px",
                  position: "relative",
                }}
              >
                <iframe
                  title="Google Maps Exact Location"
                  src="https://maps.google.com/maps?q=XJJ7%2B7Q,+Kashibugga,+Warangal,+Telangana+506002&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
