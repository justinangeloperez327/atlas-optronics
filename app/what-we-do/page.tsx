import React from "react";
import HeroSection from "@/app/components/HeroSection";
import ServiceCard from "@/app/components/ServiceCard"; // Assuming you have this component
import { services } from "@/constants/services"; // Your services data
import Content from "@/app/components/Content";
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
			<Content>
				<section className="my-8">
					<h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<ServiceCard key={service.id} service={service} />
						))}
					</div>
				</section>

				<section className="my-8">
					<h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
					<p className="text-lg leading-8 text-center">
						Our mission is to provide the best-in-class optoelectronics and
						sensor solutions that empower our clients with advanced security and
						surveillance capabilities. We are driven by values such as
						integrity, innovation, and customer-centricity.
					</p>
				</section>

				<section className="my-8">
					<h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
					<ul className="list-disc pl-5">
						<li>Innovation - pushing the boundaries of what`s possible</li>
						<li>Integrity - maintaining honesty and transparency</li>
						<li>Quality - delivering excellence in every product</li>
						<li>Customer Focus - ensuring client satisfaction above all</li>
					</ul>
				</section>
			</Content>
		</>
	);
};

export default WhatWeDo;
