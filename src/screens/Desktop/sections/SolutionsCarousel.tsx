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

type SolutionCard = {
  id: number;
  title: string;
  description: string;
};

export const SolutionsCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  // Data for solution cards to enable mapping
  const solutionCards: SolutionCard[] = [
    {
      id: 1,
      title: "Platform as a Service (4AY PaaS)",
      description:
        "A powerful Platform-as-a-Service that enables rapid AI application deployment without complex development, accelerating time-to-market.",
    },
    {
      id: 2,
      title: "SaaS Solutions",
      description:
        "Scalable, subscription-based AI tools designed for automation, optimization, and business efficiency across industries.",
    },
    {
      id: 3,
      title: "MicroSaaS",
      description:
        "Lightweight, niche AI solutions tailored to solve specific business challenges, offering high impact with minimal overhead.",
    },
    {
      id: 4,
      title: "AI Consulting",
      description:
        "Expert guidance on implementing AI strategies that align with your business goals and drive meaningful transformation.",
    },
  ];

  // Settings for slick carousel
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: true,
    className: "ais2023__ai-solutions-carousel",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          dots: true
        }
      }
    ],
    beforeChange: (current: number, next: number) => {
      // Reset all slides
      $('.ais2023__slide-panel').removeClass('ais2023__slide-panel--accent-theme').addClass('ais2023__slide-panel--light-theme');
      
      // Find the next slide and apply accent theme
      const slides = document.querySelectorAll('.slick-slide');
      if (slides[next]) {
        const panel = slides[next].querySelector('.ais2023__slide-panel');
        if (panel) {
          panel.classList.remove('ais2023__slide-panel--light-theme');
          panel.classList.add('ais2023__slide-panel--accent-theme');
        }
      }
    },
    afterChange: () => {
      // Ensure correct theme after changes
      updateThemeClasses();
    }
  };

  // Function to update theme classes
  const updateThemeClasses = () => {
    // Remove accent theme from all slides
    $('.ais2023__slide-panel').removeClass('ais2023__slide-panel--accent-theme').addClass('ais2023__slide-panel--light-theme');
    
    // Add accent theme to center slide
    $('.slick-center .ais2023__slide-panel').removeClass('ais2023__slide-panel--light-theme').addClass('ais2023__slide-panel--accent-theme');
  };

  useEffect(() => {
    // Apply themes on init with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      updateThemeClasses();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center  px-4 md:px-20 md:py-[30px] py-8 w-full">
      <h2 className="max-w-[735px] font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center leading-normal">
        Our proprietary Solutions, Built to Scale Your Business
      </h2>

      <div className="ais2023__carousel-container w-full">
        <Slider ref={sliderRef} {...settings}>
          {solutionCards.map((card) => (
            <div key={card.id}>
              <div className="ais2023__slide-panel ais2023__slide-panel--light-theme">
                <h3 className="ais2023__slide-panel__heading">{card.title}</h3>
                <p className="ais2023__slide-panel__content">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Button className="bg-foundationblackblack-11 text-foundation-blackblack-1 rounded-[70px] px-4 py-3">
        <span className="font-['Lato',Helvetica] font-medium text-base whitespace-nowrap">
          Explore Our IP Assets
        </span>
      </Button>
    </section>
  );
};
