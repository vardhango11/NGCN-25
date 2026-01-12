import fetch from "node-fetch";
import fs from "fs";

const NGCN_NEWS_FEED_URL = "https://medium.com/feed/@ngcnnews";

async function fetchNgcnNewsFeed() {
  try {
    console.log("🚀 Starting NGCN News feed fetch...");

    const rssApiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(NGCN_NEWS_FEED_URL)}`;
    console.log("🌐 Fetching feed from:", rssApiUrl);

    const response = await fetch(rssApiUrl);
    console.log("📡 Response status:", response.status);

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("❌ Invalid RSS2JSON response");
    }

    console.log(`📰 Found ${data.items.length} news items. Processing...`);

    const transformedItems = data.items.map((item, idx) => {
      console.log(`⚙️ Processing news item ${idx + 1}/${data.items.length}`);

      // Extract first image if available
      const imgMatch = item.content && item.content.match(/<img[^>]+src="([^"]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

      let cleanDescription = (item.description || "")
        .replace(/<[^>]*>/g, "")
        .trim();

      if (cleanDescription.length > 200) {
        cleanDescription = cleanDescription.slice(0, 200) + "...";
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: cleanDescription,
        image: imageUrl
      };
    });

    fs.writeFileSync("./ngcnNewsFeed.json", JSON.stringify(transformedItems, null, 2));

    console.log(`💾 Saved ${transformedItems.length} news articles → ngcnNewsFeed.json`);
    console.log("🎉 Successfully fetched and stored NGCN News feed!");

  } catch (err) {
    console.error("❌ Failed to fetch:", err.message);
  }
}

fetchNgcnNewsFeed();
