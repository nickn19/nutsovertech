import React from "react";
import { SolutionsCarousel } from "../Desktop/sections/SolutionsCarousel";
import { Button } from "../../components/ui/button";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import UseCaseCarousel from "../../components/ui/UsecaseCarausel";
import { CaseStudies } from "../Desktop/sections/CaseStudies";
import Insights from "../Insights";
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
      <section className="relative w-full flex flex-col items-start ">
  {/* Background image */}
        <div className="absolute inset-0 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] " />
  

  {/* Hero content */}
        <div className="relative flex flex-col w-full items-center justify-center  px-4">
          <div className="flex flex-col max-w-[757px] items-center gap-10 mt-40">
          <div className="flex flex-col items-center justify-center gap-[30px] w-full">
              <h1 className="relative w-full  [font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-13 text-3xl md:text-[42px] text-center line-height-[1.2] leading-normal">
              AI Consulting Services
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
             Unlock the power of AI to optimize operations, automate workflows, and scale your business.
            </p>
          {/* <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-sm md:text-base text-center tracking-[0] leading-normal px-4">
              We take a PE-like operating partner approach to your business—intervening where it matters most, aligning incentives, and deploying AI workforces to scale operations without bloating teams.
            </p>   */}
          </div>

         {/* <div className="flex flex-col md:flex-row items-center gap-[30px] relative">
              <Button className="px-6 py-4 bg-foundationredred-13 hover:bg-foundationredred-8 transition-colors rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base w-full md:w-auto">
              Explore Our Expertise
            </Button>

            <Button
              variant="outline"
                className="px-6 py-4 rounded-[70px] border-2 border-solid border-foundationredred-13 hover:bg-foundationredred-13 hover:text-foundation-blackblack-1 transition-colors [font-family:'Lato',Helvetica] font-medium text-foundationredred-13 text-base w-full md:w-auto"
            >
               Free Trial
            </Button>
          </div>
           */}
          </div> 
          <div className="md:h-[500px] h-[200px]  max-w-3xl mx-auto aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center my-10">
              <div className="  flex items-center justify-center">
                <div className="rounded-full bg-white p-3 shadow-md">
                  <Play className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="md:py-20 py-8 px-4 md:px-20 ">
          <div className="container mx-auto px-0">
            <div className="bg-[#D57879] rounded-lg p-6 md:p-8 ">
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-foundationblackblack-13 font-['Playfair',Helvetica]">Solve Challenges. Unlock Scale.</h2>
              <div className="flex gap-6 md:flex-row flex-col items-center justify-between">
              <div className="grid md:grid-cols-1 gap-4 md:w-2/5">
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
                  <p>Struggling with inefficiencies, scalability, or data silos?</p>
                </div>
                <div className=" bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Need faster ROI without long development cycles? </p>
                </div>
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Looking for seamless AI integration without complex setups?</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:w-3/5 w-full text-center">
                <h3 className="text-white font-['Lato',Helvetica] font-light text-2xl md:text-5xl mb-4">
                  Our AI Workforces eliminate repetitive workflows, unify decision-making across functions, and free up your team for high-leverage work.
                </h3>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Reduce your CAQ, scale MoFU, and improve LTV
                </p>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Orchestrate marketing, ops, finance, and sales under one growth lens
                </p>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg">
                  🔺 Go beyond automation—deploy intelligence
                </p>
              </div>
              </div>
              
        </div>
      </div>
    </section>
    <UseCaseCarousel />
      
    {/* Where We Intervene Section */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="md:text-4xl text-3xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-12">
          Where We Intervene
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI-Led Strategy Card */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                <img src="/analysis.png" alt="AI Strategy" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">AI-Led Strategy</h3>
              <p className="text-foundation-blackblack-10 text-base">
                Proven playbooks tailored for rapid results.
              </p>
            </div>
          </div>

          {/* No-Code Implementation Card */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                <img src="/no-code.png" alt="No Code" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">No-Code Implementation</h3>
              <p className="text-foundation-blackblack-10 text-base">
                Get started instantly—no heavy development required.
              </p>
            </div>
          </div>

          {/* Data-Driven Execution Card */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                <img src="/execution.png" alt="Data Driven" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Data-Driven Execution</h3>
              <p className="text-foundation-blackblack-10 text-base">
                AI insights power real-time decision-making.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            Explore Our IP Assets
          </button>
        </div>
      </div>
    </section>
     
    {/* Purpose-Built Tech Section */}
    <section className="md:py-20 py-8 px-4 md:px-32 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Description */}
          <div className="space-y-6 md:max-w-96 max-w-full md:block flex flex-col items-center justify-center ">
            <h2 className="text-3xl md:text-4xl md:text-left text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13">
              Purpose-Built Tech,<br />
              Tailored to Your Stack
            </h2>
            <p className="text-2xl md:text-left text-center font-light text-foundation-blackblack-10 font-['Lato',Helvetica] max-w-xl">
              Unleash powerful AI insights with seamless data integration and retrieval
            </p>
            <button className="px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
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
    {/* AI Consulting Services Section - Dynamic Cards */}
    <section className="md:py-20 py-8 px-4 md:px-20 bg-foundation-blackblack-4">
      <div className="container mx-auto px-0">
        <div className="text-center md:mb-16 mb-8">
          <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationredred-13 mb-4">
            Our AI Consulting Services
          </h2>
          <p className="text-2xl font-light text-foundation-blackblack-10 font-['Lato',Helvetica]">
            Unlock automation, intelligence, and growth for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "4AY Platform Deployment",
              description: "Our 4AY platform enables you to build and deploy AI-driven workflows that automate tasks, streamline operations, and optimize business processes.",
              features: [
                "Custom AI applications tailored to your needs",
                "Multi-agent orchestration for cross-functional workflows",
                "Seamless integration with existing systems",
                "Scalable for future growth and evolving business needs"
              ],
              button: { label: "Deploy AI Now →", link: "#" }
            },
            {
              title: "AI Training & Courses for Teams",
              description: "Our AI training programs help your team gain the skills needed to operate and optimize AI solutions effectively.",
              features: [
                "Tailored training for different business functions",
                "Introductory and advanced courses on AI tools and strategies",
                "Practical workshops focused on real-world applications of AI"
              ],
              button: { label: "Book AI Training →", link: "#" }
            },
            {
              title: "Deployment of Third-Party AI Tools",
              description: "Maximize your use of AI with the right tools. We help you select and deploy the best third-party AI platforms to enhance marketing, analytics, customer support, and more.",
              features: [
                "Tool selection based on business needs",
                "Integration into your current workflows",
                "Optimization for high ROI and performance"
              ],
              button: { label: "Explore AI Tools →", link: "#" }
            },
            {
              title: "Building an AI-Powered SaaS App?",
              description: "We help you design and deploy AI-powered SaaS applications that deliver intelligent features and automation.",
              features: [
                "Platform integration: Leverage 4AY and third-party tools to power your app’s AI functionality",
                "Custom AI models: Build tailored machine learning models for your SaaS app",
                "Scalable architecture: Ensure your SaaS app can grow with your business",
                "End-to-end deployment: From MVP to full product launch, we assist in every phase of development"
              ],
              button: { label: "Build Your SaaS App →", link: "#" }
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-4">{service.title}</h3>
                <p className="text-lg font-light text-foundation-blackblack-10 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="text-base font-light text-foundation-blackblack-10 flex items-start gap-2">
                      <span className="text-foundationredred-13">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-auto">
                <a href={service.button.link} className="inline-block px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  {service.button.label}
                </a>
              </div>
            </div>
          ))}
        </div>
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

    {/* Hands-On Consultation Section */}
    <section className="md:py-20 py-8 px-0 md:px-32 ">
      <div className="container mx-auto px-0">
      <div className=" md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-12">
          Hands-On Consultation &amp; Setup
        </h2>

        <div className="space-y-6">
          {/* Guided Onboarding Card */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Guided-Onboarding.png" alt="Guided Onboarding" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Guided Onboarding:
                <span className="ml-1 font-light ">
                Personalised setup for seamless adoption.
              </span>
              </h3>
             
            </div>
            </div>
            
          {/* 24/7 Support Card */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                24/7 Support:
                <span className="ml-1 font-light ">
                Dedicated team for troubleshooting & strategy.
              </span>
              </h3>
            </div>
            </div>
            
          {/* Knowledge Hub Card */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Knowledge Hub:
                <span className="ml-1 font-light ">
                Tutorials, webinars, and best practices.
              </span>
              </h3>
             
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-foundationblackblack-11 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            Contact us
          </button>
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