import React from "react";
import { PortfolioSection } from "../Desktop/sections/PortfolioSection";

const leadership = [
  {
    name: "Saurav Mishra",
    role: "Founder and Chief Nut",
    image: "/leadership/sourav.jpeg",
  },
  {
    name: "Nitesh Mulchandani",
    role: "Ecom Growth specialist - Var80",
    image: "/leadership/nitesh.png",
  },
  {
    name: "Amulay Prakash",
    role: "Delivery Manager - Var80",
    image: "/leadership/amulay.jpeg",
  },
  {
    name: "Tejas Solankar",
    role: "Lead RAG-AI Engineer, 4ay",
    image: "/leadership/tejas.jpeg",
  },
  {
    name: "Bhumika VJ",
    role: "Lead SEO and Martech",
    image: "/leadership/bhumika.jpg",
  },
  {
    name: "Balbir Heer",
    role: "CTO - Shopify Practice - Var80",
    image: "",
  },
  {
    name: "Ravindra Thandu",
    role: "Martech automation specialist and RoR engineer",
    image: "/leadership/ravindra.JPG",
  },
  {
    name: "Sakshi Prajapati",
    role: "ROR Developer",
    image: "/leadership/sakshi.jpg",
  },
  {
    name: "Neeraj Sharma",
    role: "Frontend Engineer",
    image: "/leadership/neeraj.jpeg",
  },
];

const About = (): JSX.Element => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="relative w-full flex flex-col items-start min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url(/frame-2147224339.png)] bg-cover bg-center" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f5f5f587]" />

        {/* Hero content */}
        <div className="relative flex flex-col w-full items-center justify-center min-h-screen px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-10 py-16 px-4 md:px-20 md:mt-20 mt-10 ">
            {/* Left Column */}
            <div className="flex flex-col gap-[30px] w-full">
              <h1 className="relative w-full [text-shadow:1px_1px_7px_#ffffff1a] [font-family:'Playfair',Helvetica] font-bold text-foundationredred-13 text-3xl md:text-[56px] leading-none md:text-left text-center">
                A better way to scale with AI and automation
              </h1>
              <div className="md:flex hidden flex-col md:flex-row items-center gap-[30px] relative">
                <a
                  href="/contact"
                  tabIndex={-1}
                  className="px-4 py-3 bg-foundationredred-13 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base w-full md:w-auto flex items-center justify-center"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="relative [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] md:text-left text-center tracking-[0] leading-normal px-4">
                We don’t just build tools — we build valuation. NOT is an AI-led holding company that deploys tech, playbooks, and IPs to drive T-shaped growth for startups, D2C brands, and enterprises.
              </p>
              <a
                href="/contact"
                tabIndex={-1}
                className="md:hidden mt-8 px-4 py-3 bg-foundationredred-13 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base w-full md:w-auto flex items-center justify-center"
              >
                Get in touch
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-4 md:px-20 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
        <div className="flex flex-col items-center justify-center gap-[21px] relative self-stretch w-full">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 text-4xl tracking-[0] leading-[normal] text-center">Operators, Not Just Builders
          </h2>
          <p className="relative max-w-[918px] w-full [font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-2xl text-center tracking-[0] leading-[34px]">
            Our playbooks come from building real companies — not just decks. From Go-To-Market to Process Automation, our teams deploy embedded AI workflows to drive real results — fast, flexible, and founder-aligned.
          </p>
        </div>
      </section>
      {/* What Makes NOT Different*/}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center md:mb-12 mb-6">
            Execution is at the core of everything we do.

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-6">
            <div className="bg-white md:p-8 p-0  flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/t_shaped_growth.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">T-Shaped Growth</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 font-base md:text-left text-center">
                Deep execution in one growth lever. Breadth across HR, Ops, Sales, and IP. All automated.

              </p>
            </div>
            <div className="bg-white md:p-8 p-0   flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/done_for_you.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Done-for-You, Not DIY</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 font-base md:text-left text-center" >
                We ship solutions that work out of the box — no learning curves, no guesswork.
              </p>
            </div>
            <div className="bg-white md:p-8 p-0  flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/ai_native.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">AI-Native</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 font-base md:text-left text-center">
                Every tool, workflow, and audit we deliver is powered by purpose-built AI agents.
              </p>
            </div>
            <div className="bg-white md:p-8 p-0  flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/full_stack_thinking.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Full-Stack Thinking</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 font-base md:text-left text-center">
                From landing pages to team structure — we solve root problems, not surface noise.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 py-16 px-4 md:px-20 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-[30px] w-full">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl md:text-left text-center ">
            The NOT Story

          </h2>
          <p className="relative [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-left text-center tracking-[0] leading-normal ">
            NOT was born from the frustration of repeatedly rebuilding the same systems—disjointed tools, slow execution, and one-off solutions that didn’t scale. Frustrated, we decided to build once—and scale across companies using those systems.

          </p>
          <p className="relative [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-left text-center tracking-[0] leading-normal">
            Today, NOT is a builder-backed holding company that scales fast because our playbooks and AI tooling are not theoretical—they’re battle-tested in real businesses across startups, D2C, and enterprise clients.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:gap-8 gap-6">
            <div className="flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/Strategic_Infrastructure.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Strategic Infrastructure</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              AI-native workflows (like our 4AY PaaS), repeatable growth playbooks, and IP tools that can integrate into any business stage.

              </p>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/Operational_Discipline.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Operational Discipline</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              Lining up tech, data, process, and team to work in sync—so growth doesn’t fracture under complexity.

              </p>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <span className="mb-4"><img src="/Execution-First_Culture.svg" className="w-10 h-10" /></span>
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Execution-First Culture</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              We’re operators first, builders second. We deploy, test, iterate, and ship systems—not hypothetical theories.

              </p>
            </div>
          </div>
      </section>

      <section className="flex md:flex-row flex-col md:gap-20 gap-10 py-16 px-4 md:px-20 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
        {/* Left Column */}
        <div className="md:w-2/5 w-full flex flex-col gap-[30px] ">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl md:text-left text-center ">
          We hire for energy. <br/>
          We scale with focus.

          </h2>
        </div>

        {/* Right Column */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2 md:text-left text-center">Impact &gt; Effort</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              Smart wins beat hard work. We automate where possible and prioritize ruthlessly to drive results.

              </p>
            </div>
            <div className="flex flex-col ">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2 md:text-left text-center">Builder Mindset</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              Ownership, proactiveness, and curiosity aren't HR keywords — they’re prerequisites.

              </p>
            </div>
            <div className="flex flex-col ">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2 md:text-left text-center">We Grow Together</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              We don’t just build systems. We build people. Coaching, feedback, and trust are core loops.

              </p>
            </div>
            <div className="flex flex-col ">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2 md:text-left text-center">Ambition with Care</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 md:text-left text-center">
              Push hard. But build sustainably. We're here for the long game.

              </p>
            </div>
          </div>
      </section>



      {/* Culture & Leadership Section */}
      <section className="py-16 px-4 md:px-20 ">
        <div className="max-w-6xl mx-auto">
        <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl  text-center ">
        Built by Operators, Not Just Executives
        </h2>
        <p className="relative [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg  text-center tracking-[0] leading-normal mt-4">
        We’re a team of repeat founders, engineers, and growth hackers who've built from zero and scaled to acquisition. We use our experience to multiply yours.

          </p>
          <div className="flex flex-col items-center mt-12">
          <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-8 w-full">
  {leadership.map((leader) => (
    <div key={leader.name} className="flex flex-col items-center w-1/2 md:w-1/6">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-24 h-24 rounded-full object-cover shadow mb-3 border-2 border-foundationredred-13"
        onError={(e) => { (e.target as HTMLImageElement).src = ''; }}
      />
      <div className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-base text-center">
        {leader.name}
      </div>
      <div className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-sm text-center">
        {leader.role}
      </div>
    </div>
  ))}
</div>

</div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />


      {/* Contact/CTA Section */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl">
          You wont see the difference, till you talk to us!

          </h2>
          <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-lg md:text-xl">
          Let’s connect over coffee, if not real , virtual will do too!
          </p>
          <a className="items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow hover:bg-primary/90  px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-white text-base" href="/contact">Get in touch</a>
        </div>
      </section>

   
    </>
  );
};

export default About; 