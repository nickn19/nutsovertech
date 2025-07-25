import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // 👈 add useLocation
import Header from "./Header";
import Footer from "./Footer";
import Loader3D from "./ui/loader3d";

const Layout = (): JSX.Element => {
  const [siteLoaded, setSiteLoaded] = useState(false);
  const location = useLocation(); // 👈 get current route

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // 👈 trigger when pathname changes

  useEffect(() => {
    if (document.readyState === "complete") {
      setSiteLoaded(true);
      return;
    }
    const onLoad = () => setSiteLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* {!siteLoaded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90">
          <Loader3D />
        </div>
      )} */}
      <Header />
      <main className="flex-grow bg-foundation-redred-2 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
