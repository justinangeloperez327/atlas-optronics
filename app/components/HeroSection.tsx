import React from "react";

interface Props {
  title?: string;
  backgroundImage?: string;
}

const HeroSection = ({ title, backgroundImage }: Props) => {
  return (
    <div
      className="relative px-24 lg:py-64 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: "32rem",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-2xl text-center pb-12">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
