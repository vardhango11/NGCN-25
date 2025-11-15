import { useState, useEffect } from 'react';

const useMediumFeed = (feedUrl) => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
        const response = await fetch(corsProxyUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const xmlText = data.contents;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) throw new Error('Failed to parse XML');
        const items = xmlDoc.getElementsByTagName('item');
        const transformedItems = [];
        for (let i = 0; i < Math.min(items.length, 15); i++) {
          const item = items[i];
          const title = item.getElementsByTagName('title')[0]?.textContent || 'Untitled';
          const description = item.getElementsByTagName('description')[0]?.textContent || 'No description available';
          const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
          const link = item.getElementsByTagName('link')[0]?.textContent || '#';
          let imageUrl = null;
          // Try to extract image from content:encoded or description
          const contentEncoded = item.getElementsByTagName('content:encoded')[0]?.textContent || '';
          const imgMatch = (contentEncoded || description).match(/<img[^>]+src="([^"]+)"/);
          if (imgMatch) imageUrl = imgMatch[1];
          const dateObj = pubDate ? new Date(pubDate) : new Date();
          const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          let cleanDescription = description.replace(/<[^>]*>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').trim();
          if (cleanDescription.length > 200) cleanDescription = cleanDescription.substring(0, 200) + '...';
          transformedItems.push({
            id: i + 1,
            date: formattedDate,
            title: title.substring(0, 120),
            description: cleanDescription,
            tag: 'Article',
            link,
            image: imageUrl,
            content: contentEncoded || description
          });
        }
        setFeeds(transformedItems);
        setError(null);
      } catch (err) {
        setError('Unable to load articles');
        setFeeds([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFeed();
  }, [feedUrl]);
  return { feeds, loading, error };
};

export default useMediumFeed;
