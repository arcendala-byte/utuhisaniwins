import { NextResponse } from "next/server";

const subscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    subscribers.add(email);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing. Your email has been saved.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "We could not process your subscription right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: subscribers.size,
    message: "Newsletter storage is configured in-process for this deployment.",
  });
}
