import React from "react";
import HeroSection from "@/app/components/HeroSection";
import HeroTitle from "@/app/components/HeroTitle";
import { products } from "@/constants/products";
import ItemList from "../components/ItemList";
export const metadata = {
	title: "Products",
	description:
		"Our main areas of activity include ISR sensors, solutions for the electromagnetic spectrum and mission avionics systems. We combine mission-critical technologies into package solutions that substantially improve detection capabilities through sensor and data fusion. In this way, HENSOLDT helps to avert threats to armed forces and society.",

};

const ProductsPage = () => {
	return (
		<>
			<HeroSection imageSrc="/products/background.jpg">
				<div className="text-center">
					<HeroTitle title={metadata.title} />
					<div className="container mx-auto">
						<p className="mt-4 text-lg leading-8 text-slate-200 mb-4">
							{metadata.description}
						</p>
					</div>
				</div>
			</HeroSection>
			<ItemList products={products || []}></ItemList>
		</>
	);
};

export default ProductsPage;
