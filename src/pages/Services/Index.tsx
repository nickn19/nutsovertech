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
		description:
			"Expert guidance on implementing AI strategies that align with your business goals and drive meaningful transformation.",
		icon: "🎯",
		features: [
			"Strategic Planning",
			"ROI Analysis",
			"Implementation Roadmap",
		],
		price: "Custom Pricing",
	},
	{
		id: 2,
		title: "Custom AI Development",
		description:
			"Tailor-made AI applications designed to address your specific business challenges and opportunities.",
		icon: "🚀",
		features: [
			"Machine Learning Models",
			"NLP Solutions",
			"Computer Vision",
		],
		price: "From $25,000",
	},
	{
		id: 3,
		title: "Data Analytics & Insights",
		description:
			"Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
		icon: "📊",
		features: [
			"Predictive Analytics",
			"Data Visualization",
			"Real-time Dashboards",
		],
		price: "From $15,000",
	},
	{
		id: 4,
		title: "Process Automation",
		description:
			"Streamline operations and reduce costs with intelligent automation solutions for your business processes.",
		icon: "⚡",
		features: [
			"Workflow Automation",
			"RPA Solutions",
			"Smart Document Processing",
		],
		price: "From $10,000",
	},
	{
		id: 5,
		title: "AI Training & Support",
		description:
			"Comprehensive training programs and ongoing support to ensure successful AI adoption across your organization.",
		icon: "🎓",
		features: ["Team Training", "24/7 Support", "Best Practices"],
		price: "From $5,000",
	},
	{
		id: 6,
		title: "Cloud AI Infrastructure",
		description:
			"Scalable cloud infrastructure designed specifically for AI workloads with optimal performance and cost efficiency.",
		icon: "☁️",
		features: [
			"Auto-scaling",
			"Cost Optimization",
			"Security & Compliance",
		],
		price: "From $2,000/month",
	},
];

const testimonials = [
	{
		name: "Sarah Johnson",
		company: "TechCorp Inc.",
		role: "CTO",
		content:
			"The AI solutions delivered by this team transformed our business operations. We've seen a 40% increase in efficiency.",
		image: "/author.png",
	},
	{
		name: "Michael Chen",
		company: "DataFlow Solutions",
		role: "CEO",
		content:
			"Outstanding expertise in AI implementation. Their strategic approach helped us save millions in operational costs.",
		image: "/author.png",
	},
	{
		name: "Emily Rodriguez",
		company: "Innovation Labs",
		role: "Head of AI",
		content:
			"Professional, knowledgeable, and results-driven. The custom AI model exceeded our performance expectations.",
		image: "/author.png",
	},
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
const Services = (): JSX.Element => {
	const testimonialSliderRef = React.useRef<Slider | null>(null);
	const testimonialSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: (
			<button
				aria-label="Previous testimonial"
				className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
			>
				<ArrowLeft className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
			</button>
		),
		nextArrow: (
			<button
				aria-label="Next testimonial"
				className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
			>
				<ArrowRight className="w-6 h-6 text-foundationredred-13 group-hover:text-foundationredred-11 transition-colors" />
			</button>
		),
	};

	return (
		<>
			{/* Hero Section */}
			<section className="relative w-full flex flex-col items-start ">
				{/* Background image */}
				<div className="absolute inset-0 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)] " />

				{/* Hero content */}
				<div className="relative flex flex-col w-full items-center justify-center  px-4">
					<div className="flex flex-col max-w-[757px] items-center gap-10 my-40">
						<div className="flex flex-col items-center justify-center gap-[30px] w-full">
							<h1 className="relative w-full  [font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-13 text-3xl md:text-[42px] text-center line-height-[1.2] leading-normal">
								We embed ourselves in your business to orchestrate
								T-Shaped Growth:
							</h1>

							<p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
								Deep, vertical expertise powered by a wide, horizontal
								ecosystem of capabilities.We take a PE-like operating partner approach to your
								business—intervening where it matters most, aligning
								incentives, and deploying AI workforces to scale
								operations without bloating teams.
							</p>
							{/* <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-sm md:text-base text-center tracking-[0] leading-normal px-4">
								We take a PE-like operating partner approach to your
								business—intervening where it matters most, aligning
								incentives, and deploying AI workforces to scale
								operations without bloating teams.
							</p> */}
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
					{/* <div className="md:h-[500px] h-[200px]  max-w-3xl mx-auto aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center my-10">
						<div className="  flex items-center justify-center">
							<div className="rounded-full bg-white p-3 shadow-md">
								<Play className="h-6 w-6 text-red-500" />
							</div>
						</div>
					</div> */}
				</div>
			</section>
			<section className="md:py-20 py-8 px-4 md:px-20 ">
				<div className="container mx-auto px-0">
					<div className="bg-[#D57879] rounded-lg p-6 md:p-8 ">
						<h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-foundationblackblack-13 font-['Playfair',Helvetica]">
							Solve Challenges. Unlock Scale.
						</h2>
						<div className="flex gap-6 md:flex-row flex-col items-center justify-between">
							<div className="grid md:grid-cols-1 gap-4 md:w-2/5">
								<div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold ">
									<p>
										Struggling with inefficiencies, scalability, or data
										silos?
									</p>
								</div>
								<div className=" bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
									<p>Need faster ROI without long development cycles? </p>
								</div>
								<div className="bg-white text-foundationblackblack-13 rounded-3xl py-8 px-5  text-lg font-bold">
									<p>
										Looking for seamless AI integration without complex
										setups?
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center md:w-3/5 w-full text-center">
								<h3 className="text-white font-['Lato',Helvetica] font-light text-xl md:text-3xl mb-4">
									Our AI Workforces eliminate repetitive workflows, unify
									decision-making across functions, and free up your team
									for high-leverage work.
								</h3>
								<p className="text-white font-['Lato',Helvetica] text-sm md:text-base mb-2">
									Reduce your CAQ, scale MoFU, and improve LTV.
								</p>
								<p className="text-white font-['Lato',Helvetica] text-sm md:text-base mb-2">
									Orchestrate marketing, ops, finance, and sales under one
									growth lens.
								</p>
								<p className="text-white font-['Lato',Helvetica] text-sm md:text-base">
									Go beyond automation—deploy intelligence.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<UseCaseCarousel
      useCases={useCaseData}
      title="Most Common Use Cases"
      ctaText="Contact Us for a Consultation"
    />

			{/* Where We Intervene Section */}
			<section className="md:py-20 py-8 px-4 md:px-20">
				<div className="container mx-auto px-0">
					<h2 className="md:text-4xl text-3xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-12">
						Where We Intervene
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
			{/* Strategy & Ops Automation */}
			<div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
			  <div className="flex flex-col items-center text-center gap-6">
				<div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
		  {/* Inline SVG for Strategy & Ops Automation (lighter style) */}
		  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
			<circle cx="12" cy="12" r="10" stroke="#C54648" strokeWidth="1.2" fill="none"/>
			<circle cx="12" cy="12" r="5" stroke="#C54648" strokeWidth="1.1" fill="none"/>
			<circle cx="12" cy="12" r="2" fill="#C54648"/>
			<line x1="12" y1="2" x2="12" y2="7" stroke="#C54648" strokeWidth="1.1"/>
			<line x1="12" y1="17" x2="12" y2="22" stroke="#C54648" strokeWidth="1.1"/>
			<line x1="2" y1="12" x2="7" y2="12" stroke="#C54648" strokeWidth="1.1"/>
			<line x1="17" y1="12" x2="22" y2="12" stroke="#C54648" strokeWidth="1.1"/>
		  </svg>
				</div>
				<h3 className="text-xl font-bold text-foundationblackblack-13">
				  Strategy & Ops Automation
				</h3>
				<p className="text-foundation-blackblack-10 text-base">
				  Turn insights into execution. Full-funnel strategies
				  powered by plug-and-play systems and analytics.
				</p>
			  </div>
			</div>
			{/* Revenue Infrastructure */}
			<div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
			  <div className="flex flex-col items-center text-center gap-6">
				<div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
		  {/* Inline SVG for Revenue Infrastructure (lighter style) */}
		  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
			<rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4" stroke="#C54648" strokeWidth="1.2" fill="none"/>
			<rect x="7.5" y="7.5" width="9" height="1.2" fill="#C54648" rx="0.6"/>
			<rect x="7.5" y="11.5" width="9" height="1.2" fill="#C54648" rx="0.6"/>
			<rect x="7.5" y="15.5" width="9" height="1.2" fill="#C54648" rx="0.6"/>
		  </svg>
				</div>
				<h3 className="text-xl font-bold text-foundationblackblack-13">
				  Revenue Infrastructure
				</h3>
				<p className="text-foundation-blackblack-10 text-base">
				  Set up the foundational tech, data, and marketing stack to support sustainable, compounding growth.
				</p>
			  </div>
			</div>

			{/* Product & Commerce Enablement */}
			<div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
			  <div className="flex flex-col items-center text-center gap-6">
				<div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
		  {/* Inline SVG for Product & Commerce Enablement (distinct style) */}
		  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
			<rect x="3.5" y="7" width="17" height="10" rx="3" stroke="#C54648" strokeWidth="1.2" fill="none"/>
			<rect x="7" y="10" width="3" height="3" fill="#C54648" rx="1.5"/>
			<rect x="14" y="10" width="3" height="3" fill="#C54648" rx="1.5"/>
			<rect x="10.5" y="13.5" width="3" height="2" fill="#C54648" rx="1"/>
			<circle cx="12" cy="9" r="1" fill="#C54648"/>
		  </svg>
				</div>
				<h3 className="text-xl font-bold text-foundationblackblack-13">
				  Product & Commerce Enablement
				</h3>
				<p className="text-foundation-blackblack-10 text-base">
				   Ship faster and convert better. From eComm to SaaS businesses, we help build, launch and scale intelligently.
				</p>
			  </div>
			</div>

			{/* Retention & Lifecycle*/}
			<div className="bg-foundation-redred-3 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
			  <div className="flex flex-col items-center text-center gap-6">
				<div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
		  {/* Inline SVG for Retention & Lifecycle (lighter style) */}
		  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
			<circle cx="12" cy="12" r="10" stroke="#C54648" strokeWidth="1.2" fill="none"/>
			<path d="M8 12a4 4 0 0 1 8 0" stroke="#C54648" strokeWidth="1.1" fill="none"/>
			<circle cx="12" cy="12" r="2" fill="#C54648"/>
		  </svg>
				</div>
				<h3 className="text-xl font-bold text-foundationblackblack-13">
				  Retention & Lifecycle
				</h3>
				<p className="text-foundation-blackblack-10 text-base">
				   Extend customer lifetime value with personalized engagement systems, loyalty flows, and automation.
				</p>
			  </div>
			</div>
					</div>

					<div className="mt-12 text-center">
						<button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
							Get in touch
						</button>
					</div>
				</div>
			</section>

			{/* Purpose-Built IPs, Ready to Accelerate Your Custom Build */}
			<section className="md:py-20 py-8 px-4 md:px-32 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
				<div className="container mx-auto px-0">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Left Column - Heading and Description */}
						<div className="space-y-6 md:max-w-96 max-w-full md:block flex flex-col items-center justify-center ">
							<h2 className="text-3xl md:text-4xl md:text-left text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13">
								Purpose-Built IPs, Ready to Accelerate Your Custom Build<br />
								Tailored to Your Stack
							</h2>
							<p className="text-2xl md:text-left text-center font-light text-foundation-blackblack-10 font-['Lato',Helvetica] max-w-xl">
								Leverage our pre-built infrastructure, templates, and micro tools to cut down dev time and ship faster without compromising flexibility.
							</p>
							<button className="px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
								See our IP Assets
							</button>
						</div>

						{/* Right Column - Feature List */}
						<div className="space-y-8">
			  {/* 4AY PaaS */}
			  <div className="flex gap-6 items-start">
				<div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
				  <img
					src="/data-index.png"
					alt="Data Indexing"
					className="w-12 h-12"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
				  />
				</div>
				<div>
				  <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
					4AY PaaS
				  </h3>
				  <p className="text-foundation-blackblack-10">
					A robust AI workflow development platform for rapidly building and deploying LLM-powered business tools with integrated automations.
				  </p>
				</div>
			  </div>

			  {/* SaaS Boilerplates */}
			  <div className="flex gap-6 items-start">
				<div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
				  <img
					src="/llm.png"
					alt="LLM Insights"
					className="w-12 h-12"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
				  />
				</div>
				<div>
				  <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
					SaaS Boilerplates
				  </h3>
				  <p className="text-foundation-blackblack-10 text-lg font-light">
					Production-ready React templates like Var80 (built for D2C growth), bundled with 1000+ native integration presets across CRM, email, analytics, and more.
				  </p>
				</div>
			  </div>

			  {/*MicroSaaS Tools */}
			  <div className="flex gap-6 items-start">
				<div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
				  <img
					src="/custom-retrieval.png"
					alt="Custom Retrieval"
					className="w-12 h-12"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
				  />
				</div>
				<div>
				  <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
					MicroSaaS Tools
				  </h3>
				  <p className="text-foundation-blackblack-10 text-lg font-light">
					From Omnicapture (automated content digitization) to single-purpose AI workforces — instantly deployable micro tools with embedded logic and automation flows.
				  </p>
				</div>
			  </div>

			  {/* Digital Growth Assets */}
			  <div className="flex gap-6 items-start">
				<div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
				  <img
					src="/optimised-embedding.png"
					alt="Embedding Models"
					className="w-12 h-12"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
				  />
				</div>
				<div>
				  <h3 className="text-2xl font-bold text-foundationblackblack-13 mb-2">
					Digital Growth Assets
				  </h3>
				  <p className="text-foundation-blackblack-10 text-lg font-light">
					Access a library of proven SOPs, playbooks, growth checklists, and prebuilt landing/email templates — designed for instant implementation.
				  </p>
				</div>
			  </div>
						</div>
					</div>
				</div>
			</section>

			{/* Industry Verticals Section */}
			<section className="md:py-20 py-8 px-4 md:px-20 bg-foundation-blackblack-4">
				<div className="container mx-auto px-0">
					<div className="text-center md:mb-16 mb-8">
						<h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationredred-13 mb-4">
							Industry Verticals We Power
						</h2>
						{/* <p className="text-2xl font-light text-foundation-blackblack-10 font-['Lato',Helvetica]">
							Dummy
						</p> */}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* D2C Brands — via [Var80]*/}
						<div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
							<h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
								D2C Brands — via [Var80]
							</h3>
							<p className="text-lg font-light text-foundation-blackblack-10 mb-6">
								Growth for personal care, fashion, wellness, home decor.
							</p>
							<ul className="space-y-4">
								<li className="text-lg font-light text-foundation-blackblack-10">
									• TikTok-style video SEO.
								</li>
								<li className="text-lg font-light text-foundation-blackblack-10">
									• Bundle optimization, retention triggers.
								</li>
				<li className="text-lg font-light text-foundation-blackblack-10">
									• Shopify-native growth ecosystem.
								</li>
							</ul>
						</div>

						{/* SMEs & Local Businesses */}
						<div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
							<h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
								SMEs & Local Businesses
							</h3>
			  <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
								Associations, clinics, boutique retailers, startups.
							</p>
							<ul className="space-y-6">
								<li className="text-lg font-light text-foundation-blackblack-10">
									• Google My Business + Local SEO.
								</li>
								<li className="text-lg font-light text-foundation-blackblack-10">
									• WhatsApp-first CRM and automation.
								</li>
								<li className="text-lg font-light text-foundation-blackblack-10">
									•Referral and community-led sales.
								</li>
							</ul>
						</div>

						{/* Digital Products */}
						<div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
							<h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
								Digital Products
							</h3>
			  <p className="text-lg font-light text-foundation-blackblack-10 mb-6">
								Courses, coaching, and MicroSaaS builders.
							</p>
							<ul className="space-y-6">
								<li className="text-lg font-light text-foundation-blackblack-10">
									• Funnel automation for high-ticket sales.
								</li>
								<li className="text-lg font-light text-foundation-blackblack-10">
									•Email + video-based nurture flows.
								</li>
				<li className="text-lg font-light text-foundation-blackblack-10">
									•Stripe + Kajabi/Thinkific integration.
								</li>
							</ul>
						</div>
						<div className="bg-white px-5 py-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
							<h3 className="text-2xl text-center font-bold text-foundationblackblack-13 mb-6">
								 Enterprise Workflow Automation — via [4AY]
							</h3>
							<p className="text-lg font-light text-foundation-blackblack-10 mb-6">
								Marketing, HR, Finance, Ops at scale.
							</p>
			  <ul className="space-y-6">
								<li className="text-lg font-light text-foundation-blackblack-10">
									• ETL + Dashboards + Notification logic.
								</li>
								<li className="text-lg font-light text-foundation-blackblack-10">
									•HR ops, payout automation, project workflows.
								</li>
				<li className="text-lg font-light text-foundation-blackblack-10">
									•RAG-based LLM deployment & feedback loops.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Real Businesses, Real Results Section */}
			{/* <section className="md:py-20 py-8 px-4 md:px-20">
				<div className="container mx-auto px-0"> */}
					{/* <h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-16">
						Real Businesses, Real Results
					</h2> */}

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
						{/* Success Story Card 1 */}
						{/* <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
							<div className="flex flex-col items-center text-center space-y-6"> */}
								{/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
									<span className="text-foundation-blackblack-10">Logo here</span>
								</div> */}

								{/* <h3 className="text-2xl font-bold text-foundationblackblack-13">
									Company name
								</h3> */}

								{/* <div className="space-y-2">
									<p className="text-foundation-blackblack-10 text-xl font-light ">
										Increased ARR by
									</p>
									<p className="text-5xl font-normal text-foundationblackblack-13">
										xx%
									</p>
									<p className="text-foundation-blackblack-10 text-xl font-light">
										in Y months
									</p>
								</div> */}

								{/* <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
									Read more
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</button>
							</div>
						</div> */}

						{/* Success Story Card 2 */}
						{/* <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
							<div className="flex flex-col items-center text-center space-y-6"> */}
								{/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
									<span className="text-foundation-blackblack-10">Logo here</span>
								</div> */}

								{/* <h3 className="text-2xl font-bold text-foundationblackblack-13">
									Company name
								</h3> */}

								{/* <div className="space-y-2">
									<p className="text-foundation-blackblack-10 text-xl font-light">
										Reduced costs by
									</p>
									<p className="text-5xl font-normal text-foundationblackblack-13">
										xx%
									</p>
									<p className="text-foundation-blackblack-10 text-xl font-light">
										with AI-driven automation
									</p>
								</div> */}

								{/* <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
									Read more
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</button>
							</div>
						</div> */}

						{/* Success Story Card 3 */}
						{/* <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
							<div className="flex flex-col items-center text-center space-y-6"> */}
								{/* <div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
									<span className="text-foundation-blackblack-10">Logo here</span>
								</div> */}

								{/* <h3 className="text-2xl font-bold text-foundationblackblack-13">
									Company name
								</h3> */}

								{/* <div className="space-y-2">
									<p className="text-foundation-blackblack-10 text-xl font-light">
										Scaled from
									</p>
									<p className="text-5xl font-normal text-foundationblackblack-13">
										$xM{" "}
										<span className="text-foundation-blackblack-10">
											to
										</span>{" "}
										$yM
									</p>
									<p className="text-foundation-blackblack-10 text-xl font-light">
										ARR using 4AY
									</p>
								</div> */}

								{/* <button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
									Read more
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</button>
							</div>
						</div> */}

						{/* Success Story Card 4 */}
						{/* <div className="bg-foundation-redred-3 px-5 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
							<div className="flex flex-col items-center text-center space-y-6">
								<div className="w-32 h-12 bg-foundation-blackblack-4 rounded-lg flex items-center justify-center">
									<span className="text-foundation-blackblack-10">Logo here</span>
								</div>

								<h3 className="text-2xl font-bold text-foundationblackblack-13">
									Company name
								</h3> */}

								{/* <div className="space-y-2">
									<p className="text-foundation-blackblack-10 text-xl font-light ">
										Increased ARR by
									</p>
									<p className="text-5xl font-normal text-foundationblackblack-13">
										xx%
									</p>
									<p className="text-foundation-blackblack-10 text-xl font-light">
										in Y months
									</p>
								</div> */}
{/* 
								<button className="flex items-center gap-2 px-6 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
									Read more
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</button>
							</div>
						</div>
					</div> */}

					{/* <div className="mt-12 text-center">
						<button className="px-6 py-3 bg-foundation-blackblack-10 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
							See More Success Stories
						</button>
					</div>
				</div>
			</section> */}
			<CaseStudies />
			<BlogSection />

			{/* Hands-On Consultation Section */}
			<section className="md:py-20 py-8 px-0 md:px-32 ">
				<div className="container mx-auto px-0">
					<div className="md:px-48 md:py-10 py-8 px-4 bg-[#F1D1D1]">
						<h2 className="text-3xl md:text-4xl text-center font-bold font-['Playfair',Helvetica] text-foundationblackblack-13 mb-8 md:mb-12">
							Hands-On Consultation &amp; Setup
						</h2>
						<p className="text-base md:text-lg text-center font-light text-foundation-blackblack-10 font-['Lato',Helvetica] max-w-2xl mx-auto mb-8 md:mb-12">
		We’re not just tech vendors. We operate like embedded partners—fixing real growth bottlenecks and deploying solutions that match your current maturity stage.
	  </p>
						<div className="space-y-8">
							{/* Application & Tech Architecture Audit: */}
							<div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
									<img
					src="/Guided-Onboarding.png"
					alt="Application & Tech Architecture Audit:"
					className="w-8 h-8"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
									/>
								</div>
								<div>
									<h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
										Application & Tech Architecture Audit:
										<span className="ml-1 font-light ">
											{" "}
											We review your current systems and design the integrations needed to connect tools, data, and teams seamlessly.
										</span>
									</h3>
								</div>
							</div>

							{/*Growth Bottleneck Identification: */}
							<div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
									<img
					src="/24-7-Support.png"
					alt="Growth Bottleneck Identification:"
					className="w-8 h-8"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
									/>
								</div>
								<div>
									<h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
										Growth Bottleneck Identification:
										<span className="ml-1 font-light ">
											{" "}
											We analyze your funnel across TOFU, MOFU, and BOFU to uncover drop-offs and prioritize high-impact fixes.
										</span>
									</h3>
								</div>
							</div>

							{/* MarTech Stack Audit: */}
							<div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
									<img
					src="/Knowledge-Hub.png"
					alt="MarTech Stack Audit:"
					className="w-8 h-8"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
									/>
								</div>
								<div>
									<h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
										MarTech Stack Audit:
										<span className="ml-1 font-light ">
											{" "}
											We evaluate your marketing tools for overlap, underuse, and inefficiencies—then streamline or rewire for scale.
										</span>
									</h3>
								</div>
							</div>
			  {/* AI Tooling Recommendations: */}
							<div className="bg-white rounded-2xl p-6 flex md:flex-row flex-col items-center gap-6 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-[#F1D1D1] rounded-full flex items-center justify-center flex-shrink-0">
									<img
					src="/Operational_Discipline.svg"
					alt="AI Tooling Recommendations:"
					className="w-8 h-8"
					style={{ filter: 'invert(27%) sepia(77%) saturate(1162%) hue-rotate(334deg) brightness(92%) contrast(97%)' }}
									/>
								</div>
								<div>
									<h3 className="md:text-xl text-lg md:text-left text-center font-bold text-foundationblackblack-13 mb-2 ">
										AI Tooling Recommendations:
										<span className="ml-1 font-light ">
											{" "}
											We identify where AI can replace manual work, speed up delivery, and personalize experiences across your stack.
										</span>
									</h3>
								</div>
							</div>
						</div>

						<div className="mt-12 text-center">
							<button className="px-8 py-3 bg-foundationblackblack-11 text-white rounded-full hover:bg-foundationblackblack-11 transition-colors font-['Lato',Helvetica] font-medium">
								Book a Free Consultation
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
								Want to Know What Will Move the Needle for You?
							</h2>

							{/* <p className="text-2xl font-normal text-foundation-blackblack-10">
								Discover tailored use cases and revenue potential for your
								business with our AI-powered insights.
							</p> */}

							<div className="mt-8">
								<button className="px-8 py-3 bg-foundationredred-13 text-white rounded-full hover:bg-foundationredred-11 transition-colors font-['Lato',Helvetica] font-medium">
									 Get Your Custom Growth Report 
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonials Carousel */}
{/*
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
								- {testimonial.name},{" "}
								<span className="text-foundation-blackblack-10">
									{testimonial.company}
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	</div>
</section>
*/}
			{/* <MediaCarousel /> */}
			<ContactUs />
		</>
	);
};

export default Services;