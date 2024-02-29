import React from "react";
import Image from "next/image";

interface Props {
	imageSrc: string;
	children: React.ReactNode;
}

const HeroSection = ({ children }: Props) => {
	return (
		<div className="relative isolate px-6 mt-28 lg:px-8">
			<div className="absolute inset-0">

        <Image
          className="w-full h-full object-cover"
          src={'/atlas-bg.png'}
					fill
          alt="Background"
        />

        <div className="absolute inset-0 "></div>
      </div>
			<div className="relative z-10 container mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				{children}
			</div>
		</div>
	);
};

export default HeroSection;
