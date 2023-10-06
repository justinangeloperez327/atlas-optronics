import React from "react";

interface Props {
  title?: string;
  backgroundImage?: string;
}

const HeroSection = ({ title, backgroundImage }: Props) => {
  return (
    <div
      className="relative px-24 lg:py-40 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: "28rem",
        paddingBottom: "28rem",
      }}
    >
      <div className="relative mx-auto max-w-2xl text-center ">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
