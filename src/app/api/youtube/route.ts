import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure route runs on every request

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    return NextResponse.json(
      { error: 'YouTube API Key or Channel ID is missing' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=25&type=video`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json({ error: 'Failed to fetch from YouTube API', details: errorData }, { status: res.status });
    }

    const data = await res.json();

    let formattedVideos = data.items.map((item: any, index: number) => {
      // Decode HTML entities from title (e.g. &amp; -> &)
      const decodeTitle = (str: string) => {
        return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
      };

      return {
        id: index + 1,
        title: decodeTitle(item.snippet.title),
        youtubeId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        category: "Video Edukasi"
      };
    });

    // Shuffle the array of videos
    for (let i = formattedVideos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [formattedVideos[i], formattedVideos[j]] = [formattedVideos[j], formattedVideos[i]];
    }

    // Pick 6 random videos
    formattedVideos = formattedVideos.slice(0, 6);

    return NextResponse.json({ videos: formattedVideos });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
