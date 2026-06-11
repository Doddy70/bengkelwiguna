import { NextResponse } from "next/server";

// Fallback high-quality static playlist for Bengkel Wiguna
const fallbackPlaylist = [
	{
		id: "static-1",
		title: "Penyebab & Solusi Kaki-Kaki Mobil Bunyi Gruduk | Bengkel Wiguna",
		duration: "12:45",
		youtubeId: "kYJv8Pj328Q",
		thumbnail: "/images/service/service-3.webp",
		category: "Kaki-Kaki Mobil"
	},
	{
		id: "static-2",
		title: "Mengapa AC Mobil Tiba-Tiba Tidak Dingin? Ini Penjelasannya!",
		duration: "10:15",
		youtubeId: "dQw4w9WgXcQ",
		thumbnail: "/images/service/service-4.webp",
		category: "AC Mobil"
	},
	{
		id: "static-3",
		title: "Pentingnya Ganti Oli & Engine Flushing untuk Rawat Mesin",
		duration: "08:30",
		youtubeId: "8yL02_G09-s",
		thumbnail: "/images/service/service-2.webp",
		category: "Mesin & Ganti Oli"
	},
	{
		id: "static-4",
		title: "Proses Spooring & Balancing Roda Mobil Presisi Tinggi 3D",
		duration: "06:50",
		youtubeId: "mIPd8U3Lh4k",
		thumbnail: "/images/service/service-7.webp",
		category: "Spooring & Balancing"
	}
];

export async function GET() {
	const apiKey = process.env.YOUTUBE_API_KEY;
	const channelId = process.env.YOUTUBE_CHANNEL_ID || "UC8aLawn1bvqzg7CHfWr6w0Q";

	// If no API key is provided, return the fallback playlist immediately
	if (!apiKey) {
		return NextResponse.json({ 
			success: true, 
			source: "fallback", 
			videos: fallbackPlaylist 
		});
	}

	try {
		// Convert Channel ID (UC...) to Uploads Playlist ID (UU...)
		const uploadsPlaylistId = channelId.replace(/^UC/, "UU");
		
		const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`;
		
		const response = await fetch(apiUrl, {
			next: { revalidate: 3600 } // Cache for 1 hour
		});

		if (!response.ok) {
			console.warn(`YouTube API returned error: ${response.status}`);
			return NextResponse.json({ 
				success: true, 
				source: "fallback-api-error", 
				videos: fallbackPlaylist 
			});
		}

		const data = await response.json();
		
		if (!data.items || data.items.length === 0) {
			return NextResponse.json({ 
				success: true, 
				source: "fallback-no-items", 
				videos: fallbackPlaylist 
			});
		}

		const fetchedVideos = data.items.map((item, index) => {
			const snippet = item.snippet;
			const videoId = snippet.resourceId?.videoId;
			const thumbnail = snippet.thumbnails?.maxres?.url || 
							  snippet.thumbnails?.high?.url || 
							  snippet.thumbnails?.medium?.url || 
							  "/images/service/service-3.webp";

			// Categorize based on keywords in title
			let category = "Edukasi & Tips";
			const titleLower = snippet.title.toLowerCase();
			if (titleLower.includes("kaki") || titleLower.includes("gruduk") || titleLower.includes("spooring") || titleLower.includes("balancing")) {
				category = "Kaki-Kaki Mobil";
			} else if (titleLower.includes("ac") || titleLower.includes("dingin") || titleLower.includes("freon")) {
				category = "AC Mobil";
			} else if (titleLower.includes("oli") || titleLower.includes("flushing") || titleLower.includes("mesin") || titleLower.includes("tune up")) {
				category = "Mesin & Ganti Oli";
			}

			return {
				id: item.id || `fetched-${index}`,
				title: snippet.title,
				duration: "Video",
				youtubeId: videoId,
				thumbnail: thumbnail,
				category: category
			};
		});

		return NextResponse.json({ 
			success: true, 
			source: "youtube-api", 
			videos: fetchedVideos 
		});
	} catch (error) {
		console.error("Failed to fetch from YouTube API:", error);
		return NextResponse.json({ 
			success: true, 
			source: "fallback-exception", 
			videos: fallbackPlaylist 
		});
	}
}
