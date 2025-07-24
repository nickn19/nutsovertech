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
    title: "Agency Owners:",
    description: "Productize your internal workflows",
  },
  {
    title: "D2C Brands:",
    description: "Spin up niche tools for community & conversion",
  },
  {
    title: "Consultants & Creator",
    description: "Sell tools alongside services",
  },
  {
    title: "Operators",
    description: "Solve for that one annoying problem (and monetize it)",
  },
  ];
const MicroSaas = (): JSX.Element => {
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
              Build or Buy a MicroSaaS—We’ve Already Done Both
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
             Own niche tools that solve sharp problems, generate passive revenue, and scale quietly.
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
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-foundationblackblack-13 font-['Playfair',Helvetica]">Why MicroSaaS Works</h2>
              {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  MicroSaaS is the anti-startup:
                </p> */}
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-white font-['Playfair',Helvetica]">MicroSaaS is the anti-startup:</h2>
             {/* <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-['Playfair',Helvetica]">
                MicroSaaS is the anti-startup:
             </h3> */}
              <div className="flex gap-6 md:flex-row flex-col items-center justify-between">
              <div className="grid md:grid-cols-1 gap-4 md:w-2/5">
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
                  <p> Built fast</p>
                </div>
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
                  <p>Solves one real, nagging problem</p>
                </div>
                <div className=" bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>No team needed </p>
                </div>
                <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Makes money while you sleep</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:w-3/5 w-full text-center">
                <h3 className="text-white font-['Lato',Helvetica] font-light text-2xl md:text-5xl mb-4">
                 We help you build your own or license ours. Either way—you get a lean, high-ROI tool that works 24/7 without a bloated dev team.
                </h3>
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  We help you build your own or license ours. Either way—you get a lean, high-ROI tool that works 24/7 without a bloated dev team.
                </p> */}
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Reduce your CAQ, scale MoFU, and improve LTV
                </p>
                <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
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
      title="What to Expect: Enterprise-Grade Solutions"
      ctaText="Contact Us for a Consultation"
    />
    {/* What Makes MicroSaaS Special */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="md:text-4xl text-3xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-12">
          What Makes MicroSaaS Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Laser-focused */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for Laser-focused */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10" fill="#C54648"/>
                  <rect x="11" y="6" width="2" height="8" fill="#fff"/>
                  <rect x="11" y="15" width="2" height="2" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Laser-focused</h3>
              <p className="text-foundation-blackblack-10 text-base">Built for edge cases that big SaaS platforms ignore.</p>
            </div>
          </div>
          {/* Low cost, high automation */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for Low cost, high automation */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#C54648"/>
                  <circle cx="12" cy="12" r="4" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Low cost, high automation</h3>
              <p className="text-foundation-blackblack-10 text-base">No need for big infra—most are near-passive once live.</p>
            </div>
          </div>
          {/* AI-native */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for AI-native */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect x="6" y="6" width="12" height="12" rx="6" fill="#C54648"/>
                  <circle cx="12" cy="12" r="3" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">AI-native</h3>
              <p className="text-foundation-blackblack-10 text-base">Leverage 4ay, workflow automation, and no-code tools.</p>
            </div>
          </div>
          {/* Highly profitable */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for Highly profitable */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect x="10" y="4" width="4" height="16" fill="#C54648"/>
                  <rect x="4" y="10" width="16" height="4" fill="#C54648"/>
                  <rect x="11" y="11" width="2" height="2" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Highly profitable</h3>
              <p className="text-foundation-blackblack-10 text-base">Most of our apps hit breakeven in weeks, not years.</p>
            </div>
          </div>
          {/* Truly yours */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for Truly yours */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10" fill="#C54648"/>
                  <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Truly yours</h3>
              <p className="text-foundation-blackblack-10 text-base">Host it, sell it, use it—your IP, your cash flow.</p>
            </div>
          </div>
          {/* Acquisition engine */}
          <div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {/* Inline SVG for Acquisition engine */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#C54648" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect x="4" y="4" width="16" height="16" rx="8" fill="#C54648"/>
                  <path d="M8 12h8" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 8v8" stroke="#fff" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Acquisition engine</h3>
              <p className="text-foundation-blackblack-10 text-base">Acquisition engine on top of which you can create SaaS app.</p>
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
     
    {/* Want to Build Your Own MicroSaaS? */}
    <section className="md:py-20 py-8 px-4 md:px-32 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Description */}
          <div className="space-y-6 md:max-w-96 max-w-full md:block flex flex-col items-center justify-center ">
            <h2 className="text-3xl md:text-4xl md:text-left text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13">
             Want to Build Your Own MicroSaaS?
            </h2>
            <p className="text-2xl md:text-left text-center font-light text-foundation-blackblack-10 font-['Lato',Helvetica] max-w-xl">
             We’ll help you spin up a custom app in days, not months.
            </p>
            <button className="px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
             Book a Build Sprint
            </button>
          </div>

          {/* Right Column - Feature List */}
          

           <div className="space-y-8">
            {/* Use our React Boilerplate */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/Guided-Onboarding.png" alt="React Boilerplate" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                 Use our React Boilerplate
                </h3>
              </div>
            </div>

            {/* Add your logic via 4AY PaaS agents */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/llm.png" alt="4AY PaaS Agents" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                 Add your logic via 4AY PaaS agents
                </h3>
              </div>
            </div>
            {/* Automate tasks with N8n */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/Operational_Discipline.svg" alt="N8n Automation" className="w-12 h-12" style={{ filter: 'brightness(0) saturate(100%)' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                Automate tasks with N8n
                </h3>
              </div>
            </div>

            {/*  Host with our infra or your own */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/custom-retrieval.png" alt="Custom Retrieval" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Host with our infra or your own
                </h3>
              </div>
            </div>

            {/* Optimised Embedding Models */}
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/optimised-embedding.png" alt="Optimised Embedding Models" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Optimised Embedding Models
                </h3>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>

    {/* Industry Verticals Section */}
    {/* Industry Verticals Section hidden as requested */}

    {/* MicroSaaS Products You Can Start Using Today */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-16">
          MicroSaaS Products You Can Start Using Today
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OmniCapture */}
            <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  OmniCapture
                </h3>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-2">
                  AI content digitization app — extracts, reformats, and distributes content across channels. Ideal for marketers and agencies
                </p>
                <p className="text-xl font-normal text-foundationblackblack-13 mb-1">Status:</p>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-4">Live & Licensed</p>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Get Access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Custom SEO, Email and CRO SOPs */}
            <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  Custom SEO, Email and CRO SOPs
                </h3>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-2">
                  AI-powered SOP MicroSaaS that tailors email marketing, SEO and CRO tasks to your business—daily prompts, checklists, and agent execution.
                </p>
                <p className="text-xl font-normal text-foundationblackblack-13 mb-1">Use Case:</p>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-4">Marketing Teams, Freelancers</p>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Try Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* D2C Partner Portal */}
            <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
                  D2C Partner Portal
                </h3>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-2">
                  A plug-and-play MicroSaaS to manage referrals, commissions, and partner engagement for D2C brands.
                </p>
                <p className="text-xl font-normal text-foundationblackblack-13 mb-1">Use Case:</p>
                <p className="text-foundation-blackblack-10 text-xl font-light mb-4">Shopify, WooCommerce, Custom</p>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                  Install Now
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
   {/* <CaseStudies /> */}
   {/* <BlogSection/> */}

    {/* Our MicroSaaS Stack */}
    <section className="md:py-20 py-8 px-0 md:px-32 ">
      <div className="container mx-auto px-0">
      <div className=" md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-2 md:mb-4">
          Our MicroSaaS Stack 
        </h2>
        <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-2xl text-center tracking-[0] leading-normal px-4 mb-8">
          We’ve built a complete system to go from pain-point to product in days:
        </p>
        {/* <div className="overflow-x-auto flex justify-center mb-10">
<table className="min-w-[350px] text-left border-collapse">
    <thead>
      <tr>
        <th className="px-4 py-2 font-bold border-b border-gray-300">Layer</th>
        <th className="px-4 py-2 font-bold border-b border-gray-300">Tools We Use</th>
      </tr>
    </thead>
    </table>
</div> */}
         <div className="space-y-6">
          {/* Frontend */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Guided-Onboarding.png" alt="Guided Onboarding" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Frontend:
                <span className="ml-1 font-light ">
                React Boilerplates (with 1000+ integrations)
              </span>
              </h3>
             
            </div>
            </div>
            
          {/* Automation */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Automation:
                <span className="ml-1 font-light ">
                N8n.io
              </span>
              </h3>
            </div>
            </div>
            {/* Data Pipelines */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Data Pipelines:
                <span className="ml-1 font-light ">
               Airbyte, PostHog, Supabase
              </span>
              </h3>
            </div>
            </div>
            {/* AI Workforce Layer */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/24-7-Support.png" alt="24/7 Support" className="w-8 h-8" />
            </div>
            <div >
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                AI Workforce Layer:
                <span className="ml-1 font-light ">
               4AY PaaS (SOP → AI Agents → Outcome)
              </span>
              </h3>
            </div>
            </div>
            
          {/* Deployment */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Deployment:
                <span className="ml-1 font-light ">
                Vercel, Netlify, Firebase
              </span>
              </h3>
             
            </div>
          </div>
           {/* Mobile App */}
          <div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/Knowledge-Hub.png" alt="Knowledge Hub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
                Mobile App:
                <span className="ml-1 font-light ">
                ReactNative, BuildShip
              </span>
              </h3>
             
            </div>
          </div> 
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-foundationblackblack-11 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
            See it in action
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
<ContactUs/>
   
    </>
  );
};

export default MicroSaas;