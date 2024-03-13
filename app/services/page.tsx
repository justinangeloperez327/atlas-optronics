import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services, description } from "@/constants/services";
import HeroSection from "@/app/components/HeroSection";
import HeroTitle from "../components/HeroTitle";
import ServicesSection from "../components/ServicesSection";

export const metadata = {
	title: 'Services',
	description:
		"Explore our range of services designed to meet your security needs.",
};

const ServicesPage = () => {
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
				<ServicesSection />
			</div>
		</>
	);
};

export default ServicesPage;
