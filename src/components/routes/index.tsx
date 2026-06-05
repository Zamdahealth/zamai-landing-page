// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
// import Pricing from "../../pages/Pricing/Pricing";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";



const RootRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRouter;
