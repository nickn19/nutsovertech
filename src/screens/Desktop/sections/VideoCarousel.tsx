"use client"

import React, { useRef, useState, useEffect } from "react"
import { ArrowLeftCircle, ArrowRightCircle, PauseCircle } from "lucide-react"
// @ts-ignore
import Slider from "react-slick"
// @ts-ignore
import "slick-carousel/slick/slick.css"
// @ts-ignore
import "slick-carousel/slick/slick-theme.css"

export const VideoCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null)
  const iframesRef = useRef<{ [key: number]: HTMLIFrameElement | null }>({})
  const [currentSlide, setCurrentSlide] = useState(0)

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
    afterChange: (current: number) => {
      setCurrentSlide(current)
      pauseAllVideos()
    },
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1, dots: true } },
    ],
  }

  const pauseAllVideos = (exceptIndex?: number) => {
    Object.entries(iframesRef.current).forEach(([key, iframe]) => {
      if (iframe && Number(key) !== exceptIndex) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        )
      }
    })
  }

  const handleMessage = (event: MessageEvent) => {
    if (!event.data) return
    try {
      const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
      if (data.event === "onStateChange") {
        if (data.info === 1) {
          // playing → pause others
          const playingIndex = Object.entries(iframesRef.current).findIndex(
            ([, iframe]) => iframe?.contentWindow === event.source
          )
          pauseAllVideos(playingIndex)
        }
        if (data.info === 0) {
          // ended → go to next
          const playingIndex = Object.entries(iframesRef.current).findIndex(
            ([, iframe]) => iframe?.contentWindow === event.source
          )
          const nextIndex = (playingIndex + 1) % videoItems.length
          sliderRef.current?.slickGoTo(nextIndex)
        }
      }
    } catch {
      // Ignore unrelated messages
    }
  }

  useEffect(() => {
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  useEffect(() => pauseAllVideos, [])

  const handlePrev = () => sliderRef.current?.slickPrev()
  const handleNext = () => sliderRef.current?.slickNext()

  return (
    <section className="flex flex-col items-center justify-center md:gap-[34px] gap-4 w-full md:px-20 px-4 md:py-[30px] py-8">
      <div className="flex items-end md:flex-row flex-col gap-4 justify-between w-full">
        <div className="flex flex-col items-start justify-center gap-1 flex-1">
          <h2 className="font-bold text-4xl text-foundationblackblack-11 [font-family:'Playfair',Helvetica] tracking-normal md:text-left text-center">
            AI in Action: Insights and Innovations
          </h2>
          <p className="text-lg text-foundationblackblack-11 [font-family:'Lato',Helvetica] font-light tracking-normal md:text-left text-center">
            Explore expert talks, success stories, and deep dives into AI-driven growth—watch, learn, and stay ahead.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="video-arrow-prev rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeftCircle size={32} />
          </button>
          <button
            onClick={handleNext}
            className="video-arrow-next rounded-full text-slate-400 hover:text-foundationredred-13 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
      </div>

      <div className="video-carousel-container w-full max-w-[1282px]">
        <Slider ref={sliderRef} {...settings}>
          {videoItems.map((item, idx) => (
            <div key={item.id} className="p-3">
              <div className="relative w-full h-[480px] rounded-lg overflow-hidden">
                <div className="relative w-full h-full aspect-[9/16]">
                  <iframe
                    ref={(el) => (iframesRef.current[idx] = el)}
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${item.videoId}?enablejsapi=1&rel=0&modestbranding=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* <button
                    onClick={() => pauseAllVideos()}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
                    aria-label="Pause video"
                  >
                    <PauseCircle className="w-6 h-6 text-white" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
