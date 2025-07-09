import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const IPAssets = (): JSX.Element => {
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
            IP Assets
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
            Discover our proprietary AI technologies and intellectual property that can transform your business.
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
     

      {/* IP Assets content */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center mb-12">
            Our Proprietary Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Fouray (internal) */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
              <img src="/fouray-logo.png" alt="Fouray" className="w-20 h-20 mb-4 object-contain" />
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Fouray</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-center mb-4">
                4AY PaaS: AI-powered workflow automation for rapid, scalable business growth.
              </p>
              <Button asChild className="w-full mt-auto">
                <Link to="/ip-assets/fouray">Learn More</Link>
              </Button>
            </div>
            {/* Var80 (external) */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
              <img src="/var80-logo.png" alt="Var80" className="w-20 h-20 mb-4 object-contain" />
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Var80</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-center mb-4">
                E-commerce growth and Shopify automation specialists. Visit the Var80 website for more.
              </p>
              <Button asChild className="w-full mt-auto" variant="outline">
                <a href="https://var80.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </Button>
            </div>
            {/* Ominicature (external) */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
              <img src="/ominicature-logo.png" alt="Ominicature" className="w-20 h-20 mb-4 object-contain" />
              <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-xl mb-2">Ominicature</h3>
              <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-center mb-4">
                Martech and automation solutions for modern businesses. Visit the Ominicature website for more.
              </p>
              <Button asChild className="w-full mt-auto" variant="outline">
                <a href="https://ominicature.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IPAssets; 