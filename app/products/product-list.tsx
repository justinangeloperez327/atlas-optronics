import React from "react";
import { products } from "@/constants/products";
import Image from "next/image";

const ProductCard = ({ product }) => {
	return (
		<li className="m-4 bg-white drop-shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
			<div className="aspect-w-1 aspect-h-1">
				<Image
					src={product.image || "/empty-image-placeholder.png"}
					alt={product.name}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-xl font-semibold">{product.name}</h3>
				<p className="text-gray-600">{product.description}</p>
			</div>
		</li>
	);
};

const ProductList = () => {
	return (
		<div className="container mx-auto my-10 p-4">
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product, index) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default ProductList;
