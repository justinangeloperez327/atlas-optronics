import React from "react";
import HeroSection from "@/app/components/HeroSection";
import ServiceCard from "@/app/components/ServiceCard"; // Assuming you have this component
import { services } from "@/constants/services"; // Your services data

const WhatWeDo = () => {
	return (
		<>
			<HeroSection imageSrc="/what-we-do.png">
				<h1 className="text-4xl font-bold text-white">What We Do</h1>
				<p className="mt-4 text-lg text-white">
					Providing cutting-edge solutions in the realm of Optronics.
				</p>
			</HeroSection>

			<div className="container mx-auto px-4 md:px-12 py-10">
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
						<li>Innovation - pushing the boundaries of what's possible</li>
						<li>Integrity - maintaining honesty and transparency</li>
						<li>Quality - delivering excellence in every product</li>
						<li>Customer Focus - ensuring client satisfaction above all</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default WhatWeDo;
