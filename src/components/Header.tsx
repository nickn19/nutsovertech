import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// Navigation menu items with their routes
const navItems = [
  {
    name: "Our Services",
    path: "/services",
    children: [
      { name: "MicroSaas", path: "/services/micro-saas" },
      { name: "AI Consulting", path: "/services/ai-consulting" },
      { name: "Saas Solution", path: "/services/saas-solution" },
      { name: "T Shape Growth", path: "/services/t-shape-growth" },
    ],
  },
  { name: "IP Assets", path: "" },
  { name: "Sales Engine", path: "" },
  { name: "Insights", path: "blog" },
  { name: "About us", path: "about" },
  { name: "Contact Us", path: "contact" },
];

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  // Helper to detect mobile
  const isMobile = () => window.innerWidth < 768;

  return (
    <header className="fixed top-5 z-50 w-full flex justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-2.5 px-4 md:px-10 py-3 bg-[#ffffff99] rounded-[58px] shadow-[0px_4px_12px_#00000014] backdrop-blur-[6.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.5px)_brightness(100%)] w-[95%] md:w-auto max-w-7xl">
        <div className="flex items-center justify-between w-full md:gap-[71px]">
          <Link to="/">
            <img
              className="w-[120px] md:w-[167px] h-auto md:h-[63px] object-contain"
              alt="Company Logo"
              src="/image-41-1.png"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) =>
              item.name === "Our Services" ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    if (!isMobile()) setServicesMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (!isMobile()) setServicesMenuOpen(false);
                  }}
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base hover:bg-transparent"
                    asChild
                    onClick={() => {
                      if (isMobile()) setServicesMenuOpen(prev => !prev);
                    }}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </Button>
                  {/* Submenu */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-3 mt-3 min-w-[240px] bg-white rounded-2xl shadow-2xl py-3 z-50 flex flex-col border border-gray-100 transition-all duration-200 ${
                      servicesMenuOpen
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-2"
                    }`}
                  >
                    {item.children?.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        to={child.path}
                        className="px-6 py-2 my-1 rounded-full text-foundationblackblack-11 text-base font-medium transition-colors duration-150 hover:bg-foundation-blackblack-10/10 hover:text-foundation-blackblack-10 focus:bg-foundation-blackblack-10/20 focus:outline-none"
                        style={{
                          fontFamily: "'Lato', Helvetica",
                        }}
                        onClick={() => {
                          if (isMobile()) setServicesMenuOpen(false);
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  className="p-0 h-auto [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base hover:bg-transparent"
                  asChild
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              )
            )}
          </nav>

          <Button
            className=" hidden md:block px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-white text-base"
            asChild
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="flex md:hidden flex-col w-full gap-4 pt-4">
            {navItems.map((item, index) =>
              item.name === "Our Services" ? (
                <div key={index} className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    className="w-full text-left justify-start [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base"
                    onClick={() => setServicesMenuOpen(prev => !prev)}
                  >
                    {item.name}
                  </Button>
                  {servicesMenuOpen && (
                    <div className="flex flex-col ml-4 border-l border-gray-200 pl-4">
                      {item.children?.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          to={child.path}
                          className="py-1 text-foundationblackblack-11 text-base font-medium"
                          style={{
                            fontFamily: "'Lato', Helvetica",
                          }}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setServicesMenuOpen(false);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full text-left justify-start [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              )
            )}
            <Button
              className="text-white w-full h-auto px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-1 text-base"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
