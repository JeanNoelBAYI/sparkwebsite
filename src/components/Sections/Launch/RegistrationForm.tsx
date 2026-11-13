"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { toast } from "sonner";
import type { RegisterFormData } from "@src/types/forms";

export default function LaunchRegistrationForm() {
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
              Thank you, {formData.firstName}. We&apos;ve reserved your place for the Trekk Mobility Official Launch representing{" "}
              <strong>{formData.organisation}</strong>. A calendar invitation has been sent to {formData.email}.
            </p>
            <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
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
  );
}

