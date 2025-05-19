import React from "react";
import { Button } from "../../components/ui/button";

const About = (): JSX.Element => {
  return (
    <>
      
      <section className="relative w-full flex flex-col items-start min-h-screen">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url(/frame-2147224339.png)] bg-cover bg-center" />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#f5f5f587]" />

  {/* Hero content */}
  <div className="relative flex flex-col w-full items-center justify-center min-h-screen px-4">
    <div className="flex flex-col max-w-[757px] items-center gap-10 mt-20">
          <div className="flex flex-col items-center justify-center gap-[30px] w-full">
            <h1 className="relative w-full [text-shadow:1px_1px_7px_#ffffff1a] [font-family:'Playfair',Helvetica] font-bold text-foundationredred-13 text-3xl md:text-[52px] text-center tracking-[0] leading-normal">
            About Us
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
            Pioneers in AI-driven business transformation, committed to delivering rapid and sustainable ROI.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[30px] relative">
            <Button className="px-4 py-3 bg-foundationredred-13 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base w-full md:w-auto">
              Explore Our Expertise
            </Button>

            <Button
              variant="outline"
              className="px-4 py-3 rounded-[70px] border border-solid border-[#c54648] [font-family:'Lato',Helvetica] font-medium text-foundationredred-13 text-base w-full md:w-auto"
            >
              Meet Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
      {/* About content */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-lg mb-6">
              Founded in 2020, NutsOverTech emerged from a vision to democratize AI technology and make it accessible for businesses of all sizes. Our team of industry veterans and AI specialists combines deep technical expertise with strategic business acumen.
            </p>
            <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-lg mb-8">
              Today, we're proud to be at the forefront of AI innovation, helping organizations across sectors leverage cutting-edge technology to solve real business challenges and unlock new opportunities.
            </p>
            <Button className="px-4 py-3 bg-foundationredred-13 rounded-[70px] font-['Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base">
              Meet Our Team
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="/about-image.jpg" 
              alt="About NutsOverTech" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 px-4 md:px-20 bg-foundation-blackblack-3">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Innovation
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                We continuously push the boundaries of what's possible with AI, exploring new approaches and technologies to deliver exceptional results.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Client Success
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                We measure our success by the tangible outcomes we create for our clients, focusing on rapid ROI and sustainable growth.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Ethical AI
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                We develop and deploy AI solutions with a strong commitment to ethics, transparency, and responsible innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 