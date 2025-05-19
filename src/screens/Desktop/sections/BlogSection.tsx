import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

// Define the card data for mapping
const insightCards = [
  {
    id: 1,
    image: "/mask-group-7.png",
    title: "Listen to your customers, but not before your soul.",
    description:
      'Why startups that go too far implementing all customer feedbacks end up signing up for failure "A customer is the most important visitor on our premises.',
    bgColor: "bg-foundation-redred-1",
  },
  {
    id: 2,
    image: "/mask-group-8.png",
    title: "A case for B-Players",
    description:
      "Defining the B-player The term B-player comes from the world of sports where terminologies like A-player, B player, B-team, are frequently used.",
    bgColor: "bg-foundation-blackblack-1",
  },
  {
    id: 3,
    image: "/mask-group-9.png",
    title: "Corporate politics vs the perception of it",
    description:
      "I get that a lot, every day – Stories of failure wrapped in linen of how the world is unfair and unjust for not granting what one deserves ( in their own minds at least ).",
    bgColor: "bg-foundation-blackblack-1",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-[34px] w-full md:px-20 px-4 md:py-[60px] py-8">
      <div className="flex md:flex-row flex-col gap-4 items-center md:justify-between justify-center w-full">
        <h2 className="[font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 text-4xl md:text-left text-center">
          Insights to Drive Smarter Decisions
        </h2>

        <Button className="px-4 py-3 bg-foundationredred-13 rounded-[70px] text-foundation-blackblack-1 hover:bg-foundationredred-13/90">
          <span className="[font-family:'Lato',Helvetica] font-medium text-base">
            Explore More Insights
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-[30px] md:flex-row flex-col">
        {insightCards.map((card) => (
          <Card
            key={card.id}
            className="w-full h-[510px] rounded-[16px] overflow-hidden shadow-none border-none"
          >
            <img
                className="w-full h-[302px] object-cover"
                alt="Insight image"
                src={card.image}
              />

              <div
                className={`${card.bgColor} rounded-b-[16px] p-[21px] `}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="[font-family:'Lato',Helvetica] font-bold text-foundationredred-13 text-2xl flex-1">
                        {card.title}
                      </h3>

                      <button
                        className="w-10 h-10 bg-foundation-redred-4 flex justify-center items-center rounded-[20px] hover:bg-foundation-redred-4/90"
                      >
                        <ArrowRightIcon className="w-6 h-6 text-foundationredred-13" />
                      </button>
                    </div>

                    <p className="[font-family:'Lato',Helvetica] font-light text-foundationblackblack-11 text-lg">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
