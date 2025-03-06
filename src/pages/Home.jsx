import React from "react";
import Hero from "../components/HomePage/Hero";
import ShortAbout from "../components/HomePage/ShortAbout";

import Separator from "../components/Separator";
import Project from "../components/HomePage/Project";

const Home = () => {
  return (
    <>
      <Hero />
      <Separator />
      <ShortAbout />
      <Project />
    </>
  );
};

export default Home;
