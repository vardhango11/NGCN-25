import fetch from "node-fetch";
import fs from "fs";

const API_KEY = "YOUR_API_KEY_HERE";
const CHANNEL_ID = "YOUR_CHANNEL_ID_HERE";
const MAX_RESULTS = 10;

const YOUTUBE_API_URL =
  `https://www.googleapis.com/youtube/v3/search` +
  `?key=${API_KEY}` +
  `&channelId=${CHANNEL_ID}` +
  `&part=snippet` +
  `&order=date` +
  `&maxResults=${MAX_RESULTS}` +
  `&type=video`;

async function fetchYoutubeFeed() {
  try {
    console.log("🚀 Fetching YouTube videos...");

    const res = await fetch(YOUTUBE_API_URL);
    const data = await res.json();

    if (!data.items) {
      throw new Error("Invalid API response");
    }

    const videos = data.items.map((item, index) => ({
      id: index + 1,
      title: item.snippet.title,
      description: item.snippet.description,
      published: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      tag: "Video"
    }));

    fs.writeFileSync(
      "./youtubeVideos.json",
      JSON.stringify(videos, null, 2)
    );

    console.log(`✅ Saved ${videos.length} videos → youtubeVideos.json`);

  } catch (err) {
    console.error("❌ Failed:", err.message);
  }
}

fetchYoutubeFeed();
