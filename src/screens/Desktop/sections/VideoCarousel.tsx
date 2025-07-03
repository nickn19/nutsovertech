"use client"

import React, { useRef, useState, useEffect } from "react"
import { PlayCircleIcon, ArrowLeftCircle, ArrowRightCircle, PauseCircle } from "lucide-react"
// @ts-ignore
import Slider from "react-slick"
// @ts-ignore
import "slick-carousel/slick/slick.css"
// @ts-ignore
import "slick-carousel/slick/slick-theme.css"
// @ts-ignore
import videojs from "video.js"
import 'video.js/dist/video-js.css'

// Simplified VideoJS Component
const VideoJS: React.FC<{
  options: any
  onReady?: (player: any) => void
  onEnded?: () => void
}> = ({ options, onReady, onEnded }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [playerCreated, setPlayerCreated] = useState(false)

  // Create player on mount
  useEffect(() => {
    // Only create the player once the container is in the DOM
    if (!containerRef.current || playerCreated) return
    
    // Create a unique ID for this player instance
    const playerId = `video-js-${Math.random().toString(36).substr(2, 9)}`
    
    // Create the video element
    const videoEl = document.createElement('video')
    videoEl.className = 'video-js vjs-big-play-centered vjs-default-skin'
    videoEl.id = playerId
    
    // Add it to the container
    containerRef.current.appendChild(videoEl)
    
    // Initialize videojs with a slight delay to ensure DOM is ready
    setTimeout(() => {
      if (videoEl) {
        try {
          const player = videojs(playerId, {
            ...options,
            loop: false
          })
          
          playerRef.current = player
          setPlayerCreated(true)
          
          if (onReady) {
            onReady(player)
          }
          
          if (onEnded) {
            player.on('ended', onEnded)
          }
        } catch (e) {
          console.error("Error initializing video.js:", e)
        }
      }
    }, 100)
    
    // Cleanup function
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.dispose()
        } catch (e) {
          console.error("Error disposing player:", e)
        }
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-full w-full"
      style={{ borderRadius: '12px', overflow: 'hidden' }}
    />
  )
}

export const VideoCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const playersRef = useRef<{ [key: number]: any }>({})

  // Clean up all players when component unmounts
  useEffect(() => {
    return () => {
      Object.values(playersRef.current).forEach((player) => {
        if (player && typeof player.dispose === 'function') {
          try {
            player.dispose()
          } catch (e) {
            console.error("Error disposing player:", e)
          }
        }
      })
    }
  }, [])

  const videoItems = [
    {
      id: 1,
      type: "video",
      sources: [
        {
          src: "/videos/profit-increase-stratergy.mp4",
          type: "video/mp4"
        }
      ],
      title: "Profit Increase Strategy",
      thumbnail: "/mask-group-14.png",
    },
    {
      id: 2,
      type: "video",
      sources: [
        {
          src: "/videos/triad-growth-strategy.mp4",
          type: "video/mp4"
        }
      ],
      title: "Triad Growth Strategy",
      thumbnail: "/mask-group-13.png",
    },
    {
      id: 3,
      type: "video",
      sources: [
        {
          src: "/videos/funnel-stratergy.mp4",
          type: "video/mp4"
        }
      ],
      title: "Funnel Strategy",
      thumbnail: "/mask-group-14.png",
    },
    {
      id: 4,
      type: "video",
      sources: [
        {
          src: "/videos/Slide 18.mp4",
          type: "video/mp4"
        }
      ],
      title: "T Shape Marketing",
      thumbnail: "/mask-group-13.png",
    },
    {
      id: 5,
      type: "video",
      sources: [
        {
          src: "/videos/t-shape-marketting.mp4",
          type: "video/mp4"
        }
      ],
      title: "T Shape Marketing",
      thumbnail: "/mask-group-14.png",
    },
  ]

  const handlePlayerReady = (player: any, index: number) => {
    // Store player reference
    playersRef.current[index] = player
    
    // Pause all other players
    Object.keys(playersRef.current).forEach(key => {
      const playerIndex = Number.parseInt(key)
      if (playerIndex !== index && playersRef.current[playerIndex]) {
        try {
          playersRef.current[playerIndex].pause()
        } catch (e) {
          console.error("Error pausing player:", e)
        }
      }
    })
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    className: "video-carousel",
    afterChange: (current: number) => {
      setCurrentSlide(current)
    },
    responsive: [
      {
        breakpoint: 1200,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }

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
              <div className="video-card relative h-[480px] rounded-lg overflow-hidden">
                {playingIndex !== idx ? (
                  <div
                    className="w-full h-full bg-black cursor-pointer group relative"
                    onClick={() => {
                      // Pause any currently playing video
                      if (playingIndex !== null && playersRef.current[playingIndex]) {
                        try {
                          playersRef.current[playingIndex].pause()
                        } catch (e) {
                          console.error("Error pausing player:", e)
                        }
                      }
                      
                      setPlayingIndex(idx)
                      if (sliderRef.current && currentSlide !== idx) {
                        sliderRef.current.slickGoTo(idx)
                      }
                    }}
                    style={{
                      backgroundImage: `url(${item.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center  group-hover:bg-black/60 transition">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="white">
                        <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                        <polygon points="26,20 50,32 26,44" fill="white" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      {/* <h3 className="text-white text-base font-bold">{item.title}</h3> */}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <VideoJS
                      key={`video-${idx}`}
                      options={{
                        sources: item.sources,
                        autoplay: true,
                        controls: true,
                        responsive: true,
                        fluid: true,
                        aspectRatio: "9:16",
                        playbackRates: [0.5, 1, 1.5, 2],
                        poster: item.thumbnail,
                        muted: false,
                        preload: "auto",
                      }}
                      onReady={(player) => handlePlayerReady(player, idx)}
                      onEnded={() => {
                        const nextIndex = (idx + 1) % videoItems.length
                        
                        // Clean up current player
                        if (playersRef.current[idx]) {
                          try {
                            playersRef.current[idx].pause()
                          } catch (e) {
                            console.error("Error pausing player:", e)
                          }
                        }
                        
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(nextIndex)
                        }
                        
                        // Short delay before playing next
                        setTimeout(() => setPlayingIndex(nextIndex), 300)
                      }}
                    />
                    <button
                      onClick={() => {
                        if (playersRef.current[idx]) {
                          try {
                            playersRef.current[idx].pause()
                          } catch (e) {
                            console.error("Error pausing player:", e)
                          }
                        }
                        setPlayingIndex(null)
                      }}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
                      aria-label="Close video"
                    >
                      <PauseCircle className="w-6 h-6 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}