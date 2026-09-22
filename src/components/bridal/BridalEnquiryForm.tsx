"use client";

import React, { useState } from "react";
import { Send, Heart, CheckCircle2, AlertCircle, Sparkles, Loader2 } from "lucide-react";

export default function BridalEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    preferredTime: "",
    package: "The Royal Muhurtham Bridal Experience",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventDate) {
      setErrorMessage("Please fill out your Name, Phone Number, and Event Date.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate reliable enquiry processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send enquiry. Please call or message the salon directly.");
    }
  };

  return (
    <section id="bridal-enquiry" className="py-20 md:py-24 bg-surface relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-surface-border shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Bridal Reservation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-medium">
              Bridal &amp; Occasion Consultation Enquiry
            </h2>
            <p className="text-sm text-ivory/70 font-light">
              Submit your wedding or event dates. Our bridal coordinator will check artist
              availability and reach out with tailored package options.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-surface-elevated border border-gold-400/40 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-ivory font-medium">
                Bridal Enquiry Received
              </h3>
              <p className="text-sm text-ivory/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <span className="text-gold-300 font-medium">{formData.name}</span>.
                We have received your request for{" "}
                <span className="text-gold-300 font-medium">{formData.eventDate}</span>. Our
                bridal team will review availability and contact you at{" "}
                <span className="text-gold-300 font-medium">{formData.phone}</span> shortly to
                confirm details.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      phone: "",
                      eventDate: "",
                      preferredTime: "",
                      package: "The Royal Muhurtham Bridal Experience",
                      notes: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-gold-400 text-background hover:bg-gold-300 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="bridal-name"
                    className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                  >
                    Your Full Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="bridal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter bride or client name"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="bridal-phone"
                    className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                  >
                    Contact Phone Number <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="bridal-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="bridal-date"
                    className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                  >
                    Wedding / Event Date <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="date"
                    id="bridal-date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                  />
                </div>

                {/* Preferred Date/Time for Consultation */}
                <div className="space-y-2">
                  <label
                    htmlFor="bridal-time"
                    className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                  >
                    Preferred Time Slot
                  </label>
                  <select
                    id="bridal-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory focus:outline-none focus:border-gold-400 text-sm transition-colors"
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 9:00 PM)">Evening (4:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Service / Package */}
              <div className="space-y-2">
                <label
                  htmlFor="bridal-pkg"
                  className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                >
                  Desired Bridal Service / Package
                </label>
                <select
                  id="bridal-pkg"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory focus:outline-none focus:border-gold-400 text-sm transition-colors"
                >
                  <option value="The Royal Muhurtham Bridal Experience">
                    The Royal Muhurtham Bridal Experience
                  </option>
                  <option value="Contemporary Reception & Sangeet Glamour">
                    Contemporary Reception &amp; Sangeet Glamour
                  </option>
                  <option value="Bridal Henna & Pre-Bridal Radiance">
                    Bridal Henna &amp; Pre-Bridal Radiance
                  </option>
                  <option value="Custom Bridal & Occasion Styling">
                    Custom Bridal &amp; Occasion Styling (Discuss with Artist)
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label
                  htmlFor="bridal-notes"
                  className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
                >
                  Ceremony Details / Specific Requests
                </label>
                <textarea
                  id="bridal-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about the venue, saree drape preferences, mehndi requirements, etc."
                  className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background shadow-xl shadow-gold-900/30 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-background" />
                      <span>Sending Bridal Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-background" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-ivory/50">
                * Bridal dates are secured based on salon availability. We will contact you to confirm appointment slots.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
