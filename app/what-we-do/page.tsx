import React from "react";
import HeroSection from "@/app/components/HeroSection";
import { solutions } from "@/constants/solutions";
import HeroTitle from "../components/HeroTitle";

export const metadata = {
	title: "What We Do",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const WhatWeDo = () => {
	return (
		<>
			<HeroSection imageSrc="/home.jpg">
				<div className="text-center">
					<HeroTitle title={metadata.title} />
					<p className="mt-4 text-lg leading-8 text-slate-300 mb-4">
						{metadata.description}
					</p>
				</div>
			</HeroSection>
			{solutions && solutions.length > 0 && solutions.map((solution, index) => (
				<div key={index} className="relative flex h-screen  justify-center items-center">
					<div className="w-1/2 bg-blue-500 h-full items-center">
						<div className="relative">
							<h1 className="text-6xl font-bold">{solution.name}</h1>
						</div>
					</div>
					<div className="w-1/2">
						
					</div>
				</div>
			))}
		</>
	);
};

export default WhatWeDo;
