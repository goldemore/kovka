import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar/Navbar2";
import ScrollToTop from "./components/common/ScrollToTop";
import NotFound from "./components/NotFound ";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <BrowserRouter basename="/">
      <ScrollToTop/>
      {/* <Navbar/> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
