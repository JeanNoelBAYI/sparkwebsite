"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Trash2 } from "lucide-react";
import Button from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { toast } from "sonner";

export default function ScooteasyDeleteAccountPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: "Scooteasy Account Deletion",
          message: `ACCOUNT DELETION REQUEST for Scooteasy Rider. Phone: ${formData.phone}. Reason: ${formData.reason}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Account deletion request logged.");
      } else {
        toast.error("Failed to submit request.");
      }
    } catch {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl space-y-8">
      <Link
        href="/scooteasy"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Scooteasy</span>
      </Link>

      <div className="space-y-3">
        <span className="eyebrow">Account Management</span>
        <h1 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
          Request Scooteasy Account Deletion
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Submit this form to request permanent deletion of your Scooteasy rider profile, associated ride history, and personal identity data. Requests are verified and processed within 5 business days.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-[#0E1522]">
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="size-12 text-[#12D18E] mx-auto" />
            <h3 className="font-display text-xl font-bold">Request Logged</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              We have received your account deletion request for <strong>{formData.email}</strong>. Our data operations team will verify your phone number and confirm account purge via email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Full Name *</label>
              <Input
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Rider Account Email *</label>
              <Input
                type="email"
                required
                placeholder="student@abuad.edu.ng"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Rider Phone Number *</label>
              <Input
                type="tel"
                required
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Reason for Deletion (Optional)</label>
              <textarea
                rows={3}
                placeholder="E.g., Graduated from university, no longer using the app..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="flex w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-[#12D18E]"
              />
            </div>

            <Button
              type="submit"
              loading={loading}
              variant="destructive"
              className="w-full h-12 rounded-xl font-bold gap-2"
            >
              <Trash2 className="size-4" />
              <span>Submit Account Deletion Request</span>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

