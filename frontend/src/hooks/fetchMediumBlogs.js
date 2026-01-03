import fetch from "node-fetch";
import { DOMParser } from "xmldom";
import fs from "fs";

const MEDIUM_FEED_URL = "https://medium.com/feed/@ngcngroup";

async function fetchMediumFeed() {
  try {
    console.log("🚀 Starting Medium feed fetch...");

    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(MEDIUM_FEED_URL)}`;
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
    console.log(`📰 Found total ${items.length} feed items. Processing all of them...`);

    const transformedItems = [];

    for (let i = 0; i < items.length; i++) {
      console.log(`⚙️ Processing item ${i + 1}/${items.length}`);

      const item = items[i];
      const title = item.getElementsByTagName("title")[0]?.textContent || "Untitled";
      const description = item.getElementsByTagName("description")[0]?.textContent || "";
      const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
      const link = item.getElementsByTagName("link")[0]?.textContent || "#";
      const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || "";

      const imgMatch = (contentEncoded || description).match(/<img[^>]+src="([^"]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

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

    fs.writeFileSync("./mediumFeed.json", JSON.stringify(transformedItems, null, 2));
    console.log(`💾 Saved ${transformedItems.length} articles → mediumFeed.json`);
    console.log("🎉 Done! All posts stored!");

  } catch (err) {
    console.error("❌ Failed to fetch:", err.message);
  }
}

fetchMediumFeed();
