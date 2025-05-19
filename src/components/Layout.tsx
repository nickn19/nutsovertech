import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow bg-foundation-redred-2 overflow-hidden ">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
};

export default Layout; 