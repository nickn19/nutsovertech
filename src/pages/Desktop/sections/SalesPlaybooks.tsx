import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const SalesPlaybooks = (): JSX.Element => {
  // Data for funnel cards
  const funnelStages = [
    {
      id: "Depth",
      title: "Depth",
      description:
        "Proven execution in core growth levers like Paid Media, PR, SEO, and Influencer Marketing — driving sharp outcomes through vertical specialization.",
    },
    {
      id: "Breadth",
      title: "Breadth",
      description:
        "Cross-functional alignment across HR, Ops, IP, Sales, Legal — enabling scalable, repeatable growth beyond just acquisition.",
    },
    {
      id: "AI Workforce",
      title: "AI Workforce",
      description:
        "Playbook-driven AI agents that automate execution, decision-making, and reporting — reducing dependency on headcount while increasing speed and consistency.",
    },
  ];

  return (
    <section className="flex justify-center w-full md:py-[60px] py-8 md:px-28 px-4 [background:linear-gradient(136deg,rgba(151,51,53,0.03)_0%,rgba(197,70,72,0.09)_37%,rgba(51,51,51,0.12)_100%)]">
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h2 className="md:text-4xl text-2xl font-bold text-foundation-blackblack-10 text-center md:mb-16 mb-8 max-w-[902px] font-['Playfair',Helvetica]">
          Accelerating Growth Through a Proven Sales Engine
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-16 md:mb-16 mb-8">
          {/* Funnel Visualization */}
          <div className="relative w-full md:w-1/2 h-auto">
          
            <img
              className="size-full"
              alt="Vector"
              src="/T.png"
            />
          </div>

          {/* Funnel Cards */}
          <div className="flex flex-col md:gap-[39px] gap-8 w-full md:w-1/2">
            {funnelStages.map((stage, index) => (
              <Card
                key={stage.id}
                className="bg-foundation-blackblack-1 rounded-[20px_0px_20px_0px] shadow-[0px_4px_12px_#00000014]"
              >
                <CardContent className="flex flex-col items-start gap-3 p-[30px]">
                  <h3 className="font-['Lato',Helvetica] font-bold text-foundation-blackblack-10 md:text-2xl text-xl">
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
          <a href="services/t-shape-growth"> Dive deep on why it matters! </a>
        </Button>
      </div>
    </section>
  );
};
