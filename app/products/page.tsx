import React from "react";
import HeroSection from "@/app/components/HeroSection";
import HeroTitle from "../components/HeroTitle";
import ProductsSection from "../components/ProductsSection";

export const metadata = {
	title: "Products",
	description:
		"Our main areas of activity include ISR sensors, solutions for the electromagnetic spectrum and mission avionics systems. We combine mission-critical technologies into package solutions that substantially improve detection capabilities through sensor and data fusion. In this way, HENSOLDT helps to avert threats to armed forces and society.",

};

const ProductsPage = () => {
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
				<ProductsSection />
			</div>
		</>
	);
};

export default ProductsPage;
