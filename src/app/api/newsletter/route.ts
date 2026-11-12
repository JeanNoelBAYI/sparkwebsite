// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import { subscribeToMailchimp } from "@src/lib/mailchimp";
import type { ApiResponse } from "@src/types/generic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const result = await subscribeToMailchimp({
      email,
      tags: ["Trekk Website Newsletter"],
    });

    return NextResponse.json<ApiResponse>({
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Subscription failed. Please try again later." },
      { status: 500 }
    );
  }
}

