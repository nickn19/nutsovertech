import { ChevronDownIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../../components/ui/select";

export const ContactUs = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "name", label: "Name", type: "full-width" },
    { id: "email", label: "Email", type: "half-width" },
    { id: "phone", label: "Phone number", type: "half-width" },
    { id: "company", label: "Company name", type: "half-width" },
    { id: "stage", label: "Business Stage", type: "dropdown", half: true },
    { id: "inquiry", label: "Inquiry Type", type: "dropdown", full: true },
  ];

  // Office locations data
  const officeLocations = [
    {
      country: "INDIA",
      address:
        "Office No. 402, Nandan Pro Biz, Baner, Pune – 411045, Maharashtra, India",
    },
    {
      country: "USA",
      address: "16192 Coastal Highway, Lewes, Delaware, DE 19958, USA",
    },
  ];

  return (
    <section className="flex items-center justify-center gap-2.5 pt-10 md:pb-[60px] pb-8 px-4 md:px-[190px] bg-foundation-redred-3">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-[60px] gap-8 w-full max-w-[1200px]">
        {/* Get in Touch Section */}
        <div className="flex flex-col items-center justify-center gap-10 w-full md:w-auto">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h2 className="[font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 text-4xl text-center">
                Get in Touch
              </h2>
            </div>

            <p className="w-full md:w-[520px] [font-family:'Inter',Helvetica] font-normal text-foundationblackblack-11 text-xl text-center">
              Let&apos;s connect and explore how AI can drive your growth—reach
              out to us today!&#34;
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <Card className="w-full md:w-[612px] bg-foundation-redred-6 rounded-2xl border-none">
              <CardContent className="flex flex-col items-center justify-center gap-6 p-5">
                {/* Name field - full width */}
                <div className="flex items-start gap-[30px] w-full">
                  <div className="flex flex-col items-start justify-center gap-2 w-full">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Name
                    </label>
                    <Input className="h-12 bg-white rounded-[10px]" />
                  </div>
                </div>

                {/* Email and Phone fields - half width each */}
                <div className="flex flex-col md:flex-row items-start gap-[30px] w-full">
                  <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/2">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Email
                    </label>
                    <Input className="h-12 bg-white rounded-[10px]" />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/2">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Phone number
                    </label>
                    <Input className="h-12 bg-white rounded-[10px]" />
                  </div>
                </div>

                {/* Company and Business Stage fields - half width each */}
                <div className="flex flex-col md:flex-row items-start gap-[30px] w-full">
                  <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/2">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Company name
                    </label>
                    <Input className="h-12 bg-white rounded-[10px]" />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/2">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Business Stage
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 bg-white rounded-[10px]">
                        <span></span>
                        <ChevronDownIcon className="w-[29px] h-[29px]" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="growth">Growth</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Inquiry Type field - full width */}
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-col items-start justify-center gap-2 w-full">
                    <label className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-10 text-[15px]">
                      Inquiry Type
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 bg-white rounded-[10px]">
                        <span></span>
                        <ChevronDownIcon className="w-[29px] h-[29px]" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit button */}
                <Button className="px-4 py-3 bg-foundation-blackblack-10 rounded-[70px] [font-family:'Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-[429px] bg-gray-300">
          <img
            className="w-full h-full object-cover"
            alt="Line"
            src="/line-200.svg"
          />
        </div>

        {/* Our Offices Section */}
        <div className="flex flex-col items-center md:gap-10 gap-8">
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="[font-family:'Playfair',Helvetica] font-bold text-foundationblackblack-11 text-4xl text-center">
              Our Offices
            </h2>
          </div>

          <div className="flex flex-col items-start gap-10">
            {officeLocations.map((office, index) => (
              <Card
                key={index}
                className="p-[30px] bg-[#f0f0f0cc] rounded-[20px] border-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <h3 className="[font-family:'Lato',Helvetica] font-bold text-foundation-redred-10 text-2xl text-center">
                    {office.country}
                  </h3>

                  <p className="w-[268px] [font-family:'Inter',Helvetica] font-normal text-foundationblackblack-11 text-xl text-center">
                    {office.address}
                  </p>

                  <div className="flex items-start justify-center gap-2.5 w-full">
                    <MapPinIcon className="w-[19px] h-[19px]" />
                    <a
                      href="#"
                      className="[font-family:'Lato',Helvetica] font-normal text-foundation-blackblack-9 text-base text-center underline"
                    >
                      View on map
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
