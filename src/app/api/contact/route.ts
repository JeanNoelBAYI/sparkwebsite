// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sanitizeField } from "@src/utils/mailHelpers";
import type { ApiResponse } from "@src/types/generic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body._honey) {
      return NextResponse.json<ApiResponse>({
        success: true,
        message: "Message received.",
      });
    }

    const name = sanitizeField(body.name, 100);
    const email = sanitizeField(body.email, 200);
    const phone = sanitizeField(body.phone, 50);
    const company = sanitizeField(body.company, 150);
    const message = sanitizeField(body.message, 2000);

    if (!name || !email || !message) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    console.log(`[Contact Inquiry] From: ${name} (${email}) - ${message.slice(0, 50)}...`);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Thank you for reaching out! A Trekk specialist will respond shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Unable to send message at this time." },
      { status: 500 }
    );
  }
}

