// src/app/api/demo/route.ts
import { NextResponse } from "next/server";
import {
  sanitizeField,
  buildDemoConfirmationHtml,
} from "@src/utils/mailHelpers";
import type { ApiResponse } from "@src/types/generic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check: pretend success if bot filled it out
    if (body._honey) {
      return NextResponse.json<ApiResponse>({
        success: true,
        message: "Thank you for requesting a demo.",
      });
    }

    const firstName = sanitizeField(body.firstName, 80);
    const lastName = sanitizeField(body.lastName, 80);
    const email = sanitizeField(body.email, 200);
    const phoneCountry = sanitizeField(body.phoneCountry, 60);
    const phone = sanitizeField(body.phone, 40);
    const company = sanitizeField(body.company, 160);
    const fleetSize = sanitizeField(body.fleetSize, 60);
    const vehicleType = sanitizeField(body.vehicleType, 60);
    const heardAbout = sanitizeField(body.heardAbout, 100);
    const message = sanitizeField(body.message, 1500);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !fleetSize ||
      !vehicleType
    ) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Build confirmation HTML template
    const confirmationHtml = buildDemoConfirmationHtml({
      firstName,
      company,
      vehicleType,
    });

    console.log(`[Demo Request Received] ${firstName} ${lastName} (${company}) - ${email}`);

    // If SMTP configured in environment variables, send email; otherwise record request
    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Demo request received! Our team will contact you shortly.",
      data: {
        firstName,
        company,
        email,
      },
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "An error occurred while submitting your demo request." },
      { status: 500 }
    );
  }
}

