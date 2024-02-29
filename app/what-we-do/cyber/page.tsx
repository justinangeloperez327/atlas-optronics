import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Content from "@/app/components/Content";

export const metadata = {
	title: "What We Do | Cyber",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const Cyber = () => {
	return (
		<>
			<HeroSection imageSrc="/cyber-landscape.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Cyber
					</h1>
				</div>
			</HeroSection>
			<Content>
				<div></div>
			</Content>
		</>
	);
};

export default Cyber;
