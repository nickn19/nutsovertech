import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const CaseStudies = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-[34px] w-full md:px-20 px-4 md:py-[30px] py-8">
      <div className="flex items-center justify-between w-full md:flex-row flex-col gap-4">
        <h2 className="[font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 md:text-4xl text-2xl md:text-left text-center">
          Proven Transformations for Every Stage of Growth
        </h2>

        <a href="/blog" className="bg-foundationredred-13 text-foundation-blackblack-1 rounded-[70px] px-4 py-3">
          <span className="[font-family:'Lato',Helvetica] font-medium text-base">
            View All Case Studies
          </span>
        </a>
      </div>

      <Card className="flex md:flex-row flex-col md:h-[410px] h-auto w-full bg-foundationblackblack-3 rounded-[20px] gap-5 items-center overflow-hidden border-none">
        <div className="relative w-full md:w-[827px] h-[410px] bg-[url(/mask-group-10.png)]  bg-cover" />

        <CardContent className="flex flex-col md:w-[388px] w-full items-start gap-10 p-0 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col items-start md:gap-[49px] gap-4 w-full p-3">
            <div className="flex flex-col items-start gap-6 w-full ">
              <div className="flex items-center w-full">
                <h3 className="[font-family:'Lato',Helvetica] font-bold text-foundationredred-13 md:text-2xl text-xl">
                  15 reasons why relying 100% on remote work can turn out to be
                  disastrous
                </h3>
              </div>

              <p className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 md:text-lg text-base">
                Work from home? Why it can prove to be disastrous &apos;If army
                men decide to work from home even one season, we are all
                screwed!&quot; So let&apos;s start by saying that there are few
                professions…
              </p>
            </div>

            <button className="flex items-center justify-center gap-2.5 px-4 py-3 bg-foundation-redred-1 text-foundation-blackblack-10 rounded-[70px] border border-solid border-[#1f1f1f]">
              <span className="[font-family:'Lato',Helvetica] font-medium text-base">
                Read more
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
