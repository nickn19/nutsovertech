import React from "react";

const SalesEngine = (): JSX.Element => {
  return (
    <>
      <div className="relative w-full py-20 flex flex-col items-center">
        {/* Background and overlay for hero section */}
        <div className="absolute inset-0 bg-[url(../frame-2147224339.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#f5f5f587]" />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
          <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-5xl text-center leading-tight mb-6">
            Sales Engine
          </h1>
          <p className="font-['Lato',Helvetica] font-light text-foundation-blackblack-10 text-lg md:text-xl text-center leading-relaxed mb-10">
            Supercharge your sales with our AI-powered solutions designed to optimize every step of your sales process.
          </p>
        </div>
      </div>

      {/* Sales Engine content */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-3xl md:text-4xl text-center mb-12">
            AI-Driven Sales Acceleration
          </h2>
          
          <p className="font-['Lato',Helvetica] text-center text-xl mb-12">
            Coming Soon: Our Sales Engine solutions
          </p>
        </div>
      </section>
    </>
  );
};

export default SalesEngine; 