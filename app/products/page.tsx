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
				<h1 className="text-4xl font-bold text-white">Our Products</h1>
				<p className="mt-2 text-lg text-white">{metadata.description}</p>
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
