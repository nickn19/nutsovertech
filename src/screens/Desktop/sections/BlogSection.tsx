import { ArrowRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { fetchPosts, WordPressPost, formatWordPressDate } from "../../../lib/api/wordpress";

// Flag to control API usage (set to false to use the API)
const USE_FALLBACK_DATA = false;

// Fallback data for when API is not available
const fallbackInsightCards = [
  {
    id: 1,
    image: "/mask-group-7.png",
    title: "Listen to your customers, but not before your soul.",
    description:
      'Why startups that go too far implementing all customer feedbacks end up signing up for failure "A customer is the most important visitor on our premises.',
    bgColor: "bg-foundation-redred-1",
    slug: "listen-to-customers",
  },
  {
    id: 2,
    image: "/mask-group-8.png",
    title: "A case for B-Players",
    description:
      "Defining the B-player The term B-player comes from the world of sports where terminologies like A-player, B player, B-team, are frequently used.",
    bgColor: "bg-foundation-blackblack-1",
    slug: "a-case-for-b-players",
  },
  {
    id: 3,
    image: "/mask-group-9.png",
    title: "Corporate politics vs the perception of it",
    description:
      "I get that a lot, every day – Stories of failure wrapped in linen of how the world is unfair and unjust for not granting what one deserves ( in their own minds at least ).",
    bgColor: "bg-foundation-blackblack-1",
    slug: "corporate-politics-vs-perception",
  },
];

export const BlogSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      // Skip API call if using fallback data
      if (USE_FALLBACK_DATA) {
        console.log("BlogSection: Using fallback data as configured");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log("BlogSection: Attempting to fetch WordPress posts...");
        
        // Make sure to request _embed to get media and author info
        const fetchedPosts = await fetchPosts({ 
          limit: 3,
          _embed: true
        });
        
        console.log(`BlogSection: Received ${fetchedPosts.length} posts:`, fetchedPosts);
        
        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        } else {
          console.log("BlogSection: No posts found from API");
        }
      } catch (error) {
        console.error("BlogSection: Error loading blog posts:", error);
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Alternate background colors
  const bgColors = ["bg-foundation-redred-1", "bg-foundation-blackblack-1", "bg-foundation-redred-1"];

  // Debug logs to check posts state
  console.log("BlogSection: Current posts state:", posts);

  // Format WordPress posts for display
  const formatPost = (post: WordPressPost, index: number) => ({
    id: post.id,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || `/mask-group-${7 + index}.png`,
    title: post.title.rendered,
    description: post.excerpt?.rendered 
      ? (post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")).substring(0, 120) + "..."
      : "No description available",
    bgColor: bgColors[index % bgColors.length],
    slug: post.slug,
  });

  // Use real data if available, otherwise use fallback
  const displayedPosts = !USE_FALLBACK_DATA && posts.length > 0 
    ? posts.map((post, index) => formatPost(post, index))
    : fallbackInsightCards;

  // Debug log the displayed posts
  console.log("BlogSection: Using displayed posts:", displayedPosts);

  return (
    <div className="flex flex-col items-center justify-center gap-[34px] w-full md:px-20 px-4 md:py-[60px] py-8">
      <div className="flex md:flex-row flex-col gap-4 items-center md:justify-between justify-center w-full">
        <h2 className="[font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 text-4xl md:text-left text-center">
          Insights to Drive Smarter Decisions
        </h2>

        <Button asChild className="px-4 py-3 bg-foundationredred-13 rounded-[70px] text-foundation-blackblack-1 hover:bg-foundationredred-13/90">
          <Link to="/blog">
            <span className="[font-family:'Lato',Helvetica] font-medium text-base">
              Explore More Insights
            </span>
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center gap-[30px] md:flex-row flex-col w-full">
          {/* Shimmer placeholders for blog cards */}
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              className="w-full h-[510px] rounded-[16px] overflow-hidden shadow-none border-none"
            >
              {/* Image shimmer */}
              <div className="relative h-[302px] overflow-hidden bg-gray-200 animate-pulse">
              </div>

              {/* Content shimmer */}
              <div className="bg-gray-100 rounded-b-[16px] p-[21px]">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center justify-between w-full">
                      {/* Title shimmer */}
                      <div className="h-7 bg-gray-200 animate-pulse rounded w-4/5"></div>

                      {/* Arrow button shimmer */}
                      <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-[20px]"></div>
                    </div>

                    {/* Description shimmer lines */}
                    <div className="space-y-2 mt-2">
                      <div className="h-5 bg-gray-200 animate-pulse rounded w-full"></div>
                      <div className="h-5 bg-gray-200 animate-pulse rounded w-full"></div>
                      <div className="h-5 bg-gray-200 animate-pulse rounded w-4/5"></div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-[400px] w-full">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      ) : (
        <div className="flex items-center gap-[30px] md:flex-row flex-col">
          {displayedPosts.map((card) => (
            <Card
              key={card.id}
              className="w-full h-[510px] rounded-[16px] overflow-hidden shadow-none border-none group"
            >
              <div className="relative h-[302px] overflow-hidden cursor-pointer" onClick={() => navigate(`/blog/${card.slug}`)}>
                <img
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  alt={card.title}
                  src={card.image}
                />
              </div>

              <div
                className={`${card.bgColor} rounded-b-[16px] p-[21px]`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to={`/blog/${card.slug}`}
                        className="[font-family:'Lato',Helvetica] font-bold text-foundationredred-13 text-2xl flex-1 line-clamp-2 hover:underline focus:underline"
                        tabIndex={0}
                      >
                        {card.title}
                      </Link>

                      <Link
                        to={`/blog/${card.slug}`}
                        className="w-10 h-10 bg-foundation-redred-4 flex justify-center items-center rounded-[20px] hover:bg-foundation-redred-4/90"
                      >
                        <ArrowRightIcon className="w-6 h-6 text-foundationredred-13" />
                      </Link>
                    </div>

                    <p className="[font-family:'Lato',Helvetica] font-light text-foundationblackblack-11 text-lg line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
