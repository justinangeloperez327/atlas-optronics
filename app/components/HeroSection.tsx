import React from "react";
import Image from "next/image";

interface Props {
	imageSrc: string;
	children: React.ReactNode;
}

const HeroSection = ({ imageSrc, children }: Props) => {
	return (
		<div className="relative h-screen">
			<Image
				src={imageSrc}
				alt="Hero Background"
				layout="fill"
				objectFit="cover"
				quality={100}
				className="absolute inset-0 z-0"
			/>
			<div className="relative z-10 flex flex-col justify-center items-center h-full bg-black bg-opacity-30">
				{children}
			</div>
		</div>
	);
};

export default HeroSection;
