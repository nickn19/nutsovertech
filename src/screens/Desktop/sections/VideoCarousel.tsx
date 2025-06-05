"use client"

import { useRef, useState, useEffect } from "react"
import { PlayCircleIcon, ArrowLeftCircle, ArrowRightCircle, PauseCircle } from "lucide-react"
// @ts-ignore
import Slider from "react-slick"
// @ts-ignore
import "slick-carousel/slick/slick.css"
// @ts-ignore
import "slick-carousel/slick/slick-theme.css"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export const VideoCarousel = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const [players, setPlayers] = useState<{ [key: number]: any }>({})
  const [isYTReady, setIsYTReady] = useState(false)

  const videoItems = [
    
    {
      id: 1,
      backgroundImage: "/mask-group-11.png",
      title: "Businesses are scaling fast with",
      highlight: "T-Shape Growth",
    },
    {
      id: 2,
      backgroundImage: "/mask-group-12.png",
      title: "WANT QUICK SEO WINS",
      caption: "SWIPE TO KNOW HOW",
    },
    {
      id: 3,
      backgroundImage: "/mask-group-11.png",
      title: "Businesses are scaling fast with",
      highlight: "T-Shape Growth",
    },
    {
      id: 4,
      backgroundImage: "/mask-group-12.png",
      title: "WANT QUICK SEO WINS",
      caption: "SWIPE TO KNOW HOW",
    },
    {
      id: 5,
      type: "youtube",
      youtubeId: "_kqQDCxRCzM",
      title: "YouTube Shorts: T-Shape Growth",
      thumbnail: "https://img.youtube.com/vi/_kqQDCxRCzM/hqdefault.jpg",
      highlight: "T-Shape Growth",
    },
    {
      id: 6,
      type: "youtube",
      youtubeId: "nqye02H_H6I",
      title: "YouTube Shorts: SEO Wins",
      thumbnail: "https://img.youtube.com/vi/nqye02H_H6I/hqdefault.jpg",
      caption: "SWIPE TO KNOW HOW",
    },
  ]

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        setIsYTReady(true)
      }
    } else {
      setIsYTReady(true)
    }
  }, [])

  const createPlayer = (index: number, videoId: string) => {
    if (!isYTReady || players[index]) return

    const player = new window.YT.Player(`youtube-player-${index}`, {
      height: "100%",
      width: "100%",
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: videoId,
        controls: 1,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo()
        },
      },
    })

    setPlayers((prev) => ({
      ...prev,
      [index]: player,
    }))
  }

  const handlePlay = (index: number, videoId: string) => {
    // Pause all other players
    Object.keys(players).forEach((key) => {
      const playerIndex = Number.parseInt(key)
      if (playerIndex !== index && players[playerIndex]) {
        players[playerIndex].pauseVideo()
      }
    })

    setPlayingIndex(index)

    // Create player if it doesn't exist
    if (!players[index] && isYTReady) {
      setTimeout(() => createPlayer(index, videoId), 100)
    } else if (players[index]) {
      players[index].playVideo()
    }
  }

  const handlePause = (index: number) => {
    if (players[index]) {
      players[index].pauseVideo()
    }
    setPlayingIndex(null)
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
              <div className="video-card relative h-[529px] rounded-lg overflow-hidden">
                {item.type === "youtube" ? (
                  <>
                    {playingIndex !== idx && (
                      <div
                        className="w-full h-full bg-black cursor-pointer group relative"
                        onClick={() => handlePlay(idx, item.youtubeId!)}
                        style={{
                          backgroundImage: `url(${item.thumbnail})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="white">
                            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                            <polygon points="26,20 50,32 26,44" fill="white" />
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          {item.highlight ? (
                            <h3 className="text-white text-sm font-bold">
                              {item.title}
                              <br />
                              <span className="text-red-500 text-base">{item.highlight}</span>
                            </h3>
                          ) : (
                            <div>
                              <h3 className="text-white text-base font-bold">{item.title}</h3>
                              {item.caption && (
                                <div className="bg-black/80 text-white text-xs font-medium px-2 py-1 rounded inline-block mt-1">
                                  {item.caption}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {playingIndex === idx && (
                      <div className="relative w-full h-full">
                        <div
                          id={`youtube-player-${idx}`}
                          style={{
                            aspectRatio: "9/16",
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px",
                            background: "black",
                          }}
                        />
                        <button
                          onClick={() => handlePause(idx)}
                          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                          aria-label="Pause video"
                        >
                          <PauseCircle className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
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
                          {item.title}
                          <br />
                          <span className="text-red-500 text-base">{item.highlight}</span>
                        </h3>
                      ) : (
                        <div>
                          <h3 className="text-white text-base font-bold">{item.title}</h3>
                          {item.caption && (
                            <div className="bg-black/80 text-white text-xs font-medium px-2 py-1 rounded inline-block mt-1">
                              {item.caption}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
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
