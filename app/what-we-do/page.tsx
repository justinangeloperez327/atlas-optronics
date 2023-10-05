import React from "react";
import HeroSection from "@/app/components/HeroSection";

const WhatWeDo = () => {
  return (
    <>
      <HeroSection
        title="What we do"
        backgroundImage="/helicopter.svg"
      ></HeroSection>
      <div className="container justify-center h-screen mx-auto"></div>
    </>
  );
};

export default WhatWeDo;
