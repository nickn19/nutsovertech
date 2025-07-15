import React from "react";
import { SolutionsCarousel } from "../Desktop/sections/SolutionsCarousel";
import { Button } from "../../components/ui/button";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import UseCaseCarousel from "../../components/ui/UsecaseCarausel";
import { CaseStudies } from "../Desktop/sections/CaseStudies";
import Insights from "../Insights/Insights";
import { BlogSection } from "../Desktop/sections/BlogSection";
import Slider from "react-slick";
import { MediaCarousel } from "../Desktop/sections/MediaCarousel";
import { ContactUs } from "../Desktop/sections/ContactUs";
// Service data for the grid
const services = [
  {
    id: 1,
    title: "AI Strategy Consulting",
    description: "Expert guidance on implementing AI strategies that align with your business goals and drive meaningful transformation.",
    icon: "🎯",
    features: ["Strategic Planning", "ROI Analysis", "Implementation Roadmap"],
    price: "Custom Pricing"
  },
  {
    id: 2,
    title: "Custom AI Development",
    description: "Tailor-made AI applications designed to address your specific business challenges and opportunities.",
    icon: "🚀",
    features: ["Machine Learning Models", "NLP Solutions", "Computer Vision"],
    price: "From $25,000"
  },
  {
    id: 3,
    title: "Data Analytics & Insights",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    icon: "📊",
    features: ["Predictive Analytics", "Data Visualization", "Real-time Dashboards"],
    price: "From $15,000"
  },
  {
    id: 4,
    title: "Process Automation",
    description: "Streamline operations and reduce costs with intelligent automation solutions for your business processes.",
    icon: "⚡",
    features: ["Workflow Automation", "RPA Solutions", "Smart Document Processing"],
    price: "From $10,000"
  },
  {
    id: 5,
    title: "AI Training & Support",
    description: "Comprehensive training programs and ongoing support to ensure successful AI adoption across your organization.",
    icon: "🎓",
    features: ["Team Training", "24/7 Support", "Best Practices"],
    price: "From $5,000"
  },
  {
    id: 6,
    title: "Cloud AI Infrastructure",
    description: "Scalable cloud infrastructure designed specifically for AI workloads with optimal performance and cost efficiency.",
    icon: "☁️",
    features: ["Auto-scaling", "Cost Optimization", "Security & Compliance"],
    price: "From $2,000/month"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "The AI solutions delivered by this team transformed our business operations. We've seen a 40% increase in efficiency.",
    image: "/author.png"
  },
  {
    name: "Michael Chen",
    company: "DataFlow Solutions",
    role: "CEO",
    content: "Outstanding expertise in AI implementation. Their strategic approach helped us save millions in operational costs.",
    image: "/author.png"
  },
  {
    name: "Emily Rodriguez",
    company: "Innovation Labs",
    role: "Head of AI",
    content: "Professional, knowledgeable, and results-driven. The custom AI model exceeded our performance expectations.",
    image: "/author.png"
  }
];

const AIConsulting = (): JSX.Element => {
  const testimonialSliderRef = React.useRef<Slider | null>(null);
  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <button aria-label="Previous testimonial" className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200">
      <ArrowLeft className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
    </button>,
    nextArrow: <button aria-label="Next testimonial" className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200">
      <ArrowRight className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
    </button>
  };

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center pt-36 md:pt-48 pb-20 px-4 md:px-32 bg-gradient-to-br from-[#F1D1D1] via-[#F8EFEF] to-white">
        {/* pt-36/md:pt-48 ensures hero is pushed below nav, adjust as needed */}
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-playfair text-foundationblackblack-13 mb-6">
            AI Consulting Services
          </h1>
          <p className="text-lg md:text-2xl font-light text-foundation-blackblack-10 mb-8">
            Unlock the power of AI to optimize operations, automate workflows, and scale your business.
          </p>
          <a href="#consultation" className="inline-block px-8 py-4 bg-foundationredred-13 text-white rounded-full font-medium hover:bg-foundationredred-11 transition-colors">
            Schedule a Free Consultation →
          </a>
        </div>
      </section>
      {/* Why AI Consulting? */}
      <section className="md:py-20 py-10 px-4 md:px-32 bg-white">
        <div className="w-full max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foundationredred-13 mb-12">
            Why AI Consulting?
          </h2>
          <div className="text-lg md:text-xl text-foundation-blackblack-10 font-light mb-8">
            AI is a game-changer, but effective integration requires expert strategy, training, and tools. Our AI consulting services provide end-to-end support—from 4AY platform deployment to AI tool integration and team training—helping you optimize business processes and unlock new growth potential.
          </div>
        </div>
      </section>
    {/* Our AI Consulting Services */}
    <section className="md:py-20 py-10 px-4 md:px-32 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-playfair text-foundationredred-13 mb-12">
          Our AI Consulting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 4AY Platform Deployment */}
          <div className="bg-foundation-redred-3 rounded-3xl p-8 shadow-md flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">4AY Platform Deployment</h3>
            <ul className="text-foundation-blackblack-10 text-base font-light space-y-3 mb-6">
              <li>• Custom AI applications tailored to your needs</li>
              <li>• Multi-agent orchestration for cross-functional workflows</li>
              <li>• Seamless integration with existing systems</li>
              <li>• Scalable for future growth and evolving business needs</li>
            </ul>
            <a href="#" className="mt-auto inline-block px-6 py-3 bg-foundationredred-13 text-white rounded-full font-medium hover:bg-foundationredred-11 transition-colors">
              Deploy AI Now →
            </a>
          </div>
          {/* AI Training & Courses for Teams */}
          <div className="bg-foundation-redred-3 rounded-3xl p-8 shadow-md flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">AI Training & Courses for Teams</h3>
            <ul className="text-foundation-blackblack-10 text-base font-light space-y-3 mb-6">
              <li>• Tailored training for different business functions</li>
              <li>• Introductory and advanced courses on AI tools and strategies</li>
              <li>• Practical workshops focused on real-world applications of AI</li>
            </ul>
            <a href="#" className="mt-auto inline-block px-6 py-3 bg-foundationredred-13 text-white rounded-full font-medium hover:bg-foundationredred-11 transition-colors">
              Book AI Training →
            </a>
          </div>
          {/* Deployment of Third-Party AI Tools */}
          <div className="bg-foundation-redred-3 rounded-3xl p-8 shadow-md flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">Deployment of Third-Party AI Tools</h3>
            <ul className="text-foundation-blackblack-10 text-base font-light space-y-3 mb-6">
              <li>• Tool selection based on business needs</li>
              <li>• Integration into your current workflows</li>
              <li>• Optimization for high ROI and performance</li>
            </ul>
            <a href="#" className="mt-auto inline-block px-6 py-3 bg-foundationredred-13 text-white rounded-full font-medium hover:bg-foundationredred-11 transition-colors">
              Explore AI Tools →
            </a>
          </div>
        </div>
      </div>
    </section>
     
    {/* Purpose-Built Tech Section */}
    <section className="md:py-20 py-8 px-4 md:px-32" style={{background: "linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)"}}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Description */}
          <div className="space-y-6 md:max-w-md w-full flex flex-col items-center md:items-start justify-center">
            <h2 className="text-3xl md:text-4xl md:text-left text-center font-bold font-playfair text-foundationblackblack-13">
              Purpose-Built Tech,<br />
              Tailored to Your Stack
            </h2>
            <p className="text-2xl md:text-left text-center font-light text-foundation-blackblack-10 font-lato max-w-xl">
              Unleash powerful AI insights with seamless data integration and retrieval
            </p>
            <button className="px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-lato font-medium">
              View Full Feature List
            </button>
          </div>

          {/* Right Column - Feature List */}
          <div className="space-y-8">
            {/* Data Indexing & Integration */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/data-index.png" alt="Data Indexing" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Data Indexing & Integration
                </h3>
                <p className="text-foundation-blackblack-10">
                  Index data in any format or language for seamless retrieval and interoperability.
                </p>
              </div>
            </div>

            {/* LLM-Powered Insights */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/llm.png" alt="LLM Insights" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  LLM-Powered Insights
                </h3>
                <p className="text-foundation-blackblack-10 text-lg font-light">
                  High-value free content, data-driven insights, and expert consulting to build trust and engagement.
                </p>
              </div>
            </div>

            {/* Custom Retrieval Strategies */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/custom-retrieval.png" alt="Custom Retrieval" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Custom Retrieval Strategies
                </h3>
                <p className="text-foundation-blackblack-10 text-lg font-light">
                  Define tailored chunking and retrieval strategies for optimized data access.
                </p>
              </div>
            </div>

            {/* Optimised Embedding Models */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/optimised-embedding.png" alt="Embedding Models" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Optimised Embedding Models
                </h3>
                <p className="text-foundation-blackblack-10 text-lg font-light">
                  Select and implement the best embedding models to maximize search accuracy and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Building an AI-Powered SaaS App? */}
    <section className="md:py-20 py-10 px-4 md:px-32 bg-foundation-blackblack-4">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-playfair text-foundationblackblack-13 mb-8">
          Building an AI-Powered SaaS App?
        </h2>
        <ul className="text-foundation-blackblack-10 text-base font-light space-y-3 mb-8">
          <li>• Platform integration: Leverage 4AY and third-party tools to power your app’s AI functionality</li>
          <li>• Custom AI models: Build tailored machine learning models for your SaaS app</li>
          <li>• Scalable architecture: Ensure your SaaS app can grow with your business</li>
          <li>• End-to-end deployment: From MVP to full product launch, we assist in every phase of development</li>
        </ul>
        <a href="#" className="inline-block px-8 py-4 bg-foundationredred-13 text-white rounded-full font-medium hover:bg-foundationredred-11 transition-colors">
          Build Your SaaS App →
        </a>
      </div>
    </section>

    {/* Real Businesses, Real Results Section */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-16">
          Real Businesses, Real Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Success Story Card 1 */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foundationblackblack-13">
                Company name
              </h3>

              <div className="space-y-2">
                <p className="text-foundation-blackblack-10 text-xl font-light ">Increased ARR by</p>
                <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">in Y months</p>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Success Story Card 2 */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foundationblackblack-13">
                Company name
              </h3>

              <div className="space-y-2">
                <p className="text-foundation-blackblack-10 text-xl font-light">Reduced costs by</p>
                <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">with AI-driven automation</p>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Success Story Card 3 */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foundationblackblack-13">
                Company name
              </h3>

              <div className="space-y-2">
                <p className="text-foundation-blackblack-10 text-xl font-light">Scaled from</p>
                <p className="text-5xl font-normal text-foundationblackblack-13">$xM <span className="text-foundation-blackblack-10">to</span> $yM</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">ARR using 4AY</p>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Success Story Card 4 */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foundationblackblack-13">
                Company name
              </h3>

              <div className="space-y-2">
                <p className="text-foundation-blackblack-10 text-xl font-light">Increased ARR by</p>
                <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">in Y months</p>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            See More Success Stories
          </button>
        </div>
      </div>
    </section>
   <CaseStudies />
   <BlogSection/>

    {/* Why Choose Us? */}
    <section className="md:py-20 py-8 px-0 md:px-32 ">
      <div className="w-full max-w-4xl mx-auto">
        <div className="md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
          <h2 className="text-3xl md:text-4xl text-center font-bold font-playfair text-foundationblackblack-13 mb-6 md:mb-8">
            Why Choose Us?
          </h2>
          <ul className="max-w-2xl mx-auto text-foundation-blackblack-10 text-base font-light space-y-3 mb-8 text-center">
            <li>• Expertise across industries, with deep experience in marketing, sales, HR, and operations</li>
            <li>• End-to-end support from AI strategy to deployment and optimization</li>
            <li>• Proven results: Faster implementation, higher ROI, and operational efficiency</li>
          </ul>
          <div className="text-center">
            <a id="consultation" href="#" className="inline-block px-8 py-4 bg-foundationblackblack-11 text-white rounded-full font-medium hover:bg-foundationblackblack-10 transition-colors">
              Schedule a Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Custom Growth Report Section */}
    <section className="md:pb-20 pb-8 px-4 md:px-32">
      <div className="container mx-auto px-0">
        <div className="[background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] rounded-3xl md:px-8 px-4 md:py-16 py-8 text-center">
          <div className="md:max-w-3xl max-w-full mx-auto space-y-6">
            <h2 className="md:text-5xl text-3xl font-normal font-['Lato',Helvetica] text-foundationblackblack-13">
              Get Your Custom Growth Report
            </h2>
            
            <p className="text-2xl font-normal text-foundation-blackblack-10">
              Discover tailored use cases and revenue potential for your business with our AI-powered insights.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Get My Custom Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Client Testimonials Carousel */}
    <section className="md:py-20 py-8 px-4 md:px-32 bg-[#F8EFEF]">
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center mb-16">
          <h2 className="md:text-4xl text-3xl font-bold font-['Playfair',Helvetica] text-foundationblackblack-13">
            What Our Clients Say
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => testimonialSliderRef.current?.slickPrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
            </button>
            <button
              onClick={() => testimonialSliderRef.current?.slickNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
            </button>
          </div>
        </div>

        <Slider ref={testimonialSliderRef} {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="md:px-4 px-0">
              <div className="bg-white rounded-3xl md:p-12 p-4 py-8 shadow-md">
                <div className="flex flex-col items-center text-center relative">
                  <div className="md:text-[120px] text-[80px] font-quicksand absolute md:-top-6 -top-4 md:left-4 left-0 leading-none text-foundationredred-13 opacity-20  mb-6">
                  ❝
                  </div>
                  <p className="md:text-2xl text-xl font-light text-foundation-blackblack-10 mb-8 max-w-3xl">
                    {testimonial.content}
                  </p>
                  <div className="md:text-xl text-lg text-foundationredred-13">
                    - {testimonial.name}, <span className="text-foundation-blackblack-10">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </section>

<MediaCarousel/>
<ContactUs/>
   
    </>
  );
};

export default AIConsulting;