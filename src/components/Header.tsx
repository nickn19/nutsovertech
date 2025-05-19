import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// Navigation menu items with their routes
const navItems = [
  { name: "Our Services", path: "/services" },
  { name: "IP Assets", path: "/ip-assets" },
  { name: "Sales Engine", path: "/sales-engine" },
  { name: "Insights", path: "/insights" },
  { name: "About us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 z-50 w-full flex justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-2.5 px-4 md:px-10 py-3 bg-[#ffffff99] rounded-[58px] overflow-hidden shadow-[0px_4px_12px_#00000014] backdrop-blur-[6.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.5px)_brightness(100%)] w-[95%] md:w-auto max-w-7xl">
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
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="p-0 h-auto [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base hover:bg-transparent"
                asChild
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          <Button 
            className="hidden md:block px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base"
            asChild
          >
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="flex md:hidden flex-col w-full gap-4 pt-4">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full text-left justify-start [font-family:'Lato',Helvetica] font-medium text-foundationblackblack-11 text-base"
                asChild
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
            <Button 
              className="w-full h-auto px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base"
              asChild
            >
              <Link to="/get-started">Get Started</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 