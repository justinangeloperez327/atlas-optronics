import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full h-screen bg-blue absolute z-10 opacity-30"></div>
        <Image className="w-full relative h-screen bg-gradient-to-l from-[#000000] object-cover" width={1250} height={1250} src='/plexus.jpg' alt="Hero" />
        <div className="absolute m-auto max-w-[1280px] w-full z-[11] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="m-auto w-full pt-28 max-w-[1280px]">
            <h1 data-aos="fade-right" className="uppercase font-bold text-white p-3 text-9xl max-w-[900px] md:text-7xl lg:p-0 lg:text-8xl">
              ATLAS OPTRONICS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
