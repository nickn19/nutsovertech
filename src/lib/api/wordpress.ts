
const WORDPRESS_API_URL = "https://nutsovertech.com/wp-json/wp/v2";

// Types for WordPress API responses remain the same
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      id: number;
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
  };
  slug: string;
  categories: number[];
  sticky?: boolean; // Add sticky property to match your API response
}

export interface WordPressAuthor {
  id: number;
  name: string;
  avatar_urls: {
    [key: string]: string;
  };
  description: string;
  acf?: {
    role?: string;
  };
}

// Fetch blog posts with different parameters - improved with better error handling
export async function fetchPosts({
  limit = 10,
  categories = [],
  featured = false,
  offset = 0,
  _embed = true,
}: {
  limit?: number;
  categories?: number[];
  featured?: boolean;
  offset?: number;
  _embed?: boolean;
} = {}): Promise<WordPressPost[]> {
  try {
    let url = `${WORDPRESS_API_URL}/posts?per_page=${limit}&offset=${offset}`;
    
    if (_embed) {
      url += "&_embed";
    }
    
    if (categories.length > 0) {
      url += `&categories=${categories.join(",")}`;
    }
    
    // For featured posts, filter by sticky=true
    if (featured) {
      url += "&sticky=true";
    }
    
    console.log("Fetching WordPress posts from:", url);
    
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WordPress API error (${response.status}):`, errorText);
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    
    const posts = await response.json();
    console.log(`Successfully fetched ${posts.length} posts from WordPress API`);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts from WordPress API:", error);
    return [];
  }
}

// Fetch a single post by slug - improved with better error handling
export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const url = `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`;
    console.log("Fetching WordPress post by slug:", url);
    
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WordPress API error (${response.status}):`, errorText);
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Failed to fetch post by slug:", error);
    return null;
  }
}

// Fetch authors - improved with better error handling
export async function fetchAuthors(): Promise<WordPressAuthor[]> {
  try {
    const url = `${WORDPRESS_API_URL}/users?per_page=20`;
    console.log("Fetching WordPress authors:", url);
    
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WordPress API error (${response.status}):`, errorText);
      throw new Error(`Error fetching authors: ${response.statusText}`);
    }
    
    const authors = await response.json();
    console.log(`Successfully fetched ${authors.length} authors from WordPress API`);
    return authors;
  } catch (error) {
    console.error("Failed to fetch authors:", error);
    return [];
  }
}

// Format WordPress date to more readable format
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date);
}

// Extract excerpt from WordPress content
export function extractExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags
  const stripHtml = content.replace(/<[^>]*>/g, '');
  // Truncate to maxLength characters and add ellipsis if needed
  return stripHtml.length > maxLength
    ? `${stripHtml.substring(0, maxLength)}...`
    : stripHtml;
}