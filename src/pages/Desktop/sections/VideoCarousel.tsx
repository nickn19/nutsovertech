"use client"

import React, { useRef, useState } from "react"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"
// @ts-ignore
import Slider from "react-slick"
// @ts-ignore
import "slick-carousel/slick/slick.css"
// @ts-ignore
import "slick-carousel/slick/slick-theme.css"

export const VideoCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null)

  const videoItems = [
    { id: 1, videoId: "Bh5cNesp3DU", title: "Profit Increase Strategy" },
    { id: 2, videoId: "POAq_avwxqA", title: "Triad Growth Strategy" },
    { id: 3, videoId: "X8NFozRrwSU", title: "Funnel Strategy" },
    { id: 4, videoId: "aXgouABX8s4", title: "T Shape Marketing" },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1, dots: true } },
    ],
  }

  const handlePrev = () => sliderRef.current?.slickPrev()
  const handleNext = () => sliderRef.current?.slickNext()

  return (
    <section className="flex flex-col items-center justify-center md:gap-[34px] gap-4 w-full md:px-20 px-4 md:py-[30px] py-8">
      <div className="flex items-end md:flex-row flex-col gap-4 justify-between w-full">
        <div className="flex flex-col items-start justify-center gap-1 flex-1">
          <h2 className="font-bold md:text-4xl text-2xl text-foundationblackblack-11 [font-family:'Playfair',Helvetica] tracking-normal md:text-left text-center">
            AI in Action: Insights and Innovations
          </h2>
          <p className="md:text-lg text-base text-foundationblackblack-11 [font-family:'Lato',Helvetica] font-light tracking-normal md:text-left text-center">
            Explore expert talks, success stories, and deep dives into AI-driven growth—watch, learn, and stay ahead.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* <button
            onClick={handlePrev}
            className="video-arrow-prev rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeftCircle size={32} />
          </button> */}
          {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#C54648"/>
<path d="M24 16L16 24L24 32" fill="#C54648"/>
<path d="M24 16L16 24M16 24L24 32M16 24H32M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
          <button
            onClick={handlePrev}
            className="video-arrow-prev rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c54648"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z"/></svg>
          </button>
          <button
            onClick={handleNext}
            className="video-arrow-next rounded-full transition-colors"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c54648"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/></svg>
          </button>
          {/* <button
            onClick={handleNext}
            className="video-arrow-next rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRightCircle size={32} />
          </button> */}
        </div>
       
      </div>

      <div className="video-carousel-container w-full max-w-[1282px]">
        <Slider ref={sliderRef} {...settings}>
          {videoItems.map((item) => (
            <div key={item.id} className="p-3">
              <div className="relative w-full h-[480px] rounded-lg overflow-hidden">
                <div className="relative w-full h-full aspect-[9/16]">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                    title={item.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
