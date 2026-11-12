// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import {
  sanitizeField,
  buildLaunchConfirmationHtml,
} from "@src/utils/mailHelpers";
import type { ApiResponse } from "@src/types/generic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body._honey) {
      return NextResponse.json<ApiResponse>({
        success: true,
        message: "Registration received.",
      });
    }

    const firstName = sanitizeField(body.firstName, 80);
    const lastName = sanitizeField(body.lastName, 80);
    const email = sanitizeField(body.email, 200);
    const organisation = sanitizeField(body.organisation, 160);
    const country = sanitizeField(body.country, 100);
    const joiningAs = sanitizeField(body.joiningAs, 100);
    const interest = sanitizeField(body.interest, 1200);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !organisation ||
      !country ||
      !joiningAs
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

    const confirmationHtml = buildLaunchConfirmationHtml({
      firstName,
      organisation,
    });

    console.log(`[Launch Registration] ${firstName} ${lastName} (${organisation}, ${country})`);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Registration confirmed! You're on the list for the Trekk Mobility Launch.",
      data: {
        firstName,
        organisation,
        country,
      },
    });
  } catch (error) {
    console.error("Error processing launch registration:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "An error occurred while completing registration." },
      { status: 500 }
    );
  }
}

