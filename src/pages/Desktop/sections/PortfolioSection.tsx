import React, { useEffect, useRef } from "react";
import { Button } from "../../../components/ui/button";

// @ts-ignore
import Slider from "react-slick";
// @ts-ignore
import $ from "jquery";

// CSS imports
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";

export const PortfolioSection = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  // Portfolio items data for mapping
  const portfolioItems = [
    {
      id: 1,
      image: "/mask-group.png",
      alt: "Mask group",
      description: "AI-Led Digital transformation company",
    },
    {
      id: 2,
      image: "/mask-group-1.png",
      alt: "Mask group",
      description:
        "Making installation and using private AI infrastructure as simple as WordPress",
    },
    {
      id: 3,
      image: "/mask-group-2.png",
      alt: "Mask group",
      description: "UK based diagnostics\nstart up for Scan types",
    },
    {
      id: 4,
      image: "/D8acx.png",
      alt: "Mask group",
      description: "Empower Your Business with AI-Powered Marketing Automation",
    },
    {
      id: 5,
      image: "/varseno.jpg",
      alt: "Mask group",
      description: "Custom AI Workforce And Software Development Company",
    },
  ];

  // Settings for slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    className: "portfolio-carousel",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Update carousel when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="portfolio" className="flex flex-col items-start justify-center gap-8 md:py-[60px] py-8 md:px-20 px-4 relative  [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      <div className="flex flex-col items-center justify-center gap-[21px] relative self-stretch w-full">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 md:text-4xl text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Who we are
        </h2>

        <p className="relative max-w-[918px] w-full [font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 md:text-2xl text-lg text-center tracking-[0] leading-[34px]">
          We help businesses achieve rapid ROI and scalable growth with proven
          AI playbooks—no experimentation, no custom development. Our
          ready-to-deploy solutions and trusted ecosystem ensure seamless AI
          adoption for lasting impact.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 relative self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full">
          <h3 className="self-stretch [font-family:'Playfair',Helvetica] font-medium text-foundationredred-13 text-[28px] text-center leading-[34px] relative mt-[-1.00px] tracking-[0]">
            Our Portfolio
          </h3>

          <div className="portfolio-carousel-container w-full">
            <Slider ref={sliderRef} {...settings}>
              {portfolioItems.map((item) => (
                <div key={item.id} className="p-3">
                  <div className="portfolio-card flex flex-col h-[250px] items-center justify-center gap-6 px-5 py-[30px] bg-foundation-blackblack-1 rounded-3xl backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <img
                      className="relative w-auto h-[77.91px]"
                      alt={item.alt}
                      src={item.image}
                    />
                    <p className="relative self-stretch [font-family:'Lato',Helvetica] font-bold text-foundationblackblack-11 text-lg text-center tracking-[0] leading-[normal] whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <p className="relative max-w-[892px] w-full [font-family:'Lato',Helvetica] font-light text-foundationblackblack-11 md:text-4xl text-2xl text-center tracking-[0] leading-[normal]">
          Purpose-Built AI Workforces for Ambitious Companies — Whether You’re Starting Up or Scaling Up.
        </p>

        <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-foundationredred-13 rounded-[70px] hover:bg-foundationredred-13/90">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Learn about our Journey
          </span>
        </Button>
      </div>
    </section>
  );
};