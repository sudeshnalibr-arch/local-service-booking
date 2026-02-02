import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // You can save to DB / send email here
  console.log("Quote request:", body);

  return NextResponse.json(
    { message: "Quote submitted successfully" },
    { status: 200 }
  );
}
