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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHandshake, faChartLine, faPuzzlePiece, faMicrochip, faSitemap, faRocket } from "@fortawesome/free-solid-svg-icons";
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
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-foundationblackblack-13 font-['Playfair',Helvetica]">Why AI Consulting?</h2>
<div className="hidden">
              <div className="grid md:grid-cols-1 gap-4 md:w-2/5">
                {/* <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
                  <p>Struggling with inefficiencies, scalability, or data silos?</p>
                </div> */}
                {/* <div className=" bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Need faster ROI without long development cycles? </p>
                </div> */}
                {/* <div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
                  <p>Looking for seamless AI integration without complex setups?</p>
                </div> */}
              </div>
<div className="flex flex-col items-center justify-center w-full text-center">
<p className="text-white font-['Lato',Helvetica] font-light text-2xl md:text-5xl mb-4 text-center">
  AI is a game-changer, but effective integration requires expert strategy, training, and tools. Our AI consulting services provide end-to-end support—from 4AY platform deployment to AI tool integration and team training—helping you optimize business processes and unlock new growth potential.
</p>
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Reduce your CAQ, scale MoFU, and improve LTV
                </p> */}
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg mb-2">
                  🔺 Orchestrate marketing, ops, finance, and sales under one growth lens
                </p> */}
                {/* <p className="text-white font-['Lato',Helvetica] text-base md:text-lg">
                  🔺 Go beyond automation—deploy intelligence
                </p> */}
              </div>
              </div>
             
         <p className="text-white font-['Lato',Helvetica] text-base md:text-lg">
                  AI is a game-changer, but effective integration requires expert strategy, training, and tools. Our AI consulting services provide end-to-end support—from 4AY platform deployment to AI tool integration and team training—helping you optimize business processes and unlock new growth potential.
                </p>      
        </div>
      </div>
    </section>
    {/* <UseCaseCarousel /> */}
      
    {/* Where We Intervene Section */}
{/* Where We Intervene section hidden */}
     
    {/* Purpose-Built Tech Section */}
    {/*
    <section className="md:py-20 py-8 px-4 md:px-32 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      ...hidden Purpose-Built Tech section...
    </section>
    */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
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

    {/*Why Choose Us? Section */}
    <section className="md:py-20 py-8 px-4 md:px-20">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-16">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
          {/* Expertise Card */}
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#F1D1D1] rounded-full">
                <FontAwesomeIcon icon={faBrain} style={{ color: "#c54648" }} size="2x" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Expertise Across Industries</h3>
              <p className="text-foundation-blackblack-10 text-base">
                Deep experience in marketing, sales, HR, and operations
              </p>
            </div>
          </div>
          {/* End-to-End Support Card */}
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#F1D1D1] rounded-full">
                <FontAwesomeIcon icon={faHandshake} style={{ color: "#c54648" }} size="2x" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">End-to-End Support</h3>
              <p className="text-foundation-blackblack-10 text-base">
                From AI strategy to deployment and optimization
              </p>
            </div>
          </div>
          {/* Proven Results Card */}
          <div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#F1D1D1] rounded-full">
                <FontAwesomeIcon icon={faChartLine} style={{ color: "#c54648" }} size="2x" />
              </div>
              <h3 className="text-xl font-bold text-foundationblackblack-13">Proven Results</h3>
              <p className="text-foundation-blackblack-10 text-base">
                Faster implementation, higher ROI, and operational efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   <CaseStudies />
   <BlogSection/>

    {/* Building an AI-Powered SaaS App? Section */}
    <section className="md:py-20 py-8 px-0 md:px-32 ">
      <div className="container mx-auto px-0">
        <div className="md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
          <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-12">
            Building an AI-Powered SaaS App?
          </h2>
          <p className="text-2xl text-center font-light text-foundation-blackblack-10 mb-8">
            We help you design and deploy AI-powered SaaS applications that deliver intelligent features and automation.
          </p>
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: "#c54648" }} size="2x" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foundationblackblack-13 mb-2">Platform integration</h3>
                <p className="font-light text-foundation-blackblack-10">Leverage 4AY and third-party tools to power your app’s AI functionality</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faMicrochip} style={{ color: "#c54648" }} size="2x" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foundationblackblack-13 mb-2">Custom AI models</h3>
                <p className="font-light text-foundation-blackblack-10">Build tailored machine learning models for your SaaS app</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faSitemap} style={{ color: "#c54648" }} size="2x" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foundationblackblack-13 mb-2">Scalable architecture</h3>
                <p className="font-light text-foundation-blackblack-10">Ensure your SaaS app can grow with your business</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faRocket} style={{ color: "#c54648" }} size="2x" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foundationblackblack-13 mb-2">End-to-end deployment</h3>
                <p className="font-light text-foundation-blackblack-10">From MVP to full product launch, we assist in every phase of development</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
              Build Your SaaS App &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Ready to Accelerate with AI? Section */}
    <section className="md:pb-20 pb-8 px-4 md:px-32">
      <div className="container mx-auto px-0">
        <div className="[background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] rounded-3xl md:px-8 px-4 md:py-16 py-8 text-center">
          <div className="md:max-w-3xl max-w-full mx-auto space-y-6">
            <h2 className="md:text-5xl text-3xl font-normal font-['Lato',Helvetica] text-foundationblackblack-13">
              Ready to Accelerate with AI?
            </h2>
            <p className="text-2xl font-normal text-foundation-blackblack-10">
              Let us help you harness the power of AI to automate, optimize, and scale your business.
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
                Schedule a Free Consultation &rarr;
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

{/* <MediaCarousel/>
<ContactUs/> */}
   
    </>
  );
}

export default AIConsulting;