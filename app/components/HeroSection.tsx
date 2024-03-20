import React from "react";
import Image from "next/image";

interface Props {
	imageSrc: string;
	children: React.ReactNode;
}

const HeroSection = ({ imageSrc, children }: Props) => {
	return (
		<div className="relative h-screen w-full flex items-center justify-center bg-gray-300">
            <div className="h-50 mx-auto z-20">
                <div className="text-white items-center">
                    {children}
                </div>
            </div>
            <div className="absolute inset-0 z-10">
                <Image
                    className="w-full h-full object-fill"
                    src={''}
                    width={1920}
                    height={1080}
                    alt="Atlas hero section background"
                />
            </div>
            
        </div>
	);
};

export default HeroSection;
