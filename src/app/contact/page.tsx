"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@src/hooks/useTranslation";
import Button from "@src/components/ui/button";
import CustomButton from "@src/components/CustomButton";
import Dropdown from "@src/components/Dropdown";
import { Input } from "@src/components/ui/input";
import { toast } from "sonner";
import type { DemoFormData } from "@src/types/forms";

export default function ContactPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<DemoFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+234",
    phone: "",
    company: "",
    fleetSize: "1-50",
    vehicleType: "Electric Scooters",
    heardAbout: "",
    message: "",
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
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        toast.success("Demo request submitted! We will contact you within 24 hours.");
      } else {
        toast.error(data.message || "Failed to submit request.");
      }
    } catch {
      toast.error("An error occurred while submitting your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-4">
        <span className="eyebrow">{t("contact.eyebrow", "Contact Us")}</span>
        <h1 className="text-4xl font-extrabold font-display sm:text-6xl text-foreground">
          {t("contact.h1", "Talk to a Trekk Mobility Specialist")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t(
            "contact.heroLede",
            "Ready to launch or scale your fleet? Whether you’re deploying your first 20 scooters or expanding to your 10th city, our team can walk you through the platform and get you a live demo."
          )}
        </p>
      </section>

      {/* Main Grid: Form + Office Locations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Demo Request Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-md dark:bg-[#0E1522] space-y-6" id="demo-form">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#12D18E]">
                Platform Walkthrough
              </span>
              <h2 className="text-2xl font-bold font-display text-foreground mt-1">
                Book a Demo
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Tell us about your proposed mobility operation and vehicle needs.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#12D18E]/30 bg-[#F0FBF5] p-8 text-center space-y-4 dark:bg-[#102A23]/30">
                <CheckCircle2 className="size-12 text-[#12D18E] mx-auto" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Demo Request Received!
                </h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Thank you, {formData.firstName}. One of our African mobility specialists will reach out to schedule a live video demonstration for <strong>{formData.company}</strong> within one business day.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for anti-bot */}
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
                      placeholder="Jane"
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
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">
                      Business Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 814 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">
                      Company / Organization *
                    </label>
                    <Input
                      name="company"
                      required
                      placeholder="Mobility Venture Ltd"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">
                      Target Fleet Size *
                    </label>
                    <Dropdown
                      options={[
                        { value: "1-50", label: "1 – 50 vehicles (Pilot)" },
                        { value: "51-200", label: "51 – 200 vehicles (Growth)" },
                        { value: "201-500", label: "201 – 500 vehicles (Citywide)" },
                        { value: "500+", label: "500+ vehicles (Enterprise)" },
                      ]}
                      value={formData.fleetSize}
                      onChange={(val) =>
                        setFormData((prev) => ({ ...prev, fleetSize: val }))
                      }
                      triggerClassName="h-11 w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    Primary Vehicle Type *
                  </label>
                  <Dropdown
                    options={[
                      { value: "Electric Scooters", label: "Electric Kick-Scooters" },
                      { value: "Electric Bicycles", label: "E-Bikes" },
                      { value: "Electric Mopeds", label: "Electric Mopeds & Sitting Scooters" },
                      { value: "Commercial Motorcycles", label: "Commercial EV Motorcycles" },
                      { value: "Cars & Vans", label: "Cars & Vans" },
                      { value: "Multi-Modal Mix", label: "Multi-Modal Fleet Mix" },
                    ]}
                    value={formData.vehicleType}
                    onChange={(val) =>
                      setFormData((prev) => ({ ...prev, vehicleType: val }))
                    }
                    triggerClassName="h-11 w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-foreground">
                    How Can We Help You? *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your city, timeline, and whether you currently have hardware."
                    value={formData.message}
                    onChange={handleChange}
                    className="flex w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
                  />
                </div>

                <CustomButton
                  type="submit"
                  loading={loading}
                  variant="primary"
                  size="md"
                  rounded="xl"
                  withArrow
                  className="w-full text-base font-bold shadow-md"
                >
                  Request Live Platform Demo
                </CustomButton>
              </form>
            )}
          </div>

          {/* Global Office Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522] space-y-6">
              <h3 className="font-display text-xl font-bold text-foreground">
                Our Global Presence
              </h3>
              <p className="text-xs text-muted-foreground">
                Headquartered in Lagos with representation across North America and Europe to support international operators and suppliers.
              </p>

              <div className="space-y-6 divide-y divide-border/60">
                {/* Nigeria HQ */}
                <div className="pt-4 first:pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#12D18E]" />
                    <h4 className="font-display text-sm font-bold">Nigeria (Headquarters)</h4>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    Plot 660, Oluwatoyin Eleoramo Street, Omole Phase 2, Ikeja, Lagos, Nigeria
                  </p>
                  <p className="text-xs font-semibold pl-4 text-foreground">
                    +234 814 196 7739
                  </p>
                </div>

                {/* USA */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#2E6BFF]" />
                    <h4 className="font-display text-sm font-bold">USA Office</h4>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    925 Canterbury Rd, NE, Atlanta, GA 30324
                  </p>
                  <p className="text-xs font-semibold pl-4 text-foreground">
                    1 (336) 609-0662
                  </p>
                </div>

                {/* France */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#FFB020]" />
                    <h4 className="font-display text-sm font-bold">France Office</h4>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    19 Rue des Oiseaux, 91130, Ris-Orangis, France
                  </p>
                  <p className="text-xs font-semibold pl-4 text-foreground">
                    +33 (7) 58-27-56-79
                  </p>
                </div>

                {/* Luxembourg */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#12D18E]" />
                    <h4 className="font-display text-sm font-bold">Luxembourg Office</h4>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    2 Rue du Kiem, L-8435 Steinfort
                  </p>
                  <p className="text-xs font-semibold pl-4 text-foreground">
                    +352 661 911217
                  </p>
                </div>

                {/* Switzerland */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#2E6BFF]" />
                    <h4 className="font-display text-sm font-bold">Switzerland Office</h4>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    Tannwaldstrasse 64, 4600 Olten, Switzerland
                  </p>
                  <p className="text-xs font-semibold pl-4 text-foreground">
                    +41 76 675 74 38
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

