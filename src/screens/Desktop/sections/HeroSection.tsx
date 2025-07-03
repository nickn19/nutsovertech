import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    "Our Services",
    "IP Assets",
    "Sales Engine",
    "Insights",
    "About us",
    "Contact Us",
  ];

  return (
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
              Unlock Rapid ROI with AI-Led Transformation
            </h1>

            <p className="relative max-w-[641px] [text-shadow:2px_2px_9px_#ffffff2e] [font-family:'Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-[21px] text-center tracking-[0] leading-normal px-4">
              Accelerate growth with AI-driven insights, strategy, and execution
              tailored for your business.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[30px] relative">
            <a href="/services" tabIndex={-1} className="px-4 py-3 bg-foundationredred-13 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base w-full md:w-auto flex items-center justify-center">
              Explore Our Expertise
            </a>

            <a
              href="#portfolio-title"
              className="px-4 py-3 rounded-[70px] border border-solid border-[#c54648] [font-family:'Lato',Helvetica] font-medium text-foundationredred-13 text-base w-full md:w-auto flex items-center justify-center"
            >
              Meet Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};