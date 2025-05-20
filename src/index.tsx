import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./screens/Desktop/Home";
import Services from "./screens/Services/Services";
import IPAssets from "./screens/IPAssets/IPAssets";
import SalesEngine from "./screens/SalesEngine/SalesEngine";
import Insights from "./screens/Insights/Insights";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import NotFound from "./screens/NotFound/NotFound";
import BlogListing from "./screens/Blog/BlogListing";
import BlogDetails from "./screens/Blog/BlogDetails";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="ip-assets" element={<IPAssets />} />
          <Route path="sales-engine" element={<SalesEngine />} />
          <Route path="insights" element={<Insights />} />
          <Route path="blog" element={<BlogListing />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
