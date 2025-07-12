document.addEventListener("DOMContentLoaded", fetchAndDisplayTweets);

async function fetchAndDisplayTweets() {
  const apiUrl = "https://twitter-scraper-api-6zv1.onrender.com/tweets";
  const container = document.getElementById("socialMediaNewsContainer");

  if (!container) {
    console.warn("❌ Target container not found in DOM.");
    return;
  }

  try {
    container.innerHTML = "<p class='text-sm text-gray-400'>Loading tweets...</p>";

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.tweets || data.tweets.length === 0) {
      container.innerHTML = "<p class='text-sm text-gray-400'>No tweets available.</p>";
      return;
    }

    container.innerHTML = ""; // Clear loading message

    data.tweets.slice(0, 3).forEach((tweet) => {
      const card = document.createElement("div");
      card.className = "flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40";

      const paragraph = document.createElement("p");
      paragraph.className = "text-[#6b7580] text-sm font-normal leading-normal";

      const link = document.createElement("a");
      link.href = "https://x.com/NGCN_Group";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = truncateText(tweet["Summary"], 160);

      paragraph.appendChild(link);

      const wrapper = document.createElement("div");
      wrapper.appendChild(paragraph);

      card.appendChild(wrapper);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("❌ Error fetching tweets:", error);
    container.innerHTML = "<p class='text-sm text-red-500'>Failed to load tweets.</p>";
  }
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
}
