import React from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";

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
