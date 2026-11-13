import React from "react";
import ContactHeader from "./Header";
import ContactDemoForm from "./DemoForm";
import ContactOffices from "./Offices";

export default function ContactSections() {
  return (
    <div className="space-y-20 py-16">
      <ContactHeader />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactDemoForm />
          <ContactOffices />
        </div>
      </section>
    </div>
  );
}

