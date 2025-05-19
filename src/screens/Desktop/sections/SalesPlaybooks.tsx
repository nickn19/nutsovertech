import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const SalesPlaybooks = (): JSX.Element => {
  // Data for funnel cards
  const funnelStages = [
    {
      id: "tofu",
      title: "Top-of-Funnel (ToFu)",
      description:
        "AI-driven digital marketing, PR, and partnerships to maximize brand visibility and lead generation.",
    },
    {
      id: "mofu",
      title: "Middle-of-Funnel (MoFu)",
      description:
        "High-value free content, data-driven insights, and expert consulting to build trust and engagement.",
    },
    {
      id: "bofu",
      title: "Bottom-of-Funnel (BoFu)",
      description:
        "Proven sales assets, case studies, and strategic follow-ups to drive conversions and customer retention.",
    },
  ];

  return (
    <section className="flex justify-center w-full md:py-[60px] py-8 md:px-28 px-4 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-foundation-blackblack-10 text-center md:mb-16 mb-8 max-w-[902px] font-['Playfair',Helvetica]">
          Accelerating Growth Through a Proven Sales Engine
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:mb-16 mb-8">
          {/* Funnel Visualization */}
          <div className="relative w-full md:w-[518px] h-auto">
          
            <img
              className="size-full"
              alt="Vector"
              src="/tofu-mofu.png"
            />
            
            
          </div>

          {/* Funnel Cards */}
          <div className="flex flex-col md:gap-[39px] gap-8 w-full md:w-[429px]">
            {funnelStages.map((stage, index) => (
              <Card
                key={stage.id}
                className="bg-foundation-blackblack-1 rounded-[20px_0px_20px_0px] shadow-[0px_4px_12px_#00000014]"
              >
                <CardContent className="flex flex-col items-start gap-3 p-[30px]">
                  <h3 className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-10 text-2xl">
                    {stage.title}
                  </h3>
                  <p className="font-['Lato',Helvetica] font-light text-foundation-blackblack-10 text-base">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button className="bg-foundationredred-13 text-foundation-blackblack-1 rounded-[70px] px-4 py-3 font-['Lato',Helvetica] font-medium text-base">
          Learn About Our Sales Playbooks
        </Button>
      </div>
    </section>
  );
};
