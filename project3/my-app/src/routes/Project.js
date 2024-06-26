import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT." text="Some of my most recent works" />
      <Footer />
    </div>
  );
};

export default Project;
