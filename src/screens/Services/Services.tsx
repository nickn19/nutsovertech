import React from "react";
import { SolutionsCarousel } from "../Desktop/sections/SolutionsCarousel";
import { Button } from "../../components/ui/button";

const Services = (): JSX.Element => {
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
            Our Services
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
            Discover our comprehensive range of AI-driven services designed to transform your business and accelerate growth.
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
     

      {/* Services content */}
      <SolutionsCarousel />

      {/* Additional services sections can be added here */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center mb-12">
            How We Deliver Value
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Strategic Consulting
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 mb-6">
                Expert guidance on implementing AI strategies that align with your business goals and drive meaningful transformation.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Custom AI Solutions
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 mb-6">
                Tailor-made AI applications designed to address your specific business challenges and opportunities.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-4">
                Implementation & Support
              </h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 mb-6">
                End-to-end deployment and ongoing support to ensure your AI solutions deliver continuous value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 