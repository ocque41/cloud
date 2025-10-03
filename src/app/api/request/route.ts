import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.info("Customization request", payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to parse request", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
