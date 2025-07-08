import React, { useState, useEffect } from "react";
import { fetchPosts, fetchAuthors, formatWordPressDate, WordPressPost, WordPressAuthor } from "../../lib/api/wordpress";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { VideoCarousel } from "../Desktop/sections/VideoCarousel";
import { Link } from "react-router-dom";

// Always use fallback data for now until WordPress API is configured
const USE_FALLBACK_DATA = false;

const BlogListing = (): JSX.Element => {
  // State for different sections
  const [featuredPosts, setFeaturedPosts] = useState<WordPressPost[]>([]);
  const [morePosts, setMorePosts] = useState<WordPressPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<WordPressPost[]>([]);
  const [authors, setAuthors] = useState<WordPressAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  // Placeholder for video carousel
  const videos = [
    {
      id: 1,
      title: "Scaling Fast with T-Shape Growth",
      thumbnail: "/T-Shape-Growth.jpg",
    },
    {
      id: 2,
      title: "WANT QUICK SEO WINS?",
      thumbnail: "/seo-wins.jpg",
    },
    {
      id: 3,
      title: "Scaling Fast with T-Shape Growth",
      thumbnail: "/T-Shape-Growth.jpg",
    },
    {
      id: 4,
      title: "WANT QUICK SEO WINS?",
      thumbnail: "/seo-wins.jpg",
    },
  ];

  // Fetch data on component mount
 // In BlogListing.tsx - update the useEffect

useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      console.log("Attempting to fetch WordPress data...");
      
      // Fetch featured posts (posts marked as sticky)
      console.log("Fetching featured posts...");
      const featured = await fetchPosts({ featured: true, limit: 4 });
      console.log(`Received ${featured.length} featured posts`);
      setFeaturedPosts(featured);
      
      // Fetch more posts - all available posts
      console.log("Fetching more posts...");
      const more = await fetchPosts({ limit: 6, offset: 0 });
      console.log(`Received ${more.length} more posts`);
      setMorePosts(more);
      
      // Fetch recent posts - explicitly order by date desc to get newest posts first
      console.log("Fetching recent posts...");
      // Add order parameter to ensure newest posts first
      const recent = await fetchPosts({ 
        limit: 3, 
        offset: 0,
        // We could also add specific ordering parameters if needed
      });
      console.log(`Received ${recent.length} recent posts`);
      
      // Sort posts by date to ensure newest first if needed
      const sortedRecent = [...recent].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setRecentPosts(sortedRecent);
      
      // Fetch authors - may use fallback due to CORS
      console.log("Fetching authors...");
      const authorData = await fetchAuthors();
      console.log(`Received ${authorData.length} authors`);
      setAuthors(authorData);
    } catch (error) {
      console.error("Error loading blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);

  // Placeholder data for development
  const placeholderAuthors = [
    { id: 1, name: "Saurav Mishra", acf: { role: "Founder and Partner" } },
    { id: 2, name: "Saurav Mishra", acf: { role: "Founder and Partner" } },
    { id: 3, name: "Saurav Mishra", acf: { role: "Founder and Partner" } },
    { id: 4, name: "Saurav Mishra", acf: { role: "Founder and Partner" } },
  ];

  const placeholderPosts = [
    {
      id: 1,
      title: { rendered: "Private: Stop Wishing Start Doing" },
      date: "2023-12-15T10:00:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-13.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "stop-wishing-start-doing"
    },
    {
      id: 2,
      title: { rendered: "15 reasons why relying 100% on manual agents can turn out to be disastrous" },
      date: "2023-12-10T14:30:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-14.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "15-reasons-why-relying-100-percent-remote-work"
    },
    {
      id: 3,
      title: { rendered: "A case for B-Players" },
      date: "2023-12-05T09:15:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-4.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "a-case-for-b-players"
    },
    {
      id: 4,
      title: { rendered: "Corporate politics vs the perception of it" },
      date: "2023-11-30T11:45:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-10.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "corporate-politics-vs-perception"
    },
    {
      id: 5,
      title: { rendered: "Notes On Human Interaction 101" },
      date: "2023-11-25T13:20:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-7.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "notes-on-human-interaction-101"
    },
    {
      id: 6,
      title: { rendered: "Private: Becoming a Dragonfly" },
      date: "2023-11-20T16:10:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-8.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "becoming-a-dragonfly"
    }
  ];

  const placeholderRecentPosts = [
    {
      id: 7,
      title: { rendered: "Lorem ipsum dolor sit amet: Lorem ipsum dolor sit amet, consectetur" },
      date: "2023-11-15T10:30:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/photo-2024-09-04-23-12-19-1-1024x682.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "lorem-ipsum-dolor-sit-amet-1"
    },
    {
      id: 8,
      title: { rendered: "Lorem ipsum dolor sit amet: Lorem ipsum dolor sit amet, consectetur" },
      date: "2023-11-10T09:45:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-9.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "lorem-ipsum-dolor-sit-amet-2"
    },
    {
      id: 9,
      title: { rendered: "Lorem ipsum dolor sit amet: Lorem ipsum dolor sit amet, consectetur" },
      date: "2023-11-05T14:20:00",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-9.png" }],
        author: [{ name: "Saurav Mishra" }]
      },
      slug: "lorem-ipsum-dolor-sit-amet-3"
    }
  ];

  const displayedFeatured = featuredPosts.length > 0 ? featuredPosts : placeholderPosts.slice(0, 4);
  const displayedMoreArticles = morePosts.length > 0 ? morePosts : placeholderPosts;
  const displayedRecentArticles = recentPosts.length > 0 ? recentPosts : placeholderRecentPosts;
  const displayedAuthors = authors.length > 0 ? authors : placeholderAuthors;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    // Reset form
    setEmail("");
  };

  // Shimmer Loading UI Components
  const FeaturedArticlesShimmer = () => (
    <section className="px-4 py-8 md:py-10 md:px-16">
      <div className="w-48 h-10 bg-gray-200 animate-pulse rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-gray-200 animate-pulse aspect-square rounded-lg"></div>
        ))}
      </div>
    </section>
  );

  const MoreArticlesShimmer = () => (
    <section className="px-4 py-8 md:py-10 md:px-16">
      <div className="w-48 h-10 bg-gray-200 animate-pulse rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="flex md:flex-row flex-col items-start gap-4">
            <div className="md:w-1/3 w-full aspect-[4/3] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="md:w-2/3 space-y-2">
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const RecentArticlesShimmer = () => (
    <section className="px-4 py-8 md:py-10 md:px-16 bg-[#F1D1D1]">
      <div className="w-48 h-10 bg-gray-200 animate-pulse rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First large article shimmer */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-72 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="md:p-6 py-3 space-y-4">
            <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        
        {/* Other articles shimmer */}
        {[1, 2].map((index) => (
          <div key={index} className="bg-white p-4 rounded-lg space-y-2">
            <div className="w-full h-6 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );

  const AuthorsShimmer = () => (
    <section className="px-4 py-8 md:py-10 md:px-16">
      <div className="w-48 h-10 bg-gray-200 animate-pulse rounded mb-6"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <div className="w-full aspect-square bg-gray-200 animate-pulse"></div>
            <div className="p-4 bg-gray-100">
              <div className="w-full h-5 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="w-full font-['Roboto',Helvetica] pt-32">
      {loading ? (
        <>
          <FeaturedArticlesShimmer />
          <MoreArticlesShimmer />
          <RecentArticlesShimmer />
          <AuthorsShimmer />
        </>
      ) : (
        <>
      {/* Featured Articles Section */}
      <section className="px-4 py-8 md:py-10 md:px-16">
        <h2 className="text-4xl font-bold mb-6 font-['Playfair',Helvetica]">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {displayedFeatured.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="bg-gray-200 aspect-square relative overflow-hidden rounded-lg cursor-pointer" 
            >
              <img 
                src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/mask-group.png"} 
                alt={post.title.rendered}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{post.title.rendered}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* More Articles Section */}
      <section className="px-4 py-8 md:py-10 md:px-16">
        <h2 className="text-4xl font-bold mb-6 font-['Playfair',Helvetica]">More Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {displayedMoreArticles.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="flex md:flex-row flex-col items-start gap-4 group">
              <div className="md:w-1/3 w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/mask-group.png"} 
                  alt={post.title.rendered}
                  className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                />
              </div>
              <div className="md:w-2/3 flex flex-col justify-between md:h-full ">
                <h3 className="font-bold text-2xl mb-2 group-hover:text-[#be4948] transition-colors">
                  {post.title.rendered}
                </h3>
                <div className="text-gray-600 text-xs ">
                  <span>{formatWordPressDate(post.date)}</span>
                  <span className="block">Author: {post._embedded?.author?.[0]?.name || "Unknown"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="px-4 py-8 md:py-10 md:px-16 bg-[#F1D1D1]">
        <h2 className="text-4xl font-bold mb-6 font-['Playfair',Helvetica]">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First recent article (larger) */}
          {displayedRecentArticles.length > 0 && (
            <Link to={`/blog/${displayedRecentArticles[0].slug}`} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden group">
              <div className="w-full h-72 overflow-hidden">
                <img 
                  src={displayedRecentArticles[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/mask-group.png"} 
                  alt={displayedRecentArticles[0].title.rendered}
                  className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                />
              </div>
              <div className="Md:p-6 py-3">
                <h3 className="font-bold text-lg mb-4 group-hover:text-[#be4948] transition-colors">
                  {displayedRecentArticles[0].title.rendered}
                </h3>
                <div className="text-gray-600 text-sm mb-4">
                  <span>{formatWordPressDate(displayedRecentArticles[0].date)}</span>
                  <span className="block">Author: {displayedRecentArticles[0]._embedded?.author?.[0]?.name || "Unknown"}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Other recent articles */}
            {displayedRecentArticles.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="bg-white p-4 rounded-lg group hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2 group-hover:text-[#be4948] transition-colors">
                  {post.title.rendered}
                </h3>
                <div className="text-gray-600 text-sm">
                  <span>{formatWordPressDate(post.date)}</span>
                  <span className="block">Author: {post._embedded?.author?.[0]?.name || "Unknown"}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Authors Section */}
      <section className="px-4 py-8 md:py-10 md:px-16">
        <h2 className="text-4xl font-bold mb-6 font-['Playfair',Helvetica]">Authors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedAuthors.map((author) => (
            <div key={author.id} className="bg-[#be4948] text-white overflow-hidden rounded-lg">
              <img 
                src="/author.png" 
                alt={author.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{author.name}</h3>
                <p>{author.acf?.role || "Team Member"}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="px-4 py-8 md:py-10 md:px-16 ">
        <div className="[background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] md:p-10 p-4 rounded-lg">
        <div className="max-w-3xl ">
          <h2 className="text-4xl font-bold mb-2 font-['Playfair',Helvetica]">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">Receive organized health and wellness information delivered to your inbox.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full h-12 px-4 rounded-md bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit"
              className="bg-black text-white rounded-md px-6 h-12"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-3">
            By clicking Subscribe, I agree to the Website Terms & Conditions and Privacy Policy and understand that I may opt out of Website subscriptions at any time.
          </p>
        </div>
        </div>
      </section>

      {/* AI in Action Section */}
      <VideoCarousel />
        </>
      )}
    </div>
  );
};

export default BlogListing; 