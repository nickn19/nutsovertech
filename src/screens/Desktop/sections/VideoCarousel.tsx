import React, { useRef } from "react";
import { PlayCircleIcon, ChevronLeftCircle, ChevronRightCircle, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

// @ts-ignore
import Slider from "react-slick";
// @ts-ignore
import $ from "jquery";

// CSS imports
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";

export const VideoCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

  // Video data for the carousel
  const videoItems = [
    { 
      id: 1, 
      backgroundImage: "/mask-group-11.png", 
      title: "Businesses are scaling fast with", 
      highlight: "T-Shape Growth" 
    },
    { 
      id: 2, 
      backgroundImage: "/mask-group-12.png", 
      title: "WANT QUICK SEO WINS", 
      caption: "SWIPE TO KNOW HOW" 
    },
    { 
      id: 3, 
      backgroundImage: "/mask-group-11.png", 
      title: "Businesses are scaling fast with", 
      highlight: "T-Shape Growth" 
    },
    { 
      id: 4, 
      backgroundImage: "/mask-group-12.png", 
      title: "WANT QUICK SEO WINS", 
      caption: "SWIPE TO KNOW HOW" 
    },
    { 
      id: 5, 
      backgroundImage: "/mask-group-11.png", 
      title: "Businesses are scaling fast with", 
      highlight: "T-Shape Growth" 
    },
  ];

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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows since we're using custom ones
    className: "video-carousel",
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
          dots: true
        }
      }
    ]
  };

  return (
    <section className="flex flex-col items-center justify-center md:gap-[34px] gap-4 w-full md:px-20 px-4 md:py-[30px] py-8">
      <div className="flex items-end md:flex-row flex-col gap-4 justify-between w-full">
        <div className="flex flex-col items-start justify-center gap-1 flex-1">
          <h2 className="font-bold text-4xl text-foundationblackblack-11 [font-family:'Playfair',Helvetica] tracking-normal md:text-left text-center">
            AI in Action: Insights and Innovations
          </h2>
          <p className="text-lg text-foundationblackblack-11 [font-family:'Lato',Helvetica] font-light tracking-normal md:text-left text-center">
            Explore expert talks, success stories, and deep dives into AI-driven
            growth—watch, learn, and stay ahead.
          </p>
        </div>
        
        {/* Custom navigation arrows */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev}
            className="video-arrow-prev  rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeftCircle size={32} />
          </button>
          <button 
            onClick={handleNext}
            className="video-arrow-next  rounded-full  text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
      </div>

      <div className="video-carousel-container w-full max-w-[1282px]">
        <Slider ref={sliderRef} {...settings}>
          {videoItems.map((item) => (
            <div key={item.id} className="p-3">
              <div className="video-card relative h-[529px] rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                >
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    aria-label="Play video"
                  >
                    <PlayCircleIcon className="w-[60px] h-[60px] text-white play-icon" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {item.highlight ? (
                      <h3 className="text-white text-sm font-bold">
                        {item.title}<br />
                        <span className="text-red-500 text-base">{item.highlight}</span>
                      </h3>
                    ) : (
                      <div>
                        <h3 className="text-white text-base font-bold">
                          {item.title}
                        </h3>
                        {item.caption && (
                          <div className="bg-black/80 text-white text-xs font-medium px-2 py-1 rounded inline-block mt-1">
                            {item.caption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};