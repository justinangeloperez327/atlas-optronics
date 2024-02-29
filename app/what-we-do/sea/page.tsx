import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Content from "@/app/components/Content";

export const metadata = {
	title: "What We Do | Sea",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const Sea = () => {
	return (
		<>
			<HeroSection imageSrc="/sea-landscape.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Sea
					</h1>
				</div>
			</HeroSection>
			<Content>
				<div></div>
			</Content>
		</>
	);
};

export default Sea;
