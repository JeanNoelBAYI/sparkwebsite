"use client";

import React, { useState } from "react";
import { Calendar, Clock, Globe, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Button from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { toast } from "sonner";
import type { RegisterFormData } from "@src/types/forms";

export default function LaunchPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    country: "Nigeria",
    joiningAs: "Entrepreneur / Prospective Operator",
    interest: "",
    _honey: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        toast.success("Registration confirmed! We've sent details to your email.");
      } else {
        toast.error(data.message || "Registration failed.");
      }
    } catch {
      toast.error("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-24 py-16">
      {/* Launch Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0B1220] text-white mx-4 sm:mx-6 lg:mx-8 p-8 sm:p-14 lg:p-20 shadow-2xl">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-[#12D18E]/20 blur-[130px]" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12D18E] backdrop-blur">
            <Sparkles className="size-3.5" />
            <span>Official Launch &middot; Live, Online, Global</span>
          </div>

          <h1 className="text-4xl font-extrabold font-display sm:text-6xl lg:text-7xl leading-tight">
            The future of mobility has room for{" "}
            <span className="text-[#12D18E] italic">you.</span>
          </h1>

          <p className="text-base text-[#8A98A0] sm:text-lg max-w-2xl leading-relaxed">
            More operators. More possibilities. Meet the technology, hardware partnerships, and practical capital ecosystem helping mobility ideas become high-margin African businesses.
          </p>

          {/* Event Metadata Pill */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#E3EDE8]">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-[#12D18E]" />
              <span className="font-bold">November 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-[#12D18E]" />
              <span>2:00 PM WAT (UTC+1)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-[#12D18E]" />
              <span>Digital Broadcast &middot; Worldwide</span>
            </div>
          </div>

          <div className="pt-4">
            <a href="#register">
              <Button size="lg" className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2">
                <span>Reserve Your Place</span>
                <ArrowRight className="size-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl" id="register">
        <div className="rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-lg dark:bg-[#0E1522] space-y-6">
          <div>
            <span className="eyebrow">Free Registration</span>
            <h2 className="text-2xl font-bold font-display sm:text-3xl text-foreground mt-1">
              Join the Launch Broadcast
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Reserve your digital seat for the keynote, live operator panels, and press conference.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-[#12D18E]/30 bg-[#F0FBF5] p-8 text-center space-y-4 dark:bg-[#102A23]/30">
              <CheckCircle2 className="size-12 text-[#12D18E] mx-auto" />
              <h3 className="font-display text-xl font-bold text-foreground">
                You&apos;re Confirmed!
              </h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Thank you, {formData.firstName}. We&apos;ve reserved your place for the Trekk Mobility Official Launch representing <strong>{formData.organisation}</strong>. A calendar invitation has been sent to {formData.email}.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
              >
                Register Another Attendee
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    First Name *
                  </label>
                  <Input
                    name="firstName"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Last Name *
                  </label>
                  <Input
                    name="lastName"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Organisation / Venture *
                  </label>
                  <Input
                    name="organisation"
                    required
                    placeholder="Company or university"
                    value={formData.organisation}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Country *
                  </label>
                  <Input
                    name="country"
                    required
                    placeholder="Nigeria, Ghana, Kenya, etc."
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  I Am Joining As *
                </label>
                <select
                  name="joiningAs"
                  value={formData.joiningAs}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
                >
                  <option value="Entrepreneur / Prospective Operator">Entrepreneur / Prospective Operator</option>
                  <option value="Investor / Venture Partner">Investor / Venture Partner</option>
                  <option value="Government / Municipal Official">Government / Municipal Official</option>
                  <option value="University / Institutional Partner">University / Campus Administrator</option>
                  <option value="Media / Press">Media / Journalist</option>
                  <option value="Mobility Enthusiast">Mobility Enthusiast</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground">
                  What are you most excited to learn about? (Optional)
                </label>
                <textarea
                  name="interest"
                  rows={3}
                  placeholder="E.g., battery swap economics, municipal licensing, rider adoption..."
                  value={formData.interest}
                  onChange={handleChange}
                  className="flex w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
                />
              </div>

              <Button
                type="submit"
                loading={loading}
                className="w-full h-12 bg-[#12D18E] text-[#0B1220] font-bold text-base hover:bg-[#0fb87c] shadow-md gap-2"
              >
                <span>Confirm My Registration</span>
                <ArrowRight className="size-4" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

