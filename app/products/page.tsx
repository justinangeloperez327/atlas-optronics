import React from "react";
import type { Metadata } from "next";
import { description } from "@/constants/products";
import HeroSection from "@/app/components/HeroSection";
import ProductList from "@/app/components/ProductList";
import Content from "@/app/components/Content";
import Title from "@/app/components/TitleSection";

export const metadata: Metadata = {
	title: "Explore Our Products | Atlas Optronics",
	description:
		"Discover cutting-edge security solutions with Atlas Optronics. Browse our range of products tailored to your safety needs.",
};

const ProductsPage = () => {
	return (
		<>
			<HeroSection imageSrc="/products.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Our Products
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						{metadata.description}
					</p>
				</div>
			</HeroSection>

			<Content>
				<div className="my-2">
					<Title title="Products" />
					<p className="text-lg leading-8">{description}</p>
				</div>
				<ProductList />
			</Content>
		</>
	);
};

export default ProductsPage;
