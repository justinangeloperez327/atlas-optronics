import React from "react";
import Content from "@/app/components/Content";
import TitleSection from "@/app/components/TitleSection"; // Assuming you have a TitleSection component
import HeroSection from "../components/HeroSection";
import HeroTitle from "../components/HeroTitle";

export const metadata = {
	title: "Who We Are",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const WhoWeArePage = () => {
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
			<div className="relative mt-20">
				<div className="container bg-primary size-6/12 mx-auto p-6 mb-5">
					<div className="mb-2 md:mb-10 ml-4">
						<h1 className="text-4xl mb-8">HENSOLDT – The Sensor Solutions House</h1>
						<p className="text-xl pr-2 md:pr-32 lg:pr-40 xl:pr-96">HENSOLDT’s main areas of activity include intelligence and reconnaissance sensors, solutions for controlling the electromagnetic spectrum and mission avionics systems. Our broadly diversified product portfolio is geared towards customers in the defence and security arenas and covers the entire spectrum for air, sea and land missions. HENSOLDT’s solutions are deployed on various platforms, including helicopters, fixed-wing aircraft, unmanned aerial vehicles, ships and submarines, armoured vehicles and satellites.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhoWeArePage;
