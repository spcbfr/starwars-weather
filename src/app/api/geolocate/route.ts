import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const longitude = req.geo?.longitude;
  const latittude = req.geo?.latitude;
  return NextResponse.json({ longitude, latittude });
}
