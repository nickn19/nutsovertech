import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

const useCases = [
    {
        title: "Startups & Scale-Ups:",
        description: "AI-powered GTM & growth acceleration",
    },
    {
        title: "Enterprises",
        description: "Efficiency & automation for business operations",
    },
    {
        title: "Finance & E-commerce",
        description: "Data-driven insights & revenue optimisation",
    },
    {
        title: "Technology & SaaS",
        description: "Faster AI adoption, innovation & market expansion",
    },
    {
        title: "Technology & SaaS",
        description: "Faster AI adoption, innovation & market expansion",
    },
    // Add more items if needed
];

const UseCaseCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4, // You can make this responsive
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
        arrows: false, // Disable default arrows since we'll use custom ones
        beforeChange: (oldIndex: number, newIndex: number) => setActiveSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="bg-gray-100 text-center md:py-20 py-8 px-4 md:px-20">
            <h2 className="md:text-[42px] text-3xl text-center font-bold font-['Playfair',Helvetica] text-foundationredred-13 mb-6">Most Common Use Cases</h2>

            <div className="md:px-6 md:py-12 px-0 py-6">
                <Slider ref={sliderRef} {...settings}>
                    {useCases.map((item, index) => (
                        <div key={index}>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out mx-2 rounded-2xl mb-4 p-6 shadow-md bg-white flex flex-col items-center ${index === activeSlide ? "h-[440px] mt-0 " : "h-[150px] mt-[290px] "
                                    }`}
                            >
                                {index === activeSlide && (
                                    <div className="w-64 h-64 bg-red-50 flex items-center justify-center mb-4">
                                        <img src="/placeholder-image.png" alt="usecase1" />
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-lg text-thin text-foundation-blackblack-10">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Navigation Arrows - Positioned above CTA button */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={goToPrev}
                    className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
                    aria-label="Previous use case"
                >
                    <ArrowLeft className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors" />
                </button>
                
                <button
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center group border border-gray-200"
                    aria-label="Next use case"
                >
                    <ArrowRight className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors" />
                </button>
            </div>

            {/* CTA Button */}
            <button className="whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground shadow inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-foundationredred-13 rounded-[70px] hover:bg-foundationredred-13/90">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Explore your Industry Use Case
                </span>
            </button>
        </div>
    );
};

export default UseCaseCarousel;
