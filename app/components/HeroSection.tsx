import React from "react";

interface Props {
  title?: string;
  description?: string;
  backgroundImage?: string;
  opacity?: number;
}

const HeroSection = ({ title, description, backgroundImage, opacity = 0.4 }: Props) => {

  const heroSectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    opacity: opacity, 
  };

  return (
    <div className="relative px-6 py-40 lg:px-8" style={heroSectionStyle}>
      <div style={overlayStyle}></div>
      <div className="mx-auto max-w-2xl text-center pb-10 pt-10 lg:pt-40">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
      </div>
      <div className="lg:mx-55 md:mx-40 sm:mx-10 xs:mx-5">
        <p className="text-lg leading-8 text-white">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
