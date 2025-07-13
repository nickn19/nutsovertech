import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Desktop/Home";
import Services from "./pages/Services/Index";
import IPAssets from "./pages/IPAssets";
import SalesEngine from "./pages/SalesEngine/SalesEngine";
import Insights from "./pages/Insights";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import BlogListing from "./pages/Blog/BlogListing";
import BlogDetails from "./pages/Blog/BlogDetails";
import MicroSaas from "./pages/Services/MicroSaas";
import AIConsulting from "./pages/Services/AIConsulting";
import SaasSolution from "./pages/Services/SaasSolution";
import TShapeGrowth from "./pages/Services/TShapeGrowth";
import Fouray from "./pages/IPAssets/Fouray";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/micro-saas" element={<MicroSaas />} />
          <Route path="services/ai-consulting" element={<AIConsulting />} />
          <Route path="services/saas-solution" element={<SaasSolution />} />
          <Route path="services/t-shape-growth" element={<TShapeGrowth />} />
          <Route path="ip-assets" element={<IPAssets />} />
          <Route path="ip-assets/fouray" element={<Fouray />} />
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
