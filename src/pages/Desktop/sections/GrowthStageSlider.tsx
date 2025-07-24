import React, { useEffect } from "react";
import { Button } from "../../../components/ui/button";

export const GrowthStageSlider = (): JSX.Element => {
  // Data for the growth stage cards
  const growthStages = [
    {
      id: 1,
      title: "Startups",
      description:
        "Launch with structured chaos.We help founders go 0→1 by deploying AI-led GTM, automated funnels, and playbooks that scale without burn.",
      imageSrc: "/mask-group-4.png",
      class: "moon",
    },
    {
      id: 2,
      title: "Growth Stage",
      description:
        "You’ve found product-market fit — now double efficiency.Our T-Shaped Growth system layers AI across sales, retention, and ops to 2X outcomes with the same inputs",
      imageSrc: "/mask-group-5.png",
      class: "mars",
    },
    {
      id: 3,
      title: "Enterprises",
      description:
        "We transform complexity into scalable systems.AI workforces + full-funnel visibility = operational speed, cross-team clarity, and measurable GTM lift.",
      imageSrc: "/mask-group-6.png",
      class: "titan",
    },
  ];

  useEffect(() => {
    // Initialize the slider when component mounts
    const sliderInit = () => {
      const sliderSection = document.getElementById("star-slider-section");
      if (!sliderSection) return;

      const stars = sliderSection.querySelectorAll(".star");
      let currentIndex = 0;

      const expandStar = (index: number) => {
        stars.forEach((s) => s.classList.remove("expanded"));
        stars[index].classList.add("expanded");
      };

      const nextStar = () => {
        currentIndex = (currentIndex + 1) % stars.length;
        expandStar(currentIndex);
      };

      stars.forEach((star, index) => {
        star.addEventListener("click", () => {
          currentIndex = index;
          expandStar(currentIndex);
        });
      });

      expandStar(currentIndex);
      const interval = setInterval(nextStar, 3000); // autoplay every 3 seconds

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    };

    const timer = setTimeout(() => {
      sliderInit();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center  justify-center gap-10 md:px-[114px] px-4 md:py-[60px] py-8 bg-foundationblackblack-3">
      <div className="flex md:flex-row flex-col items-center gap-4 justify-between w-full">
        <h2 className="md:w-[735px] w-full [font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 md:text-4xl text-2xl">
          Tailored Advisory for Every Growth Stage
        </h2>

        <Button className="px-4 py-3 bg-foundationredred-13 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base">
          Discover Our Services
        </Button>
      </div>

      <div className="stars" id="star-slider-section">
        {growthStages.map((stage) => (
          <div key={stage.id} className={`star ${stage.class}`}>
            <h2>
              {stage.title}
              <p>{stage.description}</p>
            </h2>
            <img src={stage.imageSrc} alt={stage.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
