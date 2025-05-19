import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogSection } from "../Desktop/sections/BlogSection";
import { Button } from "../../components/ui/button";

const Insights = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full py-20 flex flex-col items-center">
        {/* Background and overlay for hero section */}
        <div className="absolute inset-0 bg-[url(../frame-2147224339.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#f5f5f587]" />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
          <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-5xl text-center leading-tight mb-6">
            Insights
          </h1>
          <p className="font-['Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-xl text-center leading-relaxed mb-10">
            Stay informed with the latest trends, research, and insights in AI and business transformation.
          </p>
          <Button 
            className="px-6 py-3 bg-foundationredred-13 rounded-[70px] font-['Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base"
            onClick={() => navigate('/blog')}
          >
            View All Blog Posts
          </Button>
        </div>
      </div>

      {/* Insights content */}
      <BlogSection />
    </>
  );
};

export default Insights; 