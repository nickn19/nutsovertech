import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const Contact = (): JSX.Element => {
  return (
    <>
      <div className="relative w-full py-20 flex flex-col items-center">
        {/* Background and overlay for hero section */}
        <div className="absolute inset-0 bg-[url(../frame-2147224339.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#f5f5f587]" />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
          <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-5xl text-center leading-tight mb-6">
            Contact Us
          </h1>
          <p className="font-['Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-xl text-center leading-relaxed mb-10">
            Get in touch with our team to discuss how we can help accelerate your business with AI-driven solutions.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-2xl md:text-3xl mb-6">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-['Lato',Helvetica] font-medium text-foundationblackblack-11 text-base">
                  Full Name *
                </label>
                <Input 
                  className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] font-['Lato',Helvetica]" 
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-['Lato',Helvetica] font-medium text-foundationblackblack-11 text-base">
                  Email Address *
                </label>
                <Input 
                  className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] font-['Lato',Helvetica]" 
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-['Lato',Helvetica] font-medium text-foundationblackblack-11 text-base">
                  Company
                </label>
                <Input 
                  className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] font-['Lato',Helvetica]" 
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-['Lato',Helvetica] font-medium text-foundationblackblack-11 text-base">
                  Message *
                </label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] font-['Lato',Helvetica] min-h-32" 
                  placeholder="Tell us about your project or inquiry"
                  required
                />
              </div>
              
              <Button className="w-full px-4 py-3 bg-foundationredred-13 rounded-[70px] font-['Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base">
                Submit Message
              </Button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-2xl md:text-3xl mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-foundation-blackblack-3 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-lg mb-1">
                    Phone
                  </h3>
                  <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-foundation-blackblack-3 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-lg mb-1">
                    Email
                  </h3>
                  <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                    info@nutsovertech.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-foundation-blackblack-3 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Lato',Helvetica] font-bold text-foundationblackblack-11 text-lg mb-1">
                    Location
                  </h3>
                  <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10">
                    123 AI Boulevard, Tech District<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 