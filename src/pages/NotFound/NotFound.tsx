import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const NotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20">
      <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-6xl text-center mb-6">
        404
      </h1>
      <h2 className="font-['Playfair',Helvetica] font-bold text-foundationblackblack-11 text-2xl md:text-3xl text-center mb-8">
        Page Not Found
      </h2>
      <p className="font-['Lato',Helvetica] font-light text-foundationblackblack-10 text-lg text-center max-w-xl mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button className="px-8 py-3 bg-foundationredred-13 rounded-[70px] font-['Lato',Helvetica] font-medium text-foundation-blackblack-1 text-base" asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFound; 