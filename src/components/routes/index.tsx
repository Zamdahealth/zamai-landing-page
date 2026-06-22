// import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Pricing from "../../pages/Pricing/Pricing";
import Waitlist from "../../pages/Waitlist/Waitlist";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";



const RootRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    }
  }, [pathname, hash]);

  return null;
};

export default RootRouter;

