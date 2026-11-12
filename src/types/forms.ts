// src/types/forms.ts

export type DemoFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phone: string;
  company: string;
  fleetSize: string;
  vehicleType: string;
  heardAbout?: string;
  message: string;
  _honey?: string;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  country: string;
  joiningAs: string;
  interest?: string;
  _honey?: string;
};

export type NewsletterFormData = {
  email: string;
  source?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

export type FormSubmissionResponse = {
  success: boolean;
  message: string;
  error?: string;
};

