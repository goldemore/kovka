import React from "react";
import Hero from "../components/HomePage/Hero";
import ShortAbout from "../components/HomePage/ShortAbout";

import Separator from "../components/Separator";
import Project from "../components/HomePage/Project";
import Project2 from "../components/HomePage/Project2";

const Home = () => {
  return (
    <>
      <Hero />
      <Separator />
      <ShortAbout />
      {/* <Project /> */}
      <Project2/>
    </>
  );
};

export default Home;
