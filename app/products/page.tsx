import React from "react";
import { description } from "@/constants/products";
import HeroSection from "@/app/components/HeroSection";
import ProductList from "@/app/components/ProductList";
import Content from "@/app/components/Content";
import Title from "@/app/components/TitleSection";
import HeroTitle from "../components/HeroTitle";

export const metadata = {
	title: "Products",
	description:
		"Discover cutting-edge security solutions with Atlas Optronics. Browse our range of products tailored to your safety needs.",
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
