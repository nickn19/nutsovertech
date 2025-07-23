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
const useCaseData = [
	{
	  title: "Enterprises",
	  description: "Leverage the full power of T-Shaped Growth across large teams and complex systems to optimize every facet of your organization, from HR to customer experience.",
	},
	{
	  title: "Local Businesses",
	  description: "Optimize your lead generation systems with custom AI workflows and automated appointment scheduling to increase conversions without manual effort.",
	},
	{
	  title: "SaaS Applications",
	  description: "Leverage deep expertise in sales psychology, partnerships, and collaborations to scale SaaS businesses and enhance customer lifetime value.",
	},
	{
	  title: "Track",
	  description: "Real-time performance tracking to optimize workflows and business operations.",
	},
  ];
const TShapeGrowth = (): JSX.Element => {
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
             Scale Your Business with T-Shaped Growth
            </h1>
             <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
              Unlock intelligent growth with deep expertise, adaptability, and AI-driven automation across marketing, operations, HR, and valuation.
            </p>
          {/* <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-sm md:text-base text-center tracking-[0] leading-normal px-4">
              We take a PE-like operating partner approach to your business—intervening where it matters most, aligning incentives, and deploying AI workforces to scale operations without bloating teams.
            </p>   */}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[30px] relative">
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
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-foundationblackblack-13 font-['Playfair',Helvetica]">Why T-Shaped Growth?</h2>
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-white font-['Playfair',Helvetica]">With our AI-driven T-Shaped Growth approach, we apply:</h2>
              {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  With our AI-driven T-Shaped Growth approach, we apply:
                </p> */}
              <div className="flex gap-6 md:flex-row flex-col items-center justify-between">
              <div className="grid md:grid-cols-1 gap-4 md:w-2/5">
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
                  <p>Full-funnel strategy</p>
                </div>
                <div className=" bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Automated workflows </p>
                </div>
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Custom AI agents</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:w-3/5 w-full text-center">
                {/* <h3 className="text-white font-['Lato',Helvetica] font-light text-2xl md:text-5xl mb-4">
                  Our AI Workforces eliminate repetitive workflows, unify decision-making across functions, and free up your team for high-leverage work.
                </h3> */}
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  T-Shaped Growth combines broad business understanding with deep expertise in sales and marketing. This model empowers businesses to scale sustainably, ensuring both horizontal and vertical alignment across departments like HR, Operations, and Valuation.
                </p>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  To drive predictable growth and increase profitability without increasing your team.
                </p>
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Orchestrate marketing, ops, finance, and sales under one growth lens
                </p>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg">
                  🔺 Go beyond automation—deploy intelligence
                </p> */}
              </div>
              </div>    
        </div>
      </div>
    </section>
    <UseCaseCarousel
      useCases={useCaseData}
      title="Targeted Solutions for Every Business"
      ctaText="Contact Us for a Consultation"
    />
      
    {/* T-Shaped Growth in Action */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="md:text-4xl text-3xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-12">
         T-Shaped Growth in Action
        </h2>
        <p className="text-center text-foundation-blackblack-10 text-lg font-['Lato',Helvetica] mb-8">
          Sales & Marketing, HR, Operations, and Delivery—All Aligned.
          </p>
          <p className="text-center text-foundation-blackblack-10 text-lg font-['Lato',Helvetica] mb-8">
          <p className="text-center text-foundation-blackblack-10 text-lg font-['Lato',Helvetica] mb-8">
           As depicted in the T-Shaped Growth model, we connect the depth of expertise with broad organizational understanding.
          </p>
          </p> 
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Sales & Marketing Expertise: */}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/Guided-Onboarding.png" alt="Sales & Marketing" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">Sales & Marketing Expertise:</h3>
      <p className="text-foundation-blackblack-10 text-base">
        Apply deep knowledge in Sales Psychology, PR & Influencer marketing, and Paid Media Channels.
      </p>
    </div>
  </div>

  {/* HR & People */}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/24-7-Support.png" alt="HR & People" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">HR & People</h3>
      <p className="text-foundation-blackblack-10 text-base">
         Align recruitment and people strategy to scale operations.
      </p>
    </div>
  </div>

  {/* Operations & Efficiency */}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/Knowledge-Hub.png" alt="Operations & Efficiency" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">Operations & Efficiency</h3>
      <p className="text-foundation-blackblack-10 text-base">
         Automate SOPs and workflows to maximize productivity.
      </p>
    </div>
  </div>

  {/* Valuation */}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/Knowledge-Hub.png" alt="Valuation" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">Valuation</h3>
      <p className="text-foundation-blackblack-10 text-base">
          Identify business KPIs and revenue streams to increase valuation, with Cost Optimization through AI workforces.
      </p>
    </div>
  </div>

  {/* Data & Analytics:*/}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/Knowledge-Hub.png" alt="Data & Analytics" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">Data & Analytics:</h3>
      <p className="text-foundation-blackblack-10 text-base">
          Ensure data-driven decision making and real-time performance tracking across all departments.
      </p>
    </div>
  </div>

  {/* Data Security:*/}
  <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
        <img src="/Knowledge-Hub.png" alt="Data Security" className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-foundationblackblack-13">Data Security:</h3>
      <p className="text-foundation-blackblack-10 text-base">
          Implement robust data security practices to safeguard your business, customers, and operations.
      </p>
    </div>
  </div>
</div>

        {/* <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            Explore Our IP Assets
          </button>
        </div> */}
      </div>
    </section>
     
    {/* Purpose-Built Tech Section */}
{/* Purpose-Built Tech Section hidden as requested */}

    {/* Services We Offer */}
    <section className="md:py-20 py-8 px-4 md:px-20 bg-foundation-blackblack-4">
      <div className="container mx-auto px-0">
        <div className="text-center md:mb-16 mb-8">
          <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationredred-13 mb-4">
            Services We Offer
          </h2>
          {/* <p className="text-2xl font-light text-foundation-blackblack-10 font-['Lato',Helvetica]">
            Dummy
          </p> */}
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*  Full-Funnel Growth Strategy */}
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
                Full-Funnel Growth Strategy
              </h3>
              {/* <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
                Keyword Targeting: From awareness to conversion with optimized content and landing pages
              </p> */}
              <ul className="space-y-4 flex-1">
                <li className="text-lg font-light text-foundation-blackblack-10">
                  • Keyword Targeting: From awareness to conversion with optimized and landing pages.
                </li>
                <li className="text-lg font-light text-foundation-blackblack-10">
                  • AI-powered Marketing: Achieve more without scaling a large team—automated workflows for nurturing, conversion, and retention.
                </li>
                <li className="text-lg font-light text-foundation-blackblack-10">
                  •Sales & Marketing Alignment: Unite these functions to drive cohesive, measurable results.
                </li>
              </ul>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Valuation & Growth Optimization with Cost Optimization */}
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
              Valuation & Growth Optimization with Cost Optimization
            </h3>
            <ul className="space-y-6">
              <li className="text-lg font-light text-foundation-blackblack-10">
                • Increase company valuation by aligning HR, marketing, and ops with growth drivers.
              </li>
              <li className="text-lg font-light text-foundation-blackblack-10">
                •Implement cost optimization strategies with AI-driven workforces to reduce manual tasks and improve ROI.
              </li>
              <li className="text-lg font-light text-foundation-blackblack-10">
                • Use full-stack reporting to measure performance across all channels and functions.
              </li>
               <li className="text-lg font-light text-foundation-blackblack-10">
                • AI analytics to optimize profit margins and reduce inefficiencies.
              </li>
            </ul>
            <div className="w-full flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                 Book a Strategy Session
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* AI-Powered Team Automation */}
            <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
                AI-Powered Team Automation
              </h3>
              <ul className="space-y-6 flex-1">
                <li className="text-lg font-light text-foundation-blackblack-10">
                  • Deploy custom AI agents to scale operations without increasing headcount.
                </li>
                <li className="text-lg font-light text-foundation-blackblack-10">
                  • Automate repetitive tasks across marketing, sales, and support.
                </li>
                <li className="text-lg font-light text-foundation-blackblack-10">
                  • Data-driven decision making: Align teams around key business metrics.
                </li>
              </ul>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                 Try Our AI Tools
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              </div>
            </div>
          </div>
          {/* <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
            Rich API & Data Connector Support
            </h3>
            <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
            Offers dynamic API interfaces for Slack, Teams, social media, Google Sheets, CRMs, ERPs, and more, supporting both structured and unstructured data sources—including scraping capabilities.
            </p>
          </div>
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
            Tagging & Content Structuring System
            </h3>
            <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
            Every input is tagged (e.g., SOP, BP, Training, TP) to ensure accurate data parsing, vectorisation (when needed), and LLM interpretation. The DNS tag (Do Not Summarise) is used to govern sensitive or structured information.
            </p>
          </div> */}
          {/* <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
            Continuous Learning & Updates
            </h3>
            <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
            All dimensions are designed to be iteratively refined with feedback, performance data, and updated SOPs to ensure relevance and alignment with evolving organisational needs.
            </p>
          </div> */}
        </div>
      </div>
    </section>

    {/* T-Shaped Growth Automation Tools */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair',Helvetica] text-foundationblackblack-13">
            T-Shaped Growth Automation Tools
          </h2>
          <p className="text-2xl font-light text-foundation-blackblack-10 font-['Lato',Helvetica] mt-2 max-w-3xl w-full">
            Take your T-Shaped Growth strategy to the next level with custom AI tools, pre-built SOPs, and full-funnel analytics dashboards that align every department.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center items-stretch">
          {/*  4AY Platform */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-center text-center">
              {/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                 <span className="text-foundation-blackblack-10">Logo here</span> 
              </div> */}
              <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">
                 4AY Platform
              </h3>
              <div className="space-y-2 flex-1">
                <p className="text-foundation-blackblack-10 text-xl font-light">Our Platform-as-a-Service (PaaS) for AI applications. Build and deploy multi-agent orchestration workflows to automate tasks and integrate with your systems.</p>
                {/* <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">in Y months</p> */}
              </div>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Deploy Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*  OmniCapture */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-center text-center">
              {/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div> */}
              <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">
                 OmniCapture
              </h3>
              <div className="space-y-2 flex-1">
                <p className="text-foundation-blackblack-10 text-xl font-light">AI-powered content digitization tool that tags and collects offline content into centralized locations for easy access by all teams.</p>
                {/* <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">with AI-driven automation</p> */}
              </div>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Get Access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* SaaS Boilerplate */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-center text-center">
              {/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div> */}
              <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">
               SaaS Boilerplate
              </h3>
              <div className="space-y-2 flex-1">
                <p className="text-foundation-blackblack-10 text-xl font-light">A customizable UI interface on top of our boilerplate that allows you to quickly build apps suited to your specific business needs.</p>
                {/* <p className="text-5xl font-normal text-foundationblackblack-13">$xM <span className="text-foundation-blackblack-10">to</span> $yM</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">ARR using 4AY</p> */}
              </div>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                   Build Your App
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*  Data CX (d8a.cx) */}
          <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-center text-center">
              {/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
                <span className="text-foundation-blackblack-10">Logo here</span>
              </div> */}
              <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-4">
                 Data CX (d8a.cx)
              </h3>
              <div className="space-y-2 flex-1">
                <p className="text-foundation-blackblack-10 text-xl font-light">Merge data from multiple sources, create business dashboards, and automate actions based on KPIs for informed decision-making.</p>
                {/* <p className="text-5xl font-normal text-foundationblackblack-13">xx%</p>
                <p className="text-foundation-blackblack-10 text-xl font-light">in Y months</p> */}
              </div>
              <div className="w-full flex justify-center mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            See More Success Stories
          </button>
        </div> */}
      </div>
    </section>
   <CaseStudies />
   <BlogSection/>

    {/* Our T-Shaped Growth Stack */}
    <section className="md:py-20 py-8 px-0 md:px-32 ">
      <div className="container mx-auto px-0">
      <div className=" md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-12">
          Our T-Shaped Growth Stack
        </h2>
<p className="text-foundation-blackblack-10 text-xl font-light">We apply T-Shaped Growth across every part of your business, from strategy to execution</p>
        <div className="space-y-6">
           <div className="overflow-x-auto flex justify-center mb-10">
{/* <table className="min-w-[350px] text-left border-collapse">
    <thead>
      <tr>
        <th className="px-4 py-2 font-bold border-b border-gray-300">Core Competencies</th>
        <th className="px-4 py-2 font-bold border-b border-gray-300">Tools & Applications</th>
      </tr>
    </thead>
    </table> */}
</div>
          {/* Marketing & Sales */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Guided-Onboarding.png" alt="Guided Onboarding" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
               Marketing & Sales:
                <span className="ml-1 font-light ">
                SEO, Social Ads, Organic Social, Paid Media, PR.
              </span>
              </h3>
             
            </div>
            </div>
            
          {/* HR & People */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                HR & People:
                <span className="ml-1 font-light ">
               Recruitment SOPs, People Strategy Framework.
              </span>
              </h3>
            </div>
            </div>
            {/* HR & People */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                HR & People:
                <span className="ml-1 font-light ">
               Recruitment SOPs, People Strategy Framework.
              </span>
              </h3>
            </div>
            </div> 
          {/* Operations */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Operations:
                <span className="ml-1 font-light ">
                SOP Automation, Process Mapping, AI Integration.
              </span>
              </h3> 
            </div>
          </div>
          {/* Valuation & Finance */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Valuation & Finance:
                <span className="ml-1 font-light ">
                Business Valuation Optimization, KPI Dashboard.
              </span>
              </h3> 
            </div>
          </div>
          {/* Legal & Compliance */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
               Legal & Compliance:
                <span className="ml-1 font-light ">
                Automated Filings, Compliance Monitoring.
              </span>
              </h3> 
            </div>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-foundationblackblack-11 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            Contact us
          </button>
        </div> */}
      </div>
      </div>
    </section>

    {/* Ready to Accelerate Growth? */}
    <section className="md:pb-20 pb-8 px-4 md:px-32">
      <div className="container mx-auto px-0">
        <div className="[background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] rounded-3xl md:px-8 px-4 md:py-16 py-8 text-center">
          <div className="md:max-w-3xl max-w-full mx-auto space-y-6">
            <h2 className="md:text-5xl text-3xl font-normal font-['Lato',Helvetica] text-foundationblackblack-13">
             Ready to Accelerate Growth?
            </h2>
            
            <p className="text-2xl font-normal text-foundation-blackblack-10">
              Let us help you design and implement a T-Shaped Growth strategy, powered by AI automation, that maximizes operational efficiency and scales profits.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                 Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Client Testimonials Carousel */}
    {/* <section className="md:py-20 py-8 px-4 md:px-32 bg-[#F8EFEF]">
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
      </section> */}

{/* <MediaCarousel/> */}
{/* <ContactUs/> */}
   
    </>
  );
};

export default TShapeGrowth;