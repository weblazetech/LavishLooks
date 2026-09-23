"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";
  const prefilledType = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: prefilledService || (prefilledType === "bridal" ? "Bridal & Occasion Makeup" : "Women's Precision Haircut & Styling"),
    preferredDate: "",
    preferredTime: "10:00 AM",
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
    if (!formData.name.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setErrorMessage("Please complete your Name, Phone Number, and Preferred Date.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Could not submit request. Please try calling the salon directly.");
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-gold-400/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>Quick Appointment Request</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-medium">
          Schedule Your Visit
        </h2>
        <p className="text-xs sm:text-sm text-ivory/70 font-light">
          Submit your desired date &amp; service. Our reception team will review slot availability and contact you.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-surface-elevated border border-gold-400/40 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl text-ivory font-medium">
            Appointment Request Received
          </h3>
          <p className="text-sm text-ivory/80 max-w-md mx-auto font-light leading-relaxed">
            Thank you, <span className="text-gold-300 font-medium">{formData.name}</span>. Your request for{" "}
            <span className="text-gold-300 font-medium">{formData.service}</span> on{" "}
            <span className="text-gold-300 font-medium">{formData.preferredDate} ({formData.preferredTime})</span> has been received.
          </p>
          <div className="p-4 rounded-xl bg-gold-400/10 border border-gold-400/20 text-xs text-gold-200 text-center max-w-md mx-auto">
            Note: This request is not yet an automated confirmation. The salon will verify slot availability and call or message you at <span className="font-semibold text-ivory">{formData.phone}</span> to finalize your appointment.
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  phone: "",
                  service: "Women's Precision Haircut & Styling",
                  preferredDate: "",
                  preferredTime: "10:00 AM",
                  notes: "",
                });
              }}
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-gold-400 text-background hover:bg-gold-300 transition-colors"
            >
              Request Another Slot
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-red-200 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
              >
                Full Name <span className="text-gold-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                />
                <User className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
              >
                Phone Number <span className="text-gold-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98490 12345"
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                />
                <Phone className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Service */}
            <div className="space-y-2 sm:col-span-2">
              <label
                htmlFor="service"
                className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
              >
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-ivory focus:outline-none focus:border-gold-400 text-sm transition-colors"
              >
                <optgroup label="Hair Care">
                  <option value="Women's Precision Haircut & Styling">Women&apos;s Precision Haircut &amp; Styling</option>
                  <option value="Global Hair Coloring & Balayage">Global Hair Coloring &amp; Balayage</option>
                  <option value="Keratin Treatment & Hair Botox">Keratin Treatment &amp; Hair Botox</option>
                  <option value="Lavish Botanical Hair Spa">Lavish Botanical Hair Spa</option>
                </optgroup>
                <optgroup label="Skin & Facials">
                  <option value="Signature 24K Radiance Facial">Signature 24K Radiance Facial</option>
                  <option value="Deep Pore Cleansing & Hydra Care">Deep Pore Cleansing &amp; Hydra Care</option>
                  <option value="Anti-Pollution Clarifying Cleanup">Anti-Pollution Clarifying Cleanup</option>
                </optgroup>
                <optgroup label="Makeup & Bridal">
                  <option value="Bridal & Occasion Makeup">Bridal &amp; Occasion Makeup</option>
                  <option value="Full Bridal Henna / Mehndi Artistry">Full Bridal Henna / Mehndi Artistry</option>
                  <option value="Party & Occasion Glam Makeup">Party &amp; Occasion Glam Makeup</option>
                </optgroup>
                <optgroup label="Men's Grooming">
                  <option value="Men's Signature Cut & Styling">Men&apos;s Signature Cut &amp; Styling</option>
                  <option value="Royal Beard Sculpt & Hot Towel">Royal Beard Sculpt &amp; Hot Towel</option>
                  <option value="Gentleman's Complete Grooming Ritual">Gentleman&apos;s Complete Grooming Ritual</option>
                </optgroup>
              </select>
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <label
                htmlFor="preferredDate"
                className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
              >
                Preferred Date <span className="text-gold-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-surface-elevated border border-surface-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm transition-colors"
                />
                <Calendar className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Preferred Time */}
            <div className="space-y-2">
              <label
                htmlFor="preferredTime"
                className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
              >
                Preferred Time
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-surface-elevated border border-surface-border text-ivory focus:outline-none focus:border-gold-400 text-sm transition-colors"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
                <Clock className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label
              htmlFor="notes"
              className="block text-xs uppercase tracking-wider text-ivory/80 font-semibold"
            >
              Notes or Special Requests (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g., specific stylist preference, hair length details, or wedding event timing"
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
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 text-background" />
                  <span>Request Appointment</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-ivory/50">
            * We will contact you to confirm slot availability before finalizing your appointment.
          </p>
        </form>
      )}
    </div>
  );
}
