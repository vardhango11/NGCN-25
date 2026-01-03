import fetch from "node-fetch";
import { DOMParser } from "xmldom";
import fs from "fs";

const NGCN_NEWS_FEED_URL = "https://medium.com/feed/@ngcnnews";

async function fetchNgcnNewsFeed() {
  try {
    console.log("🚀 Starting NGCN News feed fetch...");

    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(NGCN_NEWS_FEED_URL)}`;
    console.log("🌐 Fetching feed from:", corsProxyUrl);

    const response = await fetch(corsProxyUrl);
    console.log("📡 Response status:", response.status);

    const data = await response.json();
    console.log("📦 XML content fetched. Parsing...");

    const xmlText = data.contents;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      throw new Error("❌ XML Parsing error");
    }

    const items = xmlDoc.getElementsByTagName("item");
    console.log(`📰 Found ${items.length} news items. Processing...`);

    const transformedItems = [];

    for (let i = 0; i < items.length; i++) {
      console.log(`⚙️ Processing news item ${i + 1}/${items.length}`);

      const item = items[i];
      const title = item.getElementsByTagName("title")[0]?.textContent || "Untitled";
      const description = item.getElementsByTagName("description")[0]?.textContent || "";
      const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
      const link = item.getElementsByTagName("link")[0]?.textContent || "#";
      const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || "";

      // Extract first image
      const imgMatch = (contentEncoded || description).match(/<img[^>]+src="([^"]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

      // Clean description
      let cleanDescription = description.replace(/<[^>]*>/g, "").trim();
      if (cleanDescription.length > 200) cleanDescription = cleanDescription.slice(0, 200) + "...";

      transformedItems.push({
        title,
        link,
        pubDate,
        description: cleanDescription,
        image: imageUrl,
      });
    }

    // Save
    fs.writeFileSync("./ngcnNewsFeed.json", JSON.stringify(transformedItems, null, 2));
    console.log(`💾 Saved ${transformedItems.length} news articles → ngcnNewsFeed.json`);
    console.log("🎉 Successfully fetched and stored NGCN News feed!");

  } catch (err) {
    console.error("❌ Failed to fetch:", err.message);
  }
}

fetchNgcnNewsFeed();
