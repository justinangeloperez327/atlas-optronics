import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services, description } from "@/constants/services";
import HeroSection from "@/app/components/HeroSection";
import Content from "@/app/components/Content";
import ServiceCard from "@/app/components/ServiceCard";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Explore our range of services designed to meet your security needs.",
};

const ServicesPage = () => {
	return (
		<>
			<HeroSection imageSrc="/solutions.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Our Services
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						{metadata.description}
					</p>
				</div>
			</HeroSection>

			<Content>
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-center">What We Offer</h2>
					<p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
						At Atlas Optronics, we provide a variety of services to ensure your
						security. Explore our services below to find the perfect solution
						for your needs.
					</p>
				</section>

				<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-white rounded-lg drop-shadow-lg overflow-hidden"
						>
							<div className="relative h-48">
								<Image
									src={service.image || "/empty-image-sample.jpg"}
									alt={service.name}
									fill
									objectFit="contain"
								/>
							</div>
							<div className="p-4">
								<h3 className="text-xl font-semibold">{service.name}</h3>
								<p className="text-gray-600 mt-2">{service.description}</p>
							</div>
						</div>
					))}
				</section>

				<section className="my-12">
					<h2 className="text-3xl font-bold text-center">
						Client Testimonials
					</h2>
					{/* Add a carousel or list of testimonials here */}
				</section>

				<section className="my-12">
					<h2 className="text-3xl font-bold text-center">
						Frequently Asked Questions
					</h2>
					{/* Add an accordion or list of FAQs here */}
				</section>
			</Content>
		</>
	);
};

export default ServicesPage;
