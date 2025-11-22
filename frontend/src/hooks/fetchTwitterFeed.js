import fetch from "node-fetch";
import { DOMParser } from "xmldom";
import fs from "fs";

const RSS_FEED_URL = "https://rss.app/feeds/9tosQeY2S4RLKWcj.xml";

// Dummy placeholder image
const DUMMY_IMAGE_URL = "https://via.placeholder.com/600x400?text=No+Image";

async function fetchTwitterFeed() {
  try {
    console.log("🚀 Starting Twitter RSS fetch...");

    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_FEED_URL)}`;
    console.log("🌐 Fetching feed from:", corsProxyUrl);

    const response = await fetch(corsProxyUrl);
    console.log("📡 Response status:", response.status);

    const data = await response.json();
    const xmlText = data.contents;
    console.log("📦 XML fetched. Parsing...");

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      throw new Error("❌ XML Parsing error");
    }

    const items = xmlDoc.getElementsByTagName("item");
    console.log(`📰 Total ${items.length} tweets found. Processing all...`);

    const transformedItems = [];

    for (let i = 0; i < items.length; i++) {
      console.log(`⚙️ Processing tweet ${i + 1}/${items.length}`);

      const item = items[i];
      const title = item.getElementsByTagName("title")[0]?.textContent || "Untitled";
      const description = item.getElementsByTagName("description")[0]?.textContent || "";
      const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
      const link = item.getElementsByTagName("link")[0]?.textContent || "#";

      // Try to get image
      let imageUrl = null;
      const mediaContent = item.getElementsByTagName("media:content");
      if (mediaContent?.length > 0) {
        imageUrl = mediaContent[0]?.getAttribute("url");
      }

      // If still not found → match from description
      if (!imageUrl && description.includes("img")) {
        const imgMatch = description.match(/src="([^"]*)"/);
        if (imgMatch) imageUrl = imgMatch[1];
      }

      // If no image at all → set dummy
      if (!imageUrl) {
        console.log(`🖼️ No image found for tweet ${i + 1}, using dummy`);
        imageUrl = DUMMY_IMAGE_URL;
      }

      const dateObj = pubDate ? new Date(pubDate) : new Date();
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      let cleanDescription = description
        .replace(/<[^>]*>/g, "")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .trim();

      if (cleanDescription.length > 200) {
        cleanDescription = cleanDescription.substring(0, 200) + "...";
      }

      transformedItems.push({
        id: i + 1,
        date: formattedDate,
        title: title.substring(0, 120),
        description: cleanDescription,
        tag: "News",
        link,
        image: imageUrl,
      });
    }

    fs.writeFileSync("./twitterFeed.json", JSON.stringify(transformedItems, null, 2));
    console.log(`💾 Saved ${transformedItems.length} tweets → twitterFeed.json`);
    console.log("🎉 Completed Successfully!");

  } catch (err) {
    console.error("❌ Twitter RSS fetch failed:", err.message);
  }
}

fetchTwitterFeed();
