import { NextResponse } from "next/server";

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ error: "API key or Place ID missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    const data = await response.json();

    // Optional: Only send the first 5 reviews
    const reviews = data.result.reviews?.slice(0, 5) || [];

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
