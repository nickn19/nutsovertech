import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Footer = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = [
    {
      title: "Our Story",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Partners", path: "/partners" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Ecosystem",
      links: [
        { name: "Our Services", path: "/services" },
        { name: "IP Assets", path: "/ip-assets" },
        { name: "Sales Engine", path: "/sales-engine" }
      ]
    },
    {
      title: "Insights",
      links: [
        { name: "Trending Insights", path: "/insights" },
        { name: "Case Studies", path: "/case-studies" }
      ]
    },
    {
      title: "Contact Us",
      links: [
        { name: "Contact Us", path: "/contact" }
      ]
    },
  ];

  return (
    <footer className="w-full flex justify-center bg-foundation-blackblack-4 md:py-[60px] py-8 px-4 md:px-[115px]">
      <div className="w-full max-w-[1160px] flex flex-col items-center gap-10">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8 md:w-auto w-full">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-start justify-center gap-8 md:w-auto w-full">
              <Link to="/">
                <img
                  className="md:w-[239px] w-full md:h-[89.62px] h-auto object-cover"
                  alt="Company Logo"
                  src="/image-41-1.png"
                />
              </Link>

              <div className="flex flex-col md:w-[114px] w-full items-start gap-3 md:justify-start justify-center">
                <h4 className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-9 text-base md:text-left text-center w-full">
                  Follow Us On
                </h4>

                <div className="flex items-center gap-3 w-full md:justify-start justify-center">
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Logo FIXED"
                    src="/group-1.png"
                  />
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Logo FIXED"
                    src="/logo-fixed.png"
                  />
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Group"
                    src="/group-2.png"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full max-w-[340px] flex items-center gap-4">
              <div className="flex flex-col items-start justify-center gap-3 w-full">
                <h4 className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-9 text-base">
                  Signup to our newsletter
                </h4>

                <div className="flex w-full items-center justify-between bg-white rounded-[60px] border border-solid border-[#bfbfbf] overflow-hidden">
                  <Input
                    className="border-0 shadow-none pl-4 h-11 font-['Lato',Helvetica] font-light text-foundationblackblack-11 text-sm"
                    placeholder="Enter your email"
                  />
                  <Button className="bg-foundationblackblack-11 rounded-[70px] font-['Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base m-1">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full w-full md:w-auto md:flex-1">
            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[50px]">
              {footerLinks.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4"
                >
                  <h4 className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-9 text-base">
                    {section.title}
                  </h4>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="font-['Lato',Helvetica] font-light text-foundation-blackblack-9 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-end w-full mt-10">
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="font-['Lato',Helvetica] font-normal text-[#454545] text-sm text-center">
                  © Copyright 2024 NutsOverTech
                </div>
                <Link
                  to="/privacy-policy"
                  className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-9 text-base hover:underline"
                >
                  Privacy Policy
                </Link>
                <Separator orientation="vertical" className="h-6" />
                <Link
                  to="/terms-of-service"
                  className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-9 text-base hover:underline"
                >
                  Terms Of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 