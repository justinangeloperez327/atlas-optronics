import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Content from "@/app/components/Content";

export const metadata = {
	title: "What We Do | Space",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const Space = () => {
	return (
		<>
			<HeroSection imageSrc="/space-landscape.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Space
					</h1>
				</div>
			</HeroSection>
			<Content>
				<div></div>
			</Content>
		</>
	);
};

export default Space;
