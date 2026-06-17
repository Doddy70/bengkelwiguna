import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Missing Google API credentials in .env.local' },
      { status: 500 }
    );
  }

  try {
    // Fetch data from Google Places Details API
    // We only request specific fields (reviews, rating, user_ratings_total) to save costs
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=id&key=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache response for 1 hour to optimize quota and speed
    });

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API Error:', data.status, data.error_message);
      return NextResponse.json(
        { error: data.error_message || data.status },
        { status: 400 }
      );
    }

    return NextResponse.json(data.result);
  } catch (error) {
    console.error('Failed to fetch Google Reviews:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while fetching reviews' },
      { status: 500 }
    );
  }
}
