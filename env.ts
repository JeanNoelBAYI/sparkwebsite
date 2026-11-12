// src/env.ts or root env.ts
export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || "",
  MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID || "",
  MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX || "us1",
};

export default env;

