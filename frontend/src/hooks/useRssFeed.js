import { useState, useEffect } from 'react';

const useRssFeed = (feedUrl) => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        
        // Use AllOrigins CORS proxy to bypass CORS restrictions
        const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
        
        const response = await fetch(corsProxyUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const xmlText = data.contents;
        
        // Parse XML manually using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // Check for parsing errors
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
          throw new Error('Failed to parse XML');
        }
        
        // Extract items from RSS feed
        const items = xmlDoc.getElementsByTagName('item');
        const transformedItems = [];
        
        for (let i = 0; i < Math.min(items.length, 20); i++) {
          const item = items[i];
          const title = item.getElementsByTagName('title')[0]?.textContent || 'Untitled';
          const description = item.getElementsByTagName('description')[0]?.textContent || 'No description available';
          const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
          const link = item.getElementsByTagName('link')[0]?.textContent || '#';
          
          // Extract image from media:content
          let imageUrl = null;
          const mediaContent = item.getElementsByTagName('media:content');
          if (mediaContent && mediaContent.length > 0) {
            imageUrl = mediaContent[0]?.getAttribute('url');
          }
          
          // If no media:content, try to extract from description HTML
          if (!imageUrl && description.includes('img')) {
            const imgMatch = description.match(/src="([^"]*)"/);
            if (imgMatch) {
              imageUrl = imgMatch[1];
            }
          }
          
          // Parse date
          const dateObj = pubDate ? new Date(pubDate) : new Date();
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
          
          // Strip HTML tags from description for cleaner display
          let cleanDescription = description
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&nbsp;/g, ' ')
            .trim();
          
          // Limit description length
          if (cleanDescription.length > 200) {
            cleanDescription = cleanDescription.substring(0, 200) + '...';
          }
          
          transformedItems.push({
            id: i + 1,
            date: formattedDate,
            title: title.substring(0, 120),
            description: cleanDescription,
            tag: 'News',
            link: link,
            image: imageUrl, // Include image URL
          });
        }
        
        setFeeds(transformedItems);
        setError(null);
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError('Unable to load news feed');
        setFeeds([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  return { feeds, loading, error };
};

export default useRssFeed;
