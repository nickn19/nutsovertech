import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogSection } from "../Desktop/sections/BlogSection";
import { Button } from "../../components/ui/button";

const Insights = (): JSX.Element => {
  const navigate = useNavigate();

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
            Insights
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
            Stay informed with the latest trends, research, and insights in AI and business transformation.
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
  

      {/* Insights content */}
      <BlogSection />
    </>
  );
};

export default Insights; 