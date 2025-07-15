// components/ContactUs.tsx

import { useState } from "react";
import {
  ChevronDownIcon,
  MapPinIcon
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export const ContactUs = (): JSX.Element => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "",
    inquiry: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          stage: "",
          inquiry: "",
        });
      } else {
        const err = await res.json();
        alert("Error: " + err.error);
      }
    } catch (e) {
      alert("Unexpected error!");
    } finally {
      setSubmitting(false);
    }
  };

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
        <div className="flex flex-col items-center justify-center gap-10 w-full md:w-auto">
          <h2 className="font-bold text-4xl text-center text-foundationblackblack-11">
            Get in Touch
          </h2>
          <p className="text-xl text-center text-foundationblackblack-11">
            Let&apos;s connect and explore how AI can drive your growth—reach
            out to us today!
          </p>

          <Card className="w-full md:w-[612px] bg-foundation-redred-6 rounded-2xl border-none">
            <CardContent className="flex flex-col gap-6 p-5">
              <div className="flex flex-col gap-2 w-full">
                <label>Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-12 bg-white rounded-[10px]"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-[30px] w-full">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label>Email</label>
                  <Input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-12 bg-white rounded-[10px]"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label>Phone number</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-12 bg-white rounded-[10px]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[30px] w-full">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label>Company name</label>
                  <Input
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="h-12 bg-white rounded-[10px]"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label>Business Stage</label>
                  <Select
                    onValueChange={(val) => handleChange("stage", val)}
                    value={form.stage}
                  >
                    <SelectTrigger className="h-12 bg-white rounded-[10px]">
                      <SelectValue placeholder="Select stage" />
                      <ChevronDownIcon className="w-[24px] h-[24px]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label>Inquiry Type</label>
                <Select
                  onValueChange={(val) => handleChange("inquiry", val)}
                  value={form.inquiry}
                >
                  <SelectTrigger className="h-12 bg-white rounded-[10px]">
                    <SelectValue placeholder="Select inquiry" />
                    <ChevronDownIcon className="w-[24px] h-[24px]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                disabled={submitting}
                onClick={handleSubmit}
                className="px-4 py-3 bg-foundation-blackblack-10 rounded-[70px]"
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="hidden md:block w-px h-[429px] bg-gray-300" />

        <div className="flex flex-col items-center md:gap-10 gap-8">
          <h2 className="font-bold text-4xl text-center text-foundationblackblack-11">
            Our Offices
          </h2>

          <div className="flex flex-col gap-10">
            {officeLocations.map((office, index) => (
              <Card
                key={index}
                className="p-[30px] bg-[#f0f0f0cc] rounded-[20px] border-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <h3 className="font-bold text-2xl text-foundation-redred-10 text-center">
                    {office.country}
                  </h3>
                  <p className="text-xl text-center text-foundationblackblack-11 w-[268px]">
                    {office.address}
                  </p>
                  <div className="flex items-center justify-center gap-2.5">
                    <MapPinIcon className="w-[19px] h-[19px]" />
                    <a className="text-base underline" href="#">
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
