import React from "react";
import { SolutionsCarousel } from "../Desktop/sections/SolutionsCarousel";

const Services = (): JSX.Element => {
  return (
    <>
      <div className="relative w-full flex flex-col items-start min-h-screen">
        {/* Background and overlay for hero section */}
        <div className="absolute inset-0 bg-[url(../frame-2147224339.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#f5f5f587]" />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
          <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-5xl text-center leading-tight mb-6">
            Our Services
          </h1>
          <p className="font-['Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-xl text-center leading-relaxed mb-10">
            Discover our comprehensive range of AI-driven services designed to transform your business and accelerate growth.
          </p>
        </div>
      </div>

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