import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPosts, fetchPostBySlug, formatWordPressDate, WordPressPost } from "../../lib/api/wordpress";
import { Button } from "../../components/ui/button";

const BlogDetails = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!slug) {
        setError("No post slug provided");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        // Fetch the current post
        const postData = await fetchPostBySlug(slug);
        
        if (postData) {
          setPost(postData);
          setError(null);
          
          // Fetch related posts (excluding current post)
          const relatedPostsData = await fetchPosts({ limit: 3 });
          // Filter out the current post if it's in the related posts
          const filteredRelatedPosts = relatedPostsData.filter(
            relatedPost => relatedPost.id !== postData.id
          );
          setRelatedPosts(filteredRelatedPosts);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Failed to load post");
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  // Placeholder post data for preview
  const placeholderPost: WordPressPost = {
    id: 1,
    date: "2023-12-20T12:00:00",
    title: {
      rendered: "Listen to your customers, but not before your soul.",
    },
    excerpt: {
      rendered: "<p>Your customers are important, but your vision comes first. Balance external feedback with internal compass.</p>"
    },
    content: {
      rendered: `
        <div class="product-management-section">
          <h2>Product Management</h2>
          <p>Why startups fail: not for lack of implementing all customer feedback and not opting for future features.</p>
          <p>Customer is the most important visitor on our premises. He is not dependent on us. We are dependent on him. He is not an interruption to our work. He is the purpose of it. He is not an outsider to our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so.</p>
          <p>But I can't emphasize more on this saying in my teams. I talk believe in being organized; about it. The most common fallback has evolved to two categories with B + food for startups and customers:</p>
        </div>

        <div class="side-effects-section">
          <h2>Side effects of Agility:</h2>
          <p>As you challenge doing agility? Thanks to some real Fastlip mechanics out there who have proper implementation of Kanban. True agility means adding new features or actually de-opting in being closer to the user app. But also adding new features or actually de-opting in the product. Basically, if a development team is staying for too long to develop a feature, it means the team is not very agile. So people continuously hire insensitive design of products to test and the team can plan forget what they start. But their soul only says to do modify/improve it because they live with a true feeling of not delivering to the actual user. The actual damage to products can occur when a startup does pivoting to survive.</p>
        </div>

        <div class="pivot-section">
          <h2>"Pivot" comes to rescue:</h2>
          <p>Pivoting is the new normal and it's an answer to every half-baked marketing and adaptive strategy.</p>
          <p>A pivot is quite easy, simple, and very easy where "the user is not the focus of interest" is the solution. What affords previous very bitter, more and they may not be carried out well by sales or marketing people. You create a pivot, a goal is LATE of work for your product (development team) and even up being a good solution for sales, marketing, and services? Management teams better learn how they train the product folks and their key customers to maneuver.</p>
        </div>

        <div class="new-customer-section">
          <h2>Every addition is a complication for New Customer:</h2>
          <p>Startups come, a new governance/project management software (i.e. a long testament) of this. A quote about "Make each feature work hard to be implemented. Make each feature prove itself and show that it's a good investment. Take Yegge's like "If it's better than dog **** **** should only consider features if they're willing to stand on the picnic table in the lunchroom and sing 'I Need To Be Your Only'. Seriously, that's why Steve calls us — it means a No. The initial expansion is "we now" of course for it — a feature keeps coming back. Every feature requires that comes to us — or from us — is a No."</p>
          <p>PS - Regarding, Getting Real</p>
          <p>I say silence is the very customer and product teams talk to, but also we try to live by every step while the new feature may help, better use objects/other main container for new customers as an additional compromise by using new containers who gets noticed. Show the chances of "losing them customers during trying".</p>
        </div>

        <div class="madness-section">
          <h2>Method to the madness:</h2>
          <p>These are simpler ways to deal with this all means.</p>
          <p>Coach customers, explain them the product. But get features like the philosophy. Whether it's utility or a strategic product. What to expect and what not to expect and how to get the best out of it.</p>
          <p>• Prioritize messaging. Simplify your pitch, make sure you are explaining your top propositions better and clearer.</p>
          <p>• Educate your sales and account managers.</p>
          <p>• Show a service using the additional implementation. Charge additional for customization and only if necessary. Avoid making changes that would impact on the long run. Use the power of composing code-like as a create separate branches for new requirements and customizations.</p>
          <p>• Progress in changes.</p>
          <p>• Be persistent in starting without changing the intent + Use blue.</p>
          <p>Before taking suggestion product and business decisions a.k.a Pivoting, please consider evaluating your core proposition first, before adding features to solve new problems. Try, now use the same logic for your pivot problem.</p>
          <p>Do not create more problems than you solved for real.</p>
        </div>

        <div class="takeaway-section">
          <h2>The take away:</h2>
          <p>Sales, product, and marketing team has to work hand in hand to provide a team a very comprehensive think of how to get to us, deconstruct of what the client needs the most, what's the most clear. Behind the startup and what can potentially go the extra is mile. Balance to be world class!</p>
        </div>
      `,
    },
    featured_media: 1,
    slug: "listen-to-customers",
    categories: [1],
    _embedded: {
      "wp:featuredmedia": [{ source_url: "/mask-group-8.png" }],
      author: [{ 
        id: 1, 
        name: "Saurav Dc Prasai Mishra",
        avatar_urls: {
          "96": "/author.png"
        }
      }]
    }
  };

  // Placeholder related posts
  const placeholderRelatedPosts: WordPressPost[] = [
    {
      id: 2,
      title: { rendered: "Private: Stop Wishing Start Doing" },
      date: "2023-12-15T10:00:00",
      excerpt: { rendered: "<p>Some excerpt text here</p>" },
      content: { rendered: "<p>Full content here</p>" },
      featured_media: 2,
      slug: "stop-wishing-start-doing",
      categories: [1],
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-13.png" }],
        author: [{ 
          id: 1, 
          name: "Saurav Mishra",
          avatar_urls: {
            "96": "/author.png"
          }
        }]
      }
    },
    {
      id: 3,
      title: { rendered: "15 reasons why relying 100% on remote work can turn out to be disastrous" },
      date: "2023-12-10T14:30:00",
      excerpt: { rendered: "<p>Some excerpt text here</p>" },
      content: { rendered: "<p>Full content here</p>" },
      featured_media: 3,
      slug: "15-reasons-why-relying-100-percent-remote-work",
      categories: [2],
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-14.png" }],
        author: [{ 
          id: 1, 
          name: "Saurav Mishra",
          avatar_urls: {
            "96": "/author.png"
          }
        }]
      }
    },
    {
      id: 4,
      title: { rendered: "A case for B-Players" },
      date: "2023-12-05T09:15:00",
      excerpt: { rendered: "<p>Some excerpt text here</p>" },
      content: { rendered: "<p>Full content here</p>" },
      featured_media: 4,
      slug: "a-case-for-b-players",
      categories: [3],
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/mask-group-4.png" }],
        author: [{ 
          id: 1, 
          name: "Saurav Mishra",
          avatar_urls: {
            "96": "/author.png"
          }
        }]
      }
    }
  ];

  // Use real post data if available, otherwise use placeholder
  const displayedPost = post || placeholderPost;
  // Use real related posts if available, otherwise use placeholder
  const displayedRelatedPosts = relatedPosts.length > 0 ? relatedPosts : placeholderRelatedPosts;

  // Tags for the post
  const tags = ["Product Management", "Career", "Team & Culture"];

  if (loading) {
    return <div className="w-full pt-24 flex justify-center items-center min-h-[60vh]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="w-full pt-24 flex flex-col justify-center items-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Error: {error}</h2>
        <Button asChild>
          <Link to="/blog">Return to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full font-['Roboto',Helvetica] pt-24">
      {/* Product Management Badge */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
          Product Management
        </div>
      </div>

      {/* Blog Title */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-3xl md:text-4xl font-bold font-['Playfair',Helvetica] mb-4">
          {displayedPost.title.rendered}
        </h1>
      </div>

      {/* Author Info */}
      <div className="max-w-4xl mx-auto px-4 pb-6 flex items-center">
        <img 
          src={displayedPost._embedded?.author?.[0]?.avatar_urls?.["96"] || "/author.png"}
          alt={displayedPost._embedded?.author?.[0]?.name || "Author"}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-medium">
            {displayedPost._embedded?.author?.[0]?.name || "Author"}
            <span className="font-normal text-gray-600 text-sm ml-1">Founder and Partner, NutsOverTech</span>
          </p>
          <p className="text-sm text-gray-500">
            <span>5 min read</span>
            <span className="mx-2">•</span>
            <span>{formatWordPressDate(displayedPost.date)}</span>
          </p>
        </div>
      </div>

      {/* Social Sharing Icons */}
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 border-t border-b border-gray-200">
        <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Like">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Comment">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>

        <div className="ml-auto flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Save">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="px-4 py-1 rounded-full border border-gray-200 text-gray-600 text-xs font-medium cursor-pointer hover:bg-gray-100">
            {tag}
          </div>
        ))}
        <div className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Key Takeaways Section */}
      <div className="max-w-4xl mx-auto my-8 px-4">
        <div className="bg-[#fde2e2] p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="mb-3">Why startups fail: not for lack of implementing all customer feedback and not opting for future features.</p>
          
          <p className="mb-3">Customer is the most important visitor on our premises. He is not dependent on us. We are dependent on him. He is not an interruption to our work. He is the purpose of it. He is not an outsider to our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so.</p>
          
          <p>But I can't emphasize more on this saying in my teams. I talk believe in being organized; about it. The most common fallback has evolved to two categories with B + food for startups and customers.</p>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className="max-w-4xl mx-auto my-8 px-4">
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/T-Shape-Growth.jpg" 
            alt="Video thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white font-semibold">Best Lessons are from Scaling Fast with T-Shape Growth</p>
          </div>
        </div>
      </div> */}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: displayedPost.content.rendered }} />
        </div>
      </div>

     {/* More Articles Section */}
     <section className="px-4 py-8 md:py-10 md:px-16">
        <h2 className="text-4xl font-bold mb-6 font-['Playfair',Helvetica]">More Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {displayedRelatedPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`} 
              className="flex md:flex-row flex-col items-start gap-4 group"
              onClick={() => {
                if (post.slug === slug) {
                  // If clicking on the current post, prevent navigation and scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
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

   
    </div>
  );
};

export default BlogDetails; 