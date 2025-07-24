import React, { useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

// @ts-ignore
import Slider from "react-slick";
// @ts-ignore
import $ from "jquery";

// CSS imports
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";

// Media publication data for mapping
const mediaPublications = [
  {
    id: 1,
    name: "Cxo",
    image: "/cxo-1-1024x772.png",
  },
  {
    id: 2,
    name: "Cnbc",
    image: "/cnbc.png",
  },
  {
    id: 3,
    name: "Ficci",
    image: "/ficci-1.png",
  },
  {
    id: 4,
    name: "Cxo",
    image: "/cxo-1-1024x772.png",
  },
  {
    id: 5,
    name: "Cnbc",
    image: "/cnbc.png",
  },
];

export const MediaCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Settings for slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows since we're using custom ones
    className: "media-carousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="flex flex-col w-full items-start justify-center gap-6 px-4 md:px-20 py-8">
     <div className="flex items-end md:flex-row flex-col gap-4 justify-between w-full">
        <div className="flex flex-col items-start justify-center gap-1 flex-1">
          <h2 className="font-bold md:text-4xl text-2xl text-foundationblackblack-11 [font-family:'Playfair',Helvetica] tracking-normal md:text-left text-center">
          Our Media Features
          </h2>
          <p className="md:text-lg text-base text-foundationblackblack-11 [font-family:'Lato',Helvetica] font-light tracking-normal md:text-left text-center">
          Discover how our AI-driven innovations are making headlines in top media and industry publications.
          </p>
        </div>
        
        {/* Custom navigation arrows */}
        <div className="flex items-center gap-4">
          {/* <button 
            onClick={handlePrev}
            className="video-arrow-prev  rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Previous slide"
          > */}
            {/* <ArrowLeftCircle size={32} />
          </button>
          <button 
            onClick={handleNext}
            className="video-arrow-next  rounded-full  text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Next slide"
          > */}
          <button
            onClick={handlePrev}
            className="media-arrow-prev rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c54648"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z"/></svg>
          </button>
          <button
            onClick={handleNext}
            className="media-arrow-next rounded-full transition-colors"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c54648"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/></svg>
          </button>
            {/* <ArrowRightCircle size={32} /> */}
          {/* </button> */}
        </div>
      </div>

      <div className="media-carousel-container w-full">
        <Slider ref={sliderRef} {...settings}>
          {mediaPublications.map((publication) => (
            <div key={publication.id} className="p-3">
              <div className="media-card bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  className="h-[334px] object-cover w-full"
                  alt={publication.name}
                  src={publication.image}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};