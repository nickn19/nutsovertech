import React from "react";
import { SolutionsCarousel } from "./sections/SolutionsCarousel";
import { GrowthStageSlider } from "./sections/GrowthStageSlider";
import { VideoCarousel } from "./sections/VideoCarousel";
import { CaseStudies } from "./sections/CaseStudies";
import { ContactUs } from "./sections/ContactUs";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SalesPlaybooks } from "./sections/SalesPlaybooks";
import { MediaCarousel } from "./sections/MediaCarousel";
import { BlogSection } from "./sections/BlogSection";

export const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <GrowthStageSlider />
      <SolutionsCarousel />
      <SalesPlaybooks />
      <BlogSection />
      <CaseStudies />
      <VideoCarousel />
      <MediaCarousel />
      {/* <ContactUs /> */}
     
    </>
  );
};
